"use client";

import React from "react";
import { motion } from "framer-motion";

const SEOMarqueeSaudi: React.FC = () => {
  const seoTexts = [
    "Entity SEO for Khobar & Dammam",
    "AI-Powered Optimization",
    "Topical Authority That Converts",
    "Structured Content for Google & Gemini",
    "Technical SEO & Schema Setup",
    "Local SEO in Eastern Province",
    "Content Architecture That Ranks",
    "Boost Visibility & Credibility",
  ];

  return (
    <div className="flex mt-2 flex-col">
      {/* Blue Marquee */}
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
    </div>
  );
};

export default SEOMarqueeSaudi;
