"use client";
import React from "react";
import Image from "next/image";
import ctaBg from "@/assets/EVP_Banner.png";
import Link from "next/link";

const CodedCTASection = () => {
  return (
    <section className="relative w-[90%] md:w-[85%] my-10 md:my-20 rounded-[40px] mx-auto bg-gray-800 overflow-hidden">
      {/* 🖼️ Background Image */}
      <div className="absolute inset-0 ">
        <Image
          src={ctaBg}
          alt="CTA Background"
          fill
          className="object-cover object-right md:object-right opacity-100 rounded-[40px]"
        />
      </div>

      {/* 🌟 Content Container */}
      <div className="relative z-10 flex flex-col md:flex-row justify-between items-center h-auto lg:h-[400px] px-6 md:px-16 py-10 md:py-0 text-black">
        
        {/* ✏️ Text Block */}
        <div className="w-full md:w-[70%] lg:w-1/2 text-left bg-white/80 backdrop-blur-sm p-6 lg:p-0 rounded-2xl md:rounded-none">
          <h2 className="text-2xl md:text-4xl font-semibold mb-4">
            Let’s Build Your High-Performance Website — Together
          </h2>
          <p className="text-base md:text-xl mb-6">
            Bixeltek engineers websites that bridge marketing, design, and technology — built for longevity, speed, and measurable ROI.
          </p>
          <div className="flex flex-col md:flex-row gap-4">
            <a href='mailto:zee@bixeltek.com'>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-md transition">
              Talk to our Developer
            </button>
            </a>
            <Link href='#form'>
            <button className="bg-white text-blue-600 hover:bg-gray-100 font-semibold py-3 px-6 rounded-md transition">
              Request a Consultation
            </button>
            </Link>
          </div>
        </div>

        {/* 📱 Image Section for mobile */}
        {/* <div className="w-full md:w-1/2 mt-8 md:mt-0">
          <Image
            src={ctaBg}
            alt="CTA Banner"
            width={800}
            height={400}
            className="rounded-2xl md:rounded-none object-cover"
          />
        </div> */}
      </div>
    </section>
  );
};

export default CodedCTASection;
