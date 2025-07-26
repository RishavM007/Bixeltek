'use client';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaBolt, FaBrain, FaChartLine, FaCogs, FaUserGraduate } from 'react-icons/fa';
import { RiArrowRightSLine } from "react-icons/ri";
import { ContactForm } from "@/sections/ContactForm";
import Link from 'next/link';
import Image from 'next/image';

export default function WebDevHero() {


  const [showContactForm, setShowContactForm] = useState(false);

useEffect(() => {
  const timer = setTimeout(() => {
    setShowContactForm(true);
  }, 5000); // triggers after 5 seconds

  return () => clearTimeout(timer); // cleanup on unmount
}, []);


  const features = [
    {
      icon: <FaUserGraduate className="text-purple-500 text-2xl" />,
      title1: 'Elevate Your Brand Online',
      title: 'Elite coaching for all ages, levels, backgrounds, and learning speed preferences.',
    },
    {
      icon: <FaBolt className="text-purple-500 text-2xl" />,
      title1 : 'Launch Fast, Look Amazing',
      title: 'Modern facilities with top-tier tools, resources, and optimized learning-friendly atmosphere.',
    },
    {
      icon: <FaCogs className="text-purple-500 text-2xl" />,
      title1: 'Expert Designers. Proven Results.',
      title: 'Customized training plans crafted for your goals, needs, and personal strengths.',
    },
    {
      icon: <FaChartLine className="text-purple-500 text-2xl" />,
      title1: 'Seamless Process, Stunning Results',
      title: 'Consistent student success driven by proven systems, dedication, and expert mentorship.',
    },
    {
      icon: <FaBrain className="text-purple-500 text-2xl" />,
      title1: 'Your Website, Your Advantage',
      title: 'Beginner to advanced programs built for mastery, confidence, and lifelong growth.',
    },
  ];




  return (
    <>
      <div
        className="relative h-[120vh] -mt-32 bg-cover bg-center flex flex-col items-center bg-[url('/abstract-flowing-neon-wave-background.jpg')]"
      >
        <ContactForm isVisible={showContactForm} onClose={() => setShowContactForm(false)} />
        <div className="absolute bottom-0 left-0 w-full z-30 h-[300px] bg-gradient-to-t from-black to-transparent"></div>

        <div className="flex flex-col justify-center items-center h-full pt-12">
          <div className="flex flex-col justify-end h-full w-full pl-10 py-28 md:pl-20 space-y-6">

            {/* Animated Heading */}
            <motion.h1
              initial={{ opacity: 0, x: -500 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="text-white font-poppins font-semibold text-[36px] md:text-[54px]  leading-tight max-w-[1000px]"
            >
              We Build Websites That Do More Than Look Good — They Perform.
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, x: -500 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.7, ease: 'easeInOut' }}
              className="text-left text-[26px] tracking-wide font-sofiasanscondensed text-[#f3f3f5] max-w-[1000px]">
             3X Faster Loading Time | Mobile Optimized | Higher Lead Conversion Rates
            </motion.h2>

            {/* Animated Paragraph */}
            <motion.h2
              initial={{ opacity: 0, x: -500 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.6, ease: 'easeInOut' }}
              className="text-left text-[18px] tracking-wide font-poppins text-[#cac9d1] max-w-[800px]"
            >
              Work With the Best Web Design and Development Company in Hyderabad That Builds to Convert.
            </motion.h2>



            {/* Animated Buttons */}
            <motion.div
              initial={{ opacity: 0, x: -200 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.1, delay: 0.8, ease: 'easeOut' }}
              className="mt-8 flex flex-col md:flex-row gap-3"
            >
              <a
                href="tel:+919100032301"
                className="px-4 lg:px-8 py-3 z-50 w-fit text-sm md:text-base font-semibold border bg-white text-purple-900 border-white rounded-full hover:bg-white hover:text-black transition"
              >
                Call Us Now
              </a>
              <Link href={'/contact-us'}>
                <button className="w-full z-50 md:w-auto px-4 lg:px-8 py-3 text-sm md:text-base font-semibold text-white group rounded-full border border-white hover:bg-white hover:text-black transition">
                  Get a Free Website Audit
                  <RiArrowRightSLine className="inline-block text-xl group-hover:translate-x-2 transition duration-300 ml-1 mb-[3px]" />
                </button>
              </Link>

            </motion.div>
          </div>

          <div className="w-full md:px-16 lg:px-[88px] pb-28">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-0" >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group border-t-2 z-50 gap-4 border-t-[#c0c0c0] hover:border-t-purple-700 transition-all duration-300 pr-10 pt-8 pb-4"
                >
                  <h2 className='text-[#fff] font-sofiasanscondensed text-2xl font-semibold mb-4 z-50'>
                  {feature.title1}
                  </h2>
                  <p className="text-[#fff] z-50 text-sm font-medium leading-snug">
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
