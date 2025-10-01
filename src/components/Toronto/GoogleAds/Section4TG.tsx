"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import dashboardImg from "@/assets/Google-Ads-1.png";
import Link from "next/link";
import React from "react";

const WhyGoogleAdsToronto2: React.FC = () => {
  return (
    <section className="max-w-[95%] md:max-w-[90%] mx-auto mt-0 bg-black text-gray-100 py-10 md:py-20 overflow-hidden">
      <div className="flex flex-col lg:flex-row items-center lg:items-start">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ x: -80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="flex-1 lg:w-1/2 px-8 lg:px-16 md:mb-10 lg:mb-0"
        >
          <h2 className="text-3xl md:text-6xl font-bold font-inter leading-snug mb-6">
            Why Toronto Businesses Can’t<br></br> Ignore <span className="text-blue-500">Google Ads</span>
          </h2>

          <p className="text-gray-300 mb-6 font-poppins leading-relaxed max-w-2xl">
            Toronto is one of Canada’s most competitive markets. Whether you’re a clinic, a home service company, or an ecommerce brand, Google Ads ensures you’re visible at the exact moment your customers are searching.
          </p>

          <ul className="space-y-4 mb-8">
            <li className="flex gap-3">
              <span className="text-blue-500">✔</span> Over 90% of online experiences start with Google
            </li>
            <li className="flex gap-3">
              <span className="text-blue-500">✔</span> “Near me” searches in Toronto continue to rise year over year
            </li>
            <li className="flex gap-3">
              <span className="text-blue-500">✔</span> Competitors are already bidding on your customers — if you’re not there, they are
            </li>
          </ul>

          {/* CTA */}
          <motion.div>
            <Link href={"#form"}>
              <button className="px-7 py-3 rounded-2xl bg-blue-600 text-white font-semibold text-sm shadow-lg hover:bg-blue-700 transition">
                Book a Free Strategy Call
              </button>
            </Link>
          </motion.div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ x: 80, opacity: 0, scale: 0.95 }}
          whileInView={{ x: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="flex-1 relative w-full lg:w-1/2 h-[400px] md:h-[500px] lg:h-[500px]"
        >
          <Image
            src={dashboardImg}
            alt="Google Ads Overview"
            fill
            className="object-contain object-right rounded-l-2xl shadow-2xl"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
};

export default WhyGoogleAdsToronto2;
