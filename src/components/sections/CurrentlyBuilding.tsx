"use client";

import { useState } from "react";
import { Plus, Minus, Cpu, Database, Globe, Lightbulb } from "lucide-react";

const buildingItems = [
  {
    number: "01",
    title: "AI / ML & DEEP LEARNING ARCHITECTURES",
    description:
      "Deepening practical mastery of neural network architectures, hyperparameter optimization, and end-to-end model evaluation with Python, PyTorch, and TensorFlow.",
    tag: "MACHINE LEARNING",
    bg: "bg-[#FFD93D]",
    icon: Cpu,
  },
  {
    number: "02",
    title: "DATA PIPELINES & STATISTICAL ANALYSIS",
    description:
      "Refining high-throughput exploratory data analysis workflows, automated feature engineering, and data cleaning with Pandas, NumPy, and Scikit-Learn.",
    tag: "DATA SCIENCE",
    bg: "bg-[#FF6B6B] text-white",
    icon: Database,
  },
  {
    number: "03",
    title: "FULL-STACK AI WEB INTEGRATIONS",
    description:
      "Integrating machine learning inference endpoints with high-performance Next.js and TypeScript web applications for accessible real-world user interaction.",
    tag: "WEB ENGINEERING",
    bg: "bg-[#C4B5FD]",
    icon: Globe,
  },
  {
    number: "04",
    title: "RESEARCH & ACADEMIC COLLABORATION",
    description:
      "Continuing literature surveys and model benchmarking following the ICISE 2023 heart disease prediction paper to prepare future scientific publications.",
    tag: "RESEARCH",
    bg: "bg-white",
    icon: Lightbulb,
  },
];

export default function CurrentlyBuilding() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section id="building" className="relative py-20 sm:py-28 bg-[#FFFDF5] border-b-4 border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="inline-block px-4 py-1.5 border-4 border-black bg-[#FF6B6B] text-white font-black text-xs sm:text-sm uppercase tracking-widest shadow-[4px_4px_0px_0px_#000] mb-6 rotate-1">
          06 // WORK IN PROGRESS
        </div>

        <h2 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight text-black mb-12">
          CURRENTLY <span className="bg-[#FFD93D] px-3 border-4 border-black inline-block -rotate-1 shadow-[6px_6px_0px_0px_#000]">BUILDING</span>
        </h2>

        {/* Accordion Stack */}
        <div className="space-y-4">
          {buildingItems.map((item, i) => {
            const isOpen = openIndex === i;
            const Icon = item.icon;

            return (
              <div
                key={item.number}
                className="border-4 border-black bg-white shadow-[6px_6px_0px_0px_#000] transition-all"
              >
                <button
                  onClick={() => toggle(i)}
                  className="w-full p-5 sm:p-7 flex items-center justify-between text-left hover:bg-[#FFFDF5] transition-colors cursor-pointer select-none"
                >
                  <div className="flex items-center gap-4 sm:gap-6">
                    <span className="font-mono font-black text-xl sm:text-3xl text-black">
                      {item.number}
                    </span>
                    <div>
                      <h3 className="font-black text-lg sm:text-2xl uppercase tracking-tight text-black">
                        {item.title}
                      </h3>
                      <span className="inline-block mt-1 px-2.5 py-0.5 border-2 border-black bg-[#C4B5FD] text-[10px] sm:text-xs font-black uppercase">
                        {item.tag}
                      </span>
                    </div>
                  </div>

                  <div className="p-2 border-2 border-black bg-[#FFD93D] shadow-[2px_2px_0px_0px_#000] ml-4 shrink-0">
                    {isOpen ? (
                      <Minus className="w-5 h-5 stroke-[3px]" />
                    ) : (
                      <Plus className="w-5 h-5 stroke-[3px]" />
                    )}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-7 pb-6 pt-2 border-t-2 border-black bg-[#FFFDF5]">
                    <div className="flex items-start gap-4">
                      <div className="p-2.5 border-2 border-black bg-white shrink-0 mt-1">
                        <Icon className="w-6 h-6 stroke-[3px] text-black" />
                      </div>
                      <p className="font-bold text-sm sm:text-base text-black/90 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
