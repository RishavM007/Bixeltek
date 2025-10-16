"use client";

import React from "react";
import Image from "next/image";
import image1 from "@/assets/mobile img 2.png";
import image2 from "@/assets/mobile-app-phone1.webp";
import image3 from "@/assets/mobile-app-phone2.webp";

export default function SocialMediaSystemCTA() {
  return (
    <section className="py-20 bg-white text-black flex flex-col items-center">
      {/* MAIN CONTAINER */}
      <div
        className="relative w-[90%] md:w-[85%] mx-auto rounded-3xl overflow-hidden bg-cover bg-center text-center bg-neutral-200"
        style={{
          backgroundImage: "url('/mobile-app-bg2.webp')",
        }}
      >
        {/* BG OVERLAY (optional) */}
        <div className="absolute inset-0 bg-white/70"></div>

        {/* TEXT */}
        <div className="relative z-10 py-24 px-6 md:px-12 flex flex-col items-center justify-center">
          <h2 className="text-4xl md:text-6xl font-medium text-black leading-tight">
            Ready to Build a{" "} <br />
            <span className="text-blue-500">
              Social Media System That Sells?
            </span>
          </h2>
          <p className="text-gray-900 text-lg md:text-xl leading-relaxed mt-6 max-w-3xl">
            Stop treating social media like a guessing game. <br />
            Partner with{" "}
            <span className="text-blue-500 font-semibold">Bixeltek</span> and
            transform your feed into a lead-generation machine.
          </p>
        </div>

        {/* IMAGE STRIP — all touching the base */}
        <div className="relative z-20 flex justify-center items-end gap-4 md:gap-8 w-full px-10 pb-0 mt-10">
          <div className="w-1/3 md:w-[30%] flex justify-center">
            <Image
              src={image2}
              alt="social strategy"
              className="object-contain md:object-cover w-full h-auto translate-y-5 md:translate-y-10"
            />
          </div>

          <div className="w-1/3 md:w-[30%] flex justify-center">
            <Image
              src={image1}
              alt="creative content"
              className="object-contain md:object-cover w-full h-auto scale-110 translate-y-2 md:translate-y-6 drop-shadow-2xl"
            />
          </div>

          <div className="w-1/3 md:w-[30%] flex justify-center">
            <Image
              src={image3}
              alt="analytics dashboard"
              className="object-contain md:object-cover w-full h-auto translate-y-5 md:translate-y-10"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
