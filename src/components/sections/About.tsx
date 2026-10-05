"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award, Sparkles, Download, ArrowUpRight } from "lucide-react";
import { Github } from "@/components/shared/Icons";

export default function About() {
  return (
    <section id="about" className="relative py-20 sm:py-28 bg-[#FFFDF5] border-b-4 border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header Banner */}
        <div className="inline-block px-4 py-1.5 border-4 border-black bg-[#FF6B6B] text-white font-black text-xs sm:text-sm uppercase tracking-widest shadow-[4px_4px_0px_0px_#000] mb-6 -rotate-1">
          01 // WHO I AM
        </div>

        <h2 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight text-black mb-12">
          TURNING DATA INTO <span className="inline-block bg-[#FFD93D] px-3 border-4 border-black rotate-1 shadow-[6px_6px_0px_0px_#000]">INTELLIGENCE</span> &amp; PURPOSE.
        </h2>

        {/* 2-Column Neo-Brutalist Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column (5 cols): Philosophy Card & Quick Facts */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Core Philosophy Banner */}
            <div className="p-6 border-4 border-black bg-[#FFD93D] shadow-[8px_8px_0px_0px_#000] -rotate-1">
              <div className="flex items-center gap-2 mb-3">
                <Sparkles className="w-5 h-5 stroke-[3px]" />
                <span className="font-black text-xs uppercase tracking-widest">CORE PHILOSOPHY</span>
              </div>
              <p className="text-2xl sm:text-3xl font-black uppercase text-black leading-tight">
                &ldquo;I CAN AND I HAVE TO DO IT.&rdquo;
              </p>
              <p className="text-xs font-bold text-black/80 mt-3 pt-3 border-t-2 border-black">
                Accountability, persistence, and continuous curiosity through every engineering challenge.
              </p>
            </div>

            {/* Quick Stats / Info Box */}
            <div className="p-6 border-4 border-black bg-white shadow-[8px_8px_0px_0px_#000]">
              <h3 className="font-black text-sm uppercase tracking-wider mb-4 pb-2 border-b-2 border-black flex items-center justify-between">
                <span>IDENTITY CARD</span>
                <span className="w-2.5 h-2.5 rounded-full bg-[#00d2a0] border border-black" />
              </h3>
              <div className="space-y-3 text-xs sm:text-sm font-bold">
                <div className="flex justify-between py-1 border-b border-black/10">
                  <span className="text-black/60 uppercase">NAME:</span>
                  <span className="text-black font-black">Souvik Pal</span>
                </div>
                <div className="flex justify-between py-1 border-b border-black/10">
                  <span className="text-black/60 uppercase">EDUCATION:</span>
                  <span className="text-black font-black text-right">Swami Vivekananda Univ (4th Yr)</span>
                </div>
                <div className="flex justify-between py-1 border-b border-black/10">
                  <span className="text-black/60 uppercase">LOCATION:</span>
                  <span className="text-black font-black">Tarakeswar, WB, India</span>
                </div>
                <div className="flex justify-between py-1 border-b border-black/10">
                  <span className="text-black/60 uppercase">NPTEL ELITE:</span>
                  <span className="text-black font-black">86% in Java (2026)</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-black/60 uppercase">STATUS:</span>
                  <span className="inline-block px-2 py-0.5 bg-[#C4B5FD] border border-black text-[11px] font-black uppercase">
                    Available for 2026
                  </span>
                </div>
              </div>

              {/* Action Link to Resume */}
              <div className="pt-5 mt-4 border-t-2 border-black flex gap-3">
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  download="Souvik_Pal_Resume.pdf"
                  className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 border-4 border-black bg-[#FF6B6B] text-white font-black text-xs uppercase shadow-[4px_4px_0px_0px_#000] hover:bg-black active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
                >
                  <Download className="w-4 h-4 stroke-[3px]" />
                  <span>RESUME PDF</span>
                </a>
                <a
                  href="https://github.com/souvikpal19/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 border-4 border-black bg-white text-black font-black text-xs uppercase shadow-[4px_4px_0px_0px_#000] hover:bg-[#FFD93D] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
                >
                  <Github className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column (7 cols): Narrative & Cards */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Card 1: Degree & Mission */}
            <div className="p-6 sm:p-8 border-4 border-black bg-white shadow-[8px_8px_0px_0px_#000]">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 border-2 border-black bg-[#FFD93D]">
                  <GraduationCap className="w-6 h-6 stroke-[3px]" />
                </div>
                <h3 className="text-xl sm:text-2xl font-black uppercase">
                  COMPUTER SCIENCE &amp; ENGINEERING
                </h3>
              </div>
              <p className="font-bold text-sm sm:text-base text-black/90 leading-relaxed mb-4">
                I am a fourth-year Computer Science Engineering undergraduate at{" "}
                <span className="bg-[#FFD93D] px-1 border border-black">Swami Vivekananda University</span>. My current goal is to advance into an{" "}
                <span className="bg-[#FF6B6B] text-white px-1 border border-black">AI/ML Engineer</span> who builds practical, intelligent software that solves tangible everyday problems.
              </p>
              <p className="font-bold text-sm sm:text-base text-black/80 leading-relaxed">
                I bridge the gap between theoretical algorithms and full-stack software development, bringing clean code, systematic data processing, and user empathy to every project.
              </p>
            </div>

            {/* Card 2: Research Highlight */}
            <div className="p-6 sm:p-8 border-4 border-black bg-[#C4B5FD] shadow-[8px_8px_0px_0px_#000] rotate-0.5">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 border-2 border-black bg-white">
                  <Award className="w-6 h-6 stroke-[3px]" />
                </div>
                <h3 className="text-xl sm:text-2xl font-black uppercase">
                  ICISE 2023 RESEARCH PUBLICATION
                </h3>
              </div>
              <p className="font-bold text-sm sm:text-base text-black leading-relaxed mb-3">
                Authored and presented research on{" "}
                <strong>&ldquo;Machine Learning and Deep Learning Techniques in Heart Disease Prediction: A Comparative Study and Analysis&rdquo;</strong> at the International Conference on Integrative Science and Engineering (ICISE 2023).
              </p>
              <p className="text-xs sm:text-sm font-bold text-black/80">
                This project proved how computational intelligence and data preprocessing directly support clinical impact and healthcare decision-making.
              </p>
            </div>

            {/* Core Traits Badges */}
            <div className="p-6 border-4 border-black bg-white shadow-[8px_8px_0px_0px_#000]">
              <p className="text-xs font-black uppercase tracking-widest text-black mb-3">
                CORE STRENGTHS &amp; ATTRIBUTES:
              </p>
              <div className="flex flex-wrap gap-2.5">
                {[
                  "AI & MACHINE LEARNING",
                  "PYTHON DATA PIPELINES",
                  "IIT KHARAGPUR ELITE",
                  "RESEARCH METHODOLOGY",
                  "WEB APPLICATION ARCHITECTURE",
                  "PROBLEM SOLVER",
                  "DEPENDABLE & ACCOUNTABLE",
                ].map((tag, i) => (
                  <span
                    key={tag}
                    className={`px-3 py-1.5 text-xs font-black uppercase border-2 border-black shadow-[3px_3px_0px_0px_#000] ${
                      i % 3 === 0
                        ? "bg-[#FFD93D]"
                        : i % 3 === 1
                        ? "bg-[#FF6B6B] text-white"
                        : "bg-[#C4B5FD]"
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
