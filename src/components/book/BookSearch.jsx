import React, { useState, useMemo } from "react";
import { Search, X, ChevronRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { CHAPTER_CONTENT } from "./allChapterContent";

const CHAPTER_TITLES = {
  "preface": "Preface",
  "foreword-first": "Foreword to First Edition",
  "foreword-second": "Foreword to Second Edition",
  "foreword-third": "Foreword to Third Edition",
  "foreword-fourth": "Foreword to Fourth Edition",
  "doctors-opinion": "The Doctor's Opinion",
  "bills-story": "Chapter 1: Bill's Story",
  "there-is-solution": "Chapter 2: There Is a Solution",
  "more-about-alcoholism": "Chapter 3: More About Alcoholism",
  "we-agnostics": "Chapter 4: We Agnostics",
  "how-it-works": "Chapter 5: How It Works",
  "into-action": "Chapter 6: Into Action",
  "working-with-others": "Chapter 7: Working with Others",
  "to-wives": "Chapter 8: To Wives",
  "family-afterward": "Chapter 9: The Family Afterward",
  "to-employers": "Chapter 10: To Employers",
  "vision-for-you": "Chapter 11: A Vision for You",
  "tightrope": "Tightrope",
  "flooded-with-feeling": "Flooded with Feeling",
  "winner-takes-all": "Winner Takes All",
  "my-bottle-my-resentments-and-me": "My Bottle, My Resentments, and Me",
  "he-lived-only-to-drink": "He Lived Only to Drink",
  "safe-haven": "Safe Haven"
};

function highlightText(text, searchTerm) {
  if (!searchTerm) return text;
  
  const regex = new RegExp(`(${searchTerm.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
  const parts = text.split(regex);
  
  return parts.map((part, i) => 
    regex.test(part) ? (
      <mark key={i} className="bg-[#25DCE6]/40 text-[#FFFFFD] px-1 rounded">
        {part}
      </mark>
    ) : part
  );
}

function getContextSnippet(text, searchTerm, maxLength = 150) {
  const lowerText = text.toLowerCase();
  const lowerTerm = searchTerm.toLowerCase();
  const index = lowerText.indexOf(lowerTerm);
  
  if (index === -1) return text.substring(0, maxLength) + '...';
  
  const start = Math.max(0, index - 50);
  const end = Math.min(text.length, index + searchTerm.length + 100);
  
  let snippet = text.substring(start, end);
  if (start > 0) snippet = '...' + snippet;
  if (end < text.length) snippet = snippet + '...';
  
  return snippet;
}

export default function BookSearch({ onNavigate }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [isExpanded, setIsExpanded] = useState(false);

  const searchResults = useMemo(() => {
    if (!searchTerm || searchTerm.length < 2) return [];

    const results = [];
    const lowerSearchTerm = searchTerm.toLowerCase();

    Object.entries(CHAPTER_CONTENT).forEach(([chapterId, chapter]) => {
      const chapterTitle = CHAPTER_TITLES[chapterId] || chapterId;
      
      // Check if chapter title matches
      if (chapterTitle.toLowerCase().includes(lowerSearchTerm)) {
        results.push({
          chapterId,
          chapterTitle,
          type: 'title',
          snippet: chapterTitle,
          score: 100
        });
      }

      // Search through paragraphs
      chapter.paragraphs?.forEach((para, index) => {
        if (para.text.toLowerCase().includes(lowerSearchTerm)) {
          results.push({
            chapterId,
            chapterTitle,
            type: 'content',
            snippet: getContextSnippet(para.text, searchTerm),
            fullText: para.text,
            paragraphIndex: index,
            score: 50
          });
        }
      });
    });

    // Sort by score (title matches first) and limit results
    return results.sort((a, b) => b.score - a.score).slice(0, 50);
  }, [searchTerm]);

  const handleNavigate = (chapterId) => {
    const sectionPath = "/Section1";
    if (window.location.pathname !== sectionPath) {
      window.location.href = `${sectionPath}#${chapterId}`;
    } else {
      const element = document.getElementById(chapterId);
      if (element) {
        const offset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
    if (onNavigate) onNavigate();
    setIsExpanded(false);
  };

  return (
    <div className="relative">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#25DCE6]/60" />
        <Input
          type="text"
          placeholder="Search the Big Book..."
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setIsExpanded(true);
          }}
          onFocus={() => setIsExpanded(true)}
          className="pl-10 pr-10 bg-[#222A31] border-[#25DCE6]/30 text-[#FFFFFD] placeholder:text-[#25DCE6]/40 focus:border-[#25DCE6]"
        />
        {searchTerm && (
          <Button
            variant="ghost"
            size="icon"
            onClick={() => {
              setSearchTerm("");
              setIsExpanded(false);
            }}
            className="absolute right-1 top-1/2 -translate-y-1/2 h-7 w-7 text-[#25DCE6]/60 hover:text-[#25DCE6]"
          >
            <X className="w-4 h-4" />
          </Button>
        )}
      </div>

      {/* Search Results Dropdown */}
      {isExpanded && searchTerm && (
        <>
          <div 
            className="fixed inset-0 z-40"
            onClick={() => setIsExpanded(false)}
          />
          <div className="absolute top-full left-0 right-0 mt-2 bg-[#2A3440] border border-[#25DCE6]/20 rounded-lg shadow-2xl max-h-96 overflow-y-auto z-50">
            {searchResults.length === 0 ? (
              <div className="p-4 text-center text-[#FFFFFD]/60 text-sm">
                No results found for "{searchTerm}"
              </div>
            ) : (
              <div className="py-2">
                <div className="px-4 py-2 text-xs text-[#25DCE6]/60 font-semibold uppercase tracking-wider">
                  {searchResults.length} result{searchResults.length !== 1 ? 's' : ''}
                </div>
                {searchResults.map((result, index) => (
                  <button
                    key={`${result.chapterId}-${index}`}
                    onClick={() => handleNavigate(result.chapterId)}
                    className="w-full text-left px-4 py-3 hover:bg-[#25DCE6]/10 transition-colors border-t border-[#25DCE6]/10 group"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-semibold text-[#25DCE6] mb-1 flex items-center gap-2">
                          {result.type === 'title' && (
                            <span className="text-xs bg-[#25DCE6]/20 px-2 py-0.5 rounded">Title</span>
                          )}
                          {result.chapterTitle}
                        </div>
                        <div className="text-sm text-[#FFFFFD]/70 leading-relaxed">
                          {highlightText(result.snippet, searchTerm)}
                        </div>
                      </div>
                      <ChevronRight className="w-4 h-4 text-[#25DCE6]/40 group-hover:text-[#25DCE6] flex-shrink-0 mt-1" />
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}