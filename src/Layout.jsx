import React from "react";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-[#222A31]">
      <style>{`
        /* Interactive Big Book Term Tooltips */
        .big-book-term {
            text-decoration: underline;
            text-decoration-color: #25DCE6;
            text-underline-offset: 3px;
            cursor: pointer;
            display: inline;
            color: inherit; 
            font-weight: bold;
        }

        /* Modal Overlay */
        .big-book-modal-overlay {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0, 0, 0, 0.5);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 9999;
            padding: 20px;
        }

        /* Modal Popup */
        .big-book-modal-popup {
            background: #ffffff;
            border-radius: 12px;
            border: 2px solid #25DCE6;
            box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
            max-width: 340px;
            width: 100%;
            padding: 0;
            overflow: hidden;
        }

        .big-book-modal-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 14px 18px;
            background: #222A31;
            border-bottom: 1px solid #25DCE6;
        }

        .big-book-modal-term {
            font-weight: bold;
            font-size: 1.1em;
            color: #ffffff;
            text-transform: capitalize;
        }

        .big-book-modal-close {
            background: none;
            border: none;
            color: #25DCE6;
            font-size: 1.8em;
            cursor: pointer;
            line-height: 1;
            padding: 0;
            width: 30px;
            height: 30px;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .big-book-modal-close:hover {
            color: #ffffff;
        }

        .big-book-modal-label {
            padding: 12px 18px 4px;
            font-size: 0.75em;
            text-transform: uppercase;
            letter-spacing: 1px;
            color: #25DCE6;
            font-weight: 600;
        }

        .big-book-modal-definition {
            padding: 4px 18px 18px;
            font-size: 1em;
            line-height: 1.6;
            color: #333333;
        }
      `}</style>
      {children}
    </div>
  );
}