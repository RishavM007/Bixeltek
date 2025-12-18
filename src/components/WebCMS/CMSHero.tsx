"use client";
import React, { useState } from "react";
import Image from "next/image";
import bgImage from "@/assets/magicpattern-8h_tctpq4h0-unsplash.jpg"; // 🔹 Replace with your actual background image
import { SEOButtonContactForm } from "@/components/SEOPopupForm";
import { LogoTicker2 } from "@/components/GoogleAdsCarousel";

// ✅ React Icons
import { FaWordpress, FaShopify, FaGlobe, FaHandshake } from "react-icons/fa";
import { MdSpeed } from "react-icons/md";
import { EPLogoTickerSaudiEP } from "../Saudi/EasternProvince/GoogleAds/SaudiLogoTickerEP";

export default function HeroCMSDevelopment() {
  const [isVisible, setIsVisible] = useState(false);
  const toggleContactForm = () => setIsVisible((prev) => !prev);

  const proofPoints = [
    {
      id: 1,
      text: "WordPress • Shopify • Headless CMS",
      icon: <FaWordpress className="text-blue-400 w-5 h-5" />,
    },
    {
      id: 2,
      text: "Core Web Vitals Optimized",
      icon: <MdSpeed className="text-green-400 w-5 h-5" />,
    },
    {
      id: 3,
      text: "Multilingual & Regional Scalability",
      icon: <FaGlobe className="text-yellow-400 w-4 h-4" />,
    },
    {
      id: 4,
      text: "Trusted by 200+ Global Clients",
      icon: <FaHandshake className="text-pink-400 w-4 h-4" />,
    },
  ];

  return (
    <>
      <section className="relative bg-black flex flex-col items-center justify-center sm:h-[130vh] md:h-[70vh] lg:h-[120vh] xl:h-[100vh] text-center px-6 overflow-hidden">
        {/* 🔹 Background Image */}
        <Image
          src={bgImage}
          alt="CMS Website Development Background"
          fill
          className="object-cover opacity-40"
          priority
        />


        {/* 🔹 Content */}
        <div className="relative z-10 mt-16 lg:mt-28 xl:mt-40 max-w-7xl mx-auto">
          {/* ✅ Heading */}
          <h1 className="text-4xl md:text-6xl font-medium leading-tight text-white">
            Custom CMS Website Development  That Powers Growth Across{" "} <br></br>
            <span className="text-blue-500">
              India, UAE, Saudi Arabia, Canada & the
              U.S.
            </span>
          </h1>

          {/* ✅ Subheading */}
          <p className="mt-6 text-base md:text-lg text-gray-300 max-w-5xl mx-auto">
            From WordPress to Shopify to Headless CMS — Bixeltek builds
            performance-driven, multilingual, and marketing-ready CMS systems
            that combine design, data, and scalability.
          </p>

          {/* ✅ Proof Row */}
          <div className="mt-8 flex flex-wrap justify-center gap-6 text-gray-200 text-sm">
            {proofPoints.map((point) => (
              <div
                key={point.id}
                className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm border border-white/20"
              >
                {point.icon}
                <p>{point.text}</p>
              </div>
            ))}
          </div>

          {/* ✅ CTAs */}
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <button
              onClick={toggleContactForm}
              className="px-6 py-3 rounded-full bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
            >
              Get My Free CMS Audit
            </button>
            <a href="mailto:zee@bixeltek.com">
              <button className="px-6 py-3 rounded-full border border-white text-white font-medium hover:bg-white hover:text-black transition">
                Talk to a Developer
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* ✅ Popup Form + Logo Carousel */}
      <SEOButtonContactForm
        isVisible={isVisible}
        onClose={() => setIsVisible(false)}
      />
      <EPLogoTickerSaudiEP />
    </>
  );
}
