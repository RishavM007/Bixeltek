"use client";

import React from "react";
import { motion } from "framer-motion";

const GoogleAdsMarqueeRiyadh: React.FC = () => {
  const googleAdsTexts = [
    "Smart Bidding Strategies",
    "Performance Max Campaigns",
    "Search & Display Ads",
    "Conversion Tracking Setup",
    "Arabic + English Ad Copy",
    "Riyadh Market Targeting",
    "High-Intent Keyword Mapping",
    "Landing Page Optimization",
  ];

  return (
    <div className="flex flex-col">
      {/* TOP MARQUEE — Yellow Gradient Background */}
      <section className="bg-gradient-to-tr from-yellow-500 via-yellow-700 to-black py-7 overflow-hidden">
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
          {googleAdsTexts.map((text, idx) => (
            <span
              key={idx}
              className="text-white font-inter text-3xl md:text-5xl font-semibold"
            >
              {text} &nbsp; •
            </span>
          ))}
          {googleAdsTexts.map((text, idx) => (
            <span
              key={idx + googleAdsTexts.length}
              className="text-white font-inter text-3xl md:text-5xl font-semibold"
            >
              {text} &nbsp; •
            </span>
          ))}
        </motion.div>
      </section>

      {/* BOTTOM MARQUEE — Black Background, White Text, Opposite Direction */}
      <section className="bg-gradient-to-bl from-white via-white to-black py-7 overflow-hidden">
        <motion.div
          className="flex w-max gap-10 whitespace-nowrap"
          animate={{ x: ["-50%", "0%"] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 35,
              ease: "linear",
            },
          }}
        >
          {googleAdsTexts.map((text, idx) => (
            <span
              key={idx}
              className="text-black font-inter text-3xl md:text-5xl font-semibold"
            >
              {text} &nbsp; •
            </span>
          ))}
          {googleAdsTexts.map((text, idx) => (
            <span
              key={idx + googleAdsTexts.length}
              className="text-black font-inter text-3xl md:text-5xl font-semibold"
            >
              {text} &nbsp; •
            </span>
          ))}
        </motion.div>
      </section>
    </div>
  );
};

export default GoogleAdsMarqueeRiyadh;
