"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Play, ArrowUpRight } from "lucide-react";

export default function Hero() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const cardScale = useTransform(scrollYProgress, [0, 0.15], [0.92, 1]);
  const cardY = useTransform(scrollYProgress, [0, 0.15], [40, 0]);

  const stagger = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    }),
  };

  return (
    <motion.div
      ref={sectionRef}
      style={{ scale: cardScale, y: cardY }}
      className="relative bg-[#141414] rounded-[32px] overflow-hidden px-6 md:px-16 pt-32 pb-0 border border-white/[0.04]"
    >
      {/* Subtitle */}
      <motion.p
        custom={0}
        variants={stagger}
        initial="hidden"
        animate="visible"
        className="text-xs tracking-widest uppercase font-medium mb-4"
        style={{ color: "#19B64F" }}
      >
        Creative Digital Agency
      </motion.p>

      {/* Headline */}
      <div className="relative">
        {["DESIGN", "DEVELOP", "GROW"].map((word, i) => (
          <motion.div
            key={word}
            custom={i + 1}
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="font-display font-black uppercase text-white leading-[0.85] tracking-tighter select-none"
            style={{
              fontSize: "clamp(3rem, 13vw, 8.5rem)",
            }}
          >
            {word}
          </motion.div>
        ))}

        <motion.p
          custom={4}
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="absolute right-0 top-1/2 -translate-y-1/2 max-w-[200px] md:max-w-xs text-white/60 text-xs md:text-sm leading-relaxed hidden md:block"
        >
          We craft digital experiences that blend bold creativity with strategic thinking — helping brands stand out and scale.
        </motion.p>
      </div>

      {/* CTA + Showreel */}
      <motion.div
        custom={5}
        variants={stagger}
        initial="hidden"
        animate="visible"
        className="flex items-center gap-6 mt-10"
      >
        <a
          href="#work"
          className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold rounded-full px-6 py-3 text-white transition-transform hover:scale-105"
          style={{ backgroundColor: "#5050F7" }}
        >
          VIEW OUR WORK
          <ArrowUpRight className="w-3.5 h-3.5" />
        </a>
        <span className="text-white/30 text-xs uppercase tracking-widest">Showreel 2025</span>
      </motion.div>

      {/* Showreel Area */}
      <motion.div
        custom={6}
        variants={stagger}
        initial="hidden"
        animate="visible"
        className="relative mt-16 md:mt-20 rounded-t-[32px] overflow-hidden aspect-[16/7] bg-gradient-to-br from-[#5050F7]/20 to-[#19B64F]/20 border border-white/[0.06] border-b-0"
      >
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <button className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-lg hover:scale-105 transition-transform">
            <Play className="w-6 h-6 text-[#141414] ml-0.5" />
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}
