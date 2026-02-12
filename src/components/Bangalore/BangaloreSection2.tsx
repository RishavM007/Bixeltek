"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  Search,
  Zap,
  TrendingUp,
  BarChart3,
  Target,
  Users,
} from "lucide-react";

const MarketingEngines = () => {
  const services = [
    {
      icon: Search,
      title: "Visibility Engine",
      description:
        "Use SEO, Google Ads, and Social Campaigns to reach active buyers when they search or scroll with precision targeting and intent-based optimization.",
    },
    {
      icon: Zap,
      title: "Conversion Framework",
      description:
        "Design fast, responsive, conversion-focused websites that turn clicks into customers through optimized user journeys and persuasive design.",
    },
    {
      icon: TrendingUp,
      title: "Optimization System",
      description:
        "Track every lead with GA4, Tag Manager, and heatmaps to refine ROI and identify opportunities for continuous performance improvement.",
    },
    {
      icon: BarChart3,
      title: "Scale Architecture",
      description:
        "Apply A/B testing, AI analytics, and CRO to grow month after month with data-driven decisions and scalable marketing infrastructure.",
    },
    {
      icon: Target,
      title: "Precision Targeting",
      description:
        "Laser-focused audience segmentation and behavioral targeting to ensure your message reaches the right people at the right time.",
    },
    {
      icon: Users,
      title: "Customer Intelligence",
      description:
        "Deep analytics and customer journey mapping to understand buyer behavior and optimize every touchpoint for maximum engagement.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="pt-40 pb-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-6xl font-semibold text-gray-900 mb-6">
           <span className="text-blue-500">We Don&apos;t Just Run Ads</span>  We Build Scalable Marketing Engines.
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Bixeltek approaches marketing like infrastructure — engineered,
            measurable, and continually optimized.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              className="relative rounded-2xl p-8 border border-gray-200 overflow-hidden group cursor-pointer transition-all duration-500 hover:shadow-xl"
            >
              {/* Animated Background coming from bottom */}
              <div
                className="absolute inset-x-0 bottom-0 h-0 bg-gradient-to-t from-blue-700 to-blue-600 rounded-b-2xl 
                group-hover:h-full group-hover:rounded-2xl transition-all duration-500 ease-out"
              />

              {/* Content */}
              <div className="relative z-10">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-white/20 transition-colors duration-300">
                  <service.icon className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors duration-300" />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-white transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed group-hover:text-white/90 transition-colors duration-300">
                  {service.description}
                </p>
              </div>

              {/* Border Glow */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-white/20 transition-all duration-300 pointer-events-none z-20" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default MarketingEngines;
