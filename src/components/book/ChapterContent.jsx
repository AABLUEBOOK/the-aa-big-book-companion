import React from "react";
import { cn } from "@/lib/utils";
import { CHAPTER_CONTENT } from "./allChapterContent";
import AudioPlayer from "./AudioPlayer";
import BookmarkButton from "./BookmarkButton";
import { renderTextWithTerms } from "./TermTooltip";

export default function ChapterContent({ chapter, sectionRoute }) {

  if (!chapter) return null;

  const chapterData = CHAPTER_CONTENT[chapter.id] || { 
    paragraphs: [{ text: "Content for this chapter will be added soon." }],
    highlights: []
  };

  return (
    <section 
      className="bg-white rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl border border-gray-200 overflow-visible relative"
      aria-labelledby={`chapter-title-${chapter.id}`}
    >

      {/* Chapter Header */}
      <header className="bg-gradient-to-r from-gray-100 to-gray-50 border-b border-gray-200 px-3 sm:px-6 md:px-8 lg:px-10 py-3 sm:py-5 md:py-6">
        <div className="flex items-start justify-between gap-3 sm:gap-4">
          <div className="flex-1 min-w-0">
            {chapter.chapter && (
              <div className="text-[10px] sm:text-xs md:text-sm font-medium text-[#25DCE6] uppercase tracking-widest mb-1">
                Chapter {chapter.chapter}
              </div>
            )}
            <h1 
              id={`chapter-title-${chapter.id}`}
              className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-gray-900 leading-tight"
            >
              {chapter.title}
            </h1>
            <div className="mt-1 sm:mt-2 text-[10px] sm:text-xs md:text-sm text-gray-500">
              Page {chapter.pageNum}
            </div>
          </div>
          <BookmarkButton chapter={chapter} sectionRoute={sectionRoute} />
        </div>
      </header>

      {/* Audio Player */}
      <div className="px-3 sm:px-6 md:px-8 lg:px-10 pt-4 sm:pt-5">
        <AudioPlayer content={chapterData} />
      </div>

      {/* Chapter Body */}
      <div className="px-3 sm:px-6 md:px-8 lg:px-10 py-4 sm:py-6 md:py-8 lg:py-10 relative">
        
        {/* Decorative page texture */}
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        ></div>

        <div className="prose prose-sm sm:prose-base lg:prose-lg max-w-none relative select-text">
          <div className="font-serif text-gray-800 leading-relaxed text-sm sm:text-base md:text-lg space-y-3 sm:space-y-4 md:space-y-5">
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
                  <p key={idx} className="mb-4 sm:mb-5 first:mt-0 leading-relaxed sm:leading-relaxed">
                    {para.segments.map((segment, segIdx) => (
                      segment.highlight ? (
                        <span key={segIdx} className={highlightClasses[segment.highlight]}>
                          {renderTextWithTerms(segment.text)}
                        </span>
                      ) : (
                        <span key={segIdx}>{renderTextWithTerms(segment.text)}</span>
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
                    "mb-4 sm:mb-5 first:mt-0 leading-relaxed sm:leading-relaxed",
                    para.highlight && highlightClasses[para.highlight]
                  )}
                >
                  {renderTextWithTerms(para.text)}
                </p>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}