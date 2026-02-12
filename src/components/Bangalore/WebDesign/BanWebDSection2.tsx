"use client";

import React from "react";
import Image from "next/image";
import { Check } from "lucide-react";
import strategyImg from "@/assets/laptop mockup 2.png"; // 🖼️ Replace with your image path

const WebsiteStrategySection = () => {
  return (
    <section className="px-6 lg:w-[85%] mx-auto md:py-24 flex flex-col lg:flex-row items-center justify-between gap-12 md:gap-20">
      {/* LEFT — CONTENT */}
      <div className="w-full lg:w-1/2 text-left flex flex-col justify-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-6xl font-semibold text-gray-900 leading-tight mb-6">
          Looks Alone Don’t Sell.{" "}
          <span className="text-purple-600">Strategy Does.</span>
        </h2>

        {/* Body Paragraph */}
        <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6">
          Many websites in Bangalore are visually impressive but fail to
          convert because they ignore the fundamentals of{" "}
          <span className="text-purple-600 font-medium">UX, SEO,</span> and{" "}
          <span className="text-purple-600 font-medium">performance.</span>  
          A great-looking site is useless if it can’t attract, guide, and
          convert visitors into real leads.
        </p>

        {/* Points List */}
        <div className="flex flex-col gap-4 mb-6">
          {[
            "Slow loading times and broken mobile responsiveness",
            "Outdated design frameworks with limited scalability",
            "Unclear navigation and weak calls to action",
            "Missing analytics and conversion tracking",
            "No SEO or schema implementation",
          ].map((point, idx) => (
            <div key={idx} className="flex items-start gap-3">
              <Check className="w-6 h-6 text-purple-600 flex-shrink-0 mt-[2px]" />
              <span className="text-gray-700 text-base md:text-lg leading-relaxed">
                {point}
              </span>
            </div>
          ))}
        </div>

        {/* Closing Line */}
        <p className="text-gray-700 text-base md:text-lg leading-relaxed">
          Bixeltek fixes these gaps with{" "}
          <span className="font-semibold text-purple-600">
            design systems that blend aesthetics, performance, and data
          </span>{" "}
          — helping your website convert better, load faster, and scale smarter.
        </p>
      </div>

      {/* RIGHT — IMAGE */}
      <div className="relative w-full lg:w-1/2 h-[320px] md:h-[520px] rounded-2xl overflow-hidden ">
        <Image
          src={strategyImg}
          alt="Bixeltek website strategy design concept"
          fill
          className="object-cover object-center"
          priority
        />
      </div>
    </section>
  );
};

export default WebsiteStrategySection;
