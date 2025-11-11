"use client";

import React from "react";
import Image from "next/image";
import { Check } from "lucide-react";
import performanceImg from "@/assets/Google Ads Dashboard.png"; // 🧠 Replace with your image path

const PPCPerformanceSection = () => {
  const strengths = [
    "Google Partner Certified experts.",
    "Full funnel tracking and reporting.",
    "Multilingual ad creation for English and Kannada.",
    "Transparent dashboards with real-time metrics.",
    "No hidden fees or percentage-based markups.",
  ];

  return (
    <section className="w-[95%] md:w-[85%] mx-auto py-10 flex flex-col md:flex-row items-center justify-between gap-12 md:gap-20">
      {/* LEFT — Image */}
      <div className="relative w-full md:w-1/2 h-[320px] md:h-[590px] rounded-2xl overflow-hidden">
        <Image
          src={performanceImg}
          alt="Bixeltek PPC Performance Management"
          fill
          className="object-cover object-center"
          priority
        />
      </div>

      {/* RIGHT — Content */}
      <div className="w-full md:w-1/2 text-left flex flex-col justify-center">
        <h2 className="text-3xl md:text-5xl font-semibold text-gray-900 leading-tight mb-6">
          Performance <span className="text-blue-600">Is in the Details.</span>
        </h2>

        <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6">
          <span className="font-semibold text-gray-900">Bixeltek’s PPC management team</span> doesn’t just manage campaigns —
          we manage <span className="font-semibold text-gray-900">growth</span>. Our approach focuses on{" "}
          <span className="font-semibold text-gray-900">clarity, control,</span> and{" "}
          <span className="font-semibold text-gray-900">compounding improvement</span>.
        </p>

        <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-4">
          Our Strengths:
        </h3>

        <ul className="space-y-4 mb-8">
          {strengths.map((point, index) => (
            <li key={index} className="flex items-start gap-3">
              <Check className="w-5 h-5 text-blue-600 mt-[2px] flex-shrink-0" />
              <span className="text-gray-700 text-base">{point}</span>
            </li>
          ))}
        </ul>

        <p className="text-gray-700 text-base md:text-lg leading-relaxed italic">
          Every rupee is accounted for, every click is measured, and every lead
          is traceable.
        </p>
      </div>
    </section>
  );
};

export default PPCPerformanceSection;
