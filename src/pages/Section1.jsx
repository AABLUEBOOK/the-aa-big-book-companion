import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, BookOpen, BookmarkCheck } from "lucide-react";
import ChapterContent from "../components/book/ChapterContent";
import BookNavigation, { MobileBookNavigation } from "../components/navigation/BookNavigation";
import BookmarksList from "../components/book/BookmarksList";

function createPageUrl(pageName) {
  return `/${pageName}`;
}

const CHAPTERS = [
  {
    id: "preface",
    title: "Preface",
    pageNum: "xi"
  },
  {
    id: "foreword-first",
    title: "Foreword to First Edition",
    pageNum: "xiii"
  },
  {
    id: "foreword-second",
    title: "Foreword to Second Edition",
    pageNum: "xv"
  },
  {
    id: "foreword-third",
    title: "Foreword to Third Edition",
    pageNum: "xxii"
  },
  {
    id: "foreword-fourth",
    title: "Foreword to Fourth Edition",
    pageNum: "xxiii"
  },
  {
    id: "doctors-opinion",
    title: "The Doctor's Opinion",
    pageNum: "xxv"
  },
  {
    id: "bills-story",
    title: "Bill's Story",
    pageNum: "1",
    chapter: 1
  },
  {
    id: "there-is-solution",
    title: "There Is a Solution",
    pageNum: "17",
    chapter: 2
  },
  {
    id: "more-about-alcoholism",
    title: "More About Alcoholism",
    pageNum: "30",
    chapter: 3
  },
  {
    id: "we-agnostics",
    title: "We Agnostics",
    pageNum: "44",
    chapter: 4
  },
  {
    id: "how-it-works",
    title: "How It Works",
    pageNum: "58",
    chapter: 5
  },
  {
    id: "into-action",
    title: "Into Action",
    pageNum: "72",
    chapter: 6
  },
  {
    id: "working-with-others",
    title: "Working with Others",
    pageNum: "89",
    chapter: 7
  },
  {
    id: "to-wives",
    title: "To Wives",
    pageNum: "104",
    chapter: 8
  },
  {
    id: "family-afterward",
    title: "The Family Afterward",
    pageNum: "122",
    chapter: 9
  },
  {
    id: "to-employers",
    title: "To Employers",
    pageNum: "136",
    chapter: 10
  },
  {
    id: "vision-for-you",
    title: "A Vision for You",
    pageNum: "151",
    chapter: 11
  }
];

export default function Section1() {
  const [currentChapterId, setCurrentChapterId] = useState(CHAPTERS[0]?.id || "");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [bookmarksOpen, setBookmarksOpen] = useState(false);

  // Track which chapter is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
            setCurrentChapterId(entry.target.id);
          }
        });
      },
      { threshold: [0.5], rootMargin: '-100px 0px -100px 0px' }
    );

    CHAPTERS.forEach((chapter) => {
      const element = document.getElementById(chapter.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToChapter = (chapterId) => {
    const element = document.getElementById(chapterId);
    if (element) {
      const offset = 80; // Account for sticky header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setMobileMenuOpen(false);
    }
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
              aria-label="Back to home"
            >
              <ArrowLeft className="w-5 h-5 sm:w-5 sm:h-5" />
              <span className="font-medium text-sm sm:text-base">Back</span>
            </Link>
            
            <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
              <div className="hidden xs:flex items-center gap-1.5 sm:gap-2">
                <BookOpen className="w-4 h-4 sm:w-5 sm:h-5 text-[#25DCE6]" />
                <span className="font-serif font-semibold text-[#FFFFFD] text-xs sm:text-sm md:text-base">
                  Pages 1-164
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

              <MobileBookNavigation />
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

      <main className="w-full px-2 sm:px-4 lg:px-6 xl:px-8 py-3 sm:py-5 lg:py-8 max-w-[1600px] mx-auto">
        <div className="flex gap-3 lg:gap-6 xl:gap-8">
          
          {/* Side Navigation - Desktop */}
          <aside className="hidden lg:block w-60 xl:w-72 flex-shrink-0" aria-label="Chapter navigation">
            <div className="sticky top-20 bg-[#2A3440] rounded-xl border border-[#25DCE6]/20 shadow-lg">
              <BookNavigation />
            </div>
          </aside>

          {/* Main Content - All Chapters */}
          <div className="flex-1 w-full min-w-0 lg:max-w-4xl space-y-6 sm:space-y-8">
            {CHAPTERS.map((chapter, index) => (
              <article key={chapter.id} id={chapter.id} className="scroll-mt-16">
                <ChapterContent chapter={chapter} sectionRoute="Section1" />
              </article>
            ))}

            {/* Bottom Navigation */}
            <div className="bg-[#2A3440] rounded-xl border border-[#25DCE6]/20 p-4 sm:p-6 md:p-8 text-center space-y-3 sm:space-y-4">
              <h3 className="text-lg sm:text-xl font-serif font-bold text-[#FFFFFD]">End of Section 1</h3>
              <p className="text-sm sm:text-base text-[#FFFFFD]/70">Continue to the next section or return to top</p>
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 justify-center">
                <Button
                  onClick={scrollToTop}
                  variant="outline"
                  className="border-[#25DCE6]/40 text-[#25DCE6] hover:bg-[#25DCE6]/10 active:bg-[#25DCE6]/20 min-h-[44px]"
                >
                  Back to Top
                </Button>
                <Link to={createPageUrl("Home")} className="w-full sm:w-auto">
                  <Button className="w-full bg-[#25DCE6] text-[#222A31] hover:bg-[#25DCE6]/90 active:bg-[#25DCE6]/80 min-h-[44px]">
                    Table of Contents
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

    </div>
  );
}