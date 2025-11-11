"use client";

import React from "react";
import { Check } from "lucide-react";

export default function WebBangaloreCoverageSection() {
  const points = [
    "Koramangala & HSR Layout – Startup & SaaS hubs.",
    "Whitefield & Marathahalli – IT and corporate sectors.",
    "Indiranagar & MG Road – Retail, lifestyle, and hospitality brands.",
    "Electronic City & Hebbal – Manufacturing and B2B enterprises.",
    "JP Nagar & Jayanagar – Healthcare, education, and local services.",
  ];

  return (
    <section className="w-[95%] md:w-[85%] mx-auto py-24 flex flex-col md:flex-row items-center justify-between gap-12 md:gap-20">
      {/* LEFT — Content */}
      <div className="w-full md:w-1/2">
        <h2 className="text-3xl md:text-5xl font-semibold text-gray-900 leading-tight mb-6">
          Empowering Businesses Across{" "}
          <span className="text-purple-600">Every Corner of Bangalore</span>
        </h2>

        <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-8">
          Bixeltek partners with businesses throughout the city — driving
          localized growth strategies that align with each region’s unique
          audience, industry, and behavior patterns.
        </p>

        <ul className="space-y-4 mb-8">
          {points.map((point, index) => (
            <li key={index} className="flex items-start gap-3">
              <Check className="w-5 h-5 text-purple-600 mt-[2px] flex-shrink-0" />
              <span className="text-gray-700 text-base">{point}</span>
            </li>
          ))}
        </ul>

        <p className="text-gray-700 text-base md:text-lg leading-relaxed italic">
          Each campaign is localized for{" "}
          <span className="font-semibold text-gray-900">language, region,</span>{" "}
          and <span className="font-semibold text-gray-900">customer intent</span>{" "}
          — ensuring maximum relevance and conversion.
        </p>
      </div>

      {/* RIGHT — Map or Video Iframe */}
      <div className="w-full md:w-1/2 h-[320px] md:h-[450px] rounded-2xl overflow-hidden shadow-xl border border-gray-200">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15553.07645803214!2d77.5945621!3d12.9715987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670b8f5d4ff%3A0x7f9f18d53b6d1b6!2sBangalore%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
          width="100%"
          height="100%"
          loading="lazy"
          allowFullScreen
          className="w-full h-full border-0 rounded-2xl"
        ></iframe>
      </div>
    </section>
  );
}
