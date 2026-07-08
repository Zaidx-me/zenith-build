"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const words = [
  "DESIGN",
  "DEVELOP",
  "SCALE",
  "LAUNCH",
  "ITERATE",
  "INNOVATE",
];

export default function WordMorph() {
  const [currentWord, setCurrentWord] = useState(words[0]);
  const [index, setIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const cardScale = useTransform(scrollYProgress, [0, 0.15], [0.92, 1]);
  const cardY = useTransform(scrollYProgress, [0, 0.15], [40, 0]);

  useEffect(() => {
    const interval = setInterval(() => {
      const next = (index + 1) % words.length;
      setIndex(next);
      setCurrentWord(words[next]);
    }, 1800);
    return () => clearInterval(interval);
  }, [index]);

  return (
    <motion.section
      ref={sectionRef}
      style={{ scale: cardScale, y: cardY }}
      className="bg-[#1C1C1C] rounded-[32px] px-6 md:px-16 py-24 border border-white/[0.06] relative overflow-hidden"
    >
      {/* Background gradient flare */}
      <div
        className="absolute -bottom-32 -left-32 w-64 h-64 rounded-full blur-[100px] opacity-20 pointer-events-none"
        style={{ backgroundColor: "#19B64F" }}
      />

      <div className="flex flex-col items-center text-center gap-4 relative z-10">
        <span className="text-xs uppercase tracking-widest font-medium text-white/30">
          WHAT WE DO
        </span>
        <h2 className="font-display font-black uppercase text-white text-5xl md:text-7xl leading-[1.1] tracking-tighter">
          WE
          <motion.span
            key={currentWord}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="inline-block ml-3 px-3 py-1 rounded-lg"
            style={{ backgroundColor: "#19B64F", color: "#141414" }}
          >
            {currentWord}
          </motion.span>
        </h2>
        <p className="text-white/40 text-sm max-w-md mt-4">
          End-to-end product development from concept to launch and beyond.
        </p>
      </div>
    </motion.section>
  );
}
