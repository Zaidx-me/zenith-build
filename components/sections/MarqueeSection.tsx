"use client";

import CurvedLoop from "@/components/ui/CurvedLoop";
import FadeIn from "@/components/ui/FadeIn";

const techItems = [
  "React", "Next.js", "TypeScript", "Node.js", "React Native",
  "PostgreSQL", "Docker", "GraphQL", "AWS", "Tailwind CSS",
  "NestJS", "Prisma", "Redis", "Figma", "Flutter",
];

const marqueeText = techItems.join("  •  ") + "  •  ";

export default function MarqueeSection() {
  return (
    <section className="py-20 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10 mb-8">
        <FadeIn y={20}>
          <span className="section-label">TECHNOLOGIES</span>
        </FadeIn>
      </div>
      <CurvedLoop
        marqueeText={marqueeText}
        speed={2}
        curveAmount={120}
        direction="left"
        interactive={true}
        className="fill-[#D7E2EA]/10"
      />
    </section>
  );
}
