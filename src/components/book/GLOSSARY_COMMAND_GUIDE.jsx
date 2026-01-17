/**
 * AA BIG BOOK GLOSSARY TERM PROCESSOR
 * MASTER COMMAND: 100% First-Time Success Framework
 * 
 * MISSION:
 * Add purple-highlighted glossary terms with popup definitions throughout 
 * the AA Big Book WITHOUT modifying existing text, shortening content, 
 * or interfering with already-processed dictionary terms.
 */

// CRITICAL CONSTRAINTS
const CONSTRAINTS = {
  noTextModification: "Never condense, rewrite, or improve existing Big Book text",
  preserveFormatting: "Keep all existing paragraph breaks, page numbers, and structure EXACTLY as is",
  dictionaryPriority: "If term appears in dictionary1930sTermsData.js, SKIP it and leave untouched",
  isolationPrinciple: "Only wrap specific term text with purple styling + popup, nothing adjacent",
  mobileFirst: "All popup definitions already condensed for iPhone (max ~2-3 sentences, max 60-70 chars/line)",
  noUnderlines: "Purple text only, no underline decoration"
};

// COLOR & STYLING
const STYLING = {
  textColor: "#9333EA or #a855f7",
  fontWeight: "Bold",
  underline: "NONE",
  popupWindow: "Identical to DictionaryTermProcessor (blue border, white background, dark header)",
  headerBackground: "#222A31",
  headerText: "White, bold",
  border: "3px solid #9333EA",
  definitionTextColor: "#333333"
};

// IMPORT STRUCTURE
const IMPORTS = `
import { keyTermsData, findKeyTerm, checkDictionaryConflict } from '@/components/book/keyTermsData.js';
import { isTermInDictionary } from '@/components/book/dictionary1930sTermsData.js';
`;

// CONFLICT DETECTION ALGORITHM
const CONFLICT_DETECTION = `
// BEFORE adding any glossary term:
if (isTermInDictionary(word)) {
  // SKIP - already in dictionary
  continue;
} else {
  // SAFE - add purple popup wrapper
  applyPurpleGlossaryWrapper(word);
}
`;

// CSS ADDITION TO LAYOUT.JS
const CSS_ADDITIONS = `
/* Purple Glossary Terms */
.glossary-term {
  color: #9333EA;
  font-weight: bold;
  text-decoration: none;
  cursor: pointer;
  border-bottom: 2px solid transparent;
  transition: border-bottom 0.2s;
  display: inline;
}

.glossary-term:hover {
  border-bottom: 2px solid #9333EA;
}

/* Purple Glossary Modal */
.glossary-modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999999;
  padding: 20px;
}

.glossary-modal-popup {
  background: #ffffff;
  border-radius: 16px;
  border: 3px solid #9333EA;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
  max-width: 320px;
  width: calc(100% - 40px);
  padding: 0;
  overflow: hidden;
  max-height: calc(100vh - 80px);
  overflow-y: auto;
}

.glossary-modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 18px;
  background: #222A31;
  border-bottom: 2px solid #9333EA;
  position: sticky;
  top: 0;
}

.glossary-modal-term {
  font-weight: bold;
  font-size: 1.2em;
  color: #ffffff;
  text-transform: capitalize;
}

.glossary-modal-definition {
  padding: 16px 18px;
  font-size: 1em;
  line-height: 1.6;
  color: #333333;
  background: #ffffff;
}

.glossary-modal-close {
  background: #9333EA;
  border: none;
  color: #ffffff;
  font-size: 1.5em;
  cursor: pointer;
  line-height: 1;
  padding: 0;
  width: 40px;
  height: 40px;
  min-width: 40px;
  min-height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  font-weight: bold;
  flex-shrink: 0;
}

.glossary-modal-close:hover {
  background: #7e22ce;
}
`;

// EXECUTION WORKFLOW
const EXECUTION_WORKFLOW = {
  phase1Setup: [
    "Read glossary term requirements",
    "Import keyTermsData.js",
    "Update DictionaryTermProcessor with: Purple glossary wrapper component, Conflict detection logic, Purple CSS styling"
  ],
  phase2ContentApplication: [
    "For each content file:",
    "1. Read content file",
    "2. Identify all glossary terms",
    "3. Check each against dictionary (skip if conflict)",
    "4. Wrap term with GlossaryTerm component",
    "5. Preserve all original formatting",
    "6. Test no text modification occurred"
  ],
  phase3Testing: [
    "Load each chapter in preview",
    "Click 3-5 random glossary terms",
    "Verify popup displays correctly",
    "Verify text is purple (#9333EA)",
    "Verify no underline appears",
    "Verify mobile responsive"
  ]
};

// MISTAKES TO AVOID
const MISTAKES_TO_AVOID = [
  "Condensing text - preserve original wording exactly",
  "Removing glossary terms if in dictionary - skip those",
  "Adding underlines - glossary terms are BOLD PURPLE ONLY",
  "Forgetting word boundaries - use regex: \\b{term}\\b",
  "Modifying popup text - use EXACTLY what's in keyTermsData.js",
  "Breaking paragraph structure - keep all pageNum markers and {segments} intact",
  "Duplicate wrapping - same term shouldn't have double wrappers",
  "Color variations - use #9333EA consistently",
];

// SUCCESS INDICATORS
const SUCCESS_INDICATORS = [
  "Original Big Book text remains 100% intact",
  "Only glossary term words are colored purple",
  "Popup appears on click (not hover)",
  "Definitions match keyTermsData.js exactly",
  "No dictionary conflicts",
  "Mobile responsive on all iPhone sizes"
];

// QUALITY ASSURANCE CHECKLIST
const QA_CHECKLIST = [
  "No Dictionary Conflicts - Check glossary term against dictionary1930sTermsData",
  "No Text Modified - Original text unchanged, only wrapped with styling",
  "Purple Color Applied - Terms display in #9333EA or #a855f7 purple",
  "No Underlines - Hover effect is subtle border-bottom, not text-decoration",
  "Mobile Optimized - Test popup fits on iPhone SE (375px) and iPhone 12/13 (390px)",
  "Popup Readable - Definition text clearly visible, no text cutoff",
  "Modal Closes - X button works, clicking overlay closes modal",
  "No Nested Popups - Glossary terms inside glossary terms are impossible",
  "Page Numbers Intact - { pageNum: 'xi' } stays untouched",
  "Paragraph Structure - All {segments} and {highlights} preserved exactly"
];

// MAIN COMMAND FOR OTHER AI
const MAIN_COMMAND = `
"Add purple glossary term popups to the AA Big Book using keyTermsData.js.

FOR EACH GLOSSARY TERM:
1. Check if term exists in dictionary1930sTermsData → if YES, SKIP
2. Find exact term matches in content (case-insensitive, word boundaries only)
3. Wrap ONLY the term word with GlossaryTerm component
4. Use definition from keyTermsData.js exactly as-is
5. Apply purple color #9333EA, bold, NO underline
6. Do NOT modify surrounding text
7. Preserve all paragraph structure and formatting

CONFLICT DETECTION:
import { isTermInDictionary } from dictionary1930sTermsData;
if (isTermInDictionary(term)) { skip }

MOBILE OPTIMIZATION:
All definitions already condensed in keyTermsData.js
No additional shrinking needed
Test on iPhone SE (375px) and iPhone 12+ (430px)

QUALITY CHECK:
- Text unchanged except term wrapping
- Purple color applied to terms only
- No underlines on terms
- Popup modal appears on click
- Close button works
- Modal responsive on all sizes"
`;

export {
  CONSTRAINTS,
  STYLING,
  IMPORTS,
  CONFLICT_DETECTION,
  CSS_ADDITIONS,
  EXECUTION_WORKFLOW,
  MISTAKES_TO_AVOID,
  SUCCESS_INDICATORS,
  QA_CHECKLIST,
  MAIN_COMMAND
};