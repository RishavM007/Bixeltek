"use client";

import React from "react";
import { CheckCircle } from "lucide-react";
import Image from "next/image";
import image1 from '@/assets/Dentist Near Me Search Dashboard.png'
import { Check } from "lucide-react";

export default function PrecisionPerformanceSection() {
  const points = [
    "Access to certified PPC strategists.",
    "Transparent monthly reporting and ROI tracking.",
    "Arabic + English keyword segmentation.",
    "CRO-driven landing pages for higher conversions.",
    "Proactive optimization — not “set and forget.”",
  ];

  return (
    <section className="relative bg-[#fffdf5] text-black py-20 px-6 md:px-16 overflow-hidden">
      <div className="max-w-[95%] md:max-w-[85%] mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Left - Image */}
        <div className="relative w-full md:w-1/2 flex justify-center">
          <Image
            src={image1}
            alt="Google Ads Management Precision"
            className="w-full md:w-[100%] object-cover"
          />
        </div>

        {/* Right - Content */}
        <div className="w-full md:w-1/2 space-y-6">
          <h2 className="text-3xl text-black md:text-5xl font-inter font-semibold leading-snug">
            Because Real Performance Comes From{" "}
            <span className="text-yellow-500">Precision, Not Guesswork.</span>
          </h2>

          <p className="text-gray-900 font-poppins leading-relaxed text-[17px]">
            As a <span className="text-yellow-400 font-semibold">Google Partner Certified Agency</span>, 
            we manage high-performing campaigns across Saudi Arabia, Canada, and India — combining 
            global expertise with local insights.
          </p>

          <ul className="space-y-3 mt-8 text-gray-900 font-medium font-poppins">
            {points.map((point, i) => (
              <li key={i} className="flex items-start gap-3">
                <Check className="text-green-500 w-5 h-5 mt-[2px]" />
                <span>{point}</span>
              </li>
            ))}
          </ul>

          <p className="text-gray-900 mt-6 italic">
            We don’t just run campaigns — we make sure every Riyal invested comes back multiplied.
          </p>
        </div>
      </div>
    </section>
  );
}
