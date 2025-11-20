import React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function ChapterNav({ chapters, currentChapterId, onChapterChange }) {
  return (
    <div className="bg-white rounded-xl shadow-md border border-stone-200 p-6">
      <h3 className="font-serif font-bold text-lg text-stone-900 mb-4 pb-3 border-b border-stone-200">
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
                ? "bg-amber-100 text-amber-900 font-medium shadow-sm"
                : "text-stone-700 hover:bg-stone-100"
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
              currentChapterId === chapter.id ? "text-amber-700" : "text-stone-400"
            )}>
              {chapter.pageNum}
            </div>
          </button>
        ))}
      </nav>
    </div>
  );
}