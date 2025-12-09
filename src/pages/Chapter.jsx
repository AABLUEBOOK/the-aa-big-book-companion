import React, { useState, memo, useMemo, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, BookOpen, BookmarkCheck } from "lucide-react";
import { preloadChapter } from "../components/book/chapterLoader";
import SearchBar from "../components/book/SearchBar";
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
  
  // Personal Stories - Part I: Pioneers of A.A.
  { id: "dr-bob-nightmare", title: "Doctor Bob's Nightmare", pageNum: "171", pages: "171-181" },
  { id: "aa-number-three", title: "Alcoholics Anonymous Number Three", pageNum: "180", pages: "180-192" },
  { id: "gratitude-in-action", title: "Gratitude in Action", pageNum: "275", pages: "275-281" },
  { id: "women-suffer-too", title: "Women Suffer Too", pageNum: "222", pages: "222-233" },
  { id: "our-southern-friend", title: "Our Southern Friend", pageNum: "423", pages: "423-438" },
  { id: "vicious-cycle", title: "The Vicious Cycle", pageNum: "193", pages: "193-201" },
  { id: "jims-story", title: "Jim's Story", pageNum: "202", pages: "202-209" },
  { id: "man-who-mastered-fear", title: "The Man Who Mastered Fear", pageNum: "246", pages: "246-257" },
  { id: "he-sold-himself-short", title: "He Sold Himself Short", pageNum: "260", pages: "260-267" },
  { id: "keys-of-the-kingdom", title: "The Keys of the Kingdom", pageNum: "304", pages: "304-321" },
  
  // Personal Stories - Part II: They Stopped in Time
  { id: "missing-link", title: "The Missing Link", pageNum: "210", pages: "210-221" },
  { id: "fear-of-fear", title: "Fear of Fear", pageNum: "234", pages: "234-245" },
  { id: "housewife-who-drank", title: "The Housewife Who Drank at Home", pageNum: "258", pages: "258-259" },
  { id: "physician-heal-thyself", title: "Physician, Heal Thyself!", pageNum: "268", pages: "268-274" },
  { id: "my-chance-to-live", title: "My Chance to Live", pageNum: "282", pages: "282-285" },
  { id: "student-of-life", title: "Student of Life", pageNum: "286", pages: "286-294" },
  { id: "crossing-river-denial", title: "Crossing the River of Denial", pageNum: "295", pages: "295-303" },
  { id: "because-im-alcoholic", title: "Because I'm an Alcoholic", pageNum: "322", pages: "322-334" },
  { id: "me-an-alcoholic", title: "Me An Alcoholic?", pageNum: "335", pages: "335-345" },
  { id: "aa-taught-him", title: "A.A. Taught Him to Handle Sobriety", pageNum: "346", pages: "346-356" },
  { id: "my-next-two-weeks", title: "My Next Two Weeks", pageNum: "357", pages: "357-362" },
  { id: "another-quiet-victory", title: "Another Quiet Victory", pageNum: "363", pages: "363-370" },
  { id: "acceptance-was-answer", title: "Acceptance Was the Answer", pageNum: "371", pages: "371-380" },
  { id: "window-of-opportunity", title: "Window of Opportunity", pageNum: "381", pages: "381-390" },
  
  // Personal Stories - Part III: They Lost Nearly All
  { id: "news-hawk", title: "The News Hawk", pageNum: "391", pages: "391-398" },
  { id: "european-drinker", title: "The European Drinker", pageNum: "399", pages: "399-409" },
  { id: "my-bottle-my-resentments", title: "My Bottle, My Resentments, and Me", pageNum: "410", pages: "410-422" },
  { id: "he-lived-only-to-drink", title: "He Lived Only to Drink", pageNum: "439", pages: "439-447" },
  { id: "safe-haven", title: "Safe Haven", pageNum: "448", pages: "448-457" },
  { id: "listening-to-wind", title: "Listening to the Wind", pageNum: "458", pages: "458-468" },
  { id: "twice-gifted", title: "Twice Gifted", pageNum: "469", pages: "469-481" },
  { id: "building-new-life", title: "Building a New Life", pageNum: "482", pages: "482-490" },
  { id: "freedom-from-bondage", title: "Freedom From Bondage", pageNum: "491", pages: "491-499" },
  { id: "he-who-loses-life", title: "He Who Loses His Life", pageNum: "500", pages: "500-510" },
  { id: "another-chance", title: "Another Chance", pageNum: "511", pages: "511-521" },
  { id: "late-start", title: "Late Start", pageNum: "522", pages: "522-524" },
  { id: "rum-radio-rebellion", title: "Rum, Radio, and Rebellion", pageNum: "525", pages: "525-533" },
  { id: "teenagers-decision", title: "A Teenager's Decision", pageNum: "534", pages: "534-539" },
  { id: "growing-up-all-over", title: "Growing Up All Over", pageNum: "540", pages: "540-545" },
  { id: "unto-second-generation", title: "Unto the Second Generation", pageNum: "546", pages: "546-552" },
  { id: "one-mans-passage", title: "One Man's Passage", pageNum: "553", pages: "553-556" },
  { id: "grounded", title: "Grounded", pageNum: "557", pages: "557-560" },
  
  // Appendices
  { id: "appendices", title: "Appendices", pageNum: "561", pages: "561-575" },
];

const Chapter = memo(function Chapter() {
  const [bookmarksOpen, setBookmarksOpen] = useState(false);
  const navigate = useNavigate();
  
  // Get chapter ID and search query from URL
  const urlParams = new URLSearchParams(window.location.search);
  const chapterId = urlParams.get('id') || 'preface';
  const searchQuery = urlParams.get('search') || '';
  
  // Memoize chapter lookup
  const { chapter, prevChapter, nextChapter } = useMemo(() => {
    const currentIndex = ALL_CHAPTERS.findIndex(c => c.id === chapterId);
    return {
      chapter: ALL_CHAPTERS[currentIndex] || ALL_CHAPTERS[0],
      prevChapter: currentIndex > 0 ? ALL_CHAPTERS[currentIndex - 1] : null,
      nextChapter: currentIndex < ALL_CHAPTERS.length - 1 ? ALL_CHAPTERS[currentIndex + 1] : null
    };
  }, [chapterId]);
  
  // Preload next chapter for smoother navigation
  useEffect(() => {
    if (nextChapter) {
      preloadChapter(nextChapter.id);
    }
  }, [nextChapter]);

  // Scroll to top when chapter changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [chapterId]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen min-h-[100dvh] bg-[#222A31] pb-20 sm:pb-24">
      
      {/* Top Navigation */}
      <header className="bg-[#2A3440]/95 backdrop-blur-sm border-b border-[#4A9EFF]/20 sticky top-0 z-40 shadow-lg">
        <nav className="w-full px-3 sm:px-4 lg:px-6" aria-label="Main navigation">
          <div className="flex items-center justify-between h-12 sm:h-14 md:h-16">
            <Link 
              to={createPageUrl("Home")} 
              className="flex items-center gap-1.5 sm:gap-2 text-[#4A9EFF] hover:text-[#FFFFFD] active:text-[#FFFFFD] transition-colors min-h-[44px] min-w-[44px] px-1"
              aria-label="Back to Table of Contents"
            >
              <ArrowLeft className="w-5 h-5 sm:w-5 sm:h-5" />
              <span className="font-medium text-sm sm:text-base hidden xs:inline">Table of Contents</span>
              <span className="font-medium text-sm sm:text-base xs:hidden">Contents</span>
            </Link>
            
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="hidden sm:flex items-center gap-1.5">
                <BookOpen className="w-4 h-4 text-[#4A9EFF]" />
                <span className="font-serif font-semibold text-[#FFFFFD] text-xs sm:text-sm">
                  p. {chapter.pages}
                </span>
              </div>

              <SearchBar className="w-32 sm:w-40" />

              <Button
                onClick={() => setBookmarksOpen(!bookmarksOpen)}
                variant="ghost"
                size="sm"
                className="text-[#4A9EFF] hover:bg-[#4A9EFF]/10 active:bg-[#4A9EFF]/20 h-10 w-10 p-0"
                aria-label="Open bookmarks"
              >
                <BookmarkCheck className="w-5 h-5" />
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
          <ChapterContent chapter={chapter} sectionRoute="Chapter" searchQuery={searchQuery} />
        </article>

        {/* Bottom Navigation */}
        <div className="bg-[#2A3440] rounded-xl border border-[#4A9EFF]/20 p-4 sm:p-6 md:p-8 mt-6 sm:mt-8 space-y-4">
          
          {/* Prev/Next Navigation */}
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 justify-between">
            {prevChapter ? (
              <Button
                variant="outline"
                onClick={() => navigate(`/Chapter?id=${prevChapter.id}`)}
                className="flex-1 border-[#4A9EFF]/40 text-[#4A9EFF] hover:bg-[#4A9EFF]/10 active:bg-[#4A9EFF]/20 min-h-[44px] justify-start"
              >
                <ArrowLeft className="w-4 h-4 mr-2 flex-shrink-0" />
                <span className="truncate">{prevChapter.title}</span>
              </Button>
            ) : <div className="flex-1" />}
            
            {nextChapter ? (
              <Button
                onClick={() => navigate(`/Chapter?id=${nextChapter.id}`)}
                className="flex-1 bg-[#4A9EFF] text-[#FFFFFD] hover:bg-[#4A9EFF]/90 active:bg-[#4A9EFF]/80 min-h-[44px] justify-end"
              >
                <span className="truncate">{nextChapter.title}</span>
                <ArrowLeft className="w-4 h-4 ml-2 rotate-180 flex-shrink-0" />
              </Button>
            ) : null}
          </div>

          {/* Back to Contents */}
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 justify-center pt-2 border-t border-[#4A9EFF]/20">
            <Button
              onClick={scrollToTop}
              variant="outline"
              className="border-[#4A9EFF]/40 text-[#4A9EFF] hover:bg-[#4A9EFF]/10 active:bg-[#4A9EFF]/20 min-h-[44px]"
            >
              Back to Top
            </Button>
            <Button 
              onClick={() => navigate('/Home')}
              variant="outline"
              className="border-[#4A9EFF]/40 text-[#4A9EFF] hover:bg-[#4A9EFF]/10 active:bg-[#4A9EFF]/20 min-h-[44px]"
            >
              Table of Contents
            </Button>
          </div>
        </div>
      </main>

      </div>
      );
      });

      export default Chapter;