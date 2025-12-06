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
        <mark key={i} className="bg-[#25DCE6]/30 text-[#FFFFFD] px-0.5 rounded">{part.text}</mark>
      ) : (
        <span key={i}>{part.text}</span>
      )
    );
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
      
      {isFocused && (results.chapters.length > 0 || results.content.length > 0) && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-[#222A31] rounded-lg border border-[#25DCE6]/20 overflow-hidden z-50 shadow-xl max-h-80 overflow-y-auto">
          {results.chapters.length > 0 && (
            <>
              <div className="px-3 py-1.5 text-[10px] uppercase tracking-wide text-[#25DCE6]/60 bg-[#1a2028] flex items-center gap-1 sticky top-0">
                <BookOpen className="w-3 h-3" /> Chapters
              </div>
              {results.chapters.map((result) => (
                <button
                  key={result.id}
                  onMouseDown={() => handleSelect(result.id)}
                  className="w-full text-left px-3 py-2 hover:bg-[#25DCE6]/10 border-b border-[#25DCE6]/10 transition-colors"
                >
                  <div className="text-[#FFFFFD] text-sm font-medium truncate">{result.title}</div>
                  <div className="text-[#FFFFFD]/50 text-xs">p. {result.pages}</div>
                </button>
              ))}
            </>
          )}
          
          {results.content.length > 0 && (
            <>
              <div className="px-3 py-1.5 text-[10px] uppercase tracking-wide text-[#25DCE6]/60 bg-[#1a2028] flex items-center gap-1 sticky top-0">
                <FileText className="w-3 h-3" /> In Text {results.content.length > 0 && `(${results.content.length})`}
              </div>
              {results.content.map((result, idx) => (
                <button
                  key={`${result.chapterId}-${idx}`}
                  onMouseDown={() => handleSelect(result.chapterId)}
                  className="w-full text-left px-3 py-2 hover:bg-[#25DCE6]/10 border-b border-[#25DCE6]/10 last:border-b-0 transition-colors"
                >
                  <div className="text-[#FFFFFD] text-sm font-medium truncate">{result.chapterTitle}</div>
                  <div className="text-[#FFFFFD]/40 text-xs line-clamp-2 italic">
                    "{renderHighlightedSnippet(result.snippet, result.matchedQuery)}"
                  </div>
                </button>
              ))}
            </>
          )}
        </div>
      )}
      
      {isFocused && searchQuery.length >= 2 && results.chapters.length === 0 && results.content.length === 0 && !isSearching && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-[#222A31] rounded-lg border border-[#25DCE6]/20 z-50 shadow-xl">
          <div className="text-center text-[#FFFFFD]/50 text-sm py-3">
            No results found
          </div>
        </div>
      )}
      
      {isFocused && isSearching && results.chapters.length === 0 && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-[#222A31] rounded-lg border border-[#25DCE6]/20 z-50 shadow-xl">
          <div className="flex items-center justify-center gap-2 text-[#FFFFFD]/50 text-sm py-3">
            <Loader2 className="w-4 h-4 animate-spin" /> Searching...
          </div>
        </div>
      )}
    </div>
  );
});

export default SearchBar;