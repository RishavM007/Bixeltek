"use client";

import React from "react";
import { motion } from "framer-motion";

const DigitalMarketingMarqueeRiyadh: React.FC = () => {
  const marketingTexts = [
    "Google Ads for Riyadh Businesses",
    "Full-Funnel Marketing Strategy",
    "Bilingual Campaigns — Arabic & English",
    "Performance Tracking with GA4",
    "Creative Ads That Convert",
    "Social Media Growth Systems",
    "SEO + PPC Synergy for Maximum ROI",
    "Data-Driven Marketing Frameworks",
  ];

  return (
    <div className="flex flex-col mt-0">
      {/* Yellow Marquee */}
      <section className="bg-gradient-to-r from-[#fffdf5] via-green-500 to-[#fffdf5] py-8 overflow-hidden">
        <motion.div
          className="flex w-max gap-12 whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 40,
              ease: "linear",
            },
          }}
        >
          {marketingTexts.map((text, idx) => (
            <span
              key={idx}
              className="text-black font-inter text-3xl md:text-5xl font-semibold tracking-tight drop-shadow-lg"
            >
              {text} &nbsp; •
            </span>
          ))}
          {marketingTexts.map((text, idx) => (
            <span
              key={idx + marketingTexts.length}
              className="text-black font-inter text-3xl md:text-5xl font-semibold tracking-tight drop-shadow-lg"
            >
              {text} &nbsp; •
            </span>
          ))}
        </motion.div>
      </section>
    </div>
  );
};

export default DigitalMarketingMarqueeRiyadh;
