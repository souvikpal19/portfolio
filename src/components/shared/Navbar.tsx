"use client";

import { motion } from "framer-motion";
import { Menu, X, Download } from "lucide-react";
import { useState } from "react";
import { Github } from "@/components/shared/Icons";

const navLinks = [
  { label: "ABOUT", href: "#about" },
  { label: "WORK", href: "#projects" },
  { label: "SKILLS", href: "#skills" },
  { label: "JOURNEY", href: "#experience" },
  { label: "CONTACT", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#FFFDF5] border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between">
          {/* Logo Badge */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="inline-flex items-center gap-2 border-4 border-black bg-[#FFD93D] px-3 py-1 font-black text-lg sm:text-xl uppercase tracking-tight shadow-[4px_4px_0px_0px_#000] -rotate-1 hover:rotate-0 transition-transform active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
          >
            <span>SOUVIK.PAL</span>
            <span className="w-2.5 h-2.5 rounded-full bg-[#FF6B6B] border-2 border-black animate-pulse" />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="px-3 py-1 font-black text-xs uppercase tracking-wider text-black border-2 border-transparent hover:border-black hover:bg-[#C4B5FD] hover:shadow-[3px_3px_0px_0px_#000] transition-all cursor-pointer"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Actions */}
          <div className="hidden sm:flex items-center gap-3">
            {/* GitHub Profile Button */}
            <a
              id="navbar-github-link"
              href="https://github.com/souvikpal19/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-black uppercase bg-white border-4 border-black shadow-[4px_4px_0px_0px_#000] hover:bg-[#FFD93D] transition-all active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4 stroke-[3px]" />
              <span>GITHUB</span>
            </a>

            {/* Resume Button */}
            <a
              id="navbar-resume-btn"
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download="Souvik_Pal_Resume.pdf"
              className="inline-flex items-center gap-1.5 px-4 py-1.5 text-xs font-black uppercase text-white bg-[#FF6B6B] border-4 border-black shadow-[4px_4px_0px_0px_#000] hover:bg-black transition-all active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
            >
              <Download className="w-4 h-4 stroke-[3px]" />
              <span>RESUME ↗</span>
            </a>
          </div>

          {/* Mobile menu toggle */}
          <button
            id="mobile-menu-toggle"
            aria-label="Toggle menu"
            className="lg:hidden p-2 border-4 border-black bg-[#FFD93D] shadow-[4px_4px_0px_0px_#000] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={24} className="stroke-[3px]" /> : <Menu size={24} className="stroke-[3px]" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed top-16 sm:top-20 left-0 right-0 z-40 bg-[#FFFDF5] border-b-4 border-black p-6 shadow-[8px_8px_0px_0px_#000] lg:hidden"
        >
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="w-full text-left font-black text-xl uppercase p-3 border-4 border-black bg-white hover:bg-[#FFD93D] shadow-[4px_4px_0px_0px_#000] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
              >
                {link.label}
              </button>
            ))}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <a
                href="https://github.com/souvikpal19/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 p-3 font-black text-sm uppercase bg-white border-4 border-black shadow-[4px_4px_0px_0px_#000]"
              >
                <Github className="w-4 h-4" />
                GITHUB
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download="Souvik_Pal_Resume.pdf"
                className="flex items-center justify-center gap-2 p-3 font-black text-sm uppercase text-white bg-[#FF6B6B] border-4 border-black shadow-[4px_4px_0px_0px_#000]"
              >
                <Download className="w-4 h-4" />
                RESUME
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
}
