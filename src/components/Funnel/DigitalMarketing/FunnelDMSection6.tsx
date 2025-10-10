"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  HiOutlineBadgeCheck,
  HiOutlineUserGroup,
  HiOutlineChartSquareBar,
  HiOutlineLightBulb,
  HiOutlineClipboardCheck,
} from "react-icons/hi";

const differentiators = [
  {
    icon: <HiOutlineBadgeCheck className="w-8 h-8 text-blue-400" />,
    title: "Google Partner Certified (Performance Verified)",
    description:
      "Certified by Google for delivering measurable campaign success across Ads, SEO, and Analytics — backed by verified performance standards.",
    hoverBg: "hover:bg-blue-400 hover:text-white",
  },
  {
    icon: <HiOutlineUserGroup className="w-8 h-8 text-blue-400" />,
    title: "In-House Strategy, Design & Dev Teams (No Outsourcing)",
    description:
      "Our full-stack team of strategists, designers, and developers collaborate under one roof to ensure seamless execution and accountability.",
    hoverBg: "hover:bg-blue-400 hover:text-white",
  },
  {
    icon: <HiOutlineChartSquareBar className="w-8 h-8 text-blue-400" />,
    title: "Predictive ROI Dashboards (Real Numbers, Not Reports)",
    description:
      "We build live dashboards that forecast ROI trends using real-time data — helping you make decisions driven by facts, not guesswork.",
    hoverBg: "hover:bg-blue-400 hover:text-white",
  },
  {
    icon: <HiOutlineLightBulb className="w-8 h-8 text-blue-400" />,
    title: "Industry Expertise (Dental, Home Services, B2B, E-commerce)",
    description:
      "From dental clinics to SaaS startups, our team brings proven playbooks for high-performing marketing systems across multiple industries.",
    hoverBg: "hover:bg-blue-400 hover:text-white",
  },
  {
    icon: <HiOutlineClipboardCheck className="w-8 h-8 text-blue-400" />,
    title: "Transparent, Contract-Free Engagements",
    description:
      "We earn loyalty through performance — not contracts. Stay because it works, not because paperwork says you must.",
    hoverBg: "hover:bg-blue-400 hover:text-white",
  },
];

const GrowthPartnerSection = () => {
  return (<section className="w-full bg-black text-white py-20 px-6 md:px-12 lg:px-24"> <div className="max-w-[95%] mx-auto flex flex-col md:flex-row gap-12 items-start">
    {/* Left Content */} <div className="md:w-[38%] flex flex-col justify-start items-start space-y-6">
      <motion.h2
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="text-4xl md:text-5xl font-bold leading-snug"
      >
        We’re Not Another Agency.{" "} <span className="text-blue-400">We’re a Growth Partner That Thinks in Systems.</span>
      </motion.h2>
      <motion.p
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9 }}
        className="text-gray-300 text-lg leading-relaxed"
      >
        Bixeltek was built for founders who are done guessing. As a{" "}
        <span className="text-blue-400 font-semibold">Google Partner Certified agency</span>,
        we merge marketing strategy, data science, and engineering to produce one thing:
        sustainable, predictable revenue growth.
      </motion.p>
    </div>

    {/* Right Side: Differentiator Cards */}
    <div className="md:w-[62%] grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {differentiators.map((item, index) => (
        <motion.div
          key={index}
          className={`bg-neutral-950 border border-gray-700 rounded-2xl group p-6 flex flex-col items-start gap-4 shadow-md transition-colors duration-300 cursor-pointer ${item.hoverBg}`}
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: index * 0.1 }}
        >
          <div className="bg-gray-800 group-hover:bg-white p-3 rounded-full shadow">
            {item.icon}
          </div>
          <h3 className="text-xl font-semibold">{item.title}</h3>
          <p className="text-gray-300 text-sm leading-relaxed group-hover:text-white">
            {item.description}
          </p>
        </motion.div>
      ))}
    </div>
  </div>
  </section>
  );
};

export default GrowthPartnerSection;
