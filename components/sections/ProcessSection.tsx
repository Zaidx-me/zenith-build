"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const steps = [
  { num: "01", title: "Discover", desc: "We immerse in your business — goals, audience, competition, and constraints to define the strategy." },
  { num: "02", title: "Research", desc: "Deep user research and market analysis to uncover opportunities and validate assumptions." },
  { num: "03", title: "Design", desc: "Iterative prototyping and visual design until the experience feels right across every touchpoint." },
  { num: "04", title: "Build", desc: "Modular, maintainable engineering with continuous integration, code review, and testing." },
  { num: "05", title: "Launch", desc: "Staged rollouts, performance monitoring, and post-launch support for a smooth go-live." },
  { num: "06", title: "Grow", desc: "Data-driven optimization and iterative feature development to scale what works." },
];

export default function ProcessSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const lineScale = useTransform(scrollYProgress, [0, 0.6], [0, 1]);

  return (
    <section id="process" ref={ref} className="px-6 md:px-10 py-24 md:py-32 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <span className="section-label">
          HOW WE WORK
        </span>
        <h2 className="section-heading mt-4 mb-16 md:mb-20">
          Process
        </h2>

        {/* Timeline bar */}
        <div className="relative h-1 bg-white/[0.06] rounded-full mb-16">
          <motion.div
            className="absolute top-0 left-0 h-full rounded-full"
            style={{ scaleX: lineScale, transformOrigin: "left", background: "rgba(215, 226, 234, 0.3)" }}
          />
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-8">
          {steps.map((s, i) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.12, duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <span className="text-[#D7E2EA] font-black text-4xl md:text-5xl leading-none">
                {s.num}
              </span>
              <h3 className="text-[#D7E2EA] font-semibold text-base mt-3 mb-2">{s.title}</h3>
              <p className="text-[#D7E2EA]/60 text-sm leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
