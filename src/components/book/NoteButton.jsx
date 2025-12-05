import React, { useState } from "react";
import { StickyNote, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Textarea } from "@/components/ui/textarea";
import { base44 } from "@/api/base44Client";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export default function NoteButton({ chapterId, pageNumber, paragraphIndex, existingNote, onNoteChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const [content, setContent] = useState(existingNote?.content || "");
  const queryClient = useQueryClient();

  const createNoteMutation = useMutation({
    mutationFn: (noteData) => base44.entities.Note.create(noteData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['notes', chapterId] });
      setIsOpen(false);
      if (onNoteChange) onNoteChange();
    },
  });

  const updateNoteMutation = useMutation({
    mutationFn: ({ id, data }) => base44.entities.Note.update(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['notes', chapterId] });
      setIsOpen(false);
      if (onNoteChange) onNoteChange();
    },
  });

  const deleteNoteMutation = useMutation({
    mutationFn: (id) => base44.entities.Note.delete(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['notes', chapterId] });
      setContent("");
      setIsOpen(false);
      if (onNoteChange) onNoteChange();
    },
  });

  const handleSave = () => {
    if (!content.trim()) return;
    
    if (existingNote) {
      updateNoteMutation.mutate({ id: existingNote.id, data: { content } });
    } else {
      createNoteMutation.mutate({
        chapter_id: chapterId,
        page_number: pageNumber,
        paragraph_index: paragraphIndex,
        content,
      });
    }
  };

  const handleDelete = () => {
    if (existingNote) {
      deleteNoteMutation.mutate(existingNote.id);
    }
  };

  const hasNote = !!existingNote;

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className={`p-1 h-6 w-6 ${hasNote ? 'text-yellow-500 hover:text-yellow-600' : 'text-gray-400 hover:text-gray-600 opacity-0 group-hover:opacity-100'} transition-opacity`}
        >
          {hasNote ? <StickyNote className="w-4 h-4 fill-yellow-200" /> : <Plus className="w-3 h-3" />}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-72 p-3" align="start">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-gray-700">
              {hasNote ? "Edit Note" : "Add Note"}
            </span>
            {pageNumber && (
              <span className="text-xs text-gray-500">Page {pageNumber}</span>
            )}
          </div>
          <Textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Write your note..."
            className="min-h-[100px] text-sm resize-none"
            autoFocus
          />
          <div className="flex justify-between gap-2">
            {hasNote && (
              <Button
                variant="destructive"
                size="sm"
                onClick={handleDelete}
                disabled={deleteNoteMutation.isPending}
              >
                Delete
              </Button>
            )}
            <div className="flex gap-2 ml-auto">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setIsOpen(false)}
              >
                Cancel
              </Button>
              <Button
                size="sm"
                onClick={handleSave}
                disabled={!content.trim() || createNoteMutation.isPending || updateNoteMutation.isPending}
                className="bg-[#25DCE6] hover:bg-[#25DCE6]/80 text-[#222A31]"
              >
                Save
              </Button>
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}