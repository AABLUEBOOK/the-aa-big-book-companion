import React, { useState, useEffect, memo } from "react";
import { cn } from "@/lib/utils";
import { loadChapterContent } from "./chapterLoader";
import AudioPlayer from "./AudioPlayer";
import BookmarkButton from "./BookmarkButton";
import { Loader2, StickyNote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { renderTextWithTerms } from "./TermTooltip";
import NoteButton from "./NoteButton";
import NotesPanel from "./NotesPanel";
import { useQuery } from "@tanstack/react-query";
import { base44 } from "@/api/base44Client";

// Memoized paragraph component
const Paragraph = memo(({ para, idx, renderTerms, chapterId, currentPageNum, note, onNoteChange }) => {
  const highlightClasses = {
    'yellow': 'bg-yellow-400/30 px-1 py-0.5 rounded',
    'pink': 'bg-pink-400/40 px-1 py-0.5 rounded',
    'blue': 'underline decoration-2 decoration-blue-600 underline-offset-2',
    'orange': 'bg-orange-400/30 px-1 py-0.5 rounded',
    'green': 'underline decoration-2 decoration-green-600 underline-offset-2'
  };

  // Page break marker
  if (para.pageNum) {
    return (
      <div key={idx} className="flex items-center gap-3 my-6 sm:my-8">
        <div className="flex-1 h-px bg-gray-300"></div>
        <span className="text-xs sm:text-sm text-gray-500 font-medium">Page {para.pageNum}</span>
        <div className="flex-1 h-px bg-gray-300"></div>
      </div>
    );
  }

  if (para.segments) {
    return (
      <div key={idx} className="group flex gap-1 items-start">
        <p className="mb-4 sm:mb-5 first:mt-0 leading-relaxed sm:leading-relaxed flex-1">
          {para.segments.map((segment, segIdx) => (
            segment.highlight ? (
              <span key={segIdx} className={highlightClasses[segment.highlight]}>
                {renderTerms ? renderTerms(segment.text) : segment.text}
              </span>
            ) : (
              <span key={segIdx}>{renderTerms ? renderTerms(segment.text) : segment.text}</span>
            )
          ))}
        </p>
        <NoteButton
          chapterId={chapterId}
          pageNumber={currentPageNum}
          paragraphIndex={idx}
          existingNote={note}
          onNoteChange={onNoteChange}
        />
      </div>
    );
  }

  return (
    <div key={idx} className="group flex gap-1 items-start">
      <p 
        className={cn(
          "mb-4 sm:mb-5 first:mt-0 leading-relaxed sm:leading-relaxed flex-1",
          para.highlight && highlightClasses[para.highlight]
        )}
      >
        {renderTerms ? renderTerms(para.text) : para.text}
      </p>
      <NoteButton
        chapterId={chapterId}
        pageNumber={currentPageNum}
        paragraphIndex={idx}
        existingNote={note}
        onNoteChange={onNoteChange}
      />
    </div>
  );
});

export default function ChapterContent({ chapter, sectionRoute }) {
  const [chapterData, setChapterData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [notesPanelOpen, setNotesPanelOpen] = useState(false);
  const [notesRefreshKey, setNotesRefreshKey] = useState(0);

  const { data: notes = [], refetch: refetchNotes } = useQuery({
    queryKey: ['notes', chapter?.id, notesRefreshKey],
    queryFn: () => base44.entities.Note.filter({ chapter_id: chapter?.id }),
    enabled: !!chapter?.id,
  });

  // Create a map of paragraph index to note
  const notesByParagraph = notes.reduce((acc, note) => {
    if (note.paragraph_index !== undefined) {
      acc[note.paragraph_index] = note;
    }
    return acc;
  }, {});

  useEffect(() => {
    if (!chapter) return;
    
    setLoading(true);
    loadChapterContent(chapter.id).then(content => {
      setChapterData(content);
      setLoading(false);
    });
  }, [chapter?.id]);

  const handleNoteChange = () => {
    setNotesRefreshKey(prev => prev + 1);
  };

  // Track current page number as we iterate through paragraphs
  const getCurrentPageNum = (paragraphs, currentIdx) => {
    let pageNum = chapter?.pageNum || '';
    for (let i = 0; i <= currentIdx; i++) {
      if (paragraphs[i]?.pageNum) {
        pageNum = paragraphs[i].pageNum;
      }
    }
    return pageNum;
  };

  if (!chapter) return null;

  if (loading) {
    return (
      <section className="bg-white rounded-xl sm:rounded-2xl shadow-lg border border-gray-200 p-8 flex items-center justify-center min-h-[200px]">
        <Loader2 className="w-8 h-8 animate-spin text-[#25DCE6]" />
      </section>
    );
  }

  const data = chapterData || { paragraphs: [{ text: "Content loading..." }] };

  return (
    <section 
      className="bg-white rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl border border-gray-200 overflow-visible relative"
      aria-labelledby={`chapter-title-${chapter.id}`}
    >
      {/* Chapter Header */}
      <header className="bg-gradient-to-r from-gray-100 to-gray-50 border-b border-gray-200 px-3 sm:px-6 md:px-8 lg:px-10 py-3 sm:py-5 md:py-6">
        <div className="flex items-start justify-between gap-3 sm:gap-4">
          <div className="flex-1 min-w-0">
            {chapter.chapter && (
              <div className="text-[10px] sm:text-xs md:text-sm font-medium text-[#25DCE6] uppercase tracking-widest mb-1">
                Chapter {chapter.chapter}
              </div>
            )}
            <h1 
              id={`chapter-title-${chapter.id}`}
              className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-gray-900 leading-tight"
            >
              {chapter.title}
            </h1>
            <div className="mt-1 sm:mt-2 text-[10px] sm:text-xs md:text-sm text-gray-500">
              Page {chapter.pageNum}
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setNotesPanelOpen(true)}
              className="flex items-center gap-1.5 text-xs"
            >
              <StickyNote className="w-4 h-4 text-yellow-500" />
              <span className="hidden sm:inline">Notes</span>
              {notes.length > 0 && (
                <span className="bg-yellow-100 text-yellow-700 px-1.5 py-0.5 rounded-full text-xs">
                  {notes.length}
                </span>
              )}
            </Button>
            <BookmarkButton chapter={chapter} sectionRoute={sectionRoute} />
          </div>
        </div>
      </header>

      {/* Audio Player */}
      <div className="px-3 sm:px-6 md:px-8 lg:px-10 pt-4 sm:pt-5">
        <AudioPlayer content={data} />
      </div>

      {/* Chapter Body */}
      <div className="px-3 sm:px-6 md:px-8 lg:px-10 py-4 sm:py-6 md:py-8 lg:py-10 relative">
        <div className="prose prose-sm sm:prose-base lg:prose-lg max-w-none relative select-text">
          <div className="font-serif text-gray-800 leading-relaxed text-base sm:text-lg md:text-xl space-y-3 sm:space-y-4 md:space-y-5">
            {data.paragraphs?.map((para, idx) => (
              <Paragraph 
                key={idx} 
                para={para} 
                idx={idx} 
                renderTerms={renderTextWithTerms}
                chapterId={chapter.id}
                currentPageNum={getCurrentPageNum(data.paragraphs, idx)}
                note={notesByParagraph[idx]}
                onNoteChange={handleNoteChange}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Notes Panel */}
      <NotesPanel
        chapterId={chapter.id}
        chapterTitle={chapter.title}
        isOpen={notesPanelOpen}
        onClose={() => setNotesPanelOpen(false)}
      />
    </section>
  );
}