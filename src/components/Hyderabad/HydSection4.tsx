"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger);

export default function ZoomText() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    // ✅ Lenis smooth scroll
    const lenis = new Lenis({
      lerp: 0.1,
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // ✅ Select all lines
    const texts = gsap.utils.toArray<HTMLHeadingElement>("#zoom-section h2");

    ScrollTrigger.create({
      trigger: "#zoom-section",
      start: "top center",
      once: true, // only once
      onEnter: () => {
        const tl = gsap.timeline();

        texts.forEach((text, index) => {
          tl.fromTo(
            text,
            { scale: 10, opacity: 0 },
            { scale: 1, opacity: 1, duration: 1, ease: "power4.out" },
            index * 1.2 // stagger timing
          );
        });
      },
    });

    return () => {
      lenis.destroy();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <div className="min-h-screen py-3">
      {/* Zoom Section */}
      <section
        id="zoom-section"
        className="relative h-screen w-full flex items-center justify-center bg-black overflow-hidden"
      >
        <div className="text-center uppercase font-extrabold leading-tight text-[#39FF14] relative z-10 flex flex-col gap-4">
          <h2 className="text-[9vw] opacity-0">If you’re not </h2>
          <h2 className="text-[9vw] opacity-0">on Page One,</h2>
          <h2 className="text-[9vw] opacity-0">you’re invisible.</h2>
        </div>
      </section>
    </div>
  );
}
