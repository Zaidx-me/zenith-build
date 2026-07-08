"use client";

import { lazy, Suspense, useState, useEffect } from "react";

const Spline = lazy(() => import("@splinetool/react-spline"));

export default function ContactSpline() {
  const [canLoad, setCanLoad] = useState(false);

  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    const isLowEnd = navigator.hardwareConcurrency <= 2;
    setCanLoad(!isMobile && !isLowEnd);
  }, []);

  if (!canLoad) {
    return <div className="w-full h-full bg-gradient-to-br from-[#D4DDFE] to-[#E8DEFE] rounded-2xl" />;
  }

  return (
    <Suspense fallback={<div className="w-full h-full bg-gradient-to-br from-[#D4DDFE] to-[#E8DEFE] rounded-2xl" />}>
      <div className="w-full h-full">
        <Spline
          scene="https://prod.spline.design/2s-js80G3N7sfve6/scene.splinecode"
          style={{ width: "100%", height: "100%" }}
        />
      </div>
    </Suspense>
  );
}
