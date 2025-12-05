import React from "react";
import { Download, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { base44 } from "@/api/base44Client";
import { toast } from "sonner";
import { format } from "date-fns";

export default function ExportNotes() {
  const handleExportText = async () => {
    try {
      const notes = await base44.entities.Note.list('-created_date');
      const bookmarks = await base44.entities.Bookmark.list('-created_date');
      
      let content = `BIG BOOK NOTES & BOOKMARKS\nExported: ${format(new Date(), 'PPP')}\n\n`;
      
      if (notes.length > 0) {
        content += `=== NOTES (${notes.length}) ===\n\n`;
        notes.forEach((note, idx) => {
          content += `${idx + 1}. ${note.chapter_id}\n`;
          if (note.page_number) content += `   Page: ${note.page_number}\n`;
          content += `   ${note.content}\n`;
          content += `   Created: ${format(new Date(note.created_date), 'PPP')}\n\n`;
        });
      }
      
      if (bookmarks.length > 0) {
        content += `\n=== BOOKMARKS (${bookmarks.length}) ===\n\n`;
        bookmarks.forEach((bm, idx) => {
          content += `${idx + 1}. ${bm.chapter_title}\n`;
          if (bm.page_number) content += `   Page: ${bm.page_number}\n`;
          if (bm.note) content += `   Note: ${bm.note}\n`;
          content += `   Created: ${format(new Date(bm.created_date), 'PPP')}\n\n`;
        });
      }
      
      const blob = new Blob([content], { type: 'text/plain' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `big-book-notes-${format(new Date(), 'yyyy-MM-dd')}.txt`;
      link.click();
      URL.revokeObjectURL(url);
      
      toast.success('Notes exported successfully');
    } catch (error) {
      toast.error('Failed to export notes');
    }
  };

  return (
    <Button
      onClick={handleExportText}
      variant="outline"
      className="gap-2"
    >
      <Download className="w-4 h-4" />
      Export All Notes
    </Button>
  );
}