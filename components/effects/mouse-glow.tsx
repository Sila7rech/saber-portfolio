"use client";

import { useEffect, useState } from "react";

export function MouseGlow() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (event: MouseEvent) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-[-1] hidden lg:block">
      <div
        className="absolute size-[32rem] rounded-full bg-cyan-400/10 blur-3xl transition-transform duration-500"
        style={{
          transform: `translate3d(${position.x - 256}px, ${position.y - 256}px, 0)`,
        }}
      />
    </div>
  );
}