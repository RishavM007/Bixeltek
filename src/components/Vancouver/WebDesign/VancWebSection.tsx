"use client";

import React from "react";
import Image from "next/image";
import designImg from "@/assets/laptop dentist 2.png"; // placeholder image
import { Check } from "lucide-react";

export default function DesignTrustSection() {
  const designBenefits = [
    "Builds immediate trust and brand recognition",
    "Enhances user experience across devices",
    "Strengthens SEO performance and discoverability",
    "Converts visitors into paying customers",
  ];

  return (
    <section className="bg-black py-20 px-6 md:px-10 flex flex-col md:flex-row items-center gap-12">
      
      {/* Left Side - Image */}
      <div className="md:w-1/2 flex justify-center">
        <Image
          src={designImg}
          alt="Professional website design"
          className="rounded-xl shadow-lg"
          width={700}
          height={500}
          priority
        />
      </div>

      {/* Right Side - Text */}
      <div className="md:w-1/2 text-white max-w-2xl flex flex-col gap-6">
        <h2 className="text-4xl md:text-6xl font-bold">
          In Vancouver’s Competitive Market, <span className="text-blue-500">Design Defines Trust</span>
        </h2>

        <p className="text-gray-300 text-lg">
          First impressions happen in seconds. A slow, cluttered, or outdated website drives potential customers away before they even read your message. In a competitive city like Vancouver, a professionally designed website builds instant credibility and increases your chances of conversion.
        </p>

        {/* Why Great Design Matters */}
        <div>
          <h3 className="text-xl font-poppins font-semibold text-blue-500 mb-3">
            Why Great Design Matters:
          </h3>
          <ul className="space-y-3 text-gray-300">
            {designBenefits.map((benefit, idx) => (
              <li key={idx} className="flex gap-2">
                <Check className="text-blue-500 w-5 h-5 shrink-0 mt-1" />
                {benefit}
              </li>
            ))}
          </ul>
        </div>

        {/* Closing Line */}
        <p className="mt-4 text-gray-300 text-lg font-semibold">
          Your website isn’t just for show — it’s the foundation of your entire marketing strategy.
        </p>
      </div>
    </section>
  );
}
