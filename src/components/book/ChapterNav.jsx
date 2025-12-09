import React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function ChapterNav({ chapters, currentChapterId, onChapterChange }) {
  return (
    <div className="bg-white/5 backdrop-blur-3xl rounded-2xl sm:rounded-3xl shadow-2xl border border-white/10 p-4 sm:p-6">
      <h3 className="font-serif font-bold text-base sm:text-lg text-[#FFFFFD] mb-3 sm:mb-4 pb-2 sm:pb-3 border-b border-white/10">
        Table of Contents
      </h3>
      
      <nav className="space-y-1">
        {chapters.map((chapter) => (
          <button
            key={chapter.id}
            onClick={() => onChapterChange(chapter.id)}
            className={cn(
              "w-full text-left px-3 sm:px-4 py-2 sm:py-3 rounded-2xl transition-all duration-500",
              "flex items-start justify-between group",
              currentChapterId === chapter.id
                ? "bg-white/10 backdrop-blur-xl text-[#FFFFFD] font-medium shadow-lg shadow-[#5EAAFF]/20 border border-[#5EAAFF]/30"
                : "text-[#FFFFFD]/70 hover:bg-white/5 hover:text-[#FFFFFD] backdrop-blur-xl border border-transparent hover:border-white/10"
            )}
          >
            <div className="flex-1 pr-2">
              <div className="text-xs sm:text-sm font-medium leading-snug">
                {chapter.chapter && (
                  <span className="text-[10px] sm:text-xs uppercase tracking-wider mr-1.5 sm:mr-2 opacity-60">
                    Chapter {chapter.chapter}
                  </span>
                )}
                {chapter.title}
              </div>
            </div>
            <div className={cn(
              "text-[10px] sm:text-xs font-serif flex-shrink-0 px-2 py-1 rounded-xl",
              currentChapterId === chapter.id 
                ? "text-[#5EAAFF] bg-[#5EAAFF]/10 backdrop-blur-xl border border-[#5EAAFF]/20 shadow-lg" 
                : "text-[#5EAAFF]/50 bg-white/5"
            )}>
              {chapter.pageNum}
            </div>
          </button>
        ))}
      </nav>
    </div>
  );
}