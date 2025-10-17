"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaBullseye, FaChartLine, FaSearchDollar, FaCogs } from "react-icons/fa";
import { LiaBullseyeSolid } from "react-icons/lia";
import { TbEyeSpark } from "react-icons/tb";
import { LuChartBarBig } from "react-icons/lu";
import { BiCog } from "react-icons/bi";

export default function GrowthCards() {
  const cards = [
    {
      id: 1,
      title: "Visibility",
      desc: "Reach your audience through Google Ads, SEO, and social media when they’re actively searching.",
      icon: <TbEyeSpark size={40} className="text-black" />,
    },
    {
      id: 2,
      title: "Conversion",
      desc: "Design landing pages and websites that turn traffic into leads with optimized UX and bilingual clarity.",
      icon: <LiaBullseyeSolid size={40} className="text-black" />,
    },
    {
      id: 3,
      title: "Optimization",
      desc: "Measure what matters using GA4, heatmaps, and server-side tracking to reduce waste and increase ROI.",
      icon: <LuChartBarBig size={40} className="text-black" />,
    },
    {
      id: 4,
      title: "Scale",
      desc: "Use continuous A/B testing and CRO to compound growth month after month.",
      icon: <BiCog size={40} className="text-black" />,
    },
  ];

  return (
    <section className="bg-[#fffdf5] py-20 flex flex-col items-center overflow-hidden">
      {/* Section Heading */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="max-w-4xl text-center mb-16 px-4"
      >
        <h2 className="text-4xl md:text-5xl font-inter font-semibold text-black mb-6">
          We Don’t Just Run Ads —{" "}
          <span className="text-yellow-500">We Build Engines for Scalable Growth.</span>
        </h2>
        <p className="text-gray-900 text-base md:text-lg leading-relaxed">
          We believe digital marketing should be engineered like infrastructure: measurable, repeatable, and constantly improving.  
          Bixeltek’s Systemized Growth Framework connects four key pillars:
        </p>
      </motion.div>

      {/* Cards */}
      <div className="w-[80%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {cards.map((card, index) => (
          <motion.div
            key={card.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ delay: index * 0.2, duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative group  p-[2px] rounded-2xl bg-gradient-to-r from-green-500 via-green-700 to-green-950 inline-block bg-neutral-900 t gap-4 shadow-xl overflow-hidden"
          >
            <div className="bg-white flex h-full flex-col items-star p-6 rounded-2xl">
              <div className="mb-4 text-black">{card.icon}</div>
              <h3 className="text-xl md:text-2xl font-medium font-inter mb-3 text-black">{card.title}</h3>
              <p className="text-gray-900 text-sm md:text-base leading-relaxed">{card.desc}</p>
            </div>
            {/* Hover Glow Effect */}
          
          </motion.div>
        ))}
      </div>
    </section>
  );
}
