"use client";

import FadeIn from "@/components/ui/FadeIn";
import CountUp from "@/components/ui/CountUp";

const stats = [
  { value: 50, suffix: "+", label: "Projects" },
  { value: 7, suffix: "+", label: "Years" },
  { value: 24, suffix: "", label: "Team" },
  { value: 12, suffix: "+", label: "Industries" },
];

export default function AboutSection() {
  return (
    <section id="about" className="px-6 md:px-10 py-24 md:py-32">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
        {/* Left */}
        <FadeIn x={-40}>
          <span className="section-label">
            ABOUT US
          </span>
          <h2 className="section-heading mt-4 mb-16 md:mb-20">
            We build
            <br />
            digital
            <br />
            excellence
          </h2>
          <p className="text-[#D7E2EA]/80 font-light leading-relaxed mt-6 max-w-md text-sm md:text-base">
            From startups to enterprises, we craft digital products that drive
            real business outcomes — combining deep technical expertise with
            sharp design thinking.
          </p>
        </FadeIn>

        {/* Right — Stats */}
        <FadeIn x={40}>
          <div className="grid grid-cols-2 gap-x-12 gap-y-10">
            {stats.map((s) => (
              <div key={s.label}>
                <span className="text-[#D7E2EA] font-black leading-none text-5xl md:text-6xl lg:text-7xl">
                  <CountUp end={s.value} suffix={s.suffix} />
                </span>
                <p className="text-[#D7E2EA]/40 text-xs uppercase tracking-widest mt-2 font-medium">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
