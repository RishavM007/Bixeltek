"use client";
import React from "react";
import Image from "next/image";
import adsStrategyImage from "@/assets/1440x810_cmsv2_6a68c23b-fd8c-5c02-ab6d-230e49e9c930-8293978.webp"; // 🖼️ Replace with your actual image

export default function RiyadhGoogleAdsStrategySection() {
  return (
    <section className="bg-black max-w-[95%] md:max-w-[85%] mx-auto text-white py-24 px-6 md:px-20 flex flex-col-reverse md:flex-row items-center gap-14 md:gap-20 overflow-hidden">
      {/* LEFT SIDE — CONTENT */}
      <div className="w-full md:w-1/2">
        <h2 className="text-3xl md:text-5xl font-medium leading-tight mb-6 text-white">
          Without Strategy, Google Ads Becomes <span className="text-yellow-500">Expensive Guesswork.</span> 
        </h2>

        <div className="space-y-4 text-gray-200 text-lg leading-relaxed">
          <p>
            Many Riyadh businesses waste thousands of riyals each month on poorly structured ads.
            Here’s what usually goes wrong:
          </p>

          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li>Broad keywords that attract the wrong audience.</li>
            <li>No negative keyword sculpting — budget drains fast.</li>
            <li>Weak ad copy that fails to connect in Arabic and English.</li>
            <li>Landing pages not optimized for conversion or speed.</li>
            <li>No conversion tracking — so ROI remains unknown.</li>
          </ul>

          <p className="mt-4 text-gray-100">
            The result: <span className="text-red-400">High spend, low results, and no clarity.</span>
          </p>

          <p className="mt-4">
            <span className="text-yellow-400 font-medium">Bixeltek</span> fixes this by creating Google Ads systems built around intent, data, and design.
          </p>
        </div>
      </div>

      {/* RIGHT SIDE — IMAGE */}
      <div className="relative w-full md:w-1/2 h-[400px] md:h-[520px] rounded-2xl overflow-hidden shadow-lg">
        <Image
          src={adsStrategyImage}
          alt="Google Ads Strategy Dashboard"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>
    </section>
  );
}
