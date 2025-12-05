import React from "react";
import { CheckCircle2, Circle, BookOpen } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { base44 } from "@/api/base44Client";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

export default function ProgressTracker({ chapters, compact = false }) {
  const queryClient = useQueryClient();

  const { data: progressData = [] } = useQuery({
    queryKey: ['reading-progress'],
    queryFn: () => base44.entities.ReadingProgress.list(),
  });

  const toggleProgressMutation = useMutation({
    mutationFn: async ({ chapterId, completed }) => {
      const existing = progressData.find(p => p.chapter_id === chapterId);
      if (existing) {
        return base44.entities.ReadingProgress.update(existing.id, { 
          completed, 
          last_read_date: new Date().toISOString() 
        });
      } else {
        return base44.entities.ReadingProgress.create({ 
          chapter_id: chapterId, 
          completed,
          last_read_date: new Date().toISOString()
        });
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['reading-progress'] });
    },
  });

  const progressMap = progressData.reduce((acc, p) => {
    acc[p.chapter_id] = p.completed;
    return acc;
  }, {});

  const completedCount = Object.values(progressMap).filter(Boolean).length;
  const totalChapters = chapters?.length || 0;
  const percentage = totalChapters > 0 ? (completedCount / totalChapters) * 100 : 0;

  if (compact) {
    return (
      <div className="flex items-center gap-3 bg-white rounded-lg p-3 border border-gray-200">
        <BookOpen className="w-5 h-5 text-[#25DCE6]" />
        <div className="flex-1">
          <div className="flex items-center justify-between mb-1">
            <span className="text-sm font-medium text-gray-700">Reading Progress</span>
            <span className="text-xs text-gray-500">{completedCount}/{totalChapters}</span>
          </div>
          <Progress value={percentage} className="h-2" />
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900">Reading Progress</h3>
        <span className="text-sm text-gray-600">{completedCount} of {totalChapters} chapters</span>
      </div>
      
      <Progress value={percentage} className="h-3 mb-6" />

      <div className="space-y-2 max-h-96 overflow-y-auto">
        {chapters?.map((chapter) => {
          const isCompleted = progressMap[chapter.id] || false;
          return (
            <button
              key={chapter.id}
              onClick={() => toggleProgressMutation.mutate({ chapterId: chapter.id, completed: !isCompleted })}
              className="w-full flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors text-left"
            >
              {isCompleted ? (
                <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
              ) : (
                <Circle className="w-5 h-5 text-gray-300 flex-shrink-0" />
              )}
              <div className="flex-1 min-w-0">
                <p className={`text-sm font-medium ${isCompleted ? 'text-gray-500 line-through' : 'text-gray-900'}`}>
                  {chapter.title}
                </p>
                {chapter.chapter && (
                  <p className="text-xs text-gray-500">Chapter {chapter.chapter}</p>
                )}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}