'use client';

import React from "react";
import { motion } from "framer-motion";
import { FaRocket, FaBullseye, FaSearch, FaGlobe } from "react-icons/fa";

interface CardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  borderGradient: string;
}

const corePillars: CardProps[] = [
  {
    title: "Speed & Core Web Vitals",
    description:
      "We engineer sites that load in under 2.5 seconds, ensuring your visitors stay and engage — not bounce.",
    icon: <FaRocket size={22} className="text-neutral-300" />,
    borderGradient: "from-green-400 via-emerald-500 to-lime-400",
  },
  {
    title: "Conversion Architecture",
    description:
      "Every layout, button, and line of copy is designed to drive real action — clicks, calls, and conversions.",
    icon: <FaBullseye size={22} className="text-neutral-300" />,
    borderGradient: "from-blue-400 via-sky-500 to-cyan-400",
  },
  {
    title: "SEO & Schema Foundation",
    description:
      "Built-in SEO structure and schema markup to give your website authority and top visibility on Google.",
    icon: <FaSearch size={22} className="text-neutral-300" />,
    borderGradient: "from-purple-400 via-fuchsia-500 to-pink-400",
  },
  {
    title: "Bilingual Language Experience",
    description:
      "Full Arabic and English integration with perfect RTL alignment for wider accessibility across audiences.",
    icon: <FaGlobe size={22} className="text-neutral-300" />,
    borderGradient: "from-orange-400 via-amber-500 to-yellow-400",
  },
];

const GradientCards: React.FC = () => {
  return (
    <section className="py-20 max-w-[95%] md:max-w-[85%] mx-auto flex flex-col items-center">
      {/* Heading */}
      <div className="text-center mb-12 px-4 md:px-0">
        <h2 className="text-3xl md:text-6xl font-medium font-inter text-white mb-4">
          Web Design Built for{" "}
          <span className="text-red-400">Speed</span>,{" "}
          <span className="text-blue-400">Search</span>, and{" "}
          <span className="text-green-500">Sales.</span>
        </h2>
        <p className="text-gray-300 text-lg max-w-3xl mx-auto">
          Every site we build blends precision engineering with design psychology — 
          so your brand doesn’t just look good, it performs.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center gap-8 w-[95%] md:w-[85%]">
        {corePillars.map((pillar, idx) => (
          <div
            key={idx}
            className={`relative rounded-[20px] p-[2px] bg-gradient-to-r ${pillar.borderGradient}`}
          >
            {/* Inner neutral layer */}
            <div className="bg-neutral-950 rounded-[18px] p-6 h-full flex flex-col justify-between">
              {/* Title + Icon */}
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-white font-medium font-inter text-2xl">
                  {pillar.title}
                </h3>
                <div className="w-10 h-10 bg-neutral-900 rounded-lg flex items-center justify-center">
                  {pillar.icon}
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-300 text-[15px] leading-relaxed">
                {pillar.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GradientCards;
