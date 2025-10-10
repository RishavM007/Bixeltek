'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { ButtonContactForm } from '@/sections/ButtonContactForm';
import { LogoTicker2 } from '@/components/GoogleAdsCarousel';

// ✅ Import your icons
import googleIcon from '@/assets/google-authenticator-svgrepo-com.png';
import clientIcon from '@/assets/star-shine-svgrepo-com.png';
import saudiIcon from '@/assets/medal-ribbons-star-svgrepo-com.png';

export default function HeroEasternProvince() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleContactForm = () => {
    setIsVisible(prev => !prev);
    console.log(!isVisible ? "Contact form visible" : "Contact form hidden");
  };

  // ✅ Trust Points
  const proofPoints = [
    { id: 1, text: "Google Partner Certified", icon: googleIcon },
    { id: 2, text: "90% Client Retention", icon: clientIcon },
    { id: 3, text: "Trusted by Businesses Across Saudi Arabia", icon: saudiIcon },
  ];

  return (
    <>
      <section className="relative flex flex-col items-center justify-center h-[140vh] md:h-[90vh] bg-black text-center px-6 overflow-hidden">
        <div className="flex justify-center items-center">
          <div className="relative z-10 mt-40 max-w-7xl">
            
            {/* ✅ Heading */}
            <h1 className="text-4xl md:text-7xl font-bold leading-tight text-white">
              Digital Marketing Agency in Eastern Province{" "}
              <span className="text-blue-500">That Delivers Real Growth</span>
            </h1>

            {/* ✅ Subheading */}
            <p className="mt-6 text-lg md:text-base text-gray-300 max-w-5xl mx-auto">
              From Khobar to Dammam and Dhahran — Bixeltek helps Saudi businesses attract customers, 
              increase ROI, and build a strong online presence through data-driven marketing systems.
            </p>

            {/* ✅ Trust Points */}
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

            {/* ✅ CTA Buttons */}
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <button
                onClick={toggleContactForm}
                className="px-6 py-3 rounded-full bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
              >
                Get My Free Marketing Audit
              </button>
              <a href="mailto:zee@bixeltek.com">
                <button
                  className="px-6 py-3 rounded-full border border-white text-white font-medium hover:bg-white hover:text-black transition"
                >
                  Talk to a Strategist
                </button>
              </a>
            </div>
          </div>
        </div>

        {/* ✅ Popup Form + Logo Carousel */}
        <ButtonContactForm isVisible={isVisible} onClose={() => setIsVisible(false)} />
        <LogoTicker2 />
      </section>
    </>
  );
}
