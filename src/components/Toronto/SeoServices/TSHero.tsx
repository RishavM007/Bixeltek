'use client';
import React, { useState } from 'react';
import { LogoTicker2 } from '@/components/GoogleAdsCarousel';
import { ButtonContactForm } from '@/sections/ButtonContactForm';
import { SEOButtonContactForm } from '@/components/SEOPopupForm';
import iconimg from '@/assets/medal-ribbons-star-svgrepo-com.png' 
import starimg from '@/assets/star-shine-svgrepo-com.png'
import googleimg from '@/assets/google-authenticator-svgrepo-com.png'
import Image from 'next/image';

export default function TSHero() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleContactForm = () => {
    setIsVisible(prev => !prev);
    console.log(!isVisible ? "Contact form visible" : "Contact form not visible");
  };

  const proofPoints = [
    { id: 1, text: "200+ SEO Campaigns Delivered", icon: starimg },
    { id: 2, text: "Trusted by Brands Across Canada", icon: iconimg },
    { id: 3, text: "Google Partner Agency", icon: googleimg },
  ];

  return (
    <>
      <section className="relative flex flex-col items-center justify-center h-[140vh] md:h-[90vh] bg-black text-center px-6 overflow-hidden">
        <div className="flex justify-center items-center">
          {/* Blue Sphere Glow */}
          <div className="relative z-10 mt-40 max-w-7xl">
            {/* Headline */}
            <h1 className="text-4xl md:text-7xl font-bold leading-tight text-white">
              SEO Services in Toronto Designed for{" "}
              <span className="text-blue-500">Growth and Market Leadership</span>
            </h1>

            {/* Subheading */}
            <p className="mt-6 text-lg md:text-base text-gray-300 max-w-5xl mx-auto">
              Bixeltek helps businesses across Toronto and Canada achieve long-term digital
              visibility through advanced SEO. We combine technical precision, semantic depth,
              and AI SEO innovation to build rankings that deliver measurable leads and revenue.
            </p>

            {/* Proof Points */}
            <div className="mt-8 flex flex-wrap justify-center gap-6">
              {proofPoints.map((point) => (
                <div
                  key={point.id}
                  className="flex flex-col md:flex-row justify-center items-center gap-2 text-white max-w-[200px]"
                >
                  <Image src={point.icon} alt={point.text} className="w-12 h-12 mb-3" width={40} height={40} />
                  <p className="text-sm text-center md:text-left md:text-sm">{point.text}</p>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <button
                onClick={toggleContactForm}
                className="px-6 py-3 rounded-full bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
              >
                Request a Free SEO Audit
              </button>

              <a href="mailto:zee@bixeltek.com">
              <button
                
                className="px-6 py-3 rounded-full border border-white text-white font-medium hover:bg-white hover:text-black transition"
              >
                Speak With an SEO Specialist
              </button>
              </a>
            </div>
          </div>
        </div>

        <SEOButtonContactForm isVisible={isVisible} onClose={() => setIsVisible(false)} />
        <LogoTicker2 />
      </section>
    </>
  );
}
