import React, { useRef } from "react";
import { Button } from "@/components/ui/button";
import html2canvas from "html2canvas";
import { Download } from "lucide-react";

export default function ExportBlock() {
  const blockRef = useRef(null);

  const handleDownload = async () => {
    if (blockRef.current) {
      const canvas = await html2canvas(blockRef.current, {
        backgroundColor: null,
        scale: 3
      });
      
      const link = document.createElement('a');
      link.download = 'block-ui-design.png';
      link.href = canvas.toDataURL();
      link.click();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1a1f26] via-[#222A31] to-[#2a3440] flex items-center justify-center p-8">
      <div className="text-center space-y-8">
        <div
          ref={blockRef}
          className="relative overflow-hidden rounded-3xl 
                     bg-white/5 backdrop-blur-xl border border-white/10
                     w-[400px] h-[200px]
                     shadow-2xl shadow-black/20"
          style={{
            backgroundImage: `repeating-linear-gradient(45deg, 
              transparent, 
              transparent 10px, 
              rgba(94, 170, 255, 0.03) 10px, 
              rgba(94, 170, 255, 0.03) 20px)`
          }}
        >
          {/* Number badge */}
          <div className="absolute top-5 left-5">
            <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-xl
                            flex items-center justify-center border border-white/20
                            shadow-xl shadow-[#5EAAFF]/30" />
          </div>

          {/* Arrow indicator */}
          <div className="absolute top-5 right-5 
                          bg-white/5 backdrop-blur-xl border border-white/10 rounded-full p-2
                          shadow-lg shadow-black/20">
            <svg className="w-6 h-6 text-[#5EAAFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>

        <Button 
          onClick={handleDownload}
          className="bg-[#5EAAFF]/90 backdrop-blur-xl text-white border border-white/20 
                     rounded-2xl shadow-xl shadow-[#5EAAFF]/40 hover:bg-[#5EAAFF] 
                     hover:shadow-2xl hover:shadow-[#5EAAFF]/60 transition-all duration-500"
        >
          <Download className="w-4 h-4 mr-2" />
          Download as PNG
        </Button>
      </div>
    </div>
  );
}