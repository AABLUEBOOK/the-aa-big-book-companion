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

  // Handle hash navigation on load and hash changes
  useEffect(() => {
    const scrollToHash = () => {
      const hash = window.location.hash.slice(1);
      if (hash) {
        const chapter = CHAPTERS.find(ch => ch.id === hash);
        if (chapter) {
          setCurrentChapterId(hash);
          // Use requestAnimationFrame to ensure DOM is ready
          requestAnimationFrame(() => {
            const element = document.getElementById(hash);
            if (element) {
              const headerOffset = 80;
              const elementPosition = element.getBoundingClientRect().top;
              const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
              window.scrollTo({ top: offsetPosition, behavior: 'auto' });
            }
          });
        }
      }
    };

    // Scroll on initial load
    scrollToHash();

    // Listen for hash changes
    window.addEventListener('hashchange', scrollToHash);
    return () => window.removeEventListener('hashchange', scrollToHash);
  }, []);

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
    <div className="min-h-screen min-h-[100dvh] bg-gradient-to-br from-[#1a1f26] via-[#222A31] to-[#2a3440] pb-20 sm:pb-24">
      
      {/* Top Navigation */}
      <header className="bg-white/5 backdrop-blur-3xl border-b border-white/10 sticky top-0 z-40 shadow-2xl shadow-black/30">
        <nav className="w-full px-3 sm:px-4 lg:px-6" aria-label="Main navigation">
          <div className="flex items-center justify-between h-12 sm:h-14 md:h-16">
            <Link 
              to={createPageUrl("Home")} 
              className="flex items-center gap-1.5 sm:gap-2 text-[#5EAAFF] hover:text-[#FFFFFD] active:text-[#FFFFFD] 
                         transition-all duration-500 min-h-[44px] min-w-[44px] px-3 py-2 rounded-2xl
                         bg-white/5 backdrop-blur-xl border border-white/10 hover:bg-white/10
                         shadow-lg shadow-black/20 hover:shadow-xl hover:shadow-[#5EAAFF]/20"
              aria-label="Back to home"
            >
              <ArrowLeft className="w-5 h-5 sm:w-5 sm:h-5" />
              <span className="font-medium text-sm sm:text-base">Back</span>
            </Link>
            
            <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
              <div className="hidden xs:flex items-center gap-1.5 sm:gap-2 bg-white/5 backdrop-blur-xl 
                              border border-white/10 rounded-2xl px-3 py-2 shadow-lg shadow-black/20">
                <BookOpen className="w-4 h-4 sm:w-5 sm:h-5 text-[#5EAAFF] drop-shadow-lg" />
                <span className="font-serif font-semibold text-[#FFFFFD] text-xs sm:text-sm md:text-base">
                  Pages 1-164
                </span>
              </div>

              <Button
                onClick={() => setBookmarksOpen(!bookmarksOpen)}
                variant="ghost"
                size="sm"
                className="text-[#5EAAFF] bg-white/5 backdrop-blur-xl border border-white/10 
                           hover:bg-white/10 active:bg-white/15 h-11 w-11 sm:h-10 sm:w-10 p-0 rounded-2xl
                           shadow-lg shadow-black/20 hover:shadow-xl hover:shadow-[#5EAAFF]/20
                           transition-all duration-500"
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
          <aside className="absolute right-0 top-0 h-full w-full sm:w-96 max-w-full bg-white/5 backdrop-blur-3xl border-l border-white/10 shadow-2xl overflow-y-auto overscroll-contain p-4 sm:p-6">
            <BookmarksList onClose={() => setBookmarksOpen(false)} />
          </aside>
        </div>
      )}

      <main className="w-full px-2 sm:px-4 lg:px-6 xl:px-8 py-3 sm:py-5 lg:py-8 max-w-[1600px] mx-auto">
        <div className="flex gap-3 lg:gap-6 xl:gap-8">
          
          {/* Side Navigation - Desktop */}
          <aside className="hidden lg:block w-60 xl:w-72 flex-shrink-0" aria-label="Chapter navigation">
            <div className="sticky top-20 bg-white/5 backdrop-blur-3xl rounded-3xl border border-white/10 shadow-2xl shadow-black/30">
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
            <div className="bg-white/5 backdrop-blur-3xl rounded-3xl border border-white/10 p-4 sm:p-6 md:p-8 text-center space-y-3 sm:space-y-4 shadow-2xl shadow-black/30">
              <h3 className="text-lg sm:text-xl font-serif font-bold text-[#FFFFFD]">End of Section 1</h3>
              <p className="text-sm sm:text-base text-[#FFFFFD]/70">Continue to the next section or return to top</p>
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 justify-center">
                <Button
                  onClick={scrollToTop}
                  variant="outline"
                  className="bg-white/5 backdrop-blur-xl border-white/20 text-[#5EAAFF] 
                             hover:bg-white/10 hover:border-[#5EAAFF]/40 active:bg-white/15 min-h-[44px]
                             rounded-2xl shadow-lg shadow-black/20 hover:shadow-xl hover:shadow-[#5EAAFF]/20
                             transition-all duration-500"
                >
                  Back to Top
                </Button>
                <Link to={createPageUrl("Home")} className="w-full sm:w-auto">
                  <Button className="w-full bg-[#5EAAFF]/90 backdrop-blur-xl text-white 
                                     hover:bg-[#5EAAFF] active:bg-[#5EAAFF]/80 min-h-[44px]
                                     rounded-2xl shadow-xl shadow-[#5EAAFF]/40 
                                     hover:shadow-2xl hover:shadow-[#5EAAFF]/60
                                     border border-white/20 transition-all duration-500">
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