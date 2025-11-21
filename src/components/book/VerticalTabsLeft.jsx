import React from "react";
import { cn } from "@/lib/utils";

export default function VerticalTabsLeft({ tabs = [] }) {
  const tabColors = {
    yellow: 'bg-yellow-400',
    pink: 'bg-pink-400',
    blue: 'bg-blue-400',
    green: 'bg-green-400',
    red: 'bg-red-500',
    purple: 'bg-purple-500',
    orange: 'bg-orange-500'
  };

  if (!tabs || tabs.length === 0) return null;

  return (
    <div className="absolute -left-12 sm:-left-14 lg:-left-16 top-0 w-12 sm:w-14 lg:w-16 pointer-events-none z-30">
      <div className="sticky top-32 space-y-3">
        {tabs.map((tab, idx) => (
          <div
            key={idx}
            className={cn(
              "w-10 sm:w-12 lg:w-14 h-16 sm:h-18 lg:h-20 rounded-l-lg shadow-xl flex items-center justify-center p-1.5 sm:p-2",
              tabColors[tab.color] || tabColors.yellow
            )}
            style={{ 
              clipPath: 'polygon(0% 0%, 80% 0%, 100% 50%, 80% 100%, 0% 100%)',
              marginTop: idx === 0 ? `${tab.position || 0}vh` : undefined
            }}
          >
            <div className="text-[9px] sm:text-[10px] leading-[1.1] font-bold text-white text-center break-words whitespace-pre-line">
              {tab.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}