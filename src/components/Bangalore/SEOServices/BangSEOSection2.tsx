"use client";

import React from "react";
import Image from "next/image";
import { Check } from "lucide-react";
import seoIssuesImg from "@/assets/seobixeltek.avif"; 

const SEOGrowthSection = () => {
  const issues = [
    "Keyword-stuffed content that doesn’t build topical authority",
    "Missing schema, site speed, or indexation issues",
    "Poor local SEO setup in Google Business Profiles",
    "Weak internal linking and broken sitemaps",
    "No alignment between SEO and paid campaigns",
  ];

  return (
    <section className="px-6 lg:w-[85%] mx-auto py-16 md:py-24 flex flex-col lg:flex-row-reverse items-center justify-between gap-12 md:gap-20">
      {/* RIGHT — Image */}
      <div className="relative w-full lg:w-1/2 h-[320px] md:h-[520px] rounded-2xl overflow-hidden">
        <Image
          src={seoIssuesImg}
          alt="SEO growth analysis dashboard"
          fill
          className="object-contain object-center"
          priority
        />
      </div>

      {/* LEFT — Content */}
      <div className="w-full lg:w-1/2 text-left flex flex-col justify-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-6xl font-semibold text-gray-900 leading-tight mb-6">
          Ranking Without Revenue{" "}
          <span className="text-red-600">Isn’t Growth.</span>
        </h2>

        {/* Body */}
        <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6">
          Many agencies focus on vanity metrics — impressions, clicks, and
          generic keywords — but ignore conversions. We focus on measurable{" "}
          <span className="font-semibold text-gray-900">business outcomes.</span>
        </p>

        {/* Common Issues */}
        <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-4">
          Common Issues We Fix:
        </h3>
        <ul className="space-y-4 mb-8">
          {issues.map((issue, index) => (
            <li key={index} className="flex items-start gap-3">
              <Check className="w-5 h-5 text-red-600 mt-[2px] flex-shrink-0" />
              <span className="text-gray-700 text-base">{issue}</span>
            </li>
          ))}
        </ul>

        {/* Closing Line */}
        <p className="text-gray-700 text-base md:text-lg leading-relaxed italic">
          If search visibility doesn’t lead to traffic, engagement, and
          conversions — it’s just noise.
        </p>
      </div>
    </section>
  );
};

export default SEOGrowthSection;
