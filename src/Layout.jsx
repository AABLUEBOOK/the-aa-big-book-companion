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
            position: relative;
            display: inline;
            color: inherit; 
            font-weight: inherit;
        }
        .big-book-tooltip {
            display: none;
            width: 260px; 
            background-color: #1a2530;
            color: #ffffff;
            text-align: left;
            border-radius: 10px;
            padding: 14px 16px;
            position: absolute;
            z-index: 1000; 
            bottom: calc(100% + 12px); 
            left: 50%;
            transform: translateX(-50%);
            font-size: 0.85em;
            line-height: 1.5;
            box-shadow: 0 8px 24px rgba(0, 0, 0, 0.5);
            border: 1px solid rgba(37, 220, 230, 0.3);
        }
        .big-book-tooltip-visible {
            display: block;
        }
        .big-book-tooltip::after {
            content: "";
            position: absolute;
            top: 100%;
            left: 50%;
            transform: translateX(-50%);
            border-width: 10px;
            border-style: solid;
            border-color: #1a2530 transparent transparent transparent;
        }
        .big-book-tooltip strong {
            color: #25DCE6;
            display: block;
            margin-bottom: 6px;
            font-size: 0.85em;
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }
        @media (max-width: 640px) {
            .big-book-tooltip {
                width: 220px;
                font-size: 0.8em;
                padding: 12px;
                left: 0;
                transform: translateX(-20%);
            }
            .big-book-tooltip::after {
                left: 30%;
            }
        }
      `}</style>
      {children}
    </div>
  );
}