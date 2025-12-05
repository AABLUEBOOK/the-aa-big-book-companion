import React, { useState, useEffect, useCallback, memo } from "react";
import ReactDOM from "react-dom";

// Lazy load dictionary data - only when first term is clicked
let TERM_DEFINITIONS = null;
let definitionsPromise = null;

function loadDefinitions() {
  if (TERM_DEFINITIONS) return Promise.resolve(TERM_DEFINITIONS);
  if (definitionsPromise) return definitionsPromise;
  
  definitionsPromise = import("./dictionaryData").then(m => {
    TERM_DEFINITIONS = m.TERM_DEFINITIONS;
    return TERM_DEFINITIONS;
  });
  return definitionsPromise;
}

// Don't preload - load on first interaction instead

// Cache for processed text
const textCache = new Map();

export function wrapTermsInText(text) {
  if (!text || !TERM_DEFINITIONS) return text;
  
  // Check cache
  if (textCache.has(text)) return textCache.get(text);
  
  const terms = Object.keys(TERM_DEFINITIONS);
  const sortedTerms = terms.sort((a, b) => b.length - a.length);
  
  let result = text;
  const replacements = [];
  
  // Use a single pass with combined regex for better performance
  for (const term of sortedTerms) {
    const regex = new RegExp(`\\b(${term})\\b`, 'gi');
    let match;
    while ((match = regex.exec(text)) !== null) {
      replacements.push({
        start: match.index,
        end: match.index + match[0].length,
        term: match[0],
        definition: TERM_DEFINITIONS[term.toLowerCase()]
      });
    }
  }
  
  if (replacements.length === 0) {
    textCache.set(text, text);
    return text;
  }
  
  replacements.sort((a, b) => b.start - a.start);
  
  for (const rep of replacements) {
    const escapedDef = rep.definition.replace(/:/g, '|||COLON|||');
    result = result.slice(0, rep.start) + `{{TERM:${rep.term}:${escapedDef}}}` + result.slice(rep.end);
  }
  
  textCache.set(text, result);
  return result;
}

const TermTooltip = memo(function TermTooltip({ term, definition }) {
  const [showTooltip, setShowTooltip] = useState(false);

  const scrollYRef = React.useRef(0);

  const handleClick = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    scrollYRef.current = window.scrollY;
    setShowTooltip(true);
    document.body.style.overflow = 'hidden';
  }, []);

  const handleClose = useCallback((e) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    document.body.style.overflow = '';
    setShowTooltip(false);
    // Restore scroll position after state update
    requestAnimationFrame(() => {
      window.scrollTo(0, scrollYRef.current);
    });
  }, []);

  useEffect(() => {
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  const modalContent = showTooltip ? ReactDOM.createPortal(
    <div 
      className="big-book-modal-overlay" 
      onClick={handleClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="term-title"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 999999
      }}
    >
      <div 
        className="big-book-modal-popup" 
        onClick={(e) => e.stopPropagation()}
      >
        <div className="big-book-modal-header">
          <span id="term-title" className="big-book-modal-term">{term}</span>
          <button 
            className="big-book-modal-close" 
            onClick={handleClose}
            aria-label="Close definition"
            type="button"
          >
            ×
          </button>
        </div>
        <div className="big-book-modal-label">1930s Meaning</div>
        <div className="big-book-modal-definition">{definition}</div>
      </div>
    </div>,
    document.body
  ) : null;

  return (
    <>
      <span 
        className="big-book-term" 
        tabIndex={0}
        onClick={handleClick}
        onKeyDown={(e) => e.key === 'Enter' && handleClick(e)}
        role="button"
        aria-label={`Definition of ${term}`}
      >
        {term}
      </span>
      {modalContent}
    </>
  );
});

export default TermTooltip;

export function renderTextWithTerms(text) {
  if (!text) return null;
  
  // Load definitions on first render if not loaded
  if (!TERM_DEFINITIONS) {
    loadDefinitions();
    return text; // Return plain text until loaded
  }
  
  const processed = wrapTermsInText(text);
  const parts = processed.split(/(\{\{TERM:[^}]+\}\})/g);
  
  return parts.map((part, idx) => {
    // Match TERM:term:definition - term is first segment, definition is everything after second colon
    const match = part.match(/\{\{TERM:([^:]+):(.+)\}\}$/);
    if (match) {
      const definition = match[2].replace(/\|\|\|COLON\|\|\|/g, ':');
      return <TermTooltip key={idx} term={match[1]} definition={definition} />;
    }
    return <span key={idx}>{part}</span>;
  });
}