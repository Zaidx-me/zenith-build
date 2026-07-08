"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const navLinks = [
  { name: "WORK", href: "#work" },
  { name: "SERVICES", href: "#services" },
  { name: "PROCESS", href: "#process" },
  { name: "STUDIO", href: "#about" },
  { name: "CONTACT", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-4 left-4 right-4 md:top-6 md:left-10 md:right-10 z-50 rounded-2xl border border-white/[0.08] bg-[#0C0C0C]/[0.85] backdrop-blur-2xl flex items-center justify-between px-5 md:px-8 py-3 md:py-4">
        <span className="text-[#D7E2EA] font-black uppercase tracking-tight text-lg md:text-xl">
          ZENITH
        </span>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs uppercase tracking-widest font-medium text-[#D7E2EA]/60 hover:text-[#D7E2EA] transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <a
            href="#contact"
            className="hidden md:inline-flex items-center gap-2 text-xs uppercase tracking-widest font-medium rounded-full px-5 py-2 border border-white/[0.08] bg-white/[0.04] backdrop-blur-xl text-[#D7E2EA] hover:bg-white/[0.08] hover:border-white/[0.15] transition-all"
          >
            LET&apos;S TALK
          </a>
          <button
            className="w-10 h-10 rounded-full flex items-center justify-center md:hidden border border-white/[0.08] bg-white/[0.04] backdrop-blur-xl"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            <div className="flex flex-col gap-[3px]">
              <span className="w-4 h-[2px] bg-[#D7E2EA]" />
              <span className="w-4 h-[2px] bg-[#D7E2EA]" />
              <span className="w-4 h-[2px] bg-[#D7E2EA]" />
            </div>
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(24px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            className="fixed inset-0 z-[60] flex flex-col bg-[#0C0C0C]/[0.95] backdrop-blur-2xl"
          >
            <div className="flex items-center justify-between px-6 pt-6">
              <span className="text-[#D7E2EA] font-black uppercase tracking-tight text-xl">
                ZENITH
              </span>
              <button
                onClick={() => setMenuOpen(false)}
                className="w-10 h-10 rounded-full flex items-center justify-center border border-white/[0.08] bg-white/[0.04] backdrop-blur-xl"
                aria-label="Close menu"
              >
                <X className="w-5 h-5 text-[#D7E2EA]" />
              </button>
            </div>

            <div className="flex flex-col gap-6 px-6 mt-12">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-3xl font-black uppercase tracking-tight text-[#D7E2EA] hover:text-[#D7E2EA]/60 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="mt-auto px-6 pb-8">
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="inline-flex items-center gap-2 text-lg font-semibold rounded-full px-6 py-3 border border-white/[0.08] bg-white/[0.04] backdrop-blur-xl text-[#D7E2EA] hover:bg-white/[0.08] transition-all"
              >
                LET&apos;S TALK
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
