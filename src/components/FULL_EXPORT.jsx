// ============================================
// AA BIG BOOK - COMPLETE EXPORT GUIDE
// ============================================
// This file contains instructions for copying ALL content to your new app

export const EXPORT_GUIDE = {
  
  // ==========================================
  // STEP 1: COPY ALL CONTENT FILES
  // ==========================================
  contentFiles: {
    location: "components/book/content/",
    totalFiles: "40+ JavaScript files",
    instructions: "Copy EVERY file from this folder to your new app",
    
    files: [
      // Main chapters (Section 1)
      "prefaceContent.js",
      "forewordFirstContent.js",
      "forewordSecondContent.js",
      "doctorsOpinionContent.js",
      "billsStoryContent.js",
      "thereIsSolutionContent.js",
      "moreAboutAlcoholismContent.js",
      "weAgnosticsContent.js",
      "howItWorksContent.js",
      "intoActionContent.js",
      "workingWithOthersContent.js",
      "toWivesContent.js",
      "familyAfterwardContent.js",
      "toEmployersContent.js",
      "visionForYouContent.js",
      
      // Personal stories (Sections 8 & 9)
      "aaTaughtHimContent.js",
      "aaTaughtHimSobrietyContent.js",
      "anotherChanceContent.js",
      "buildingNewLifeContent.js",
      "emptyOnTheInsideContent.js",
      "freedomFromBondageContent.js",
      "groundedContent.js",
      "gutterBravadoContent.js",
      "lateStartContent.js",
      "onTheMoveContent.js",
      "twiceGiftedContent.js",
      "visionOfRecoveryContent.js",
      // ... plus 30+ more personal story files
      
      // Appendices (Section 10)
      "appendicesContent.js"
    ]
  },
  
  // ==========================================
  // STEP 2: COPY SUPPORT FILES
  // ==========================================
  supportFiles: {
    location: "components/book/",
    files: [
      {
        name: "dictionaryData.js",
        description: "2,460+ AA term definitions",
        important: "This contains ALL dictionary tooltips"
      },
      {
        name: "TermTooltip.js",
        description: "Component that renders dictionary tooltips",
        important: "Required for interactive term definitions"
      },
      {
        name: "chapterLoader.js",
        description: "Lazy loads chapter content",
        important: "Maps chapter IDs to content files"
      },
      {
        name: "ChapterContent.jsx",
        description: "Main component that renders chapters",
        important: "This displays the formatted book content"
      },
      {
        name: "searchIndex.js",
        description: "Search functionality",
        important: "Enables full-text search"
      }
    ]
  },
  
  // ==========================================
  // STEP 3: COPY ENTITY SCHEMAS
  // ==========================================
  entities: {
    location: "entities/",
    instructions: "Copy these JSON schema files",
    files: [
      "UserSettings.json",
      "Bookmark.json",
      "UserHighlight.json",
      "Note.json",
      "ReadingProgress.json",
      "Collection.json",
      "SearchHistory.json"
    ]
  },
  
  // ==========================================
  // STEP 4: COPY PAGES
  // ==========================================
  pages: {
    location: "pages/",
    files: [
      "Home.js - Table of contents",
      "Section1.js - Main chapters (1-11)",
      "Section8.js - Personal stories Part I",
      "Section9.js - Personal stories Part II & III",
      "Section10.js - Appendices"
    ]
  },
  
  // ==========================================
  // STEP 5: COPY LAYOUT
  // ==========================================
  layout: {
    file: "Layout.js",
    includes: [
      "CSS for term tooltips",
      "Font imports (Bebas Neue, Lato)",
      "Glass morphism styling",
      "Modal styling for dictionary popups"
    ]
  },
  
  // ==========================================
  // HIGHLIGHT SYSTEM
  // ==========================================
  highlights: {
    orange: "The Twelve Steps of AA",
    blue: "The Promises (results of working the steps)",
    green: "Prayers and spiritual practices",
    pink: "Tab references and key concepts",
    
    exampleInContent: {
      segments: [
        { text: "Regular text " },
        { text: "Step 1", highlight: "orange" },
        { text: " - We admitted we were powerless over alcohol" }
      ]
    }
  },
  
  // ==========================================
  // DICTIONARY SYSTEM
  // ==========================================
  dictionary: {
    totalTerms: "2,460+ definitions",
    examples: {
      "acceptance": "Agreement / taking / approval / enduring without protest",
      "faith": "Firm belief in something for which there is no logical proof",
      "fellowship": "Members of AA / the combined membership of AA",
      "gratitude": "Appreciative awareness and thankfulness",
      "honesty": "Truthfulness / directness / openness / sincerity",
      "humility": "Being humble / absence of self-pride or self-will",
      "recovery": "Regaining health, self-awareness, balance in life",
      "resentment": "Persistent feeling of ill will and suppressed anger",
      "serenity": "Calm / quiet / peaceful / peace of mind",
      "spiritual": "Of the spirit or soul, not material matters",
      "willingness": "Readiness from exercise of free will"
    },
    
    howItWorks: `
      1. TermTooltip.js detects known terms in text
      2. Wraps them in clickable spans
      3. On click, shows modal with definition
      4. Modal is mobile-optimized
    `
  },
  
  // ==========================================
  // CONTENT STRUCTURE
  // ==========================================
  contentFormat: {
    description: "Each chapter file exports an object with paragraphs array",
    
    exampleFile: `
      export const billsStoryContent = {
        paragraphs: [
          // Simple text
          { text: "War fever ran high..." },
          
          // Page number marker
          { pageNum: "1" },
          
          // Text with highlights
          {
            segments: [
              { text: "Regular text " },
              { text: "highlighted", highlight: "orange" },
              { text: " more text" }
            ]
          },
          
          // Bold text
          {
            segments: [
              { text: "Regular " },
              { text: "bold text", bold: true }
            ]
          }
        ]
      };
    `
  },
  
  // ==========================================
  // QUICK START GUIDE
  // ==========================================
  quickStart: `
    1. In your OLD app dashboard:
       - Navigate to each file listed above
       - Copy the entire file content
    
    2. In your NEW app dashboard:
       - Create the same folder structure
       - Create new files with same names
       - Paste the content
    
    3. Key files to copy (in order):
       ✓ ALL files in components/book/content/ (40+ files)
       ✓ components/book/dictionaryData.js
       ✓ components/book/TermTooltip.js  
       ✓ components/book/chapterLoader.js
       ✓ components/book/ChapterContent.jsx
       ✓ ALL entity JSON schemas
       ✓ Layout.js
       ✓ pages/Home.js
       ✓ pages/Section1.js (and other sections)
    
    4. That's it! Your content will work in the new app.
  `,
  
  // ==========================================
  // USAGE IN NEW APP
  // ==========================================
  howToUse: `
    After copying all files, use ChapterContent like this:
    
    import ChapterContent from "../components/book/ChapterContent";
    import { loadChapterContent } from "../components/book/chapterLoader";
    
    function MyPage() {
      const [content, setContent] = useState(null);
      
      useEffect(() => {
        loadChapterContent("bills-story").then(setContent);
      }, []);
      
      return (
        <ChapterContent 
          chapter={{
            id: "bills-story",
            title: "Bill's Story",
            pageNum: "1"
          }}
          sectionRoute="Section1"
        />
      );
    }
  `
};

// ==========================================
// CHECKLIST FOR COPYING
// ==========================================
export const COPY_CHECKLIST = {
  step1: "✓ Copy all 40+ content files from components/book/content/",
  step2: "✓ Copy dictionaryData.js (2,460+ terms)",
  step3: "✓ Copy TermTooltip.js",
  step4: "✓ Copy chapterLoader.js",
  step5: "✓ Copy ChapterContent.jsx",
  step6: "✓ Copy searchIndex.js",
  step7: "✓ Copy all 7 entity JSON schemas",
  step8: "✓ Copy Layout.js",
  step9: "✓ Copy all page files (Home.js, Section1.js, etc.)",
  step10: "✓ Test in new app - it should work!"
};

export default EXPORT_GUIDE;