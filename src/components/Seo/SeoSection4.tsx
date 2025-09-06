"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image"; // or Video if you prefer
import whychoosegif from "@/assets/output-onlinegiftools.gif"; // replace with your gif/video

const WhyChooseBixeltek = () => {
  return (
    <section className="w-full py-24 bg-black text-white relative overflow-hidden">
      <div className=" max-w-[90%] md:max-w-[80%] mx-auto px-6 flex flex-col lg:flex-row items-center gap-12">
        {/* Left: Text */}
        <motion.div
          initial={{ x: -80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="flex-1 text-left"
        >
          <h2 className="text-4xl md:text-6xl font-bold font-inter leading-snug mb-6">
            Why <span className="text-blue-500">Choose Bixeltek</span>
          </h2>

          <p className="text-gray-300 mb-6 leading-relaxed max-w-xl">
            In today’s digital world, businesses often struggle even if they
            have the best services, products, or prices. The reality is simple:
            if your audience can’t find you exactly when they’re searching, you
            lose them to competitors.
          </p>

          <p className="text-gray-300 mb-6 leading-relaxed max-w-xl">
            Since 2017, Bixeltek has been solving this challenge. We’ve helped
            businesses across industries escape dependency on ads, build
            authority in their markets, and create predictable growth. Whether
            you’re a clinic, a real estate developer, a SaaS company, or a local
            retailer, we understand the pain of invisibility — and we know how
            to fix it.
          </p>

          <p className="text-gray-300 leading-relaxed max-w-xl font-semibold">
            That’s why businesses choose Bixeltek:{" "}
            <span className="text-white">we deliver leads, not just traffic.</span>
          </p>
        </motion.div>

        {/* Right: GIF/Video */}
        <motion.div
          initial={{ x: 80, opacity: 0, scale: 0.95 }}
          whileInView={{ x: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="flex relative w-full lg:w-1/2 justify-center items-center "
        >
          {/* If using GIF */}
          <a
              href="https://www.google.com/partners/agency?id=2188074075"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://www.gstatic.com/partners/badge/images/2024/PartnerBadgeClickable.svg"
                alt="Google Partners Badge"
                className="w-72"
              />
            </a>

          {/* OR if using video */}
          {/* 
          <video
            src="/videos/whychoose.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover rounded-2xl shadow-2xl"
          />
          */}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseBixeltek;
