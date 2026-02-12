"use client";
import React from "react";
import Image from "next/image";
import { Check } from "lucide-react";
import seoScienceImg from "@/assets/Hero_SEO_Dashboard_Template_a958c5b551.webp"; // 🧠 Replace with your image

export default function ScienceOfRelevance() {
  const principles = [
    { id: 1, text: "Intent Alignment: Each page serves a distinct search purpose — informational, commercial, or transactional." },
    { id: 2, text: "Semantic Completeness: We map entities that define your topic and weave them naturally through copy." },
    { id: 3, text: "Hierarchical Design: Headings mirror logic, not layout, ensuring structured comprehension for search engines." },
    { id: 4, text: "UX Continuity: Every section ends with a conversion path or contextual next step." },
  ];

  return (
    <section className="px-6 lg:w-[85%] mx-auto flex flex-col lg:flex-row items-center justify-between py-20 gap-10 md:gap-5">
      {/* Left — Image */}
      <div className="relative w-full lg:w-1/2 h-[300px] md:h-[500px] rounded-2xl overflow-hidden shadow-lg">
        <Image
          src={seoScienceImg}
          alt="On-Page SEO Relevance"
          fill
          className="object-cover object-center"
          priority
        />
      </div>

      {/* Right — Text Content */}
      <div className="w-full lg:w-1/2 text-left flex flex-col justify-center">
        <h2 className="text-3xl md:text-6xl font-medium text-white leading-tight">
          The Science of <span className="text-blue-500">Relevance</span>
        </h2>

        <p className="mt-6 text-gray-300 text-base md:text-base leading-relaxed">
          Search engines don’t “read” like humans — they decode patterns of meaning. On-Page SEO is the
          discipline of structuring those patterns — titles, headings, semantics, and UX signals — so machines
          can interpret expertise and users feel it. At Bixeltek, we treat On-Page SEO as{" "}
          <span className="text-blue-400 font-semibold">information architecture</span>, not word count.
        </p>

        {/* Points Section */}
        <div className="mt-8">
          <h3 className="text-xl font-semibold text-white mb-4">Core Principles</h3>
          <ul className="space-y-4">
            {principles.map((item) => (
              <li key={item.id} className="flex items-start gap-3 text-gray-200">
                <Check className="w-5 h-5 text-blue-500 mt-[2px]" />
                <span className="text-sm md:text-base">{item.text}</span>
              </li>
            ))}
          </ul>
        </div>

        <p className="mt-8 text-gray-400 italic text-sm md:text-base">
          The result is a page that feels effortless to read — and unmistakable to rank.
        </p>
      </div>
    </section>
  );
}
