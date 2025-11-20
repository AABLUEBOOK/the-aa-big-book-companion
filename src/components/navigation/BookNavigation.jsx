import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, ChevronRight, BookOpen, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const BOOK_STRUCTURE = [
  {
    id: 1,
    title: "The Program",
    path: "/Section1",
    chapters: [
      { id: "preface", title: "Preface" },
      { id: "foreword-first", title: "Foreword to First Edition" },
      { id: "foreword-second", title: "Foreword to Second Edition" },
      { id: "foreword-third", title: "Foreword to Third Edition" },
      { id: "foreword-fourth", title: "Foreword to Fourth Edition" },
      { id: "doctors-opinion", title: "The Doctor's Opinion" },
      { id: "bills-story", title: "Chapter 1: Bill's Story" },
      { id: "there-is-solution", title: "Chapter 2: There Is a Solution" },
      { id: "more-about-alcoholism", title: "Chapter 3: More About Alcoholism" },
      { id: "we-agnostics", title: "Chapter 4: We Agnostics" },
      { id: "how-it-works", title: "Chapter 5: How It Works" },
      { id: "into-action", title: "Chapter 6: Into Action" },
      { id: "working-with-others", title: "Chapter 7: Working with Others" },
      { id: "to-wives", title: "Chapter 8: To Wives" },
      { id: "family-afterward", title: "Chapter 9: The Family Afterward" },
      { id: "to-employers", title: "Chapter 10: To Employers" },
      { id: "vision-for-you", title: "Chapter 11: A Vision for You" }
    ]
  },
  {
    id: 2,
    title: "Stories - Pioneers",
    path: "/Section1",
    chapters: [
      { id: "tightrope", title: "Tightrope" },
      { id: "flooded-with-feeling", title: "Flooded with Feeling" },
      { id: "winner-takes-all", title: "Winner Takes All" }
    ]
  },
  {
    id: 3,
    title: "Stories - They Lost Nearly All",
    path: "/Section1",
    chapters: [
      { id: "my-bottle-my-resentments-and-me", title: "My Bottle, My Resentments, and Me" },
      { id: "he-lived-only-to-drink", title: "He Lived Only to Drink" },
      { id: "safe-haven", title: "Safe Haven" }
    ]
  }
];

export default function BookNavigation({ onNavigate }) {
  const [expandedSections, setExpandedSections] = useState([1]);
  const location = useLocation();

  const toggleSection = (sectionId) => {
    setExpandedSections(prev =>
      prev.includes(sectionId)
        ? prev.filter(id => id !== sectionId)
        : [...prev, sectionId]
    );
  };

  const scrollToChapter = (sectionPath, chapterId) => {
    if (location.pathname !== sectionPath) {
      // Navigate to the section page with hash
      window.location.href = `${sectionPath}#${chapterId}`;
    } else {
      // Already on the page, just scroll
      const element = document.getElementById(chapterId);
      if (element) {
        const offset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
    if (onNavigate) onNavigate();
  };

  return (
    <div className="h-full overflow-y-auto">
      <div className="p-4 border-b border-[#25DCE6]/20">
        <div className="flex items-center gap-2 mb-2">
          <BookOpen className="w-5 h-5 text-[#25DCE6]" />
          <h2 className="text-lg font-serif font-bold text-[#FFFFFD]">Big Book</h2>
        </div>
        <p className="text-xs text-[#25DCE6]/60">Alcoholics Anonymous</p>
      </div>

      <div className="p-2">
        {BOOK_STRUCTURE.map((section) => (
          <div key={section.id} className="mb-2">
            <button
              onClick={() => toggleSection(section.id)}
              className="w-full flex items-center justify-between px-3 py-2 rounded-lg hover:bg-[#25DCE6]/10 transition-colors group"
            >
              <span className="text-sm font-semibold text-[#FFFFFD] group-hover:text-[#25DCE6] transition-colors">
                {section.title}
              </span>
              {expandedSections.includes(section.id) ? (
                <ChevronDown className="w-4 h-4 text-[#25DCE6]" />
              ) : (
                <ChevronRight className="w-4 h-4 text-[#25DCE6]/60" />
              )}
            </button>

            {expandedSections.includes(section.id) && (
              <div className="ml-2 mt-1 space-y-1">
                {section.chapters.map((chapter) => (
                  <button
                    key={chapter.id}
                    onClick={() => scrollToChapter(section.path, chapter.id)}
                    className="w-full text-left px-3 py-2 rounded-lg text-sm text-[#FFFFFD]/70 hover:bg-[#25DCE6]/10 hover:text-[#25DCE6] transition-colors"
                  >
                    {chapter.title}
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export function MobileBookNavigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setIsOpen(true)}
        className="text-[#25DCE6] hover:bg-[#25DCE6]/10"
      >
        <Menu className="w-5 h-5" />
      </Button>

      {isOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div 
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute left-0 top-0 bottom-0 w-80 max-w-[85vw] bg-[#2A3440] shadow-xl border-r border-[#25DCE6]/20">
            <div className="flex items-center justify-between p-4 border-b border-[#25DCE6]/20">
              <div className="flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-[#25DCE6]" />
                <h2 className="text-lg font-serif font-bold text-[#FFFFFD]">Navigation</h2>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
              >
                <X className="w-5 h-5 text-[#25DCE6]" />
              </Button>
            </div>
            <BookNavigation onNavigate={() => setIsOpen(false)} />
          </div>
        </div>
      )}
    </>
  );
}