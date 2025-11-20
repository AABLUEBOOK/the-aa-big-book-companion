import React, { useState } from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "./utils";
import { ArrowLeft, BookOpen, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import ChapterContent from "../components/book/ChapterContent";
import ChapterNav from "../components/book/ChapterNav";

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
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-stone-50 to-amber-50">
      
      {/* Top Navigation */}
      <div className="bg-white/80 backdrop-blur-sm border-b border-stone-200 sticky top-0 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link to={createPageUrl("Home")} className="flex items-center gap-2 text-stone-700 hover:text-stone-900 transition-colors">
              <ArrowLeft className="w-5 h-5" />
              <span className="font-medium hidden sm:inline">Back to Contents</span>
            </Link>
            
            <div className="flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-amber-700" />
              <span className="font-serif font-semibold text-stone-900 hidden sm:inline">
                Pages 1-64
              </span>
            </div>

            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          
          {/* Side Navigation - Desktop */}
          <div className="hidden lg:block w-80 flex-shrink-0">
            <div className="sticky top-24">
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
              <div className="absolute inset-0 bg-black/50" onClick={() => setMobileMenuOpen(false)}></div>
              <div className="absolute left-0 top-0 bottom-0 w-80 bg-white shadow-xl overflow-y-auto p-6">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="font-serif font-bold text-xl">Chapters</h3>
                  <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(false)}>
                    <X className="w-5 h-5" />
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
          <div className="flex-1 max-w-4xl">
            <ChapterContent
              chapter={currentChapter}
              onNext={currentIndex < CHAPTERS.length - 1 ? goToNext : null}
              onPrevious={currentIndex > 0 ? goToPrevious : null}
            />
          </div>
        </div>
      </div>
    </div>
  );
}