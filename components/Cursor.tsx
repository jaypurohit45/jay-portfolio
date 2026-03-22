"use client";

import { useEffect, useRef } from "react";

export default function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      // Using direct DOM manipulation for 60fps buttery smooth performance
      if (cursorRef.current && dotRef.current) {
        cursorRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
        dotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }
    };

    window.addEventListener("mousemove", onMouseMove);
    return () => window.removeEventListener("mousemove", onMouseMove);
  }, []);

  return (
    <>
      {/* Outer trailing circle */}
      <div
        ref={cursorRef}
        className="hidden md:block fixed top-0 left-0 w-8 h-8 rounded-full border-2 border-cyan-500/50 pointer-events-none z-[100] transition-transform duration-100 ease-out -translate-x-1/2 -translate-y-1/2 mix-blend-screen"
      />
      {/* Inner solid dot */}
      <div
        ref={dotRef}
        className="hidden md:block fixed top-0 left-0 w-2 h-2 bg-cyan-400 rounded-full pointer-events-none z-[100] -translate-x-1/2 -translate-y-1/2"
      />
    </>
  );
}