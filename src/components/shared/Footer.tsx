"use client";

import { ArrowUpRight, Download, Heart } from "lucide-react";
import { Github, Linkedin } from "@/components/shared/Icons";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#FFD93D] border-t-8 border-black pt-12 pb-8 text-black select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12 pb-8 border-b-4 border-black">
          
          {/* Brand (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <div className="inline-block p-2 px-4 border-4 border-black bg-white shadow-[4px_4px_0px_0px_#000] -rotate-1 font-black text-2xl uppercase">
              SOUVIK PAL
            </div>
            <p className="font-bold text-sm text-black max-w-sm">
              Computer Science undergraduate at Swami Vivekananda University aspiring to create high-impact AI/ML systems and modern software.
            </p>
          </div>

          {/* Quick Nav (4 cols) */}
          <div className="md:col-span-4">
            <p className="font-black text-xs uppercase tracking-widest mb-3">NAVIGATION</p>
            <div className="grid grid-cols-2 gap-2 text-xs font-black uppercase">
              <a href="#about" className="hover:underline">ABOUT</a>
              <a href="#projects" className="hover:underline">PROJECTS</a>
              <a href="#skills" className="hover:underline">SKILLS</a>
              <a href="#experience" className="hover:underline">JOURNEY</a>
              <a href="#certifications" className="hover:underline">CREDENTIALS</a>
              <a href="#contact" className="hover:underline">CONTACT</a>
            </div>
          </div>

          {/* Connect (3 cols) */}
          <div className="md:col-span-3 space-y-2">
            <p className="font-black text-xs uppercase tracking-widest mb-3">CHANNELS</p>
            <div className="flex flex-col gap-2">
              <a
                id="footer-github"
                href="https://github.com/souvikpal19/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 p-2 border-2 border-black bg-white font-black text-xs uppercase shadow-[2px_2px_0px_0px_#000] hover:bg-[#FF6B6B] hover:text-white transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>GITHUB REPO</span>
                <ArrowUpRight className="w-3 h-3 ml-auto" />
              </a>

              <a
                id="footer-linkedin"
                href="https://www.linkedin.com/in/souvik-pal-92a4a6281"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 p-2 border-2 border-black bg-white font-black text-xs uppercase shadow-[2px_2px_0px_0px_#000] hover:bg-[#C4B5FD] transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                <span>LINKEDIN</span>
                <ArrowUpRight className="w-3 h-3 ml-auto" />
              </a>

              <a
                id="footer-resume"
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download="Souvik_Pal_Resume.pdf"
                className="inline-flex items-center gap-2 p-2 border-2 border-black bg-[#FF6B6B] text-white font-black text-xs uppercase shadow-[2px_2px_0px_0px_#000] hover:bg-black transition-colors"
              >
                <Download className="w-4 h-4" />
                <span>ATS RESUME</span>
                <ArrowUpRight className="w-3 h-3 ml-auto" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 font-black text-xs uppercase">
          <p>© {currentYear} SOUVIK PAL • ALL RIGHTS RESERVED.</p>
          <div className="flex items-center gap-1.5 bg-white px-3 py-1 border-2 border-black">
            <span>BUILT WITH PURPOSE</span>
            <Heart className="w-3.5 h-3.5 fill-[#FF6B6B] text-[#FF6B6B]" />
            <span>&amp; CODE</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
