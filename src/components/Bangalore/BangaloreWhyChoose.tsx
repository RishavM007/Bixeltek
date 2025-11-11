"use client";

import React from "react";
import Image from "next/image";
import { Check } from "lucide-react";
import growthImg from "@/assets/BCC-2024-EXPLORER-BANGALORE-THINGS_TO_DO_AT_NIGHT-HEADER-MOBILE.webp"; 
export default function DataAndDesignSection() {
  const points = [
    "Google Partner Certified team with proven frameworks.",
    "Local market understanding combined with global expertise.",
    "Transparent reporting through custom dashboards.",
    "Full bilingual support (English & Kannada).",
    "Focus on long-term success, not quick wins.",
  ];

  return (
    <section className="w-[95%] md:w-[85%] mx-auto py-24 flex flex-col md:flex-row items-center justify-between gap-12 md:gap-20">
      {/* LEFT — Image */}
      <div className="relative w-full md:w-1/2 h-[320px] md:h-[520px] rounded-2xl overflow-hidden shadow-lg border border-gray-200">
        <Image
          src={growthImg}
          alt="Bixeltek team analyzing marketing data"
          fill
          className="object-cover object-center"
          priority
        />
      </div>

      <div className="w-full md:w-1/2 text-left flex flex-col justify-center">
        <h2 className="text-3xl md:text-5xl font-semibold text-gray-900 leading-tight mb-6">
          Because Sustainable Growth <br />
          <span className="text-blue-600">Demands Data and Design.</span>
        </h2>

        <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-8">
          Over 200 global and Indian clients partner with{" "}
          <span className="font-semibold text-gray-900">Bixeltek</span> for one
          reason — clarity. Every decision, ad, and design we create is backed
          by measurable insight and performance data.
        </p>

        <ul className="space-y-4 mb-8">
          {points.map((point, index) => (
            <li key={index} className="flex items-start gap-3">
              <Check className="w-5 h-5 text-blue-600 mt-[2px] flex-shrink-0" />
              <span className="text-gray-700 text-base">{point}</span>
            </li>
          ))}
        </ul>

        <p className="text-gray-700 text-base md:text-lg leading-relaxed italic">
          Your marketing shouldn’t be scattered — it should be synchronized.{" "}
          <span className="font-semibold text-gray-900">
            We build systems, not shortcuts.
          </span>
        </p>
      </div>
    </section>
  );
}
