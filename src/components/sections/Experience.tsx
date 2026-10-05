"use client";

import { timeline } from "@/data/experience";
import { Milestone, CheckCircle2, BookOpen, Award, GraduationCap, Code } from "lucide-react";

const typeIcons: Record<string, typeof Award> = {
  certification: Award,
  research: BookOpen,
  education: GraduationCap,
  project: Code,
  work: Milestone,
};

const badgeColors: Record<string, string> = {
  certification: "bg-[#FFD93D]",
  research: "bg-[#C4B5FD]",
  education: "bg-[#FF6B6B] text-white",
  project: "bg-white",
  work: "bg-black text-white",
};

export default function Experience() {
  return (
    <section id="experience" className="relative py-20 sm:py-28 bg-[#FFFDF5] border-b-4 border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="inline-block px-4 py-1.5 border-4 border-black bg-[#FF6B6B] text-white font-black text-xs sm:text-sm uppercase tracking-widest shadow-[4px_4px_0px_0px_#000] mb-6 rotate-1">
          04 // ROADMAP &amp; MILESTONES
        </div>

        <h2 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight text-black mb-12">
          THE <span className="bg-[#FFD93D] px-3 border-4 border-black inline-block -rotate-1 shadow-[6px_6px_0px_0px_#000]">JOURNEY</span>
        </h2>

        {/* Neo-Brutalist Timeline Grid */}
        <div className="space-y-6">
          {timeline.map((item, index) => {
            const Icon = typeIcons[item.type] || CheckCircle2;
            const isNptel2026 = item.year === "2026";

            return (
              <div
                key={index}
                className={`p-6 sm:p-8 border-4 border-black ${
                  isNptel2026 ? "bg-[#FFD93D]" : "bg-white"
                } shadow-[8px_8px_0px_0px_#000] hover:-translate-y-1 hover:shadow-[10px_10px_0px_0px_#000] transition-all`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4 pb-3 border-b-2 border-black">
                  
                  {/* Year Tag and Type */}
                  <div className="flex items-center gap-3">
                    <span className="px-4 py-1 border-4 border-black bg-black text-white font-black text-lg sm:text-xl tracking-tight shadow-[3px_3px_0px_0px_#FFFDF5]">
                      {item.year}
                    </span>

                    <span
                      className={`px-3 py-1 border-2 border-black font-black text-xs uppercase tracking-wider ${
                        badgeColors[item.type] || "bg-white"
                      }`}
                    >
                      {item.type}
                    </span>

                    {isNptel2026 && (
                      <span className="px-2.5 py-0.5 border-2 border-black bg-[#FF6B6B] text-white font-black text-[11px] uppercase animate-pulse">
                        ★ RECENT ACHIEVEMENT
                      </span>
                    )}
                  </div>

                  <div className="p-2 border-2 border-black bg-white w-fit">
                    <Icon className="w-5 h-5 stroke-[3px] text-black" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl sm:text-2xl font-black uppercase text-black mb-2">
                  {item.title}
                </h3>
                <p className="font-bold text-sm sm:text-base text-black/85 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
