"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FadeIn from "@/components/ui/FadeIn";
import LineSidebar from "@/components/ui/LineSidebar";

const testimonials = [
  {
    quote:
      "We were stuck for three weeks trying to integrate the JazzCash and PayFast APIs into our custom headless e-commerce build. Zenith build stepped in, debugged the webhook issues in just a few days, and got us live right before our major Eid campaign. Genuine, no-nonsense professionals.",
    author: "Saad Iftikhar",
    title: "Co-founder, ZariFab Store",
  },
  {
    quote:
      "My supervisor was incredibly strict about the memory management requirements for our C++ compiler project. The Zenith guys didn't just hand over a working script; they walked me through the pointer optimizations on a Google Meet call so I could confidently defend it in my viva. Ended up scoring an A.",
    author: "Zainab Qureshi",
    title: "Computer Engineering Student, NUST",
  },
  {
    quote:
      "We needed a custom dashboard that connected directly with the WhatsApp Cloud API to automate client leads. Zenith built a flawless Next.js web app for us. They are transparent with their pricing and actually stick to their timelines—which, let's be honest, is incredibly rare in the local dev market.",
    author: "Fahad Mahmood",
    title: "Director, EstateLink Islamabad",
  },
  {
    quote:
      "We hired Zenith to revamp our delivery app after the previous developers left it full of bugs and memory leaks. They completely restructured the messy React Native codebase and fixed the map rendering lag. Now the app runs smoothly even on older budget Android phones. Brilliant execution.",
    author: "Ali Hassan",
    title: "Operations Lead, QuickDrop Logistics",
  },
  {
    quote:
      "As a creative agency, our clients often ask for complex web animations and custom Framer setups that go beyond our in-house capabilities. We now outsource all our heavy web development to Zenith. Their attention to detail on UI/UX translates perfectly into code. It feels like having our own tech department.",
    author: "Mahnoor Tariq",
    title: "Lead Designer, Alt-Creative",
  },
  {
    quote:
      "I was completely burned out trying to balance my final semester exams while building a full-stack MERN application for my FYP. Zenith took over the backend development. The code was clean, properly commented, and deployed seamlessly on AWS. Saved my degree, honestly.",
    author: "Bilal Javed",
    title: "Senior IT Student, UET Lahore",
  },
];

export default function TestimonialsSection() {
  const [active, setActive] = useState(0);
  const t = testimonials[active];

  return (
    <section className="px-6 md:px-10 py-14 md:py-32">
      <FadeIn y={30} className="text-center mb-16 md:mb-20">
        <span className="section-label">CLIENT FEEDBACK</span>
        <h2 className="section-heading mt-4 mb-16 md:mb-20">Testimonials</h2>
      </FadeIn>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 md:gap-16 items-start">
        <div className="w-full md:w-1/3 md:sticky md:top-32 shrink-0">
          <LineSidebar
            items={testimonials.map((t) => t.author)}
            accentColor="#D7E2EA"
            textColor="#D7E2EA80"
            markerColor="#D7E2EA33"
            showIndex={true}
            showMarker={true}
            proximityRadius={80}
            maxShift={20}
            falloff="smooth"
            markerLength={40}
            markerGap={12}
            tickScale={0.5}
            scaleTick={true}
            itemGap={24}
            fontSize={1}
            smoothing={80}
            defaultActive={0}
            onItemClick={(i) => setActive(i)}
          />
        </div>

        <div className="flex-1 min-h-[280px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-8 md:p-10"
            >
              <div className="w-10 h-[2px] rounded-full mb-6 bg-[#D7E2EA]/20" />
              <p className="text-base md:text-lg text-[#D7E2EA]/80 leading-relaxed italic mb-8">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div>
                <p className="text-sm font-semibold text-[#D7E2EA]">
                  {t.author}
                </p>
                <p className="text-xs text-[#D7E2EA]/60 mt-1">{t.title}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
