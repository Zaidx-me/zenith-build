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
      className={`group relative rounded-2xl overflow-hidden ${hover ? "hover:-translate-y-1" : ""} transition-all duration-300 ${className}`}
    >
      {/* Liquid glass layers */}
      <div className="absolute inset-0 bg-white/[0.04] backdrop-blur-xl" />
      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.08] via-transparent to-white/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="absolute inset-0 border border-white/[0.08] group-hover:border-white/[0.15] transition-colors duration-500 rounded-2xl" />

      {/* Animated sheen */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
        style={{
          background: "linear-gradient(135deg, transparent 0%, rgba(255,255,255,0.04) 40%, rgba(255,255,255,0.08) 50%, rgba(255,255,255,0.04) 60%, transparent 100%)",
          backgroundSize: "200% 200%",
          animation: "sheen 4s ease-in-out infinite",
        }}
      />

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}
