import React, { useState } from "react";
import { Highlighter } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { base44 } from "@/api/base44Client";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export default function HighlightTool({ chapterId, paragraphIndex, selectedText, onHighlight }) {
  const [color, setColor] = useState('yellow');
  const queryClient = useQueryClient();

  const colors = [
    { name: 'yellow', class: 'bg-yellow-300' },
    { name: 'blue', class: 'bg-blue-300' },
    { name: 'green', class: 'bg-green-300' },
    { name: 'pink', class: 'bg-pink-300' },
    { name: 'purple', class: 'bg-purple-300' },
  ];

  const createHighlightMutation = useMutation({
    mutationFn: (data) => base44.entities.UserHighlight.create(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['user-highlights', chapterId] });
      if (onHighlight) onHighlight();
    },
  });

  const handleHighlight = () => {
    if (!selectedText || !selectedText.trim()) return;

    createHighlightMutation.mutate({
      chapter_id: chapterId,
      text: selectedText,
      color,
      paragraph_index: paragraphIndex,
    });
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className="h-8 gap-1.5 text-xs"
        >
          <Highlighter className="w-3.5 h-3.5" />
          Highlight
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-48 p-3" align="start">
        <div className="space-y-3">
          <p className="text-xs font-medium text-gray-700">Select Color</p>
          <div className="flex gap-2">
            {colors.map((c) => (
              <button
                key={c.name}
                onClick={() => setColor(c.name)}
                className={`w-8 h-8 rounded-full ${c.class} ${
                  color === c.name ? 'ring-2 ring-gray-800 ring-offset-2' : ''
                } hover:scale-110 transition-transform`}
              />
            ))}
          </div>
          <Button
            onClick={handleHighlight}
            size="sm"
            className="w-full bg-[#25DCE6] hover:bg-[#25DCE6]/80 text-[#222A31]"
            disabled={!selectedText}
          >
            Add Highlight
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
}