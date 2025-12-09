import React, { useState, memo, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Search, X, BookOpen, FileText, Loader2 } from "lucide-react";
import { search, highlightMatches } from "./searchIndex";
import { base44 } from "@/api/base44Client";
import { useMutation } from "@tanstack/react-query";

const SearchBar = memo(function SearchBar({ className = "" }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [results, setResults] = useState({ chapters: [], content: [] });
  const [isSearching, setIsSearching] = useState(false);
  const navigate = useNavigate();

  const saveSearchMutation = useMutation({
    mutationFn: (query) => base44.entities.SearchHistory.create({ query }),
  });

  // Index builds on first search - no preloading needed

  // Search when query changes
  useEffect(() => {
    if (!searchQuery.trim() || searchQuery.length < 2) {
      setResults({ chapters: [], content: [] });
      return;
    }

    setIsSearching(true);
    const debounce = setTimeout(async () => {
      const searchResults = await search(searchQuery, { fuzzy: true, maxResults: 6 });
      setResults(searchResults);
      setIsSearching(false);
    }, 200);

    return () => clearTimeout(debounce);
  }, [searchQuery]);

  const handleSelect = (chId) => {
    if (searchQuery.trim()) {
      saveSearchMutation.mutate(searchQuery.trim());
      navigate(`/Chapter?id=${chId}&search=${encodeURIComponent(searchQuery.trim())}`);
    } else {
      navigate(`/Chapter?id=${chId}`);
    }
    setSearchQuery("");
    setIsFocused(false);
  };

  // Render highlighted snippet
  const renderHighlightedSnippet = (snippet, query) => {
    const parts = highlightMatches(snippet, query);
    return parts.map((part, i) => 
      part.highlight ? (
        <mark key={i} className="bg-[#5EAAFF]/20 backdrop-blur-xl text-[#5EAAFF] px-1.5 py-0.5 rounded-lg border border-[#5EAAFF]/30 shadow-lg">{part.text}</mark>
      ) : (
        <span key={i}>{part.text}</span>
      )
    );
  };

  return (
    <div className={`relative ${className}`}>
      <div className="relative">
        <div className="absolute left-3 top-1/2 -translate-y-1/2 bg-[#5EAAFF]/10 backdrop-blur-xl 
                        rounded-full p-1.5 border border-[#5EAAFF]/20 shadow-lg">
          <Search className="w-3 h-3 text-[#5EAAFF]" />
        </div>
        <Input
          type="text"
          placeholder="Search chapters..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setTimeout(() => setIsFocused(false), 150)}
          className="pl-12 pr-10 h-11 bg-white/5 backdrop-blur-3xl border-white/10 text-[#FFFFFD] 
                     placeholder:text-[#FFFFFD]/40 focus:border-[#5EAAFF]/50 text-sm rounded-2xl
                     shadow-lg shadow-black/20 hover:bg-white/8 transition-all duration-500"
        />
        {searchQuery && (
          <button
            onClick={() => setSearchQuery("")}
            className="absolute right-2 top-1/2 -translate-y-1/2 text-[#FFFFFD]/40 hover:text-[#FFFFFD]
                       bg-white/5 backdrop-blur-xl rounded-full p-1.5 border border-white/10
                       hover:bg-white/10 transition-all duration-300 shadow-lg"
          >
            <X className="w-3 h-3" />
          </button>
        )}
      </div>
      
      {isFocused && (results.chapters.length > 0 || results.content.length > 0) && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white/5 backdrop-blur-3xl rounded-2xl border border-white/10 overflow-hidden z-50 shadow-2xl shadow-black/40 max-h-80 overflow-y-auto">
          {results.chapters.length > 0 && (
            <>
              <div className="px-3 py-2 text-[10px] uppercase tracking-wide text-[#5EAAFF] bg-white/5 backdrop-blur-xl flex items-center gap-1.5 sticky top-0 border-b border-white/10">
                <div className="bg-[#5EAAFF]/10 rounded-full p-1">
                  <BookOpen className="w-3 h-3" />
                </div>
                Chapters
              </div>
              {results.chapters.map((result) => (
                <button
                  key={result.id}
                  onMouseDown={() => handleSelect(result.id)}
                  className="w-full text-left px-3 py-2.5 hover:bg-white/10 border-b border-white/5 
                             transition-all duration-300 group"
                >
                  <div className="text-[#FFFFFD] text-sm font-medium truncate group-hover:text-[#5EAAFF] transition-colors">{result.title}</div>
                  <div className="text-[#FFFFFD]/50 text-xs bg-white/5 backdrop-blur-xl rounded-lg px-2 py-0.5 inline-block mt-1">p. {result.pages}</div>
                </button>
              ))}
            </>
          )}
          
          {results.content.length > 0 && (
            <>
              <div className="px-3 py-2 text-[10px] uppercase tracking-wide text-[#5EAAFF] bg-white/5 backdrop-blur-xl flex items-center gap-1.5 sticky top-0 border-b border-white/10">
                <div className="bg-[#5EAAFF]/10 rounded-full p-1">
                  <FileText className="w-3 h-3" />
                </div>
                In Text {results.content.length > 0 && `(${results.content.length})`}
              </div>
              {results.content.map((result, idx) => (
                <button
                  key={`${result.chapterId}-${idx}`}
                  onMouseDown={() => handleSelect(result.chapterId)}
                  className="w-full text-left px-3 py-2.5 hover:bg-white/10 border-b border-white/5 last:border-b-0 
                             transition-all duration-300 group"
                >
                  <div className="text-[#FFFFFD] text-sm font-medium truncate group-hover:text-[#5EAAFF] transition-colors">{result.chapterTitle}</div>
                  <div className="text-[#FFFFFD]/40 text-xs line-clamp-2 italic mt-1">
                    "{renderHighlightedSnippet(result.snippet, result.matchedQuery)}"
                  </div>
                </button>
              ))}
            </>
          )}
        </div>
      )}
      
      {isFocused && searchQuery.length >= 2 && results.chapters.length === 0 && results.content.length === 0 && !isSearching && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white/5 backdrop-blur-3xl rounded-2xl border border-white/10 z-50 shadow-2xl shadow-black/40">
          <div className="text-center text-[#FFFFFD]/50 text-sm py-4">
            No results found
          </div>
        </div>
      )}
      
      {isFocused && isSearching && results.chapters.length === 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white/5 backdrop-blur-3xl rounded-2xl border border-white/10 z-50 shadow-2xl shadow-black/40">
          <div className="flex items-center justify-center gap-2 text-[#FFFFFD]/50 text-sm py-4">
            <Loader2 className="w-4 h-4 animate-spin drop-shadow-lg" /> Searching...
          </div>
        </div>
      )}
    </div>
  );
});

export default SearchBar;