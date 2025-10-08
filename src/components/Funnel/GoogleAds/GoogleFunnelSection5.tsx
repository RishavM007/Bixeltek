"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  HiOutlineBadgeCheck,
  HiOutlineChartBar,
  HiOutlineAdjustments,
  HiOutlineGlobeAlt,
  HiOutlineDocumentReport,
} from "react-icons/hi";
import Link from "next/link";

const benefits = [
  {
    icon: <HiOutlineBadgeCheck className="w-8 h-8 text-blue-600" />,
    title: "Certified Google Partner Agency",
    description:
      "We’re officially recognized by Google for maintaining high performance, strategic optimization, and client success. Every campaign follows best practices built for scale and accountability.",
    hoverBg: "hover:bg-blue-600 hover:text-white",
  },
  {
    icon: <HiOutlineChartBar className="w-8 h-8 text-green-600" />,
    title: "Data-Driven Decision Making",
    description:
      "No vanity metrics, no guesswork. Our strategies revolve around measurable growth indicators — CTR, ROAS, CAC, and conversion velocity — ensuring every rupee or dollar delivers.",
    hoverBg: "hover:bg-green-600 hover:text-white",
  },
  {
    icon: <HiOutlineAdjustments className="w-8 h-8 text-yellow-600" />,
    title: "Integrated Funnel Thinking",
    description:
      "We go beyond ads. From your landing pages to your CRM integrations, we align every step of the funnel to ensure leads are captured, nurtured, and converted with precision.",
    hoverBg: "hover:bg-yellow-500 hover:text-white",
  },
  {
    icon: <HiOutlineGlobeAlt className="w-8 h-8 text-pink-600" />,
    title: "Global Reach, Local Insight",
    description:
      "We design campaigns that speak to real audiences. Whether you’re in Canada, UAE, India, or KSA, our market understanding drives contextual, localized engagement that converts.",
    hoverBg: "hover:bg-pink-600 hover:text-white",
  },
  {
    icon: <HiOutlineDocumentReport className="w-8 h-8 text-indigo-600" />,
    title: "Transparent Reporting",
    description:
      "You see what we see. From weekly reports to live dashboards, every click, lead, and sale is tracked and attributed clearly — no black box metrics, ever.",
    hoverBg: "hover:bg-indigo-600 hover:text-white",
  },
];

const GooglePartnerSection = () => {
  return (
    <section className="w-full bg-white text-gray-900 py-20 px-6 md:px-12 lg:px-16">
      <div className="max-w-[98%] mx-auto flex flex-col md:flex-row gap-12 items-start">
        {/* Left Side */}
        <div className="md:w-[34%] flex flex-col justify-start items-start space-y-6">
          <motion.h2
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-5xl font-bold leading-snug"
          >
            A Google Partner Agency That{" "}
            <span className="text-blue-600">Cares About ROI, Not Vanity Metrics</span>
          </motion.h2>

          <motion.p
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.9 }}
            className="text-gray-800 text-lg leading-relaxed"
          >
            Bixeltek isn’t another “set-and-forget” agency. We’re a certified
            Google Partner team specializing in Ads, Analytics, and Conversion
            Tracking. Our mission is simple — make every rupee or dollar you
            spend generate measurable business growth, not just pretty graphs.
          </motion.p>

          <Link href="mailto:zee@bixeltek.com">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold shadow-md"
            >
              Talk to Our Ads Experts
            </motion.button>
          </Link>
        </div>

        {/* Right Side: Benefit Grid */}
        <div className="md:w-[66%] grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className={`bg-gray-50 border border-gray-200 rounded-2xl group p-6 flex flex-col items-start gap-4 shadow-sm transition-colors duration-300 cursor-pointer ${benefit.hoverBg}`}
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <div className="bg-white p-3 rounded-full shadow">{benefit.icon}</div>
              <h3 className="text-xl font-semibold">{benefit.title}</h3>
              <p className="text-gray-900 text-sm leading-relaxed group-hover:text-white">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GooglePartnerSection;
