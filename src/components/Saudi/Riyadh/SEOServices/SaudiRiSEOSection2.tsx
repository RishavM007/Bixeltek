"use client";

import React from "react";
import Image from "next/image";
import { Check } from "lucide-react"; // ✅ Import check icon
import seoAuditImage from "@/assets/SEO Dashboard.png";
import Link from "next/link";

export default function SEOIssuesSection() {
  const issues = [
    "Random keyword blogs without entity context.",
    "No internal link architecture or topical clustering.",
    "Missing Arabic SEO strategy for bilingual audiences.",
    "Poor technical SEO — slow, unstructured, and unoptimized.",
    "No analytics or KPI tracking tied to real business results.",
  ];

  return (
    <section className="bg-black text-white py-10 lg:py-24 px-6 lg:px-20">
      <div className="lg:max-w-[95%] mx-auto flex flex-col lg:flex-row-reverse items-center gap-10">
        {/* Left Side — Image */}
        <div className="w-full lg:w-1/2 flex justify-center items-center">
          <Image
            src={seoAuditImage}
            alt="SEO Audit in Riyadh"
            className="rounded-2xl shadow-xl"
            width={900}
            height={600}
            objectFit="cover"
          />
        </div>

        {/* Right Side — Content */}
        <div className="w-full lg:w-1/2 flex flex-col justify-start items-start">
          <h2 className="text-3xl md:text-6xl font-bold mb-6 text-white leading-tight">
            If Your SEO Still Relies on Keywords Alone,{" "}
            <span className="text-yellow-500">You’re Invisible to Google’s AI</span>.
          </h2>

          <p className="text-gray-300 mb-4 leading-relaxed text-base md:text-lg">
            Most SEO campaigns in Saudi Arabia fail because they’re outdated. The algorithms have evolved — but the strategy hasn’t.
          </p>

          {/* ✅ Updated list — with check icons and two columns */}
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 mb-4">
            {issues.map((issue, idx) => (
              <li key={idx} className="flex items-start gap-2 text-gray-300">
                <Check className="text-green-500 w-5 h-5 mt-1 flex-shrink-0" />
                <span>{issue}</span>
              </li>
            ))}
          </ul>

          <p className="text-gray-300 leading-relaxed text-base md:text-lg">
            <span className="text-yellow-500">The result? </span> Ranking volatility, low conversions, and wasted investment.{" "}
            <span className="text-white font-medium">Bixeltek</span> replaces chaos with clarity — measurable, modern SEO that builds brand authority across both languages.
          </p>
        </div>
      </div>
    </section>
  );
}
