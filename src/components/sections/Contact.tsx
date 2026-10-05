"use client";

import { useState } from "react";
import { Mail, MapPin, Phone, Send, CheckCircle, Download, ArrowUpRight } from "lucide-react";
import { Github, Linkedin } from "@/components/shared/Icons";

const contactTiles = [
  {
    icon: Mail,
    label: "EMAIL DIRECT",
    value: "psouvik609@gmail.com",
    href: "mailto:psouvik609@gmail.com",
    bg: "bg-[#FFD93D]",
  },
  {
    icon: Github,
    label: "GITHUB PROFILE",
    value: "github.com/souvikpal19",
    href: "https://github.com/souvikpal19/",
    bg: "bg-white",
  },
  {
    icon: Linkedin,
    label: "LINKEDIN NETWORK",
    value: "souvik-pal-92a4a6281",
    href: "https://www.linkedin.com/in/souvik-pal-92a4a6281",
    bg: "bg-[#C4B5FD]",
  },
  {
    icon: Phone,
    label: "PHONE / WHATSAPP",
    value: "+91 9883079780",
    href: "tel:+919883079780",
    bg: "bg-[#FF6B6B] text-white",
  },
  {
    icon: MapPin,
    label: "CURRENT LOCATION",
    value: "Tarakeswar, West Bengal, India",
    href: "#",
    bg: "bg-white",
  },
  {
    icon: Download,
    label: "ATS RESUME PDF",
    value: "Download Souvik Pal Resume",
    href: "/resume.pdf",
    download: true,
    bg: "bg-[#FFD93D]",
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailto = `mailto:psouvik609@gmail.com?subject=Contact from ${encodeURIComponent(
      formData.name
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    window.open(mailto, "_blank");
    setSent(true);
    setTimeout(() => setSent(false), 5000);
  };

  return (
    <section id="contact" className="relative py-20 sm:py-28 bg-[#FFFDF5] border-b-4 border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="inline-block px-4 py-1.5 border-4 border-black bg-[#FF6B6B] text-white font-black text-xs sm:text-sm uppercase tracking-widest shadow-[4px_4px_0px_0px_#000] mb-6 rotate-1">
          07 // GET IN TOUCH
        </div>

        <h2 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight text-black mb-12">
          LET&apos;S BUILD <span className="bg-[#FFD93D] px-3 border-4 border-black inline-block -rotate-1 shadow-[6px_6px_0px_0px_#000]">SOMETHING</span> USEFUL.
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Tiles (6 cols) */}
          <div className="lg:col-span-6 space-y-4">
            <p className="font-bold text-sm sm:text-base text-black/90 mb-4 bg-white p-4 border-4 border-black shadow-[4px_4px_0px_0px_#000]">
              Open for AI/ML engineering internships, full-stack collaborations, and software development opportunities.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contactTiles.map((tile) => {
                const Icon = tile.icon;
                const isExternal = tile.href.startsWith("http");

                return (
                  <a
                    key={tile.label}
                    href={tile.href}
                    target={isExternal || tile.download ? "_blank" : undefined}
                    rel={isExternal ? "noopener noreferrer" : undefined}
                    download={tile.download ? "Souvik_Pal_Resume.pdf" : undefined}
                    className={`p-4 border-4 border-black ${tile.bg} shadow-[4px_4px_0px_0px_#000] hover:-translate-y-1 hover:shadow-[8px_8px_0px_0px_#000] transition-all flex flex-col justify-between`}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="p-2 border-2 border-black bg-white text-black">
                        <Icon className="w-5 h-5 stroke-[3px]" />
                      </div>
                      <ArrowUpRight className="w-4 h-4 stroke-[3px]" />
                    </div>

                    <div>
                      <p className="text-[10px] font-black uppercase tracking-widest opacity-70">
                        {tile.label}
                      </p>
                      <p className="text-xs sm:text-sm font-black mt-0.5 break-all">
                        {tile.value}
                      </p>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Right Column: Neo-Brutalist Form (6 cols) */}
          <div className="lg:col-span-6 border-4 border-black bg-white p-6 sm:p-8 shadow-[10px_10px_0px_0px_#000]">
            <h3 className="font-black text-2xl uppercase mb-6 pb-3 border-b-4 border-black flex items-center justify-between">
              <span>SEND A MESSAGE</span>
              <Send className="w-5 h-5 stroke-[3px]" />
            </h3>

            {sent ? (
              <div className="p-6 border-4 border-black bg-[#FFD93D] shadow-[6px_6px_0px_0px_#000] text-center">
                <CheckCircle className="w-10 h-10 stroke-[3px] mx-auto mb-2 text-black" />
                <p className="font-black text-lg uppercase">MAILTO TRIGGERED!</p>
                <p className="font-bold text-xs mt-1">Your email client has opened with your message pre-filled.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block font-black text-xs uppercase mb-1.5 tracking-wider">
                    YOUR NAME:
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Alex Morgan"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full p-3.5 border-4 border-black bg-[#FFFDF5] font-bold text-sm focus:bg-[#FFD93D] focus:shadow-[4px_4px_0px_0px_#000] focus:outline-none transition-all placeholder:text-black/40"
                  />
                </div>

                <div>
                  <label className="block font-black text-xs uppercase mb-1.5 tracking-wider">
                    EMAIL ADDRESS:
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="alex@domain.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full p-3.5 border-4 border-black bg-[#FFFDF5] font-bold text-sm focus:bg-[#FFD93D] focus:shadow-[4px_4px_0px_0px_#000] focus:outline-none transition-all placeholder:text-black/40"
                  />
                </div>

                <div>
                  <label className="block font-black text-xs uppercase mb-1.5 tracking-wider">
                    MESSAGE:
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Hi Souvik, let's talk about..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full p-3.5 border-4 border-black bg-[#FFFDF5] font-bold text-sm focus:bg-[#FFD93D] focus:shadow-[4px_4px_0px_0px_#000] focus:outline-none transition-all placeholder:text-black/40 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 border-4 border-black bg-[#FF6B6B] text-white font-black text-sm uppercase tracking-wider shadow-[4px_4px_0px_0px_#000] hover:bg-black active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4 stroke-[3px]" />
                  <span>TRANSMIT MESSAGE</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
