import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

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
  
  // Personal Stories Intro
  { id: "how-forty-two", title: "How Forty-Two Alcoholics Recovered From Their Malady", pages: "165-166", section: "Section2" },
  
  // Personal Stories Sections
  { id: "pioneers", title: "Pioneers of A.A.", pages: "169-276", section: "Section3" },
  { id: "stopped-in-time", title: "They Stopped in Time", pages: "277-431", section: "Section4" },
  { id: "lost-nearly-all", title: "They Lost Nearly All", pages: "435-559", section: "Section5" },
  
  // Appendices
  { id: "aa-tradition", title: "The A.A. Tradition", pages: "561-566", section: "Section6" },
  { id: "spiritual-experience", title: "Spiritual Experience", pages: "567-568", section: "Section6" },
  { id: "medical-view", title: "The Medical View On A.A.", pages: "569-570", section: "Section6" },
  { id: "lasker-award", title: "The Lasker Award", pages: "571", section: "Section6" },
  { id: "religious-view", title: "The Religious View On A.A.", pages: "572", section: "Section6" },
  { id: "get-in-touch", title: "How To Get in Touch With A.A.", pages: "573", section: "Section6" },
  { id: "twelve-concepts", title: "Twelve Concepts (Short Form)", pages: "574-575", section: "Section6" },
];

export default function Home() {
  return (
    <div className="min-h-screen min-h-[100dvh] w-full bg-[#222A31] overflow-x-hidden">
      {/* Header */}
      <header className="bg-[#2A3440] border-b border-[#25DCE6]/20 px-3 sm:px-4 py-4 sm:py-6 w-full">
        <div className="max-w-3xl mx-auto text-center px-2">
          <h1 className="text-lg sm:text-xl md:text-2xl font-serif font-bold text-[#FFFFFD] leading-tight">
            Alcoholics Anonymous
          </h1>
          <p className="text-[11px] sm:text-xs md:text-sm text-[#25DCE6] mt-1 leading-snug">
            The Story of How Many Thousands of Men and Women Have Recovered from Alcoholism
          </p>
        </div>
      </header>

      {/* Highlighting Guide - Compact */}
      <div className="bg-white border-b border-gray-200 px-4 py-3">
        <div className="max-w-3xl mx-auto">
          <p className="text-[10px] sm:text-xs text-gray-500 text-center mb-2">Highlighting Guide</p>
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-1">
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-sm bg-yellow-400/30"></span>
              <span className="text-[10px] sm:text-xs text-gray-600">Problem</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-sm bg-pink-400/40"></span>
              <span className="text-[10px] sm:text-xs text-gray-600">Solution</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-sm bg-blue-400/30"></span>
              <span className="text-[10px] sm:text-xs text-gray-600">Action</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-sm bg-green-400/30"></span>
              <span className="text-[10px] sm:text-xs text-gray-600">Result</span>
            </div>
          </div>
        </div>
      </div>

      {/* Chapter List */}
      <main className="max-w-3xl mx-auto px-3 sm:px-4 py-4 sm:py-6">
        <div className="flex flex-col gap-2 sm:gap-2.5">
          {CHAPTERS.map((chapter, index) => (
            <Link
              key={chapter.id}
              to={`${createPageUrl(chapter.section)}#${chapter.id}`}
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
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#2A3440]/50 border-t border-[#25DCE6]/10 px-4 py-4 mt-4">
        <p className="text-center text-[10px] sm:text-xs text-[#FFFFFD]/40">
          Fourth Edition • Alcoholics Anonymous World Services, Inc.
        </p>
      </footer>
    </div>
  );
}