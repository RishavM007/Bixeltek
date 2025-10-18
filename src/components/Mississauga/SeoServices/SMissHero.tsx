'use client';
import React, { useState } from 'react';
import { LogoTicker2 } from '@/components/GoogleAdsCarousel';
import { ButtonContactForm } from '@/sections/ButtonContactForm';
import iconimg from '@/assets/medal-ribbons-star-svgrepo-com.png';
import starimg from '@/assets/star-shine-svgrepo-com.png';
import googleimg from '@/assets/google-authenticator-svgrepo-com.png';
import { SEOButtonContactForm } from '@/components/SEOPopupForm';
import Image from 'next/image';

export default function HeroSEOMiss() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleContactForm = () => {
    setIsVisible(prev => !prev);
    console.log(!isVisible ? "Contact form visible" : "Contact form not visible");
  };

  const proofPoints = [
    { id: 1, text: "4+ Years Helping Canadian Businesses Grow", icon: iconimg },
    { id: 2, text: "200+ SEO Projects Delivered in Mississauga", icon: starimg },
    { id: 3, text: "Google Partner Certified Agency", icon:  googleimg },
  ];

  return (
    <>
      <section className="relative flex flex-col items-center justify-center h-[140vh] md:h-[100vh] bg-black text-center px-6 overflow-hidden">
        <div className="flex justify-center items-center">
          <div className="relative z-10 mt-40 max-w-7xl">
            {/* Headline */}
            <h1 className="text-4xl md:text-7xl font-bold leading-tight text-white">
              SEO Services in Mississauga <span className="text-blue-500">That Bring Long-Term Growth</span>
            </h1>

            {/* Subheading */}
            <p className="mt-6 text-lg md:text-base text-gray-300 max-w-5xl mx-auto">
              If your business isn’t ranking on Google, you’re invisible to customers. In a city as competitive as Mississauga, strong SEO is the difference between being chosen and being ignored. 
              At <span className="font-semibold text-white">Bixeltek</span>, we help businesses achieve top rankings, consistent organic traffic, and sustainable lead growth with data-driven SEO strategies.
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
                Get a Free SEO Audit
              </button>
              <a href="mailto:zee@bixeltek.com">
                <button className="px-6 py-3 rounded-full border border-white text-white font-medium hover:bg-white hover:text-black transition">
                  Book a Strategy Call
                </button>
              </a>
            </div>
          </div>
        </div>
        {/* Popup Form + Logo Carousel */}
        <SEOButtonContactForm isVisible={isVisible} onClose={() => setIsVisible(false)} />
        <LogoTicker2 />
      </section>
    </>
  );
}
