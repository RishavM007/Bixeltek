"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import Lenis from "lenis";

export default function VideoScrollPage() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useLayoutEffect(() => {
    const video = videoRef.current!;
    const container = containerRef.current!;
    if (!video || !container) return;

    // Optional: smooth scrolling with Lenis
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

    // Trigger video zoom when the section enters the viewport
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          gsap.to(video, {
            width: "90%",
            scale: 1,
            opacity: 1,
            duration: 1,
            borderRadius: 40, 
            ease: "power2.out",
          });
        } else {
          // Reset to initial state when leaving viewport
          gsap.to(video, {
            width: "10%",
            scale: 0.9,
            opacity: 0.7,
            duration: 1,
            borderRadius: 200, // Back to 200px when small
            ease: "power2.out",
          });
        }
      },
      { threshold: 0.3 } // triggers when 50% of section is visible
    );

    observer.observe(container);

    return () => {
      observer.disconnect();
      lenis.destroy();
    };
  }, []);

  return (
    <div className="min-h-[40vh] bg-black flex flex-col items-center justify-start">
      <section
        ref={containerRef}
        className="relative w-full h-[110vh] flex items-start justify-center overflow-hidden bg-black"
      >
        <video
          ref={videoRef}
          src="/intro-video.mp4"
          muted
          autoPlay
          loop
          playsInline
          className="w-[100%] rounded-3xl md:w-[100%] object-cover shadow-xl"
          style={{ 
            scale: 0.9, 
            opacity: 0.7,
            borderRadius: "200px" // Initial small state with 200px border radius
          }}
        />
      </section>
    </div>
  );
}