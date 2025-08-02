'use client';

import { motion, useScroll, useSpring, useVelocity } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

export const WebdevCar: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();

  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 40,
    stiffness: 20,
    mass: 1,
  });

  const [direction, setDirection] = useState<number>(0);

  useEffect(() => {
    const unsubscribe = smoothVelocity.on("change", (latest: number) => {
      if (latest > 0.1) setDirection(1);
      else if (latest < -0.1) setDirection(-1);
      else setDirection(0);
    });

    return unsubscribe;
  }, [smoothVelocity]);

  const topTaglines: string[] = [
    'WE DON’T JUST BUILD WEBSITES — WE BUILD HIGH-CONVERTING DIGITAL EXPERIENCES THAT SCALE YOUR BUSINESS.',
    'ADS THAT CLICK. DESIGNS THAT CONVERT. CRAFTING PERFORMANCE-FIRST WEB PAGES FOR MODERN BRANDS.',
    'FUELED BY DATA. DESIGNED FOR IMPACT. WE CREATE SALES-READY LANDING PAGES THAT TURN TRAFFIC INTO GROWTH.'
  ];

  const bottomTaglines: string[] = [
    'YOUR WEBSITE ISN’T A BROCHURE — IT’S YOUR HARDEST-WORKING SALESPERSON WORKING 24/7.',
    'LANDING PAGES ENGINEERED FOR SPEED, SEO, AND SALES — BUILT FOR BUSINESSES THAT MEAN BUSINESS.',
    'WE DESIGN SYSTEMS, NOT JUST SITES. STRATEGIC UI, PERFORMANCE-DRIVEN, AND BUILT TO CONVERT.'
  ];

  const renderCarousel = (
    taglines: string[],
    reverse: boolean = false
  ): JSX.Element => (
    <motion.div
      className="flex whitespace-nowrap gap-32 px-8 will-change-transform"
      initial={{ x: '-50%' }}
      animate={{
        x: direction === 0 ? '-50%' : direction * (reverse ? -1 : 1) * 1000,
      }}
      transition={{
        repeat: Infinity,
        repeatType: 'loop',
        ease: 'linear',
        duration: 100,
      }}
    >
      {[...Array(10)].map((_, i: number) => (
        <div
          key={i}
          className="text-white text-5xl font-sofiasanscondensed font-bold uppercase tracking-wider"
        >
          {taglines[i % taglines.length]}
        </div>
      ))}
    </motion.div>
  );

  return (
    <section className="pt-0 pb-0 mb-0 flex flex-col gap-20 bg-[#2a2a2a] overflow-hidden">
      <div ref={containerRef} className="w-[90%] md:w-[100%] lg:w-[100%] mx-auto">
        <div className="flex flex-col gap-0">
          {/* Top Carousel */}
          <div className="overflow-hidden border border-white bg-[#9D4EDD] pt-5 pb-5">{renderCarousel(topTaglines, false)}</div>

          {/* Bottom Carousel - Opposite Direction */}
          <div className="overflow-hidden bg-[#FFDB58] pt-5 pb-5">{renderCarousel(bottomTaglines, true)}</div>
        </div>
      </div>
    </section>
  );
};
