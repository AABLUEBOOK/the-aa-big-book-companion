import React, { useRef } from "react";
import { Share2, Download, Copy } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import html2canvas from "html2canvas";
import { toast } from "sonner";

export default function ShareQuote({ text, chapterTitle, pageNum }) {
  const quoteRef = useRef(null);

  const handleDownload = async () => {
    if (!quoteRef.current) return;
    
    try {
      const canvas = await html2canvas(quoteRef.current, {
        backgroundColor: '#222A31',
        scale: 2,
      });
      
      const link = document.createElement('a');
      link.download = 'big-book-quote.png';
      link.href = canvas.toDataURL();
      link.click();
      
      toast.success('Quote image downloaded');
    } catch (error) {
      toast.error('Failed to download image');
    }
  };

  const handleCopyText = () => {
    navigator.clipboard.writeText(`"${text}"\n\n— ${chapterTitle}, Page ${pageNum}`);
    toast.success('Quote copied to clipboard');
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm" className="gap-2">
          <Share2 className="w-4 h-4" />
          Share
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-lg">
        <DialogHeader>
          <DialogTitle>Share Quote</DialogTitle>
        </DialogHeader>
        
        <div 
          ref={quoteRef}
          className="bg-[#222A31] text-white p-8 rounded-xl space-y-4"
        >
          <div className="text-6xl text-[#25DCE6] opacity-50">"</div>
          <p className="text-lg leading-relaxed italic">{text}</p>
          <div className="text-sm text-gray-400 text-right">
            — {chapterTitle}, Page {pageNum}
          </div>
        </div>

        <div className="flex gap-2">
          <Button onClick={handleCopyText} variant="outline" className="flex-1 gap-2">
            <Copy className="w-4 h-4" />
            Copy Text
          </Button>
          <Button onClick={handleDownload} className="flex-1 gap-2 bg-[#25DCE6] hover:bg-[#25DCE6]/80 text-[#222A31]">
            <Download className="w-4 h-4" />
            Download Image
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}