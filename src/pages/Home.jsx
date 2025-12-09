import React, { memo, useState } from "react";
import { Link } from "react-router-dom";
import { Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import SearchBar from "../components/book/SearchBar";
import SettingsPanel from "../components/reading/SettingsPanel";

function createPageUrl(pageName) {
  return `/${pageName}`;
}

const SECTIONS = [
  {
    id: 1,
    number: "1",
    title: "Preface & Forewords",
    pages: "PAGES XI-XXXII",
    description: "Introduction to the book, its history, and The Doctor's Opinion",
    route: "Section1"
  },
  {
    id: 2,
    number: "2",
    title: "Bill's Story & The Solution",
    pages: "PAGES 1-43",
    description: "Chapter 1-3: Bill's Story, There Is a Solution, More About Alcoholism",
    route: "Section2"
  },
  {
    id: 3,
    number: "3",
    title: "We Agnostics & How It Works",
    pages: "PAGES 44-71",
    description: "Chapter 4-5: Faith and the Twelve Steps",
    route: "Section3"
  },
  {
    id: 4,
    number: "4",
    title: "Into Action",
    pages: "PAGES 72-88",
    description: "Chapter 6: Working the program of recovery",
    route: "Section4"
  },
  {
    id: 5,
    number: "5",
    title: "Working with Others",
    pages: "PAGES 89-103",
    description: "Chapter 7: How to help other alcoholics",
    route: "Section5"
  },
  {
    id: 6,
    number: "6",
    title: "To Wives & The Family Afterward",
    pages: "PAGES 104-135",
    description: "Chapter 8-9: Guidance for families",
    route: "Section6"
  },
  {
    id: 7,
    number: "7",
    title: "To Employers & A Vision for You",
    pages: "PAGES 136-164",
    description: "Chapter 10-11: The workplace and future of A.A.",
    route: "Section7"
  },
  {
    id: 8,
    number: "8",
    title: "Personal Stories - Part I",
    pages: "PAGES 171-321",
    description: "Pioneers of A.A. - stories from the early days",
    route: "Section8"
  },
  {
    id: 9,
    number: "9",
    title: "Personal Stories - Part II & III",
    pages: "PAGES 322-560",
    description: "They Stopped in Time & They Lost Nearly All",
    route: "Section9"
  },
  {
    id: 10,
    number: "10",
    title: "Appendices",
    pages: "PAGES 561-575",
    description: "The Twelve Traditions, spiritual experience, and more",
    route: "Section10"
  }
];

const SectionCard = memo(function SectionCard({ section, createPageUrl }) {
  return (
    <Link
      to={createPageUrl(section.route)}
      className="group relative overflow-hidden rounded-2xl border-2 border-[#25DCE6]/30 
                 bg-gradient-to-br from-[#2A3440]/90 to-[#1a2028]/90 
                 backdrop-blur-sm p-6 transition-all duration-300 
                 hover:border-[#25DCE6]/60 hover:shadow-lg hover:shadow-[#25DCE6]/20
                 active:scale-[0.98]"
      style={{
        backgroundImage: `repeating-linear-gradient(45deg, 
          transparent, 
          transparent 10px, 
          rgba(37, 220, 230, 0.03) 10px, 
          rgba(37, 220, 230, 0.03) 20px)`
      }}
    >
      {/* Number badge */}
      <div className="absolute top-4 left-4 w-12 h-12 rounded-full bg-[#25DCE6]/20 
                      flex items-center justify-center border-2 border-[#25DCE6]">
        <span className="text-2xl font-bold text-[#25DCE6]">{section.number}</span>
      </div>

      {/* Arrow indicator */}
      <div className="absolute top-6 right-6 text-[#25DCE6]/60 group-hover:text-[#25DCE6] 
                      transition-colors group-hover:translate-x-1 transition-transform">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>

      <div className="mt-16">
        {/* Page range */}
        <div className="text-xs font-semibold text-[#25DCE6] mb-2 tracking-wider">
          {section.pages}
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-[#FFFFFD] mb-2 leading-tight">
          {section.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-[#FFFFFD]/70 leading-relaxed">
          {section.description}
        </p>
      </div>
    </Link>
  );
});

const Home = memo(function Home() {
  const [settingsOpen, setSettingsOpen] = useState(false);

  return (
    <div className="min-h-screen min-h-[100dvh] w-full bg-[#222A31] overflow-x-hidden overflow-y-auto">
      {/* Header */}
      <header className="bg-[#2A3440] border-b border-[#25DCE6]/20 px-4 py-5 w-full">
        <div className="max-w-6xl mx-auto relative">
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={() => setSettingsOpen(true)}
            className="text-white hover:text-[#25DCE6] absolute right-0 top-0"
          >
            <Settings className="w-4 h-4" />
          </Button>
          <div className="text-center mb-3">
            <h1 className="text-2xl md:text-3xl font-serif font-bold text-[#FFFFFD] leading-tight">
              The AA Big Book Companion
            </h1>
          </div>
          <div className="mt-3 max-w-md mx-auto">
            <SearchBar />
          </div>
        </div>
      </header>

      {/* Highlighting Guide */}
      <div className="px-4 py-6">
        <div className="max-w-6xl mx-auto">
          <div className="rounded-2xl border-2 border-[#25DCE6]/30 bg-[#2A3440]/50 backdrop-blur-sm p-6">
            <h2 className="text-lg font-bold text-[#FFFFFD] mb-4 text-center">Highlighting Guide</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="flex items-center gap-2">
                <span className="w-5 h-5 rounded bg-orange-400"></span>
                <span className="text-sm text-[#FFFFFD] font-medium">Orange = Steps</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-5 h-5 rounded bg-blue-400"></span>
                <span className="text-sm text-[#FFFFFD] font-medium">Blue = Promises</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-5 h-5 rounded bg-green-400"></span>
                <span className="text-sm text-[#FFFFFD] font-medium">Green = Prayers</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-5 h-5 rounded bg-yellow-400"></span>
                <span className="text-sm text-[#FFFFFD] font-medium">Yellow = General Info</span>
              </div>
            </div>
            <div className="mt-3 flex justify-center">
              <div className="flex items-center gap-2">
                <span className="w-5 h-5 rounded bg-pink-400"></span>
                <span className="text-sm text-[#FFFFFD] font-medium">Pink = Tab Reference</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section Cards */}
      <main className="max-w-6xl mx-auto px-4 py-6 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SECTIONS.map((section) => (
            <SectionCard key={section.id} section={section} createPageUrl={createPageUrl} />
          ))}
        </div>
      </main>

      {/* Settings Panel */}
      {settingsOpen && (
        <SettingsPanel 
          isOpen={settingsOpen} 
          onClose={() => setSettingsOpen(false)}
        />
      )}

      {/* Footer */}
      <footer className="bg-[#2A3440]/50 border-t border-[#25DCE6]/10 px-4 py-4 mt-8">
        <p className="text-center text-xs text-[#FFFFFD]/40">
          Fourth Edition • Alcoholics Anonymous World Services, Inc.
        </p>
      </footer>
    </div>
  );
});

export default Home;