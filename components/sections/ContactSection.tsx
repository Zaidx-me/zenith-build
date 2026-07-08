"use client";

import { Send } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";
import GlassCard from "@/components/ui/GlassCard";

export default function ContactSection() {
  return (
    <section id="contact" className="px-6 md:px-10 py-24 md:py-32">
      <div className="max-w-2xl mx-auto text-center">
        <FadeIn y={30}>
          <span className="section-label">
            GET IN TOUCH
          </span>
          <h2 className="section-heading mt-4 mb-16 md:mb-20">
            Let&apos;s talk
          </h2>

          <GlassCard className="p-8 text-left">
            <form className="flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3 text-sm text-[#D7E2EA] placeholder:text-[#D7E2EA]/30 outline-none focus:border-white/[0.15] transition-colors"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3 text-sm text-[#D7E2EA] placeholder:text-[#D7E2EA]/30 outline-none focus:border-white/[0.15] transition-colors"
                />
              </div>
              <input
                type="text"
                placeholder="Subject"
                className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3 text-sm text-[#D7E2EA] placeholder:text-[#D7E2EA]/30 outline-none focus:border-white/[0.15] transition-colors"
              />
              <textarea
                rows={5}
                placeholder="Message"
                className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3 text-sm text-[#D7E2EA] placeholder:text-[#D7E2EA]/30 outline-none focus:border-white/[0.15] transition-colors resize-none"
              />
              <button
                type="submit"
                className="self-start rounded-full px-8 py-3 font-medium uppercase tracking-widest text-xs sm:text-sm flex items-center gap-2 border border-white/[0.08] bg-white/[0.04] backdrop-blur-xl text-[#D7E2EA] hover:bg-white/[0.08] hover:border-white/[0.15] transition-all"
              >
                Send Message
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          </GlassCard>
        </FadeIn>
      </div>
    </section>
  );
}
