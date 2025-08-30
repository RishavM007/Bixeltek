"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import Lenis from "lenis";
import Image from "next/image";

export default function VideoZoomSection() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const imgRef = useRef<HTMLImageElement | null>(null);
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const paraRef = useRef<HTMLParagraphElement | null>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        titleRef.current,
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, delay: 4 }
      ).fromTo(
        paraRef.current,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 1 ,delay:6 },
        "-=0.4"
      );
    });

    return () => ctx.revert(); 
  }, []);


  useLayoutEffect(() => {
    const video = imgRef.current!;
    const container = containerRef.current!;
    if (!video || !container) return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => t,
      lerp: 0.1,
      orientation: "vertical",
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    const onScroll = () => {
      const rect = container.getBoundingClientRect();
      const scrollProgress = Math.min(Math.max(-rect.top / window.innerHeight, 0), 1);

      gsap.to(video, {
        scale: 1 + 0.2 * scrollProgress,
        ease: "none",
        overwrite: true,
      });
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      lenis.destroy();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <>
      <section
        ref={containerRef}
        className="relative w-full h-screen bg-black overflow-hidden"
      >
        {/* Background image */}
        <img
          ref={imgRef}
          src="/digital-world-banner-background-remixed-from-public-domain-by-nasa.jpg"
          alt="image-bg"
          className="absolute inset-0 w-full h-full object-cover scale-100 origin-center"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>
         <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent pointer-events-none"></div>


        {/* Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
          <h1
            ref={titleRef}
            className="text-5xl md:text-[120px] font-inter font-light  text-center mb-4 cursor-pointer select-none"
          >
            Digital Marketing Agency in Hyderabad
          </h1>
          <p ref={paraRef} className="text-sm font-inter max-w-2xl opacity-90">
            Your customers are searching online right now. If they can’t find you,
            they’re finding your competitors. With the right digital marketing
            strategy, your business gets seen, trusted, and chosen.
          </p>
        </div>

        {/* Buttons at bottom corners */}
        <div className="absolute bottom-16 left-16">
          <button className="px-6 py-3 rounded-full bg-transparent border border-white text-white font-semibold shadow-lg transition">
            Free Growth Plan
          </button>
        </div>

        <div className="absolute bottom-16 right-16">
          <button className="px-6 py-3  bg-transparent border-white rounded-full text-white font-semibold shadow-lg transition">
            Talk To Us
          </button>
        </div>
      </section>

    </>
  );
}
