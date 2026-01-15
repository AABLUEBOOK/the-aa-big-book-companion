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

  return (
    <div 
      className="fixed bg-[#2A3440] border-2 border-pink-500 rounded-lg shadow-2xl p-3 z-50 flex items-center gap-3"
      style={{ 
        left: `${position?.x}px`, 
        top: `${position?.y}px`,
        transform: 'translate(-50%, -120%)'
      }}
    >
      <button
        onClick={onHighlight}
        className="px-4 py-2 bg-pink-600 text-white font-bold rounded hover:bg-pink-700 transition-all text-sm"
        title="Make Bold Pink"
      >
        <span className="font-bold">Bold Pink</span>
      </button>
      
      <div className="h-6 w-px bg-pink-500/30 mx-1" />
      
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