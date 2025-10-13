"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { BsCheckCircleFill } from "react-icons/bs";
import sideimg from '@/assets/riyadh image 3.jpg'
import { Check } from "lucide-react";

const SustainableGrowth = () => {
  const points = [
    "Are Google Partner Certified with proven campaign frameworks.",
    "Combine global experience with deep local market insight.",
    "Provide transparent, data-driven reporting for every riyal spent.",
    "Offer bilingual management — Arabic and English fluency.",
    "Focus on long-term partnerships, not short-term campaigns.",
  ];

  return (
    <section className="bg-black text-gray-100 py-20">
      <div className="max-w-[85%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
        {/* LEFT: IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative h-[400px] object-cover"
        >
          <div className="overflow-hidden rounded-2xl shadow-2xl">
            <Image
              src={sideimg} // replace with your image path
              alt="Bixeltek sustainable growth systems"
              width={600}
              height={500}
              className="w-full h-full object-cover scale-105 hover:scale-110 transition-transform duration-700"
            />
          </div>
        </motion.div>

        {/* RIGHT: TEXT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex flex-col"
        >
          <h2 className="text-3xl md:text-5xl font-inter font-semibold leading-tight text-white mb-6">
            Because <span className="text-yellow-500">Sustainable Growth</span> Requires Systems, Not Guesswork.
          </h2>

          <p className="text-gray-300 text-lg mb-6 max-w-2xl leading-relaxed">
            Bixeltek has partnered with over 200 global and Saudi businesses to help them grow smarter — not just bigger.
            Companies in Riyadh trust us because we:
          </p>

          <ul className="space-y-4 mb-6">
            {points.map((point, i) => (
              <li key={i} className="flex items-start gap-3">
                <Check className="text-yellow-500 mt-1 flex-shrink-0" size={20} />
                <span className="text-gray-200 leading-relaxed">{point}</span>
              </li>
            ))}
          </ul>

          <p className="text-gray-300 max-w-xl leading-relaxed">
            Your marketing shouldn’t be fragmented — it should be an ecosystem.
            <span className="text-yellow-500 font-medium">That’s what we build.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default SustainableGrowth;
