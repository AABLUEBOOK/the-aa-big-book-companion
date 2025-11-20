import React, { useState, useEffect } from "react";
import { base44 } from "@/api/base44Client";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import AnnotationToolbar from "./AnnotationToolbar";
import { CHAPTER_CONTENT } from "./allChapterContent";

export default function ChapterContent({ chapter, currentIndex, totalChapters, annotations, isLocked, onNext, onPrevious }) {
  const [selectedText, setSelectedText] = useState(null);
  const [toolbarPosition, setToolbarPosition] = useState(null);
  const queryClient = useQueryClient();

  const createAnnotationMutation = useMutation({
    mutationFn: (data) => base44.entities.Annotation.create(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['annotations'] });
      clearSelection();
    }
  });

  useEffect(() => {
    const handleSelection = () => {
      if (isLocked) return;
      
      const selection = window.getSelection();
      const text = selection.toString().trim();
      
      if (text) {
        const range = selection.getRangeAt(0);
        const rect = range.getBoundingClientRect();
        setSelectedText(text);
        setToolbarPosition({ x: rect.left + rect.width / 2, y: rect.top });
      } else {
        clearSelection();
      }
    };

    document.addEventListener('mouseup', handleSelection);
    return () => document.removeEventListener('mouseup', handleSelection);
  }, [isLocked]);

  const clearSelection = () => {
    setSelectedText(null);
    setToolbarPosition(null);
    window.getSelection().removeAllRanges();
  };

  const handleHighlight = (color) => {
    if (selectedText && chapter) {
      createAnnotationMutation.mutate({
        chapter_id: chapter.id,
        text: selectedText,
        type: 'highlight',
        color: color
      });
    }
  };

  const handleUnderline = () => {
    if (selectedText && chapter) {
      createAnnotationMutation.mutate({
        chapter_id: chapter.id,
        text: selectedText,
        type: 'underline'
      });
    }
  };

  if (!chapter) return null;

  const chapterData = CHAPTER_CONTENT[chapter.id] || { 
    paragraphs: [{ text: "Content for this chapter will be added soon." }],
    highlights: []
  };

  return (
    <div className="bg-[#2A3440] rounded-xl sm:rounded-2xl shadow-2xl border border-[#25DCE6]/20 overflow-hidden">

      {/* Chapter Header */}
      <div className="bg-gradient-to-r from-[#2A3440] to-[#222A31] border-b border-[#25DCE6]/20 px-4 sm:px-8 lg:px-12 py-4 sm:py-6 lg:py-8">
        {chapter.chapter && (
          <div className="text-xs sm:text-sm font-medium text-[#25DCE6]/70 uppercase tracking-widest mb-1 sm:mb-2">
            Chapter {chapter.chapter}
          </div>
        )}
        <h1 className="text-xl sm:text-3xl lg:text-4xl xl:text-5xl font-serif font-bold text-[#FFFFFD] leading-tight">
          {chapter.title}
        </h1>
        <div className="mt-2 sm:mt-3 text-xs sm:text-sm text-[#25DCE6]/60">
          Page {chapter.pageNum}
        </div>
      </div>

      {/* Chapter Body */}
      <div className="px-4 sm:px-8 lg:px-12 py-6 sm:py-10 lg:py-12 relative">
        
        {/* Decorative page texture */}
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        ></div>

        <div className="prose prose-sm sm:prose-base lg:prose-lg max-w-none relative select-text">
          <div className="font-serif text-[#FFFFFD] leading-relaxed text-base sm:text-lg space-y-4 sm:space-y-6">
            {chapterData.paragraphs?.map((para, idx) => {
              const baseClasses = "mb-6 first:mt-0 leading-relaxed";
              const highlightClasses = {
                'yellow': 'bg-[#25DCE6]/20 px-2 py-1 rounded border-l-2 border-[#25DCE6]',
                'pink': 'bg-pink-500/20 px-2 py-1 rounded border-l-2 border-pink-400',
                'blue': 'bg-blue-500/20 px-2 py-1 rounded border-l-2 border-blue-400',
                'basic-text': 'border-l-4 border-[#25DCE6] pl-4 bg-[#25DCE6]/10 py-2'
              };

              // Check if this text has user annotations
              const textAnnotations = annotations?.filter(a => para.text.includes(a.text)) || [];
              
              return (
                <p 
                  key={idx} 
                  className={cn(
                    baseClasses,
                    para.highlight && highlightClasses[para.highlight]
                  )}
                >
                  {textAnnotations.length > 0 ? (
                    <AnnotatedText text={para.text} annotations={textAnnotations} />
                  ) : para.highlightText ? (
                    <>
                      {para.text}{' '}
                      <span className={cn(
                        "inline-block",
                        para.highlight && highlightClasses[para.highlight]
                      )}>
                        {para.highlightText}
                      </span>
                    </>
                  ) : (
                    para.text
                  )}
                </p>
              );
            })}
          </div>
        </div>

        {selectedText && !isLocked && (
          <AnnotationToolbar
            selectedText={selectedText}
            onHighlight={handleHighlight}
            onUnderline={handleUnderline}
            onClear={clearSelection}
            position={toolbarPosition}
          />
        )}

        {/* Sidebar Annotations */}
        <div className="hidden xl:block absolute -right-64 top-24 w-56 space-y-4">
          {chapterData.highlights?.filter(h => h.type === 'sidebar').map((highlight, idx) => (
            <div
              key={idx}
              className="bg-[#25DCE6]/10 border-2 border-[#25DCE6]/40 rounded-lg px-4 py-3 shadow-lg hover:shadow-xl hover:bg-[#25DCE6]/15 transition-all backdrop-blur-sm"
              style={{ transform: `rotate(${idx % 2 === 0 ? '1deg' : '-1deg'})` }}
            >
              <div className="text-xs font-bold text-[#25DCE6] uppercase tracking-wider text-center leading-tight">
                {highlight.text}
              </div>
              {highlight.subtext && (
                <div className="text-xs text-[#FFFFFD]/70 text-center mt-1">
                  {highlight.subtext}
                </div>
              )}
              {highlight.page && (
                <div className="text-xs text-[#25DCE6]/80 text-center mt-1 font-mono">
                  P. {highlight.page}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function AnnotatedText({ text, annotations }) {
  let parts = [{ text, annotations: [] }];

  // Split text by annotations
  annotations.forEach(annotation => {
    const newParts = [];
    parts.forEach(part => {
      if (part.annotations.length > 0) {
        newParts.push(part);
        return;
      }

      const index = part.text.indexOf(annotation.text);
      if (index === -1) {
        newParts.push(part);
        return;
      }

      // Before
      if (index > 0) {
        newParts.push({ text: part.text.substring(0, index), annotations: [] });
      }
      
      // Annotated part
      newParts.push({ 
        text: annotation.text, 
        annotations: [annotation]
      });
      
      // After
      if (index + annotation.text.length < part.text.length) {
        newParts.push({ 
          text: part.text.substring(index + annotation.text.length), 
          annotations: [] 
        });
      }
    });
    parts = newParts;
  });

  return (
    <>
      {parts.map((part, idx) => {
        if (part.annotations.length === 0) {
          return <span key={idx}>{part.text}</span>;
        }

        const annotation = part.annotations[0];
        const colorClasses = {
          yellow: 'bg-yellow-400/40 border-b-2 border-yellow-400 text-[#FFFFFD]',
          pink: 'bg-pink-400/40 border-b-2 border-pink-400 text-[#FFFFFD]',
          blue: 'bg-blue-400/40 border-b-2 border-blue-400 text-[#FFFFFD]',
          green: 'bg-green-400/40 border-b-2 border-green-400 text-[#FFFFFD]'
        };

        if (annotation.type === 'highlight') {
          return (
            <mark key={idx} className={cn("px-1 rounded", colorClasses[annotation.color] || colorClasses.yellow)}>
              {part.text}
            </mark>
          );
        } else {
          return (
            <span key={idx} className="border-b-2 border-[#25DCE6] decoration-2 text-[#FFFFFD]">
              {part.text}
            </span>
          );
        }
      })}
    </>
  );
}