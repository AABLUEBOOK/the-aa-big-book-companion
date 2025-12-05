import React, { useState } from "react";
import { StickyNote, X, Trash2, Edit2, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { ScrollArea } from "@/components/ui/scroll-area";
import { base44 } from "@/api/base44Client";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { format } from "date-fns";

export default function NotesPanel({ chapterId, chapterTitle, isOpen, onClose }) {
  const [editingId, setEditingId] = useState(null);
  const [editContent, setEditContent] = useState("");
  const queryClient = useQueryClient();

  const { data: notes = [], isLoading } = useQuery({
    queryKey: ['notes', chapterId],
    queryFn: () => base44.entities.Note.filter({ chapter_id: chapterId }, '-created_date'),
    enabled: isOpen && !!chapterId,
  });

  const updateNoteMutation = useMutation({
    mutationFn: ({ id, data }) => base44.entities.Note.update(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['notes', chapterId] });
      setEditingId(null);
      setEditContent("");
    },
  });

  const deleteNoteMutation = useMutation({
    mutationFn: (id) => base44.entities.Note.delete(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['notes', chapterId] });
    },
  });

  const handleEdit = (note) => {
    setEditingId(note.id);
    setEditContent(note.content);
  };

  const handleSaveEdit = () => {
    if (!editContent.trim()) return;
    updateNoteMutation.mutate({ id: editingId, data: { content: editContent } });
  };

  const handleDelete = (id) => {
    if (confirm("Delete this note?")) {
      deleteNoteMutation.mutate(id);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-y-0 right-0 w-80 bg-white shadow-xl z-50 flex flex-col border-l border-gray-200">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-gray-50">
        <div className="flex items-center gap-2">
          <StickyNote className="w-5 h-5 text-yellow-500" />
          <span className="font-medium text-gray-800">Notes</span>
        </div>
        <Button variant="ghost" size="sm" onClick={onClose} className="h-8 w-8 p-0">
          <X className="w-4 h-4" />
        </Button>
      </div>

      {/* Chapter Title */}
      <div className="px-4 py-2 bg-gray-100 border-b border-gray-200">
        <p className="text-xs text-gray-500 truncate">{chapterTitle}</p>
      </div>

      {/* Notes List */}
      <ScrollArea className="flex-1">
        <div className="p-4 space-y-3">
          {isLoading ? (
            <p className="text-sm text-gray-500 text-center py-4">Loading notes...</p>
          ) : notes.length === 0 ? (
            <div className="text-center py-8">
              <StickyNote className="w-12 h-12 text-gray-300 mx-auto mb-2" />
              <p className="text-sm text-gray-500">No notes yet</p>
              <p className="text-xs text-gray-400 mt-1">Click the + icon next to paragraphs to add notes</p>
            </div>
          ) : (
            notes.map((note) => (
              <div
                key={note.id}
                className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 space-y-2"
              >
                {editingId === note.id ? (
                  <div className="space-y-2">
                    <Textarea
                      value={editContent}
                      onChange={(e) => setEditContent(e.target.value)}
                      className="min-h-[80px] text-sm resize-none bg-white"
                      autoFocus
                    />
                    <div className="flex justify-end gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setEditingId(null)}
                      >
                        Cancel
                      </Button>
                      <Button
                        size="sm"
                        onClick={handleSaveEdit}
                        disabled={!editContent.trim()}
                        className="bg-[#25DCE6] hover:bg-[#25DCE6]/80 text-[#222A31]"
                      >
                        Save
                      </Button>
                    </div>
                  </div>
                ) : (
                  <>
                    <p className="text-sm text-gray-700 whitespace-pre-wrap">{note.content}</p>
                    <div className="flex items-center justify-between pt-1 border-t border-yellow-200">
                      <div className="flex items-center gap-1 text-xs text-gray-500">
                        {note.page_number && (
                          <span className="bg-yellow-200 px-1.5 py-0.5 rounded">
                            p. {note.page_number}
                          </span>
                        )}
                        <span>{format(new Date(note.created_date), 'MMM d, yyyy')}</span>
                      </div>
                      <div className="flex gap-1">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleEdit(note)}
                          className="h-6 w-6 p-0 text-gray-500 hover:text-gray-700"
                        >
                          <Edit2 className="w-3 h-3" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleDelete(note.id)}
                          className="h-6 w-6 p-0 text-gray-500 hover:text-red-500"
                        >
                          <Trash2 className="w-3 h-3" />
                        </Button>
                      </div>
                    </div>
                  </>
                )}
              </div>
            ))
          )}
        </div>
      </ScrollArea>
    </div>
  );
}