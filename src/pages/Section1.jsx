import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { base44 } from "@/api/base44Client";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { ArrowLeft, BookOpen, Menu, X } from "lucide-react";
import ChapterContent from "../components/book/ChapterContent";
import ChapterNav from "../components/book/ChapterNav";
import VerticalTabs from "../components/book/VerticalTabs";

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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentChapterId, setCurrentChapterId] = useState(CHAPTERS[0]?.id || "");

  const { data: allAnnotations = [] } = useQuery({
    queryKey: ['annotations'],
    queryFn: () => base44.entities.Annotation.list(),
    initialData: []
  });

  const { data: allTabs = [] } = useQuery({
    queryKey: ['bookTabs'],
    queryFn: () => base44.entities.BookTab.list(),
    initialData: []
  });

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
    <div className="min-h-screen bg-[#222A31] pb-24">
      
      {/* Top Navigation */}
      <div className="bg-[#2A3440]/95 backdrop-blur-sm border-b border-[#25DCE6]/20 sticky top-0 z-40 shadow-lg">
        <div className="w-full px-3 sm:px-4 lg:px-6">
          <div className="flex items-center justify-between h-14 sm:h-16">
            <Link to={createPageUrl("Home")} className="flex items-center gap-1.5 sm:gap-2 text-[#25DCE6] hover:text-[#FFFFFD] transition-colors">
              <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="font-medium text-sm sm:text-base">Back</span>
            </Link>
            
            <div className="flex items-center gap-2 sm:gap-4">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <BookOpen className="w-4 h-4 sm:w-5 sm:h-5 text-[#25DCE6]" />
                <span className="font-serif font-semibold text-[#FFFFFD] text-xs sm:text-base">
                  Pages 1-164
                </span>
              </div>

              <Button
                variant="ghost"
                size="icon"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden text-[#25DCE6] w-8 h-8"
              >
                {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full px-3 sm:px-4 lg:px-6 xl:px-8 py-4 sm:py-6 lg:py-8 max-w-[1600px] mx-auto">
        <div className="flex gap-4 lg:gap-8">
          
          {/* Side Navigation - Desktop */}
          <div className="hidden lg:block w-64 xl:w-80 flex-shrink-0">
            <div className="sticky top-20">
              <ChapterNav
                chapters={CHAPTERS}
                currentChapterId={currentChapterId}
                onChapterChange={scrollToChapter}
              />
            </div>
          </div>

          {/* Mobile Navigation Overlay */}
          {mobileMenuOpen && (
            <div className="fixed inset-0 z-50 lg:hidden">
              <div className="absolute inset-0 bg-black/70" onClick={() => setMobileMenuOpen(false)}></div>
              <div className="absolute left-0 top-0 bottom-0 w-[85vw] max-w-sm bg-[#2A3440] shadow-xl overflow-y-auto p-4 sm:p-6 border-r border-[#25DCE6]/20">
                <div className="flex justify-between items-center mb-4 sm:mb-6">
                  <h3 className="font-serif font-bold text-lg sm:text-xl text-[#FFFFFD]">Chapters</h3>
                  <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(false)} className="w-8 h-8">
                    <X className="w-4 h-4 text-[#25DCE6]" />
                  </Button>
                </div>
                <ChapterNav
                  chapters={CHAPTERS}
                  currentChapterId={currentChapterId}
                  onChapterChange={scrollToChapter}
                />
              </div>
            </div>
          )}

          {/* Main Content - All Chapters */}
          <div className="flex-1 w-full lg:max-w-4xl lg:pr-12 xl:pr-16 space-y-8">
            {CHAPTERS.map((chapter, index) => {
              const chapterAnnotations = allAnnotations.filter(a => a.chapter_id === chapter.id);
              const chapterTabs = allTabs.filter(t => t.chapter_id === chapter.id);
              return (
                <div key={chapter.id} id={chapter.id}>
                  <ChapterContent
                    chapter={chapter}
                    currentIndex={index}
                    totalChapters={CHAPTERS.length}
                    annotations={chapterAnnotations}
                    chapterTabs={chapterTabs}
                    isLocked={false}
                    onNext={null}
                    onPrevious={null}
                  />
                </div>
              );
            })}

            {/* Bottom Navigation */}
            <div className="bg-[#2A3440] rounded-xl border border-[#25DCE6]/20 p-6 sm:p-8 text-center space-y-4">
              <h3 className="text-xl font-serif font-bold text-[#FFFFFD]">End of Section 1</h3>
              <p className="text-[#FFFFFD]/70">Continue to the next section or return to top</p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button
                  onClick={scrollToTop}
                  variant="outline"
                  className="border-[#25DCE6]/40 text-[#25DCE6] hover:bg-[#25DCE6]/10"
                >
                  Back to Top
                </Button>
                <Link to={createPageUrl("Home")}>
                  <Button className="w-full sm:w-auto bg-[#25DCE6] text-[#222A31] hover:bg-[#25DCE6]/90">
                    Table of Contents
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>


    </div>
  );
}