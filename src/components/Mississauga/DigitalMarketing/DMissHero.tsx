'use client';
import React, { useState } from 'react';
import { LogoTicker2 } from '@/components/GoogleAdsCarousel';
import { ButtonContactForm } from '@/sections/ButtonContactForm';
import iconimg from '@/assets/medal-ribbons-star-svgrepo-com.png';
import starimg from '@/assets/star-shine-svgrepo-com.png';
import googleimg from '@/assets/google-authenticator-svgrepo-com.png';
import Image from 'next/image';

export default function HeroDMiss() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleContactForm = () => {
    setIsVisible(prev => !prev);
    console.log(!isVisible ? "Contact form visible" : "Contact form not visible");
  };

  const proofPoints = [
    { id: 1, text: "Google Partner Certified Agency", icon: googleimg },
    { id: 2, text: "200+ Projects Delivered Across Canada", icon: starimg },
    { id: 3, text: "90% Client Retention", icon: iconimg },
  ];

  return (
    <>
      <section className="relative flex flex-col items-center justify-center h-[150vh] md:h-[100vh] bg-black text-center px-6 overflow-hidden">
        <div className="flex justify-center items-center">
          <div className="relative z-10 mt-40 max-w-7xl">
            {/* Headline */}
            <h1 className="text-4xl md:text-7xl font-bold leading-tight text-white">
              Digital Marketing Services in Mississauga <span className="text-blue-500">That Deliver Measurable Results</span>
            </h1>

            {/* Subheading */}
            <p className="mt-6 text-lg md:text-base text-gray-300 max-w-5xl mx-auto">
              In a growing business hub like Mississauga, competition is intense. If your business isn’t visible online, your competitors are taking the leads you’re missing. Bixeltek helps Mississauga businesses get found, generate qualified leads, and scale ROI through Google Ads, SEO, web design, and more.
            </p>

            {/* Proof Points */}
            <div className="mt-8 flex flex-wrap justify-center gap-8">
              {proofPoints.map((point) => (
                <div
                  key={point.id}
                  className="flex flex-col md:flex-row justify-center items-center gap-4 text-white max-w-[250px]"
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
                Book a Free Strategy Call
              </button>
              <a href="#services">
                <button className="px-6 py-3 rounded-full border border-white text-white font-medium hover:bg-white hover:text-black transition">
                  Explore Our Services
                </button>
              </a>
            </div>
          </div>
        </div>
        {/* Popup Form + Logo Carousel */}
      </section>
    <ButtonContactForm isVisible={isVisible} onClose={() => setIsVisible(false)} />
    <LogoTicker2 />
    </>
  );
}
