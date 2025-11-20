import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

function createPageUrl(pageName) {
  return `/${pageName}`;
}

export default function Section5() {
  return (
    <div className="min-h-screen bg-[#222A31] p-6">
      <div className="max-w-4xl mx-auto">
        <Link to={createPageUrl("Home")} className="inline-flex items-center gap-2 text-[#25DCE6] hover:text-[#FFFFFD] transition-colors mb-8">
          <ArrowLeft className="w-5 h-5" />
          <span className="font-medium">Back to Table of Contents</span>
        </Link>
        
        <div className="bg-[#2A3440] rounded-2xl shadow-2xl border border-[#25DCE6]/20 p-8 sm:p-12">
          <h1 className="text-4xl font-serif font-bold text-[#FFFFFD] mb-6">
            Section 5: To Employers & A Vision
          </h1>
          <p className="text-[#FFFFFD]/70 text-lg mb-8">
            Pages 165-180
          </p>
          <div className="text-[#FFFFFD]/80 leading-relaxed space-y-4">
            <p>Addressing workplace issues and concluding with A Vision For You.</p>
            <p className="text-[#25DCE6] font-semibold mt-8">Content will be populated soon.</p>
          </div>
        </div>
      </div>
    </div>
  );
}