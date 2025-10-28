"use client";
import React from "react";
import Image from "next/image";
import { Check } from "lucide-react";
import growthImg from "@/assets/laptop mockup 2.png"; // replace with your image

export default function CustomGrowthCoded() {
  // ✅ Array of points
  const points = [
    {
      title: "Speed & Core Web Vitals",
      desc: "Page load times under 2 seconds even on mobile.",
    },
    {
      title: "Data Control",
      desc: "No third-party lock-in; full ownership of your stack and analytics.",
    },
    {
      title: "Scalability",
      desc: "Add new regions, services, or integrations without breaking UX.",
    },
    {
      title: "Security",
      desc: "Isolated modules, hardened APIs, and role-based access.",
    },
    {
      title: "Marketing Freedom",
      desc: "Total flexibility to implement any funnel, landing page, or A/B experiment without theme restrictions.",
    },
  ];

  return (
    <section className="relative w-full bg-black text-white py-10 md:py-24 px-6 md:px-12">
      <div className="max-w-[85%] mx-auto flex flex-col-reverse md:flex-row items-center gap-12">
        
        {/* Left Content */}
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl md:text-5xl font-medium mb-6">
            Because Growth Demands <span className="text-blue-500"> More Than Templates</span>
          </h2>
          <p className="text-gray-300 mb-4">
            When your business scales across markets, languages, or complex integrations, pre-built solutions eventually limit you.
          </p>
          <p className="text-gray-300 mb-4">
            Custom-coded systems eliminate those bottlenecks while improving performance, SEO, and conversion.
          </p>

          <p className="text-gray-300 font-semibold mb-3">Top reasons clients choose custom builds:</p>
          
          {/* ✅ Map over points */}
          <div className="space-y-4 mb-4">
            {points.map((point, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <Check className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                <div className="flex flex-col gap-3">
                  <p className="font-semibold text-lg">{point.title}:</p>
                  <p className="text-gray-300 text-sm">{point.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-gray-300">
            Custom coding is for companies that have outgrown “good enough” — and are ready for long-term digital infrastructure.
          </p>
        </div>

        {/* Right Image */}
        <div className="w-full md:w-1/2">
          <Image
            src={growthImg}
            alt="Custom Growth Illustration"
            className=" w-full h-auto"
            priority
          />
        </div>
      </div>
    </section>
  );
}
