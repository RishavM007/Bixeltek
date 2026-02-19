"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { SEOButtonContactForm } from "../SEOPopupForm";
import { LogoTickerSaudi } from "@/components/LogoTicker2";

// ✅ Icons (replace with your own assets)
import vitalsIcon from "@/assets/star-shine-svgrepo-com.png";
import schemaIcon from "@/assets/medal-ribbons-star-svgrepo-com.png";
import globeIcon from "@/assets/google-authenticator-svgrepo-com.png";
import { LogoTicker } from "@/sections/LogoTicker";

// ✅ Background Image (optional)
// import techSeoBg from "@/assets/technical-seo-bg.jpg";

export default function HeroTechnicalSEO() {
  const [isVisible, setIsVisible] = useState(false);
  const toggleContactForm = () => setIsVisible((prev) => !prev);

  const proofPoints = [
    { id: 1, text: "Core Web Vitals Optimization", icon: vitalsIcon },
    { id: 2, text: "Schema & Structured Data Experts", icon: schemaIcon },
    { id: 3, text: "Multi-Region SEO (India • KSA • UAE • Canada • USA)", icon: globeIcon },
  ];

  return (
    <>
      <section className="relative flex flex-col items-center justify-center h-[140vh] md:h-screen lg:h-[85vh] text-center px-6 overflow-hidden">
        {/* ✅ Optional Background */}
        {/* <Image src={techSeoBg} alt="Technical SEO Background" fill className="object-cover -z-10" /> */}
        <div className="absolute inset-0 bg-black/60 -z-10" />

        {/* ✅ Content */}
        <div className="flex justify-center items-center">
          <div className="relative z-10 mt-24 max-w-7xl">
            {/* Heading */}
            <h1 className="text-4xl md:text-6xl font-medium leading-tight text-white">
              Technical SEO That Engineers Visibility —{" "}
              <span className="text-blue-500">Not Just Rankings</span>
            </h1>

            {/* Subheading */}
            <p className="mt-6 text-lg md:text-base text-gray-100 max-w-5xl mx-auto">
              Search engines reward architecture, not assumptions. Bixeltek’s Technical SEO
              team builds high-performing, schema-rich websites that load faster, crawl
              deeper, and rank smarter across Google and AI-powered search systems.
            </p>

            {/* Trust Row / Proof Points */}
            <div className="mt-8 flex flex-wrap justify-center gap-8">
              {proofPoints.map((point) => (
                <div
                  key={point.id}
                  className="flex flex-col md:flex-row justify-center items-center gap-4 text-white max-w-[280px]"
                >
                  <Image
                    src={point.icon}
                    alt={point.text}
                    className="w-12 h-12 mb-3"
                    width={40}
                    height={40}
                  />
                  <p className="text-sm text-center md:text-left md:text-sm leading-snug">
                    {point.text}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <button
                onClick={toggleContactForm}
                className="px-8 py-3 rounded-full bg-gradient-to-tr from-blue-500 via-blue-800 to-blue-950 text-white font-medium hover:scale-105 transition"
              >
                Get a Technical SEO Audit
              </button>

              <a href="mailto:zee@bixeltek.com">
                <div className="p-[1px] rounded-full bg-gradient-to-r from-blue-500 via-blue-700 to-blue-950 inline-block">
                  <button className="px-8 flex gap-2 py-3 bg-black rounded-full text-white font-semibold shadow-lg transition w-full h-full">
                    Talk to an SEO Engineer <ChevronRight />
                  </button>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ✅ Popup Form + Logo Carousel */}
      <SEOButtonContactForm isVisible={isVisible} onClose={() => setIsVisible(false)} />
      <LogoTicker
      bg="bg-black"
      />
    </>
  );
}
