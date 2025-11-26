import React from "react";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-[#222A31]">
      <style>{`
        /* Interactive Big Book Term Tooltips */
        .big-book-term {
            border-bottom: 2px dotted #25DCE6; 
            cursor: pointer;
            position: relative;
            display: inline;
            color: #25DCE6; 
            text-decoration: none;
            font-weight: 500;
        }
        .big-book-tooltip {
            visibility: hidden;
            width: 250px; 
            background-color: rgba(44, 62, 80, 0.97); 
            color: #ffffff;
            text-align: left;
            border-radius: 8px;
            padding: 12px;
            position: absolute;
            z-index: 1000; 
            bottom: 135%; 
            left: 50%;
            margin-left: -125px; 
            opacity: 0;
            transition: opacity 0.3s ease-in-out;
            font-size: 0.85em;
            line-height: 1.4;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
        }
        .big-book-tooltip::after {
            content: "";
            position: absolute;
            top: 100%;
            left: 50%;
            margin-left: -8px;
            border-width: 8px; 
            border-style: solid;
            border-color: rgba(44, 62, 80, 0.97) transparent transparent transparent; 
        }
        .big-book-term:hover .big-book-tooltip,
        .big-book-term:focus .big-book-tooltip {
            visibility: visible;
            opacity: 1;
        }
        @media (max-width: 640px) {
            .big-book-tooltip {
                width: 200px;
                margin-left: -100px;
                font-size: 0.8em;
                padding: 10px;
            }
        }
      `}</style>
      {children}
    </div>
  );
}