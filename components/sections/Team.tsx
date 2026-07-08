"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Globe, MessageCircle } from "lucide-react";

const members = [
  {
    name: "Alex Chen",
    role: "Creative Director",
    initials: "AC",
    color: "#5050F7",
  },
  {
    name: "Maya Patel",
    role: "Lead Engineer",
    initials: "MP",
    color: "#19B64F",
  },
  {
    name: "Samir Khan",
    role: "Product Designer",
    initials: "SK",
    color: "#0BB044",
  },
  {
    name: "Elena Voss",
    role: "Strategy Lead",
    initials: "EV",
    color: "#5050F7",
  },
];

export default function Team() {
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
      style={{ scale: cardScale, y: cardY }}
      className="bg-white rounded-[32px] px-6 md:px-16 py-24 border border-black/[0.04]"
    >
      <span className="text-xs tracking-widest uppercase text-black/40 font-medium">
        THE PEOPLE
      </span>
      <h2 className="text-4xl md:text-5xl font-display font-black text-[#141414] leading-[1.05] mt-4">
        Team
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
        {members.map((m) => (
          <div
            key={m.name}
            className="group p-8 rounded-2xl border border-black/5 hover:border-black/10 transition-all hover:-translate-y-1 hover:shadow-lg"
          >
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center mb-5 text-white text-lg font-bold"
              style={{ backgroundColor: m.color }}
            >
              {m.initials}
            </div>
            <h3 className="text-base font-semibold text-[#141414]">{m.name}</h3>
            <p className="text-xs text-black/40 uppercase tracking-widest mt-1">
              {m.role}
            </p>
            <div className="flex gap-2 mt-4">
              <Globe className="w-4 h-4 text-black/20 hover:text-black/50 transition-colors cursor-pointer" />
              <MessageCircle className="w-4 h-4 text-black/20 hover:text-black/50 transition-colors cursor-pointer" />
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
}
