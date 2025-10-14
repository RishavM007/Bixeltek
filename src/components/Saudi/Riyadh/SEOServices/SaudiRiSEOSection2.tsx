"use client";

import React from "react";
import Image from "next/image";
import seoAuditImage from "@/assets/pic-3@1x.png";
import Link from "next/link"; // replace with your actual image

export default function SEOIssuesSection() {
  return (
    <section className="bg-black text-white py-24 px-6 md:px-20">
      <div className="max-w-[85%] mx-auto flex flex-col md:flex-row-reverse items-center gap-10">
        {/* Left Side — Image */}
        <div className="w-full md:w-1/2 flex justify-center items-center">
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
        <div className="w-full md:w-1/2 flex flex-col justify-start items-start">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">
            If Your SEO Still Relies on Keywords Alone, <span className="text-yellow-500">You’re Invisible to Google’s AI</span>.
          </h2>
          <p className="text-gray-300 mb-4 leading-relaxed text-base md:text-lg">
            Most SEO campaigns in Saudi Arabia fail because they’re outdated. The algorithms have evolved — but the strategy hasn’t.
          </p>
          <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
            <li>Random keyword blogs without entity context.</li>
            <li>No internal link architecture or topical clustering.</li>
            <li>Missing Arabic SEO strategy for bilingual audiences.</li>
            <li>Poor technical SEO — slow, unstructured, and unoptimized.</li>
            <li>No analytics or KPI tracking tied to real business results.</li>
          </ul>
          <p className="text-gray-300 leading-relaxed text-base md:text-lg">
           <span className="text-yellow-500">The result? </span> Ranking volatility, low conversions, and wasted investment. Bixeltek replaces chaos with clarity — measurable, modern SEO that builds brand authority across both languages.
          </p>
        </div>
      </div>
    </section>
  );
}
