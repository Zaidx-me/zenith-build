"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";

const ease = [0.25, 0.1, 0.25, 1] as const;

const fadeUp = (delay: number, y: number = 30) => ({
  initial: { opacity: 0, y },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease },
});

const stats = [
  { number: "13+", label: "Projects Delivered" },
  { number: "3+", label: "Years Experience" },
  { number: "7+", label: "Industries Served" },
];

const marqueeItems = [
  "React", "Next.js", "TypeScript", "Node.js", "React Native",
  "PostgreSQL", "Docker", "GraphQL", "AWS", "Tailwind CSS",
  "NestJS", "Prisma", "Redis", "Figma", "Flutter",
];

export default function HeroSection() {
  const words = ["ZENITH", "BUILD"];
  const repeatedItems = [...marqueeItems, ...marqueeItems, ...marqueeItems];

  return (
    <section className="min-h-svh flex flex-col overflow-x-clip relative pt-20 pb-10">

      {/* Center content */}
      <div className="flex-1 flex flex-col items-center justify-start pt-2 px-6 md:px-10 relative z-10">
        <div className="max-w-[900px] w-full">

          {/* Main title */}
          <div className="overflow-visible mb-4 w-full">
            <motion.h1
              className="hero-title flex flex-col items-start"
              initial={{ opacity: 0, y: 60, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              {words.map((word, i) => (
                <motion.span
                  key={word}
                  initial={{ opacity: 0, y: 60 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.15, ease }}
                  className={i === 1 ? "text-[#D7E2EA]/80" : ""}
                >
                  {word}
                </motion.span>
              ))}
            </motion.h1>
          </div>

          {/* Subtitle */}
          <motion.p
            {...fadeUp(0.65, 20)}
            className="text-[#D7E2EA]/70 font-light max-w-lg mt-2 text-sm md:text-base leading-relaxed"
          >
            We craft digital experiences that blend bold creativity with strategic thinking.
            <span className="text-[#D7E2EA] font-medium"> From startups to enterprises.</span>
          </motion.p>

          {/* CTA Group */}
          <motion.div {...fadeUp(0.8, 20)} className="flex items-center gap-4 mt-10 flex-wrap">
            <a
              href="#work"
              className="rounded-full px-8 py-3 md:px-10 md:py-3.5 bg-[#D7E2EA] text-[#0C0C0C] font-medium uppercase tracking-widest text-xs sm:text-sm flex items-center gap-2 hover:bg-[#D7E2EA]/90 transition-all"
            >
              View Work
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#contact"
              className="rounded-full px-8 py-3 md:px-10 md:py-3.5 text-[#D7E2EA]/60 font-medium uppercase tracking-widest text-xs sm:text-sm border border-white/[0.08] bg-white/[0.02] backdrop-blur-xl hover:bg-white/[0.06] hover:text-[#D7E2EA] transition-all"
            >
              Hire Our Developers
            </a>
          </motion.div>

          {/* Stats strip */}
          <motion.div
            {...fadeUp(1.0, 15)}
            className="flex items-center gap-8 mt-8 pt-8 border-t border-white/[0.08] flex-wrap"
          >
            {stats.map((stat, i) => (
              <div key={stat.label} className="flex items-center gap-8">
                <div className="flex flex-col gap-1">
                  <span className="font-bold text-xl md:text-2xl text-[#D7E2EA] leading-none">
                    {stat.number}
                  </span>
                  <span className="text-[0.65rem] uppercase tracking-[0.1em] text-[#D7E2EA]/40">
                    {stat.label}
                  </span>
                </div>
                {i < stats.length - 1 && (
                  <div className="w-px h-8 bg-white/[0.08]" />
                )}
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Straight marquee */}
      <FadeIn y={20} delay={1.1} className="relative z-10 mt-auto pb-6">
        <div className="overflow-hidden py-5 [mask-image:linear-gradient(to_right,transparent_0%,black_10%,black_90%,transparent_100%)]">
          <motion.div
            className="flex gap-12 whitespace-nowrap"
            animate={{ x: ["0%", "-33.333%"] }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          >
            {repeatedItems.map((item, i) => (
              <span
                key={`${item}-${i}`}
                className="text-2xl md:text-3xl font-bold uppercase tracking-[0.25em] text-[#D7E2EA]/25 shrink-0"
              >
                {item}
                <span className="ml-12 text-[#D7E2EA]/10">•</span>
              </span>
            ))}
          </motion.div>
        </div>
      </FadeIn>

    </section>
  );
}
