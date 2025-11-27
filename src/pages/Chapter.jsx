import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, BookOpen, BookmarkCheck } from "lucide-react";
import ChapterContent from "../components/book/ChapterContent";
import BookmarksList from "../components/book/BookmarksList";

function createPageUrl(pageName) {
  return `/${pageName}`;
}

const ALL_CHAPTERS = [
  // Front Matter
  { id: "preface", title: "Preface", pageNum: "xi", pages: "xi-xii" },
  { id: "foreword-first", title: "Foreword To First Edition", pageNum: "xiii", pages: "xiii-xiv" },
  { id: "foreword-second", title: "Foreword To Second Edition", pageNum: "xv", pages: "xv-xxi" },
  { id: "foreword-third", title: "Foreword To Third Edition", pageNum: "xxii", pages: "xxii" },
  { id: "foreword-fourth", title: "Foreword To Fourth Edition", pageNum: "xxiii", pages: "xxiii-xxiv" },
  { id: "doctors-opinion", title: "The Doctor's Opinion", pageNum: "xxv", pages: "xxv-xxxii" },
  
  // Numbered Chapters
  { id: "bills-story", title: "Bill's Story", pageNum: "1", pages: "1-16", chapter: 1 },
  { id: "there-is-solution", title: "There Is A Solution", pageNum: "17", pages: "17-29", chapter: 2 },
  { id: "more-about-alcoholism", title: "More About Alcoholism", pageNum: "30", pages: "30-43", chapter: 3 },
  { id: "we-agnostics", title: "We Agnostics", pageNum: "44", pages: "44-57", chapter: 4 },
  { id: "how-it-works", title: "How It Works", pageNum: "58", pages: "58-71", chapter: 5 },
  { id: "into-action", title: "Into Action", pageNum: "72", pages: "72-88", chapter: 6 },
  { id: "working-with-others", title: "Working With Others", pageNum: "89", pages: "89-103", chapter: 7 },
  { id: "to-wives", title: "To Wives", pageNum: "104", pages: "104-121", chapter: 8 },
  { id: "family-afterward", title: "The Family Afterward", pageNum: "122", pages: "122-135", chapter: 9 },
  { id: "to-employers", title: "To Employers", pageNum: "136", pages: "136-150", chapter: 10 },
  { id: "vision-for-you", title: "A Vision For You", pageNum: "151", pages: "151-164", chapter: 11 },
  
  // Personal Stories
  { id: "how-forty-two", title: "How Forty-Two Alcoholics Recovered", pageNum: "165", pages: "165-166" },
  { id: "dr-bob-nightmare", title: "Doctor Bob\'s Nightmare", pageNum: "171", pages: "171-181" },
  { id: "pioneers", title: "Pioneers of A.A.", pageNum: "169", pages: "169-276" },
  { id: "stopped-in-time", title: "They Stopped in Time", pageNum: "277", pages: "277-431" },
  { id: "lost-nearly-all", title: "They Lost Nearly All", pageNum: "435", pages: "435-559" },
  
  // Appendices
  { id: "aa-tradition", title: "The A.A. Tradition", pageNum: "561", pages: "561-566" },
  { id: "spiritual-experience", title: "Spiritual Experience", pageNum: "567", pages: "567-568" },
  { id: "medical-view", title: "The Medical View On A.A.", pageNum: "569", pages: "569-570" },
  { id: "lasker-award", title: "The Lasker Award", pageNum: "571", pages: "571" },
  { id: "religious-view", title: "The Religious View On A.A.", pageNum: "572", pages: "572" },
  { id: "get-in-touch", title: "How To Get in Touch With A.A.", pageNum: "573", pages: "573" },
  { id: "twelve-concepts", title: "Twelve Concepts (Short Form)", pageNum: "574", pages: "574-575" },
];

export default function Chapter() {
  const [bookmarksOpen, setBookmarksOpen] = useState(false);
  
  // Get chapter ID from URL
  const urlParams = new URLSearchParams(window.location.search);
  const chapterId = urlParams.get('id') || 'preface';
  
  // Find current chapter
  const currentIndex = ALL_CHAPTERS.findIndex(c => c.id === chapterId);
  const chapter = ALL_CHAPTERS[currentIndex] || ALL_CHAPTERS[0];
  
  // Get prev/next chapters
  const prevChapter = currentIndex > 0 ? ALL_CHAPTERS[currentIndex - 1] : null;
  const nextChapter = currentIndex < ALL_CHAPTERS.length - 1 ? ALL_CHAPTERS[currentIndex + 1] : null;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen min-h-[100dvh] bg-[#222A31] pb-20 sm:pb-24">
      
      {/* Top Navigation */}
      <header className="bg-[#2A3440]/95 backdrop-blur-sm border-b border-[#25DCE6]/20 sticky top-0 z-40 shadow-lg">
        <nav className="w-full px-3 sm:px-4 lg:px-6" aria-label="Main navigation">
          <div className="flex items-center justify-between h-12 sm:h-14 md:h-16">
            <Link 
              to={createPageUrl("Home")} 
              className="flex items-center gap-1.5 sm:gap-2 text-[#25DCE6] hover:text-[#FFFFFD] active:text-[#FFFFFD] transition-colors min-h-[44px] min-w-[44px] px-1"
              aria-label="Back to Table of Contents"
            >
              <ArrowLeft className="w-5 h-5 sm:w-5 sm:h-5" />
              <span className="font-medium text-sm sm:text-base hidden xs:inline">Table of Contents</span>
              <span className="font-medium text-sm sm:text-base xs:hidden">Contents</span>
            </Link>
            
            <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <BookOpen className="w-4 h-4 sm:w-5 sm:h-5 text-[#25DCE6]" />
                <span className="font-serif font-semibold text-[#FFFFFD] text-xs sm:text-sm md:text-base">
                  p. {chapter.pages}
                </span>
              </div>

              <Button
                onClick={() => setBookmarksOpen(!bookmarksOpen)}
                variant="ghost"
                size="sm"
                className="text-[#25DCE6] hover:bg-[#25DCE6]/10 active:bg-[#25DCE6]/20 h-11 w-11 sm:h-10 sm:w-10 p-0"
                aria-label="Open bookmarks"
              >
                <BookmarkCheck className="w-5 h-5 sm:w-5 sm:h-5" />
              </Button>
            </div>
          </div>
        </nav>
      </header>

      {/* Bookmarks Panel */}
      {bookmarksOpen && (
        <div className="fixed inset-0 z-50" role="dialog" aria-modal="true" aria-label="Bookmarks">
          <div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm" 
            onClick={() => setBookmarksOpen(false)} 
            aria-hidden="true"
          />
          <aside className="absolute right-0 top-0 h-full w-full sm:w-96 max-w-full bg-[#2A3440] shadow-2xl overflow-y-auto overscroll-contain p-4 sm:p-6">
            <BookmarksList onClose={() => setBookmarksOpen(false)} />
          </aside>
        </div>
      )}

      <main className="w-full px-2 sm:px-4 lg:px-6 xl:px-8 py-3 sm:py-5 lg:py-8 max-w-4xl mx-auto">
        
        {/* Chapter Content */}
        <article className="scroll-mt-16">
          <ChapterContent chapter={chapter} sectionRoute="Chapter" />
        </article>

        {/* Bottom Navigation */}
        <div className="bg-[#2A3440] rounded-xl border border-[#25DCE6]/20 p-4 sm:p-6 md:p-8 mt-6 sm:mt-8 space-y-4">
          
          {/* Prev/Next Navigation */}
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 justify-between">
            {prevChapter ? (
              <Link to={`${createPageUrl("Chapter")}?id=${prevChapter.id}`} className="flex-1">
                <Button
                  variant="outline"
                  className="w-full border-[#25DCE6]/40 text-[#25DCE6] hover:bg-[#25DCE6]/10 active:bg-[#25DCE6]/20 min-h-[44px] justify-start"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  <span className="truncate">{prevChapter.title}</span>
                </Button>
              </Link>
            ) : <div className="flex-1" />}
            
            {nextChapter ? (
              <Link to={`${createPageUrl("Chapter")}?id=${nextChapter.id}`} className="flex-1">
                <Button
                  className="w-full bg-[#25DCE6] text-[#222A31] hover:bg-[#25DCE6]/90 active:bg-[#25DCE6]/80 min-h-[44px] justify-end"
                >
                  <span className="truncate">{nextChapter.title}</span>
                  <ArrowLeft className="w-4 h-4 ml-2 rotate-180" />
                </Button>
              </Link>
            ) : null}
          </div>

          {/* Back to Contents */}
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 justify-center pt-2 border-t border-[#25DCE6]/20">
            <Button
              onClick={scrollToTop}
              variant="outline"
              className="border-[#25DCE6]/40 text-[#25DCE6] hover:bg-[#25DCE6]/10 active:bg-[#25DCE6]/20 min-h-[44px]"
            >
              Back to Top
            </Button>
            <Link to={createPageUrl("Home")} className="w-full sm:w-auto">
              <Button 
                variant="outline"
                className="w-full border-[#25DCE6]/40 text-[#25DCE6] hover:bg-[#25DCE6]/10 active:bg-[#25DCE6]/20 min-h-[44px]"
              >
                Table of Contents
              </Button>
            </Link>
          </div>
        </div>
      </main>

    </div>
  );
}