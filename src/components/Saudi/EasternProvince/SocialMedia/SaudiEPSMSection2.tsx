"use client";
import React from "react";
import Image from "next/image";
import { HiCheckCircle } from "react-icons/hi";
import socialStrategyImg from "@/assets/Banner-Social-Media-Analytics-Dashboard.png"; // replace with your image

export default function SocialStrategySection() {
  const points = [
    "No consistent brand voice or storytelling.",
    "Poor targeting — wasting ad budgets on irrelevant audiences.",
    "Weak creatives that fail to capture attention.",
    "No tracking or data to measure ROI.",
    "No clear funnel to convert engagement into sales.",
  ];

  return (
    <section className="relative py-16 bg-black overflow-hidden">
      <div className="flex px-6 lg:max-w-[85%] mx-auto gap-10 flex-col-reverse lg:flex-row items-center">

        {/* ✅ Left Content */}
        <div className="w-full lg:w-1/2">
          {/* Heading */}
          <h2 className="text-3xl md:text-6xl font-inter text-white font-medium mb-6 leading-snug">
            <span className="text-yellow-500">
              Posting Randomly Isn’t a Strategy —
            </span>{" "}
            It’s a Guess.
          </h2>

          {/* Copy */}
          <p className="text-gray-300 mb-6 font-poppins leading-relaxed max-w-2xl">
            Most businesses treat social media like a checklist — post a few designs, boost a post, and hope for results. But without strategy, it’s just digital noise.
          </p>

          <p className="text-gray-300 mb-6 font-poppins leading-relaxed max-w-2xl">
            Here’s what usually goes wrong:
          </p>

          {/* ✅ Points List */}
          <ul className="space-y-4 mb-6">
            {points.map((point, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <HiCheckCircle className="text-green-500 mt-1 flex-shrink-0 w-6 h-6" />
                <span className="text-gray-300 font-poppins">{point}</span>
              </li>
            ))}
          </ul>

          <p className="text-gray-300 font-poppins leading-relaxed max-w-2xl">
            This results in low engagement, poor leads, and frustration with “social media not working.” 
            <span className="block mt-2">Bixeltek fixes that by creating purpose-driven, data-backed content ecosystems.</span>
          </p>
        </div>

        {/* ✅ Right Image */}
        <div className="relative w-full lg:w-1/2 flex justify-center items-center">
          <Image
            src={socialStrategyImg}
            alt="Social media strategy"
            className="rounded-[0px] shadow-2xl object-cover z-10"
          />
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent z-20 pointer-events-none" />
        </div>
      </div>
    </section>
  );
}
