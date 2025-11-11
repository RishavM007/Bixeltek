"use client";
import React from "react";
import Image from "next/image";
import { Check } from "lucide-react";
import strategyImg from "@/assets/vidhana-soudha-bangalore-karnataka-hero.jpg";

export default function MarketingStructureSection() {
  const points = [
    "Campaigns without conversion tracking or analytics.",
    "Websites built for aesthetics, not conversions.",
    "SEO based on keywords instead of topical depth.",
    "No data unification between ads, CRM, and revenue.",
  ];

  return (
    <section className="w-[95%] md:w-[85%] mx-auto flex flex-col md:flex-row items-center justify-between py-0 gap-12 md:gap-20 bg-white">
      {/* Left — Image */}
      <div className="relative w-full md:w-1/2 h-[320px] md:h-[520px] rounded-2xl overflow-hidden shadow-lg">
        <Image
          src={strategyImg}
          alt="Marketing Structure Visualization"
          fill
          className="object-cover rounded-lg object-center"
          priority
        />
      </div>

      {/* Right — Text Content */}
      <div className="w-full md:w-1/2 text-left flex flex-col justify-center">
        <h2 className="text-3xl md:text-5xl font-semibold text-gray-900 leading-tight mb-6">
          If You’re Still Boosting Posts,{" "}
          <span className="text-blue-600">You’re Missing the Bigger Picture.</span>
        </h2>

        <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6">
          Many Bangalore businesses still rely on disconnected tactics — running ad boosts, random campaigns, 
          or outsourcing to agencies that don’t measure results transparently. That might bring impressions, 
          but it doesn’t build a predictable system.
        </p>

        <h3 className="text-lg font-semibold text-gray-900 mb-4">Here’s what we see daily:</h3>

        <ul className="space-y-4 mb-6">
          {points.map((point, i) => (
            <li key={i} className="flex items-start gap-3">
              <Check className="w-5 h-5 text-blue-600 mt-[2px] flex-shrink-0" />
              <span className="text-gray-700 text-base">{point}</span>
            </li>
          ))}
        </ul>

        <p className="text-gray-700 text-base md:text-lg leading-relaxed">
          Your challenge isn’t visibility — it’s <span className="font-semibold text-gray-900">structure.</span>{" "}
          <span className="font-semibold text-blue-600">Bixeltek</span> replaces fragmented marketing with connected, 
          measurable systems that deliver predictable growth.
        </p>
      </div>
    </section>
  );
}
