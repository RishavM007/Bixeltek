"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

import img1 from "@/assets/Reflect ✦ MaxiBestOf.jpg";
import img2 from "@/assets/Unlock Your Online Potential_ Pro Web Design_.jpg";
import img3 from "@/assets/image 3.jpeg";
import img4 from "@/assets/image2.jpeg";
import img5 from "@/assets/Web3 Footer Landing Page.jpg";
import img6 from "@/assets/Unlock Your Online Potential_ Pro Web Design_.jpg";

export default function DribbbleGrid() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const imagesRef = useRef<(HTMLImageElement | null)[]>([]);
  const textRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);


    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);

    const ctx = gsap.context(() => {
      gsap.set(containerRef.current, { perspective: 1200 });

      gsap.set(imagesRef.current, {
        opacity: 1,
        x: 0,
        y: 0,
        zIndex: 10,
      });

      gsap.set(textRef.current, {
        opacity: 0,
        scale: 0.8,
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top center",
          end: "bottom center",
          scrub: true,
          markers: false, 
        },
      });


      tl.to(imagesRef.current[0], {
        x: "-50%",
        y: "60%", 
        rotationX: -25,
        rotationY: 15,
        rotationZ: -30,
        z: 300,
        duration: 1,
        ease: "power2.out"
      }, 0)
        .to(imagesRef.current[1], {
          x: "50%",
          y: "60%", 
          rotationX: -25,
          rotationY: -15,
          rotationZ: 30,
          z: 300,
          duration: 1,
          ease: "power2.out"
        }, 0)
        .to(imagesRef.current[2], {
          x: "-70%",
          y: "40%", 
          rotationX: -15,
          rotationY: 10,
          rotationZ: -15,
          z: 200,
          duration: 1,
          ease: "power2.out"
        }, 0)
        .to(imagesRef.current[3], {
          x: "70%",
          y: "40%", 
          rotationX: -15,
          rotationY: -10,
          rotationZ: 15,
          z: 200,
          duration: 1,
          ease: "power2.out"
        }, 0)
        .to(imagesRef.current[4], {
          x: "-50%",
          y: "20%", // slightly lower
          rotationX: -5,
          rotationY: 5,
          rotationZ: -10,
          z: 100,
          duration: 1,
          ease: "power2.out"
        }, 0)
        .to(imagesRef.current[5], {
          x: "50%",
          y: "20%", // slightly lower
          rotationX: -5,
          rotationY: -5,
          rotationZ: 10,
          z: 100,
          duration: 1,
          ease: "power2.out"
        }, 0)
        .to(textRef.current, {
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "power2.out"
        }, 0.3);


    }, containerRef);

    return () => {
      ctx.revert();
      lenis.destroy();
    };
  }, []);

  const images = [img1, img2, img3, img4, img5, img6];

  return (
    <section
      ref={sectionRef}
      className="relative w-full my-40 min-h-screen flex items-center justify-center bg-black overflow-x-hidden overflow-y-visible"
    >
      <div ref={containerRef} className="w-full h-full">
        <div
          ref={textRef}
          className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center text-white px-4"
        >
          <h2 className="text-4xl md:text-[100px] font-inter uppercase font-bold font- mb-6">Bixeltek</h2>
          <p className="text-base font-inter md:text-xl mt-5 max-w-2xl">
            Showcasing the power of digital marketing, web design, and Google Ads expertise—Bixeltek turns ideas into results.
          </p>
          <button className="mt-8 px-6 py-3 bg-white text-black rounded-full font-semibold hover:bg-gray-200 transition-colors">
            Explore Our Work
          </button>
        </div>
        <div className="grid grid-cols-2 grid-rows-3 gap-4 md:gap-6 h-full w-full max-w-full mx-auto p-0 md:p-0">
          {images.map((src, i) => (
            <div key={i} className="relative rounded-xl md:rounded-2xl shadow-2xl">
              <img
                ref={(el: any) => (imagesRef.current[i] = el)}
                src={src.src}
                alt={`Card ${i + 1}`}
                className="w-full rounded-3xl h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}