'use client';
import React, { useState } from 'react';
import { LogoTicker2 } from '@/components/GoogleAdsCarousel';
import { ButtonContactForm } from '@/sections/ButtonContactForm';
import iconimg from '@/assets/medal-ribbons-star-svgrepo-com.png';
import starimg from '@/assets/star-shine-svgrepo-com.png';
import googleimg from '@/assets/google-authenticator-svgrepo-com.png';
import Image from 'next/image';

export default function HeroGMiss() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleContactForm = () => {
    setIsVisible(prev => !prev);
    console.log(!isVisible ? "Contact form visible" : "Contact form not visible");
  };

  const proofPoints = [
    { id: 1, text: "Google Partner Certified", icon: googleimg },
    { id: 2, text: "200+ Campaigns Managed Across Canada", icon: starimg },
    { id: 3, text: "4+ Years Helping Businesses Grow", icon: iconimg },
  ];

  return (
    <>
      <section className="relative flex flex-col items-center justify-center h-[150vh] md:h-[100vh] bg-black text-center px-6 overflow-hidden">
        <div className="flex justify-center items-center">
          <div className="relative z-10 mt-40 max-w-7xl">
            {/* Headline */}
            <h1 className="text-4xl md:text-7xl font-bold leading-tight text-white">
              Google Ads Management in Mississauga{" "}
              <span className="text-blue-500">That Turns Clicks Into Customers</span>
            </h1>

            {/* Subheading */}
            <p className="mt-6 text-lg md:text-base text-gray-300 max-w-5xl mx-auto">
              Many Mississauga businesses spend thousands on Google Ads — but struggle to see real results. 
              At Bixeltek, a Google Partner Certified agency, we build and manage campaigns that cut wasted spend, 
              attract the right customers, and scale ROI.
            </p>

            {/* Proof Points */}
            <div className="mt-8 flex flex-wrap justify-center gap-12">
              {proofPoints.map((point) => (
                <div
                  key={point.id}
                  className="flex flex-row md:flex-row justify-center items-center gap-5 text-white max-w-[250px]"
                >
                  <Image src={point.icon} alt={point.text} className="w-12 h-12 mb-3" width={40} height={40} />
                  <p className="text-sm text-left md:text-sm">{point.text}</p>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <button
                onClick={toggleContactForm}
                className="px-6 py-3 rounded-full bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
              >
                Get a Free Ads Audit
              </button>
              <button
                onClick={toggleContactForm}
                className="px-6 py-3 rounded-full border border-white text-white font-medium hover:bg-white hover:text-black transition"
              >
                Book a Strategy Call
              </button>
            </div>
          </div>
        </div>
        {/* Popup Form + Logo Carousel */}
        <ButtonContactForm isVisible={isVisible} onClose={() => setIsVisible(false)} />
        <LogoTicker2 />
      </section>
    </>
  );
}
