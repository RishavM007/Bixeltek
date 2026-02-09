"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FaCogs,
  FaLaptopCode,
  FaServer,
  FaSyncAlt,
  FaShieldAlt,
  FaRocket,
  FaNetworkWired,
  FaExchangeAlt,
  FaChartLine,
} from "react-icons/fa";

const services = [
  {
    icon: <FaCogs />,
    title: "CMS Strategy & Architecture",
    desc: "Plan taxonomies, content flow, and marketing alignment, ensuring a scalable CMS foundation that supports long-term growth and seamless collaboration.",
    gradient: "from-pink-500 via-purple-500 to-indigo-500",
  },
  {
    icon: <FaLaptopCode />,
    title: "Custom UI/UX Design",
    desc: "Designed for speed, conversion, and regional preferences, delivering intuitive interfaces and pixel-perfect visuals tailored to user behavior.",
    gradient: "from-blue-500 via-cyan-500 to-sky-500",
  },
  {
    icon: <FaNetworkWired />,
    title: "Integration Layer",
    desc: "Connect GA4, CRM, ERP, and marketing automation pipelines for smooth data flow and centralized management across all platforms.",
    gradient: "from-green-500 via-emerald-500 to-teal-500",
  },
  {
    icon: <FaExchangeAlt />,
    title: "Migration & Upgrades",
    desc: "Transition from legacy CMS systems with zero downtime, preserving SEO value and user experience while upgrading to modern architectures.",
    gradient: "from-yellow-500 via-orange-500 to-red-500",
  },
  {
    icon: <FaShieldAlt />,
    title: "Security & Maintenance",
    desc: "Implement SSL, daily backups, staging environments, and uptime monitoring to safeguard your CMS against vulnerabilities and data loss.",
    gradient: "from-purple-500 via-fuchsia-500 to-pink-500",
  },
  {
    icon: <FaRocket />,
    title: "Performance Optimization",
    desc: "Enhance Core Web Vitals, optimize page speed, and fine-tune CRO to ensure fast, responsive, and high-converting CMS experiences.",
    gradient: "from-indigo-500 via-violet-500 to-blue-500",
  },
  {
    icon: <FaServer />,
    title: "Scalability Engineering",
    desc: "Build a future-proof CMS architecture designed for enterprise growth, handling high traffic loads and expanding content requirements effortlessly.",
    gradient: "from-red-500 via-rose-500 to-pink-500",
  },
  {
    icon: <FaSyncAlt />,
    title: "Content Workflow Automation",
    desc: "Streamline editorial workflows using API-driven automation, reducing manual effort and speeding up content production and publishing.",
    gradient: "from-teal-500 via-cyan-500 to-sky-500",
  },
  {
    icon: <FaChartLine />,
    title: "Analytics & Reporting",
    desc: "Custom dashboards track content performance, SEO, and conversion metrics, providing actionable insights for continuous improvement.",
    gradient: "from-orange-500 via-amber-500 to-yellow-500",
  },
];


// Section variant for slide-up animation
const sectionVariant = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.15, when: "beforeChildren" } },
};

// Card variant for individual animations
const cardVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function CmsServicesGrid() {
  return (
    <motion.section
      className="relative py-20 bg-transparent"
      variants={sectionVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.div className="max-w-[95%] lg:max-w-[80%] mx-auto px-6 text-center">
        {/* Heading */}
        <motion.h2
          className="text-3xl md:text-6xl font-semibold text-black mb-6 font-inter"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 0.6 } }}
        >
          End-to-End CMS <br /> {" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 via-purple-500 to-blue-500">
            Development Solutions
          </span>
        </motion.h2>

        {/* Copy */}
        <motion.p
          className="text-gray-900 text-base md:text-lg max-w-3xl mx-auto mb-12 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2 } }}
        >
          Every Bixeltek CMS build is a future-proof marketing system — secure, fast, measurable, and tailored for enterprise needs.
        </motion.p>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={cardVariant}
              className={`relative p-[2px] rounded-xl bg-gradient-to-r ${service.gradient} group hover:bg-none inline-block`}
            >
              <div className={`bg-white hover:shadow-2xl h-full p-8 rounded-xl border border-transparent transition-all hover:bg-gradient-to-br hover-${service.gradient}`}>
                {/* Icon */}
                <div className="w-14 h-14 mb-4 flex items-center justify-center rounded-lg text-2xl bg-neutral-900 group-hover:bg-white group-hover:text-black text-white transition-all">
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="font-inter text-left text-2xl font-medium mb-2 text-black group-hover:text-white">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-black font-inter text-left text-base leading-relaxed group-hover:text-gray-100">
                  {service.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
}


























