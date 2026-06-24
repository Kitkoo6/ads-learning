"use client";

import { useEffect, useState } from "react";

export function ReadingProgress() {
  const [pct, setPct] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      const v = max > 0 ? Math.min(100, Math.max(0, (h.scrollTop / max) * 100)) : 0;
      setPct(v);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed left-0 right-0 top-0 z-50 h-0.5 bg-transparent"
    >
      <div
        className="h-full bg-gradient-to-r from-[#1877F2] via-[#FE2C55] to-[#EE4D2D] transition-[width] duration-150 ease-out"
        style={{ width: `${pct}%` }}
      />
    </div>
  );
}
