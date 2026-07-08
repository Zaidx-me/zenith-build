"use client";

import { useState, FormEvent } from "react";
import { Send, Check, Loader } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";
import GlassCard from "@/components/ui/GlassCard";

export default function ContactSection() {
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    setSending(true);

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("/api/contact", { method: "POST", body: data });
      const json = await res.json();

      if (json.errors) {
        setError(json.errors.email || json.errors.message || json.errors.message?.[0] || "Something went wrong.");
      } else if (json.success) {
        setSent(true);
        form.reset();
      }
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setSending(false);
    }
  }

  if (sent) {
    return (
      <section id="contact" className="px-6 md:px-10 py-24 md:py-32">
        <div className="max-w-2xl mx-auto text-center">
          <FadeIn y={20}>
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-white/[0.08] bg-white/[0.04] backdrop-blur-xl">
              <Check className="w-6 h-6 text-[#D7E2EA]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-[#D7E2EA] mb-3">
              Message sent
            </h2>
            <p className="text-[#D7E2EA]/60 text-sm max-w-sm mx-auto">
              Thanks for reaching out. We&apos;ll get back to you within a couple of days.
            </p>
            <button
              onClick={() => setSent(false)}
              className="mt-8 rounded-full px-6 py-2.5 text-xs uppercase tracking-widest font-medium border border-white/[0.08] bg-white/[0.04] text-[#D7E2EA]/60 hover:text-[#D7E2EA] hover:bg-white/[0.08] transition-all"
            >
              Send another
            </button>
          </FadeIn>
        </div>
      </section>
    );
  }

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
            <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
              <input type="text" name="name" autoComplete="off" tabIndex={-1} className="absolute opacity-0 pointer-events-none" />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <input
                  type="text"
                  name="fromName"
                  placeholder="Name"
                  required
                  className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3 text-sm text-[#D7E2EA] placeholder:text-[#D7E2EA]/30 outline-none focus:border-white/[0.15] transition-colors"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3 text-sm text-[#D7E2EA] placeholder:text-[#D7E2EA]/30 outline-none focus:border-white/[0.15] transition-colors"
                />
              </div>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3 text-sm text-[#D7E2EA] placeholder:text-[#D7E2EA]/30 outline-none focus:border-white/[0.15] transition-colors"
              />
              <textarea
                name="message"
                rows={5}
                placeholder="Message"
                required
                className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3 text-sm text-[#D7E2EA] placeholder:text-[#D7E2EA]/30 outline-none focus:border-white/[0.15] transition-colors resize-none"
              />

              {error && (
                <p className="text-xs text-red-400/80 tracking-wide">{error}</p>
              )}

              <button
                type="submit"
                disabled={sending}
                className="self-start rounded-full px-8 py-3 font-medium uppercase tracking-widest text-xs sm:text-sm flex items-center gap-2 border border-white/[0.08] bg-white/[0.04] backdrop-blur-xl text-[#D7E2EA] hover:bg-white/[0.08] hover:border-white/[0.15] transition-all disabled:opacity-50"
              >
                {sending ? (
                  <>
                    <Loader className="w-3.5 h-3.5 animate-spin" />
                    Sending
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="w-3.5 h-3.5" />
                  </>
                )}
              </button>
            </form>
          </GlassCard>
        </FadeIn>
      </div>
    </section>
  );
}
