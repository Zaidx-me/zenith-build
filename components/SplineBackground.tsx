"use client";

import { motion } from "framer-motion";

export default function SplineBackground() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0 bg-[#0C0C0C]" />
      <motion.div
        className="absolute top-[-30%] left-[-10%] w-[60%] h-[60%] rounded-full opacity-[0.03] bg-gradient-to-br from-white via-white/50 to-transparent blur-[120px]"
        animate={{
          x: [0, 40, -30, 0],
          y: [0, -30, 40, 0],
          scale: [1, 1.08, 0.95, 1],
        }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full opacity-[0.02] bg-gradient-to-tr from-white/60 via-white/30 to-transparent blur-[120px]"
        animate={{
          x: [0, -30, 20, 0],
          y: [0, 30, -20, 0],
          scale: [1, 0.93, 1.06, 1],
        }}
        transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="absolute inset-0 z-[1] bg-[#0C0C0C]/[0.40] backdrop-blur-2xl pointer-events-none" />
    </div>
  );
}
