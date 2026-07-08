"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";

const members = [
  { slug: "alex-chen", name: "Alex Chen", role: "Creative Director", initials: "AC" },
  { slug: "maya-patel", name: "Maya Patel", role: "Lead Engineer", initials: "MP" },
  { slug: "samir-khan", name: "Samir Khan", role: "Product Designer", initials: "SK" },
  { slug: "elena-voss", name: "Elena Voss", role: "Strategy Lead", initials: "EV" },
];

export default function TeamSection() {
  return (
    <section id="team" className="px-6 md:px-10 py-24 md:py-32">
      <FadeIn y={30} className="text-center mb-16 md:mb-20">
        <span className="section-label">
          THE PEOPLE
        </span>
        <h2 className="section-heading mt-4 mb-16 md:mb-20">
          Team
        </h2>
      </FadeIn>

      {/* Dynamic Grid */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
        {members.map((m, i) => (
          <FadeIn key={m.slug} delay={i * 0.1} y={20}>
            <Link
              href={`/team/${m.slug}`}
              className="group block rounded-2xl border border-white/[0.08] bg-white/[0.04] backdrop-blur-xl p-8 text-center hover:bg-white/[0.08] transition-all h-full"
            >
              <div className="w-16 h-16 rounded-full mx-auto mb-5 flex items-center justify-center text-lg font-bold text-[#D7E2EA] border border-white/[0.08] bg-white/[0.04] backdrop-blur-xl">
                {m.initials}
              </div>
              <h3 className="text-base font-semibold text-[#D7E2EA]">{m.name}</h3>
              <p className="text-xs text-[#D7E2EA]/40 uppercase tracking-widest mt-1">
                {m.role}
              </p>
              <div className="mt-4 flex items-center justify-center gap-1 text-[#D7E2EA]/30 group-hover:text-[#D7E2EA]/60 transition-colors text-xs uppercase tracking-widest font-medium">
                Know More
                <ArrowUpRight className="w-3 h-3" />
              </div>
            </Link>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
