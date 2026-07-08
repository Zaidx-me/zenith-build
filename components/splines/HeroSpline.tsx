"use client";

import { lazy, Suspense, useState, useEffect } from "react";

const Spline = lazy(() => import("@splinetool/react-spline"));

export default function HeroSpline() {
  const [canLoad, setCanLoad] = useState(false);

  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    const isLowEnd = navigator.hardwareConcurrency <= 2;
    setCanLoad(!isMobile && !isLowEnd);
  }, []);

  if (!canLoad) {
    return <div className="absolute inset-0 bg-gradient-to-br from-[#D4DDFE] to-[#E8DEFE]" />;
  }

  return (
    <Suspense fallback={<div className="absolute inset-0 bg-gradient-to-br from-[#D4DDFE] to-[#E8DEFE]" />}>
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/eizLZ-h5fBeauTSf/scene.splinecode"
          style={{ width: "100%", height: "100%" }}
        />
      </div>
    </Suspense>
  );
}
