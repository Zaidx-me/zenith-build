"use client";

import { useEffect, useRef } from "react";

const items = [
  "React", "Next.js", "TypeScript", "Node.js", "React Native",
  "PostgreSQL", "Docker", "GraphQL", "AWS", "Tailwind CSS",
  "NestJS", "Prisma", "Redis", "Figma", "Flutter",
];

export default function MarqueeSection() {
  const rowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = rowRef.current;
    if (!el) return;
    const elRef = el;
    let raf: number, ticking = false;

    function update() {
      ticking = false;
      elRef.style.transform = `translate3d(${window.scrollY * -0.4}px, 0, 0)`;
    }

    function onScroll() {
      if (!ticking) { ticking = true; raf = requestAnimationFrame(update); }
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => { window.removeEventListener("scroll", onScroll); cancelAnimationFrame(raf); };
  }, []);

  return (
    <section className="py-20 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10 mb-8">
        <span className="section-label">TECHNOLOGIES</span>
      </div>
      <div className="relative">
        <div ref={rowRef} className="flex gap-16 items-center will-change-transform">
          {[...items, ...items].map((name, i) => (
            <span
              key={`${name}-${i}`}
              className="text-[#D7E2EA]/10 text-6xl md:text-7xl font-black uppercase tracking-tight whitespace-nowrap"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
