"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { ArrowDown, ArrowUpRight, Download, Star, Sparkles, Terminal } from "lucide-react";
import { Github } from "@/components/shared/Icons";
import { RESUME_PATH } from "@/lib/utils";

const dynamicRoles = [
  { text: "AI / ML ENGINEER", bg: "bg-[#FFD93D]", textCol: "text-black", rotate: "-rotate-1" },
  { text: "DEEP LEARNING RESEARCHER", bg: "bg-[#FF6B6B]", textCol: "text-white", rotate: "rotate-2" },
  { text: "PYTHON DATA SPECIALIST", bg: "bg-[#C4B5FD]", textCol: "text-black", rotate: "-rotate-2" },
  { text: "SOFTWARE DEVELOPER", bg: "bg-black", textCol: "text-white", rotate: "rotate-1" },
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % dynamicRoles.length);
    }, 2800);
    return () => clearInterval(timer);
  }, []);

  const handleScroll = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const currentRole = dynamicRoles[roleIndex];

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex flex-col justify-between pt-24 sm:pt-28 pb-0 bg-[#FFFDF5] neo-grid-bg border-b-4 border-black overflow-hidden"
    >
      {/* Decorative Floating Neo-Brutalist Sticker Badges */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5, rotate: -15 }}
        animate={{ opacity: 1, scale: 1, rotate: -6 }}
        transition={{ duration: 0.6, delay: 0.2, type: "spring", stiffness: 200 }}
        className="hidden md:flex absolute top-28 right-8 lg:right-16 z-20 items-center gap-2 px-4 py-2 border-4 border-black bg-[#FFD93D] shadow-[6px_6px_0px_0px_#000] font-black text-xs uppercase"
      >
        <Star className="w-4 h-4 fill-black animate-spin-slow" />
        <span>AVAILABLE FOR 2026 ROLES</span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.5, rotate: 15 }}
        animate={{ opacity: 1, scale: 1, rotate: 4 }}
        transition={{ duration: 0.6, delay: 0.3, type: "spring", stiffness: 200 }}
        className="hidden lg:flex absolute top-44 left-8 z-20 items-center gap-2 px-4 py-2 border-4 border-black bg-[#C4B5FD] shadow-[6px_6px_0px_0px_#000] font-black text-xs uppercase"
      >
        <Terminal className="w-4 h-4 stroke-[3px]" />
        <span>ICISE &apos;23 PUBLISHED</span>
      </motion.div>

      {/* Main Hero Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full flex-1 flex flex-col justify-center my-auto py-8 z-10">
        
        {/* Top Tag Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap items-center gap-2 sm:gap-3 mb-6"
        >
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-black text-white font-black text-xs tracking-wider uppercase border-2 border-black">
            <span className="w-2 h-2 rounded-full bg-[#00d2a0] animate-ping" />
            CS UNDERGRADUATE
          </span>
          <span className="px-3 py-1 bg-white text-black font-black text-xs uppercase border-2 border-black shadow-[3px_3px_0px_0px_#000]">
            SWAMI VIVEKANANDA UNIVERSITY
          </span>
          <span className="px-3 py-1 bg-[#FFD93D] text-black font-black text-xs uppercase border-2 border-black shadow-[3px_3px_0px_0px_#000]">
            IIT KGP NPTEL ELITE (2026)
          </span>
        </motion.div>

        {/* Big Impact Headline with Kinetic Natural Typography */}
        <div className="space-y-2 sm:space-y-3 mb-8">
          
          {/* Headline Line 1 */}
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <motion.h1
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter text-black leading-[0.88]"
            >
              SOUVIK
            </motion.h1>

            <motion.span
              initial={{ opacity: 0, scale: 0.8, rotate: -8 }}
              animate={{ opacity: 1, scale: 1, rotate: -2 }}
              transition={{ duration: 0.6, delay: 0.2, type: "spring", stiffness: 250 }}
              className="inline-block px-4 py-1 sm:px-6 sm:py-2 border-4 border-black bg-[#FF6B6B] text-white font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl shadow-[8px_8px_0px_0px_#000] tracking-tighter uppercase leading-[0.9]"
            >
              PAL
            </motion.span>
          </div>

          {/* Headline Line 2: Dynamic Role Box */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight text-black"
            >
              I BUILD
            </motion.span>

            {/* Animated Rotating Role Pill */}
            <div className="h-14 sm:h-20 flex items-center overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentRole.text}
                  initial={{ y: 50, opacity: 0, rotate: -5 }}
                  animate={{ y: 0, opacity: 1, rotate: 0 }}
                  exit={{ y: -50, opacity: 0, rotate: 5 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className={`inline-block px-4 py-1 sm:px-6 sm:py-2 border-4 border-black ${currentRole.bg} ${currentRole.textCol} ${currentRole.rotate} shadow-[6px_6px_0px_0px_#000] font-black text-2xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight uppercase whitespace-nowrap`}
                >
                  {currentRole.text}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Headline Line 3: Supporting Statement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="flex flex-wrap items-baseline gap-2 pt-2"
          >
            <span className="text-2xl sm:text-4xl md:text-5xl font-black uppercase text-black/80">
              FOCUSED ON
            </span>
            <span className="px-3 py-0.5 border-4 border-black bg-white text-black font-black text-2xl sm:text-4xl md:text-5xl uppercase shadow-[4px_4px_0px_0px_#000] -rotate-1">
              DATA
            </span>
            <span className="text-2xl sm:text-4xl md:text-5xl font-black uppercase text-black/80">
              &amp;
            </span>
            <span className="px-3 py-0.5 border-4 border-black bg-[#C4B5FD] text-black font-black text-2xl sm:text-4xl md:text-5xl uppercase shadow-[4px_4px_0px_0px_#000] rotate-1">
              INTELLIGENT SYSTEMS.
            </span>
          </motion.div>
        </div>

        {/* Narrative Bio Line */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="text-base sm:text-xl font-bold text-black max-w-2xl leading-relaxed mb-8 border-l-4 border-black pl-4 py-1 bg-white/60"
        >
          Fourth-year CS student turning machine learning algorithms and deep neural networks into reliable, real-world software applications.
        </motion.p>

        {/* Action Buttons with Mechanical Click States */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="flex flex-wrap gap-4 sm:gap-5 mb-12"
        >
          {/* Explore Projects Button */}
          <button
            id="hero-explore-projects-btn"
            onClick={() => handleScroll("#projects")}
            className="inline-flex items-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 border-4 border-black bg-[#FFD93D] text-black font-black text-sm sm:text-base uppercase tracking-wider shadow-[6px_6px_0px_0px_#000] hover:bg-[#ffe266] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all cursor-pointer"
          >
            <span>EXPLORE WORK</span>
            <ArrowDown className="w-5 h-5 stroke-[3px]" />
          </button>

          {/* Resume Download Button */}
          <a
            id="hero-resume-download-btn"
            href={RESUME_PATH}
            target="_blank"
            rel="noopener noreferrer"
            download="Souvik_Pal_Resume.pdf"
            className="inline-flex items-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 border-4 border-black bg-[#FF6B6B] text-white font-black text-sm sm:text-base uppercase tracking-wider shadow-[6px_6px_0px_0px_#000] hover:bg-black active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all"
          >
            <Download className="w-5 h-5 stroke-[3px]" />
            <span>GET RESUME</span>
            <ArrowUpRight className="w-5 h-5 stroke-[3px]" />
          </a>

          {/* GitHub Button */}
          <a
            id="hero-github-btn"
            href="https://github.com/souvikpal19/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 sm:px-6 py-3.5 sm:py-4 border-4 border-black bg-white text-black font-black text-sm sm:text-base uppercase tracking-wider shadow-[6px_6px_0px_0px_#000] hover:bg-[#C4B5FD] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all"
          >
            <Github className="w-5 h-5 stroke-[3px]" />
            <span>GITHUB</span>
            <ArrowUpRight className="w-5 h-5 stroke-[3px]" />
          </a>
        </motion.div>

        {/* 3 Hard-Shadow Stat Blocks */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.65 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 pt-4 max-w-4xl"
        >
          {/* Stat 1 */}
          <div className="p-4 sm:p-5 border-4 border-black bg-white shadow-[6px_6px_0px_0px_#000] hover:-translate-y-1 transition-transform">
            <div className="flex items-center justify-between mb-2">
              <span className="text-3xl sm:text-4xl font-black text-black">86%</span>
              <span className="px-2 py-0.5 text-[10px] font-black uppercase bg-[#FFD93D] border-2 border-black">
                2026
              </span>
            </div>
            <p className="font-bold text-xs uppercase tracking-wider text-black">
              NPTEL JAVA ELITE
            </p>
            <p className="text-[11px] font-medium text-black/70">IIT Kharagpur Verified</p>
          </div>

          {/* Stat 2 */}
          <div className="p-4 sm:p-5 border-4 border-black bg-[#C4B5FD] shadow-[6px_6px_0px_0px_#000] hover:-translate-y-1 transition-transform">
            <div className="flex items-center justify-between mb-2">
              <span className="text-3xl sm:text-4xl font-black text-black">ICISE &apos;23</span>
              <Sparkles className="w-5 h-5 stroke-[3px]" />
            </div>
            <p className="font-bold text-xs uppercase tracking-wider text-black">
              RESEARCH PUBLICATION
            </p>
            <p className="text-[11px] font-medium text-black/70">Heart Disease ML &amp; DL</p>
          </div>

          {/* Stat 3 */}
          <div className="p-4 sm:p-5 border-4 border-black bg-[#FF6B6B] text-white shadow-[6px_6px_0px_0px_#000] hover:-translate-y-1 transition-transform">
            <div className="flex items-center justify-between mb-2">
              <span className="text-3xl sm:text-4xl font-black">4TH YR</span>
              <span className="px-2 py-0.5 text-[10px] font-black uppercase bg-black text-white border-2 border-white">
                B.TECH
              </span>
            </div>
            <p className="font-bold text-xs uppercase tracking-wider">
              CSE UNDERGRAD
            </p>
            <p className="text-[11px] font-medium text-white/90">Swami Vivekananda Univ</p>
          </div>
        </motion.div>
      </div>

      {/* Infinite Marquee Ticker Tape at Section Bottom */}
      <div className="w-full bg-[#FFD93D] border-t-4 border-black py-2.5 overflow-hidden select-none">
        <div className="animate-marquee whitespace-nowrap flex items-center font-black text-xs sm:text-sm uppercase tracking-widest text-black">
          <span className="mx-4">★ AI / ML ENGINEER</span>
          <span className="mx-4">★ PYTHON &amp; DEEP LEARNING</span>
          <span className="mx-4">★ ICISE 2023 RESEARCH PAPER</span>
          <span className="mx-4">★ IIT KHARAGPUR NPTEL ELITE (2026)</span>
          <span className="mx-4">★ REACT &amp; NEXT.JS APPS</span>
          <span className="mx-4">★ SWAMI VIVEKANANDA UNIVERSITY</span>
          <span className="mx-4">★ OPEN FOR INTERNSHIPS &amp; PROJECTS</span>
          <span className="mx-4">★ AI / ML ENGINEER</span>
          <span className="mx-4">★ PYTHON &amp; DEEP LEARNING</span>
          <span className="mx-4">★ ICISE 2023 RESEARCH PAPER</span>
          <span className="mx-4">★ IIT KHARAGPUR NPTEL ELITE (2026)</span>
          <span className="mx-4">★ REACT &amp; NEXT.JS APPS</span>
          <span className="mx-4">★ SWAMI VIVEKANANDA UNIVERSITY</span>
          <span className="mx-4">★ OPEN FOR INTERNSHIPS &amp; PROJECTS</span>
        </div>
      </div>
    </section>
  );
}
