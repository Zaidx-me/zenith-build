"use client";

import { useState } from "react";
import FadeIn from "@/components/ui/FadeIn";

const categories = ["All", "Mobile Apps", "API", "Web "];

const projects = [
  {
    id: "applicator",
    title: "Applicator",
    cat: "Mobile Apps",
    tag: "React Native",
    desc: "AI-powered job application assistant for Android. Paste WhatsApp messages and let AI extract opportunities, generate cover letters from your CV, and open Gmail pre-filled — all on-device.",
    href: "https://applicator.netlify.app",
  },
  {
    id: "maktaba",
    title: "Maktaba",
    cat: "Mobile Apps",
    tag: "Expo",
    desc: "Free Urdu book reading app with 3,000+ local books. Fully offline with instant search, light/dark mode, personal library tracking, notes, and ratings — no sign-up required.",
    href: "https://github.com/Zaidx-me/maktaba",
  },
  {
    id: "whatbot",
    title: "Whatbot - Fork of openWA",
    cat: "API",
    tag: "NestJS",
    desc: "Open-source WhatsApp API Gateway with pluggable architecture. Multi-session management, REST API, webhooks with HMAC signing, web dashboard, Swagger docs, and Docker-native deployment.",
    href: "https://github.com/Zaidx-me/whatbot",
  },
  {
    id: "portfolio",
    title: "zaidxme - personal portfolio",
    cat: "Web",
    tag: "Remix",
    desc: "Personal design portfolio built with Remix and Three.js — 3D interactive background, Framer Motion animations, MDX articles, and a Storybook component library.",
    href: "https://zareen.qzz.io",
  },
  {
    id: "hidaya-seeker",
    title: "Hidaya Seeker",
    cat: "Web",
    tag: "React & React Native",
    desc: "A modern Islamic platform available on both web and mobile — Quran, prayer times, and essential resources in a clean, intuitive experience.",
    href: "https://www.hidayaseeker.com/",
  },
  {
    id: "mum-flooring",
    title: "MUM Flooring Studio",
    cat: "Web",
    tag: "Next.js",
    desc: "A professional flooring company website showcasing products and services, built with Next.js and optimized for customer engagement.",
    href: "https://mumflooringstudio.co.uk/",
  },
];

export default function ProjectsSection() {
  const [active, setActive] = useState("All");

  const filtered = active === "All" ? projects : projects.filter((p) => p.cat === active);

  return (
    <section id="work" className="px-6 md:px-10 py-14 md:py-32">
      <FadeIn y={30} className="text-center mb-16 md:mb-20">
        <span className="section-label">
          OUR WORK
        </span>
        <h2 className="section-heading mt-4">
          Projects
        </h2>
      </FadeIn>

      <div className="flex flex-wrap gap-3 mb-12 max-w-3xl mx-auto">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`rounded-full px-5 py-2 text-xs uppercase tracking-widest font-medium transition-all ${
              active === cat
                ? "border border-white/[0.15] bg-white/[0.08] backdrop-blur-xl text-[#D7E2EA]"
                : "border border-white/[0.08] bg-white/[0.02] backdrop-blur-xl text-[#D7E2EA]/50 hover:border-white/[0.15] hover:text-[#D7E2EA]"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
        {filtered.map((p, i) => (
          <FadeIn key={p.id} delay={i * 0.06} y={15}>
            <a
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group block rounded-2xl border border-white/[0.08] bg-white/[0.04] backdrop-blur-xl p-6 md:p-8 hover:bg-white/[0.08] transition-all h-full"
            >
              <div className="flex items-start justify-between mb-3">
                <span className="text-[10px] uppercase tracking-widest font-medium px-2.5 py-1 rounded-full border border-white/[0.08] text-[#D7E2EA]/50">
                  {p.tag}
                </span>
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5 text-[#D7E2EA]/30 group-hover:text-[#D7E2EA]/60 transition-colors flex-shrink-0"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
              </div>
              <h3 className="text-xl md:text-2xl font-semibold text-[#D7E2EA] mb-3">{p.title}</h3>
              <p className="text-sm md:text-base text-[#D7E2EA]/70 leading-relaxed">{p.desc}</p>
            </a>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
