"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { CircleCheck } from "lucide-react";

const awards = [
  { name: "Awwwards — Site of the Day", year: "2025" },
  { name: "CSS Design Awards — Best UI", year: "2024" },
  { name: "Webby Awards — Honoree", year: "2024" },
  { name: "Red Dot — Brand Design", year: "2023" },
];

export default function AgencyAwards() {
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
      className="bg-white rounded-[32px] px-6 md:px-16 py-24 border border-black/[0.04]"
    >
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-10">
        <div>
          <span className="text-xs tracking-widest uppercase text-black/40 font-medium">
            RECOGNITION
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-black text-[#141414] leading-[1.05] mt-6">
            Awards &amp;
            <br />
            Press
          </h2>
        </div>

        <div className="flex flex-col gap-6">
          {awards.map((a) => (
            <div
              key={a.name}
              className="flex items-center gap-4 border-b border-black/5 pb-4 last:border-0 last:pb-0"
            >
              <CircleCheck className="w-5 h-5 shrink-0" style={{ color: "#19B64F" }} />
              <span className="text-sm md:text-base text-black/70 flex-1">
                {a.name}
              </span>
              <span className="text-xs font-medium text-black/30">{a.year}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
