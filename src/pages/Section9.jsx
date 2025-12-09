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
  { id: "missing-link", title: "The Missing Link", pageNum: "210" },
  { id: "fear-of-fear", title: "Fear of Fear", pageNum: "234" },
  { id: "housewife-who-drank", title: "The Housewife Who Drank at Home", pageNum: "258" },
  { id: "physician-heal-thyself", title: "Physician, Heal Thyself!", pageNum: "268" },
  { id: "my-chance-to-live", title: "My Chance to Live", pageNum: "282" },
  { id: "student-of-life", title: "Student of Life", pageNum: "286" },
  { id: "crossing-river-denial", title: "Crossing the River of Denial", pageNum: "295" },
  { id: "because-im-alcoholic", title: "Because I'm an Alcoholic", pageNum: "322" },
  { id: "me-an-alcoholic", title: "Me An Alcoholic?", pageNum: "335" },
  { id: "aa-taught-him", title: "A.A. Taught Him to Handle Sobriety", pageNum: "346" },
  { id: "acceptance-was-answer", title: "Acceptance Was the Answer", pageNum: "371" },
  { id: "window-of-opportunity", title: "Window of Opportunity", pageNum: "381" },
  { id: "my-bottle-my-resentments", title: "My Bottle, My Resentments, and Me", pageNum: "410" },
  { id: "he-lived-only-to-drink", title: "He Lived Only to Drink", pageNum: "439" },
  { id: "safe-haven", title: "Safe Haven", pageNum: "448" },
  { id: "listening-to-wind", title: "Listening to the Wind", pageNum: "458" },
  { id: "twice-gifted", title: "Twice Gifted", pageNum: "469" },
  { id: "building-new-life", title: "Building a New Life", pageNum: "482" },
  { id: "freedom-from-bondage", title: "Freedom From Bondage", pageNum: "491" },
  { id: "another-chance", title: "Another Chance", pageNum: "511" },
  { id: "late-start", title: "Late Start", pageNum: "522" },
  { id: "grounded", title: "Grounded", pageNum: "557" },
  { id: "on-the-move", title: "On the Move", pageNum: "540" },
  { id: "vision-of-recovery", title: "Vision of Recovery", pageNum: "315" },
  { id: "gutter-bravado", title: "Gutter Bravado", pageNum: "325" },
  { id: "empty-on-the-inside", title: "Empty on the Inside", pageNum: "337" },
  { id: "aa-taught-him-sobriety", title: "A.A. Taught Him Sobriety", pageNum: "401" }
];

export default function Section9() {
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
                <ChapterContent chapter={chapter} sectionRoute="Section9" />
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
              to={createPageUrl("Section8")}
              className="text-[#25DCE6] hover:text-[#FFFFFD] transition-colors text-sm sm:text-base"
            >
              ← Previous Section
            </Link>
            <Link
              to={createPageUrl("Section10")}
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