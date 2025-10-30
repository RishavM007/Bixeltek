'use client';
import React, { useState } from "react";
import { LogoTicker2 } from "@/components/GoogleAdsCarousel";
import { ButtonContactForm } from "@/sections/ButtonContactForm";
import Image from "next/image";
import experienceIcon from "@/assets/medal-ribbons-star-svgrepo-com.png";
import retentionIcon from "@/assets/star-shine-svgrepo-com.png";
import partnerIcon from "@/assets/google-authenticator-svgrepo-com.png";

export default function HeroSocialMediaVancouver() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleContactForm = () => {
    setIsVisible((prev) => !prev);
    console.log(!isVisible ? "Contact form visible" : "Contact form not visible");
  };

  const highlights = [
    { id: 1, text: "4+ Years of Paid & Organic Social Experience", icon: experienceIcon },
    { id: 2, text: "90% Client Retention Rate", icon: retentionIcon },
    { id: 3, text: "Meta & Google Partner Certified", icon: partnerIcon },
  ];

  return (
    <>
      <section className="relative flex flex-col items-center justify-center h-[160vh] md:h-[100vh] bg-black text-center px-6 overflow-hidden">
        <div className="flex justify-center items-center">
          <div className="relative z-10 mt-40 max-w-7xl">

            {/* ✅ Headline */}
            <h1 className="text-4xl md:text-7xl font-bold leading-tight text-white">
              Social Media Marketing in Vancouver{" "}
              <span className="text-blue-500">That Builds Brands and Drives Sales</span>
            </h1>

            {/* ✅ Paragraph */}
            <p className="mt-6 text-lg md:text-base text-gray-300 max-w-5xl mx-auto">
              Your customers aren’t just searching — they’re scrolling. In Vancouver’s competitive market, social media isn’t optional; it’s where your audience spends their attention and makes buying decisions.
              <br /><br />
              At Bixeltek, we help brands go beyond likes and followers. Our data-driven social media marketing combines storytelling, targeted Meta Ads, and conversion-optimized content to generate awareness, engagement, and real business growth.
            </p>

            {/* ✅ Highlights / Stats Cards */}
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              {highlights.map((point) => (
                <div
                  key={point.id}
                  className="flex flex-col md:flex-row justify-center items-center gap-2 text-white max-w-[250px] p-4 border-2 border-transparent rounded-2xl transition-all duration-300"
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

            {/* ✅ CTAs */}
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <button
                onClick={toggleContactForm}
                className="px-6 py-3 rounded-full bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
              >
                Get a Free Strategy Call
              </button>
              <a href="mailto:zee@bixeltek.com">
                <button className="px-6 py-3 rounded-full border border-white text-white font-medium hover:bg-white hover:text-black transition">
                  Get In Touch With Us
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>
      <ButtonContactForm
        isVisible={isVisible}
        onClose={() => setIsVisible(false)}
      />
      <LogoTicker2 />
    </>
  );
}
