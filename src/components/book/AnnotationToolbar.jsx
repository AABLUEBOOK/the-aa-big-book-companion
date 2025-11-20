import React from "react";
import { Button } from "@/components/ui/button";
import { Highlighter, Underline, X, Lock, Unlock } from "lucide-react";
import { cn } from "@/lib/utils";

export default function AnnotationToolbar({ 
  selectedText, 
  onHighlight, 
  onUnderline, 
  onClear,
  position 
}) {
  if (!selectedText) return null;

  const colors = [
    { name: 'yellow', class: 'bg-yellow-400' },
    { name: 'pink', class: 'bg-pink-400' },
    { name: 'blue', class: 'bg-blue-400' },
    { name: 'green', class: 'bg-green-400' }
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
              "w-8 h-8 rounded border-2 border-transparent hover:border-[#25DCE6] transition-all",
              color.class
            )}
            title={`Highlight ${color.name}`}
          />
        ))}
      </div>
      
      <div className="h-6 w-px bg-[#25DCE6]/30 mx-1" />
      
      <Button
        size="sm"
        variant="ghost"
        onClick={onUnderline}
        className="text-[#25DCE6] hover:bg-[#25DCE6]/10"
      >
        <Underline className="w-4 h-4" />
      </Button>
      
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