"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";

const NavbarGlass = dynamic(() => import("@/components/ui/NavbarGlass"), { ssr: false });
const StaggeredMenu = dynamic(() => import("@/components/ui/StaggeredMenu"), { ssr: false });

const navLinks = [
  { name: "About Us", href: "#about" },
  { name: "Our Services", href: "#services" },
  { name: "Process We Follow", href: "#process" },
  { name: "Our Work", href: "#work" },
  { name: "Contact Us", href: "#contact" },
];

const menuItems = [
  { label: "About", ariaLabel: "Learn about us", link: "#about" },
  { label: "Services", ariaLabel: "View our services", link: "#services" },
  { label: "Process", ariaLabel: "See our process", link: "#process" },
  { label: "Work", ariaLabel: "View our work", link: "#work" },
  { label: "Contact", ariaLabel: "Get in touch", link: "#contact" },
];

const socialItems = [
  { label: "Twitter", link: "https://twitter.com" },
  { label: "LinkedIn", link: "https://linkedin.com" },
  { label: "Instagram", link: "https://instagram.com" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    function onScroll() {
      for (const href of ["#about", "#services", "#process", "#work", "#contact"]) {
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
      <div className="fixed top-5 left-1/2 -translate-x-1/2 z-50 w-[min(1200px,90%)]">
        <div className="relative rounded-full border border-white/[0.12] bg-white/[0.08] backdrop-blur-xl overflow-hidden">
          <NavbarGlass />
          <div className="relative z-10 w-full flex items-center justify-between px-6 py-3">
            <a href="#" className="flex items-center shrink-0">
              <img src="/logo.jpg" alt="Zenith Build" className="h-9 w-auto rounded-full border border-white/[0.08]" />
            </a>

            <div className="hidden md:flex items-center gap-1 flex-1 justify-center">
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

            <div className="flex items-center gap-3 shrink-0">
              <span className="hidden lg:flex items-center gap-2 text-[10px] uppercase tracking-[0.1em] font-medium text-[#D7E2EA]/40">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D7E2EA]/50 animate-pulse" />
                Available
              </span>
              <a
                href="#contact"
                className="hidden md:inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] font-semibold rounded-full px-5 py-2 bg-[#D7E2EA] text-[#0C0C0C] hover:bg-[#D7E2EA]/90 transition-all"
              >
                Start Project
              </a>
              <button
                onClick={() => setMenuOpen((prev) => !prev)}
                className="md:hidden flex items-center gap-1.5 text-[11px] uppercase tracking-[0.15em] font-medium text-[#D7E2EA] bg-white/5 border border-white/10 rounded-full px-3.5 py-1.5 cursor-pointer hover:bg-white/10 transition-all"
                aria-label={menuOpen ? "Close menu" : "Open menu"}
                aria-expanded={menuOpen}
              >
                <span className="flex flex-col gap-[3px]">
                  <span className={`block w-3.5 h-[1.5px] bg-current rounded-full transition-all duration-300 ${menuOpen ? "translate-y-[4.5px] rotate-45" : ""}`} />
                  <span className={`block w-3.5 h-[1.5px] bg-current rounded-full transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
                  <span className={`block w-3.5 h-[1.5px] bg-current rounded-full transition-all duration-300 ${menuOpen ? "-translate-y-[4.5px] -rotate-45" : ""}`} />
                </span>
                Menu
              </button>
            </div>
          </div>
        </div>
      </div>

      {menuOpen && (
      <div className="md:hidden fixed inset-0 z-[60]">
        <StaggeredMenu
          position="right"
          items={menuItems}
          socialItems={socialItems}
          displaySocials={true}
          displayItemNumbering={true}
          colors={["#0C0C0C", "#1a1a2e"]}
          accentColor="#D7E2EA"
          menuButtonColor="#D7E2EA"
          openMenuButtonColor="#D7E2EA"
          changeMenuColorOnOpen={false}
          isFixed={true}
          closeOnClickAway={true}
          showToggle={false}
          open={menuOpen}
          onMenuClose={() => setMenuOpen(false)}
        />
      </div>
      )}
    </>
  );
}
