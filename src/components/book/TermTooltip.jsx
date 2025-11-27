import React from "react";

// 1930s Dictionary of Key Terms
const TERM_DEFINITIONS = {
  "allergy": "An abnormal or excessive reaction to a substance; specifically, a destructive physical sensitivity.",
  "chronic": "Continuing a long time; inveterate (deeply ingrained); of long continuance.",
  "despair": "Hopelessness; a hopeless state; a lack of hope or expectation.",
  "cynical": "Having the qualities of a surly dog; snarling; professing unbelief in human rectitude.",
  "succumb": "To yield to a superior force; to give up.",
  "succumbed": "To yield to a superior force; to give up.",
  "psychopath": "One who is morally irresponsible (used broadly in the 1930s).",
  "psychopaths": "Those who are morally irresponsible (used broadly in the 1930s).",
  "vital": "Necessary to life; pertaining to life; fundamental.",
  "malady": "Any disorder or disease of the human body; a deep-seated or serious disease.",
  "obsession": "The state of a person vexed or besieged (as by an evil spirit); antecedent to possession.",
  "potent": "Powerful; mighty; having great authority or influence.",
  "sobriety": "Habitual freedom from enthusiasm, inordinate passion, or overheated imagination; calmness.",
  "insane": "Unsound in mind or intellect; mad; deranged in mind; delirious.",
  "decide": "To render a judgment; to cut off doubt; to settle a question.",
  "decision": "A judgment rendered; cutting off doubt; settling a question.",
  "amends": "Reparation; compensation for a loss, damage, or injury inflicted.",
  "contrition": "Deep sorrow for sin; grief of heart for having done wrong; attrition.",
  "cunning": "Artfulness; craft; deceit; fraudulent skill or dexterity.",
  "arrogance": "An offensive display of self-importance or feeling of superiority.",
  "feeble": "Weak, physically or intellectually; wanting force, vigor, or efficiency.",
  "isolation": "Separation from others; loneliness; the state of being placed alone.",
  "reproach": "Censure mingled with contempt or derision; abusive reflections; shame; infamy.",
  "intractable": "Not easily governed, managed, or taught; difficult to treat or cure.",
  "devastated": "Laid waste; destroyed; overwhelmed.",
  "brainstorm": "A violent, transient fit of insanity or mental derangement; a sudden and severe attack of rage or confusion of mind.",
  "bizarre": "Extravagant; grotesquely queer or strange.",
  "axiom": "A self-evident truth; a universally accepted principle.",
  "academic": "Theoretical; without practical or useful purpose or meaning.",
  "appreciation": "Judgement; recognition of worth; gratitude.",
  "hidebound": "Narrowly conservative; inflexible; obstinate.",
  "temporize": "To comply with the time or occasion; to humor or yield to the current of opinion; to delay.",
  "whoopee": "To engage in noisy, boisterous celebration; to make merry with noise (archaic term for a bender/spree).",
};

export function wrapTermsInText(text) {
  if (!text) return text;
  
  // Sort terms by length (longest first) to avoid partial matches
  const sortedTerms = Object.keys(TERM_DEFINITIONS).sort((a, b) => b.length - a.length);
  
  let result = text;
  const replacements = [];
  
  // Find all term matches first
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
  
  // Sort by position (reverse) and replace
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
  };

  const handleClose = () => {
    setShowTooltip(false);
  };

  return (
    <>
      <span 
        className="big-book-term" 
        tabIndex={0}
        onClick={handleClick}
        onKeyDown={(e) => e.key === 'Enter' && handleClick(e)}
      >
        {term}
      </span>
      {showTooltip && (
        <div className="big-book-modal-overlay" onClick={handleClose}>
          <div className="big-book-modal-popup" onClick={(e) => e.stopPropagation()}>
            <div className="big-book-modal-header">
              <span className="big-book-modal-term">{term}</span>
              <button className="big-book-modal-close" onClick={handleClose}>×</button>
            </div>
            <div className="big-book-modal-label">1930s Meaning</div>
            <div className="big-book-modal-definition">{definition}</div>
          </div>
        </div>
      )}
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