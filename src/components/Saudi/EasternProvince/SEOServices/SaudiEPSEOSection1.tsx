"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import searchImg from "@/assets/dammam image.jpg"; // ✅ replace with your relevant image

export default function SEOGrowthEasternProvince() {
  return (
    <section className="relative py-10 md:py-16 bg-black overflow-hidden">
      <div className="flex max-w-[85%] mx-auto gap-10 flex-col md:flex-row items-center">

        {/* ✅ Left Image Container */}
        <div className="relative w-full md:w-1/2 flex justify-center items-center">
          <Image
            src={searchImg}
            alt="SEO in Eastern Province"
            className="rounded-[0px] shadow-2xl object-cover z-10"
          />

          {/* ✅ Bottom Fade Mask */}
        </div>

        {/* ✅ Right Content */}
        <div className="px-6 w-full md:w-1/2 py-10">
          {/* Heading */}
          <h2 className="text-3xl md:text-5xl font-inter text-white font-medium mb-4 leading-snug">
            Your Customers Are Searching —{" "}
            <span className="text-yellow-500">Are You Showing Up?</span>
          </h2>

          {/* Copy */}
          <p className="text-gray-300 mb-6 font-poppins leading-relaxed max-w-2xl">
            Every day in Saudi Arabia’s Eastern Province, thousands of people search Google for
            services and businesses like yours. From clinics in Khobar to contractors in Dammam,
            visibility determines growth.
          </p>

          <p className="text-gray-300 mb-6 font-poppins leading-relaxed max-w-2xl">
            But SEO today isn’t just about adding keywords. Search and AI platforms now reward
            brands that demonstrate topical expertise, credibility, and helpfulness.
          </p>

          <p className="text-gray-300 mb-6 font-poppins leading-relaxed max-w-2xl">
            At Bixeltek, we build SEO systems that align with Google’s Helpful Content updates —
            structured around your real business entities and customer intent.
          </p>

          <p className="text-gray-300 mb-8 font-poppins leading-relaxed max-w-2xl">
            That means your business not only ranks higher on Google but also gets discovered through
            AI systems like Gemini, Perplexity, and AI Overviews — where search is headed next.
          </p>

          {/* CTA Button */}
          <Link href={"#form"}>
            <button className="px-7 py-3 rounded-full bg-gradient-to-tr from-green-500 via-green-700 to-green-950 hover:bg-gradient-to-tr hover:from-green-950 hover:via-green-700 hover:to-green-500 text-white font-semibold text-sm shadow-lg transition">
              Get a Free SEO Audit
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
