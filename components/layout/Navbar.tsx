"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Our Work", href: "#work" },
  { name: "Our Services", href: "#services" },
  { name: "Process We Follow", href: "#process" },
  { name: "About Us", href: "#about" },
  { name: "Contact Us", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const lastScrollY = useRef(0);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      const sy = window.scrollY;
      setHidden(sy > lastScrollY.current && sy > 120);
      setScrolled(sy > 40);
      lastScrollY.current = sy;

      for (const href of ["#work", "#services", "#process", "#about", "#contact"]) {
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
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#0C0C0C]/[0.6] backdrop-blur-2xl border-b border-white/[0.05]"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-10 h-16 md:h-20">
          <a href="#" className="flex items-center">
            <img src="/logo.jpg" alt="Zenith Build" className="h-8 md:h-9 w-auto rounded-full border border-white/[0.08]" />
          </a>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`relative px-4 py-2 text-[11px] uppercase tracking-[0.15em] font-medium transition-all ${
                  activeSection === link.href
                    ? "text-[#D7E2EA]"
                    : "text-[#D7E2EA]/40 hover:text-[#D7E2EA]/70"
                }`}
              >
                {link.name}
                {activeSection === link.href && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute bottom-0 left-3 right-3 h-[1.5px] bg-[#D7E2EA]/30 rounded-full"
                  />
                )}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="hidden md:inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] font-semibold rounded-lg px-4 py-2 border border-white/[0.08] text-[#D7E2EA]/70 hover:text-[#D7E2EA] hover:border-white/[0.15] transition-all"
            >
              <svg viewBox="0 0 16 16" fill="none" className="w-2.5 h-2.5">
                <path d="M8 1V15M1 8H15" stroke="#D7E2EA" strokeWidth="1" strokeOpacity="0.4"/>
              </svg>
              Start Project
            </a>
            <button
              className="md:hidden w-9 h-9 rounded-lg flex items-center justify-center border border-white/[0.08]"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
            >
              <div className="flex flex-col gap-[3px]">
                <span className="w-4 h-[1px] bg-[#D7E2EA]/60" />
                <span className="w-4 h-[1px] bg-[#D7E2EA]/60" />
                <span className="w-4 h-[1px] bg-[#D7E2EA]/60" />
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
            className="fixed inset-0 z-[60] flex flex-col bg-[#0C0C0C]/[0.98] backdrop-blur-2xl"
          >
            <div className="flex items-center justify-between px-6 h-16 md:h-20">
              <img src="/logo.jpg" alt="Zenith Build" className="h-7 w-auto rounded-full border border-white/[0.08]" />
              <button
                onClick={() => setMenuOpen(false)}
                className="w-9 h-9 rounded-lg flex items-center justify-center border border-white/[0.08]"
                aria-label="Close menu"
              >
                <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4">
                  <path d="M3 3L13 13M13 3L3 13" stroke="#D7E2EA" strokeWidth="1.2" strokeOpacity="0.6"/>
                </svg>
              </button>
            </div>

            <div className="flex flex-col px-6 mt-6 gap-1">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05, ease: "easeOut" }}
                  className="group flex items-center gap-4 py-3.5 border-b border-white/[0.03]"
                >
                  <span className="text-[10px] font-medium text-[#D7E2EA]/15 tracking-widest w-6">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-lg font-semibold tracking-tight text-[#D7E2EA]/70 group-hover:text-[#D7E2EA] transition-colors">
                    {link.name}
                  </span>
                </motion.a>
              ))}
            </div>

            <div className="mt-auto px-6 pb-10 pt-8 border-t border-white/[0.04]">
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="inline-flex items-center gap-2 text-xs font-semibold rounded-lg px-5 py-2.5 border border-white/[0.1] text-[#D7E2EA]/70 hover:text-[#D7E2EA] hover:border-white/[0.15] transition-all uppercase tracking-widest"
              >
                Hire Our Developers
              </a>
              <p className="mt-5 text-[10px] text-[#D7E2EA]/20 tracking-wider uppercase">
                Zenith Build
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
