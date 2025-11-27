import React, { useState, useEffect, useRef, useCallback, memo } from "react";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const AudioPlayer = memo(function AudioPlayer({ content }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [speed, setSpeed] = useState(1);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [voices, setVoices] = useState([]);
  const [selectedVoice, setSelectedVoice] = useState("");
  const utteranceRef = useRef(null);
  const synthRef = useRef(null);

  useEffect(() => {
    synthRef.current = window.speechSynthesis;
    
    const loadVoices = () => {
      const availableVoices = synthRef.current.getVoices();
      setVoices(availableVoices);
      if (availableVoices.length > 0 && !selectedVoice) {
        const defaultVoice = availableVoices.find(v => v.default) || availableVoices[0];
        setSelectedVoice(defaultVoice.name);
      }
    };

    loadVoices();
    synthRef.current.onvoiceschanged = loadVoices;
    
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
    
    const voice = voices.find(v => v.name === selectedVoice);
    if (voice) {
      utteranceRef.current.voice = voice;
    }
    
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
    <div className="sticky top-14 sm:top-16 z-30 bg-gray-100 backdrop-blur-sm border border-gray-300 rounded-lg sm:rounded-xl shadow-md sm:shadow-lg p-3 sm:p-4 mb-4 sm:mb-6">
      <div className="flex items-center gap-2 sm:gap-4">
        <Button
          onClick={handlePlayPause}
          size="lg"
          className="bg-[#25DCE6] hover:bg-[#25DCE6]/80 active:bg-[#25DCE6]/70 text-[#222A31] rounded-full w-11 h-11 sm:w-12 sm:h-12 p-0 flex-shrink-0"
          aria-label={isPlaying ? "Pause" : "Play"}
        >
          {isPlaying ? <Pause className="w-4 h-4 sm:w-5 sm:h-5" /> : <Play className="w-4 h-4 sm:w-5 sm:h-5 ml-0.5" />}
        </Button>

        <div className="flex-1">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-gray-600">
              Paragraph {currentIndex + 1} of {texts.length}
            </span>
            <span className="text-xs text-gray-600">
              Speed: {speed}x
            </span>
          </div>
          
          <div className="w-full bg-gray-300 rounded-full h-2 overflow-hidden">
            <div 
              className="bg-[#25DCE6] h-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <Button
            onClick={handleMuteToggle}
            variant="ghost"
            size="sm"
            className="text-[#25DCE6] hover:bg-[#25DCE6]/10 active:bg-[#25DCE6]/20 rounded-full w-10 h-10 sm:w-9 sm:h-9 p-0 flex-shrink-0"
            aria-label={isMuted ? "Unmute" : "Mute"}
          >
            {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
          </Button>

          <div className="hidden sm:flex items-center gap-2 min-w-[100px]">
            <span className="text-[10px] sm:text-xs text-gray-600 whitespace-nowrap">0.5x</span>
            <Slider
              value={[speed]}
              onValueChange={handleSpeedChange}
              min={0.5}
              max={2}
              step={0.25}
              className="w-16 sm:w-20"
            />
            <span className="text-[10px] sm:text-xs text-gray-600 whitespace-nowrap">2x</span>
          </div>
        </div>
      </div>
      
      {/* Voice Selector */}
      <div className="mt-2 sm:mt-3 pt-2 sm:pt-3 border-t border-gray-300">
        <div className="flex items-center gap-2 sm:gap-3">
          <span className="text-[10px] sm:text-xs text-gray-600 whitespace-nowrap">Voice:</span>
          <Select value={selectedVoice} onValueChange={setSelectedVoice}>
            <SelectTrigger className="flex-1 h-9 sm:h-8 text-xs bg-white border-gray-300 text-gray-800 min-h-[36px]">
              <SelectValue placeholder="Select a voice" />
            </SelectTrigger>
            <SelectContent className="max-h-60 bg-white border-gray-300">
              {voices.map((voice) => (
                <SelectItem 
                  key={voice.name} 
                  value={voice.name}
                  className="text-xs text-gray-800 focus:bg-gray-100 min-h-[40px]"
                >
                  {voice.name} ({voice.lang})
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
});

export default AudioPlayer;