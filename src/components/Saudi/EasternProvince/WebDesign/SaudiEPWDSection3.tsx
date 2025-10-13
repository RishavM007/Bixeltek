"use client";

import React from "react";
import { FaRocket, FaSitemap, FaRegLightbulb, FaTachometerAlt, FaCubes, FaChartLine } from "react-icons/fa";

export default function WebDesignScienceSection() {
  const features = [
    {
      id: 1,
      title: "Speed",
      icon: <FaTachometerAlt className="text-white text-2xl" />,
      desc: "We build ultra-fast websites optimized for Core Web Vitals — because every second of delay drops conversions and ranking potential.",
    },
    {
      id: 2,
      title: "Structure",
      icon: <FaSitemap className="text-white text-2xl" />,
      desc: "We design intuitive layouts that guide users effortlessly from curiosity to conversion, increasing engagement and dwell time.",
    },
    {
      id: 3,
      title: "Storytelling",
      icon: <FaRegLightbulb className="text-white text-2xl" />,
      desc: "Your website should narrate your brand’s purpose — emotionally and rationally — so visitors remember and trust your message.",
    },
    {
      id: 4,
      title: "Scalability",
      icon: <FaCubes className="text-white text-2xl" />,
      desc: "Built modularly, your website evolves with your business — add new services, landing pages, or automations without breaking design.",
    },
    {
      id: 5,
      title: "Data",
      icon: <FaChartLine className="text-white text-2xl" />,
      desc: "We use heatmaps, analytics, and behavior tracking to continuously refine UX — so decisions come from insights, not instincts.",
    },
    {
      id: 6,
      title: "Conversion Logic",
      icon: <FaRocket className="text-white text-2xl" />,
      desc: "Every pixel is backed by psychology and intent data — we blend creative flair with proven frameworks to boost your ROI.",
    },
  ];

  return (
    <section className="relative py-20 bg-black text-white overflow-hidden">
      <div className="max-w-[95%] md:max-w-[75%] mx-auto text-center">
        {/* ✅ Heading */}
        <h2 className="text-3xl md:text-5xl font-semibold mb-6 leading-tight">
          We Build Websites That Combine <span className="text-yellow-500">Design, SEO, and Psychology.</span>
        </h2>

        {/* ✅ Copy */}
        <p className="text-gray-300 max-w-3xl mx-auto mb-14 text-lg leading-relaxed">
          At Bixeltek, web design isn’t just a creative exercise — it’s a conversion science.  
          We fuse UI/UX, brand positioning, and SEO to build websites that deliver ROI from day one.
        </p>

        {/* ✅ 3x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="bg-[black] rounded-2xl p-8 shadow-[inset_0_-23px_25px_0_rgba(0,0,0,0.17),inset_0_-36px_30px_0_rgba(0,0,0,0.15),inset_0_-79px_40px_0_rgba(0,0,0,0.1),0_2px_1px_rgba(0,0,0,0.06),0_4px_2px_rgba(0,0,0,0.09),0_8px_4px_rgba(0,0,0,0.09),0_16px_8px_rgba(0,0,0,0.09),0_32px_16px_rgba(0,0,0,0.09)] hover:shadow-green-900/30 hover:border-green-700 transition-all duration-300 flex flex-col items-center text-center"
            >
              {/* ✅ Icon Box */}
              <div className="p-4 rounded-xl bg-gradient-to-tr shadow-[inset_0_-23px_25px_0_rgba(0,0,0,0.17),inset_0_-36px_30px_0_rgba(0,0,0,0.15),inset_0_-79px_40px_0_rgba(0,0,0,0.1),0_2px_1px_rgba(0,0,0,0.06),0_4px_2px_rgba(0,0,0,0.09),0_8px_4px_rgba(0,0,0,0.09),0_16px_8px_rgba(0,0,0,0.09),0_32px_16px_rgba(0,0,0,0.09)] from-green-800 via-green-500 to-green-100 mb-6 flex justify-center items-center w-16 h-16">
                {feature.icon}
              </div>

              <h3 className="text-2xl font-medium font-inter mb-3 text-green-400">{feature.title}</h3>
              <p className="text-gray-100 text-base leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>

        {/* ✅ Bottom Copy */}
        <p className="text-gray-100 mt-14 max-w-3xl mx-auto leading-relaxed">
          When creativity meets conversion logic, your website becomes your biggest growth asset — a system designed to attract, engage, and convert.
        </p>
      </div>
    </section>
  );
}
