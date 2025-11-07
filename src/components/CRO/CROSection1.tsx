"use client";
import React from "react";
import Image from "next/image";
import { Check } from "lucide-react";
import marketingImg from "@/assets/Analytics iPad Mockup.webp"; // replace with your image

export default function HiddenCostMarketing() {
  const points = [
    "You don’t know which keywords bring revenue.",
    "You can’t see which pages convert visitors into leads.",
    "Your Google Ads and SEO teams operate in isolation.",
    "Your CRM is full of “leads” with no attribution trail.",
    "Data is the oxygen of growth. Without it, your marketing suffocates.",
  ];

  return (
    <section className="bg-white w-[95%] md:w-[85%] mx-auto flex flex-col md:flex-row items-center justify-between py-10 md:py-0 gap-10 md:gap-5">
      {/* Left — Text Content */}
      <div className="w-full md:w-1/2 text-left flex flex-col justify-center">
        <h2 className="text-3xl md:text-5xl font-medium text-gray-900 leading-tight">
          The Hidden Cost of <span className="text-blue-500">Untracked Marketing</span>
        </h2>

        <p className="mt-6 text-gray-700 text-base md:text-base leading-relaxed">
          Every campaign you run without proper analytics leaks money. If you’re not tracking every click, form, or call, you’re paying for data you can’t use — and missing out on insights that could double your leads. At scale, that’s not a gap. That’s a blindfold.
        </p>

        {/* Points Section */}
        <div className="mt-8">
          <ul className="space-y-4">
            {points.map((point, index) => (
              <li key={index} className="flex items-start gap-3 text-gray-700">
                <Check className="w-5 h-5 text-blue-500 mt-[2px]" />
                <span className="text-sm md:text-base">{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Right — Image */}
      <div className="relative w-full md:w-1/2 h-[300px] md:h-[500px] rounded-2xl overflow-hidden">
        <Image
          src={marketingImg}
          alt="Marketing Analytics Illustration"
          fill
          className="object-cover object-center"
          priority
        />
      </div>
    </section>
  );
}
