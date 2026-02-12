"use client";

import React from "react";
import Image from "next/image";
import { Check } from "lucide-react";
import seoBenefitsImg from "@/assets/ai seo RANKINGS.png"; // 🔁 Replace with your own image

const SEOWhatYouGetSection = () => {
  const benefits = [
    "Higher organic rankings for high-intent searches",
    "Consistent local leads from Google Maps and search",
    "Improved website authority and domain reputation",
    "Transparent progress tracking through dashboards",
    "SEO strategies tailored for both English and Kannada search audiences",
  ];

  return (
    <section className="px-6 lg:w-[85%] mx-auto py-10 md:py-24 flex flex-col lg:flex-row-reverse items-center justify-between gap-12 md:gap-20">
      {/* RIGHT — Image */}
      <div className="relative w-full lg:w-1/2 h-[320px] md:h-[520px] rounded-2xl overflow-hidden ">
        <Image
          src={seoBenefitsImg}
          alt="SEO performance metrics dashboard"
          fill
          className="object-cover object-center"
          priority
        />
      </div>

      {/* LEFT — Content */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center text-left">
        {/* Heading */}
        <h2 className="text-3xl md:text-6xl font-semibold text-gray-900 leading-tight mb-4">
          What <span className="text-red-600">You Get</span>
        </h2>

        {/* Short Description */}
        <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-8">
          Partnering with Bixeltek means measurable growth, not just metrics.
          Every SEO deliverable is engineered to improve visibility, credibility,
          and conversions across Bangalore’s competitive search landscape.
        </p>

        {/* Benefits List */}
        <ul className="space-y-5 mb-6">
          {benefits.map((benefit, index) => (
            <li key={index} className="flex items-start gap-3">
              <Check className="w-5 h-5 text-red-600 mt-[2px] flex-shrink-0" />
              <span className="text-gray-700 text-base leading-relaxed">
                {benefit}
              </span>
            </li>
          ))}
        </ul>

        {/* Closing Statement */}
        <p className="text-gray-700 text-base md:text-lg italic">
          With Bixeltek, SEO isn’t just about ranking higher — it’s about building
          authority that drives consistent, qualified leads.
        </p>
      </div>
    </section>
  );
};

export default SEOWhatYouGetSection;
