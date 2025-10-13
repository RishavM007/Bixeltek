"use client";

import React, { useState } from "react";
import { ButtonContactForm } from "@/sections/ButtonContactForm";
import { FunnelSEOLogoTicker } from "@/components/Funnel/SocialMedia/SEOLogoTicker";
import Image from "next/image";
import heroBg from "@/assets/122748606.jpg"; 
import { ChevronRight } from "lucide-react";


import googleIcon from "@/assets/google-authenticator-svgrepo-com.png";
import clientIcon from "@/assets/star-shine-svgrepo-com.png";
import expertIcon from "@/assets/medal-ribbons-star-svgrepo-com.png";

export default function HeroWebDesignSEO() {
  const [isVisible, setIsVisible] = useState(false);
  const toggleContactForm = () => setIsVisible((prev) => !prev);

  const trustPoints = [
    { id: 1, text: "Google Partner Certified", icon: googleIcon },
    { id: 2, text: "200+ Global Clients", icon: clientIcon },
    { id: 3, text: "Web Design + SEO Experts", icon: expertIcon },
  ];

  return (
    <section className="relative flex flex-col items-center justify-center h-[130vh] md:h-[100vh] text-center px-6 overflow-hidden">
      {/* ✅ Background Image */}
      <Image
        src={heroBg}
        alt="High-Performing Web Design Background"
        fill
        className="object-cover object-center absolute inset-0 -z-10"
        priority
      />

      {/* ✅ Dark Overlay */}
      <div className="absolute inset-0 bg-black/70 -z-10" />

      {/* ✅ Content */}
      <div className="relative z-10 mt-40 max-w-7xl mx-auto">
        {/* Heading */}
        <h1 className="text-4xl md:text-7xl font-medium leading-tight text-white">
          Your Website Shouldn’t Just Look Good —{" "}
          <span className="text-yellow-500">It Should Grow Your Business.</span>
        </h1>

        {/* Subheading */}
        <p className="mt-6 text-lg md:text-xl font-inter text-gray-100 max-w-5xl mx-auto leading-relaxed">
          Serving <span className="font-semibold">Khobar, Dammam, and Dhahran</span> — 
          Bixeltek designs SEO-ready, mobile-first, high-conversion websites that turn visitors into paying customers.
        </p>

        {/* ⚡ Bold Statement */}
        <p className="mt-8 text-xl md:text-2xl font-semibold text-yellow-400">
          Launch a High-Performing Website in Just 30 Days — Built to Rank, Convert, and Scale.
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <button
            onClick={toggleContactForm}
            className="px-8 py-3 rounded-full bg-gradient-to-tr from-yellow-500 via-yellow-600 to-yellow-700 hover:from-yellow-600 hover:via-yellow-700 hover:to-yellow-800 text-white font-semibold text-sm shadow-lg transition"
          >
            Get a Free Website Audit
          </button>
          <a href="mailto:zee@bixeltek.com">
            <div className="p-[1px] rounded-full bg-gradient-to-r from-yellow-400 via-yellow-600 to-yellow-800 inline-block">
              <button className="px-8 flex gap-2 py-3 bg-black rounded-full text-white font-semibold shadow-lg transition w-full h-full">
                Talk to a Web Design Expert <ChevronRight />
              </button>
            </div>
          </a>
        </div>

        {/* Trust Row */}
        <div className="mt-12 flex flex-wrap justify-center gap-10">
          {trustPoints.map((point) => (
            <div
              key={point.id}
              className="flex flex-col md:flex-row justify-center items-center gap-3 text-white"
            >
              <Image
                src={point.icon}
                alt={point.text}
                className="w-10 h-10 md:w-12 md:h-12"
                width={40}
                height={40}
              />
              <p className="text-sm md:text-base font-inter">{point.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Popup Form + Logo Carousel */}
      <ButtonContactForm isVisible={isVisible} onClose={() => setIsVisible(false)} />
      <FunnelSEOLogoTicker />
    </section>
  );
}
