"use client";

import { Palette, Code, Smartphone, Database, BarChart, Globe } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";
import GlassCard from "@/components/ui/GlassCard";

const services = [
  { icon: Palette, title: "UI/UX Design", desc: "User-centered interfaces that balance aesthetics with usability — from wireframes to polished prototypes." },
  { icon: Code, title: "Web Development", desc: "Fast, accessible, and scalable web applications built with modern stacks like Next.js, React, and Node.js." },
  { icon: Smartphone, title: "Mobile Apps", desc: "Cross-platform and native mobile experiences for iOS and Android using React Native and Flutter." },
  { icon: Database, title: "Backend & APIs", desc: "Robust server-side architecture, RESTful and GraphQL APIs, cloud infrastructure, and database design." },
  { icon: BarChart, title: "Growth Strategy", desc: "Data-driven growth audits, conversion optimization, and analytics setup to help your product scale." },
  { icon: Globe, title: "Brand Design", desc: "Visual identity systems, brand guidelines, and design assets that communicate your story across every touchpoint." },
];

export default function ServicesSection() {
  return (
    <section id="services" className="px-6 md:px-10 py-24 md:py-32">
      <FadeIn y={30} className="text-center mb-16 md:mb-20">
        <span className="section-label">
          WHAT WE DO
        </span>
        <h2 className="section-heading mt-4 mb-16 md:mb-20">
          Services
        </h2>
      </FadeIn>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
        {services.map((s, i) => {
          const Icon = s.icon;
          return (
            <FadeIn key={s.title} delay={i * 0.08} y={20}>
              <GlassCard className="p-8">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-5 border border-white/[0.08] bg-white/[0.04] backdrop-blur-xl">
                  <Icon className="w-5 h-5 text-[#D7E2EA]" />
                </div>
                <h3 className="text-lg font-semibold text-[#D7E2EA] mb-2">{s.title}</h3>
                <p className="text-sm text-[#D7E2EA]/70 leading-relaxed">{s.desc}</p>
              </GlassCard>
            </FadeIn>
          );
        })}
      </div>
    </section>
  );
}
