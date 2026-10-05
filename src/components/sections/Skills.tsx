"use client";

import { useState } from "react";
import { skillCategories } from "@/data/skills";
import { Layers } from "lucide-react";

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filteredCategories = activeCategory === null
    ? skillCategories
    : skillCategories.filter((cat) => cat.label === activeCategory);

  return (
    <section id="skills" className="relative py-20 sm:py-28 bg-[#FFFDF5] border-b-4 border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Tag */}
        <div className="inline-block px-4 py-1.5 border-4 border-black bg-[#FFD93D] text-black font-black text-xs sm:text-sm uppercase tracking-widest shadow-[4px_4px_0px_0px_#000] mb-6 rotate-1">
          02 // ARSENAL &amp; STACK
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight text-black">
              TECHNICAL <span className="bg-[#FF6B6B] text-white px-3 border-4 border-black inline-block -rotate-1 shadow-[6px_6px_0px_0px_#000]">STACK</span>
            </h2>
            <p className="font-bold text-sm sm:text-base text-black/80 mt-3 max-w-xl">
              Tools, frameworks, and programming languages I leverage to design machine learning models and web software.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setActiveCategory(null)}
              className={`px-4 py-2 border-4 border-black font-black text-xs uppercase tracking-wider transition-all cursor-pointer ${
                activeCategory === null
                  ? "bg-black text-white shadow-[4px_4px_0px_0px_#FFD93D] -translate-y-1"
                  : "bg-white text-black shadow-[4px_4px_0px_0px_#000] hover:bg-[#FFD93D]"
              } active:translate-x-[2px] active:translate-y-[2px] active:shadow-none`}
            >
              ALL CATEGORIES
            </button>
            {skillCategories.map((cat, i) => (
              <button
                key={cat.label}
                onClick={() => setActiveCategory(cat.label === activeCategory ? null : cat.label)}
                className={`px-4 py-2 border-4 border-black font-black text-xs uppercase tracking-wider transition-all cursor-pointer ${
                  activeCategory === cat.label
                    ? i % 2 === 0
                      ? "bg-[#FF6B6B] text-white shadow-[4px_4px_0px_0px_#000] -translate-y-1"
                      : "bg-[#C4B5FD] text-black shadow-[4px_4px_0px_0px_#000] -translate-y-1"
                    : "bg-white text-black shadow-[4px_4px_0px_0px_#000] hover:bg-[#FFD93D]"
                } active:translate-x-[2px] active:translate-y-[2px] active:shadow-none`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Categories Stack */}
        <div className="space-y-10">
          {filteredCategories.map((category, catIdx) => (
            <div
              key={category.label}
              className="p-6 sm:p-8 border-4 border-black bg-white shadow-[8px_8px_0px_0px_#000]"
            >
              <div className="flex items-center gap-2 mb-6 pb-3 border-b-4 border-black">
                <div className={`p-1.5 border-2 border-black ${catIdx % 2 === 0 ? "bg-[#FFD93D]" : "bg-[#FF6B6B]"}`}>
                  <Layers className="w-5 h-5 stroke-[3px]" />
                </div>
                <h3 className="font-black text-xl sm:text-2xl uppercase tracking-tight text-black">
                  {category.label}
                </h3>
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {category.skills.map((skill, sIdx) => {
                  const bgOptions = ["hover:bg-[#FFD93D]", "hover:bg-[#C4B5FD]", "hover:bg-[#FF6B6B] hover:text-white"];
                  const hoverBg = bgOptions[sIdx % bgOptions.length];

                  return (
                    <div
                      key={skill.name}
                      className={`p-4 border-4 border-black bg-[#FFFDF5] shadow-[4px_4px_0px_0px_#000] transition-all duration-150 hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_#000] ${hoverBg} group`}
                    >
                      <p className="font-black text-base uppercase text-black group-hover:text-inherit">
                        {skill.name}
                      </p>
                      {skill.description && (
                        <p className="font-bold text-xs text-black/70 group-hover:text-inherit mt-1 leading-snug">
                          {skill.description}
                        </p>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
