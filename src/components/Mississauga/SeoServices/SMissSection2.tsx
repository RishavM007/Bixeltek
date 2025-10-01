"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  HiOutlineExclamationCircle,
  HiOutlineDesktopComputer,
  HiOutlineDocumentDuplicate,
  HiOutlineLocationMarker,
  HiOutlineBan,
} from "react-icons/hi";
import Image from "next/image";
import shape1 from "@/assets/testi-shape1.png";
import dashboard2 from "@/assets/Traffic-Dashboard.png";

const WhySEOVisibilityMississauga = () => {
  const issues = [
    {
      title: "Ranking on Page 2 or Lower",
      description: "If you’re not on page one, most customers will never see your business.",
      icon: <HiOutlineExclamationCircle className="text-blue-700 w-6 h-6" />,
    },
    {
      title: "Poorly Optimized Websites",
      description: "Technical errors and slow speed kill rankings and user trust.",
      icon: <HiOutlineDesktopComputer className="text-blue-700 w-6 h-6" />,
    },
    {
      title: "Weak or Duplicate Content",
      description: "Thin content or copied pages don’t rank in competitive niches.",
      icon: <HiOutlineDocumentDuplicate className="text-blue-700 w-6 h-6" />,
    },
    {
      title: "No Local Visibility",
      description: "Failure to show up on Google Maps or “near me” searches means lost customers.",
      icon: <HiOutlineLocationMarker className="text-blue-700 w-6 h-6" />,
    },
    {
      title: "Low-Quality Backlinks",
      description: "Links from irrelevant sites hurt credibility and SEO performance.",
      icon: <HiOutlineBan className="text-blue-700 w-6 h-6" />,
    },
  ];

  return (
    <section className="w-full py-12 md:py-24 bg-[#f5f7fd] text-black relative overflow-hidden">
      <Image src={shape1} alt="shape1" className="absolute bottom-0 left-0" />

      <div className="max-w-full mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Left: Issues List */}
        <div className="flex-1 pl-4 pr-4 md:pl-32 md:pr-16">
          <h2 className="text-4xl md:text-6xl font-bold font-inter leading-snug mb-4">
            Why Mississauga Businesses <span className="text-blue-500">Struggle With Online Visibility</span>
          </h2>
          <p className="text-gray-800 mb-10 text-lg leading-relaxed">
            We often hear from business owners who invested in SEO but never saw results — 
            usually because strategies were outdated, incomplete, or poorly executed.
          </p>

          <div className="flex flex-col gap-10">
            {issues.map((issue, index) => (
              <motion.div
                key={index}
                className="relative bg-transparent rounded-xl flex items-start gap-4 overflow-hidden"
                whileHover={{ scale: 1.02 }}
              >
                {/* Icon */}
                <div className="relative z-10 bg-blue-100 p-4 rounded-full flex items-center justify-center">
                  {issue.icon}
                </div>

                {/* Text */}
                <div className="relative z-10 flex flex-col text-left">
                  <h3 className="text-xl font-inter font-bold text-black mb-1">
                    {issue.title}
                  </h3>
                  <p className="text-gray-800 text-sm leading-relaxed">
                    {issue.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Closing Line */}
          <p className="text-gray-900 mt-10 text-base leading-relaxed font-medium">
            <span className="font-bold text-black">Bixeltek</span> solves these issues by building SEO strategies 
            that combine technical fixes, content optimization, and local authority building.
          </p>
        </div>

        {/* Right: Image */}
        <motion.div
          initial={{ x: 80, opacity: 0, scale: 0.95 }}
          whileInView={{ x: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="relative flex-1 w-full lg:w-1/2 h-[400px] md:h-[500px] lg:h-[630px]"
        >
          <Image
            src={dashboard2}
            alt="SEO Dashboard Mississauga"
            fill
            className="object-cover rounded-r-2xl"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
};

export default WhySEOVisibilityMississauga;
