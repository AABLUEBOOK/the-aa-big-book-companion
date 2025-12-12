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
    title: "Preface",
    pages: "Pages XI-XIII",
    description: "Introduction to the Fourth Edition",
    route: "Section1"
  },
  {
    id: 2,
    title: "Forewords",
    pages: "Pages XIII-XXIV",
    description: "First, Second, Third, and Fourth Edition Forewords",
    route: "Section1"
  },
  {
    id: 3,
    title: "Bill's Story",
    pages: "Pages 1-16",
    description: "Chapter 1: The co-founder's journey to sobriety",
    route: "Section1"
  },
  {
    id: 4,
    title: "There Is a Solution",
    pages: "Pages 17-29",
    description: "Chapter 2: The problem and the solution",
    route: "Section1"
  },
  {
    id: 5,
    title: "More About Alcoholism",
    pages: "Pages 30-43",
    description: "Chapter 3: Understanding the disease",
    route: "Section1"
  },
  {
    id: 6,
    title: "We Agnostics",
    pages: "Pages 44-57",
    description: "Chapter 4: Spiritual matters for skeptics",
    route: "Section1"
  },
  {
    id: 7,
    title: "How It Works",
    pages: "Pages 58-71",
    description: "Chapter 5: The Twelve Steps",
    route: "Section1"
  },
  {
    id: 8,
    title: "Into Action",
    pages: "Pages 72-88",
    description: "Chapter 6: Working the program of recovery",
    route: "Section1"
  },
  {
    id: 9,
    title: "Working with Others",
    pages: "Pages 89-103",
    description: "Chapter 7: How to help other alcoholics",
    route: "Section1"
  },
  {
    id: 10,
    title: "To Wives",
    pages: "Pages 104-121",
    description: "Chapter 8: Guidance for spouses",
    route: "Section1"
  },
  {
    id: 11,
    title: "The Family Afterward",
    pages: "Pages 122-135",
    description: "Chapter 9: Family recovery and healing",
    route: "Section1"
  },
  {
    id: 12,
    title: "To Employers",
    pages: "Pages 136-150",
    description: "Chapter 10: Workplace and employment guidance",
    route: "Section1"
  },
  {
    id: 13,
    title: "A Vision for You",
    pages: "Pages 151-164",
    description: "Chapter 11: The future of Alcoholics Anonymous",
    route: "Section1"
  },
  {
    id: 14,
    title: "Personal Stories - Part I",
    pages: "Pages 171-321",
    description: "Pioneers of A.A. - stories from the early days",
    route: "Section8"
  },
  {
    id: 15,
    title: "Personal Stories - Part II",
    pages: "Pages 322-419",
    description: "They Stopped in Time",
    route: "Section9"
  },
  {
    id: 16,
    title: "Personal Stories - Part III",
    pages: "Pages 420-560",
    description: "They Lost Nearly All",
    route: "Section9"
  },
  {
    id: 17,
    title: "Appendices",
    pages: "Pages 561-575",
    description: "The Twelve Traditions, spiritual experience, and more",
    route: "Section10"
  }
];

const SectionCard = memo(function SectionCard({ section, createPageUrl }) {
  return (
    <Link
      to={createPageUrl(section.route)}
      className="group relative overflow-hidden rounded-xl sm:rounded-2xl 
                 bg-white/5 backdrop-blur-xl border border-white/10
                 p-3 sm:p-5 transition-all duration-500 
                 hover:bg-white/8 hover:border-[#5EAAFF]/40 hover:shadow-2xl hover:shadow-[#5EAAFF]/20
                 hover:scale-[1.02] active:scale-[0.98]
                 shadow-lg shadow-black/20"
      style={{
        backgroundImage: `repeating-linear-gradient(45deg, 
          transparent, 
          transparent 10px, 
          rgba(94, 170, 255, 0.03) 10px, 
          rgba(94, 170, 255, 0.03) 20px)`
      }}
    >
      {/* Arrow indicator */}
      <div className="absolute top-3 right-3 sm:top-4 sm:right-4 
                      bg-white/5 backdrop-blur-xl border border-white/10 rounded-full p-1.5
                      text-[#5EAAFF]/60 group-hover:text-[#5EAAFF] 
                      group-hover:bg-white/10 group-hover:border-[#5EAAFF]/30
                      transition-all duration-500 group-hover:translate-x-1
                      shadow-lg shadow-black/20">
        <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>

      <div>
        {/* Title with Pages */}
        <h3 className="text-lg sm:text-2xl text-[#FFFFFD] mb-1 sm:mb-2 leading-tight tracking-wide flex items-center gap-2 flex-wrap" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
          <span>{section.title}</span>
          <span className="text-[10px] sm:text-xs text-[#5EAAFF] tracking-wider" style={{ fontFamily: 'Lato, sans-serif', fontWeight: 700 }}>
            {section.pages}
          </span>
        </h3>

        {/* Description */}
        <p className="text-xs sm:text-sm text-[#FFFFFD] leading-relaxed" style={{ fontFamily: 'Lato, sans-serif', fontWeight: 600 }}>
          {section.description}
        </p>
      </div>
    </Link>
  );
});

const Home = memo(function Home() {
  const [settingsOpen, setSettingsOpen] = useState(false);

  return (
    <div className="min-h-screen min-h-[100dvh] w-full bg-gradient-to-br from-[#1a1f26] via-[#222A31] to-[#2a3440] overflow-x-hidden overflow-y-auto">
      {/* Header */}
      <header className="bg-white/5 backdrop-blur-xl border-b border-white/10 px-4 py-5 w-full shadow-lg shadow-black/20">
        <div className="max-w-6xl mx-auto relative">
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={() => setSettingsOpen(true)}
            className="text-white hover:text-[#5EAAFF] absolute right-0 top-0 
                       bg-white/5 backdrop-blur-xl border border-white/10 
                       hover:bg-white/10 transition-all duration-300
                       shadow-lg shadow-black/20"
          >
            <Settings className="w-4 h-4" />
          </Button>
          <div className="text-center mb-3">
            <h1 className="text-2xl sm:text-3xl md:text-4xl text-[#FFFFFD] leading-tight tracking-wide" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
              Alcoholics Anonymous
            </h1>
            <p className="text-[10px] sm:text-xs md:text-sm text-[#5EAAFF] leading-snug mt-2" style={{ fontFamily: 'Lato, sans-serif', fontWeight: 700 }}>
              The Story of How Many Thousands of Men and Women Have Recovered from Alcoholism
            </p>
          </div>
          <div className="mt-3 max-w-md mx-auto">
            <SearchBar />
          </div>
        </div>
      </header>

      {/* Highlighting Guide */}
      <div className="px-3 sm:px-4 py-4 sm:py-6">
        <div className="max-w-6xl mx-auto">
          <div className="rounded-xl sm:rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 p-4 sm:p-6 shadow-xl shadow-[#5EAAFF]/5">
            <h2 className="text-lg sm:text-xl text-[#FFFFFD] mb-3 sm:mb-4 text-center tracking-wide" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>Highlighting Guide</h2>
            <div className="flex flex-col gap-2 sm:gap-3">
              <div className="flex items-center justify-center gap-3 sm:gap-4 flex-wrap">
                <div className="flex items-center gap-2">
                  <span className="w-4 h-4 sm:w-5 sm:h-5 rounded bg-orange-400 flex-shrink-0"></span>
                  <span className="text-xs sm:text-sm text-[#FFFFFD]" style={{ fontFamily: 'Lato, sans-serif', fontWeight: 400 }}>Orange = Steps</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-4 h-4 sm:w-5 sm:h-5 rounded bg-blue-400 flex-shrink-0"></span>
                  <span className="text-xs sm:text-sm text-[#FFFFFD]" style={{ fontFamily: 'Lato, sans-serif', fontWeight: 400 }}>Blue = Promises</span>
                </div>
              </div>
              <div className="flex items-center justify-center gap-3 sm:gap-4 flex-wrap">
                <div className="flex items-center gap-2">
                  <span className="w-4 h-4 sm:w-5 sm:h-5 rounded bg-green-400 flex-shrink-0"></span>
                  <span className="text-xs sm:text-sm text-[#FFFFFD]" style={{ fontFamily: 'Lato, sans-serif', fontWeight: 400 }}>Green = Prayers</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-4 h-4 sm:w-5 sm:h-5 rounded bg-pink-400 flex-shrink-0"></span>
                  <span className="text-xs sm:text-sm text-[#FFFFFD]" style={{ fontFamily: 'Lato, sans-serif', fontWeight: 400 }}>Pink = Tab Reference</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section Cards */}
      <main className="max-w-6xl mx-auto px-3 sm:px-4 py-4 sm:py-6 pb-8 sm:pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 md:gap-6">
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
      <footer className="bg-white/5 backdrop-blur-xl border-t border-white/10 px-4 py-4 mt-8 shadow-lg shadow-black/20">
        <p className="text-center text-xs text-[#FFFFFD]/40" style={{ fontFamily: 'Lato, sans-serif', fontWeight: 300 }}>
          Fourth Edition • Alcoholics Anonymous World Services, Inc.
        </p>
      </footer>
    </div>
  );
});

export default Home;