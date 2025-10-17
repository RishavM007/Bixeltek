"use client";
import React, { useState } from "react";
import Image from "next/image";
import { ButtonContactForm } from "@/sections/ButtonContactForm";
import { FunnelSEOLogoTicker } from "@/components/Funnel/SocialMedia/SEOLogoTicker";

// ✅ Icons
import googleIcon from "@/assets/google-authenticator-svgrepo-com.png";
import clientIcon from "@/assets/star-shine-svgrepo-com.png";
import saudiIcon from "@/assets/medal-ribbons-star-svgrepo-com.png";

// ✅ Background Image
import heroBg from "@/assets/Riyadh_Skyline.jpg";
import { EPLogoTickerSaudiEP } from "../EasternProvince/GoogleAds/SaudiLogoTickerEP";
import { ChevronRight } from "lucide-react";

export default function HeroRiyadh() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleContactForm = () => setIsVisible((prev) => !prev);

  const proofPoints = [
    { id: 1, text: "Google Partner Certified", icon: googleIcon },
    { id: 2, text: "90% Client Retention", icon: clientIcon },
    { id: 3, text: "Trusted by Businesses Across Saudi Arabia", icon: saudiIcon },
  ];

  return (
    <>
    
    <section className="relative flex flex-col items-center justify-center h-[12n0vh] md:h-[95vh] text-center px-6 overflow-hidden">
      {/* Background Image */}
      <Image
        src={heroBg}
        alt="Riyadh Skyline"
        fill
        className="object-cover object-center absolute inset-0 -z-10"
        priority
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60 -z-10" />

      {/* Content */}
      <div className="flex justify-center items-center">
        <div className="relative z-10 mt-40 max-w-7xl">
          {/* Heading */}
          <h1 className="text-4xl md:text-7xl font-medium leading-tight text-white">
            Digital Marketing Agency in Riyadh{" "}
            <span className="text-yellow-500">That Drives Measurable Growth</span>
          </h1>

          {/* Subheading */}
          <p className="mt-6 text-lg md:text-lg text-gray-100 max-w-5xl mx-auto">
            From Al Olaya to Diriyah and Al Yasmin — Bixeltek helps Saudi businesses attract more customers, optimize ad spend, and dominate online visibility through performance-driven marketing systems.
          </p>

          {/* Proof Points */}
          <div className="mt-8 flex flex-wrap justify-center gap-8">
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
                <p className="text-sm text-center md:text-left md:text-sm">{point.text}</p>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <button
              onClick={toggleContactForm}
              className="px-6 py-3 rounded-full bg-gradient-to-tr from-green-500 via-green-800 to-green-950 text-white font-medium hover:bg-green-700 transition"
            >
              Get My Free Growth Audit
            </button>

            <a href='mailto:zee@bixeltek.com'>
                <div className="p-[1px] rounded-full bg-gradient-to-r from-green-500 via-green-700 to-green-950 inline-block">
                  <button className="px-8 flex gap-2 py-3 bg-black rounded-full text-white font-semibold shadow-lg transition w-full h-full">
                    Talk to a Strategist <ChevronRight />
                  </button>
                </div>
              </a>
          </div>
        </div>
      </div>

      {/* Popup Form + Logo Carousel */}
     
    </section>
      <ButtonContactForm isVisible={isVisible} onClose={() => setIsVisible(false)} />
    <EPLogoTickerSaudiEP/>
    </>
  );
}
