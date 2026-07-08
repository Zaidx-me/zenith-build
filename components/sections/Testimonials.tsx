"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const testimonials = [
  {
    quote: "Zenith Build didn't just redesign our site — they rethought our entire digital strategy. The results speak for themselves.",
    author: "Jamie Torres",
    title: "CEO, Stitch",
    color: "#5050F7",
  },
  {
    quote: "Working with Zenith felt like an extension of our own team. Deep technical skill, sharp design sense, and relentless execution.",
    author: "Dr. Priya Nair",
    title: "CTO, Helix Health",
    color: "#19B64F",
  },
  {
    quote: "They delivered ahead of schedule and above expectations. Our launch weekend was the best in company history.",
    author: "Marcus Webb",
    title: "Founder, Nova",
    color: "#0BB044",
  },
];

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const cardScale = useTransform(scrollYProgress, [0, 0.15], [0.92, 1]);
  const cardY = useTransform(scrollYProgress, [0, 0.15], [40, 0]);

  return (
    <motion.section
      ref={sectionRef}
      style={{ scale: cardScale, y: cardY }}
      className="bg-[#F4F4F4] rounded-[32px] px-6 md:px-16 py-24 border border-black/[0.04] relative overflow-hidden">
      {/* Top brand accent */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#5050F7]/50 via-[#19B64F]/50 to-transparent" />
    
      <span className="text-xs tracking-widest uppercase text-black/30 font-medium">
        CLIENT FEEDBACK
      </span>
      <h2 className="text-4xl md:text-5xl font-display font-black text-[#141414] leading-[1.05] mt-4">
        Testimonials
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-14">
        {testimonials.map((t) => (
          <div
            key={t.author}
            className="p-8 rounded-2xl bg-white border border-black/5"
          >
            <div
              className="w-8 h-1 rounded-full mb-5"
              style={{ backgroundColor: t.color }}
            />
            <p className="text-sm text-black/60 leading-relaxed italic">
              &ldquo;{t.quote}&rdquo;
            </p>
            <div className="mt-6">
              <p className="text-sm font-semibold text-[#141414]">{t.author}</p>
              <p className="text-xs text-black/40">{t.title}</p>
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
}
