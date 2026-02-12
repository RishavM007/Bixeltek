"use client";
import React from "react";
import Image from "next/image";
import { Check } from "lucide-react"; // ✅ check icon
import growthImg from "@/assets/discount-shopping-season-with-sale.jpg"; // 🖼️ Replace with your own image

const growthPoints = [
  { text: "Heatmaps & Session Replays – see what buyers actually do." },
  { text: "Behavioral Funnels – identify drop-off points." },
  { text: "A/B & Multivariate Testing – optimize CTAs, layout, and pricing." },
  { text: "Server-Side Analytics – cleaner attribution across ads and devices." },
  { text: "Quarterly CRO Reviews – align insights with new campaign goals." },
];

const GrowthAfterGoLive = () => {
  return (
    <section className="bg-black text-white py-10 md:py-20 lg:max-w-[90%] mx-auto px-6 lg:px-20 flex flex-col lg:flex-row items-center gap-12">
      {/* Left - Image */}
      <div className="w-full lg:w-1/2 relative">
        <div className="rounded-2xl overflow-hidden shadow-2xl">
          <Image
            src={growthImg}
            alt="E-commerce Growth Optimization"
            className="object-cover h-[300px] md:h-[400px] w-full"
            priority
          />
        </div>
      </div>

      {/* Right - Content */}
      <div className="w-full lg:w-1/2 space-y-6">
        <h2 className="text-4xl md:text-5xl font-inter font-medium leading-tight">
          Growth Starts After{" "}
          <span className="text-blue-500">“Go Live”</span>
        </h2>

        <p className="text-gray-300 text-base md:text-lg font-poppins leading-relaxed">
          We use data-driven iteration to keep stores performing long after launch:
        </p>

        <ul className="space-y-3 pt-4">
          {growthPoints.map((item, idx) => (
            <li key={idx} className="flex items-center gap-3 text-gray-300">
              <Check className="w-5 h-5 text-blue-500 shrink-0" />
              <span>{item.text}</span>
            </li>
          ))}
        </ul>

        <p className="text-gray-300 text-base md:text-lg font-poppins leading-relaxed pt-6">
          E-commerce isn’t a project — it’s a perpetual optimization loop.
        </p>
      </div>
    </section>
  );
};

export default GrowthAfterGoLive;
