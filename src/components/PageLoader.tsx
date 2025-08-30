"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const NUM_RIBBONS = 25;

export default function PageTransition() {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!container.current) return;

    const ribbons = container.current.querySelectorAll(".ribbon");
    gsap.set(ribbons, { rotateY: 90, transformOrigin: "left center" });

    let onCoverCb: (() => void) | null = null;
    let onCompleteCb: (() => void) | null = null;

    const tl = gsap.timeline({ paused: true });

    // Cover (old page hidden)
    tl.to(ribbons, {
      rotateY: 0,
      duration: 0.6,
      ease: "power4.inOut",
      stagger: 0.08,
      onComplete: () => onCoverCb?.(),
    })
      // Reveal (new page shown)
      .to(
        ribbons,
        {
          rotateY: -90,
          duration: 0.6,
          ease: "power4.inOut",
          stagger: 0.08,
          onComplete: () => onCompleteCb?.(),
        },
        "+=0.2"
      );

    // 🔥 expose function globally
    (window as any).pageTransition = ({
      onCover,
      onComplete,
    }: {
      onCover?: () => void;
      onComplete?: () => void;
    } = {}) => {
      onCoverCb = onCover || null;
      onCompleteCb = onComplete || null;
      tl.restart();
    };
  }, []);

  return (
    <div
      ref={container}
      className="pointer-events-none fixed top-0 left-0 w-full h-full z-[9999] flex"
    >
      {Array.from({ length: NUM_RIBBONS }).map((_, i) => (
        <div
          key={i}
          className="ribbon flex-1 h-full bg-[#000] will-change-transform"
        />
      ))}
    </div>
  );
}
