"use client";

import React from "react";
import Image from "next/image";
import websiteImg from "@/assets/Saudi Web Design.png"; 
import Link from "next/link";// replace with your image

export default function WebsiteInvestmentSection() {
  const points = [
    "Launch within 30 days.",
    "SEO-ready builds from day one.",
    "Responsive designs across all devices.",
    "Integrated conversion tracking.",
    "Local + global expertise for bilingual audiences.",
    "Transparent pricing and clear milestones.",
  ];

  return (
    <section className="relative py-16 bg-black text-white flex justify-center">
      <div className="flex flex-col md:flex-row items-center w-[95%] md:w-[85%] gap-10">
        {/* Left Image */}
        <div className="relative w-full md:w-1/2 flex justify-center items-center">
          <Image
            src={websiteImg}
            alt="Website Investment"
            className="rounded-[0px] shadow-2xl object-cover"
            priority
          />
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none" />
        </div>

        {/* Right Content */}
        <div className="w-full md:w-1/2 px-6">
          {/* Heading */}
          <h2 className="text-3xl md:text-5xl font-inter font-medium mb-6 leading-snug">
            Because a Website Is an <span className="text-yellow-500">Investment — Not an Expense.</span>
          </h2>

          {/* Expanded Copy */}
          <p className="text-gray-300 mb-6 font-poppins leading-relaxed max-w-xl">
            Businesses across Khobar, Dammam, and Dhahran trust Bixeltek because we deliver measurable returns.
            You get:
          </p>

          {/* Points */}
          <ul className="text-gray-300 mb-6 space-y-3 font-poppins list-disc list-inside">
            {points.map((point, idx) => (
              <li key={idx}>{point}</li>
            ))}
          </ul>

          <p className="text-gray-300 font-poppins leading-relaxed max-w-xl">
            Our websites work 24/7 to grow your business — even while you sleep.
          </p>
            <Link href={"#form"}>
            <button className="px-7 mt-6 py-3 rounded-full bg-gradient-to-tr from-green-500 via-green-800 to-green-950 hover:bg-gradient-to-tr hover:from-green-900 hover:via-green-800 hover:to-green-500 text-white font-semibold text-sm shadow-lg transition">
              Get a Free Website Audit
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
