// Full-text search index for the Big Book
// Uses shared cache from chapterLoader for efficiency

import { loadChapterContent } from './chapterLoader';

const ALL_CHAPTERS = [
  { id: "preface", title: "Preface", pages: "xi-xii" },
  { id: "foreword-first", title: "Foreword To First Edition", pages: "xiii-xiv" },
  { id: "foreword-second", title: "Foreword To Second Edition", pages: "xv-xxi" },
  { id: "foreword-third", title: "Foreword To Third Edition", pages: "xxii" },
  { id: "foreword-fourth", title: "Foreword To Fourth Edition", pages: "xxiii-xxiv" },
  { id: "doctors-opinion", title: "The Doctor's Opinion", pages: "xxv-xxxii" },
  { id: "bills-story", title: "Bill's Story", pages: "1-16", chapter: 1 },
  { id: "there-is-solution", title: "There Is A Solution", pages: "17-29", chapter: 2 },
  { id: "more-about-alcoholism", title: "More About Alcoholism", pages: "30-43", chapter: 3 },
  { id: "we-agnostics", title: "We Agnostics", pages: "44-57", chapter: 4 },
  { id: "how-it-works", title: "How It Works", pages: "58-71", chapter: 5 },
  { id: "into-action", title: "Into Action", pages: "72-88", chapter: 6 },
  { id: "working-with-others", title: "Working With Others", pages: "89-103", chapter: 7 },
  { id: "to-wives", title: "To Wives", pages: "104-121", chapter: 8 },
  { id: "family-afterward", title: "The Family Afterward", pages: "122-135", chapter: 9 },
  { id: "to-employers", title: "To Employers", pages: "136-150", chapter: 10 },
  { id: "vision-for-you", title: "A Vision For You", pages: "151-164", chapter: 11 },
  { id: "dr-bob-nightmare", title: "Doctor Bob's Nightmare", pages: "171-181" },
  { id: "appendices", title: "Appendices", pages: "561-575" },
];

// Search index cache - built on first search
let searchIndex = null;
let indexBuilding = false;
let indexPromise = null;

// Levenshtein distance for fuzzy matching
function levenshteinDistance(a, b) {
  const matrix = [];
  for (let i = 0; i <= b.length; i++) matrix[i] = [i];
  for (let j = 0; j <= a.length; j++) matrix[0][j] = j;
  
  for (let i = 1; i <= b.length; i++) {
    for (let j = 1; j <= a.length; j++) {
      if (b.charAt(i - 1) === a.charAt(j - 1)) {
        matrix[i][j] = matrix[i - 1][j - 1];
      } else {
        matrix[i][j] = Math.min(
          matrix[i - 1][j - 1] + 1,
          matrix[i][j - 1] + 1,
          matrix[i - 1][j] + 1
        );
      }
    }
  }
  return matrix[b.length][a.length];
}

// Check if words are similar (fuzzy match)
function isFuzzyMatch(word, target, threshold = 2) {
  if (word.length < 4) return word === target;
  if (target.includes(word) || word.includes(target)) return true;
  return levenshteinDistance(word.toLowerCase(), target.toLowerCase()) <= threshold;
}

// Extract text from paragraph
function extractParaText(para) {
  if (para.pageNum) return '';
  if (para.text) return para.text;
  if (para.segments) return para.segments.map(s => s.text).join('');
  return '';
}

// Build the search index using shared chapter cache
async function buildIndex() {
  if (searchIndex) return searchIndex;
  if (indexBuilding) return indexPromise;
  
  indexBuilding = true;
  indexPromise = (async () => {
    const index = {
      chapters: ALL_CHAPTERS,
      documents: [],
      wordIndex: {},
    };

    // Load all chapters using shared cache
    const loadPromises = ALL_CHAPTERS.map(ch => loadChapterContent(ch.id));
    const contents = await Promise.all(loadPromises);

    contents.forEach((content, i) => {
      const chapter = ALL_CHAPTERS[i];
      if (!content?.paragraphs) return;

      const fullText = content.paragraphs.map(extractParaText).join(' ');
      const words = fullText.toLowerCase()
        .replace(/[^\w\s]/g, ' ')
        .split(/\s+/)
        .filter(w => w.length > 2);
      
      const docIndex = index.documents.length;
      index.documents.push({
        chapterId: chapter.id,
        chapterTitle: chapter.title,
        pages: chapter.pages,
        text: fullText,
        wordSet: new Set(words)
      });

      const uniqueWords = new Set(words);
      for (const word of uniqueWords) {
        if (!index.wordIndex[word]) index.wordIndex[word] = [];
        index.wordIndex[word].push(docIndex);
      }
    });

    searchIndex = index;
    indexBuilding = false;
    return index;
  })();
  
  return indexPromise;
}

// Search function
export async function search(query, options = {}) {
  const { fuzzy = true, maxResults = 10 } = options;
  
  if (!query || query.trim().length < 2) return { chapters: [], content: [] };
  
  const index = await buildIndex();
  const queryLower = query.toLowerCase().trim();
  const queryWords = queryLower.replace(/[^\w\s]/g, ' ').split(/\s+/).filter(w => w.length > 2);
  
  // Search chapter titles
  const chapterResults = index.chapters.filter(ch => 
    ch.title.toLowerCase().includes(queryLower) ||
    ch.id.toLowerCase().includes(queryLower)
  ).slice(0, 4);

  // Search content
  const docScores = new Map(); // docIndex -> score
  
  for (const doc of index.documents) {
    let score = 0;
    
    // Exact phrase match (highest score)
    if (doc.text.toLowerCase().includes(queryLower)) {
      score += 100;
    }
    
    // Word matches
    for (const queryWord of queryWords) {
      // Exact word match
      if (doc.wordSet.has(queryWord)) {
        score += 10;
      } else if (fuzzy) {
        // Fuzzy match
        for (const docWord of doc.wordSet) {
          if (isFuzzyMatch(queryWord, docWord)) {
            score += 5;
            break;
          }
        }
      }
    }
    
    if (score > 0) {
      docScores.set(index.documents.indexOf(doc), score);
    }
  }

  // Sort by score and get top results
  const sortedDocs = Array.from(docScores.entries())
    .sort((a, b) => b[1] - a[1])
    .slice(0, maxResults);

  // Build content results with snippets
  const contentResults = sortedDocs.map(([docIdx, score]) => {
    const doc = index.documents[docIdx];
    const text = doc.text;
    const lowerText = text.toLowerCase();
    
    // Find best snippet
    let snippetStart = 0;
    let matchIndex = lowerText.indexOf(queryLower);
    
    if (matchIndex === -1) {
      // Find first matching word
      for (const word of queryWords) {
        const wordIdx = lowerText.indexOf(word);
        if (wordIdx !== -1) {
          matchIndex = wordIdx;
          break;
        }
      }
    }
    
    if (matchIndex !== -1) {
      snippetStart = Math.max(0, matchIndex - 40);
    }
    
    const snippetEnd = Math.min(text.length, snippetStart + 120);
    let snippet = text.slice(snippetStart, snippetEnd).trim();
    if (snippetStart > 0) snippet = '...' + snippet;
    if (snippetEnd < text.length) snippet = snippet + '...';

    return {
      chapterId: doc.chapterId,
      chapterTitle: doc.chapterTitle,
      pages: doc.pages,
      snippet,
      score,
      matchedQuery: queryLower
    };
  });

  return {
    chapters: chapterResults,
    content: contentResults
  };
}

// Highlight matches in text
export function highlightMatches(text, query) {
  if (!query || query.length < 2) return [{ text, highlight: false }];
  
  const queryLower = query.toLowerCase();
  const textLower = text.toLowerCase();
  const parts = [];
  let lastEnd = 0;
  
  // Find all occurrences
  let idx = textLower.indexOf(queryLower);
  while (idx !== -1) {
    if (idx > lastEnd) {
      parts.push({ text: text.slice(lastEnd, idx), highlight: false });
    }
    parts.push({ text: text.slice(idx, idx + query.length), highlight: true });
    lastEnd = idx + query.length;
    idx = textLower.indexOf(queryLower, lastEnd);
  }
  
  if (lastEnd < text.length) {
    parts.push({ text: text.slice(lastEnd), highlight: false });
  }
  
  return parts.length > 0 ? parts : [{ text, highlight: false }];
}

export { ALL_CHAPTERS };