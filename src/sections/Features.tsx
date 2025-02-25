"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import image2 from "@/assets/woo-block-theme-6@2x.webp";
import wobblefirst from "@/assets/wooble.png";
import bgimg from "@/assets/abstract-paper-background-concept.jpg";
import image3 from "@/assets/Homepage-CTA-Wooble.png"
import image4 from '@/assets/9acc225c-c7a3-4a29-9f10-ed7c8e3e839e.jpg'
import image5 from '@/assets/pile-3d-popular-social-media-logos.jpg'

const tabs = [
  {
    title: "Search Engine Optimization (SEO)",
    description: "Boost your visibility with keyword optimization and on-page strategies for better search rankings.",
    isNew: false,
  },
  {
    title: "Pay-Per-Click Advertising (PPC)",
    description: "Drive targeted traffic and maximize ROI with expertly managed PPC campaigns.",
    isNew: false,
  },
  {
    title: "Social Media Marketing",
    description: "Engage audiences across platforms with creative and impactful social media campaigns.",
    isNew: false,
  },
  {
    title: "Web Development",
    description: "Create stunning, user-friendly websites that showcase your brand and drive conversions.",
    isNew: false,
  },
  {
    title: "Analytics & Reporting",
    description: "Track, analyze, and optimize your campaigns for measurable results and growth.",
    isNew: false,
  },
];

export const Features = () => {
  return (
    <section className="text-white mt-10 mb-10 ">
      <div className="container flex flex-col items-center overflow-hidden">
        {/* Heading */}
        <motion.h2
          className="text-5xl font-medium text-center tracking-tighter"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Our Services
        </motion.h2>

        <motion.p
          className="text-white/70 text-center text-md lg:text-lg tracking-tight mt-5"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          We offer SEO, PPC, Social Media Marketing, Email Marketing, Web Development, and Web Analytics.
        </motion.p>

        {/* First Section */}
        <motion.div
          className="w-full h-[55vh] mt-10 flex rounded-3xl bg-[#873eff]"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="w-1/3 flex flex-col gap-5 justify-center p-10">
            <h2 className="text-4xl font-semibold font-italiana">Web Design and Development</h2>
            <p className="text-xl font-sofiasanscondensed">
              Create stunning, <span className="italic"> user-friendly websites</span> that showcase your brand and drive conversions..
            </p>
            <button className="p-4 rounded-xl text-xl mt-4 bg-white text-[#873eff] font-semibold font-sofiasanscondensed">
              Learn More About Our SEO Services
            </button>
          </div>
          <div className="w-2/3">
            <Image src={image2} alt="image2" className="h-full w-full rounded-tr-3xl rounded-br-3xl object-cover" />
          </div>
        </motion.div>

        {/* Second Section */}
        <div
          className="flex gap-10 h-[55vh] mt-10 w-full"
        >
          {/* Left Section */}
          <motion.div className="w-2/3 rounded-3xl flex items-center relative bg-white overflow-hidden"
            initial={{ opacity: 0, x: -200 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <Image src={bgimg} alt="background" className="absolute rounded-3xl w-full h-full object-cover z-0" />
            <div className="absolute inset-0 bg-black opacity-0 rounded-3xl"></div>

            {/* Content */}
            <div className="relative p-10 z-10 flex flex-col gap-5 justify-center">
              <h2 className="text-4xl font-bold text-white font-italiana">Pay-Per-Click Advertising (PPC)</h2>
              <p className="text-xl font-sofiasanscondensed text-white">
                Drive targeted traffic and maximize ROI with expertly managed PPC campaigns.
              </p>
              <button className="p-4 rounded-xl text-xl mt-4 w-1/3 bg-white text-black font-semibold font-sofiasanscondensed">
                <span className="text-[#1A73E8]">L</span>
                <span className="text-[#DB4437]">e</span>
                <span className="text-[#F4B400]">a</span>
                <span className="text-[#0F9D58]">r</span>
                <span className="text-[#1A73E8]">n</span>
                <span className="text-black">&nbsp;</span>
                <span className="text-[#DB4437]">M</span>
                <span className="text-[#F4B400]">o</span>
                <span className="text-[#0F9D58]">r</span>
                <span className="text-[#1A73E8]">e</span>
                <span className="text-black">&nbsp;</span>
                <span className="text-[#DB4437]">P</span>
                <span className="text-[#F4B400]">P</span>
                <span className="text-[#0F9D58]">C</span>
              </button>

            </div>
          </motion.div>

          {/* Right Section */}
          <motion.div className="w-1/3 rounded-3xl relative bg-[#FFDB58] flex flex-col gap-5 justify-center"
            initial={{ opacity: 0, x: 200 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <Image src={wobblefirst} alt="wobble" className="absolute w-full h-full object-cover z-0 rounded-3xl" />
            <h2 className="text-4xl font-bold text-black font-italiana z-10 ml-5">Search Engine Optimization (SEO)</h2>
            <p className="text-xl font-sofiasanscondensed text-black z-10 ml-5 mr-5">
              Boost your visibility with keyword optimization and on-page strategies for better search rankings.
            </p>
            <button className="w-1/2 p-4 rounded-xl text-xl mt-4 bg-white text-[#927b28] font-semibold z-10 ml-5 font-sofiasanscondensed">
              Learn More PPC
            </button>
          </motion.div>
        </div>

        {/* Third Section */}
        <motion.div
          className="flex gap-10 h-[55vh] mt-10 w-full"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="w-1/3 rounded-3xl  bg-no-repeat relative overflow-hidden flex flex-col gap-5 justify-center">
            <Image src={image5} alt="image3" className="w-full h-full absolute z-0  rounded-3xl" objectFit="cover" />
            <h2 className="text-4xl font-bold text-white font-italiana z-10 ml-5">Social Media Marketing</h2>
            <p className="text-xl font-sofiasanscondensed text-white z-10 ml-5">
              Track, analyze, and optimize your campaigns for measurable results and growth.
            </p>
            <button className="w-2/3 ml-5 p-4 rounded-xl text-xl mt-4 bg-white text-black font-semibold z-10 font-sofiasanscondensed">
              Learn More on Social Media
            </button>
            <div className="absolute inset-0 bg-black opacity-30 rounded-3xl"></div>
          </div>

          <motion.div
            className="w-2/3 rounded-3xl bg-no-repeat relative overflow-hidden flex flex-col gap-5 justify-center"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <Image src={image4} alt="Wobble-Image" className=" absolute " objectFit="contain"></Image>
            <h2 className="text-4xl font-bold text-white font-italiana z-10 ml-5">Analytics & Reporting</h2>
            <p className="text-xl font-sofiasanscondensed text-white z-10 ml-5">
              Track, analyze, and optimize your campaigns for measurable results and growth.
            </p>
            <button className="w-1/3 ml-5 p-4 rounded-xl text-xl mt-4 bg-white text-[#0f1957] font-semibold z-10 font-sofiasanscondensed">
              Learn More Analytics
            </button>
            <div className="absolute inset-0 bg-black opacity-0"></div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
