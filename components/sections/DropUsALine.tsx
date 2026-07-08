"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import RotatingBadge from "../ui/RotatingBadge";

export default function DropUsALine() {
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
      id="contact"
      style={{ scale: cardScale, y: cardY }}
      className="bg-[#1C1C1C] rounded-[32px] px-6 md:px-16 py-24 border border-white/[0.06] relative overflow-hidden"
    >
      {/* Background gradient flare */}
      <div
        className="absolute -top-40 -right-40 w-80 h-80 rounded-full blur-[120px] opacity-30 pointer-events-none"
        style={{ backgroundColor: "#5050F7" }}
      />

      <div className="relative z-10 flex flex-col items-center text-center gap-8">
        <p className="text-xs uppercase tracking-widest font-medium text-white/40">
          GET IN TOUCH
        </p>

        <h2 className="font-display font-black text-white leading-[1] tracking-tighter select-none text-7xl md:text-[10rem]">
          DROP&nbsp;US
          <br />
          A&nbsp;LINE
        </h2>

        <RotatingBadge />

        <a
          href="mailto:hello@zenithbuild.com"
          className="inline-flex items-center gap-3 rounded-full px-8 py-4 text-sm uppercase tracking-widest font-semibold text-white transition-transform hover:scale-105"
          style={{ backgroundColor: "#0BB044" }}
        >
          HELLO@ZENITHBUILD.COM
          <ArrowUpRight className="w-4 h-4" />
        </a>
      </div>
    </motion.section>
  );
}
