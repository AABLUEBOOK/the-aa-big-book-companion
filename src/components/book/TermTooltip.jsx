import React from "react";
import ReactDOM from "react-dom";
import { TERM_DEFINITIONS } from "./dictionaryData";

export function wrapTermsInText(text) {
  if (!text) return text;
  
  const sortedTerms = Object.keys(TERM_DEFINITIONS).sort((a, b) => b.length - a.length);
  
  let result = text;
  const replacements = [];
  
  sortedTerms.forEach(term => {
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
  });
  
  replacements.sort((a, b) => b.start - a.start);
  
  replacements.forEach(rep => {
    const before = result.slice(0, rep.start);
    const after = result.slice(rep.end);
    result = before + `{{TERM:${rep.term}:${rep.definition}}}` + after;
  });
  
  return result;
}

export default function TermTooltip({ term, definition }) {
  const [showTooltip, setShowTooltip] = React.useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setShowTooltip(true);
    document.body.style.overflow = 'hidden';
    document.body.style.position = 'fixed';
    document.body.style.width = '100%';
    document.body.style.top = `-${window.scrollY}px`;
  };

  const handleClose = (e) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    const scrollY = document.body.style.top;
    document.body.style.overflow = '';
    document.body.style.position = '';
    document.body.style.width = '';
    document.body.style.top = '';
    window.scrollTo(0, parseInt(scrollY || '0') * -1);
    setShowTooltip(false);
  };

  React.useEffect(() => {
    return () => {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
      document.body.style.top = '';
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
}

export function renderTextWithTerms(text) {
  if (!text) return null;
  
  const processed = wrapTermsInText(text);
  const parts = processed.split(/(\{\{TERM:[^}]+\}\})/g);
  
  return parts.map((part, idx) => {
    const match = part.match(/\{\{TERM:([^:]+):([^}]+)\}\}/);
    if (match) {
      return <TermTooltip key={idx} term={match[1]} definition={match[2]} />;
    }
    return <span key={idx}>{part}</span>;
  });
}