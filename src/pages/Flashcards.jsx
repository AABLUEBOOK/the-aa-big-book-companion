import React, { useState } from "react";
import { Brain, ArrowLeft, RotateCcw, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { base44 } from "@/api/base44Client";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";

export default function Flashcards() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const queryClient = useQueryClient();

  const { data: flashcards = [] } = useQuery({
    queryKey: ['flashcards'],
    queryFn: () => base44.entities.Flashcard.list(),
  });

  const updateMastery = useMutation({
    mutationFn: ({ id, mastered }) => base44.entities.Flashcard.update(id, { mastered }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['flashcards'] });
    },
  });

  const currentCard = flashcards[currentIndex];
  const masteredCount = flashcards.filter(c => c.mastered).length;

  const handleNext = (mastered = false) => {
    if (currentCard && mastered !== currentCard.mastered) {
      updateMastery.mutate({ id: currentCard.id, mastered });
    }
    setShowAnswer(false);
    if (currentIndex < flashcards.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  const handleReset = () => {
    setCurrentIndex(0);
    setShowAnswer(false);
  };

  return (
    <div className="min-h-screen bg-[#222A31] p-4 sm:p-6 lg:p-8">
      <div className="max-w-2xl mx-auto">
        <Link to={createPageUrl('Home')}>
          <Button variant="ghost" className="text-white mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </Link>

        <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <Brain className="w-8 h-8 text-[#25DCE6]" />
              <h1 className="text-3xl font-bold text-gray-900">Flashcards</h1>
            </div>
            <Button variant="outline" size="sm" onClick={handleReset}>
              <RotateCcw className="w-4 h-4" />
            </Button>
          </div>

          {flashcards.length === 0 ? (
            <div className="text-center py-12">
              <Brain className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-600 mb-4">No flashcards yet</p>
              <p className="text-sm text-gray-500">Flashcards will appear here as you study</p>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="flex items-center justify-between text-sm text-gray-600">
                <span>Card {currentIndex + 1} of {flashcards.length}</span>
                <span className="text-green-600">{masteredCount} mastered</span>
              </div>

              <Card 
                className="min-h-[300px] flex items-center justify-center cursor-pointer hover:shadow-lg transition-shadow"
                onClick={() => setShowAnswer(!showAnswer)}
              >
                <CardContent className="text-center p-8">
                  {!showAnswer ? (
                    <div>
                      <p className="text-xs text-gray-500 mb-4">Question</p>
                      <p className="text-xl font-medium text-gray-900">{currentCard?.question}</p>
                      <p className="text-sm text-gray-500 mt-6">Click to reveal answer</p>
                    </div>
                  ) : (
                    <div>
                      <p className="text-xs text-gray-500 mb-4">Answer</p>
                      <p className="text-lg text-gray-800">{currentCard?.answer}</p>
                    </div>
                  )}
                </CardContent>
              </Card>

              {showAnswer && (
                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    onClick={() => handleNext(false)}
                    className="flex-1"
                  >
                    Need Practice
                  </Button>
                  <Button
                    onClick={() => handleNext(true)}
                    className="flex-1 bg-green-600 hover:bg-green-700"
                  >
                    Mastered
                  </Button>
                </div>
              )}

              {!showAnswer && (
                <Button
                  variant="outline"
                  onClick={() => setShowAnswer(true)}
                  className="w-full"
                >
                  Show Answer
                </Button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}