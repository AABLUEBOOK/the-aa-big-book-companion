import React, { useState, useMemo, memo } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Search, X } from "lucide-react";

const ALL_CHAPTERS = [
  { id: "preface", title: "Preface", pages: "xi-xii" },
  { id: "foreword-first", title: "Foreword To First Edition", pages: "xiii-xiv" },
  { id: "foreword-second", title: "Foreword To Second Edition", pages: "xv-xxi" },
  { id: "foreword-third", title: "Foreword To Third Edition", pages: "xxii" },
  { id: "foreword-fourth", title: "Foreword To Fourth Edition", pages: "xxiii-xxiv" },
  { id: "doctors-opinion", title: "The Doctor's Opinion", pages: "xxv-xxxii" },
  { id: "bills-story", title: "Bill's Story", pages: "1-16", chapter: 1 },
  { id: "there-is-solution", title: "There Is A Solution", pages: "17-29", chapter: 2 },
  { id: "more-about-alcoholism", title: "More About Alcoholism", pages: "30-43", chapter: 3 },
  { id: "we-agnostics", title: "We Agnostics", pages: "44-57", chapter: 4 },
  { id: "how-it-works", title: "How It Works", pages: "58-71", chapter: 5 },
  { id: "into-action", title: "Into Action", pages: "72-88", chapter: 6 },
  { id: "working-with-others", title: "Working With Others", pages: "89-103", chapter: 7 },
  { id: "to-wives", title: "To Wives", pages: "104-121", chapter: 8 },
  { id: "family-afterward", title: "The Family Afterward", pages: "122-135", chapter: 9 },
  { id: "to-employers", title: "To Employers", pages: "136-150", chapter: 10 },
  { id: "vision-for-you", title: "A Vision For You", pages: "151-164", chapter: 11 },
  { id: "dr-bob-nightmare", title: "Doctor Bob's Nightmare", pages: "171-181" },
  { id: "appendices", title: "Appendices", pages: "561-575" },
];

const SearchBar = memo(function SearchBar({ className = "" }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const navigate = useNavigate();

  const searchResults = useMemo(() => {
    if (!searchQuery.trim() || searchQuery.length < 2) return [];
    const query = searchQuery.toLowerCase();
    return ALL_CHAPTERS.filter(ch => 
      ch.title.toLowerCase().includes(query) ||
      ch.id.toLowerCase().includes(query)
    ).slice(0, 6);
  }, [searchQuery]);

  const handleSelect = (chId) => {
    navigate(`/Chapter?id=${chId}`);
    setSearchQuery("");
    setIsFocused(false);
  };

  return (
    <div className={`relative ${className}`}>
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#25DCE6]/60" />
        <Input
          type="text"
          placeholder="Search chapters..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setTimeout(() => setIsFocused(false), 150)}
          className="pl-9 pr-8 h-9 bg-[#222A31] border-[#25DCE6]/30 text-[#FFFFFD] placeholder:text-[#FFFFFD]/40 focus:border-[#25DCE6] text-sm"
        />
        {searchQuery && (
          <button
            onClick={() => setSearchQuery("")}
            className="absolute right-2 top-1/2 -translate-y-1/2 text-[#FFFFFD]/40 hover:text-[#FFFFFD]"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>
      
      {isFocused && searchResults.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-[#222A31] rounded-lg border border-[#25DCE6]/20 overflow-hidden z-50 shadow-xl">
          {searchResults.map((result) => (
            <button
              key={result.id}
              onMouseDown={() => handleSelect(result.id)}
              className="w-full text-left px-3 py-2 hover:bg-[#25DCE6]/10 border-b border-[#25DCE6]/10 last:border-b-0 transition-colors"
            >
              <div className="text-[#FFFFFD] text-sm font-medium truncate">{result.title}</div>
              <div className="text-[#FFFFFD]/50 text-xs">p. {result.pages}</div>
            </button>
          ))}
        </div>
      )}
      
      {isFocused && searchQuery.length >= 2 && searchResults.length === 0 && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-[#222A31] rounded-lg border border-[#25DCE6]/20 z-50 shadow-xl">
          <div className="text-center text-[#FFFFFD]/50 text-sm py-3">
            No chapters found
          </div>
        </div>
      )}
    </div>
  );
});

export default SearchBar;