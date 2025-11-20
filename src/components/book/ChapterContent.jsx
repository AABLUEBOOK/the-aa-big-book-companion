import React from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

// Full chapter content with highlights
const CHAPTER_CONTENT = {
  "preface": {
    highlights: [
      { text: "BASIC TEXT", type: "sidebar" },
      { text: "PERSONAL STORIES", type: "sidebar", subtext: "3 QUESTIONS" }
    ],
    paragraphs: [
      {
        text: `THIS IS the fourth edition of the book "Alcoholics Anonymous." The first edition appeared in April 1939, and in the following sixteen years, more than 300,000 copies went into circulation. The second edition, published in 1955, reached a total of more than 1,150,500 copies. The third edition, which came off press in 1976, achieved a circulation of approximately 19,550,000 in all formats.`,
        highlight: "basic-text"
      },
      {
        text: `Because this book has become the basic text for our Society and has helped such large numbers of alcoholic men and women to recovery, there exists strong sentiment against any radical change being made in it. Therefore, the first portion of this volume, describing the A.A. recovery program, has been left largely untouched in the course of revisions made for the second, third, and fourth editions. The section called "The Doctor's Opinion" has been kept intact, just as it was originally written in 1939 by the late Dr. William D. Silkworth, our Society's great medical benefactor.`
      },
      {
        text: `The second edition added the appendices, the Twelve Traditions, and the directions for getting in touch with A.A. But the chief change was in the section of personal stories, which was expanded to reflect the Fellowship's growth. "Bill's Story," "Doctor Bob's Nightmare," and one other personal history from the first edition were retained intact; three were edited and one of these was retitled; new versions of two stories were written, with new titles; thirty completely new stories were added; and the story section was divided into three parts, under the same headings that are used now.`
      },
      {
        text: `All changes made over the years in the Big Book (A.A. members' fond nickname for this volume) have had the same purpose: to represent the current membership of Alcoholics Anonymous more accurately, and thereby to reach more alcoholics.`,
      },
      {
        text: `If you have a drinking problem, we hope that you may pause in reading one of the forty-two personal stories and think: "Yes, that happened to me"; or, more important, "Yes, I've felt like that"; or, most important, "Yes, I believe this program can work for me too."`,
        highlight: "yellow"
      }
    ]
  },
  "foreword-first": {
    highlights: [
      { text: "PURPOSE OF THIS BOOK", type: "sidebar" }
    ],
    paragraphs: [
      {
        text: `WE, OF Alcoholics Anonymous, are more than one hundred men and women who have recovered from a seemingly hopeless state of mind and body.`,
        highlight: "blue",
        highlightText: `To show other alcoholics precisely how we have recovered is the main purpose of this book.`
      },
      {
        text: `For them, we hope these pages will prove so convincing that no further authentication will be necessary. We think this account of our experiences will help every-one to better understand the alcoholic. Many do not comprehend that the alcoholic is a very sick person. And besides, we are sure that our way of living has its advantages for all.`
      },
      {
        text: `It is important that we remain anonymous because we are too few, at present to handle the overwhelming number of personal appeals which may result from this publication. Being mostly business or professional folk, we could not well carry on our occupations in such an event. We would like it understood that our alcoholic work is an avocation.`
      }
    ]
  }
};

export default function ChapterContent({ chapter, onNext, onPrevious }) {
  if (!chapter) return null;

  const chapterData = CHAPTER_CONTENT[chapter.id] || { 
    paragraphs: [{ text: "Content for this chapter will be added soon." }],
    highlights: []
  };

  return (
    <div className="bg-[#2A3440] rounded-2xl shadow-2xl border border-[#25DCE6]/20 overflow-hidden">
      
      {/* Chapter Header */}
      <div className="bg-gradient-to-r from-[#2A3440] to-[#222A31] border-b border-[#25DCE6]/20 px-8 sm:px-12 py-8">
        {chapter.chapter && (
          <div className="text-sm font-medium text-[#25DCE6]/70 uppercase tracking-widest mb-2">
            Chapter {chapter.chapter}
          </div>
        )}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#FFFFFD] leading-tight">
          {chapter.title}
        </h1>
        <div className="mt-3 text-sm text-[#25DCE6]/60">
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

        <div className="prose prose-lg max-w-none relative">
          <div className="font-serif text-[#FFFFFD] leading-relaxed text-lg space-y-6">
            {chapterData.paragraphs?.map((para, idx) => {
              const baseClasses = "mb-6 first:mt-0 leading-relaxed";
              const highlightClasses = {
                'yellow': 'bg-[#25DCE6]/20 px-2 py-1 rounded border-l-2 border-[#25DCE6]',
                'pink': 'bg-pink-500/20 px-2 py-1 rounded border-l-2 border-pink-400',
                'blue': 'bg-blue-500/20 px-2 py-1 rounded border-l-2 border-blue-400',
                'basic-text': 'border-l-4 border-[#25DCE6] pl-4 bg-[#25DCE6]/10 py-2'
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
              className="bg-[#25DCE6]/10 border-2 border-[#25DCE6]/40 rounded-lg px-4 py-3 shadow-lg hover:shadow-xl hover:bg-[#25DCE6]/15 transition-all backdrop-blur-sm"
              style={{ transform: `rotate(${idx % 2 === 0 ? '1deg' : '-1deg'})` }}
            >
              <div className="text-xs font-bold text-[#25DCE6] uppercase tracking-wider text-center leading-tight">
                {highlight.text}
              </div>
              {highlight.subtext && (
                <div className="text-xs text-[#FFFFFD]/70 text-center mt-1">
                  {highlight.subtext}
                </div>
              )}
              {highlight.page && (
                <div className="text-xs text-[#25DCE6]/80 text-center mt-1 font-mono">
                  P. {highlight.page}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Footer */}
      <div className="bg-[#222A31] border-t border-[#25DCE6]/20 px-8 sm:px-12 py-6 flex items-center justify-between">
        <Button
          variant="outline"
          onClick={onPrevious}
          disabled={!onPrevious}
          className="gap-2 border-[#25DCE6]/40 text-[#25DCE6] hover:bg-[#25DCE6]/10 hover:border-[#25DCE6] disabled:opacity-30"
        >
          <ChevronLeft className="w-4 h-4" />
          <span className="hidden sm:inline">Previous</span>
        </Button>

        <div className="text-sm text-[#25DCE6]/70 font-medium">
          {currentIndex + 1} of {CHAPTERS.length}
        </div>

        <Button
          variant="outline"
          onClick={onNext}
          disabled={!onNext}
          className="gap-2 border-[#25DCE6]/40 text-[#25DCE6] hover:bg-[#25DCE6]/10 hover:border-[#25DCE6] disabled:opacity-30"
        >
          <span className="hidden sm:inline">Next</span>
          <ChevronRight className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
}