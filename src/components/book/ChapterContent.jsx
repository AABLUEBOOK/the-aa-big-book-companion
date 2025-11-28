import React, { useState, useEffect, memo } from "react";
import { cn } from "@/lib/utils";
import { loadChapterContent } from "./chapterLoader";
import AudioPlayer from "./AudioPlayer";
import BookmarkButton from "./BookmarkButton";
import { Loader2 } from "lucide-react";
import { renderTextWithTerms } from "./TermTooltip";

// Memoized paragraph component
const Paragraph = memo(({ para, idx, renderTerms }) => {
  const highlightClasses = {
    'yellow': 'bg-yellow-400/30 px-1 py-0.5 rounded',
    'pink': 'bg-pink-400/40 px-1 py-0.5 rounded',
    'blue': 'bg-blue-400/30 px-1 py-0.5 rounded',
    'orange': 'bg-orange-400/30 px-1 py-0.5 rounded',
    'green': 'bg-green-400/30 px-1 py-0.5 rounded'
  };

  if (para.segments) {
    return (
      <p key={idx} className="mb-4 sm:mb-5 first:mt-0 leading-relaxed sm:leading-relaxed">
        {para.segments.map((segment, segIdx) => (
          segment.highlight ? (
            <span key={segIdx} className={highlightClasses[segment.highlight]}>
              {renderTerms ? renderTerms(segment.text) : segment.text}
            </span>
          ) : (
            <span key={segIdx}>{renderTerms ? renderTerms(segment.text) : segment.text}</span>
          )
        ))}
      </p>
    );
  }

  return (
    <p 
      key={idx} 
      className={cn(
        "mb-4 sm:mb-5 first:mt-0 leading-relaxed sm:leading-relaxed",
        para.highlight && highlightClasses[para.highlight]
      )}
    >
      {renderTerms ? renderTerms(para.text) : para.text}
    </p>
  );
});

export default function ChapterContent({ chapter, sectionRoute }) {
  const [chapterData, setChapterData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!chapter) return;
    
    setLoading(true);
    loadChapterContent(chapter.id).then(content => {
      setChapterData(content);
      setLoading(false);
    });
  }, [chapter?.id]);

  if (!chapter) return null;

  if (loading) {
    return (
      <section className="bg-white rounded-xl sm:rounded-2xl shadow-lg border border-gray-200 p-8 flex items-center justify-center min-h-[200px]">
        <Loader2 className="w-8 h-8 animate-spin text-[#25DCE6]" />
      </section>
    );
  }

  const data = chapterData || { paragraphs: [{ text: "Content loading..." }] };

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
        <AudioPlayer content={data} />
      </div>

      {/* Chapter Body */}
      <div className="px-3 sm:px-6 md:px-8 lg:px-10 py-4 sm:py-6 md:py-8 lg:py-10 relative">
        <div className="prose prose-sm sm:prose-base lg:prose-lg max-w-none relative select-text">
          <div className="font-serif text-gray-800 leading-relaxed text-sm sm:text-base md:text-lg space-y-3 sm:space-y-4 md:space-y-5">
            {data.paragraphs?.map((para, idx) => (
              <Paragraph 
                key={idx} 
                para={para} 
                idx={idx} 
                renderTerms={renderTextWithTerms}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}