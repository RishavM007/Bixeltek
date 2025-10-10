"use client";
import React from "react";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import marketingImage from "@/assets/team-of-young-successful-designers-gathered-by-wor-2023-11-27-04-57-08-utc_result-2048x1365.webp"; // ✅ Replace with your actual image

export default function MarketingGuessingGameSection() {
  const painPoints = [
    "Your Google Ads and SEO don’t talk to each other.",
    "Your website looks great but doesn’t convert.",
    "You’re tracking clicks, not customers.",
    "You’re drowning in reports but starving for results.",
  ];

  return (
    <section className="bg-black relative md:max-w-[85%] mx-auto text-white py-24 px-6 md:px-16 flex flex-col md:flex-row items-center gap-16 md:gap-24">
      {/* ✅ Left Side Text */}
      <div className="w-full md:w-1/2">
        <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
          Marketing Has Become a Guessing Game —{" "}
          <span className="text-blue-500">and You’re Paying the Price.</span>
        </h2>

        <p className="text-gray-300 mb-6 text-lg leading-relaxed">
          Every agency claims to “grow your business,” but few show you how. You hire experts, run ads, post content, and optimize — yet your sales plateau.
        </p>

        <p className="text-gray-300 mb-8 text-lg leading-relaxed">
          Here’s why:
        </p>

        {/* ✅ Pain Points */}
        <ul className="space-y-4">
          {painPoints.map((point, index) => (
            <li key={index} className="flex items-start gap-3 text-gray-200">
              <FaArrowRight className="text-blue-500 mt-1 shrink-0" />
              <span>{point}</span>
            </li>
          ))}
        </ul>

        <p className="mt-8 text-gray-400 pl-5 border-l-4 border-blue-500 italic">
          The problem isn’t your team or your budget — it’s the lack of a connected system that compounds growth instead of fragmenting it.
        </p>
      </div>

      {/* ✅ Right Side Image */}
      <div className="w-full md:w-1/2 flex justify-center">
        <div className="relative w-[90%] md:w-full h-[320px] md:h-[500px] rounded-2xl overflow-hidden shadow-lg">
          <Image
            src={marketingImage}
            alt="Connected Marketing System"
            fill
            className="object-cover rounded-2xl hover:scale-105 transition duration-500"
          />
        </div>
      </div>
    </section>
  );
}
