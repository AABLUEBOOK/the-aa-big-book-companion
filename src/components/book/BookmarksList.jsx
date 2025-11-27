import React, { useState, memo, useCallback } from "react";
import { BookmarkCheck, Trash2, StickyNote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { base44 } from "@/api/base44Client";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const BookmarksList = memo(function BookmarksList({ onClose }) {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const [editingNote, setEditingNote] = useState(null);
  const [noteText, setNoteText] = useState("");

  const { data: bookmarks = [] } = useQuery({
    queryKey: ['bookmarks'],
    queryFn: () => base44.entities.Bookmark.list('-created_date'),
  });

  const deleteBookmark = useMutation({
    mutationFn: (id) => base44.entities.Bookmark.delete(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['bookmarks'] });
      toast.success("Bookmark removed");
    },
  });

  const updateBookmark = useMutation({
    mutationFn: ({ id, data }) => base44.entities.Bookmark.update(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['bookmarks'] });
      setEditingNote(null);
      setNoteText("");
      toast.success("Note saved");
    },
  });

  const handleNavigate = useCallback((bookmark) => {
    navigate(`/${bookmark.section_route}#${bookmark.chapter_id}`);
    if (onClose) onClose();
  }, [navigate, onClose]);

  const handleSaveNote = useCallback((bookmarkId) => {
    updateBookmark.mutate({
      id: bookmarkId,
      data: { note: noteText }
    });
  }, [noteText, updateBookmark]);

  const handleEditNote = useCallback((bookmark) => {
    setEditingNote(bookmark.id);
    setNoteText(bookmark.note || "");
  }, []);

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-bold text-[#FFFFFD] flex items-center gap-2">
          <BookmarkCheck className="w-5 h-5 text-[#25DCE6]" />
          My Bookmarks
        </h3>
        <span className="text-sm text-[#FFFFFD]/60">
          {bookmarks.length} {bookmarks.length === 1 ? 'bookmark' : 'bookmarks'}
        </span>
      </div>

      {bookmarks.length === 0 ? (
        <div className="text-center py-12 text-[#FFFFFD]/60">
          <BookmarkCheck className="w-12 h-12 mx-auto mb-3 opacity-30" />
          <p>No bookmarks yet</p>
          <p className="text-sm mt-1">Click the bookmark icon on any chapter to save it</p>
        </div>
      ) : (
        <div className="space-y-3 max-h-[600px] overflow-y-auto pr-2">
          {bookmarks.map((bookmark) => (
            <div
              key={bookmark.id}
              className="bg-[#222A31] rounded-lg p-4 border border-[#25DCE6]/20 hover:border-[#25DCE6]/40 transition-all"
            >
              <div className="flex items-start justify-between gap-3">
                <button
                  onClick={() => handleNavigate(bookmark)}
                  className="flex-1 text-left group"
                >
                  <h4 className="font-semibold text-[#FFFFFD] group-hover:text-[#25DCE6] transition-colors">
                    {bookmark.chapter_title}
                  </h4>
                  <p className="text-xs text-[#FFFFFD]/60 mt-1">
                    Page {bookmark.page_number}
                  </p>
                </button>

                <div className="flex items-center gap-1">
                  <Button
                    onClick={() => handleEditNote(bookmark)}
                    variant="ghost"
                    size="sm"
                    className="text-[#25DCE6] hover:bg-[#25DCE6]/10 h-8 w-8 p-0"
                  >
                    <StickyNote className="w-4 h-4" />
                  </Button>
                  <Button
                    onClick={() => deleteBookmark.mutate(bookmark.id)}
                    variant="ghost"
                    size="sm"
                    className="text-red-400 hover:bg-red-500/10 h-8 w-8 p-0"
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              {editingNote === bookmark.id ? (
                <div className="mt-3 space-y-2">
                  <Textarea
                    value={noteText}
                    onChange={(e) => setNoteText(e.target.value)}
                    placeholder="Add a note about this bookmark..."
                    className="bg-[#2A3440] border-[#25DCE6]/30 text-[#FFFFFD] text-sm"
                    rows={2}
                  />
                  <div className="flex gap-2">
                    <Button
                      onClick={() => handleSaveNote(bookmark.id)}
                      size="sm"
                      className="bg-[#25DCE6] hover:bg-[#25DCE6]/80 text-[#222A31]"
                    >
                      Save Note
                    </Button>
                    <Button
                      onClick={() => {
                        setEditingNote(null);
                        setNoteText("");
                      }}
                      size="sm"
                      variant="outline"
                      className="border-[#25DCE6]/30 text-[#FFFFFD]"
                    >
                      Cancel
                    </Button>
                  </div>
                </div>
              ) : bookmark.note ? (
                <div className="mt-3 text-sm text-[#FFFFFD]/70 bg-[#2A3440] rounded p-2 border-l-2 border-[#25DCE6]/50">
                  {bookmark.note}
                </div>
              ) : null}
            </div>
          ))}
        </div>
      )}
    </div>
  );
});

export default BookmarksList;