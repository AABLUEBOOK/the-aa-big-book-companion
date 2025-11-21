import React from "react";
import { cn } from "@/lib/utils";
import { CHAPTER_CONTENT } from "./allChapterContent";
import AudioPlayer from "./AudioPlayer";
import BookmarkButton from "./BookmarkButton";
import VerticalTabsLeft from "./VerticalTabsLeft";

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

      {/* Left Side Tabs */}
      <VerticalTabsLeft tabs={chapterData.tabs} />

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
              const baseClasses = "mb-6 first:mt-0 leading-relaxed";
              const highlightClasses = {
                'yellow': 'bg-yellow-400/30 px-2 py-1 rounded',
                'pink': 'bg-pink-400/30 px-2 py-1 rounded',
                'blue': 'bg-blue-400/30 px-2 py-1 rounded',
                'purple': 'bg-purple-400/30 px-2 py-1 rounded',
                'orange': 'bg-orange-400/30 px-2 py-1 rounded',
                'green': 'bg-green-400/30 px-2 py-1 rounded'
              };

              return (
                <p 
                  key={idx} 
                  className={cn(
                    baseClasses,
                    para.highlight && highlightClasses[para.highlight],
                    para.underline && "border-b-2 border-purple-400 pb-1"
                  )}
                >
                  {para.text}
                </p>
              );
            })}
          </div>
        </div>

        {/* Sidebar Annotations */}
        <div className="hidden xl:block absolute -right-64 top-24 w-56 space-y-4">
          {chapterData.highlights?.filter(h => h.type === 'sidebar').map((highlight, idx) => {
            const colorClasses = {
              yellow: 'bg-[#25DCE6]/10 border-[#25DCE6]/40 text-[#25DCE6]',
              pink: 'bg-pink-500/10 border-pink-400/40 text-pink-400'
            };
            const bgClass = highlight.color ? colorClasses[highlight.color] : 'bg-[#25DCE6]/10 border-[#25DCE6]/40 text-[#25DCE6]';
            
            return (
              <div
                key={idx}
                className={`${bgClass} border-2 rounded-lg px-4 py-3 shadow-lg hover:shadow-xl transition-all backdrop-blur-sm`}
                style={{ transform: `rotate(${idx % 2 === 0 ? '1deg' : '-1deg'})` }}
              >
                <div className="text-xs font-bold uppercase tracking-wider text-center leading-tight">
                  {highlight.text}
                </div>
                {highlight.subtext && (
                  <div className="text-xs text-[#FFFFFD]/70 text-center mt-1">
                    {highlight.subtext}
                  </div>
                )}
                {highlight.page && (
                  <div className="text-xs opacity-80 text-center mt-1 font-mono">
                    P. {highlight.page}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}