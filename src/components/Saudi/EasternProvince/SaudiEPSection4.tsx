'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { FaEye, FaChartLine, FaBullseye } from 'react-icons/fa';
import { TbEyeStar } from "react-icons/tb";
import { VscGraph } from "react-icons/vsc";
import { IoOptionsOutline } from "react-icons/io5";
export default function BixeltekSystemFramework() {
  const points = [
    {
      id: 1,
      title: "Visibility",
      icon: <TbEyeStar className="text-blue-500 text-2xl md:text-4xl" />,
      desc: "Appear in front of your ideal audience exactly when they’re searching for your services. We ensure your business is visible across Google, search, and social — wherever your customers spend their time.",
    },
    {
      id: 2,
      title: "Conversion",
      icon: <VscGraph className="text-blue-500 text-2xl md:text-4xl" />,
      desc: "Turn that attention into inquiries, leads, and sales through high-performing landing pages, persuasive messaging, and optimized ad funnels designed to convert visitors into loyal customers who return again and again.",
    },
    {
      id: 3,
      title: "Optimization",
      icon: <IoOptionsOutline className="text-blue-500 text-2xl md:text-4xl" />,
      desc: "Use analytics, conversion rate optimization (CRO), and continual data-driven testing to refine campaigns, increase ROI, and scale smarter every month with measurable improvements.",
    },
  ];

  return (
    <section className="bg-black text-white py-20 px-6 md:px-20 text-center overflow-hidden">
      {/* Section Label */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="uppercase text-blue-500 font-semibold mb-4 tracking-widest"
      >
        The Solution — Bixeltek’s Systemized Digital Marketing Framework
      </motion.p>

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-3xl md:text-6xl font-bold mb-6 leading-tight"
      >
        We Don’t Just Run Campaigns.<br />
        <span className="text-blue-500">We Build Growth Systems.</span>
      </motion.h2>

      {/* Copy */}
      <motion.p
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed"
      >
        We take a holistic approach to digital marketing — where Google Ads, SEO, Web Design, and
        Analytics work together to create predictable growth. Our system is built around three
        principles that make marketing measurable, scalable, and profitable.
      </motion.p>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {points.map((point, index) => (
          <motion.div
            key={point.id}
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="relative bg-[#0f0f0f] group border border-gray-800 rounded-2xl p-8 shadow-lg 
                       hover:shadow-blue-600/90 transition-all duration-500 group overflow-hidden"
          >
            {/* Animated Border */}
            <motion.div
              className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-blue-500 transition-all duration-500"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
            />

            {/* Content */}
            <div className="relative z-10">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl md:text-3xl font-inter font-semibold">{point.title}</h3>
                {point.icon}
              </div>
              <p className="text-gray-400 text-left text-sm md:text-base leading-relaxed mt-10">
                {point.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Closing Line */}
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-gray-300 max-w-3xl mx-auto mt-12 leading-relaxed"
      >
        This isn’t random digital work — it’s a measurable marketing ecosystem built to scale your
        business month after month with clarity and consistency.
      </motion.p>
    </section>
  );
}
