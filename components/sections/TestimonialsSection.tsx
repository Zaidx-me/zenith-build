"use client";

import { motion } from "framer-motion";
import FadeIn from "@/components/ui/FadeIn";

const testimonials = [
  {
    quote: "Zenith Build didn't just redesign our site — they rethought our entire digital strategy. The results speak for themselves.",
    author: "Jamie Torres",
    title: "CEO, Stitch",
  },
  {
    quote: "Working with Zenith felt like an extension of our own team. Deep technical skill, sharp design sense, and relentless execution.",
    author: "Dr. Priya Nair",
    title: "CTO, Helix Health",
  },
  {
    quote: "They delivered ahead of schedule and above expectations. Our launch weekend was the best in company history.",
    author: "Marcus Webb",
    title: "Founder, Nova",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="px-6 md:px-10 py-20 md:py-32">
      <FadeIn y={30} className="text-center mb-16 md:mb-20">
        <span className="section-label">
          CLIENT FEEDBACK
        </span>
        <h2 className="section-heading mt-4 mb-16 md:mb-20">
          Testimonials
        </h2>
      </FadeIn>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.author}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
              delay: i * 0.15,
              type: "spring",
              stiffness: 120,
              damping: 16,
            }}
            className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-8 hover:bg-white/[0.06] transition-all"
          >
            <div className="w-8 h-[2px] rounded-full mb-5 bg-[#D7E2EA]/20" />
            <p className="text-sm text-[#D7E2EA]/80 leading-relaxed italic">
              &ldquo;{t.quote}&rdquo;
            </p>
            <div className="mt-6">
              <p className="text-sm font-semibold text-[#D7E2EA]">{t.author}</p>
              <p className="text-xs text-[#D7E2EA]/60">{t.title}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
