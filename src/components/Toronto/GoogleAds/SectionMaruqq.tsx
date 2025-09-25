"use client";

import React from "react";
import { motion } from "framer-motion";

const GoogleAdsMarquee: React.FC = () => {
  const blueTexts = [
    "Data-Driven Optimization",
    "Track Every Conversion",
    "Remarketing That Works",
    "Landing Pages That Convert",
    "Reduce Wasted Spend",
    "Scale Your Toronto Ads",
    "Dominate Google Search Results",
  ];

  const whiteTexts = [
    "Maximize ROI in Toronto",
    "Target Local Customers",
    "Increase Conversions",
    "Expert PPC Management",
    "Reach Buyers When They Search",
    "Boost Online Visibility",
    "Optimize Ad Spend",
    "Grow Your Toronto Business",
  ];

  return (
    <div className="flex mt-10 flex-col">
      {/* Blue Marquee */}
      <section className="bg-blue-600 py-7 overflow-hidden">
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
          {blueTexts.map((text, idx) => (
            <span
              key={idx}
              className="text-white font-inter text-3xl md:text-5xl font-semibold"
            >
            {text} &nbsp;  •
            </span>
          ))}
          {blueTexts.map((text, idx) => (
            <span
              key={idx + blueTexts.length}
              className="text-white font-inter text-3xl md:text-5xl font-semibold"
            >
              {text} &nbsp; •
            </span>
          ))}
        </motion.div>
      </section>

      {/* White Marquee (Opposite Direction) */}
      <section className="bg-white py-7 overflow-hidden">
        <motion.div
          className="flex w-max gap-8 whitespace-nowrap items-center"
          animate={{ x: ["-50%", "0%"] }} // opposite direction
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 35,
              ease: "linear",
            },
          }}
        >
          {whiteTexts.map((text, idx) => (
            <span
              key={idx}
              className="text-black font-inter text-3xl md:text-5xl font-semibold flex items-center"
            >
              {text} &nbsp; •
            </span>
          ))}
          {whiteTexts.map((text, idx) => (
            <span
              key={idx + whiteTexts.length}
              className="text-black font-inter text-3xl md:text-5xl font-semibold flex items-center"
            >
              {text} &nbsp; •
            </span>
          ))}
        </motion.div>
      </section>
    </div>
  );
};

export default GoogleAdsMarquee;
