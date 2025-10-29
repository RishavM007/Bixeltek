"use client";
import React from "react";
import Image from "next/image";
import { Check, CheckCircle } from "lucide-react";
import storefrontImg from "@/assets/local-seo-services-1024x990.webp"; // 🖼️ replace with your image

export default function LocalSEODailyCareSection() {
  const handles = [
    { id: 1, text: "Category selection & keyword placement in titles." },
    { id: 2, text: "Product & Service posting with structured pricing." },
    { id: 3, text: "Geo-tagged photos and videos to validate location authenticity." },
    { id: 4, text: "Weekly updates (offers, Q&A, posts) to signal activity." },
    { id: 5, text: "Integration with UTM tracking for lead attribution." },
  ];

  return (
    <section className="w-[95%] md:w-[85%] mx-auto flex flex-col md:flex-row items-center justify-between py-20 gap-10 md:gap-5">
      {/* Left - Image */}
      <div className="relative w-full md:w-1/2 h-[300px] md:h-[560px] rounded-2xl overflow-hidden shadow-lg">
        <Image
          src={storefrontImg}
          alt="Google Business Profile Optimization"
          fill
          className="object-contain object-center"
          priority
        />
      </div>

      {/* Right - Content */}
      <div className="w-full md:w-1/2 text-left flex flex-col justify-center">
        <h2 className="text-3xl md:text-5xl font-medium text-white leading-tight">
          Your Digital Storefront{" "}
          <span className="text-blue-500">Needs Daily Care</span>
        </h2>

        <p className="mt-6 text-gray-300 text-base md:text-lg leading-relaxed">
          A fully optimized Google Business Profile can double call and direction clicks. 
          We treat it like a living asset — not a set-and-forget listing. 
          Every update, photo, and keyword alignment feeds the algorithm signals that your 
          business is active, authentic, and customer-focused.
        </p>

        {/* We Handle Section */}
        <div className="mt-8">
          <h3 className="text-xl font-semibold text-white mb-4">We Handle</h3>
          <ul className="space-y-4">
            {handles.map((item) => (
              <li key={item.id} className="flex items-start gap-3 text-gray-200">
                <Check className="w-5 h-5 text-blue-500 mt-[2px]" />
                <span className="text-sm md:text-base">{item.text}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Impact Line */}
        <p className="mt-8 text-gray-400 italic text-sm md:text-base">
          Impact: Clients see a <span className="text-blue-400 font-semibold">30–70% lift </span> 
          in map visibility within just 8 weeks.
        </p>
      </div>
    </section>
  );
}
