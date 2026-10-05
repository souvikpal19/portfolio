"use client";

import { projects } from "@/data/projects";
import { ArrowUpRight, Code, ExternalLink } from "lucide-react";
import { Github } from "@/components/shared/Icons";

const cardColors = ["bg-[#FFD93D]", "bg-[#FF6B6B]", "bg-[#C4B5FD]", "bg-white"];

export default function Projects() {
  return (
    <section id="projects" className="relative py-20 sm:py-28 bg-[#FFFDF5] neo-dots-bg border-b-4 border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Tag */}
        <div className="inline-block px-4 py-1.5 border-4 border-black bg-[#C4B5FD] text-black font-black text-xs sm:text-sm uppercase tracking-widest shadow-[4px_4px_0px_0px_#000] mb-6 -rotate-1">
          03 // SELECTED WORKS
        </div>

        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight text-black">
              FEATURED <span className="bg-[#FFD93D] px-3 border-4 border-black inline-block rotate-1 shadow-[6px_6px_0px_0px_#000]">PROJECTS</span>
            </h2>
            <p className="font-bold text-sm sm:text-base text-black/80 mt-3 max-w-xl">
              Machine learning models, comparative data research, and modern web applications.
            </p>
          </div>

          <a
            id="projects-github-top-link"
            href="https://github.com/souvikpal19/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border-4 border-black bg-white text-black font-black text-xs sm:text-sm uppercase tracking-wider shadow-[4px_4px_0px_0px_#000] hover:bg-[#FFD93D] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all w-fit"
          >
            <Github className="w-4 h-4 stroke-[3px]" />
            <span>VIEW GITHUB REPOSITORIES</span>
            <ArrowUpRight className="w-4 h-4 stroke-[3px]" />
          </a>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, idx) => {
            const headerColor = cardColors[idx % cardColors.length];
            const isDark = headerColor === "bg-[#FF6B6B]";

            return (
              <div
                key={project.id}
                className="border-4 border-black bg-white shadow-[8px_8px_0px_0px_#000] hover:-translate-y-2 hover:shadow-[12px_12px_0px_0px_#000] transition-all duration-200 flex flex-col justify-between"
              >
                {/* Project Header Bar */}
                <div className={`p-4 sm:p-5 border-b-4 border-black ${headerColor} flex items-center justify-between`}>
                  <div className="flex items-center gap-2">
                    <span className="font-mono font-black text-lg sm:text-xl text-black">
                      #{project.number}
                    </span>
                    <span className={`px-2.5 py-0.5 border-2 border-black text-[11px] font-black uppercase ${isDark ? "bg-white text-black" : "bg-black text-white"}`}>
                      {project.category}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <a
                      href={project.github || "https://github.com/souvikpal19/"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 border-2 border-black bg-white text-black hover:bg-[#FFD93D] shadow-[2px_2px_0px_0px_#000] active:translate-x-[1px] active:translate-y-[1px] active:shadow-none"
                      aria-label="View Source Code"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                {/* Project Body */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-black uppercase text-black mb-3">
                      {project.title}
                    </h3>
                    <p className="font-bold text-sm sm:text-base text-black/80 leading-relaxed mb-6">
                      {project.longDescription || project.description}
                    </p>
                  </div>

                  <div>
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6 pt-4 border-t-2 border-black">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 text-xs font-black uppercase border-2 border-black bg-[#FFFDF5] shadow-[2px_2px_0px_0px_#000]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Action Links */}
                    <div className="flex flex-wrap gap-3">
                      <a
                        href={project.github || "https://github.com/souvikpal19/"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 border-4 border-black bg-[#FFD93D] text-black font-black text-xs uppercase tracking-wider shadow-[4px_4px_0px_0px_#000] hover:bg-[#ffe266] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all"
                      >
                        <Code className="w-4 h-4 stroke-[3px]" />
                        <span>VIEW REPO</span>
                        <ArrowUpRight className="w-3.5 h-3.5 stroke-[3px]" />
                      </a>

                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 border-4 border-black bg-white text-black font-black text-xs uppercase tracking-wider shadow-[4px_4px_0px_0px_#000] hover:bg-[#C4B5FD] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all"
                        >
                          <ExternalLink className="w-4 h-4 stroke-[3px]" />
                          <span>DEMO</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
