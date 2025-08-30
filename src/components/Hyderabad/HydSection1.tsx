// app/components/Hero.tsx
"use client";
import Image from "next/image";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import author1 from '@/assets/t1-author-2.webp'
import author2 from '@/assets/t1-author-3.webp'
import author3 from '@/assets/t1-author-4.webp'

gsap.registerPlugin(ScrollTrigger);

export default function HydHero() {
    const heroRef = useRef(null);

  useEffect(() => {
    const el = heroRef.current;

    gsap.to(el, {
      scrollTrigger: {
        trigger: el,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
      y: -200,
      scale: 0.85,
      rotationX: 20,
      transformOrigin: "top center",
      ease: "power2.out",
    });
  }, []);
    
  return (
    <section ref={heroRef} className="relative h-[95vh] mt-[-170px] w-full flex items-center justify-center overflow-hidden">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black/60 z-0" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-7xl">
        {/* Logos */}
        {/* <div className="flex items-center justify-center gap-6 text-gray-300 text-sm mb-6">
          <span className="italic">Top Rated Digital Agency</span>
          <span className="font-semibold">Chargemap</span>
          <span className="font-semibold">greenly</span>
          <span className="font-semibold">GROWL</span>
        </div> */}

        {/* Heading */}
        <h1 className="text-4xl md:text-7xl mt-20 font-extrabold text-white leading-tight">
         Digital Marketing Agency in <br />
          <span className="text-purple-500">Hyderabad</span>
        </h1>

        {/* Subtext */}
        <p className="mt-6 text-gray-300 max-w-2xl mx-auto">
         Your customers are searching online right now. If they can’t find you, they’re finding your competitors. With the right digital marketing strategy, your business gets seen, trusted, and chosen..
        </p>

        {/* CTA & Social Proof */}
        <div className="mt-8 flex items-center justify-center gap-6 flex-wrap">
          <button className="px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-lg shadow-lg hover:opacity-90 transition">
            All Reviews
          </button>

          {/* Avatars */}
          <div className="flex -space-x-3">
            <Image
              src={author1}
              alt="user1"
              width={40}
              height={40}
              className="rounded-full border-2 border-white"
            />
            <Image
              src={author2}
              alt="user2"
              width={40}
              height={40}
              className="rounded-full border-2 border-white"
            />
            <Image
              src={author3}
              alt="user3"
              width={40}
              height={40}
              className="rounded-full border-2 border-white"
            />
          </div>

          {/* Text */}
          <p className="text-gray-400 text-sm tracking-wide">
            Join <span className="font-semibold text-white font-poppins">12,135+</span> other<br></br> loving customers
          </p>
        </div>
      </div>

      {/* Decorative Gradient (bottom right) */}
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-500/40 rounded-full blur-3xl" />
    </section>
  );
}
