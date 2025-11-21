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
    <div className="hidden xl:block absolute -left-16 top-0 bottom-0 w-16 pointer-events-none">
      <div className="sticky top-32 space-y-3">
        {tabs.map((tab, idx) => (
          <div
            key={idx}
            className={cn(
              "w-14 h-20 rounded-l-lg shadow-lg flex items-center justify-center p-2",
              tabColors[tab.color] || tabColors.yellow
            )}
            style={{ 
              clipPath: 'polygon(0% 0%, 80% 0%, 100% 50%, 80% 100%, 0% 100%)',
              marginTop: idx === 0 ? `${tab.position || 0}%` : undefined
            }}
          >
            <div className="text-[10px] leading-[1.1] font-bold text-white text-center break-words whitespace-pre-line">
              {tab.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}