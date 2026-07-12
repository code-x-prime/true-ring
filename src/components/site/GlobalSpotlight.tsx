"use client";

import { useEffect, useRef } from "react";

export function GlobalSpotlight() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      containerRef.current.style.setProperty("--mouse-x", `${e.clientX}px`);
      containerRef.current.style.setProperty("--mouse-y", `${e.clientY}px`);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="pointer-events-none fixed inset-0 z-0 transition-opacity duration-300 pointer-events-none"
      style={{
        background: `radial-gradient(1000px circle at var(--mouse-x, 0px) var(--mouse-y, 0px), rgba(255, 85, 0, 0.05) 0%, rgba(0, 173, 249, 0.035) 30%, transparent 65%)`,
      }}
    />
  );
}
