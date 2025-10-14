"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import growthImg from "@/assets/largest_cities_in_saudi_arabia_riyadh_bca0bcf1d6.jpg"; // replace with your image path

const DataBeatsGuesswork = () => {
  return (
    <section className="bg-black text-white py-24 px-6 md:px-20 flex flex-col md:flex-row items-center justify-between gap-14 max-w-[95%] md:max-w-[85%] mx-auto">
      
      {/* LEFT — IMAGE */}
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="w-full md:w-1/2 flex justify-center"
      >
        <div className="relative w-full h-[380px] md:h-[480px] rounded-2xl overflow-hidden group shadow-2xl">
          <Image
            src={growthImg}
            alt="Data-driven ads visualization"
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
          />
         
        </div>
      </motion.div>

      {/* RIGHT — TEXT CONTENT */}
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        viewport={{ once: true }}
        className="w-full md:w-1/2"
      >
        <h2 className="text-3xl md:text-5xl font-semibold mb-6 leading-tight">
          Because <span className="text-yellow-400">Data Beats Guesswork</span> — Every Time.
        </h2>

        <p className="text-gray-300 mb-8 text-lg leading-relaxed">
          Businesses across Saudi Arabia trust Bixeltek because we:
        </p>

        <ul className="space-y-4 text-gray-300 text-base">
          <li className="flex items-start gap-3">
            <span className="text-yellow-400 mt-[2px]">✔</span>
            Are Google Partner Certified with global PPC expertise.
          </li>
          <li className="flex items-start gap-3">
            <span className="text-yellow-400 mt-[2px]">✔</span>
            Manage campaigns in both Arabic and English.
          </li>
          <li className="flex items-start gap-3">
            <span className="text-yellow-400 mt-[2px]">✔</span>
            Provide real-time performance dashboards.
          </li>
          <li className="flex items-start gap-3">
            <span className="text-yellow-400 mt-[2px]">✔</span>
            Focus on ROI — not just clicks.
          </li>
          <li className="flex items-start gap-3">
            <span className="text-yellow-400 mt-[2px]">✔</span>
            Offer complete transparency with monthly reports.
          </li>
        </ul>

        <p className="text-gray-300 mt-8 text-lg leading-relaxed">
          With Bixeltek, your ad spend turns into measurable{" "}
          <span className="text-yellow-400 font-medium">business growth</span> — not mystery numbers.
        </p>
      </motion.div>
    </section>
  );
};

export default DataBeatsGuesswork;
