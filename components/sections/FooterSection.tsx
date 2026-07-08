"use client";

import { ArrowUpRight } from "lucide-react";

const footerLinks = [
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Work", href: "#work" },
  { name: "Contact", href: "#contact" },
];

const socialLinks = [
  { name: "LinkedIn", href: "https://www.linkedin.com/in/zenith-build" },
  { name: "Threads", href: "https://www.threads.com/@zenith._.build" },
  { name: "GitHub", href: "https://github.com/zaidx-me" },
  { name: "Instagram", href: "https://www.instagram.com/zenith._.build" },
  { name: "Facebook", href: "https://www.facebook.com/share/1GunL3sFr4/" },
];

export default function FooterSection() {
  return (
    <footer className="border-t border-white/[0.06] px-6 md:px-10 py-16 md:py-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
        {/* Left */}
        <div>
          <span className="text-[#D7E2EA] font-black uppercase tracking-tight text-lg">
            ZENITH
          </span>
          <p className="text-[#D7E2EA]/60 text-sm mt-3 max-w-xs leading-relaxed">
            A creative digital agency crafting bold, modern web experiences that elevate brands.
          </p>
          <div className="flex flex-wrap gap-3 mt-8">
              {socialLinks.map((l) => (
                <a
                  key={l.name}
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs uppercase tracking-widest text-[#D7E2EA]/30 hover:text-[#D7E2EA]/60 transition-colors font-medium"
                >
                  {l.name}
                </a>
              ))}
          </div>
        </div>

        {/* Right */}
        <div className="flex flex-col sm:flex-row justify-between gap-10">
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

          {/* Newsletter */}
          <div>
            <span className="text-[#D7E2EA]/30 text-xs uppercase tracking-widest font-medium">
              Stay updated
            </span>
            <form className="mt-4 flex" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 bg-white/[0.04] border border-white/[0.08] rounded-l-xl px-4 py-3 text-sm text-[#D7E2EA] placeholder:text-[#D7E2EA]/30 outline-none focus:border-white/[0.15] transition-colors"
              />
              <button
                type="submit"
                className="rounded-r-xl px-5 py-3 text-sm font-medium border border-white/[0.08] bg-white/[0.04] backdrop-blur-xl text-[#D7E2EA] hover:bg-white/[0.08] transition-all"
              >
                Join
              </button>
            </form>
            <p className="text-[#D7E2EA]/20 text-xs mt-2">
              No spam, unsubscribe anytime.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-12 pt-6 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-[#D7E2EA]/20 text-xs">
          &copy; 2026 Zenith Build. All rights reserved.
        </p>
        <p className="text-[#D7E2EA]/20 text-xs">
           Crafted with purpose by <a href="https://zareen.qzz.io" target="_blank" rel="noopener noreferrer" className="underline hover:text-[#D7E2EA]/60 transition-colors">zaidxme</a>.
        </p>
      </div>
    </footer>
  );
}
