"use client";

import { useEffect } from "react";

export default function ImmersiveMode() {
  useEffect(() => {
    function attempt() {
      if (window.scrollY < 2) {
        window.scrollTo(0, 1);
        window.scrollTo(0, 0);
      }
    }
    attempt();
    window.addEventListener("touchstart", attempt, { once: true });
  }, []);

  return null;
}
