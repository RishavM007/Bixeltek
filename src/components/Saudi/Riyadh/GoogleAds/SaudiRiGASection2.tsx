"use client";
import React from "react";
import Image from "next/image";
import { Check } from "lucide-react"; // ✅ import check icon
import adsStrategyImage from "@/assets/Google Ads Dashboard.png";

export default function RiyadhGoogleAdsStrategySection() {
  const issues = [
    "Broad keywords that attract the wrong audience.",
    "No negative keyword sculpting — budget drains fast.",
    "Weak ad copy that fails to connect in Arabic and English.",
    "Landing pages not optimized for conversion or speed.",
    "No conversion tracking — so ROI remains unknown.",
  ];

  return (
    <section className="bg-[#fffdf5]  text-black py-24 px-6 md:px-20  overflow-hidden">
      <div className="max-w-[95%] md:max-w-[85%] mx-auto flex flex-col-reverse md:flex-row items-center gap-14 md:gap-20">
        {/* LEFT SIDE — CONTENT */}
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl md:text-5xl font-medium leading-tight mb-6 text-black">
            Without Strategy, Google Ads Becomes{" "}
            <span className="text-yellow-500">Expensive Guesswork.</span>
          </h2>

          <div className="space-y-4 text-gray-950 text-lg leading-relaxed">
            <p>
              Many Riyadh businesses waste thousands of riyals each month on poorly
              structured ads. Here’s what usually goes wrong:
            </p>

            {/* ✅ Updated List with Green Check Icons */}
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 mt-4">
              {issues.map((issue, idx) => (
                <li key={idx} className="flex items-start gap-2 text-gray-900">
                  <Check className="text-green-500 w-5 h-5 mt-1 flex-shrink-0" />
                  <span>{issue}</span>
                </li>
              ))}
            </ul>

            <p className="mt-6 text-gray-900">
              The result:{" "}
              <span className="text-green-400">High spend, low results, and no clarity.</span>
            </p>

            <p className="mt-4">
              <span className="text-green-500 font-medium">Bixeltek</span> fixes this by
              creating Google Ads systems built around intent, data, and design.
            </p>
          </div>
        </div>

        {/* RIGHT SIDE — IMAGE */}
        <div className="relative w-full md:w-1/2 h-[400px] md:h-[720px] rounded-2xl overflow-hidden ">
          <Image
            src={adsStrategyImage}
            alt="Google Ads Strategy Dashboard"
            fill
            className="object-cover object-center"
            priority
          />
          {/* <div className="absolute inset-0 bg-black/20" /> */}
        </div>
      </div>
    </section>
  );
}
