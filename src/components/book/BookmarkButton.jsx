import React, { useState } from "react";
import { Bookmark, BookmarkCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { base44 } from "@/api/base44Client";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

export default function BookmarkButton({ chapter, sectionRoute }) {
  const queryClient = useQueryClient();
  const [isHovered, setIsHovered] = useState(false);

  const { data: bookmarks = [] } = useQuery({
    queryKey: ['bookmarks'],
    queryFn: () => base44.entities.Bookmark.list(),
  });

  const isBookmarked = bookmarks.some(b => b.chapter_id === chapter.id);

  const addBookmark = useMutation({
    mutationFn: (data) => base44.entities.Bookmark.create(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['bookmarks'] });
      toast.success("Bookmark added");
    },
  });

  const removeBookmark = useMutation({
    mutationFn: (id) => base44.entities.Bookmark.delete(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['bookmarks'] });
      toast.success("Bookmark removed");
    },
  });

  const handleToggle = () => {
    if (isBookmarked) {
      const bookmark = bookmarks.find(b => b.chapter_id === chapter.id);
      if (bookmark) {
        removeBookmark.mutate(bookmark.id);
      }
    } else {
      addBookmark.mutate({
        chapter_id: chapter.id,
        chapter_title: chapter.title,
        section_route: sectionRoute,
        page_number: chapter.pageNum
      });
    }
  };

  return (
    <Button
      onClick={handleToggle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      variant="ghost"
      size="sm"
      className="text-[#25DCE6] hover:bg-[#25DCE6]/10 rounded-lg"
    >
      {isBookmarked ? (
        <BookmarkCheck className="w-5 h-5" />
      ) : (
        <Bookmark className={`w-5 h-5 ${isHovered ? 'fill-current' : ''}`} />
      )}
    </Button>
  );
}