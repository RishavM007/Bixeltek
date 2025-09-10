"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  HiOutlineUserGroup,
  HiOutlineSearch,
  HiOutlineCursorClick,
  HiOutlineRefresh,
  HiOutlineTrendingUp,
  HiOutlineSupport,
} from "react-icons/hi";

const benefits = [
  {
    icon: <HiOutlineUserGroup className="w-8 h-8 group-hover:text-white text-blue-500" />,
    title: "Expertise & Experience",
    description:
      "Skilled designers who understand both aesthetics and performance for business-ready websites.",
    hoverBg: "hover:bg-blue-600",
  },
  {
    icon: <HiOutlineSearch className="w-8 h-8 group-hover:text-white text-green-500" />,
    title: "SEO Advantage",
    description:
      "Websites optimized for search visibility, backed by the best SEO consultants.",
    hoverBg: "hover:bg-green-600",
  },
  {
    icon: <HiOutlineCursorClick className="w-8 h-8 group-hover:text-white text-yellow-500" />,
    title: "Conversion-Focused Design",
    description:
      "Layouts crafted to transform visitors into leads and paying customers.",
    hoverBg: "hover:bg-yellow-500",
  },
  {
    icon: <HiOutlineSupport className="w-8 h-8 group-hover:text-white text-pink-500" />,
    title: "Ongoing Support",
    description:
      "From updates to maintenance, your website continues to evolve with your business.",
    hoverBg: "hover:bg-pink-600",
  },
  {
    icon: <HiOutlineTrendingUp className="w-8 h-8 group-hover:text-white text-indigo-500" />,
    title: "Scalability",
    description:
      "A website that grows seamlessly as your business expands and diversifies.",
    hoverBg: "hover:bg-indigo-600",
  },
  {
    icon: <HiOutlineRefresh className="w-8 h-8 group-hover:text-white text-red-500" />,
    title: "Trust & Growth",
    description:
      "Partnering with a professional agency means more trust, visibility, and sales.",
    hoverBg: "hover:bg-red-600",
  },
];

const BenefitsSection = () => {
  return (
    <section className="w-full bg-black text-white py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-[95%] mx-auto flex flex-col md:flex-row gap-12 items-start">
        {/* Left Side */}
        <div className="md:w-[34%] flex flex-col justify-start items-start space-y-6">
          <motion.h2
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-5xl font-bold leading-snug"
          >
            Benefits of Hiring a{" "}
            <span className="text-blue-500">Professional Web Design Agency</span>
          </motion.h2>

          <motion.p
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.9 }}
            className="text-gray-300 text-lg leading-relaxed"
          >
            While DIY website builders may seem appealing, they rarely deliver
            the performance businesses need. Partnering with a professional
            agency ensures your website becomes a true growth engine.
          </motion.p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold shadow-md"
          >
            Talk to Our Experts
          </motion.button>
        </div>

        {/* Right Side: Grid */}
        <div className="md:w-[66%] grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className={`bg-[#131313] rounded-2xl group p-6 flex flex-col items-start gap-4 shadow-lg transition-colors duration-300 cursor-pointer ${benefit.hoverBg}`}
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <div className="bg-white/10 p-3 rounded-full">{benefit.icon}</div>
              <h3 className="text-xl font-semibold">{benefit.title}</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
