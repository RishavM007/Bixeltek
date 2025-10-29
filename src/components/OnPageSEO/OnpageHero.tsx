"use client";
import React, { useState } from "react";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { SEOButtonContactForm } from "../SEOPopupForm";
import { LogoTickerSaudi } from "@/components/LogoTicker2";

// ✅ Icons (replace with your own assets)
import semanticIcon from "@/assets/star-shine-svgrepo-com.png"
import ctrIcon from "@/assets/google-authenticator-svgrepo-com.png";
import multilingualIcon from "@/assets/medal-ribbons-star-svgrepo-com.png";

// ✅ Background Image (optional — you can add a bg if desired)
// import onpageBg from "@/assets/onpage-seo-bg.jpg";

export default function HeroOnPageSEO() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleContactForm = () => setIsVisible((prev) => !prev);

  const proofPoints = [
    { id: 1, text: "Semantic Entity Mapping", icon: semanticIcon },
    { id: 2, text: "CTR & Engagement Optimization", icon: ctrIcon },
    { id: 3, text: "Multilingual SEO (EN | AR | FR | HI)", icon: multilingualIcon },
  ];

  return (
    <>
      <section className="relative flex flex-col items-center justify-center h-[140vh] md:h-[85vh] text-center px-6 overflow-hidden">
        {/* ✅ Optional Background */}
        {/* <Image src={onpageBg} alt="On-Page SEO Background" fill className="object-cover -z-10" /> */}
        <div className="absolute inset-0 bg-black/60 -z-10" />

        {/* ✅ Content */}
        <div className="flex justify-center items-center">
          <div className="relative z-10 mt-24 max-w-7xl">
            {/* H1 */}
            <h1 className="text-4xl md:text-7xl font-medium leading-tight text-white">
              On-Page SEO That Turns Every Paragraph{" "}
              <span className="text-blue-500">into Performance</span>
            </h1>

            {/* Subheading */}
            <p className="mt-6 text-lg md:text-base text-gray-100 max-w-5xl mx-auto">
              Modern SEO is no longer about keywords — it’s about context. Bixeltek
              re-engineers your content so Google and humans see the same clarity:
              a page that answers, convinces, and converts. We blend semantic optimization
              with UX and conversion psychology to build pages that don’t just rank —
              they earn trust.
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
                className="px-8 py-3 rounded-full bg-gradient-to-tr from-blue-500 via-blue-800 to-blue-950 text-white font-medium hover:scale-105 transition"
              >
                Get an On-Page SEO Audit
              </button>

              <a href="mailto:zee@bixeltek.com">
                <div className="p-[1px] rounded-full bg-gradient-to-r from-blue-500 via-blue-700 to-blue-950 inline-block">
                  <button className="px-8 flex gap-2 py-3 bg-black rounded-full text-white font-semibold shadow-lg transition w-full h-full">
                    Talk to a Strategist <ChevronRight />
                  </button>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ✅ Popup Form + Logo Carousel */}
      <SEOButtonContactForm isVisible={isVisible} onClose={() => setIsVisible(false)} />
      <LogoTickerSaudi />
    </>
  );
}
