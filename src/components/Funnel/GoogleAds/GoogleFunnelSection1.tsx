"use client";
import React from "react";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import rightimage from '@/assets/flowevase.png'

// ✅ Replace this with your actual image
import adsImage from "@/assets/Google-Search-Ads-850x496.png";

export default function GoogleAdsPainSection() {
  const painPoints = [
    "Wrong targeting and irrelevant clicks.",
    "Weak ad copy that fails to attract the right audience.",
    "Landing pages that don’t convert — or worse, don’t track conversions at all.",
    "Agencies that report impressions, not impact.",
  ];

  return (
    <section className="bg-black relative md:max-w-[85%] mx-auto text-white py-24 px-6 md:px-16 flex flex-col md:flex-row items-center gap-16 md:gap-24">
      {/* ✅ Left Side Image */}
      <div className="w-full md:w-1/2 flex justify-center">
        <div className="relative w-[90%] md:w-full h-[320px] md:h-[500px] rounded-2xl overflow-hidden shadow-lg">
          <Image
            src={adsImage}
            alt="Google Ads Dashboard"
            fill
            className="object-cover rounded-2xl hover:scale-105 transition duration-500"
          />
        </div>
      </div>

      {/* ✅ Right Side Text */}
      <div className="w-full md:w-1/2">
        <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
          You’re Running Google Ads —{" "}
          <span className="text-blue-500">But the Results Don’t Add Up</span>
        </h2>

        <p className="text-gray-300 mb-6 text-lg leading-relaxed">
          You’re not alone. <span className="font-semibold text-blue-400">7 out of 10 businesses</span> we audit
          waste more than <span className="font-semibold text-blue-400">35% of their ad budget</span> every month —
          and don’t even know it.
          Your campaigns might look “okay” on paper… but under the hood, you’re losing money to:
        </p>

        {/* ✅ Pain Points */}
        <ul className="space-y-4">
          {painPoints.map((point, index) => (
            <li key={index} className="flex items-start gap-3 text-gray-200">
              <FaArrowRight className="text-blue-500 mt-1 shrink-0" />
              <span>{point}</span>
            </li>
          ))}
        </ul>

        <p className="mt-8 text-gray-400 pl-5 border-l-4 border-blue-500 italic">
          Every click without strategy is money lost — and every lost click is a customer won by your competitor.
        </p>
      </div>
    </section>
  );
}
