"use client";
import React from "react";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import rightImage from "@/assets/flowevase.png"; // decorative image
import seoImage from "@/assets/Connect_data_from_all_your_SEO_tools_ab8fa8b91a.webp"; // replace with your actual SEO-related image

export default function SEOPainSection() {
  const painPoints = [
    "You’re not ranking for commercial intent keywords.",
    "AI platforms (ChatGPT, Gemini, Perplexity) don’t recognize your brand.",
    "Your pages aren’t optimized for semantic meaning or user intent.",
    "You’re missing structured data that connects you to entities Google understands.",
    "In 2025, visibility means more than Google — it means being recommended by AI systems.",
  ];

  return (
    <section className="bg-white relative max-w-full md:max-w-[87%] mx-auto text-black py-24 px-6 md:px-16 flex flex-col md:flex-row items-center gap-16 md:gap-24">
      {/* Decorative Image */}
      {/* <Image
        alt="decorative-flower"
        src={rightImage}
        className="absolute w-24 md:w-28 lg:w-32 h-auto bottom-0 sm:-right-7 md:-right-20 lg:-right-28"
      /> */}

      {/* ✅ Left Side Image */}
      <div className="w-full md:w-1/2 flex justify-center">
        <div className="relative w-[90%] md:w-full h-[320px] md:h-[450px] rounded-2xl overflow-hidden">
          <Image
            src={seoImage}
            alt="SEO Dashboard"
            fill
            className="object-cover hover:scale-105 transition duration-500"
          />
        </div>
      </div>

      {/* ✅ Right Side Text */}
      <div className="w-full md:w-1/2">
        <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
          Your Competitors Are Showing Up —{" "}
          <span className="text-blue-500">You’re Not</span>
        </h2>

        <p className="text-gray-900 mb-6 text-lg leading-relaxed">
          Most businesses don’t realize that their SEO isn’t broken — it’s outdated. 
          While competitors use data-driven, entity-based strategies, your site may still rely on keyword stuffing and random backlinks. That’s why:
        </p>

        {/* ✅ Pain Points */}
        <ul className="space-y-4">
          {painPoints.map((point, index) => (
            <li key={index} className="flex items-start gap-3 text-black">
              <FaArrowRight className="text-blue-500 mt-1 shrink-0" />
              <span>{point}</span>
            </li>
          ))}
        </ul>

        <p className="mt-8 text-gray-900 pl-5 border-l-4 border-blue-500 italic">
          Updating your SEO strategy isn’t optional anymore — it’s how you stay visible in 2025 and beyond.
        </p>
      </div>
    </section>
  );
}
