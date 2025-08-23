"use client";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

export default function SmoothScrollProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const lenis = new Lenis({
      smoothWheel: true,

      lerp: 0.4,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy(); // important cleanup
    };
  }, []);

  return <>{children}</>;
}
