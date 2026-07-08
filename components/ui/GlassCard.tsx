"use client";

import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export default function GlassCard({ children, className = "", hover = true }: GlassCardProps) {
  return (
    <div
      className={`rounded-2xl border border-white/[0.08] bg-white/[0.04] backdrop-blur-xl ${hover ? "hover:bg-white/[0.08] hover:-translate-y-1" : ""} transition-all duration-300 ${className}`}
    >
      {children}
    </div>
  );
}
