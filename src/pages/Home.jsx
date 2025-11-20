import React from "react";
import { base44 } from "@/api/base44Client";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { BookOpen, ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

function createPageUrl(pageName) {
  return `/${pageName}`;
}

const BOOK_SECTIONS = [
  {
    id: 1,
    section_number: 1,
    title: "Preface & Forewords",
    page_range: "xi-xxvi",
    description: "Introduction to the book, its history, and The Doctor's Opinion",
    route: "Section1"
  },
  {
    id: 2,
    section_number: 2,
    title: "Bill's Story & The Solution",
    page_range: "1-43",
    description: "Chapter 1-3: Bill's Story, There Is a Solution, More About Alcoholism",
    route: "Section2"
  },
  {
    id: 3,
    section_number: 3,
    title: "We Agnostics & How It Works",
    page_range: "44-71",
    description: "Chapter 4-5: Faith and the Twelve Steps",
    route: "Section3"
  },
  {
    id: 4,
    section_number: 4,
    title: "Into Action",
    page_range: "72-88",
    description: "Chapter 6: Working the program of recovery",
    route: "Section4"
  },
  {
    id: 5,
    section_number: 5,
    title: "Working with Others",
    page_range: "89-103",
    description: "Chapter 7: How to help other alcoholics",
    route: "Section5"
  },
  {
    id: 6,
    section_number: 6,
    title: "To Wives & The Family Afterward",
    page_range: "104-135",
    description: "Chapter 8-9: Guidance for families",
    route: "Section6"
  },
  {
    id: 7,
    section_number: 7,
    title: "To Employers & A Vision for You",
    page_range: "136-164",
    description: "Chapter 10-11: The workplace and future of A.A.",
    route: "Section7"
  },
  {
    id: 8,
    section_number: 8,
    title: "Personal Stories - Part I",
    page_range: "171-301",
    description: "Pioneers of A.A. - stories from the early days",
    route: "Section8"
  },
  {
    id: 9,
    section_number: 9,
    title: "Personal Stories - Part II & III",
    page_range: "303-469",
    description: "They Stopped in Time & They Lost Nearly All",
    route: "Section9"
  },
  {
    id: 10,
    section_number: 10,
    title: "Appendices",
    page_range: "471-575",
    description: "The Twelve Traditions, spiritual experience, and more",
    route: "Section10"
  }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#222A31]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block p-4 bg-[#25DCE6]/10 rounded-2xl mb-6 shadow-lg border border-[#25DCE6]/20">
            <BookOpen className="w-16 h-16 text-[#25DCE6]" />
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif font-bold text-[#FFFFFD] mb-4 tracking-tight">
            Alcoholics Anonymous
          </h1>
          <p className="text-xl sm:text-2xl text-[#25DCE6] font-light italic max-w-3xl mx-auto">
            The Story of How Many Thousands of Men and Women Have Recovered from Alcoholism
          </p>
          <div className="mt-6 text-sm text-[#25DCE6]/70 uppercase tracking-wider">
            Fourth Edition
          </div>

          {/* Highlighting Guide */}
          <div className="mt-8 max-w-2xl mx-auto bg-[#2A3440] border border-[#25DCE6]/20 rounded-xl p-6">
            <h3 className="text-lg font-bold text-[#FFFFFD] mb-4">Highlighting Guide</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-orange-500 rounded"></div>
                <span className="text-[#FFFFFD]/80">Orange = Steps</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-green-500 rounded"></div>
                <span className="text-[#FFFFFD]/80">Green = Prayers</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-blue-500 rounded"></div>
                <span className="text-[#FFFFFD]/80">Blue = Promises</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-yellow-400 rounded"></div>
                <span className="text-[#FFFFFD]/80">Yellow = General Info</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-pink-400 rounded"></div>
                <span className="text-[#FFFFFD]/80">Pink = Tab Reference</span>
              </div>
            </div>
          </div>
        </div>

        {/* Sections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {BOOK_SECTIONS.map((section) => (
            <SectionWidget key={section.id} section={section} />
          ))}
        </div>

        {/* Footer */}
        <div className="mt-20 text-center text-[#25DCE6]/60 text-sm">
          <p className="font-serif italic">
            "We are not a glum lot. We absolutely insist on enjoying life."
          </p>
        </div>
      </div>
    </div>
  );
}

function SectionWidget({ section }) {
  return (
    <Link to={createPageUrl(section.route)}>
      <Card className="group transition-all duration-300 border-2 hover:-translate-y-1 cursor-pointer hover:shadow-2xl hover:shadow-[#25DCE6]/20 hover:border-[#25DCE6]/50 border-[#25DCE6]/20">
        <CardContent className="p-8 bg-gradient-to-br from-[#2A3440] to-[#222A31] relative overflow-hidden">
          
          {/* Decorative Element */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#25DCE6]/10 rounded-full -translate-y-16 translate-x-16"></div>
          
          <div className="relative z-10">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-[#25DCE6]/10 border border-[#25DCE6]/30 flex items-center justify-center shadow-sm">
                  <span className="text-2xl font-serif font-bold text-[#25DCE6]">
                    {section.section_number}
                  </span>
                </div>
                <div className="text-sm font-medium text-[#25DCE6]/70 uppercase tracking-wider">
                  Pages {section.page_range}
                </div>
              </div>
              <ChevronRight className="w-6 h-6 text-[#25DCE6] group-hover:translate-x-1 transition-transform" />
            </div>

            <h3 className="text-2xl font-serif font-bold text-[#FFFFFD] mb-3 leading-tight">
              {section.title}
            </h3>
            
            <p className="text-[#FFFFFD]/70 leading-relaxed font-light">
              {section.description}
            </p>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}