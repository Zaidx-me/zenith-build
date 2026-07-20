"use client";

import FadeIn from "@/components/ui/FadeIn";
import CountUp from "@/components/ui/CountUp";

const stats = [
  { value: 13, suffix: "+", label: "Projects" },
  { value: 3, suffix: "+", label: "Years" },
  { value: 7, suffix: "+", label: "Industries" },
];

export default function AboutSection() {
  return (
    <section id="about" className="px-6 md:px-10 py-14 md:py-32">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <FadeIn y={30}>
          <span className="section-label">
            ABOUT US
          </span>
          <h2 className="section-heading mt-4 mb-16 md:mb-20">
            We build
            <br />
            digital{" "}
            <span className="text-[#D7E2EA]/70">excellence</span>
          </h2>
        </FadeIn>

        {/* Problem grid — stats + description */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 md:mb-24">
          <FadeIn y={30} delay={0.1}>
            <div className="h-full p-8 rounded-2xl border border-white/[0.08] bg-white/[0.04] backdrop-blur-xl hover:bg-white/[0.08] hover:-translate-y-1 transition-all duration-300">
              <p className="text-[#D7E2EA]/70 text-sm leading-relaxed">
                From startups to enterprises, we craft digital products that drive
                real business outcomes — combining deep technical expertise with
                sharp design thinking.
              </p>
            </div>
          </FadeIn>

          {stats.map((s, i) => (
            <FadeIn key={s.label} y={30} delay={0.15 + i * 0.1}>
              <div className="h-full p-8 rounded-2xl border border-white/[0.08] bg-white/[0.04] backdrop-blur-xl hover:bg-white/[0.08] hover:-translate-y-1 transition-all duration-300">
                <span className="block text-[#D7E2EA]/50 text-xs uppercase tracking-[0.15em] font-medium mb-4">
                  {s.label}
                </span>
                <span className="text-[#D7E2EA] font-black leading-none text-5xl md:text-6xl lg:text-7xl">
                  <CountUp end={s.value} suffix={s.suffix} />
                </span>
              </div>
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  );
}
