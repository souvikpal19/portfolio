"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [dotPos, setDotPos] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const isTouchDevice = window.matchMedia("(pointer: coarse)").matches;
    if (isTouchDevice) return;

    let rafId: number;
    let targetX = -100, targetY = -100;

    const handleMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
      setDotPos({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const animate = () => {
      setPos((prev) => ({
        x: prev.x + (targetX - prev.x) * 0.18,
        y: prev.y + (targetY - prev.y) * 0.18,
      }));
      rafId = requestAnimationFrame(animate);
    };

    const handleHover = () => setIsHovering(true);
    const handleLeave = () => setIsHovering(false);

    window.addEventListener("mousemove", handleMove);
    document.querySelectorAll("a, button, [role=button], input, textarea").forEach((el) => {
      el.addEventListener("mouseenter", handleHover);
      el.addEventListener("mouseleave", handleLeave);
    });

    rafId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      cancelAnimationFrame(rafId);
    };
  }, [isVisible]);

  if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) {
    return null;
  }

  return (
    <>
      {/* Outer tactile box — follows with snappy lag */}
      <div
        className="fixed pointer-events-none z-[9999] hidden md:block"
        style={{
          left: pos.x,
          top: pos.y,
          transform: "translate(-50%, -50%)",
        }}
      >
        <motion.div
          className={`border-2 border-black transition-all duration-100 ${
            isHovering
              ? "w-8 h-8 bg-[#FF6B6B] shadow-[3px_3px_0px_0px_#000] rotate-12"
              : "w-6 h-6 bg-[#FFD93D] shadow-[2px_2px_0px_0px_#000] rotate-0"
          }`}
          animate={{
            scale: isHovering ? 1.3 : 1,
            opacity: isVisible ? 1 : 0,
          }}
          transition={{ duration: 0.15 }}
        />
      </div>

      {/* Inner square point — snaps instantly */}
      <div
        className="fixed pointer-events-none z-[9999] hidden md:block"
        style={{
          left: dotPos.x,
          top: dotPos.y,
          transform: "translate(-50%, -50%)",
        }}
      >
        <motion.div
          className="w-1.5 h-1.5 bg-black"
          animate={{ opacity: isVisible ? 1 : 0 }}
        />
      </div>
    </>
  );
}
