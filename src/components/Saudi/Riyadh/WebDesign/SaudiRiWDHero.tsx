"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ButtonContactForm } from "@/sections/ButtonContactForm";
import { FunnelSEOLogoTicker } from "@/components/Funnel/SocialMedia/SEOLogoTicker";

// ✅ Icons
import wordpressIcon from "@/assets/medal-ribbons-star-svgrepo-com.png";
import googleIcon from "@/assets/google-authenticator-svgrepo-com.png";
import clientIcon from "@/assets/star-shine-svgrepo-com.png";

// ✅ Background Image
import heroBg from "@/assets/Riyadh_Skyline.jpg";

export default function HeroRiyadhWebDesign() {
  const [isVisible, setIsVisible] = useState(false);
  const toggleContactForm = () => setIsVisible((prev) => !prev);

  const proofPoints = [
    { id: 1, text: "Next.js & WordPress Experts", icon: wordpressIcon },
    { id: 2, text: "Google Partner Certified", icon: googleIcon },
    { id: 3, text: "90% Client Retention", icon: clientIcon },
  ];

  return (
    <>
      <section className="relative bg-black flex flex-col items-center justify-center h-[130vh] md:h-[100vh] text-center px-6 overflow-hidden">
        <div className="absolute inset-0 bg-black/70 -z-10" />

        <div className="flex justify-center items-center w-full">
          <div className="relative z-10 mt-40 max-w-7xl">
            {/* Heading */}
            <h1 className="text-4xl md:text-7xl font-semibold leading-tight text-white">
              Web Design Company in Riyadh{" "}
              <span className="text-yellow-500">
                That Turns Clicks Into Clients
              </span>
            </h1>

            {/* Subheading */}
            <p className="mt-6 text-lg md:text-lg text-gray-100 max-w-4xl mx-auto">
              We design high-performance, SEO-ready, bilingual websites built
              for conversion. From Riyadh startups to enterprise brands, our
              sites load fast, rank high, and sell better.
            </p>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <button
                onClick={toggleContactForm}
                className="px-8 py-2 rounded-full bg-gradient-to-tr from-yellow-500 via-yellow-700 to-yellow-950 text-white font-medium hover:bg-yellow-700 transition"
              >
                Get My Free Website Audit
              </button>
              <a href="mailto:zee@bixeltek.com">
                <button className="px-8 py-3 rounded-full border border-white text-white font-medium hover:bg-green-600 hover:border-green-600 transition">
                  Talk to a Web Strategist
                </button>
              </a>
            </div>

            {/* Proof Points */}
            <div className="mt-12 flex flex-wrap justify-center gap-10">
              {proofPoints.map((point) => (
                <div
                  key={point.id}
                  className="flex flex-col md:flex-row justify-center items-center gap-3 text-white"
                >
                  <Image
                    src={point.icon}
                    alt={point.text}
                    className="w-10 h-10 mb-2 md:mb-0"
                    width={40}
                    height={40}
                  />
                  <p className="text-sm md:text-base text-center md:text-left">
                    {point.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <FunnelSEOLogoTicker />
      </section>

      <ButtonContactForm
        isVisible={isVisible}
        onClose={() => setIsVisible(false)}
      />
    </>
  );
}
