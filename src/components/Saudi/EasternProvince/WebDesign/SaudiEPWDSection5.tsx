"use client";

import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

export default function GrowthStatsSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  const stats = [
    { id: 1, label: "Increase in Conversion Rates", value: 40, suffix: "%" },
    { id: 2, label: "Faster Site Performance", value: 90, suffix: "%" },
    { id: 3, label: "Lead Growth Within 90 Days", value: 3, suffix: "x" },
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section
      ref={ref}
      className="relative py-20 flex flex-col items-center text-center mx-auto w-[95%] md:w-[85%]"
    >
      <motion.div
        className="relative w-full bg-black rounded-3xl p-12 md:p-16 shadow-[0_0_60px_rgba(0,225,128,0.6)] border border-green-400/40 flex flex-col items-center gap-8"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <motion.h2
          className="text-3xl md:text-5xl font-medium text-white font-inter leading-snug max-w-4xl"
          variants={itemVariants}
        >
          We’re Not Designers — <span className="text-yellow-400">We’re Business Growth Engineers.</span>
        </motion.h2>

        <motion.p
          className="text-gray-300 text-base md:text-lg max-w-7xl leading-relaxed"
          variants={itemVariants}
        >
          Most agencies stop at aesthetics. We start where they stop — aligning web design with business systems, SEO strategy, and analytics.
          When you work with Bixeltek, you’re working with a team that understands both design and performance marketing.
          Our global experience across Canada, India, and Saudi Arabia gives us the edge to design with data and intent, not assumptions.
        </motion.p>

        <motion.div
          className="flex flex-col md:flex-row justify-center items-center gap-20 mt-6"
          variants={containerVariants}
        >
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.id}
              className="flex flex-col items-center"
              variants={itemVariants}
            >
              <p className="text-4xl md:text-6xl font-medium text-yellow-400">
                {inView && (
                  <CountUp
                    start={0}            
                    end={stat.value}      
                    duration={10}           // duration of count
                    suffix={stat.suffix}   // % or x
                    delay={idx * 0.5}      // stagger one by one
                  />
                )}
                {!inView && `0${stat.suffix}`}
              </p>
              <span className="text-gray-300 mt-2 text-center">{stat.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
