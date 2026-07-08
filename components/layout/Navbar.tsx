"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Work", href: "#work" },
  { name: "Services", href: "#services" },
  { name: "Process", href: "#process" },
  { name: "Studio", href: "#about" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const lastScrollY = useRef(0);

  useEffect(() => {
    function onScroll() {
      const sy = window.scrollY;
      setHidden(sy > lastScrollY.current && sy > 120);
      lastScrollY.current = sy;

      const links = ["#work", "#services", "#process", "#about", "#contact"];
      for (const href of links) {
        const el = document.querySelector(href);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(href);
            break;
          }
        }
      }
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.nav
        animate={{ y: hidden ? -100 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="fixed top-0 left-0 right-0 z-50 border-b border-white/[0.06] bg-[#0C0C0C]/[0.7] backdrop-blur-2xl"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-10 h-16">
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-7 h-7 rounded-lg border border-white/[0.12] bg-white/[0.04] flex items-center justify-center">
              <svg viewBox="0 0 16 16" fill="none" className="w-3.5 h-3.5">
                <path d="M8 1L14 5V11L8 15L2 11V5L8 1Z" stroke="#D7E2EA" strokeWidth="1.2" fill="none"/>
                <circle cx="8" cy="8" r="2" fill="#D7E2EA" fillOpacity="0.3"/>
              </svg>
            </div>
            <span className="text-[#D7E2EA] font-black uppercase tracking-tight text-base">
              ZENITH
            </span>
          </a>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`px-4 py-2 text-xs uppercase tracking-widest font-medium rounded-lg transition-all ${
                  activeSection === link.href
                    ? "text-[#D7E2EA] bg-white/[0.06]"
                    : "text-[#D7E2EA]/50 hover:text-[#D7E2EA] hover:bg-white/[0.03]"
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="hidden md:inline-flex items-center gap-1.5 text-[11px] uppercase tracking-widest font-semibold rounded-lg px-4 py-2 border border-white/[0.1] bg-white/[0.04] text-[#D7E2EA] hover:bg-white/[0.08] hover:border-white/[0.15] transition-all"
            >
              <svg viewBox="0 0 16 16" fill="none" className="w-3 h-3">
                <path d="M8 1V15M1 8H15" stroke="#D7E2EA" strokeWidth="1.2" strokeOpacity="0.5"/>
              </svg>
              Start Project
            </a>
            <button
              className="md:hidden w-9 h-9 rounded-lg flex items-center justify-center border border-white/[0.08] bg-white/[0.04]"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
            >
              <div className="flex flex-col gap-[3px]">
                <span className="w-4 h-[1.5px] bg-[#D7E2EA]/70" />
                <span className="w-4 h-[1.5px] bg-[#D7E2EA]/70" />
                <span className="w-4 h-[1.5px] bg-[#D7E2EA]/70" />
              </div>
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex flex-col bg-[#0C0C0C]/[0.97] backdrop-blur-2xl"
          >
            <div className="flex items-center justify-between px-6 h-16 border-b border-white/[0.06]">
              <span className="text-[#D7E2EA] font-black uppercase tracking-tight text-base">
                ZENITH
              </span>
              <button
                onClick={() => setMenuOpen(false)}
                className="w-9 h-9 rounded-lg flex items-center justify-center border border-white/[0.08] bg-white/[0.04]"
                aria-label="Close menu"
              >
                <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4">
                  <path d="M3 3L13 13M13 3L3 13" stroke="#D7E2EA" strokeWidth="1.2" strokeOpacity="0.7"/>
                </svg>
              </button>
            </div>

            <div className="flex flex-col px-6 mt-8 gap-2">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06, ease: "easeOut" }}
                  className="text-2xl font-black uppercase tracking-tight text-[#D7E2EA]/80 hover:text-[#D7E2EA] transition-colors py-3 border-b border-white/[0.04]"
                >
                  {String(i + 1).padStart(2, "0")} — {link.name}
                </motion.a>
              ))}
            </div>

            <div className="mt-auto px-6 pb-10 pt-8 border-t border-white/[0.06]">
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="inline-flex items-center gap-2 text-sm font-semibold rounded-lg px-5 py-2.5 border border-white/[0.1] bg-white/[0.04] text-[#D7E2EA] hover:bg-white/[0.08] transition-all uppercase tracking-widest"
              >
                Start a Project
              </a>
              <p className="mt-4 text-xs text-[#D7E2EA]/30 tracking-wide">
                Zenith Build — Creative Digital Agency
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
