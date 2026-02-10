"use client";

import React from "react";
import Image from "next/image";
import websiteImg from "@/assets/laptop dentist 2.png"; // reuse same image
import { Check } from "lucide-react";

export default function WebsiteFailureSection2() {
  const commonIssues = [
    "Slow-loading and unoptimized sites",
    "Generic templates that fail to represent the brand",
    "Poor lead generation and conversion rates",
    "No tracking or analytics",
    "Weak mobile performance and outdated visuals",
  ];

  return (
    <section className="bg-black py-20 px-6 lg:px-20 flex flex-col lg:flex-row-reverse items-center gap-12">
      
      {/* Right Side - Image */}
      <div className="lg:w-1/2 flex justify-center">
        <Image
          src={websiteImg}
          alt="Website failure illustration"
          className="rounded-xl shadow-lg"
          width={700}
          height={500}
          priority
        />
      </div>

      {/* Left Side - Text */}
      <div className="lg:w-1/2 text-white max-w-2xl flex flex-col gap-6">
        <h2 className="text-4xl md:text-6xl font-bold">
          Why Most Vancouver Websites <span className="text-blue-500">Fail to Deliver Results</span>
        </h2>

        <p className="text-gray-300 text-lg">
          We’ve helped dozens of Vancouver businesses rebuild their online presence after years of frustration with underperforming websites. The problem isn’t lack of traffic — it’s lack of design that converts.
        </p>

        {/* Common Issues List */}
        <div>
          <h3 className="text-xl font-poppins font-semibold text-blue-500 mb-3">
            Common Issues:
          </h3>
          <ul className="space-y-3 text-gray-300">
            {commonIssues.map((issue, idx) => (
              <li key={idx} className="flex gap-2">
                <Check className="text-blue-500 w-5 h-5 shrink-0 mt-1" />
                {issue}
              </li>
            ))}
          </ul>
        </div>

        {/* Solution Paragraph */}
        <p className="mt-4 text-gray-300 text-lg">
          <span className="font-semibold text-white">Solution:</span> We build custom, conversion-focused websites and landing pages that engage visitors, rank higher on Google, and deliver leads.
        </p>
      </div>
    </section>
  );
}
