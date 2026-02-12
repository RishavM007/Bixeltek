"use client";

import React from "react";
import Image from "next/image";
import teamImage from "@/assets/Photos-1.png"; // <-- replace with your actual image
import { Check } from "lucide-react";

export default function SocialMediaProfitSection() {
  const points = [
    "Build bilingual, conversion-optimized campaigns for Arabic & English audiences.",
    "Manage end-to-end strategy, content, and ad execution.",
    "Deliver transparent reports tied to real business metrics.",
    "Offer design and data expertise under one roof.",
    "Align every campaign with measurable ROI.",
    "We don’t post for attention — we post for performance.",
  ];

  return (
    <section className="py-20 mt-[-2px] md:mt-0 px-6 lg:px-20 bg-white text-black">
      <div className="lg:max-w-[85%] mx-auto flex flex-col lg:flex-row items-center gap-14">
        {/* LEFT SIDE — IMAGE */}
        <div className="lg:w-1/2 w-full flex justify-center">
          <div className="relative w-full md:w-[90%] h-[250px] md:h-[450px] rounded-3xl overflow-hidden ">
            <Image
              src={teamImage}
              alt="Bixeltek team working"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* RIGHT SIDE — TEXT CONTENT */}
        <div className="lg:w-1/2 w-full space-y-6">
          <h2 className="text-4xl md:text-5xl font-medium leading-tight">
            Because We Turn{" "}
            <span className="text-blue-500">
              Social Media Into a Profit Channel.
            </span>
          </h2>

          <p className="text-gray-800 text-lg leading-relaxed">
            Bixeltek is trusted by growth-minded Saudi brands because we:
          </p>

          <ul className="space-y-4">
            {points.map((point, index) => (
              <li key={index} className="flex items-start gap-3 text-gray-800">
                <Check className="text-blue-500 mt-1 flex-shrink-0 text-lg" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
