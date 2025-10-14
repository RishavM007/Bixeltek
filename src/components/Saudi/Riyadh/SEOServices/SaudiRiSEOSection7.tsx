"use client";

import React from "react";
import Image from "next/image";
import { FaCheck } from "react-icons/fa";
import seoIllustration from "@/assets/Automate_SEO_insights_d27f27be8d.webp"; // replace with your actual image

export default function SeoSystemsSection() {
  const points = [
    "Design entity-driven SEO ecosystems that align with Google’s AI.",
    "Offer bilingual content and technical optimization.",
    "Combine analytics, UX, and SEO under one strategy.",
    "Deliver transparent monthly reporting tied to business metrics.",
    "Build authority that compounds over time — not overnight.",
    "SEO done right builds permanence — the kind of visibility that survives updates and earns trust.",
  ];

  return (
    <section className="py-20 px-4 md:px-20 bg-black text-white">
      <div className="max-w-[95%] md:max-w-[85%] mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* LEFT — Image */}
        <div className="md:w-1/2 w-full">
          <Image
            src={seoIllustration}
            alt="SEO Illustration"
            className="rounded-2xl shadow-2xl"
            width={800}
            height={600}
            priority
          />
        </div>

        {/* RIGHT — Content */}
        <div className="md:w-1/2 w-full space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold">
            Because We Build <span className="text-yellow-500">SEO Systems</span> — Not Just Pages.
          </h2>
          <ul className="text-gray-300 space-y-4 leading-relaxed text-lg">
            {points.map((point, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <FaCheck className="text-yellow-500 mt-1" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
