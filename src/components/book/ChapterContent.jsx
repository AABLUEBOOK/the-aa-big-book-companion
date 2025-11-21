import React from "react";
import { cn } from "@/lib/utils";
import { CHAPTER_CONTENT } from "./allChapterContent";
import AudioPlayer from "./AudioPlayer";
import BookmarkButton from "./BookmarkButton";

export default function ChapterContent({ chapter, sectionRoute }) {

  if (!chapter) return null;

  const chapterData = CHAPTER_CONTENT[chapter.id] || { 
    paragraphs: [{ text: "Content for this chapter will be added soon." }],
    highlights: []
  };

  return (
    <div className="bg-[#2A3440] rounded-xl sm:rounded-2xl shadow-2xl border border-[#25DCE6]/20 overflow-visible relative">

      {/* Chapter Header */}
      <div className="bg-gradient-to-r from-[#2A3440] to-[#222A31] border-b border-[#25DCE6]/20 px-4 sm:px-8 lg:px-12 py-4 sm:py-6 lg:py-8">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            {chapter.chapter && (
              <div className="text-xs sm:text-sm font-medium text-[#25DCE6]/70 uppercase tracking-widest mb-1 sm:mb-2">
                Chapter {chapter.chapter}
              </div>
            )}
            <h1 className="text-xl sm:text-3xl lg:text-4xl xl:text-5xl font-serif font-bold text-[#FFFFFD] leading-tight">
              {chapter.title}
            </h1>
            <div className="mt-2 sm:mt-3 text-xs sm:text-sm text-[#25DCE6]/60">
              Page {chapter.pageNum}
            </div>
          </div>
          <BookmarkButton chapter={chapter} sectionRoute={sectionRoute} />
        </div>
      </div>

      {/* Audio Player */}
      <div className="px-4 sm:px-8 lg:px-12 pt-6">
        <AudioPlayer content={chapterData} />
      </div>

      {/* Chapter Body */}
      <div className="px-4 sm:px-8 lg:px-12 py-6 sm:py-10 lg:py-12 relative pr-20 sm:pr-28">
        
        {/* Decorative page texture */}
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        ></div>

        <div className="prose prose-sm sm:prose-base lg:prose-lg max-w-none relative select-text">
          <div className="font-serif text-[#FFFFFD] leading-relaxed text-base sm:text-lg space-y-4 sm:space-y-6">
            {chapterData.paragraphs?.map((para, idx) => {
              const highlightClasses = {
                'yellow': 'bg-yellow-400/30 px-1 py-0.5 rounded',
                'pink': 'bg-pink-400/40 px-1 py-0.5 rounded',
                'blue': 'bg-blue-400/30 px-1 py-0.5 rounded',
                'orange': 'bg-orange-400/30 px-1 py-0.5 rounded',
                'green': 'bg-green-400/30 px-1 py-0.5 rounded'
              };

              // Handle inline highlights
              if (para.segments) {
                return (
                  <p key={idx} className="mb-6 first:mt-0 leading-relaxed">
                    {para.segments.map((segment, segIdx) => (
                      segment.highlight ? (
                        <span key={segIdx} className={highlightClasses[segment.highlight]}>
                          {segment.text}
                        </span>
                      ) : (
                        <span key={segIdx}>{segment.text}</span>
                      )
                    ))}
                  </p>
                );
              }

              // Handle paragraph-level highlights (legacy)
              return (
                <p 
                  key={idx} 
                  className={cn(
                    "mb-6 first:mt-0 leading-relaxed",
                    para.highlight && highlightClasses[para.highlight]
                  )}
                >
                  {para.text}
                </p>
              );
            })}
          </div>
        </div>


      </div>
    </div>
  );
}