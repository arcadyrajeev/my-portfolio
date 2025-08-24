"use client";
import { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";

export default function SmoothScrollProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const rafId = useRef<number | null>(null);
  const settleTimer = useRef<number | null>(null);

  useEffect(() => {
    const lenis = new Lenis({
      // keep your base feel
      lerp: 0.3, // snappy default
      smoothWheel: true,

      wheelMultiplier: 1.05, // tiny speed bump so momentum feels stronger
      touchMultiplier: 1.0, // tune if mobile feels off
    });

    // 👉 Dynamic “momentum” tweak:
    // When user scrolls fast, temporarily lower lerp (more glide),
    // then restore to 0.35 after things settle.
    const FAST_VELOCITY = 1.4; // threshold for "fast" scroll
    const SETTLE_MS = 250; // how long to wait before restoring

    const onScroll = ({ velocity }: { velocity: number }) => {
      const v = Math.abs(velocity || 0);

      // If fast movement detected, make it floatier
      if (v > FAST_VELOCITY && (lenis as any).options.lerp !== 0.22) {
        (lenis as any).options.lerp = 0.12; // more inertia while moving quickly
      }

      // When velocity calms down, schedule a restore
      if (settleTimer.current) window.clearTimeout(settleTimer.current);
      settleTimer.current = window.setTimeout(() => {
        (lenis as any).options.lerp = 0.35; // back to your snappy base
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
