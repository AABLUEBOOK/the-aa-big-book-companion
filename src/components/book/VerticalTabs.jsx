import React, { useState } from "react";
import { base44 } from "@/api/base44Client";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Plus, X, GripVertical } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

export default function VerticalTabs({ tabs = [], isLocked, onTabClick }) {
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
      // Keep adding mode open if less than 6 tabs
      if (tabs.length >= 5) {
        setIsAdding(false);
      }
    }
  });

  const deleteTabMutation = useMutation({
    mutationFn: (id) => base44.entities.BookTab.delete(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['bookTabs'] });
    }
  });

  const tabColors = {
    red: 'bg-red-500',
    blue: 'bg-blue-500',
    yellow: 'bg-yellow-400',
    green: 'bg-green-500',
    purple: 'bg-purple-500',
    orange: 'bg-orange-500'
  };

  const handleAddTab = () => {
    if (!tabLabel.trim() || tabs.length >= 6) return;
    
    const position = tabs.length * 15; // Space them 15% apart
    createTabMutation.mutate({
      chapter_id: 'current', // We'll store which chapter later
      label: tabLabel.trim(),
      color: selectedColor,
      position: position
    });
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleAddTab();
    }
  };

  return (
    <div className="fixed right-0 top-1/4 z-30">
      {/* Tabs */}
      {tabs.slice(0, 6).map((tab, index) => (
        <button
          key={tab.id}
          onClick={() => onTabClick(tab.chapter_id)}
          className={cn(
            "right-0 w-16 h-24 rounded-l-lg shadow-lg transition-all hover:w-20 group",
            tabColors[tab.color] || tabColors.yellow
          )}
          style={{ position: 'absolute', top: `${index * 15}%` }}
        >
          <div className="flex flex-col items-center justify-center h-full relative">
            <span className="text-xs font-bold text-white transform -rotate-90 whitespace-nowrap">
              {tab.label}
            </span>
            {!isLocked && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  deleteTabMutation.mutate(tab.id);
                }}
                className="absolute top-1 right-1 opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <X className="w-3 h-3 text-white" />
              </button>
            )}
          </div>
        </button>
      ))}

      {/* Add Tab Button */}
      {!isLocked && tabs.length < 6 && (
        <div className="absolute right-0" style={{ top: `${tabs.length * 15 + 2}%` }}>
          {isAdding ? (
            <div className="bg-[#2A3440] border-2 border-[#25DCE6] rounded-l-lg p-4 shadow-2xl w-64">
              <Input
                autoFocus
                placeholder="Type tab text and press Enter"
                value={tabLabel}
                onChange={(e) => setTabLabel(e.target.value)}
                onKeyPress={handleKeyPress}
                className="mb-3 bg-[#222A31] border-[#25DCE6]/30 text-[#FFFFFD] placeholder:text-[#FFFFFD]/40"
              />
              <div className="flex gap-2 mb-3">
                {Object.keys(tabColors).map(color => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={cn(
                      "w-8 h-8 rounded border-2",
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
                  className="flex-1 bg-[#25DCE6] text-[#222A31] hover:bg-[#25DCE6]/90"
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
                  className="text-[#FFFFFD]/60"
                >
                  Cancel
                </Button>
              </div>
            </div>
          ) : (
            <button
              onClick={() => setIsAdding(true)}
              className="bg-[#25DCE6] text-[#222A31] w-12 h-12 rounded-l-lg shadow-lg hover:w-16 transition-all flex items-center justify-center"
            >
              <Plus className="w-5 h-5" />
            </button>
          )}
        </div>
      )}
    </div>
  );
}