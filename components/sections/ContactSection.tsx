"use client";

import { useState, FormEvent, useRef, useEffect } from "react";
import { Send, Check, Loader, Mail, MapPin } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";

export default function ContactSection() {
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = section.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      section.style.setProperty("--mouse-x", `${x}%`);
      section.style.setProperty("--mouse-y", `${y}%`);
    };

    section.addEventListener("mousemove", handleMouseMove);
    return () => section.removeEventListener("mousemove", handleMouseMove);
  }, []);

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
      <section id="contact" ref={sectionRef} className="relative px-6 md:px-10 py-14 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(600px_circle_at_var(--mouse-x,50%)_var(--mouse-y,50%),rgba(215,226,234,0.03),transparent_40%)] pointer-events-none" />
        <div className="max-w-6xl mx-auto text-center relative z-10">
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
    <section id="contact" ref={sectionRef} className="relative px-6 md:px-10 py-14 md:py-32 overflow-hidden">
      {/* Mouse spotlight */}
      <div className="absolute inset-0 bg-[radial-gradient(600px_circle_at_var(--mouse-x,50%)_var(--mouse-y,50%),rgba(215,226,234,0.03),transparent_40%)] pointer-events-none" />

      {/* Accent top line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D7E2EA]/10 to-transparent" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.2fr] gap-12 md:gap-16 items-start">
          {/* Left — Info (sticky on desktop) */}
          <FadeIn x={-30} className="md:sticky md:top-24">
            <span className="section-label">
              CONNECT WITH US
            </span>
            <h2 className="section-heading mt-4 mb-6">
              Let&apos;s talk
            </h2>
            <p className="text-[#D7E2EA]/60 text-sm md:text-base leading-relaxed mb-8 max-w-md">
              Ready to start your next project? Fill out the form and we&apos;ll get back to you within a couple of days.
            </p>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3 text-sm text-[#D7E2EA]/60">
                <Mail className="w-4 h-4 text-[#D7E2EA]/50" />
                <span>contact@zenithbuild.com</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-[#D7E2EA]/60">
                <MapPin className="w-4 h-4 text-[#D7E2EA]/50" />
                <span>Remote / On-site</span>
              </div>
            </div>
          </FadeIn>

          {/* Right — Form */}
          <FadeIn x={30} delay={0.1}>
            <div className="relative rounded-2xl border border-white/[0.08] bg-white/[0.04] backdrop-blur-xl p-8">
              {/* Accent top border */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#D7E2EA]/10 rounded-t-2xl" />

              <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
                <input type="text" name="name" autoComplete="off" tabIndex={-1} className="absolute opacity-0 pointer-events-none" />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <input
                    type="text"
                    name="fromName"
                    placeholder="Name"
                    required
                    className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3 text-sm text-[#D7E2EA] placeholder:text-[#D7E2EA]/30 outline-none focus:border-[#D7E2EA]/30 transition-colors"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                    className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3 text-sm text-[#D7E2EA] placeholder:text-[#D7E2EA]/30 outline-none focus:border-[#D7E2EA]/30 transition-colors"
                  />
                </div>
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3 text-sm text-[#D7E2EA] placeholder:text-[#D7E2EA]/30 outline-none focus:border-[#D7E2EA]/30 transition-colors"
                />
                <textarea
                  name="message"
                  rows={5}
                  placeholder="Message"
                  required
                  className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3 text-sm text-[#D7E2EA] placeholder:text-[#D7E2EA]/30 outline-none focus:border-[#D7E2EA]/30 transition-colors resize-none"
                />

                {error && (
                  <p className="text-xs text-red-400/80 tracking-wide">{error}</p>
                )}

                <button
                  type="submit"
                  disabled={sending}
                  className="self-start rounded-full px-8 py-3 font-medium uppercase tracking-widest text-xs sm:text-sm flex items-center gap-2 bg-[#D7E2EA] text-[#0C0C0C] hover:bg-[#D7E2EA]/90 transition-all disabled:opacity-50"
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
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
