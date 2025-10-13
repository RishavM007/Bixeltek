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
      icon: <TbEyeSpark size={40} className="text-white" />,
    },
    {
      id: 2,
      title: "Conversion",
      desc: "Design landing pages and websites that turn traffic into leads with optimized UX and bilingual clarity.",
      icon: <LiaBullseyeSolid size={40} className="text-white" />,
    },
    {
      id: 3,
      title: "Optimization",
      desc: "Measure what matters using GA4, heatmaps, and server-side tracking to reduce waste and increase ROI.",
      icon: <LuChartBarBig size={40} className="text-white" />,
    },
    {
      id: 4,
      title: "Scale",
      desc: "Use continuous A/B testing and CRO to compound growth month after month.",
      icon: <BiCog size={40} className="text-white" />,
    },
  ];

  return (
    <section className="bg-black py-20 flex flex-col items-center overflow-hidden">
      {/* Section Heading */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="max-w-4xl text-center mb-16 px-4"
      >
        <h2 className="text-4xl md:text-5xl font-inter font-bold text-white mb-6">
          We Don’t Just Run Ads —{" "}
          <span className="text-yellow-500">We Build Engines for Scalable Growth.</span>
        </h2>
        <p className="text-gray-300 text-base md:text-lg leading-relaxed">
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
            className="relative group  hover:border-green-500 hover:border hover:bg-green-600 border border-yellow-500 rounded-2xl bg-neutral-900 p-6 flex flex-col items-start gap-4 shadow-xl overflow-hidden"
          >
            {/* Animated Border */}
            {/* <motion.div
              className="absolute inset-0 rounded-2xl border-2 border-transparent"
              initial={false}
              animate={{
                background: [
                  "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0) 100%)",
                  "linear-gradient(90deg, #facc15 0%, #22c55e 50%, #3b82f6 100%)",
                  "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0) 100%)",
                ],
              }}
              transition={{
                repeat: Infinity,
                duration: 30,
                ease: "linear",
              }}
              style={{
                maskImage: "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
                WebkitMaskComposite: "xor",
                maskComposite: "exclude",
                padding: "2px",
              }}
            ></motion.div> */}

            {/* Card Content */}
            <div className="relative flex flex-col gap-3 z-10">
              <div className="mb-4">{card.icon}</div>
              <h3 className="text-xl md:text-3xl font-medium font-inter mb-3 text-white">{card.title}</h3>
              <p className="text-gray-300 text-sm md:text-base leading-relaxed">{card.desc}</p>
            </div>

            {/* Hover Glow Effect */}
            <motion.div
              className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 bg-gradient-to-tr from-yellow-500 via-green-500 to-blue-500 blur-2xl transition-all "
              whileHover={{ opacity: 0.25 }}
            ></motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
