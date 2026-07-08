"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const footerLinks = [
  { name: "LinkedIn", href: "#" },
  { name: "Dribbble", href: "#" },
  { name: "Behance", href: "#" },
  { name: "GitHub", href: "#" },
];

export default function FooterStrip() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const cardScale = useTransform(scrollYProgress, [0, 0.15], [0.92, 1]);
  const cardY = useTransform(scrollYProgress, [0, 0.15], [40, 0]);

  return (
    <motion.section
      ref={sectionRef}
      style={{ scale: cardScale, y: cardY }}
      className="bg-[#F4F4F4] rounded-[32px] px-6 md:px-16 py-16 border border-black/[0.04]"
    >
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        <div>
          <span className="font-display font-black text-[#141414] text-lg tracking-tight">
            ZENITH
          </span>
          <p className="text-black/40 text-xs mt-1">
            &copy; 2025 Zenith Build. All rights reserved.
          </p>
        </div>

        <div className="flex items-center gap-6">
          {footerLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs uppercase tracking-widest font-medium text-black/40 hover:text-black transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        <p className="text-xs text-black/40">
          info@zenithbuild.com
        </p>
      </div>
    </motion.section>
  );
}
