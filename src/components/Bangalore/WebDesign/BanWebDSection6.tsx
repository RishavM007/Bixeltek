"use client";

import React from "react";
import Image from "next/image";
import { Check } from "lucide-react";
import whyChooseImg from "@/assets/techmockup.png"; // 🖼️ Replace with your actual image path

const WhyChooseBixeltek = () => {
  const reasons = [
    "In-house design, development, and SEO teams",
    "Full GA4 and Tag Manager integration",
    "Custom UI aligned with brand goals",
    "Transparent project management",
    "Proven success across industries and geographies",
  ];

  return (
    <section className="px-6 lg:w-[85%] mx-auto py-16 md:py-24 flex flex-col lg:flex-row items-center justify-between gap-12 md:gap-20">
      {/* LEFT — IMAGE */}
      <div className="relative w-full lg:w-1/2 h-[320px] md:h-[520px] rounded-2xl overflow-hidden 0">
        <Image
          src={whyChooseImg}
          alt="Bixeltek team collaboration"
          fill
          className="object-contain object-center"
          priority
        />
      </div>

      {/* RIGHT — TEXT */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center text-left">
        <h2 className="text-3xl md:text-5xl font-medium text-gray-900 leading-tight mb-6">
          Why <span className="text-purple-600">Bangalore Businesses</span> Choose Bixeltek
        </h2>

        <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-8">
          Bixeltek blends creative design with technical precision — building
          digital ecosystems that drive performance, not just presence.
          Everything we do is built for scalability, clarity, and measurable ROI.
        </p>

        <ul className="flex flex-col gap-4 mb-8">
          {reasons.map((reason, index) => (
            <li key={index} className="flex items-start gap-3">
              <Check className="w-6 h-6 text-purple-600 flex-shrink-0 mt-[2px]" />
              <span className="text-gray-700 text-base md:text-lg leading-relaxed">
                {reason}
              </span>
            </li>
          ))}
        </ul>

        <p className="text-gray-700 text-base md:text-lg leading-relaxed font-medium">
          Your website isn’t just a page —{" "}
          <span className="text-purple-600 font-semibold">it’s your growth engine.</span>
        </p>
      </div>
    </section>
  );
};

export default WhyChooseBixeltek;
