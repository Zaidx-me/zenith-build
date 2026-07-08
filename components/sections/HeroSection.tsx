"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const ease = [0.25, 0.1, 0.25, 1] as const;

const fadeUp = (delay: number, y: number = 30) => ({
  initial: { opacity: 0, y },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease },
});

export default function HeroSection() {
  const words = ["ZENITH", "BUILD"];

  return (
    <section className="h-svh flex flex-col overflow-x-clip relative">

      {/* Center content */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 md:px-10 relative z-10">
        <div className="overflow-visible mb-4 w-full flex justify-center">
          <motion.h1
            className="hero-title text-center flex flex-col items-center"
            initial={{ opacity: 0, y: 60, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            {words.map((word, i) => (
              <motion.span
                key={word}
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.15, ease: [0.25, 0.1, 0.25, 1] }}
              >
                {word}
              </motion.span>
            ))}
          </motion.h1>
        </div>

        <motion.p
          {...fadeUp(0.65, 20)}
          className="text-[#D7E2EA]/70 font-light text-center max-w-lg mt-2 text-sm md:text-base leading-relaxed"
        >
          We craft digital experiences that blend bold creativity with strategic thinking.
        </motion.p>

        <motion.div {...fadeUp(0.8, 20)} className="flex items-center gap-4 mt-10">
          <a
            href="#work"
            className="rounded-full px-8 py-3 md:px-10 md:py-3.5 text-[#D7E2EA] font-medium uppercase tracking-widest text-xs sm:text-sm flex items-center gap-2 border border-white/[0.08] bg-white/[0.04] backdrop-blur-xl hover:bg-white/[0.08] hover:border-white/[0.15] transition-all"
          >
            View Work
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="#contact"
            className="rounded-full px-8 py-3 md:px-10 md:py-3.5 text-[#D7E2EA]/60 font-medium uppercase tracking-widest text-xs sm:text-sm border border-white/[0.08] bg-white/[0.02] backdrop-blur-xl hover:bg-white/[0.06] hover:text-[#D7E2EA] transition-all"
          >
            Get in Touch
          </a>
        </motion.div>
      </div>
    </section>
  );
}
