"use client";

import React from "react";
import Image from "next/image";
import seoImg from "@/assets/vancseo1.png"; // reuse same image for now
import { Check } from "lucide-react";

export default function SeoImportanceSection() {
  const whySeoMatters = [
    "Capture intent-driven leads searching for your services.",
    "Build long-term authority and brand trust.",
    "Reduce dependency on paid ads.",
    "Convert organic traffic into measurable revenue.",
  ];

  return (
    <section className="bg-black py-10 lg:py-20 px-10 lg:px-20 flex flex-col lg:flex-row items-center gap-12">
      
      {/* Left Side - Image */}
      <div className="lg:w-1/2 flex justify-center">
        <Image
          src={seoImg}
          alt="SEO importance illustration"
          className="rounded-xl shadow-lg"
          width={700}
          height={500}
          priority
        />
      </div>

      {/* Right Side - Text */}
      <div className="lg:w-1/2 text-white lg:max-w-xl flex flex-col gap-6">
        <h2 className="text-4xl md:text-5xl font-bold">
          Visibility on Google Isn’t Optional —{" "}
          <span className="text-blue-500">It’s the Lifeline of Your Business</span>
        </h2>

        <p className="text-gray-300 text-lg">
          Whether you’re a local dentist, a real estate firm, or an ecommerce
          store, your customers start their journey on Google. Without SEO, your
          website becomes invisible to those who are ready to buy.
        </p>

        {/* Why SEO Matters List */}
        <div>
          <h3 className="text-xl font-poppins font-semibold text-blue-500 mb-3">
            Why SEO Matters:
          </h3>
          <ul className="space-y-3 text-gray-300">
            {whySeoMatters.map((point, idx) => (
              <li key={idx} className="flex gap-2">
                <Check className="text-blue-500 w-5 h-5 shrink-0 mt-1" />
                {point}
              </li>
            ))}
          </ul>
        </div>

        {/* Closing Line */}
        <p className="mt-1 text-blue-500 font-semibold text-base">
          If you want predictable growth in 2025 and beyond, SEO isn’t an
          expense — it’s an investment in your business’s visibility.
        </p>
      </div>
    </section>
  );
}
