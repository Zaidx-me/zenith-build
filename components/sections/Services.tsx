"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Palette, Code, BarChart, Megaphone, Smartphone, Database } from "lucide-react";

const services = [
  {
    icon: Palette,
    title: "UI/UX Design",
    desc: "User-centered interfaces that balance aesthetics with usability — from wireframes to polished prototypes.",
    color: "#5050F7",
  },
  {
    icon: Code,
    title: "Web Development",
    desc: "Fast, accessible, and scalable web applications built with modern stacks like Next.js, React, and Node.js.",
    color: "#19B64F",
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    desc: "Cross-platform and native mobile experiences for iOS and Android using React Native and Flutter.",
    color: "#0BB044",
  },
  {
    icon: Database,
    title: "Backend & APIs",
    desc: "Robust server-side architecture, RESTful and GraphQL APIs, cloud infrastructure, and database design.",
    color: "#5050F7",
  },
  {
    icon: BarChart,
    title: "Growth Strategy",
    desc: "Data-driven growth audits, conversion optimization, and analytics setup to help your product scale.",
    color: "#19B64F",
  },
  {
    icon: Megaphone,
    title: "Brand Design",
    desc: "Visual identity systems, brand guidelines, and design assets that communicate your story across every touchpoint.",
    color: "#0BB044",
  },
];

export default function Services() {
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
      id="services"
      style={{ scale: cardScale, y: cardY }}
      className="bg-white rounded-[32px] px-6 md:px-16 py-24 border border-black/[0.04]"
    >
      <span className="text-xs tracking-widest uppercase text-black/40 font-medium">
        WHAT WE OFFER
      </span>
      <h2 className="text-4xl md:text-5xl font-display font-black text-[#141414] leading-[1.05] mt-4">
        Services
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">
        {services.map((s) => {
          const Icon = s.icon;
          return (
            <div
              key={s.title}
              className="group p-8 rounded-2xl border border-black/5 hover:border-black/10 transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center mb-5"
                style={{ backgroundColor: s.color }}
              >
                <Icon className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-[#141414] mb-2">
                {s.title}
              </h3>
              <p className="text-sm text-black/50 leading-relaxed">{s.desc}</p>
            </div>
          );
        })}
      </div>
    </motion.section>
  );
}
