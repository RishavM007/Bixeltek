"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import growthImg from "@/assets/Google Ads Dashboard.png"; // replace with your image path

const DataBeatsGuesswork = () => {
  return (
    <section className="bg-[#fffdf5] text-black px-6 lg:px-20 ">
      <div className=" lg:max-w-[85%] mx-auto flex flex-col lg:flex-row items-center justify-between md:gap-14">

        {/* LEFT — IMAGE */}

          <div className="relative w-full lg:w-1/2 flex justify-center h-[380px] lg:h-[680px] rounded-2xl overflow-hidden group ">
            <Image
              src={growthImg}
              alt="Data-driven ads visualization"
              fill
              className="object-cover  transition-transform duration-700 ease-out"
            />

          </div>

        {/* RIGHT — TEXT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="w-full lg:w-1/2"
        >
          <h2 className="text-3xl md:text-6xl text-black font-semibold mb-6 leading-tight">
            Because <span className="text-yellow-500">Data Beats Guesswork</span> — Every Time.
          </h2>

          <p className="text-gray-900 mb-8 text-lg leading-relaxed">
            Businesses across Saudi Arabia trust Bixeltek because we:
          </p>

          <ul className="space-y-4 text-gray-900 text-base">
            <li className="flex items-start gap-3">
              <span className="text-green-600 mt-[2px]">✔</span>
              Are Google Partner Certified with global PPC expertise.
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-600 mt-[2px]">✔</span>
              Manage campaigns in both Arabic and English.
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-600 mt-[2px]">✔</span>
              Provide real-time performance dashboards.
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-600 mt-[2px]">✔</span>
              Focus on ROI — not just clicks.
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-600 mt-[2px]">✔</span>
              Offer complete transparency with monthly reports.
            </li>
          </ul>

          <p className="text-gray-900 mt-8 text-lg leading-relaxed">
            With Bixeltek, your ad spend turns into measurable{" "}
            <span className="text-yellow-400 font-medium">business growth</span> — not mystery numbers.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default DataBeatsGuesswork;
