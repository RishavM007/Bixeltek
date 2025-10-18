"use client";
import React from "react";
import Image from "next/image";
import searchImage from "@/assets/Google-Ads-1.png"; // 🖼️ Replace with your actual image

export default function GoogleAdsOpportunity() {
  return (
    <section className="bg-[#fffdf5]  text-black py-24 px-6 md:px-20  overflow-hidden">
      <div className="max-w-[95%] md:max-w-[85%] mx-auto flex flex-col md:flex-row items-center gap-14 md:gap-20 ">
        {/* LEFT SIDE — IMAGE */}
        <div className="relative w-full md:w-1/2 h-[300px] md:h-[520px] rounded-2xl overflow-hidden ">
          <Image
            src={searchImage}
            alt="Google Ads Dashboard"
            fill
            className="object-cover object-center"
            priority
          />
          {/* <div className="absolute inset-0 bg-black/20" /> */}
        </div>

        {/* RIGHT SIDE — CONTENT */}
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl md:text-5xl font-medium leading-tight mb-6 text-black">
            Because Every Search Is an Opportunity — <span className="text-yellow-500">and Visibility Wins It.</span>
          </h2>

          <div className="space-y-5 text-gray-950 text-lg leading-relaxed">
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
      </div>
    </section>
  );
}
