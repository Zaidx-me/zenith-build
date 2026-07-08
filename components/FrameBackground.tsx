"use client";

import { useEffect, useRef } from "react";

const frameCount = 120;

const currentFrame = (index: number) =>
  `/frames/frame_${index.toString().padStart(4, "0")}.webp`;

export default function FrameBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvasEl = canvasRef.current;
    if (!canvasEl) return;

    const ctx = canvasEl.getContext("2d", { alpha: false });
    if (!ctx) return;

    canvasEl.width = 1280;
    canvasEl.height = 720;

    const cvs = canvasEl as HTMLCanvasElement;
    const cctx = ctx as CanvasRenderingContext2D;

    const preloaded: HTMLImageElement[] = [];

    function preloadRest() {
      for (let i = 2; i <= frameCount; i++) {
        const img = new Image();
        img.src = currentFrame(i);
        preloaded[i] = img;
      }
    }

    const first = new Image();
    first.src = currentFrame(1);
    first.onload = () => {
      cctx.drawImage(first, 0, 0, cvs.width, cvs.height);
      preloadRest();
    };
    preloaded[1] = first;

    function onScroll() {
      const scrollTop = document.documentElement.scrollTop;
      const maxScrollTop =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollFraction = scrollTop / maxScrollTop;

      const frameIndex = Math.min(
        frameCount - 1,
        Math.floor(scrollFraction * frameCount)
      );

      requestAnimationFrame(() => {
        const img = preloaded[frameIndex + 1];
        if (img) {
          cctx.drawImage(img, 0, 0, cvs.width, cvs.height);
        }
      });
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 w-full h-full object-cover"
    />
  );
}
