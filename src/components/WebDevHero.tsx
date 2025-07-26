'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaBolt, FaBrain, FaChartLine, FaCogs, FaUserGraduate } from 'react-icons/fa';
import { RiArrowRightSLine } from "react-icons/ri";
import Image from 'next/image';

export default function WebDevHero() {

  const [IsActive,SetIsActive]  = useState(false);

const features = [
  {
    icon: <FaUserGraduate className="text-purple-500 text-2xl" />,
    title: 'Elite coaching for all ages, levels, backgrounds, and learning speed preferences.',
  },
  {
    icon: <FaBolt className="text-purple-500 text-2xl" />,
    title: 'Modern facilities with top-tier tools, resources, and optimized learning-friendly atmosphere.',
  },
  {
    icon: <FaCogs className="text-purple-500 text-2xl" />,
    title: 'Customized training plans crafted for your goals, needs, and personal strengths.',
  },
  {
    icon: <FaChartLine className="text-purple-500 text-2xl" />,
    title: 'Consistent student success driven by proven systems, dedication, and expert mentorship.',
  },
  {
    icon: <FaBrain className="text-purple-500 text-2xl" />,
    title: 'Beginner to advanced programs built for mastery, confidence, and lifelong growth.',
  },
];




  return (
    <>
      <div
        className="relative h-[110vh] -mt-32 bg-cover bg-center flex flex-col items-center bg-[url('/abstract-flowing-neon-wave-background.jpg')]"
      >
        <div className="absolute bottom-0 left-0 w-full z-30 h-36 bg-gradient-to-t from-black to-transparent"></div>

        <div className="flex flex-col justify-center items-center h-full w-full pt-20">
          <div className="flex flex-col justify-center h-full w-full pl-10 md:pl-20 space-y-6">

            {/* Animated Heading */}
            <motion.h1
              initial={{ opacity: 0, x: -500 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="text-white font-poppins font-semibold text-[36px] md:text-[54px] leading-tight max-w-[1200px]"
            >
              We Build Websites That Do More <br />Than Look Good — They Perform.
            </motion.h1>

            {/* Animated Paragraph */}
            <motion.p
              initial={{ opacity: 0, x: -500 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.6, ease: 'easeInOut' }}
              className="text-left text-[18px] tracking-wide font-poppins text-[#cac9d1] max-w-[800px]"
            >
              Work With the Best Web Design and Development Company in Hyderabad That Builds to Convert.
            </motion.p>

            {/* Animated Buttons */}
            <motion.div
              initial={{ opacity: 0, x: -200 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.1, delay: 0.8, ease: 'easeOut' }}
              className="mt-8 flex flex-col md:flex-row gap-3"
            >
              <a
                href="tel:+919100032301"
                className="px-4 lg:px-8 py-3 w-fit text-sm md:text-base font-semibold border bg-white text-purple-900 border-white rounded-full hover:bg-white hover:text-black transition"
              >
                Book a 1:1 Strategy Call
              </a>

              <button className="w-full md:w-auto px-4 lg:px-8 py-3 text-sm md:text-base font-semibold text-white group rounded-full border border-white hover:bg-white hover:text-black transition">
                Get a Free Website Audit
                <RiArrowRightSLine className="inline-block text-xl group-hover:translate-x-2 transition duration-300 ml-1 mb-[3px]" />
              </button>
            </motion.div>

          </div>
           <div className="w-full md:px-16 lg:px-[88px] pb-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-0" >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group border-t-2 border-t-[#c0c0c0] hover:border-t-purple-700 transition-all duration-300 pr-7 pt-8 pb-4"
              >
                <div className="mb-3">{feature.icon}</div>
                <p className="text-[#fafafa] text-sm leading-snug">
                  {feature.title}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
        </div>
       
      </div>
    </>
  );
}
