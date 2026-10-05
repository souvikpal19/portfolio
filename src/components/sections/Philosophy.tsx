"use client";

import { Sparkles, Star } from "lucide-react";

export default function Philosophy() {
  return (
    <section id="philosophy" className="relative py-24 sm:py-36 bg-[#FFD93D] border-b-4 border-black overflow-hidden select-none">
      
      {/* Decorative Rotating Badges */}
      <div className="absolute top-8 left-8 p-3 border-4 border-black bg-white shadow-[6px_6px_0px_0px_#000] rotate-6 hidden sm:flex items-center gap-2 font-black text-xs uppercase">
        <Sparkles className="w-4 h-4 stroke-[3px]" />
        <span>CORE ETHOS</span>
      </div>

      <div className="absolute bottom-8 right-8 p-3 border-4 border-black bg-[#FF6B6B] text-white shadow-[6px_6px_0px_0px_#000] -rotate-6 hidden sm:flex items-center gap-2 font-black text-xs uppercase">
        <Star className="w-4 h-4 fill-white" />
        <span>PERSISTENCE WINS</span>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
        
        <p className="font-black text-xs sm:text-sm uppercase tracking-[0.3em] text-black mb-6">
          // PERSONAL CREED //
        </p>

        {/* Massive Statement */}
        <div className="space-y-4">
          <div className="inline-block p-4 sm:p-8 border-4 border-black bg-white shadow-[12px_12px_0px_0px_#000] -rotate-1">
            <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter text-black leading-none">
              &ldquo;I CAN AND I HAVE TO DO IT.&rdquo;
            </h2>
          </div>

          <div className="pt-6 max-w-2xl mx-auto">
            <p className="font-black text-base sm:text-xl text-black leading-relaxed bg-[#FFFDF5] p-4 border-4 border-black shadow-[6px_6px_0px_0px_#000] rotate-1">
              Taking unconditional responsibility for the things I set out to achieve. There are always difficult problems; the only answer is to learn, iterate, and deliver.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
