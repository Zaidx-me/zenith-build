"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Folder from "@/components/ui/Folder";

const steps = [
  { num: "01", title: "Discover", desc: "We immerse in your business — goals, audience, competition, and constraints to define the strategy." },
  { num: "02", title: "Research", desc: "Deep user research and market analysis to uncover opportunities and validate assumptions." },
  { num: "03", title: "Design", desc: "Iterative prototyping and visual design until the experience feels right across every touchpoint." },
  { num: "04", title: "Build", desc: "Modular, maintainable engineering with continuous integration, code review, and testing." },
  { num: "05", title: "Launch", desc: "Staged rollouts, performance monitoring, and post-launch support for a smooth go-live." },
  { num: "06", title: "Grow", desc: "Data-driven optimization and iterative feature development to scale what works." },
];

const folderColors = ["#D7E2EA", "#a0aab4", "#8896a4", "#D7E2EA", "#a0aab4", "#8896a4"];

export default function ProcessSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const lineScale = useTransform(scrollYProgress, [0, 0.6], [0, 1]);

  return (
    <section id="process" ref={ref} className="px-6 md:px-10 py-14 md:py-32">
      <div className="max-w-6xl mx-auto">
        <div className="text-center">
          <span className="section-label">
            HOW WE WORK
          </span>
          <h2 className="section-heading mt-4 mb-16 md:mb-20">
            Process
          </h2>
        </div>

        {/* Timeline bar */}
        <div className="relative h-1 bg-white/[0.06] rounded-full mb-16">
          <motion.div
            className="absolute top-0 left-0 h-full rounded-full"
            style={{ scaleX: lineScale, transformOrigin: "left", background: "rgba(215, 226, 234, 0.3)" }}
          />
        </div>

        {/* Steps grid */}
        <div
          className="grid grid-cols-2 lg:grid-cols-3 mt-16 md:mt-20 gap-x-4 gap-y-8 sm:gap-x-6 sm:gap-y-10 lg:gap-12"
        >
          {steps.map((s, i) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.12, duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
              className="flex flex-col items-center text-center min-w-0 w-[140px] sm:w-[160px] lg:w-auto"
            >
              <div className="mb-3 md:mb-4 mt-4 sm:mt-6 flex justify-center w-full">
                <div className="scale-[0.8] sm:scale-100 lg:scale-110">
                <Folder
                  size={1.4}
                  color={folderColors[i]}
                  items={[
                    <div key="p1" className="w-full h-full flex items-center justify-center p-2">
                      <span className="text-[10px] font-bold text-gray-800">{s.num}</span>
                    </div>,
                    <div key="p2" className="w-full h-full flex items-center justify-center p-2">
                      <span className="text-[9px] font-semibold text-gray-700">{s.title}</span>
                    </div>,
                    <div key="p3" className="w-full h-full flex items-center justify-center p-1">
                      <span className="text-[7px] text-gray-600 leading-tight text-center">{s.desc}</span>
                    </div>,
                  ]}
                />
                </div>
              </div>
              <span className="text-[#D7E2EA] font-black text-lg md:text-3xl leading-none mt-1">
                {s.num}
              </span>
              <h3 className="text-[#D7E2EA] font-semibold text-xs md:text-sm mt-1.5">{s.title}</h3>
              <p className="text-[#D7E2EA]/50 text-[10px] md:text-xs leading-relaxed mt-1 hidden md:block">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
