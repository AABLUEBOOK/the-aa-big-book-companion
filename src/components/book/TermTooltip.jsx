import React from "react";

// 1930s Dictionary of Key Terms
const TERM_DEFINITIONS = {
  // A
  "aberration": "Partial alienation of mind; mental wandering; deviation from the right way or from truth.",
  "academic": "Theoretical; without practical or useful purpose or meaning.",
  "agnosticism": "The doctrine that God is unknown and unknowable; belief that Ultimate Cause and the essential nature of things are unknowable to man.",
  "allergy": "Acquired immunity through which a person reinfected by a germ reacts differently from the way he reacted to the primary infection.",
  "amends": "Reparation; compensation for a loss, damage, or injury inflicted.",
  "annals": "A kind of history arranged in order of time; a relation of events in chronological order, year by year.",
  "appreciation": "Judgement; recognition of worth; gratitude.",
  "arrogance": "An offensive display of self-importance or feeling of superiority.",
  "atheism": "The disbelief of the existence of a God, or a supreme intelligent Being.",
  "augury": "The art or practice of foretelling events by signs or omens; that which forebodes; prognostication.",
  "avocation": "The business which calls aside; the smaller affairs of life, or occasional calls which summon a person to leave his ordinary or principal business.",
  "axiom": "A self-evident truth; a universally accepted principle.",
  
  // B
  "bizarre": "Extravagant; grotesquely queer or strange.",
  "boon": "A gift; a grant; a benefaction; a benefit; a thing to be thankful for.",
  "brainstorm": "A type of rage; a violent, transient fit of insanity or mental derangement.",
  
  // C
  "cause": "That which produces an effect; the real reason or motive that urges, moves or implies the mind to act or decide.",
  "causes": "Those things which produce effects; the real reasons or motives that urge, move or imply the mind to act or decide.",
  "chronic": "Continuing a long time; inveterate or of long continuance, in distinction from acute.",
  "condition": "Stage of being; situation in relation to environment or to physical or mental soundness; a prerequisite.",
  "contrition": "Penitent; deep sorrow for sin; grief of heart for having done wrong.",
  "conviviality": "The good humor or mirth indulged in at entertainments; a convivial spirit or disposition; festal; social; jovial.",
  "cordial": "Proceeding as from the heart; hearty; sincere; not hypocritical; warm; affectionate.",
  "cunning": "Artfulness; craft; deceit; fraudulent skill or dexterity.",
  "cynic": "Having the qualities of a surly dog; snarling; professing unbelief in human rectitude; sarcastic; carping.",
  "cynical": "Having the qualities of a surly dog; snarling; professing unbelief in human rectitude; sarcastic; carping.",
  
  // D
  "decide": "To render a judgment; to cut off doubt; to settle a question.",
  "decision": "A judgment rendered; cutting off doubt; settling a question.",
  "denizen": "A stranger admitted to residence; a dweller.",
  "desire": "An emotion directed to the attainment of possession of an object from which pleasure is expected; a passion excited by the love of an object.",
  "despair": "Hopelessness; a hopeless state; a lack of hope or expectations.",
  "desperate": "Without hope; without regard to danger or safety; extremely reckless; proceeding from despair.",
  "devastated": "Laid waste; destroyed; overwhelmed.",
  "discipline": "Education; instruction; the cultivation of the mind and formation of the manners; training to act in accordance with rules.",
  "doubt": "Uncertainty of mind; suspense; unsettled state of opinion; to waver or fluctuate in opinion; to hesitate.",
  
  // E
  "engender": "To produce; to cause to exist; to cause to bring forth.",
  "enthusiasm": "Strong and pleasurable emotion manifested by expression of approval or eager interest; ardor or excitement in pursuit of some object.",
  "enthusiast": "One whose imagination is highly excited with the love or in the pursuit of an object; a person of ardent zeal.",
  "epoch": "A fixed point of time from which succeeding years are numbered; any fixed time or period; era; date.",
  
  // F
  "feeble": "Weak, physically or intellectually; wanting force, vigor, or efficiency.",
  "frothy": "Full of foam or froth; vain; light; empty; unsubstantial.",
  
  // G
  "grave": "Solemn; sober; serious; opposed to gay, light, or jovial; important; momentous.",
  
  // H
  "hidebound": "Narrowly conservative; inflexible; obstinate.",
  "hopeless": "Destitute of hope; despairing; giving no ground of hope; desperate.",
  
  // I
  "insane": "Unsound in mind or intellect; mad; deranged in mind; delirious; distracted.",
  "insidious": "Lying in wait; watching an opportunity to ensnare or entrap; deceitful; sly; treacherous.",
  "intractable": "Not easily governed, managed, or taught; difficult to treat or cure.",
  "isolation": "Separation from others; loneliness; the state of being placed alone.",
  
  // L
  "lurking": "To lie hidden; to lie in wait; to lie concealed or unperceived.",
  
  // M
  "malady": "Any disorder or disease of the human body; a deep-seated or serious disease.",
  "method": "Systematic mode or manner of action; suitable and convenient arrangement; regular or orderly procedure; system.",
  "mettle": "Moral or physical constitution; constitutional temperament; disposition; character; temper; spirit; ardor.",
  "miracle": "In theology, an event or effect contrary to the established constitution and course of things; a divine interposition.",
  "moral": "Relating to the practice, manners, or conduct of men, as social beings, in relation to each other, with reference to right and wrong.",
  "moralize": "To speak or write on moral subjects; to make moral reflections.",
  "morass": "A marsh; a fen; a tract of soft, wet ground.",
  
  // N
  "nadir": "That point of the heavens directly opposite to the zenith; figuratively, any lowest point.",
  "notion": "Conception; mental apprehension; sentiment; opinion, usually crude or having slight foundation.",
  
  // O
  "obsession": "The state of a person vexed or besieged (as by an evil spirit); antecedent to possession.",
  
  // P
  "potent": "Powerful; mighty; having great authority or influence.",
  "prejudice": "Prejudgment; an opinion formed without due examination; an unreasonable predilection for or objection to a person or thing.",
  "principal": "A chief or head; a chief party; one who takes and leads or principal part in anything.",
  "principle": "A general truth; a fundamental truth or tenet; a law from which others are derived; a right rule of conduct.",
  "psychopath": "One who is morally irresponsible (used broadly in the 1930s).",
  "psychopaths": "Those who are morally irresponsible (used broadly in the 1930s).",
  
  // R
  "recompense": "An equivalent returned for anything given, done or suffered; compensation; reward; amends.",
  "recover": "To regain health after sickness; to grow well again; to regain a former state or condition.",
  "recovered": "Regained health after sickness; grew well again; regained a former state or condition.",
  "recruit": "The supply of anything wasted; a reinforcement; a newly-enlisted soldier or sailor.",
  "remorse": "The keen pain or anguish excited by a sense of guilt; compunction of conscience for an evil act committed.",
  "reproach": "Censure mingled with contempt or derision; abusive reflections; shame; infamy; disgrace.",
  "reprove": "To blame; to censure; to condemn; to charge with a fault; to chide; to reprehend.",
  
  // S
  "sober": "Temperate in the use of spiritous liquors; not intoxicated; not mad or insane; self-possessed; regular; calm; thoughtful.",
  "sobriety": "Habitual soberness or temperance; freedom from intoxication; habitual freedom from enthusiasm, inordinate passion, or overheated imagination; calmness.",
  "spiritual": "Consisting of spirit; not material; mental; intellectual; not gross; refined from external things; pure; holy.",
  "subtle": "Characterized by artful cunning; sly; crafty; insinuating; wily; characterized by acuteness or delicacy of intellect.",
  "succumb": "To yield to a superior force; to give up.",
  "succumbed": "Yielded to a superior force; gave up.",
  "suffice": "To be enough or sufficient; to be equal to the end proposed; to be adequate or satisfactory.",
  "synthesis": "Composition; the putting of two or more things together; combination or that process of reasoning in which we advance by regular chain from principles.",
  "synthetic": "Pertaining to synthesis; consisting in synthesis or composition.",
  
  // T
  "temperance": "Moderation; particularly, habitual moderation in regard to the indulgence of the natural appetites and passions; specifically, total abstinence from intoxicating liquors.",
  "temperate": "Moderate; not excessive; moderate in the indulgence of the appetites and passions; cool; calm; not marked with passion.",
  "temporize": "To comply with the time or occasion; to humor or yield to the current of opinion or to circumstances; to delay; to procrastinate.",
  
  // U
  "utter": "The utmost limit.",
  "utterly": "In an utter manner; to the full extent; fully; perfectly; totally.",
  
  // V
  "vicissitude": "Regular change or succession of one thing to another; a passing from one state or condition to another; irregular change; revolution; mutation.",
  "vital": "Pertaining to life; contributing to life; necessary to life; very necessary; highly important; essential.",
  
  // W
  "wholesale": "The sale of goods by the piece or large quantity; in great quantities; extensive and indiscriminate.",
  "whoopee": "To engage in noisy, boisterous celebration; to make merry with noise (archaic term for a bender/spree).",
  "wrest": "To twist; to wrench; to extort or bring out by force; to turn from truth or twist from the natural or proper meaning; to pervert; to distort.",
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