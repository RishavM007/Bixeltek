"use client";
import React from "react";
import Image from "next/image";
import { Check, CheckCircle } from "lucide-react";
import intentImg from "@/assets/gmb-dasboard-seoreseller-1-1024x683.png"; // 🖼️ Replace with your actual image

export default function LocalSEOProximitySection() {
  const fixes = [
    { id: 1, text: "Incomplete or inconsistent Google Business Profiles." },
    { id: 2, text: "Duplicate or incorrect listings hurting credibility." },
    { id: 3, text: "Missing schema & local citations that block map visibility." },
    { id: 4, text: "Review strategy gaps that limit click conversion." },
  ];

  return (
    <section className="w-[95%] md:w-[85%] mx-auto flex flex-col md:flex-row-reverse items-center justify-between py-20 gap-10 md:gap-16">
      {/* Right - Image */}
      <div className="relative w-full md:w-1/2 h-[300px] md:h-[500px] rounded-2xl overflow-hidden shadow-lg">
        <Image
          src={intentImg}
          alt="Local SEO Proximity Optimization"
          fill
          className="object-cover object-center"
          priority
        />
      </div>

      {/* Left - Content */}
      <div className="w-full md:w-1/2 text-left flex flex-col justify-center">
        <h2 className="text-3xl md:text-5xl font-medium text-white leading-tight">
          Proximity Has Become the{" "}
          <span className="text-blue-500">Strongest Signal of Intent</span>
        </h2>

        <p className="mt-6 text-gray-300 text-base md:text-lg leading-relaxed">
          More than 40% of Google searches now have local intent. Mobile users expect instant
          answers — and Google prioritizes verified businesses near them. Without Local SEO, even
          well-known brands get buried under competitors with better Google Business Profile
          optimization.
        </p>

        {/* Fix Section */}
        <div className="mt-8">
          <h3 className="text-xl font-semibold text-white mb-4">We Fix</h3>
          <ul className="space-y-4">
            {fixes.map((fix) => (
              <li key={fix.id} className="flex items-start gap-3 text-gray-200">
                <Check className="w-5 h-5 text-blue-500 mt-[2px]" />
                <span className="text-sm md:text-base">{fix.text}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Closing Line */}
        <p className="mt-8 text-gray-400 italic text-sm md:text-base">
          By making your digital footprint as consistent as your physical location, you unlock
          geo-relevance — Google’s fastest-growing ranking factor.
        </p>
      </div>
    </section>
  );
}
