import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Menu, X } from "lucide-react";
import ChapterContent from "../components/book/ChapterContent";
import ChapterNav from "../components/book/ChapterNav";
import BookSearch from "../components/book/BookSearch";

function createPageUrl(pageName) {
  return `/${pageName}`;
}

const CHAPTERS = [
  { id: "dr-bob-nightmare", title: "Doctor Bob's Nightmare", pageNum: "171" },
  { id: "aa-number-three", title: "Alcoholics Anonymous Number Three", pageNum: "180" },
  { id: "gratitude-in-action", title: "Gratitude in Action", pageNum: "275" },
  { id: "women-suffer-too", title: "Women Suffer Too", pageNum: "222" },
  { id: "our-southern-friend", title: "Our Southern Friend", pageNum: "423" },
  { id: "vicious-cycle", title: "The Vicious Cycle", pageNum: "193" },
  { id: "jims-story", title: "Jim's Story", pageNum: "202" },
  { id: "man-who-mastered-fear", title: "The Man Who Mastered Fear", pageNum: "246" },
  { id: "he-sold-himself-short", title: "He Sold Himself Short", pageNum: "260" },
  { id: "keys-of-the-kingdom", title: "The Keys of the Kingdom", pageNum: "304" }
];

export default function Section8() {
  const [currentChapterId, setCurrentChapterId] = useState(CHAPTERS[0].id);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const chapterRefs = useRef({});

  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (hash && CHAPTERS.find(ch => ch.id === hash)) {
      setCurrentChapterId(hash);
      setTimeout(() => {
        chapterRefs.current[hash]?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setCurrentChapterId(entry.target.id);
          }
        });
      },
      { threshold: 0.5, rootMargin: "-100px 0px -50% 0px" }
    );

    Object.values(chapterRefs.current).forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const handleChapterChange = (chapterId) => {
    setCurrentChapterId(chapterId);
    setMobileNavOpen(false);
    chapterRefs.current[chapterId]?.scrollIntoView({ behavior: 'smooth' });
    window.history.pushState(null, '', `#${chapterId}`);
  };

  return (
    <div className="min-h-screen bg-[#222A31]">
      {/* Top Navigation */}
      <div className="sticky top-0 z-50 bg-[#2A3440] border-b border-[#25DCE6]/20 shadow-lg backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex items-center justify-between gap-4">
            <Link to={createPageUrl("Home")} className="flex items-center gap-2 text-[#25DCE6] hover:text-[#FFFFFD] transition-colors">
              <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="font-medium text-sm sm:text-base hidden sm:inline">Back to Contents</span>
              <span className="font-medium text-sm sm:text-base sm:hidden">Back</span>
            </Link>
            
            <div className="flex-1 max-w-md">
              <BookSearch />
            </div>

            <button
              onClick={() => setMobileNavOpen(!mobileNavOpen)}
              className="lg:hidden p-2 text-[#25DCE6] hover:bg-[#25DCE6]/10 rounded-lg transition-colors"
            >
              {mobileNavOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileNavOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div className="absolute inset-0 bg-black/50" onClick={() => setMobileNavOpen(false)} />
          <div className="absolute right-0 top-0 h-full w-80 bg-[#2A3440] shadow-2xl overflow-y-auto p-6">
            <ChapterNav
              chapters={CHAPTERS}
              currentChapterId={currentChapterId}
              onChapterChange={handleChapterChange}
            />
          </div>
        </div>
      )}

      <div className="flex max-w-7xl mx-auto">
        {/* Desktop Side Navigation */}
        <aside className="hidden lg:block w-80 sticky top-24 h-[calc(100vh-6rem)] overflow-y-auto p-6">
          <ChapterNav
            chapters={CHAPTERS}
            currentChapterId={currentChapterId}
            onChapterChange={handleChapterChange}
          />
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8">
          <div className="max-w-4xl mx-auto space-y-12">
            {CHAPTERS.map((chapter) => (
              <div
                key={chapter.id}
                id={chapter.id}
                ref={(el) => (chapterRefs.current[chapter.id] = el)}
              >
                <ChapterContent chapter={chapter} sectionRoute="Section8" />
              </div>
            ))}
          </div>
        </main>
      </div>

      {/* Bottom Navigation */}
      <div className="sticky bottom-0 bg-[#2A3440] border-t border-[#25DCE6]/20 shadow-lg backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            <Link
              to={createPageUrl("Section7")}
              className="text-[#25DCE6] hover:text-[#FFFFFD] transition-colors text-sm sm:text-base"
            >
              ← Previous Section
            </Link>
            <Link
              to={createPageUrl("Section9")}
              className="text-[#25DCE6] hover:text-[#FFFFFD] transition-colors text-sm sm:text-base"
            >
              Next Section →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}