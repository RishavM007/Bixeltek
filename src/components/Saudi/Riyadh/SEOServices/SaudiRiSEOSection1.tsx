"use client";
import React from "react";
import Image from "next/image";
import searchImage from "@/assets/ai seo RANKINGS.png"; // 🖼️ Replace with your actual image

export default function SEOOpportunity() {
  return (
    <section className="bg-black lg:max-w-[95%] mx-auto text-white md:py-24 px-6 lg:px-20 flex flex-col lg:flex-row items-center gap-8 md:gap-16 overflow-hidden">
      {/* LEFT SIDE — IMAGE */}
     <div className="relative w-full lg:w-1/2 h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-lg flex justify-center items-center">
  <Image
    src={searchImage}
    alt="Google Ads Dashboard"
    fill
    className="object-contain  transition-transform duration-500"
    priority
  />
</div>


      {/* RIGHT SIDE — CONTENT */}
      <div className="w-full lg:w-1/2">
        <h2 className="text-3xl md:text-6xl font-medium leading-tight mb-6 text-white">
          Because Every Search Is an Opportunity — <span className="text-yellow-500">and Visibility Wins It.</span> 
        </h2>

        <div className="space-y-5 text-gray-200 text-lg leading-relaxed">
          <p>
            Riyadh’s marketplace has gone digital — whether you’re a clinic, industrial
            supplier, or retail brand, your customers are searching daily for solutions like
            yours.
          </p>

          <p>
            Google Ads puts your business at the top of those search results — instantly.
          </p>

          <p>
            But success with Ads isn’t just about bidding high. It’s about building
            data-driven campaigns that target intent, manage cost, and track performance down
            to the call or WhatsApp click.
          </p>

          <p>
            At <span className="text-yellow-400 font-medium">Bixeltek</span>, we don’t run
            random ads — we engineer profitable systems that grow month after month.
          </p>
        </div>
      </div>
    </section>
  );
}
