import React, { useState } from "react";
import { base44 } from "@/api/base44Client";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Plus, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function PageTabs({ tabs = [], chapterId, isLocked }) {
  const [isAdding, setIsAdding] = useState(false);
  const [tabLabel, setTabLabel] = useState('');
  const [selectedColor, setSelectedColor] = useState('yellow');
  const queryClient = useQueryClient();

  const createTabMutation = useMutation({
    mutationFn: (data) => base44.entities.BookTab.create(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['bookTabs'] });
      setTabLabel('');
      setSelectedColor('yellow');
      setIsAdding(false);
    }
  });

  const deleteTabMutation = useMutation({
    mutationFn: (id) => base44.entities.BookTab.delete(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['bookTabs'] });
    }
  });

  const tabColors = {
    yellow: 'bg-yellow-400',
    pink: 'bg-pink-400',
    blue: 'bg-blue-400',
    green: 'bg-green-400',
    red: 'bg-red-500',
    purple: 'bg-purple-500',
    orange: 'bg-orange-500'
  };

  const handleAddTab = () => {
    if (!tabLabel.trim() || tabs.length >= 6) return;
    
    createTabMutation.mutate({
      chapter_id: chapterId,
      label: tabLabel.trim(),
      color: selectedColor,
      position: tabs.length * 15
    });
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleAddTab();
    }
  };

  return (
    <div className="absolute -right-4 sm:-right-8 top-0 bottom-0 w-16 sm:w-20 pointer-events-none">
      <div className="sticky top-32 space-y-2 pointer-events-auto">
        {tabs.map((tab) => (
          <div key={tab.id} className="relative group">
            <div
              className={cn(
                "w-12 sm:w-16 h-16 sm:h-20 rounded-r-lg shadow-lg transition-all",
                tabColors[tab.color] || tabColors.yellow,
                "flex items-center justify-center p-2"
              )}
              style={{ 
                clipPath: 'polygon(20% 0%, 100% 0%, 100% 100%, 20% 100%, 0% 50%)'
              }}
            >
              <div className="text-[9px] sm:text-[10px] leading-tight font-bold text-white text-center break-words whitespace-pre-line">
                {tab.label}
              </div>
            </div>
            {!isLocked && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  deleteTabMutation.mutate(tab.id);
                }}
                className="absolute -top-1 -left-1 bg-red-500 rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <X className="w-3 h-3 text-white" />
              </button>
            )}
          </div>
        ))}

        {!isLocked && tabs.length < 6 && (
          <>
            {isAdding ? (
              <div className="absolute right-full mr-2 top-0 bg-[#2A3440] border-2 border-[#25DCE6] rounded-lg p-3 shadow-2xl w-64 z-50">
                <textarea
                  autoFocus
                  placeholder="Tab text (2 lines)"
                  value={tabLabel}
                  onChange={(e) => setTabLabel(e.target.value)}
                  onKeyDown={handleKeyPress}
                  rows={2}
                  maxLength={30}
                  className="w-full mb-2 bg-[#222A31] border border-[#25DCE6]/30 text-[#FFFFFD] placeholder:text-[#FFFFFD]/40 rounded px-2 py-1.5 text-xs resize-none focus:outline-none focus:ring-2 focus:ring-[#25DCE6]"
                />
                <div className="flex gap-1.5 mb-2 flex-wrap">
                  {Object.keys(tabColors).map(color => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={cn(
                        "w-6 h-6 rounded border-2",
                        tabColors[color],
                        selectedColor === color ? 'border-[#FFFFFD]' : 'border-transparent'
                      )}
                    />
                  ))}
                </div>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    onClick={handleAddTab}
                    disabled={!tabLabel.trim()}
                    className="flex-1 bg-[#25DCE6] text-[#222A31] hover:bg-[#25DCE6]/90 h-8 text-xs"
                  >
                    Add
                  </Button>
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => {
                      setIsAdding(false);
                      setTabLabel('');
                    }}
                    className="text-[#FFFFFD]/60 h-8 text-xs"
                  >
                    Cancel
                  </Button>
                </div>
              </div>
            ) : (
              <button
                onClick={() => setIsAdding(true)}
                className="bg-[#25DCE6] text-[#222A31] w-12 sm:w-16 h-12 sm:h-14 rounded-r-lg shadow-lg flex items-center justify-center"
                style={{ 
                  clipPath: 'polygon(20% 0%, 100% 0%, 100% 100%, 20% 100%, 0% 50%)'
                }}
              >
                <Plus className="w-5 h-5" />
              </button>
            )}
          </>
        )}
      </div>
    </div>
  );
}