"use client";

import React from "react";
import Image from "next/image";
import ppcImage from "@/assets/ppc-mobile.webp"; // 🧩 Replace this with your own image

const BangalorePPCSection = () => {
  return (
    <section className="w-[95%] md:w-[85%] mx-auto py-24 flex flex-col md:flex-row items-center justify-between gap-12 md:gap-0">
      {/* LEFT — Image */}
      <div className="relative w-full md:w-1/2 h-[320px] md:h-[520px] rounded-2xl overflow-hidden">
        <Image
          src={ppcImage}
          alt="Google Ads PPC Management - Bixeltek"
          fill
          className="object-contain object-center"
          priority
        />
      </div>

      {/* RIGHT — Content */}
      <div className="w-full md:w-1/2 text-left flex flex-col justify-center">
        <h2 className="text-3xl md:text-5xl font-semibold text-gray-900 leading-tight mb-6">
          Your Audience Is Searching.{" "}
          <br />
          <span className="text-blue-600">Let’s Make Sure They Find You First.</span>
        </h2>

        <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6">
          Every day, thousands of potential customers in Bangalore search Google
          for products and services. The brands that appear first win{" "}
          <span className="font-semibold text-gray-900">trust, clicks,</span> and{" "}
          <span className="font-semibold text-gray-900">sales</span>.
        </p>

        <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6">
          <span className="font-semibold text-gray-900">Bixeltek’s PPC specialists</span> help your business reach
          those customers at the exact moment they’re ready to take action. We
          manage Google Ads with precision — combining{" "}
          <span className="font-semibold text-gray-900">data analytics</span>,
          <span className="font-semibold text-gray-900"> audience intent</span>, and{" "}
          <span className="font-semibold text-gray-900">continuous testing</span>{" "}
          to maximize conversions while minimizing wasted spend.
        </p>

        <p className="text-gray-700 text-base md:text-lg leading-relaxed">
          Whether you’re a{" "}
          <span className="font-semibold text-gray-900">tech startup in Koramangala</span>, a{" "}
          <span className="font-semibold text-gray-900">clinic in Indiranagar</span>,
          or a{" "}
          <span className="font-semibold text-gray-900">real estate developer in Whitefield</span> — our PPC systems
          are designed to{" "}
          <span className="font-semibold text-gray-900">scale leads efficiently and transparently.</span>
        </p>
      </div>
    </section>
  );
};

export default BangalorePPCSection;
