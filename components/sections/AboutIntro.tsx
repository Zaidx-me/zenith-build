"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const words = [
  { text: "We", dark: true },
  { text: "are", dark: true },
  { text: "Zenith", dark: false },
  { text: "Build", dark: false },
  { text: "—", dark: true },
  { text: "a", dark: true },
  { text: "creative", dark: false },
  { text: "digital", dark: false },
  { text: "studio", dark: false },
  { text: "that", dark: true },
  { text: "partners", dark: false },
  { text: "with", dark: true },
  { text: "ambitious", dark: false },
  { text: "brands", dark: false },
  { text: "to", dark: true },
  { text: "design,", dark: false },
  { text: "build,", dark: false },
  { text: "and", dark: true },
  { text: "scale", dark: false },
  { text: "products", dark: false },
  { text: "that", dark: true },
  { text: "people", dark: true },
  { text: "love.", dark: true },
  { text: "We", dark: true },
  { text: "blend", dark: false },
  { text: "strategy,", dark: false },
  { text: "design,", dark: false },
  { text: "and", dark: true },
  { text: "engineering", dark: false },
  { text: "to", dark: true },
  { text: "deliver", dark: true },
  { text: "exceptional", dark: false },
  { text: "digital", dark: false },
  { text: "experiences.", dark: false },
];

const sentenceVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.03 },
  },
};

const wordVariants = {
  hidden: { color: "rgba(0,0,0,0.25)" },
  visible: { color: "rgba(0,0,0,1)" },
};

export default function AboutIntro() {
  return (
    <section className="bg-white rounded-[32px] px-6 md:px-16 py-24 border border-black/[0.04] relative overflow-hidden">
      {/* Top brand accent */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#5050F7] via-[#19B64F] to-[#0BB044]" />
      <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-10">
        <div className="flex items-start gap-6">
          <a
            href="#studio"
            className="rounded-full px-6 py-3 text-xs uppercase tracking-widest text-white flex items-center gap-2 w-fit shrink-0 hover:scale-105 transition-transform"
            style={{ backgroundColor: "#5050F7" }}
          >
            ABOUT THE STUDIO
            <ArrowUpRight className="w-4 h-4" />
          </a>
          <div className="hidden md:block border-l border-black/10 h-full" />
        </div>

        <div>
          <span className="text-xs tracking-widest uppercase text-black/40 font-medium">
            STUDIO
          </span>
          <motion.p
            variants={sentenceVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="text-3xl md:text-4xl leading-snug font-normal mt-6"
          >
            {words.map((w, i) => (
              <motion.span
                key={i}
                variants={wordVariants}
                className="inline"
                style={{
                  color: w.dark ? "#141414" : "rgba(0,0,0,0.3)",
                }}
              >
                {w.text}{" "}
              </motion.span>
            ))}
          </motion.p>
        </div>
      </div>
    </section>
  );
}
