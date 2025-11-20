import React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function ChapterNav({ chapters, currentChapterId, onChapterChange }) {
  return (
    <div className="bg-[#2A3440] rounded-xl shadow-xl border border-[#25DCE6]/20 p-6">
      <h3 className="font-serif font-bold text-lg text-[#FFFFFD] mb-4 pb-3 border-b border-[#25DCE6]/20">
        Table of Contents
      </h3>
      
      <nav className="space-y-1">
        {chapters.map((chapter) => (
          <button
            key={chapter.id}
            onClick={() => onChapterChange(chapter.id)}
            className={cn(
              "w-full text-left px-4 py-3 rounded-lg transition-all duration-200",
              "flex items-start justify-between group",
              currentChapterId === chapter.id
                ? "bg-[#25DCE6]/20 text-[#FFFFFD] font-medium shadow-sm border border-[#25DCE6]/40"
                : "text-[#FFFFFD]/70 hover:bg-[#25DCE6]/10 hover:text-[#FFFFFD]"
            )}
          >
            <div className="flex-1 pr-2">
              <div className="text-sm font-medium leading-snug">
                {chapter.chapter && (
                  <span className="text-xs uppercase tracking-wider mr-2 opacity-60">
                    Chapter {chapter.chapter}
                  </span>
                )}
                {chapter.title}
              </div>
            </div>
            <div className={cn(
              "text-xs font-serif",
              currentChapterId === chapter.id ? "text-[#25DCE6]" : "text-[#25DCE6]/50"
            )}>
              {chapter.pageNum}
            </div>
          </button>
        ))}
      </nav>
    </div>
  );
}