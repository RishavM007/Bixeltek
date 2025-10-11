"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaChartLine, FaCogs, FaLightbulb, FaNetworkWired, FaRobot, FaUsers, FaBullseye, FaSearch, FaGem } from "react-icons/fa";

const seoPoints = [
  {
    icon: <FaChartLine />,
    title: "Entity SEO",
    desc: "We define your brand, services, and locations so Google and AI models can associate your name with trust and expertise.",
  },
  {
    icon: <FaCogs />,
    title: "Topical Maps",
    desc: "We create interconnected service pages and blogs that fully cover your niche — boosting your authority.",
  },
  {
    icon: <FaRobot />,
    title: "AI SEO Optimization",
    desc: "We optimize for Google’s AI Overviews, Gemini, and Perplexity, ensuring your business is visible in next-gen AI results.",
  },
  {
    icon: <FaNetworkWired />,
    title: "Technical SEO",
    desc: "Schema, Core Web Vitals, and structured markup that strengthen algorithmic confidence.",
  },
  {
    icon: <FaUsers />,
    title: "UX & On-Page Optimization",
    desc: "Copy that converts — designed for both human readability and algorithmic clarity.",
  },
  {
    icon: <FaBullseye />,
    title: "Keyword Strategy",
    desc: "Intent-driven keyword mapping that drives qualified traffic to your website.",
  },
];

export default function SEOAuthorityGrid() {
  return (
    <section className="relative py-16 bg-black">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-inter font-semibold text-white mb-6">
          We Don’t Just Optimize Pages —{" "}
          <span className="text-yellow-500">We Engineer Topical Authority.</span>
        </h2>

        {/* Copy */}
        <p className="text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
          Our SEO strategy combines data science, content architecture, and AI SEO integration to
          make your website contextually relevant and conversion-focused.
        </p>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {seoPoints.map((point, index) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative bg-neutral-900 p-8 rounded-xl hover:shadow-xl hover:border-green-500 border border-transparent transition-all"
            >
              {/* Icon Box */}
              <div className="w-12 h-12 mb-4 flex items-center justify-center bg-gradient-to-tr from-green-500 via-green-400 to-green-100 text-black rounded-lg text-2xl">
                {point.icon}
              </div>

              {/* Title */}
              <h3 className="font-inter text-left text-2xl text-white font-medium mb-2">{point.title}</h3>

              {/* Description */}
              <p className="text-gray-300 text-left text-base leading-relaxed">{point.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
