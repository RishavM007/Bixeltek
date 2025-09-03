"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

// Example tech icons (replace with your actual images)
import ahref from '@/assets/ahref.png';
import semrush from '@/assets/629a40b63e59ee069da94c81.png';
import seranking from '@/assets/SERanking.png';
import looker from '@/assets/Looker_6f803d7fdc.webp';
import wordpress from '@/assets/wordpress.png';
import elementor from '@/assets/elementor.png';
import nextjsicon from '@/assets/icons8-nextjs-96.png';
import reactksicon from '@/assets/1174949_js_react js_logo_react_react native_icon.png';
import tailwindcsslogo from '@/assets/Tailwind CSS.png';

export default function TechChaos() {
    const sectionRef = useRef<HTMLDivElement | null>(null);
    const containerRef = useRef<HTMLDivElement | null>(null);
    const iconsRef = useRef<(HTMLDivElement | null)[]>([]);


    const icons = [
        ahref, semrush, seranking, looker, wordpress,
        elementor, nextjsicon, reactksicon, tailwindcsslogo
    ];

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

        lenis.on("scroll", ScrollTrigger.update);
        gsap.ticker.add((time) => lenis.raf(time * 1000));
        gsap.ticker.lagSmoothing(0);

        const ctx = gsap.context(() => {
            gsap.set(containerRef.current, { perspective: 800 });
            gsap.set(iconsRef.current, { y: -50, opacity: 1, rotation: 0, zIndex: 10, x: 0 });

            ScrollTrigger.create({
                trigger: sectionRef.current,
                start: "top center",
                onEnter: () => {
                    // Step 1: Gravity fall
                    gsap.to(iconsRef.current, {
                        y: "+=500",
                        rotation: "+=360",
                        duration: 3,
                        ease: "bounce.out",
                        stagger: 0.1,
                        onComplete: () => startChaos(iconsRef.current)
                    });
                },
            });

            // Chaos function - roam and bounce off edges
           function startChaos(icons: (HTMLDivElement | null)[]) {
  // Filter out nulls first
  const validIcons = icons.filter((icon): icon is HTMLDivElement => icon !== null);

  validIcons.forEach(icon => {
    let vx = gsap.utils.random(-200, 200); // x velocity px/sec
    let vy = gsap.utils.random(-200, 200); // y velocity px/sec
    let scale = gsap.utils.random(0.3, 0.8); // random initial size

    gsap.set(icon, { scale }); // set initial size

    function animate() {
      const rect = icon.getBoundingClientRect();
      const width = window.innerWidth;
      const height = window.innerHeight;

      // Reverse velocity if hitting edges
      if (rect.left <= 0 || rect.right >= width) vx *= -1;
      if (rect.top <= 0 || rect.bottom >= height) vy *= -1;


      gsap.to(icon, {
        x: "+=" + vx / 60,
        y: "+=" + vy / 60,
        scale: scale,
        duration: 1 / 60,
        ease: "none",
        onComplete: animate,
      });
    }

    animate();
  });
}


        }, containerRef);

        return () => {
            ctx.revert();
            lenis.destroy();
        };
    }, []);

    return (
        <section
            ref={sectionRef}
            className="relative w-full min-h-screen flex items-center justify-center bg-black"
        >
            <div ref={containerRef} className="w-full h-full relative">
                <h2 className="absolute top-8 left-1/2 -translate-x-1/2 text-4xl md:text-6xl font-bold text-white z-20 mb-6">
                    Tech We Use
                </h2>

                <div className="grid grid-cols-5 grid-rows-2 gap-6 w-full max-w-6xl mx-auto p-4 md:p-8">
                    {icons.map((src, i) => (
                        <div
                            key={i}
                            ref={(el: any) => (iconsRef.current[i] = el)}
                            className="relative flex items-center justify-center w-full h-24 md:h-24 bg-gray-200 rounded-lg shadow-xl"
                        >
                            <img src={src.src} alt={`Tech ${i}`} className="w-12 md:w-16 object-contain" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
