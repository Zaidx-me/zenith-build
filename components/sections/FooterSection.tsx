"use client";

import { useState } from "react";
import { ArrowUpRight, Mail, Check } from "lucide-react";

const footerLinks = [
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Work", href: "#work" },
  { name: "Contact", href: "#contact" },
];

const socialLinks = [
  { name: "LinkedIn", href: "https://www.linkedin.com/in/zenith-build", icon: "in" },
  { name: "Threads", href: "https://www.threads.com/@zenith._.build", icon: "@" },
  { name: "GitHub", href: "https://github.com/zaidx-me", icon: "gh" },
  { name: "Instagram", href: "https://www.instagram.com/zenith._.build", icon: "ig" },
  { name: "Facebook", href: "https://www.facebook.com/share/1GunL3sFr4/", icon: "fb" },
];

const badges = [
  { label: "BUILT WITH", value: "React.js", color: "#61dafb" },
  { label: "STYLED WITH", value: "Tailwind CSS", color: "#38bdf8" },
  { label: "DEPLOYED ON", value: "Vercel", color: "#fff" },
];

export default function FooterSection() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("contact@zenithbuild.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer className="border-t border-white/[0.06] px-6 md:px-10 py-16 md:py-20">
      <div className="max-w-6xl mx-auto">
        {/* Top section */}
        <div className="flex flex-col md:flex-row justify-between gap-10 mb-8">
          <div className="flex flex-col gap-5">
            <span className="text-[#D7E2EA] font-black uppercase tracking-tight text-lg">
              ZENITH
            </span>
            <p className="text-[#D7E2EA]/60 text-sm max-w-xs leading-relaxed">
              A creative digital agency crafting bold, modern web experiences that elevate brands.
            </p>
            <div className="flex items-center gap-3 flex-wrap">
              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-full border border-white/[0.12] text-[#D7E2EA]/60 hover:text-[#D7E2EA] hover:bg-white/[0.04] hover:border-[#D7E2EA]/20 transition-all"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-[#D7E2EA]" />
                    Email Copied!
                  </>
                ) : (
                  <>
                    <Mail className="w-3.5 h-3.5" />
                    Copy Email
                  </>
                )}
              </button>
              <div className="flex items-center gap-2">
                {socialLinks.map((l) => (
                  <a
                    key={l.name}
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full border border-white/[0.1] flex items-center justify-center text-[#D7E2EA]/40 hover:text-[#D7E2EA] hover:bg-white/[0.04] hover:border-[#D7E2EA]/20 hover:-translate-y-0.5 transition-all text-[10px] font-bold uppercase tracking-wider"
                    title={l.name}
                  >
                    {l.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-10">
            {/* Nav */}
            <div>
              <span className="text-[#D7E2EA]/30 text-xs uppercase tracking-widest font-medium">
                Navigation
              </span>
              <div className="flex flex-col gap-3 mt-4">
                {footerLinks.map((l) => (
                  <a
                    key={l.name}
                    href={l.href}
                    className="text-sm text-[#D7E2EA]/60 hover:text-[#D7E2EA] transition-colors flex items-center gap-1"
                  >
                    {l.name}
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-white/[0.08] w-full" />

        {/* Bottom section — badges */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-8">
          <div className="flex items-center gap-3 flex-wrap">
            {badges.map((b) => (
              <span
                key={b.value}
                className="inline-flex items-center gap-2 text-[11px] px-3 py-1.5 rounded-full border border-white/[0.08] bg-white/[0.03] text-[#D7E2EA]/70"
              >
                <span className="text-[9px] text-[#D7E2EA]/30 tracking-wider uppercase font-medium">
                  {b.label}
                </span>
                <span style={{ color: b.color }} className="font-medium">
                  {b.value}
                </span>
              </span>
            ))}
          </div>
          <p className="text-[#D7E2EA]/20 text-xs">
            &copy; 2026 Zenith Build. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
