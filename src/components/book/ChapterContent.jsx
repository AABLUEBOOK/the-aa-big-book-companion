import React from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

// Chapter content data with highlighting preserved
const CHAPTER_DATA = {
  "preface": {
    highlights: [
      { text: "BASIC TEXT", type: "sidebar", position: "right" }
    ],
    content: `THIS IS the fourth edition of the book "Alcoholics Anonymous." The first edition appeared in April 1939, and in the following sixteen years, more than 300,000 copies went into circulation. The second edition, published in 1955, reached a total of more than 1,150,500 copies. The third edition, which came off press in 1976, achieved a circulation of approximately 19,550,000 in all formats.

Because this book has become the basic text for our Society and has helped such large numbers of alcoholic men and women to recovery, there exists strong sentiment against any radical change being made in it. Therefore, the first portion of this volume, describing the A.A. recovery program, has been left largely untouched in the course of revisions made for the second, third, and fourth editions. The section called "The Doctor's Opinion" has been kept intact, just as it was originally written in 1939 by the late Dr. William D. Silkworth, our Society's great medical benefactor.

The second edition added the appendices, the Twelve Traditions, and the directions for getting in touch with A.A. But the chief change was in the section of personal stories, which was expanded to reflect the Fellowship's growth. "Bill's Story," "Doctor Bob's`
  },
  
  "foreword-first": {
    highlights: [
      { text: "PURPOSE OF THIS BOOK", type: "sidebar", position: "right" }
    ],
    content: `WE, OF Alcoholics Anonymous, are more than one hundred men and women who have recovered from a seemingly hopeless state of mind and body. To show other alcoholics precisely how we have recovered is the main purpose of this book. For them, we hope these pages will prove so convincing that no further authentication will be necessary. We think this account of our experiences will help every-one to better understand the alcoholic. Many do not comprehend that the alcoholic is a very sick person. And besides, we are sure that our way of living has its advantages for all.

It is important that we remain anonymous because we are too few, at present to handle the overwhelming number of personal appeals which may result from this publication. Being mostly business or professional folk, we could not well carry on our occupations in such an event. We would like it understood that our alcoholic work is an avocation.

When writing or speaking publicly about alcoholism, we urge each of our Fellowship to omit his personal name, designating himself instead as "a member of Alcoholics Anonymous."

Very earnestly we ask the press also, to observe this request, for otherwise we shall be greatly handicapped.

We are not an organization in the conventional`
  },

  "doctors-opinion": {
    highlights: [
      { text: "PHYSICAL ALLERGY", type: "sidebar", page: "xxv-23" },
      { text: "ALLERGY", type: "yellow" },
      { text: "PHENOMENON OF CRAVING", type: "yellow" },
      { text: "EFFECTS BY ALCOHOL", type: "sidebar" }
    ],
    content: (continues with The Doctor's Opinion content...)
  }
  
  // Additional chapters would be added here
};

export default function ChapterContent({ chapter, onNext, onPrevious }) {
  if (!chapter) return null;

  const chapterData = CHAPTER_DATA[chapter.id] || { content: "Content coming soon..." };

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
          <div className="font-serif text-stone-800 leading-relaxed text-lg">
            {chapterData.content.split('\n\n').map((paragraph, idx) => {
              const hasHighlight = chapterData.highlights?.some(h => 
                h.type !== 'sidebar' && paragraph.includes(h.text)
              );
              
              return (
                <p key={idx} className="mb-6 first:mt-0">
                  {hasHighlight ? (
                    <HighlightedText text={paragraph} highlights={chapterData.highlights} />
                  ) : (
                    paragraph
                  )}
                </p>
              );
            })}
          </div>
        </div>

        {/* Sidebar Annotations */}
        {chapterData.highlights?.filter(h => h.type === 'sidebar').map((highlight, idx) => (
          <div
            key={idx}
            className="hidden xl:block absolute right-0 top-24"
            style={{ transform: 'translateX(calc(100% + 2rem))' }}
          >
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-300 rounded-lg px-4 py-3 shadow-md rotate-2 max-w-[200px]">
              <div className="text-xs font-bold text-blue-900 uppercase tracking-wider text-center">
                {highlight.text}
              </div>
              {highlight.page && (
                <div className="text-xs text-blue-700 text-center mt-1">
                  P. {highlight.page}
                </div>
              )}
            </div>
          </div>
        ))}
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

function HighlightedText({ text, highlights }) {
  let result = text;
  const yellowHighlights = highlights.filter(h => h.type === 'yellow');
  const pinkHighlights = highlights.filter(h => h.type === 'pink');
  const blueHighlights = highlights.filter(h => h.type === 'blue');

  // Simple highlighting - wrap matched text
  yellowHighlights.forEach(h => {
    if (result.includes(h.text)) {
      result = result.replace(
        h.text,
        `<mark class="bg-yellow-200 px-1 rounded">${h.text}</mark>`
      );
    }
  });

  pinkHighlights.forEach(h => {
    if (result.includes(h.text)) {
      result = result.replace(
        h.text,
        `<mark class="bg-pink-200 px-1 rounded">${h.text}</mark>`
      );
    }
  });

  blueHighlights.forEach(h => {
    if (result.includes(h.text)) {
      result = result.replace(
        h.text,
        `<mark class="bg-blue-200 px-1 rounded">${h.text}</mark>`
      );
    }
  });

  return <span dangerouslySetInnerHTML={{ __html: result }} />;
}