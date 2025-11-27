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

        /* Modal Overlay - Mobile Optimized */
        .big-book-modal-overlay {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0, 0, 0, 0.6);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 99999;
            padding: 16px;
            -webkit-overflow-scrolling: touch;
            overflow-y: auto;
        }

        /* Modal Popup - Mobile Optimized */
        .big-book-modal-popup {
            background: #ffffff;
            border-radius: 16px;
            border: 2px solid #25DCE6;
            box-shadow: 0 10px 40px rgba(0, 0, 0, 0.4);
            max-width: 320px;
            width: calc(100% - 32px);
            padding: 0;
            overflow: hidden;
            margin: auto;
            position: relative;
            transform: none;
            max-height: calc(100vh - 100px);
            overflow-y: auto;
        }

        .big-book-modal-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 16px 18px;
            background: #222A31;
            border-bottom: 1px solid #25DCE6;
            position: sticky;
            top: 0;
            z-index: 1;
        }

        .big-book-modal-term {
            font-weight: bold;
            font-size: 1.2em;
            color: #ffffff;
            text-transform: capitalize;
        }

        .big-book-modal-close {
            background: #25DCE6;
            border: none;
            color: #222A31;
            font-size: 1.5em;
            cursor: pointer;
            line-height: 1;
            padding: 0;
            width: 36px;
            height: 36px;
            min-width: 36px;
            min-height: 36px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            font-weight: bold;
            -webkit-tap-highlight-color: transparent;
        }

        .big-book-modal-close:hover,
        .big-book-modal-close:active {
            background: #ffffff;
            color: #222A31;
        }

        .big-book-modal-label {
            padding: 14px 18px 6px;
            font-size: 0.75em;
            text-transform: uppercase;
            letter-spacing: 1px;
            color: #25DCE6;
            font-weight: 600;
        }

        .big-book-modal-definition {
            padding: 6px 18px 20px;
            font-size: 1.05em;
            line-height: 1.7;
            color: #333333;
        }

        /* Extra mobile optimizations */
        @media (max-width: 480px) {
            .big-book-modal-overlay {
                padding: 12px;
                align-items: center;
            }

            .big-book-modal-popup {
                max-width: 100%;
                width: calc(100% - 24px);
                border-radius: 12px;
            }

            .big-book-modal-header {
                padding: 14px 16px;
            }

            .big-book-modal-term {
                font-size: 1.1em;
            }

            .big-book-modal-definition {
                font-size: 1em;
                padding: 6px 16px 18px;
            }
        }
      `}</style>
      {children}
    </div>
  );
}