"use client";

import { certifications } from "@/data/experience";
import { Award, BookOpen, Star, CheckCircle } from "lucide-react";

export default function Certifications() {
  return (
    <section id="certifications" className="relative py-20 sm:py-28 bg-[#FFFDF5] neo-grid-bg border-b-4 border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="inline-block px-4 py-1.5 border-4 border-black bg-[#FFD93D] text-black font-black text-xs sm:text-sm uppercase tracking-widest shadow-[4px_4px_0px_0px_#000] mb-6 -rotate-1">
          05 // CREDENTIALS &amp; PAPERS
        </div>

        <h2 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight text-black mb-12">
          VERIFIED <span className="bg-[#FF6B6B] text-white px-3 border-4 border-black inline-block rotate-1 shadow-[6px_6px_0px_0px_#000]">CREDENTIALS</span>
        </h2>

        {/* Credentials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {certifications.map((cert, index) => {
            const isNptel = cert.title.includes("Java");

            return (
              <div
                key={index}
                className={`p-6 sm:p-8 border-4 border-black ${
                  isNptel ? "bg-[#FFD93D]" : "bg-white"
                } shadow-[8px_8px_0px_0px_#000] hover:-translate-y-1 hover:shadow-[12px_12px_0px_0px_#000] transition-all`}
              >
                <div className="flex items-center justify-between mb-4 pb-3 border-b-2 border-black">
                  <div className="flex items-center gap-2">
                    <span className="p-2 border-2 border-black bg-white">
                      <Award className="w-6 h-6 stroke-[3px] text-black" />
                    </span>
                    <span className="px-3 py-1 border-2 border-black bg-black text-white font-black text-xs uppercase">
                      YEAR {cert.year || "2026"}
                    </span>
                  </div>

                  {cert.score && (
                    <span className="px-3 py-1 border-2 border-black bg-[#FF6B6B] text-white font-black text-xs uppercase shadow-[2px_2px_0px_0px_#000]">
                      {cert.score}
                    </span>
                  )}
                </div>

                <h3 className="text-2xl sm:text-3xl font-black uppercase text-black mb-2">
                  {cert.title}
                </h3>
                <p className="font-bold text-sm sm:text-base text-black/80">
                  {cert.issuer}
                </p>
                
                {isNptel && (
                  <div className="mt-4 pt-4 border-t-2 border-black flex items-center gap-2 font-black text-xs text-black uppercase">
                    <CheckCircle className="w-4 h-4 stroke-[3px] text-[#00d2a0]" />
                    <span>IIT Kharagpur Elite Certification Awarded (86%)</span>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* ICISE 2023 Research Paper Card Feature */}
        <div className="p-6 sm:p-10 border-4 border-black bg-[#C4B5FD] shadow-[10px_10px_0px_0px_#000] -rotate-0.5">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4 pb-4 border-b-4 border-black">
            <div className="flex items-center gap-3">
              <div className="p-2 border-2 border-black bg-white">
                <BookOpen className="w-7 h-7 stroke-[3px] text-black" />
              </div>
              <div>
                <span className="px-2.5 py-0.5 border-2 border-black bg-[#FF6B6B] text-white font-black text-[11px] uppercase">
                  PEER-REVIEWED CONFERENCE PUBLICATION
                </span>
                <p className="font-black text-sm uppercase text-black mt-1">ICISE 2023 PROCEEDINGS</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 fill-black" />
              <span className="font-black text-xs uppercase tracking-wider">INTERNATIONAL CONFERENCE</span>
            </div>
          </div>

          <h3 className="text-2xl sm:text-4xl font-black uppercase text-black mb-4 leading-tight">
            MACHINE LEARNING AND DEEP LEARNING TECHNIQUES IN HEART DISEASE PREDICTION: A COMPARATIVE STUDY AND ANALYSIS
          </h3>

          <p className="font-bold text-sm sm:text-base text-black/90 leading-relaxed mb-6 max-w-4xl">
            A comprehensive comparative research paper exploring feature selection, data preprocessing, neural architectures, and performance evaluation metrics for non-invasive heart disease risk estimation. Presented at ICISE 2023.
          </p>

          <div className="flex flex-wrap gap-2.5">
            {["ICISE 2023", "Heart Disease Prediction", "Comparative Analysis", "Scikit-Learn", "Deep Learning", "Clinical Data"].map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-xs font-black uppercase border-2 border-black bg-white shadow-[2px_2px_0px_0px_#000]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
