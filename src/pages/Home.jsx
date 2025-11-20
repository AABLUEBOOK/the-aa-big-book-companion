import React from "react";
import { base44 } from "@/api/base44Client";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { BookOpen, ChevronRight, Lock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

function createPageUrl(pageName) {
  return `/${pageName}`;
}

export default function Home() {
  const { data: sections = [], isLoading } = useQuery({
    queryKey: ['bookSections'],
    queryFn: () => base44.entities.BookSection.list('section_number'),
    initialData: [],
  });

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
        </div>

        {/* Sections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {isLoading ? (
            Array(10).fill(0).map((_, i) => (
              <Card key={i} className="animate-pulse">
                <CardContent className="p-8">
                  <div className="h-24 bg-stone-200 rounded"></div>
                </CardContent>
              </Card>
            ))
          ) : (
            sections.map((section) => (
              <SectionWidget key={section.id} section={section} />
            ))
          )}
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
  const content = (
    <Card className={`group transition-all duration-300 border-2 ${
      section.is_available 
        ? 'hover:-translate-y-1 cursor-pointer hover:shadow-2xl hover:shadow-[#25DCE6]/20 hover:border-[#25DCE6]/50 border-[#25DCE6]/20' 
        : 'opacity-40 border-[#25DCE6]/10'
    }`}>
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
            {section.is_available ? (
              <ChevronRight className="w-6 h-6 text-[#25DCE6] group-hover:translate-x-1 transition-transform" />
            ) : (
              <Lock className="w-5 h-5 text-[#25DCE6]/40" />
            )}
          </div>

          <h3 className="text-2xl font-serif font-bold text-[#FFFFFD] mb-3 leading-tight">
            {section.title}
          </h3>
          
          <p className="text-[#FFFFFD]/70 leading-relaxed font-light">
            {section.description}
          </p>

          {!section.is_available && (
            <div className="mt-4 text-sm text-[#25DCE6]/50 italic">
              Coming soon
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );

  if (section.is_available) {
    return (
      <Link to={createPageUrl(`Section${section.section_number}`)}>
        {content}
      </Link>
    );
  }

  return content;
}