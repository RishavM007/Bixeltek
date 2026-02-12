"use client";
import React from "react";
import Image from "next/image";
import { Check } from "lucide-react";
import techSeoImg from "@/assets/a-full-suite-of-SEO-tools-2.webp"; // 🖼️ Replace with your own image

export default function TechnicalSEOIntroSection() {
  const points = [
    { id: 1, text: "Crawl Efficiency – ensuring Google finds and prioritizes your key pages." },
    { id: 2, text: "Indexation Control – managing what gets indexed (and what shouldn’t)." },
    { id: 3, text: "Core Web Vitals – optimizing for speed and user experience." },
    { id: 4, text: "Structured Data – giving search engines clear, machine-readable context." },
    { id: 5, text: "Log Analysis – understanding how Googlebot actually interacts with your site." },
  ];

  return (
    <section className="px-6 lg:w-[85%] mx-auto flex flex-col lg:flex-row items-center justify-between py-20 gap-10 md:gap-5">
      {/* Left - Image */}
      <div className="relative w-full lg:w-1/2 h-[300px] md:h-[560px] rounded-2xl overflow-hidden shadow-lg">
        <Image
          src={techSeoImg}
          alt="Technical SEO architecture visualization"
          fill
          className="object-contain object-center"
          priority
        />
      </div>

      {/* Right - Content */}
      <div className="w-full lg:w-1/2 text-left flex flex-col justify-center">
        <h3 className="text-3xl md:text-5xl font-medium text-white leading-tight">
          The <span className="text-blue-500">Architecture</span> of Visibility
        </h3>

        <p className="mt-6 text-gray-300 text-sm md:text-base leading-relaxed">
          Technical SEO is the invisible engine that determines how well your website can be discovered,
          rendered, and understood by search engines. It’s not just about keywords or backlinks — it’s
          about how efficiently your site communicates with Google’s crawlers and indexing systems.
        </p>

        <p className="mt-4 text-gray-300 text-base md:text-base leading-relaxed">
          At Bixeltek, we treat Technical SEO as a discipline of digital architecture, not marketing
          theory.
        </p>

        {/* Points Section */}
        <div className="mt-8">
          <h4 className="text-xl font-semibold text-white mb-4">Our Focus Areas</h4>
          <ul className="space-y-4">
            {points.map((point) => (
              <li key={point.id} className="flex items-start gap-3 text-gray-200">
                <Check className="w-5 h-5 text-blue-500 mt-[2px]" />
                <span className="text-sm md:text-base">{point.text}</span>
              </li>
            ))}
          </ul>
        </div>

        <p className="mt-8 text-gray-400 italic text-sm md:text-base">
          When code and content are aligned, your visibility compounds — and your traffic becomes predictable.
        </p>
      </div>
    </section>
  );
}
