"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { ArrowUpRight, X } from "lucide-react";

const projects = [
  {
    id: "stitch",
    title: "Stitch",
    tagline: "E-Commerce Redesign",
    desc: "A complete overhaul of the Stitch shopping experience. We redesigned the product catalogue, streamlined checkout, and built a personalization engine that boosted revenue 2.4×.",
    color: "#5050F7",
    stat: "2.4× Revenue",
  },
  {
    id: "helix",
    title: "Helix",
    tagline: "Healthcare Dashboard",
    desc: "An all-in-one clinical dashboard for Helix Health. We reimagined the data visualization layer, reducing clinician time-to-insight by 58% and earning a Medical Design Excellence award.",
    color: "#19B64F",
    stat: "58% Faster",
  },
  {
    id: "nova",
    title: "Nova",
    tagline: "Brand Launch Platform",
    desc: "Nova needed a launch platform that matched its ambition. We built a high-performance marketing site with immersive WebGL interactions, serving 1M+ visitors in the first month.",
    color: "#0BB044",
    stat: "1M+ Visitors",
  },
];

export default function ProjectsSection() {
  const [selected, setSelected] = useState<string | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const cardScale = useTransform(scrollYProgress, [0, 0.15], [0.92, 1]);
  const cardY = useTransform(scrollYProgress, [0, 0.15], [40, 0]);

  const active = projects.find((p) => p.id === selected);

  return (
    <motion.section
      ref={sectionRef}
      style={{ scale: cardScale, y: cardY }}
      className="bg-[#1C1C1C] rounded-[32px] px-6 md:px-16 py-24 border border-white/[0.06]"
    >
      <span className="text-xs tracking-widest uppercase text-white/30 font-medium">
        PORTFOLIO
      </span>
      <h2 className="text-4xl md:text-5xl font-display font-black text-white leading-[1.05] mt-4">
        Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-14">
        {projects.map((p) => (
          <button
            key={p.id}
            onClick={() => setSelected(p.id === selected ? null : p.id)}
            className="group text-left p-8 rounded-2xl border border-white/10 hover:border-white/20 transition-all"
          >
            <div className="flex items-center justify-between mb-4">
              <span
                className="text-xs uppercase tracking-widest font-medium"
                style={{ color: p.color }}
              >
                {p.tagline}
              </span>
              <ArrowUpRight className="w-4 h-4 text-white/30 group-hover:text-white/60 transition-colors" />
            </div>
            <h3 className="text-2xl font-display font-black text-white">{p.title}</h3>
            <p
              className="text-lg font-display font-black mt-2"
              style={{ color: p.color }}
            >
              {p.stat}
            </p>
          </button>
        ))}
      </div>

      {/* Detail panel */}
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="mt-6 p-8 rounded-2xl border border-white/10 bg-white/5">
              <div className="flex items-start justify-between">
                <div>
                  <span
                    className="text-xs uppercase tracking-widest font-medium"
                    style={{ color: active.color }}
                  >
                    {active.tagline}
                  </span>
                  <h4 className="text-xl font-semibold text-white mt-1">
                    {active.title}
                  </h4>
                </div>
                <button
                  onClick={() => setSelected(null)}
                  className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10"
                >
                  <X className="w-4 h-4 text-white/60" />
                </button>
              </div>
              <p className="text-sm text-white/50 leading-relaxed mt-4 max-w-2xl">
                {active.desc}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
}
