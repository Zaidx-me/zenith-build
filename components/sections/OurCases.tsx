"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const cases = [
  {
    title: "Stitch — E-Commerce Redesign",
    metric: "2.4× Revenue",
    tag: "UX/UI + Frontend",
    color: "#5050F7",
  },
  {
    title: "Helix — Healthcare Dashboard",
    metric: "58% Faster Workflows",
    tag: "Full-Stack",
    color: "#19B64F",
  },
  {
    title: "Pulse — Fintech Mobile App",
    metric: "4.8★ App Store",
    tag: "Mobile + Backend",
    color: "#0BB044",
  },
  {
    title: "Nova — Brand Launch Platform",
    metric: "1M+ Users",
    tag: "Design + Engineering",
    color: "#5050F7",
  },
];

export default function OurCases() {
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
      id="work"
      style={{ scale: cardScale, y: cardY }}
      className="bg-[#1C1C1C] rounded-[32px] px-6 md:px-16 py-24 border border-white/[0.06]"
    >
      <span className="text-xs tracking-widest uppercase font-medium text-white/30">
        SELECTED WORK
      </span>

      {cases.map((c, i) => (
        <div
          key={c.title}
          className="group relative flex flex-col md:flex-row md:items-center justify-between border-t border-white/10 pt-10 pb-10 mt-10 cursor-pointer transition-all hover:border-white/20 hover:pl-4"
        >
          <div className="flex-1">
            <span
              className="text-xs uppercase tracking-widest font-medium mb-2 block"
              style={{ color: c.color }}
            >
              {c.tag}
            </span>
            <h3 className="text-2xl md:text-3xl font-semibold text-white">
              {c.title}
            </h3>
          </div>
          <div className="flex items-center gap-6 mt-4 md:mt-0">
            <span
              className="text-2xl md:text-3xl font-display font-black"
              style={{ color: c.color }}
            >
              {c.metric}
            </span>
            <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white/10 transition-colors shrink-0">
              <ArrowUpRight className="w-4 h-4 text-white/60" />
            </div>
          </div>
        </div>
      ))}
    </motion.section>
  );
}
