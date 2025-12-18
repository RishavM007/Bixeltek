"use client";
import React, { useState } from "react";
import Image from "next/image";
import { ButtonContactForm } from "@/sections/ButtonContactForm";
import { FunnelSEOLogoTicker } from "@/components/Funnel/SocialMedia/SEOLogoTicker";

// ✅ Icons
import googleIcon from "@/assets/google-authenticator-svgrepo-com.png";
import clientIcon from "@/assets/star-shine-svgrepo-com.png";
import accountsIcon from "@/assets/medal-ribbons-star-svgrepo-com.png";

// ✅ Background Image
import heroBg from "@/assets/Riyadh_Skyline.jpg";
import { ChevronRight } from "lucide-react";

export default function HeroRiyadhGoogleAds() {
  const [isVisible, setIsVisible] = useState(false);
  const toggleContactForm = () => setIsVisible((prev) => !prev);

  const proofPoints = [
    { id: 1, text: "Google Partner Certified", icon: googleIcon },
    { id: 2, text: "90% Client Retention", icon: clientIcon },
    { id: 3, text: "Managed 150+ Ad Accounts", icon: accountsIcon },
  ];

  return (
    <>
      <section className="relative bg-black flex flex-col items-center justify-center h-[130vh] md:h-[100vh] text-center px-6 overflow-hidden">
        {/* Background Image */}
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/70 -z-10" />

        {/* Content */}
        <div className="flex justify-center items-center">
          <div className="relative z-10 mt-40 max-w-7xl">
            {/* Heading */}
            <h1 className="text-4xl md:text-7xl font-semibold leading-tight text-white">
              Google Ads Agency in Riyadh{" "}
              <span className="text-yellow-500">That Converts Clicks Into Customers</span>
            </h1>

            {/* Subheading */}
            <p className="mt-6 text-lg md:text-lg text-gray-100 max-w-4xl mx-auto">
              We help Riyadh-based businesses generate consistent leads through
              high-performance Google Ads campaigns — from Search to Performance Max —
              built with precision, tracking, and strategy.
            </p>

            {/* Bold Statement */}
            <p className="mt-6 text-lg md:text-xl font-semibold text-yellow-400">
              Smart Targeting. Measurable ROI. Google Partner Expertise.
            </p>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <button
                onClick={toggleContactForm}
                className="px-8 py-2 rounded-full bg-gradient-to-tr from-green-500 via-green-700 to-green-950 text-white font-medium hover:bg-yellow-700 transition"
              >
                Get My Free Ads Audit
              </button>
              <a href='mailto:zee@bixeltek.com'>
                <div className="p-[1px] rounded-full bg-gradient-to-r from-green-500 via-green-700 to-green-950 inline-block">
                  <button className="px-8 flex gap-2 py-3 bg-black rounded-full text-white font-semibold shadow-lg transition w-full h-full">
                    Talk to a PPC Expert <ChevronRight />
                  </button>
                </div>
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
                  <p className="text-sm md:text-base text-center md:text-left">{point.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Popup Form + Logo Carousel */}
      </section>
      <ButtonContactForm isVisible={isVisible} onClose={() => setIsVisible(false)} />
       <FunnelSEOLogoTicker />
    </>
  );
}
