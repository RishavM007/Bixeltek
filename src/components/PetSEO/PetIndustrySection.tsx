"use client";

import React from "react";
import Image from "next/image";
import petdashboard from "@/assets/Metadata-Change-Alerts.png";

const PetIndustrySection = () => {
  return (
    <section className="bg-white py-24 px-6 md:px-20 flex flex-col md:flex-row items-center gap-12">
      {/* LEFT — Image */}
      <div className="w-full md:w-1/2 flex justify-center md:justify-start">
        <Image
          src={petdashboard}
          alt="Pet industry digital marketing"
          className="w-[90%] md:w-[85%] rounded-3xl           object-cover"
        />
      </div>

      {/* RIGHT — Content */}
      <div className="w-full md:w-1/2 flex flex-col justify-center text-gray-900">
        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-inter font-semibold leading-tight mb-6">
          The <span className="text-amber-600">Pet Industry</span> Has Gone{" "}
          <span className="text-amber-600">Digital</span>
        </h2>

        {/* Paragraphs */}
        <p className="text-gray-700 font-poppins text-base md:text-lg leading-relaxed mb-4">
          The pet economy is exploding. From dog food manufacturers to boutique grooming studios,
          everyone’s competing for attention online. Yet, most pet businesses rely on social media
          or word-of-mouth, while the real battlefield is{" "}
          <span className="text-amber-600 font-medium">Google.</span>
        </p>

        <p className="text-gray-800 font-poppins text-base md:text-lg leading-relaxed mb-4">
          Pet owners don’t scroll through ads — they search with intent:
        </p>

        {/* Example Searches */}
        <div className="bg-gradient-to-r from-blue-50 via-amber-50 to-white border border-amber-200 rounded-2xl p-5 mb-6 text-sm md:text-base font-mono text-amber-800 leading-relaxed shadow-md">
          “Best dog groomer near me.” <br />
          “Affordable cat boarding in [city].” <br />
          “Buy puppy food online.”
        </div>

        <p className="text-gray-700 font-poppins text-base md:text-lg leading-relaxed mb-6">
          If your business isn’t optimized to appear for these high-intent searches,
          you’re leaving money — and lifelong customers — on the table.
        </p>

        <p className="text-gray-900 font-poppins text-base md:text-lg leading-relaxed">
          That’s where{" "}
          <span className="text-amber-700 font-medium">Bixeltek’s SEO and AI SEO systems</span> come in — to
          connect pet brands with local pet parents the moment they start searching.
        </p>
      </div>
    </section>
  );
};

export default PetIndustrySection;
