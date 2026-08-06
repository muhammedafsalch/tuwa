"use client";

import { useState, useEffect } from "react";
import Reveal from "@/components/animations/Reveal";
import { X } from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";

const posters = Array.from({ length: 11 }, (_, i) => `/posters/${i + 1}.jpeg`);

export default function Posters() {
  const [selectedPoster, setSelectedPoster] = useState(null);

  useEffect(() => {
    if (selectedPoster) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedPoster]);

  return (
    <section className="relative z-10 py-16">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Reveal>
            <h4 className="text-primary-400 font-semibold tracking-wider text-sm uppercase mb-2">
              Our Showcase
            </h4>
            <h2 className="text-3xl lg:text-5xl font-black text-white mb-6 uppercase tracking-tight">
              Expert <span className="text-gradient-premium">Advocacy</span> & Support
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
              Visualizing our core services through our professional corporate portfolio, specializing in Company formation and Translation services in Qatar.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {posters.map((poster, idx) => (
            <Reveal key={idx} delay={idx * 0.05}>
              <div 
                className="relative aspect-[3/4] rounded-2xl overflow-hidden cursor-pointer group shadow-[0_0_15px_rgba(0,0,0,0.5)] border border-white/10 hover:border-primary-500/50 transition-colors"
                onClick={() => setSelectedPoster(poster)}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src={poster} 
                  alt={`Tuwa Business Solution Poster ${idx + 1}`} 
                  className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700 group-hover:scale-105"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedPoster && (
        <div 
          className="fixed inset-0 z-[999] flex items-center justify-center p-4 sm:p-8 bg-black/10 backdrop-blur-2xl transition-opacity duration-300"
          onClick={() => setSelectedPoster(null)}
        >
          <div 
            className="relative animate-in fade-in zoom-in-95 duration-300 max-w-[90vw] max-h-[90vh] flex justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              className="absolute -top-4 -right-4 sm:-top-5 sm:-right-5 w-10 h-10 sm:w-12 sm:h-12 bg-red-600 hover:bg-red-700 text-white rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(220,38,38,0.5)] transition-colors z-50 cursor-pointer"
              onClick={() => setSelectedPoster(null)}
            >
              <X size={24} />
            </button>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src={selectedPoster} 
              alt="Expanded Poster" 
              className="max-w-full max-h-[85vh] object-contain rounded-2xl shadow-[0_0_50px_rgba(0,0,0,0.8)] border border-white/20"
            />
          </div>
        </div>
      )}
    </section>
  );
}
