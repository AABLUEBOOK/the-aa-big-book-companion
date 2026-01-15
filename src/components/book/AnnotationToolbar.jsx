import React from "react";
import { Button } from "@/components/ui/button";
import { Highlighter, Underline, X, Lock, Unlock } from "lucide-react";
import { cn } from "@/lib/utils";

export default function AnnotationToolbar({ 
  selectedText, 
  onHighlight, 
  onClear,
  position 
}) {
  if (!selectedText) return null;

  const colors = [
    { name: 'pink', label: 'Pink', bg: 'bg-pink-600', hover: 'hover:bg-pink-700' },
    { name: 'blue', label: 'Blue', bg: 'bg-blue-600', hover: 'hover:bg-blue-700' },
    { name: 'green', label: 'Green', bg: 'bg-green-600', hover: 'hover:bg-green-700' },
    { name: 'orange', label: 'Orange', bg: 'bg-orange-600', hover: 'hover:bg-orange-700' }
  ];

  return (
    <div 
      className="fixed bg-[#2A3440] border-2 border-[#25DCE6] rounded-lg shadow-2xl p-3 z-50 flex items-center gap-2"
      style={{ 
        left: `${position?.x}px`, 
        top: `${position?.y}px`,
        transform: 'translate(-50%, -120%)'
      }}
    >
      <div className="flex gap-1">
        {colors.map(color => (
          <button
            key={color.name}
            onClick={() => onHighlight(color.name)}
            className={cn(
              "px-3 py-1.5 text-white font-bold rounded transition-all text-xs",
              color.bg,
              color.hover
            )}
            title={`Make Bold ${color.label}`}
          >
            {color.label}
          </button>
        ))}
      </div>
      
      <div className="h-6 w-px bg-[#25DCE6]/30 mx-1" />
      
      <Button
        size="sm"
        variant="ghost"
        onClick={onClear}
        className="text-[#FFFFFD]/60 hover:bg-red-500/20"
      >
        <X className="w-4 h-4" />
      </Button>
    </div>
  );
}