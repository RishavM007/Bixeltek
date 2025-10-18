"use client";
import React, { useState } from "react";
import Image from "next/image";
import { ButtonContactForm } from "@/sections/ButtonContactForm";
import { FunnelSEOLogoTicker } from "@/components/Funnel/SocialMedia/SEOLogoTicker";

// ✅ Icons
import googleIcon from "@/assets/google-authenticator-svgrepo-com.png";
import clientIcon from "@/assets/star-shine-svgrepo-com.png";
import globalIcon from "@/assets/medal-ribbons-star-svgrepo-com.png";

// ✅ Background Image
import heroBg from "@/assets/SaudiSEOHeroImg.avif";
import { ChevronRight } from "lucide-react";
import { SEOButtonContactForm } from "@/components/SEOPopupForm";
import { EPLogoTickerSaudiEP } from "../GoogleAds/SaudiLogoTickerEP";

export default function HeroEasternProvinceSEO() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleContactForm = () => {
    setIsVisible((prev) => !prev);
    console.log(!isVisible ? "Contact form visible" : "Contact form hidden");
  };

  const proofPoints = [
    { id: 1, text: "Google Partner Certified", icon: googleIcon },
    { id: 2, text: "90% Client Retention", icon: clientIcon },
    { id: 3, text: "Global SEO Expertise", icon: globalIcon },
  ];

  return (
    <>
    <section className="relative flex flex-col items-center justify-center h-[140vh] md:h-[120vh] pb-20 text-center px-6 overflow-hidden">
      {/* ✅ Background Image */}
      {/* ✅ Bottom Fade Mask */}
<div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#fffdf5] to-transparent z-10 pointer-events-none" />
      <Image
        src={heroBg}
        alt="Eastern Province Skyline"
        fill
        className="object-cover object-center absolute inset-0 -z-10"
        priority
      />

      {/* ✅ Dark Overlay */}
      <div className="absolute inset-0 bg-black/50 -z-10" />

      {/* ✅ Content */}
      <div className="flex justify-center items-center">
        <div className="relative z-10 mt-40 max-w-7xl">
          {/* Heading */}
          <h1 className="text-4xl md:text-7xl font-medium leading-tight text-white">
            SEO Services in Eastern Province{" "} <br />
            <span className="text-yellow-500">
              That Build Visibility, Credibility & Conversions
            </span>
          </h1>

          {/* Subheading */}
          <p className="mt-6 text-lg md:text-base text-gray-100 max-w-5xl mx-auto">
            Serving businesses across Khobar, Dammam, and Dhahran — Bixeltek’s SEO systems combine
            search intent, content depth, and AI-driven optimization to help your brand rank where
            customers are looking.
          </p>

          {/* ⚡ Bold Statement */}
          <p className="mt-6 text-xl md:text-2xl font-inter text-yellow-300 font-medium">
         Start Ranking in Just 60 Days — With Bixeltek’s Proven SEO Framework.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <button
              onClick={toggleContactForm}
              className="px-7 py-3 rounded-full bg-gradient-to-tr from-green-500 via-green-700 to-green-950 hover:bg-gradient-to-tr hover:from-green-950 hover:via-green-700 hover:to-green-500 text-white font-semibold text-sm shadow-lg hover:bg-[#d6ae3f] transition"
            >
              Get a Free SEO Audit
            </button>
             <a href='mailto:zee@bixeltek.com'>
                        <div className="p-[1px] rounded-full bg-gradient-to-r from-green-500 via-green-700 to-green-950 inline-block">
                            <button className="px-8 flex gap-2 py-3 bg-black rounded-full text-white font-semibold shadow-lg transition w-full h-full">
                                 Talk to an SEO Specialist <ChevronRight />
                            </button>
                        </div>
                    </a>
          </div>

          {/* Trust Row */}
          <div className="mt-10 flex flex-wrap justify-center gap-8">
            {proofPoints.map((point) => (
              <div
                key={point.id}
                className="flex flex-col md:flex-row justify-center items-center gap-4 text-white max-w-[250px]"
              >
                <Image
                  src={point.icon}
                  alt={point.text}
                  className="w-12 h-12 mb-3"
                  width={40}
                  height={40}
                />
                <p className="text-sm text-center md:text-left md:text-sm">
                  {point.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Popup Form + Logo Carousel */}
    </section>
      <SEOButtonContactForm isVisible={isVisible} onClose={() => setIsVisible(false)} />
      <EPLogoTickerSaudiEP />
    </>
  );
}
