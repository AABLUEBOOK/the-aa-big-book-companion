import React, { useState } from 'react';
import { createPortal } from 'react-dom';

export default function GlossaryTerm({ children, definition }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => setIsOpen(false);

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  return (
    <>
      <span
        className="glossary-term"
        onClick={() => setIsOpen(true)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && setIsOpen(true)}
      >
        {children}
      </span>

      {isOpen &&
        createPortal(
          <div
            className="big-book-modal-overlay"
            onClick={handleOverlayClick}
          >
            <div className="big-book-modal-popup glossary-modal-purple">
              <div className="big-book-modal-header glossary-header-purple">
                <div className="big-book-modal-term">{children}</div>
                <button
                  className="big-book-modal-close glossary-close-purple"
                  onClick={handleClose}
                  aria-label="Close"
                >
                  ×
                </button>
              </div>
              <div className="big-book-modal-definition">{definition}</div>
            </div>
          </div>,
          document.body
        )}
    </>
  );
}