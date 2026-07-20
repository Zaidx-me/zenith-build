"use client";

import { ReactNode, useRef, useEffect, useId, useMemo, useCallback } from "react";

interface GlassSurfaceProps {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
  borderRadius?: number;
  opacity?: number;
  blur?: number;
}

function checkSvgFilterSupport(filterId: string): boolean {
  if (typeof window === "undefined" || typeof document === "undefined") return false;
  const div = document.createElement("div");
  div.style.backdropFilter = `url(#${filterId})`;
  return div.style.backdropFilter !== "";
}

const BORDER_WIDTH = 0.07;
const BRIGHTNESS = 50;
const DISTORTION_SCALE = -180;
const RED_OFFSET = 0;
const GREEN_OFFSET = 10;
const BLUE_OFFSET = 20;
const X_CHANNEL = "R";
const Y_CHANNEL = "G";
const MIX_BLEND_MODE = "difference";

export default function GlassSurface({
  children,
  className = "",
  style = {},
  borderRadius = 20,
  opacity = 0.93,
  blur = 12,
}: GlassSurfaceProps) {
  const uniqueId = useId().replace(/:/g, "-");
  const filterId = `glass-filter-${uniqueId}`;
  const redGradId = `red-grad-${uniqueId}`;
  const blueGradId = `blue-grad-${uniqueId}`;

  const containerRef = useRef<HTMLDivElement>(null);
  const feImageRef = useRef<SVGFEImageElement>(null);
  const redChannelRef = useRef<SVGFEDisplacementMapElement>(null);
  const greenChannelRef = useRef<SVGFEDisplacementMapElement>(null);
  const blueChannelRef = useRef<SVGFEDisplacementMapElement>(null);
  const gaussianBlurRef = useRef<SVGFEGaussianBlurElement>(null);

  const svgSupported = useMemo(() => checkSvgFilterSupport(filterId), [filterId]);

  const generateDisplacementMap = useCallback(() => {
    const rect = containerRef.current?.getBoundingClientRect();
    const actualWidth = rect?.width || 400;
    const actualHeight = rect?.height || 200;
    const edgeSize = Math.min(actualWidth, actualHeight) * (BORDER_WIDTH * 0.5);

    const svgContent = `
      <svg viewBox="0 0 ${actualWidth} ${actualHeight}" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="${redGradId}" x1="100%" y1="0%" x2="0%" y2="0%">
            <stop offset="0%" stop-color="#0000"/>
            <stop offset="100%" stop-color="red"/>
          </linearGradient>
          <linearGradient id="${blueGradId}" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="#0000"/>
            <stop offset="100%" stop-color="blue"/>
          </linearGradient>
        </defs>
        <rect x="0" y="0" width="${actualWidth}" height="${actualHeight}" fill="black"></rect>
        <rect x="0" y="0" width="${actualWidth}" height="${actualHeight}" rx="${borderRadius}" fill="url(#${redGradId})" />
        <rect x="0" y="0" width="${actualWidth}" height="${actualHeight}" rx="${borderRadius}" fill="url(#${blueGradId})" style="mix-blend-mode: ${MIX_BLEND_MODE}" />
        <rect x="${edgeSize}" y="${edgeSize}" width="${actualWidth - edgeSize * 2}" height="${actualHeight - edgeSize * 2}" rx="${borderRadius}" fill="hsl(0 0% ${BRIGHTNESS}% / ${opacity})" style="filter:blur(${blur}px)" />
      </svg>
    `;

    return `data:image/svg+xml,${encodeURIComponent(svgContent)}`;
  }, [borderRadius, opacity, blur, redGradId, blueGradId]);

  const updateDisplacementMap = useCallback(() => {
    feImageRef.current?.setAttribute("href", generateDisplacementMap());
  }, [generateDisplacementMap]);

  useEffect(() => {
    updateDisplacementMap();

    [
      { ref: redChannelRef, offset: RED_OFFSET },
      { ref: greenChannelRef, offset: GREEN_OFFSET },
      { ref: blueChannelRef, offset: BLUE_OFFSET },
    ].forEach(({ ref, offset }) => {
      if (ref.current) {
        ref.current.setAttribute("scale", (DISTORTION_SCALE + offset).toString());
        ref.current.setAttribute("xChannelSelector", X_CHANNEL);
        ref.current.setAttribute("yChannelSelector", Y_CHANNEL);
      }
    });

    gaussianBlurRef.current?.setAttribute("stdDeviation", "0.7");

    if (!containerRef.current) return;

    const resizeObserver = new ResizeObserver(() => {
      setTimeout(updateDisplacementMap, 0);
    });

    resizeObserver.observe(containerRef.current);
    return () => resizeObserver.disconnect();
  }, [updateDisplacementMap]);

  return (
    <div
      ref={containerRef}
      className={`${svgSupported ? "glass-surface--svg" : "glass-surface--fallback"} ${className}`}
      style={{
        ...style,
        borderRadius: `${borderRadius}px`,
        "--glass-frost": 0,
        "--glass-saturation": 1,
        "--filter-id": `url(#${filterId})`,
      } as React.CSSProperties}
    >
      {svgSupported && (
        <svg
          className="absolute w-full h-full pointer-events-none opacity-0 -z-1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <filter id={filterId} colorInterpolationFilters="sRGB" x="0%" y="0%" width="100%" height="100%">
              <feImage ref={feImageRef} x="0" y="0" width="100%" height="100%" preserveAspectRatio="none" result="map" />
              <feDisplacementMap ref={redChannelRef} in="SourceGraphic" in2="map" result="dispRed" />
              <feColorMatrix in="dispRed" type="matrix" values="1 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 1 0" result="red" />
              <feDisplacementMap ref={greenChannelRef} in="SourceGraphic" in2="map" result="dispGreen" />
              <feColorMatrix in="dispGreen" type="matrix" values="0 0 0 0 0  0 1 0 0 0  0 0 0 0 0  0 0 0 1 0" result="green" />
              <feDisplacementMap ref={blueChannelRef} in="SourceGraphic" in2="map" result="dispBlue" />
              <feColorMatrix in="dispBlue" type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 1 0 0  0 0 0 1 0" result="blue" />
              <feBlend in="red" in2="green" mode="screen" result="rg" />
              <feBlend in="rg" in2="blue" mode="screen" result="output" />
              <feGaussianBlur ref={gaussianBlurRef} in="output" stdDeviation="0.7" />
            </filter>
          </defs>
        </svg>
      )}
      <div className="relative z-1 w-full h-full flex items-center justify-center p-2" style={{ borderRadius: "inherit" }}>
        {children}
      </div>
    </div>
  );
}
