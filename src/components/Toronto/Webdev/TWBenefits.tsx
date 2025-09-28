"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  HiOutlineBadgeCheck,
  HiOutlineSparkles,
  HiOutlineLightBulb,
  HiOutlineChartSquareBar,
  HiOutlineClipboardCheck,
  HiOutlineCog,
} from "react-icons/hi";

const benefits = [
  {
    icon: <HiOutlineBadgeCheck className="w-8 h-8 text-blue-600" />,
    title: "Credibility & Trust",
    description:
      "Professional, brand-aligned website design that inspires confidence and builds trust with every visitor, enhancing your company’s reputation online.",
    hoverBg: "hover:bg-blue-600 hover:text-white",
  },
  {
    icon: <HiOutlineSparkles className="w-8 h-8 text-green-600" />,
    title: "More Leads & Sales",
    description:
      "Conversion-focused website structures and clear calls-to-action designed to maximize lead generation, sales, and overall return on investment.",
    hoverBg: "hover:bg-green-600 hover:text-white",
  },
  {
    icon: <HiOutlineLightBulb className="w-8 h-8 text-yellow-600" />,
    title: "SEO Visibility",
    description:
      "Optimized frameworks for Google and AI-powered search engines ensure your website ranks higher and attracts the right customers consistently.",
    hoverBg: "hover:bg-yellow-500 hover:text-white",
  },
  {
    icon: <HiOutlineChartSquareBar className="w-8 h-8 text-pink-600" />,
    title: "Future-Proof Tech",
    description:
      "Built using scalable technologies like Next.js, WordPress, and Shopify, ensuring your website grows seamlessly alongside your business over time.",
    hoverBg: "hover:bg-pink-600 hover:text-white",
  },
  {
    icon: <HiOutlineCog className="w-8 h-8 text-indigo-600" />,
    title: "Seamless Integrations",
    description:
      "Easily connect your website with CRMs, booking systems, payment gateways, and analytics tools for smooth and efficient business operations.",
    hoverBg: "hover:bg-indigo-600 hover:text-white",
  },
  {
    icon: <HiOutlineClipboardCheck className="w-8 h-8 text-red-600" />,
    title: "Peace of Mind",
    description:
      "Post-launch support, regular updates, and performance optimizations ensure your website remains reliable, secure, and effective for years to come.",
    hoverBg: "hover:bg-red-600 hover:text-white",
  },
];

const BenefitsSectionWebDesign = () => {
  return (
    <section className="w-full bg-white text-gray-900 py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-[95%] mx-auto flex flex-col md:flex-row gap-12 items-start">
        {/* Left Side */}
        <div className="md:w-[34%] flex flex-col justify-start items-start space-y-6">
          <motion.h2
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-6xl font-bold leading-snug"
          >
            What You Gain When You{" "}
            <span className="text-blue-600">Work With Bixeltek</span>
          </motion.h2>

          <motion.p
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.9 }}
            className="text-gray-600 text-lg leading-relaxed"
          >
            Partnering with Bixeltek means solving your website problems while gaining a scalable, high-performing platform that grows alongside your business.
          </motion.p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold shadow-md"
          >
            Get Your Free Website Audit
          </motion.button>
        </div>

        {/* Right Side: Grid */}
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

export default BenefitsSectionWebDesign;
