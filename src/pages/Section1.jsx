import React, { useState } from "react";
import { Link } from "react-router-dom";
import { base44 } from "@/api/base44Client";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { ArrowLeft, BookOpen, Menu, X, Lock, Unlock } from "lucide-react";
import { Button } from "@/components/ui/button";
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
  }
];

export default function Section1() {
  const [currentChapterId, setCurrentChapterId] = useState("preface");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const queryClient = useQueryClient();

  const { data: annotations = [] } = useQuery({
    queryKey: ['annotations', currentChapterId],
    queryFn: () => base44.entities.Annotation.filter({ chapter_id: currentChapterId }),
    initialData: []
  });

  const { data: tabs = [] } = useQuery({
    queryKey: ['bookTabs', currentChapterId],
    queryFn: () => base44.entities.BookTab.filter({ chapter_id: currentChapterId }),
    initialData: []
  });

  const { data: settings } = useQuery({
    queryKey: ['bookSettings'],
    queryFn: async () => {
      const list = await base44.entities.BookSettings.list();
      return list[0] || { is_locked: false };
    }
  });

  const toggleLockMutation = useMutation({
    mutationFn: async () => {
      if (settings?.id) {
        return base44.entities.BookSettings.update(settings.id, { is_locked: !settings.is_locked });
      } else {
        return base44.entities.BookSettings.create({ is_locked: true });
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['bookSettings'] });
    }
  });

  const currentChapter = CHAPTERS.find(ch => ch.id === currentChapterId);
  const currentIndex = CHAPTERS.findIndex(ch => ch.id === currentChapterId);

  const goToNext = () => {
    if (currentIndex < CHAPTERS.length - 1) {
      setCurrentChapterId(CHAPTERS[currentIndex + 1].id);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const goToPrevious = () => {
    if (currentIndex > 0) {
      setCurrentChapterId(CHAPTERS[currentIndex - 1].id);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#222A31] pb-20 lg:pb-0">
      
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
                  Pages 1-64
                </span>
              </div>

              <Button
                variant="ghost"
                size="sm"
                onClick={() => toggleLockMutation.mutate()}
                className="gap-1 sm:gap-2 text-[#25DCE6] hover:bg-[#25DCE6]/10 h-8 px-2 sm:h-9 sm:px-3"
              >
                {settings?.is_locked ? (
                  <>
                    <Lock className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    <span className="text-xs hidden sm:inline">Locked</span>
                  </>
                ) : (
                  <>
                    <Unlock className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    <span className="text-xs hidden sm:inline">Unlocked</span>
                  </>
                )}
              </Button>

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
                onChapterChange={setCurrentChapterId}
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
                  onChapterChange={(id) => {
                    setCurrentChapterId(id);
                    setMobileMenuOpen(false);
                  }}
                />
              </div>
            </div>
          )}

          {/* Main Content */}
          <div className="flex-1 w-full lg:max-w-4xl lg:pr-12 xl:pr-16">
            <ChapterContent
              chapter={currentChapter}
              currentIndex={currentIndex}
              totalChapters={CHAPTERS.length}
              annotations={annotations}
              isLocked={settings?.is_locked || false}
              onNext={currentIndex < CHAPTERS.length - 1 ? goToNext : null}
              onPrevious={currentIndex > 0 ? goToPrevious : null}
            />
          </div>
        </div>
      </div>

      {/* Vertical Tabs */}
      <VerticalTabs 
        tabs={tabs}
        currentChapterId={currentChapterId}
        isLocked={settings?.is_locked || false}
      />
    </div>
  );
}