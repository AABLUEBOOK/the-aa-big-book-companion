import React, { memo } from "react";

const Layout = memo(function Layout({ children }) {
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

        /* Modal Overlay - Mobile Optimized with Portal */
        .big-book-modal-overlay {
            position: fixed !important;
            top: 0 !important;
            left: 0 !important;
            right: 0 !important;
            bottom: 0 !important;
            width: 100vw !important;
            height: 100vh !important;
            height: 100dvh !important;
            background: rgba(0, 0, 0, 0.7) !important;
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
            z-index: 999999 !important;
            padding: 20px !important;
            box-sizing: border-box !important;
            -webkit-overflow-scrolling: touch;
            overflow: hidden !important;
        }

        /* Modal Popup - Mobile Optimized */
        .big-book-modal-popup {
            background: #ffffff !important;
            border-radius: 16px !important;
            border: 3px solid #25DCE6 !important;
            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5) !important;
            max-width: 320px !important;
            width: calc(100% - 40px) !important;
            padding: 0 !important;
            overflow: hidden !important;
            margin: 0 !important;
            position: relative !important;
            transform: none !important;
            max-height: calc(100vh - 80px) !important;
            max-height: calc(100dvh - 80px) !important;
            overflow-y: auto !important;
        }

        .big-book-modal-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 16px 18px;
            background: #222A31;
            border-bottom: 2px solid #25DCE6;
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
            background: #25DCE6 !important;
            border: none !important;
            color: #222A31 !important;
            font-size: 1.5em !important;
            cursor: pointer !important;
            line-height: 1 !important;
            padding: 0 !important;
            width: 40px !important;
            height: 40px !important;
            min-width: 40px !important;
            min-height: 40px !important;
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
            border-radius: 50% !important;
            font-weight: bold !important;
            -webkit-tap-highlight-color: transparent !important;
            flex-shrink: 0 !important;
        }

        .big-book-modal-close:hover,
        .big-book-modal-close:active {
            background: #ffffff !important;
            color: #222A31 !important;
        }

        .big-book-modal-label {
            padding: 16px 18px 8px;
            font-size: 0.8em;
            text-transform: uppercase;
            letter-spacing: 1px;
            color: #25DCE6;
            font-weight: 600;
            background: #f8f9fa;
        }

        .big-book-modal-definition {
            padding: 12px 18px 24px;
            font-size: 1.1em;
            line-height: 1.7;
            color: #333333;
            background: #ffffff;
        }

        /* Extra mobile optimizations */
        @media (max-width: 480px) {
            .big-book-modal-overlay {
                padding: 16px !important;
            }

            .big-book-modal-popup {
                max-width: 100% !important;
                width: calc(100% - 32px) !important;
                border-radius: 14px !important;
            }

            .big-book-modal-header {
                padding: 14px 16px;
            }

            .big-book-modal-term {
                font-size: 1.15em;
            }

            .big-book-modal-definition {
                font-size: 1.05em;
                padding: 10px 16px 20px;
            }
        }
      `}</style>
      {children}
    </div>
  );
});

export default Layout;