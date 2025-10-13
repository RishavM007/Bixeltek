"use client";

import React from "react";
import Image from "next/image";
import { AiOutlineCheck } from "react-icons/ai";
import socialMediaImg from "@/assets/I_will_design_the_best_app_store_and_play_store_screenshots-removebg-preview (1).png"; // replace with your image

export default function SocialMediaBranding() {
  const points = [
    "Build custom strategies for each platform",
    "Create data-backed ad funnels for consistent leads",
    "Provide bilingual creative solutions (English + Arabic)",
    "Deliver measurable ROI, not vanity engagement",
    "Combine design excellence with media-buying expertise",
  ];

  return (
    <section className="py-16 bg-black flex flex-col md:flex-row items-center max-w-[95%] md:max-w-[85%] mx-auto gap-10">
      
      {/* Left Image */}
      <div className="w-full md:w-1/2 relative flex justify-center items-center">
        <Image
          src={socialMediaImg}
          alt="Social Media Branding"
          className="rounded-2xl shadow-2xl object-cover w-full h-full"
          priority
        />
      </div>

      {/* Right Content */}
      <div className="w-full md:w-1/2 flex flex-col justify-center px-4 md:px-0">
        <h2 className="text-3xl md:text-5xl font-inter font-semibold text-white mb-6 leading-snug">
          Because We Don’t Just Manage Accounts <span className="text-yellow-500">We Build Brands.</span>
          
        </h2>
        <p className="text-gray-300 mb-6 font-poppins leading-relaxed text-lg md:text-xl">
          Social media is your digital storefront — and in a competitive market like Saudi Arabia, 
          you can’t afford to leave it unmanaged. Businesses across Khobar, Dammam, and Dhahran trust Bixeltek because we:
        </p>

        {/* Points List */}
        <ul className="flex flex-col gap-4 mb-6">
          {points.map((point, idx) => (
            <li key={idx} className="flex items-start gap-3 text-gray-200 text-base md:text-lg">
              <AiOutlineCheck className="text-yellow-500 mt-1" size={22} />
              <span>{point}</span>
            </li>
          ))}
        </ul>

        <p className="text-gray-300 font-poppins leading-relaxed text-lg md:text-xl">
          When creativity meets data, social media becomes a profit center, not a cost.
        </p>
      </div>
    </section>
  );
}
