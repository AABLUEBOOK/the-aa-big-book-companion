import React from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { FULL_CHAPTER_CONTENT } from "./FullChapterContent";

export default function ChapterContent({ chapter, onNext, onPrevious }) {
  if (!chapter) return null;

  const chapterData = FULL_CHAPTER_CONTENT[chapter.id] || { 
    paragraphs: [{ text: "Content coming soon..." }],
    highlights: []
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-stone-200 overflow-hidden">
      
      {/* Chapter Header */}
      <div className="bg-gradient-to-r from-amber-50 to-stone-50 border-b border-stone-200 px-8 sm:px-12 py-8">
        {chapter.chapter && (
          <div className="text-sm font-medium text-stone-500 uppercase tracking-widest mb-2">
            Chapter {chapter.chapter}
          </div>
        )}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-stone-900 leading-tight">
          {chapter.title}
        </h1>
        <div className="mt-3 text-sm text-stone-500">
          Page {chapter.pageNum}
        </div>
      </div>

      {/* Chapter Body */}
      <div className="px-8 sm:px-12 py-12 relative">
        
        {/* Decorative page texture */}
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        ></div>

        <div className="prose prose-lg prose-stone max-w-none relative">
          <div className="font-serif text-stone-800 leading-relaxed text-lg space-y-6">
            {chapterData.paragraphs?.map((para, idx) => {
              const baseClasses = "mb-6 first:mt-0 leading-relaxed";
              const highlightClasses = {
                'yellow': 'bg-yellow-100/70 px-2 py-1 rounded',
                'pink': 'bg-pink-100/70 px-2 py-1 rounded',
                'blue': 'bg-blue-100/70 px-2 py-1 rounded',
                'basic-text': 'border-l-4 border-amber-400 pl-4 bg-amber-50/30 py-2'
              };
              
              return (
                <p 
                  key={idx} 
                  className={cn(
                    baseClasses,
                    para.highlight && highlightClasses[para.highlight]
                  )}
                >
                  {para.highlightText ? (
                    <>
                      {para.text}{' '}
                      <span className={cn(
                        "inline-block",
                        para.highlight && highlightClasses[para.highlight]
                      )}>
                        {para.highlightText}
                      </span>
                    </>
                  ) : (
                    para.text
                  )}
                </p>
              );
            })}
          </div>
        </div>

        {/* Sidebar Annotations */}
        <div className="hidden xl:block absolute -right-64 top-24 w-56 space-y-4">
          {chapterData.highlights?.filter(h => h.type === 'sidebar').map((highlight, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-300 rounded-lg px-4 py-3 shadow-md hover:shadow-lg transition-shadow"
              style={{ transform: `rotate(${idx % 2 === 0 ? '1deg' : '-1deg'})` }}
            >
              <div className="text-xs font-bold text-blue-900 uppercase tracking-wider text-center leading-tight">
                {highlight.text}
              </div>
              {highlight.subtext && (
                <div className="text-xs text-blue-700 text-center mt-1">
                  {highlight.subtext}
                </div>
              )}
              {highlight.page && (
                <div className="text-xs text-blue-600 text-center mt-1 font-mono">
                  P. {highlight.page}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Footer */}
      <div className="bg-stone-50 border-t border-stone-200 px-8 sm:px-12 py-6 flex items-center justify-between">
        <Button
          variant="outline"
          onClick={onPrevious}
          disabled={!onPrevious}
          className="gap-2"
        >
          <ChevronLeft className="w-4 h-4" />
          <span className="hidden sm:inline">Previous</span>
        </Button>

        <div className="text-sm text-stone-500 font-medium">
          {currentIndex + 1} of {CHAPTERS.length}
        </div>

        <Button
          variant="outline"
          onClick={onNext}
          disabled={!onNext}
          className="gap-2"
        >
          <span className="hidden sm:inline">Next</span>
          <ChevronRight className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
}