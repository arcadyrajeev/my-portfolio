"use client";
import { useEffect, useRef, useState } from "react";
import Lenis from "lenis";

export default function SmoothScrollProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const rafId = useRef<number | null>(null);
  const settleTimer = useRef<number | null>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    // Enable Lenis only on desktop
    const isDesktop = window.innerWidth >= 1024; // lg breakpoint
    setEnabled(isDesktop);

    if (!isDesktop) return; // 👉 skip Lenis on mobile/tablet

    const lenis = new Lenis({
      lerp: 0.3,
      smoothWheel: true,
      wheelMultiplier: 1.05,
      touchMultiplier: 1.0,
    });

    const FAST_VELOCITY = 1.4;
    const SETTLE_MS = 250;

    const onScroll = ({ velocity }: { velocity: number }) => {
      const v = Math.abs(velocity || 0);

      if (v > FAST_VELOCITY && (lenis as any).options.lerp !== 0.22) {
        (lenis as any).options.lerp = 0.12;
      }

      if (settleTimer.current) window.clearTimeout(settleTimer.current);
      settleTimer.current = window.setTimeout(() => {
        (lenis as any).options.lerp = 0.35;
      }, SETTLE_MS);
    };

    lenis.on("scroll", onScroll);

    const raf = (time: number) => {
      lenis.raf(time);
      rafId.current = requestAnimationFrame(raf);
    };
    rafId.current = requestAnimationFrame(raf);

    return () => {
      if (rafId.current) cancelAnimationFrame(rafId.current);
      if (settleTimer.current) window.clearTimeout(settleTimer.current);
      lenis.off("scroll", onScroll);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
