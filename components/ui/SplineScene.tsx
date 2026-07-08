"use client";

import dynamic from "next/dynamic";

const Spline = dynamic(() => import("@splinetool/react-spline"), {
  ssr: false,
  loading: () => null,
});

interface Props {
  scene: string;
  className?: string;
}

export default function SplineScene({ scene, className = "" }: Props) {
  return (
    <div className={className}>
      <Spline scene={scene} />
    </div>
  );
}
