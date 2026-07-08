"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const stats = [
  { value: "7+", label: "Years in Business" },
  { value: "50+", label: "Projects Delivered" },
  { value: "24", label: "Team Members" },
  { value: "12+", label: "Industries Served" },
];

export default function AboutDetail() {
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
      id="studio"
      style={{ scale: cardScale, y: cardY }}
      className="bg-white rounded-[32px] px-6 md:px-16 py-24 border border-black/[0.04]"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
        {/* Left — mission */}
        <div>
          <span className="text-xs tracking-widest uppercase text-black/40 font-medium">
            OUR MISSION
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-black leading-[1.05] mt-6 text-[#141414]">
            We help brands
            <br />
            <span
              className="inline-block mt-2 px-3 py-1 rounded-lg leading-tight"
              style={{ backgroundColor: "#19B64F", color: "#141414" }}
            >
              move faster.
            </span>
          </h2>
          <p className="text-black/60 leading-relaxed mt-8 text-sm md:text-base max-w-md">
            From startups to enterprises, we build digital products that drive
            real business outcomes. Our team combines deep technical expertise
            with sharp design thinking to deliver work that performs.
          </p>
        </div>

        {/* Right — stats */}
        <div className="grid grid-cols-2 gap-x-12 gap-y-10">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="text-4xl md:text-6xl font-display font-black text-[#141414] leading-none">
                {s.value}
              </p>
              <p className="text-xs uppercase tracking-widest text-black/40 mt-2 font-medium">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
