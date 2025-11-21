import React, { useState, useEffect, useRef } from "react";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";

export default function AudioPlayer({ content }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [speed, setSpeed] = useState(1);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const utteranceRef = useRef(null);
  const synthRef = useRef(null);

  useEffect(() => {
    synthRef.current = window.speechSynthesis;
    
    return () => {
      if (synthRef.current) {
        synthRef.current.cancel();
      }
    };
  }, []);

  const extractText = () => {
    if (!content?.paragraphs) return [];
    return content.paragraphs.map(p => p.text);
  };

  const speak = (text, index) => {
    if (!synthRef.current || !text) return;

    synthRef.current.cancel();
    
    utteranceRef.current = new SpeechSynthesisUtterance(text);
    utteranceRef.current.rate = speed;
    utteranceRef.current.volume = isMuted ? 0 : 1;
    
    utteranceRef.current.onend = () => {
      const texts = extractText();
      if (index < texts.length - 1) {
        setCurrentIndex(index + 1);
        speak(texts[index + 1], index + 1);
      } else {
        setIsPlaying(false);
        setCurrentIndex(0);
      }
    };

    utteranceRef.current.onerror = () => {
      setIsPlaying(false);
    };

    synthRef.current.speak(utteranceRef.current);
  };

  const handlePlayPause = () => {
    if (!synthRef.current) return;

    if (isPlaying) {
      synthRef.current.cancel();
      setIsPlaying(false);
    } else {
      const texts = extractText();
      if (texts.length > 0) {
        setIsPlaying(true);
        speak(texts[currentIndex], currentIndex);
      }
    }
  };

  const handleSpeedChange = (value) => {
    const newSpeed = value[0];
    setSpeed(newSpeed);
    
    if (isPlaying && utteranceRef.current) {
      const texts = extractText();
      synthRef.current.cancel();
      speak(texts[currentIndex], currentIndex);
    }
  };

  const handleMuteToggle = () => {
    setIsMuted(!isMuted);
    if (utteranceRef.current) {
      utteranceRef.current.volume = isMuted ? 1 : 0;
    }
  };

  const texts = extractText();
  const progress = texts.length > 0 ? ((currentIndex + 1) / texts.length) * 100 : 0;

  return (
    <div className="sticky top-20 z-40 bg-[#2A3440]/95 backdrop-blur-sm border border-[#25DCE6]/30 rounded-xl shadow-2xl p-4 mb-6">
      <div className="flex items-center gap-4">
        <Button
          onClick={handlePlayPause}
          size="lg"
          className="bg-[#25DCE6] hover:bg-[#25DCE6]/80 text-[#222A31] rounded-full w-12 h-12 p-0"
        >
          {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 ml-0.5" />}
        </Button>

        <div className="flex-1">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-[#FFFFFD]/60">
              Paragraph {currentIndex + 1} of {texts.length}
            </span>
            <span className="text-xs text-[#FFFFFD]/60">
              Speed: {speed}x
            </span>
          </div>
          
          <div className="w-full bg-[#222A31] rounded-full h-2 overflow-hidden">
            <div 
              className="bg-[#25DCE6] h-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Button
            onClick={handleMuteToggle}
            variant="ghost"
            size="sm"
            className="text-[#25DCE6] hover:bg-[#25DCE6]/10 rounded-full w-9 h-9 p-0"
          >
            {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
          </Button>

          <div className="flex items-center gap-2 min-w-[120px]">
            <span className="text-xs text-[#FFFFFD]/60 whitespace-nowrap">0.5x</span>
            <Slider
              value={[speed]}
              onValueChange={handleSpeedChange}
              min={0.5}
              max={2}
              step={0.25}
              className="w-20"
            />
            <span className="text-xs text-[#FFFFFD]/60 whitespace-nowrap">2x</span>
          </div>
        </div>
      </div>
    </div>
  );
}