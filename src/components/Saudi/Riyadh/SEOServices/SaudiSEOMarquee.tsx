"use client";

import React from "react";
import { motion } from "framer-motion";

const SeoMarqueeRiyadh: React.FC = () => {
  const seoTexts = [
    "SEO Audit & Strategy",
    "Keyword Research & Mapping",
    "Technical SEO Optimization",
    "Content Architecture & Silos",
    "Backlink & Authority Building",
    "Local SEO for Riyadh",
    "Arabic + English Pages",
    "Analytics & Conversion Tracking",
  ];

  return (
    <div className="flex flex-col">
      {/* TOP MARQUEE — Green-Yellow Gradient Background */}
      <section className="bg-yellow-500 py-7 overflow-hidden">
        <motion.div
          className="flex w-max gap-10 whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 35,
              ease: "linear",
            },
          }}
        >
          {seoTexts.map((text, idx) => (
            <span
              key={idx}
              className="text-white font-inter text-3xl md:text-5xl font-semibold"
            >
              {text} &nbsp; •
            </span>
          ))}
          {seoTexts.map((text, idx) => (
            <span
              key={idx + seoTexts.length}
              className="text-white font-inter text-3xl md:text-5xl font-semibold"
            >
              {text} &nbsp; •
            </span>
          ))}
        </motion.div>
      </section>

      {/* BOTTOM MARQUEE — Black Background, White Text, Opposite Direction */}
     
    </div>
  );
};

export default SeoMarqueeRiyadh;
