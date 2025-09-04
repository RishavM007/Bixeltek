"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { BadgeCheck, Medal, TrendingUp, Globe2 } from "lucide-react";

// Example image imports (replace with yours)
import bottomImg from "@/assets/bottom-scaled.jpg";

export default function HydWhyChooseUs() {
const points = [
  {
    icon: <BadgeCheck className="w-8 h-8 text-white" />,
    title: "Certified Specialists",
    desc: "Our certified experts manage campaigns using proven strategies, staying updated to maximize your business growth efficiently.",
    borderClasses: "border-r border-b",
    bgGradient: "bg-[radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.6)_0%,rgb(10_13_18)_40%)]",
  },
  {
    icon: <Medal className="w-8 h-8 text-white" />,
    title: "Google Partnered",
    desc: "As a Google Partner, we follow strict best practices ensuring optimized, compliant campaigns with measurable results.",
    borderClasses: "border-b",
    bgGradient: "md:border-b md:border-white/50",
  },
  {
    icon: <TrendingUp className="w-8 h-8 text-white" />,
    title: "ROI-Driven",
    desc: "Every strategy and decision is crafted to drive measurable returns, focusing on real business growth, not vanity metrics.",
    borderClasses: "border-l border-b",
    bgGradient: "bg-[radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.6)_0%,rgb(10_13_18)_40%)]",
  },
  {
    icon: <Globe2 className="w-8 h-8 text-white" />,
    title: "Local + Global Insight",
    desc: "We blend Hyderabad market knowledge with global standards to create campaigns that resonate locally and internationally.",
    borderClasses: "border-r",
    bgGradient: "bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.6)_0%,rgb(10_13_18)_40%)]",
  },
  {
    icon: <Globe2 className="w-8 h-8 text-white" />,
    title: "Global Strategy",
    desc: "We design campaigns aligned with both regional nuances and global digital marketing benchmarks.",
    borderClasses: " border-b border-white/50",
  },
  {
    icon: <Globe2 className="w-8 h-8 text-white" />,
    title: "Innovative Solutions",
    desc: "Our tailored strategies combine creativity and data-driven insights to deliver maximum results for your brand.",
    borderClasses: "border-l",
    bgGradient: "bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.6)_0%,rgb(10_13_18)_40%)]",
  },
];


  return (
    <>
      {/* OUTER WRAPPER WITH BG */}
      <div className="w-full py-32 relative bg-[#0a0d12]">
        <section className="max-w-7xl mx-auto mt-0 bg-[#0a0d12] text-gray-100  overflow-hidden">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-6xl font-bold font-inter leading-snug">
              Why <span className="text-blue-500">Choose Us</span>
            </h2>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              Choosing a digital marketing partner is about trust and results. Here’s what you get working with us:
            </p>
          </div>

          {/* GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {points.map((point, idx) => (
              <div
                key={idx}
                className={`${point.bgGradient} sm-p-[0px] md:p-[1px]`}
              >
                {/* Inner Box */}
                <div className="p-10 bg-[#0a0d12] h-full">
                  <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-blue-500/70 mb-6">
                    {point.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{point.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{point.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* ONE Bottom Image */}
          
          {/* CTA */}
          <div className="text-center mt-10">
            <motion.div>
              <Link href={"/contact-us"}>
                <button className="px-7 py-3 rounded-2xl bg-blue-600 text-white font-semibold text-sm shadow-lg hover:bg-blue-700 transition">
                  Book a Free Strategy Call
                </button>
              </Link>
            </motion.div>
          </div>
        </section>
        <div className="w-full absolute bottom-0 h-60 overflow-hidden rounded-xl">
            <Image
              src={bottomImg}
              alt="Why Choose Us Bottom Banner"
              fill
              className="md:object-cover"
            />
          </div>

      </div>

    </>
  );
}
