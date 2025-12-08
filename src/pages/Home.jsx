import React, { memo, useState } from "react";
import { Link } from "react-router-dom";
import { ChevronRight, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import SearchBar from "../components/book/SearchBar";
import SettingsPanel from "../components/reading/SettingsPanel";

// Memoized chapter item for better performance
const ChapterItem = memo(function ChapterItem({ chapter, createPageUrl }) {
  return (
    <Link
      to={`${createPageUrl("Chapter")}?id=${chapter.id}`}
      className="flex items-center justify-between px-3 sm:px-4 py-3 sm:py-3.5 
                 border border-[#25DCE6]/30 rounded-lg
                 bg-[#2A3440] hover:bg-[#25DCE6]/10 active:bg-[#25DCE6]/20
                 hover:border-[#25DCE6]/50 active:scale-[0.99]
                 transition-all duration-150 shadow-sm"
    >
      <div className="flex items-center gap-2 sm:gap-3 min-w-0 flex-1">
        {chapter.chapter && (
          <span className="text-[#25DCE6] text-xs sm:text-sm font-medium w-6 sm:w-8 flex-shrink-0">
            {chapter.chapter}.
          </span>
        )}
        <span className={`text-[#FFFFFD] text-sm sm:text-base truncate ${!chapter.chapter ? 'pl-0' : ''}`}>
          {chapter.title}
        </span>
      </div>
      <div className="flex items-center gap-2 flex-shrink-0 ml-2">
        <span className="text-[#FFFFFD]/50 text-xs sm:text-sm">
          p. {chapter.pages}
        </span>
        <ChevronRight className="w-4 h-4 text-[#25DCE6]/60" />
      </div>
    </Link>
  );
});

function createPageUrl(pageName) {
  return `/${pageName}`;
}

const CHAPTERS = [
  // Front Matter
  { id: "preface", title: "Preface", pages: "xi-xii", section: "Section1" },
  { id: "foreword-first", title: "Foreword To First Edition", pages: "xiii-xiv", section: "Section1" },
  { id: "foreword-second", title: "Foreword To Second Edition", pages: "xv-xxi", section: "Section1" },
  { id: "foreword-third", title: "Foreword To Third Edition", pages: "xxii", section: "Section1" },
  { id: "foreword-fourth", title: "Foreword To Fourth Edition", pages: "xxiii-xxiv", section: "Section1" },
  { id: "doctors-opinion", title: "The Doctor's Opinion", pages: "xxv-xxxii", section: "Section1" },
  
  // Numbered Chapters
  { id: "bills-story", title: "Bill's Story", pages: "1-16", chapter: 1, section: "Section1" },
  { id: "there-is-solution", title: "There Is A Solution", pages: "17-29", chapter: 2, section: "Section1" },
  { id: "more-about-alcoholism", title: "More About Alcoholism", pages: "30-43", chapter: 3, section: "Section1" },
  { id: "we-agnostics", title: "We Agnostics", pages: "44-57", chapter: 4, section: "Section1" },
  { id: "how-it-works", title: "How It Works", pages: "58-71", chapter: 5, section: "Section1" },
  { id: "into-action", title: "Into Action", pages: "72-88", chapter: 6, section: "Section1" },
  { id: "working-with-others", title: "Working With Others", pages: "89-103", chapter: 7, section: "Section1" },
  { id: "to-wives", title: "To Wives", pages: "104-121", chapter: 8, section: "Section1" },
  { id: "family-afterward", title: "The Family Afterward", pages: "122-135", chapter: 9, section: "Section1" },
  { id: "to-employers", title: "To Employers", pages: "136-150", chapter: 10, section: "Section1" },
  { id: "vision-for-you", title: "A Vision For You", pages: "151-164", chapter: 11, section: "Section1" },
  
  // Personal Stories
  { id: "dr-bob-nightmare", title: "Doctor Bob's Nightmare", pages: "171-181" },
  { id: "aa-number-three", title: "Alcoholic Anonymous Number Three", pages: "180-192" },
  { id: "women-suffer-too", title: "Women Suffer Too", pages: "222-233" },
  { id: "man-who-mastered-fear", title: "The Man Who Mastered Fear", pages: "246-257" },
  { id: "he-sold-himself-short", title: "He Sold Himself Short", pages: "260-267" },
  { id: "gratitude-in-action", title: "Gratitude in Action", pages: "275-281" },
  { id: "keys-of-the-kingdom", title: "The Keys of the Kingdom", pages: "304-321" },
  { id: "our-southern-friend", title: "Our Southern Friend", pages: "423-438" },
  
  // Appendices
  { id: "appendices", title: "Appendices", pages: "561-575" },
];

const Home = memo(function Home() {
  const [settingsOpen, setSettingsOpen] = useState(false);

  return (
    <div className="min-h-screen min-h-[100dvh] w-full bg-[#222A31] overflow-x-hidden overflow-y-auto">
        {/* Header */}
        <header className="bg-[#2A3440] border-b border-[#25DCE6]/20 px-3 sm:px-4 py-4 sm:py-5 w-full position-relative z-10">
          <div className="max-w-3xl mx-auto px-2 relative">
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => setSettingsOpen(true)}
              className="text-white hover:text-[#25DCE6] absolute right-2 top-0"
            >
              <Settings className="w-4 h-4" />
            </Button>
            <div className="text-center mb-3">
              <h1 className="text-lg sm:text-xl md:text-2xl font-serif font-bold text-[#FFFFFD] leading-tight">
                Alcoholics Anonymous
              </h1>
            </div>
            <p className="text-[11px] sm:text-xs md:text-sm text-[#25DCE6] leading-snug text-center">
              The Story of How Many Thousands of Men and Women Have Recovered from Alcoholism
            </p>
            <div className="mt-3 max-w-xs mx-auto">
              <SearchBar />
            </div>
          </div>
        </header>

      {/* Highlighting Guide - Compact */}
      <div className="px-4 py-3">
        <div className="max-w-3xl mx-auto">
          <p className="text-[10px] sm:text-xs text-[#FFFFFD]/70 font-medium text-center mb-2">Reference Guide</p>
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-1">
            <div className="flex items-center gap-1.5">
              <span className="w-4 h-4 rounded-sm bg-orange-400"></span>
              <span className="text-[10px] sm:text-xs text-[#FFFFFD] font-medium">Steps</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-4 h-4 rounded-sm bg-green-400"></span>
              <span className="text-[10px] sm:text-xs text-[#FFFFFD] font-medium">Prayers</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-4 h-4 rounded-sm bg-blue-400"></span>
              <span className="text-[10px] sm:text-xs text-[#FFFFFD] font-medium">Promises</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-4 h-4 rounded-sm bg-yellow-400"></span>
              <span className="text-[10px] sm:text-xs text-[#FFFFFD] font-medium">General Info</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-4 h-4 rounded-sm bg-pink-400"></span>
              <span className="text-[10px] sm:text-xs text-[#FFFFFD] font-medium">Tab Reference</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-3xl mx-auto px-3 sm:px-4 py-4 sm:py-6 space-y-6">
        {/* Chapter List */}
        <div>
          <h2 className="text-lg font-semibold text-white mb-3">Chapters</h2>
          <div className="flex flex-col gap-2 sm:gap-2.5">
            {CHAPTERS.map((chapter) => (
              <ChapterItem key={chapter.id} chapter={chapter} createPageUrl={createPageUrl} />
            ))}
          </div>
        </div>
      </main>

      {/* Settings Panel */}
      {settingsOpen && (
        <SettingsPanel 
          isOpen={settingsOpen} 
          onClose={() => setSettingsOpen(false)}
        />
      )}

      {/* Footer */}
      <footer className="bg-[#2A3440]/50 border-t border-[#25DCE6]/10 px-4 py-4 mt-4">
        <p className="text-center text-[10px] sm:text-xs text-[#FFFFFD]/40">
          Fourth Edition • Alcoholics Anonymous World Services, Inc.
        </p>
      </footer>
    </div>
  );
});

export default Home;