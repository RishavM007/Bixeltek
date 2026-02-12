"use client";

import React from "react";
import Image from "next/image";
import { Check } from "lucide-react";
import newimage from "@/assets/seo-analysis-menu-item-in-all-in-one-seo-1.webp";

export default function UnderstandingWhySection() {
  const deliverables = [
    {
      id: 1,
      text: "Intent taxonomy document mapping hundreds of keywords to buyer stages.",
    },
    {
      id: 2,
      text: "Entity clouds showing support concepts (e.g., “E-E-A-T,” “Core Web Vitals,” “schema”).",
    },
    {
      id: 3,
      text: "Competitive gap analysis identifying missing topics your competitors cover.",
    },
    {
      id: 4,
      text: "Impact: Pages become complete answers rather than partial opinions, earning Google’s “Helpful Content” trust score.",
    },
  ];

  return (
    <section className="px-6 lg:w-[85%] mx-auto flex flex-col lg:flex-row-reverse items-center justify-between py-20 gap-10 md:gap-16">
      {/* RIGHT - IMAGE */}
      <div className="relative w-full lg:w-1/2 h-[300px] md:h-[430px] rounded-2xl overflow-hidden shadow-lg">
        <Image
          src={newimage}
          alt="Understanding Search Psychology"
          fill
          className="object-cover object-center"
          priority
        />
      </div>

      {/* LEFT - CONTENT */}
      <div className="w-full lg:w-1/2 text-left flex flex-col justify-center">
        <h2 className="text-3xl md:text-6xl font-medium text-white leading-tight">
          <span className="text-blue-500">Understanding Why</span> Before What
        </h2>

        <p className="mt-6 text-gray-300 text-sm md:text-base leading-relaxed">
          Before content creation begins, we decode the psychology of search. Each query
          represents a stage in the customer journey — a problem to solve, a comparison to make,
          or a purchase to complete. Understanding that intent ensures your content aligns with
          what users actually seek, not just what algorithms crawl.
        </p>

        {/* <p className="mt-4 text-gray-300 text-sm md:text-base leading-relaxed">
          By leveraging AI-driven entity extractors and Google’s NLP models, we construct a
          semantic network that mirrors how users think, search, and decide — turning
          disconnected topics into a unified experience that ranks naturally.
        </p> */}

        {/* DELIVERABLES */}
        <div className="mt-8">
          <h3 className="text-xl font-semibold text-white mb-4">Deliverables</h3>
          <ul className="space-y-4">
            {deliverables.map((item) => (
              <li key={item.id} className="flex items-start gap-3 text-gray-200">
                <Check className="w-5 h-5 text-blue-500 mt-[2px]" />
                <span className="text-sm md:text-base">{item.text}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Closing Line */}
        <p className="mt-8 text-gray-400 italic text-sm md:text-base">
          Because when you understand the “why,” every optimization decision — from keywords to
          content flow — becomes intentional, measurable, and meaningful.
        </p>
      </div>
    </section>
  );
}
