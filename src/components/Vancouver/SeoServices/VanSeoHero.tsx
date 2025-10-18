"use client";
import React, { useState } from "react";
import { LogoTicker2 } from "@/components/GoogleAdsCarousel";
import { ButtonContactForm } from "@/sections/ButtonContactForm";
import iconimg from "@/assets/medal-ribbons-star-svgrepo-com.png";
import { SEOButtonContactForm } from "@/components/SEOPopupForm";
import starimg from "@/assets/star-shine-svgrepo-com.png";
import googleimg from "@/assets/google-authenticator-svgrepo-com.png";
import Image from "next/image";

export default function HeroSeoVancouver() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleContactForm = () => {
    setIsVisible((prev) => !prev);
    console.log(
      !isVisible ? "Contact form visible" : "Contact form not visible"
    );
  };

  const proofPoints = [
    { id: 1, text: "4+ Years of SEO Experience Across Canada", icon: starimg },
    { id: 2, text: "200+ Campaigns Managed Successfully", icon: iconimg },
    { id: 3, text: "Google Partner Certified", icon: googleimg },
  ];

  return (
    <>
      <section className="relative flex flex-col items-center justify-center h-[140vh] md:h-[100vh] bg-black text-center px-6 overflow-hidden">
        <div className="flex justify-center items-center">
          <div className="relative z-10 mt-40 max-w-7xl">
            
            {/* ✅ Headline */}
            <h1 className="text-4xl md:text-7xl font-bold leading-tight text-white">
              SEO Services in Vancouver{" "}
              <span className="text-blue-500">
                That Turn Visibility Into Revenue
              </span>
            </h1>

            {/* ✅ Paragraph */}
            <p className="mt-6 text-lg md:text-base text-gray-300 max-w-5xl mx-auto">
              Your customers are searching right now — but are they finding you
              or your competitors? In a crowded Vancouver market, SEO is more
              than ranking on Google; it’s about being discovered by the right
              audience, building trust, and converting traffic into business
              growth.
              <br />
              <br />
              At Bixeltek, we combine data-driven SEO, AI-powered strategies,
              and local market insights to help Vancouver businesses rise above
              the noise and attract consistent, qualified leads.
            </p>

            {/* ✅ Proof Points */}
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
                  <p className="text-sm text-center md:text-left md:text-sm">
                    {point.text}
                  </p>
                </div>
              ))}
            </div>

            {/* ✅ CTAs */}
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <button
                onClick={toggleContactForm}
                className="px-6 py-3 rounded-full bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
              >
                Get Your Free SEO Audit
              </button>
              <a href="mailto:zee@bixeltek.com">
                <button className="px-6 py-3 rounded-full border border-white text-white font-medium hover:bg-white hover:text-black transition">
                  Book a Strategy Call
                </button>
              </a>
            </div>
          </div>
        </div>

        {/* ✅ Popup Form + Logo Carousel */}
      </section>
          <SEOButtonContactForm
          isVisible={isVisible}
          onClose={() => setIsVisible(false)}
        />
        <LogoTicker2 />
    </>
  );
}
