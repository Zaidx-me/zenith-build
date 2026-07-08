"use client";

import { useEffect, useRef } from "react";

export default function FrameBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;
    const c = ctx;

    const w = 1280;
    const h = 720;
    canvas.width = w;
    canvas.height = h;

    const imgs: HTMLImageElement[] = [];
    let current = 0;
    let wanted = 0;
    let ticking = false;

    for (let i = 1; i <= 400; i++) {
      const img = new Image();
      const index = i;
      img.onload = () => {
        if (index === 1 || index === wanted) {
          c.drawImage(img, 0, 0, w, h);
          current = index;
        }
      };
      img.src = `/frames/frame_${String(i).padStart(4, "0")}.webp`;
      imgs[i] = img;
    }

    function render() {
      ticking = false;
      const st = document.documentElement.scrollTop;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const idx = max > 0 ? Math.round(1 + (st / max) * 399) : 1;

      if (idx === current) return;
      wanted = idx;

      const img = imgs[idx];
      if (img && img.complete) {
        c.drawImage(img, 0, 0, w, h);
        current = idx;
      }
    }

    function onScroll() {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(render);
      }
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef}
        className="fixed inset-0 z-0 w-full h-full object-cover"
      />
      <div className="fixed inset-0 z-[1] backdrop-blur-md bg-[#0C0C0C]/[0.35] pointer-events-none" />
    </>
  );
}
