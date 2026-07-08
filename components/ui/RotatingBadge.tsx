"use client";

import { motion } from "framer-motion";

const labels = [
  "ZENITH BUILD",
  "DESIGN",
  "DEVELOP",
  "SCALE",
];

export default function RotatingBadge() {
  return (
    <div className="relative w-32 h-32 md:w-40 md:h-40 flex items-center justify-center">
      <svg className="absolute inset-0 w-full h-full animate-spin-slow">
        <defs>
          <path
            id="badge-circle"
            d="M 60 60 m -55 0 a 55 55 0 1 1 110 0 a 55 55 0 1 1 -110 0"
            fill="none"
          />
        </defs>
        <text className="fill-white/50 text-[0.5rem] uppercase tracking-widest font-medium">
          <textPath href="#badge-circle" startOffset="0%">
            {labels.join(" • ")}
          </textPath>
        </text>
      </svg>
      <div className="w-10 h-10 rounded-full flex items-center justify-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
          className="w-4 h-4"
          style={{ color: "#19B64F" }}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-full h-full">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </motion.div>
      </div>
    </div>
  );
}
