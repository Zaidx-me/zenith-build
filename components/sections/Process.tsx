"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const steps = [
  {
    step: "01",
    title: "Discover",
    desc: "We immerse ourselves in your business — goals, audience, competition, and constraints — to define the strategy.",
    color: "#5050F7",
  },
  {
    step: "02",
    title: "Design",
    desc: "We prototype and iterate on the user experience, visual direction, and interaction model until it feels right.",
    color: "#19B64F",
  },
  {
    step: "03",
    title: "Build",
    desc: "Our engineers develop the product using modular, maintainable code with continuous integration and review.",
    color: "#0BB044",
  },
  {
    step: "04",
    title: "Launch & Grow",
    desc: "We deploy, monitor, and optimize — using real data to guide improvements and scale what works.",
    color: "#5050F7",
  },
];

export default function Process() {
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
      id="process"
      style={{ scale: cardScale, y: cardY }}
      className="bg-[#1C1C1C] rounded-[32px] px-6 md:px-16 py-24 border border-white/[0.06] relative overflow-hidden"
    >
      {/* Background glow */}
      <div
        className="absolute -top-40 -right-40 w-80 h-80 rounded-full blur-[120px] opacity-15 pointer-events-none"
        style={{ backgroundColor: "#5050F7" }}
      />

      <span className="text-xs tracking-widest uppercase text-white/30 font-medium relative z-10">
        HOW WE WORK
      </span>
      <h2 className="text-4xl md:text-5xl font-display font-black text-white leading-[1.05] mt-4 relative z-10">
        Process
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-14 relative z-10">
        {steps.map((s) => (
          <div key={s.step} className="border-t border-white/10 pt-6 group hover:border-white/20 transition-colors">
            <span className="text-2xl font-display font-black" style={{ color: s.color }}>
              {s.step}
            </span>
            <h3 className="text-lg font-semibold text-white mt-3 mb-2">{s.title}</h3>
            <p className="text-sm text-white/40 leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>
    </motion.section>
  );
}
