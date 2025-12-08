import React, { useState, useEffect, memo } from "react";
import { cn } from "@/lib/utils";
import { loadChapterContent } from "./chapterLoader";
import AudioPlayer from "./AudioPlayer";
import { Loader2 } from "lucide-react";
import { renderTextWithTerms } from "./TermTooltip";
import { useQuery } from "@tanstack/react-query";
import { base44 } from "@/api/base44Client";

// Memoized paragraph component
const Paragraph = memo(({ para, idx, renderTerms, highlightSearch }) => {
  const highlightClasses = {
    'yellow': 'bg-yellow-400/30 px-1 py-0.5 rounded',
    'pink': 'text-pink-600 font-semibold',
    'blue': 'underline decoration-2 decoration-blue-600 underline-offset-2',
    'orange': 'text-orange-600 font-bold underline decoration-2 decoration-orange-600 underline-offset-2',
    'green': 'underline decoration-2 decoration-green-600 underline-offset-2',
    'pink-green-underline': 'pink-green-underline'
  };

  const getSegmentClasses = (segment) => {
    let classes = segment.highlight ? highlightClasses[segment.highlight] : '';
    if (segment.bold) classes += ' font-bold';
    return classes.trim();
  };

  // Page break marker
  if (para.pageNum) {
    return (
      <div key={idx} className="flex items-center gap-3 my-6 sm:my-8">
        <div className="flex-1 h-px bg-gray-300"></div>
        <span className="text-xs sm:text-sm text-gray-500 font-medium">Page {para.pageNum}</span>
        <div className="flex-1 h-px bg-gray-300"></div>
      </div>
    );
  }

  if (para.segments) {
    return (
      <p key={idx} className="mb-4 sm:mb-5 first:mt-0 leading-relaxed sm:leading-relaxed">
        {para.segments.map((segment, segIdx) => (
          segment.highlight || segment.bold ? (
            <span key={segIdx} className={getSegmentClasses(segment)}>
              {highlightSearch ? highlightSearch(renderTerms ? renderTerms(segment.text) : segment.text) : (renderTerms ? renderTerms(segment.text) : segment.text)}
            </span>
          ) : (
            <span key={segIdx}>{highlightSearch ? highlightSearch(renderTerms ? renderTerms(segment.text) : segment.text) : (renderTerms ? renderTerms(segment.text) : segment.text)}</span>
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
      {highlightSearch ? highlightSearch(renderTerms ? renderTerms(para.text) : para.text) : (renderTerms ? renderTerms(para.text) : para.text)}
    </p>
  );
});

export default function ChapterContent({ chapter, sectionRoute, searchQuery = '' }) {
  const [chapterData, setChapterData] = useState(null);
  const [loading, setLoading] = useState(true);

  const { data: settings } = useQuery({
    queryKey: ['user-settings'],
    queryFn: async () => {
      const list = await base44.entities.UserSettings.list();
      return list[0] || null;
    },
  });

  useEffect(() => {
    if (!chapter) return;
    
    setLoading(true);
    loadChapterContent(chapter.id).then(content => {
      setChapterData(content);
      setLoading(false);
    });
  }, [chapter?.id]);

  // Scroll to first search match on mount
  useEffect(() => {
    if (searchQuery && searchQuery.trim().length >= 2) {
      setTimeout(() => {
        const marks = document.querySelectorAll('mark');
        if (marks.length > 0) {
          marks[0].scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }, 500);
    }
  }, [searchQuery, chapter?.id]);



  if (!chapter) return null;

  if (loading) {
    return (
      <section className="bg-white rounded-xl sm:rounded-2xl shadow-lg border border-gray-200 p-8 flex items-center justify-center min-h-[200px]">
        <Loader2 className="w-8 h-8 animate-spin text-[#25DCE6]" />
      </section>
    );
  }

  const data = chapterData || { paragraphs: [{ text: "Content loading..." }] };

  // Apply settings
  const fontSizeClasses = {
    'small': 'text-sm sm:text-base md:text-lg',
    'medium': 'text-base sm:text-lg md:text-xl',
    'large': 'text-lg sm:text-xl md:text-2xl',
    'extra-large': 'text-xl sm:text-2xl md:text-3xl',
  };

  const lineSpacingClasses = {
    'compact': 'leading-normal',
    'normal': 'leading-relaxed',
    'relaxed': 'leading-loose',
  };

  const themeClasses = {
    'light': 'bg-white text-gray-800',
    'dark': 'bg-gray-900 text-gray-100',
    'sepia': 'bg-[#f4ecd8] text-[#5c4b37]',
  };

  const fontSize = settings?.font_size || 'medium';
  const lineSpacing = settings?.line_spacing || 'normal';
  const theme = settings?.theme || 'light';
  const dyslexiaFont = settings?.dyslexia_font || false;

  // Helper function to highlight search terms in text
  const highlightSearchTerm = (text, query) => {
    if (!query || query.trim().length < 2) return text;
    
    const regex = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
    const parts = text.split(regex);
    
    return parts.map((part, i) => 
      regex.test(part) ? (
        <mark key={i} className="bg-yellow-300/60 px-0.5 rounded">
          {part}
        </mark>
      ) : part
    );
  };

  return (
    <section 
      className={`${themeClasses[theme]} rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl border border-gray-200 overflow-visible relative`}
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

        </div>
      </header>

      {/* Audio Player */}
      <div className="px-3 sm:px-6 md:px-8 lg:px-10 pt-4 sm:pt-5">
        <AudioPlayer content={data} />
      </div>

      {/* Chapter Body */}
      <div className="px-3 sm:px-6 md:px-8 lg:px-10 py-4 sm:py-6 md:py-8 lg:py-10 relative">
        <div className="prose prose-sm sm:prose-base lg:prose-lg max-w-none relative select-text">
          <div className={`${dyslexiaFont ? 'font-sans' : 'font-serif'} ${fontSizeClasses[fontSize]} ${lineSpacingClasses[lineSpacing]} space-y-3 sm:space-y-4 md:space-y-5`}>
            {data.paragraphs?.map((para, idx) => (
              <Paragraph 
                key={idx} 
                para={para} 
                idx={idx} 
                renderTerms={renderTextWithTerms}
                highlightSearch={(text) => highlightSearchTerm(text, searchQuery)}
              />
            ))}
          </div>
        </div>
        </div>
    </section>
  );
}