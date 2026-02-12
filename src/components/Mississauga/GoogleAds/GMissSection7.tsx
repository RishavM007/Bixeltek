"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  HiOutlineBadgeCheck,
  HiOutlineSparkles,
  HiOutlineLightBulb,
  HiOutlineChartSquareBar,
  HiOutlineClipboardCheck,
} from "react-icons/hi";

const benefits = [
  {
    icon: <HiOutlineBadgeCheck className="w-8 h-8 text-blue-500" />,
    title: "Google Partner Certified",
    description:
      "Certified expertise across Google Ads and digital channels, ensuring campaigns follow proven best practices.",
    hoverBg: "hover:bg-blue-500 hover:text-white",
  },
  {
    icon: <HiOutlineSparkles className="w-8 h-8 text-green-500" />,
    title: "ROI-Focused, Not Click-Focused",
    description:
      "We prioritize results that drive leads and sales, not just clicks or traffic.",
    hoverBg: "hover:bg-green-500 hover:text-white",
  },
  {
    icon: <HiOutlineLightBulb className="w-8 h-8 text-yellow-500" />,
    title: "90% Client Retention Rate",
    description:
      "Our clients trust us long-term thanks to consistent, measurable performance.",
    hoverBg: "hover:bg-yellow-500 hover:text-white",
  },
  {
    icon: <HiOutlineChartSquareBar className="w-8 h-8 text-pink-500" />,
    title: "Transparent, Data-Driven Reporting",
    description:
      "Clear dashboards and KPIs tie directly to leads, sales, and ROI—not vanity metrics.",
    hoverBg: "hover:bg-pink-500 hover:text-white",
  },
  {
    icon: <HiOutlineClipboardCheck className="w-8 h-8 text-indigo-500" />,
    title: "Integrated Team of Ads, SEO & Web Specialists",
    description:
      "We combine multiple channels and expertise to maximize campaign performance.",
    hoverBg: "hover:bg-indigo-500 hover:text-white",
  },
];

const BenefitsSectionMississauga = () => {
  return (
    <section className="w-full bg-black text-white py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-[95%] mx-auto flex flex-col lg:flex-row gap-12 items-start">
        {/* Left Side */}
        <div className="lg:w-[34%] flex flex-col justify-start items-start space-y-6">
          <motion.h2
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-5xl font-bold leading-snug"
          >
            Mississauga Businesses Choose Us Because{" "}
            <span className="text-blue-500">We Deliver ROI</span>
          </motion.h2>

          <motion.p
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.9 }}
            className="text-gray-300 text-lg leading-relaxed"
          >
            With 4+ years of experience and 200+ campaigns managed in Canada, 
            Bixeltek is trusted by businesses across Mississauga to run campaigns 
            that generate leads and sales — not just clicks.
          </motion.p>
        </div>

        {/* Right Side: Grid */}
        <div className="lg:w-[66%] grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className={`bg-neutral-950 border border-gray-700 rounded-2xl group p-6 flex flex-col items-start gap-4 shadow-md transition-colors duration-300 cursor-pointer ${benefit.hoverBg}`}
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <div className="bg-gray-800 group-hover:bg-white p-3 rounded-full shadow">{benefit.icon}</div>
              <h3 className="text-xl font-semibold">{benefit.title}</h3>
              <p className="text-gray-300 text-sm leading-relaxed group-hover:text-white">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSectionMississauga;
