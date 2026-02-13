"use client";

import React from "react";
import Image from "next/image";
import websiteAssetImg from "@/assets/laptop dentist 2.png"; // 🖼️ replace with your image

const WebsiteValueSection = () => {
  return (
    <section className="px-6 lg:w-[85%] mx-auto pb-14 flex flex-col lg:flex-row items-center justify-between gap-12 md:gap-20">
      {/* LEFT — IMAGE */}
      <div className="relative w-full lg:w-1/2 h-[320px] md:h-[450px] rounded-2xl overflow-hidden ">
        <Image
          src={websiteAssetImg}
          alt="Website design and optimization concept"
          fill
          className="object-cover object-center"
          priority
        />
      </div>

      {/* RIGHT — CONTENT */}
      <div className="w-full lg:w-1/2 text-left flex flex-col justify-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-6xl font-semibold text-gray-900 leading-tight mb-6">
          Your Website Is Your Most{" "}
          <span className="text-purple-600">Valuable Digital Asset.</span>
        </h2>

        {/* Paragraphs */}
        <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6">
          In Bangalore’s fast-moving business environment, a website is more than
          an online presence — it’s your first impression and your most powerful
          marketing engine.
        </p>

        <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6">
          Customers decide whether to trust your brand in under five seconds. A slow,
          cluttered, or poorly designed site silently costs you leads every single day.
        </p>

        <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6">
          Bixeltek designs websites that merge creativity with conversion-focused
          architecture. Every layout, image, and line of code serves one goal —
          to increase engagement and deliver measurable results.
        </p>

        <p className="text-gray-700 text-base md:text-lg leading-relaxed">
          Whether you’re a startup in HSR Layout, a clinic in Indiranagar, or a
          real estate firm in Whitefield — we build digital experiences that make
          visitors stay, explore, and take action.
        </p>
      </div>
    </section>
  );
};

export default WebsiteValueSection;
