"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import websiteImg from "@/assets/Desk-iMac-Mockup-1-1024x732.jpg"; // ✅ replace with your relevant image

export default function WebsiteTrustSection() {
  return (
    <section className="relative py-10 md:py-16 bg-black overflow-hidden">
      <div className="flex max-w-[95%] md:max-w-[85%] mx-auto gap-10 flex-col md:flex-row items-center">

        {/* ✅ Left Image */}
        <div className="relative w-full md:w-1/2 flex justify-center items-center">
          <Image
            src={websiteImg}
            alt="Website trust and conversion"
            className="rounded-[0px] shadow-2xl object-cover z-10"
          />
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent z-20 pointer-events-none" />
        </div>

        {/* ✅ Right Content */}
        <div className="px-6 w-full md:w-1/2 py-10">
          {/* Heading */}
          <h2 className="text-3xl md:text-5xl font-inter text-white font-medium mb-6 leading-snug">
            <span className="text-yellow-500">
               Because in 2025,{" "}
            </span>
             Your Website Is the Deciding Factor Between Trust and Exit.
          </h2>

          {/* Copy */}
          <p className="text-gray-300 mb-6 font-poppins leading-relaxed max-w-2xl">
            In Saudi Arabia’s Eastern Province, potential customers are constantly judging your brand before
            you even speak to them — and 90% of those first impressions are formed by your website.
          </p>
          <p className="text-gray-300 mb-6 font-poppins leading-relaxed max-w-2xl">
            Your site isn’t just a digital brochure — it’s your first salesperson, your credibility, and your
            conversion engine. If your website is slow, confusing, or poorly structured, you’re losing qualified leads every
            single day. At Bixeltek, we help you stop that loss. We design strategic websites that engage users, answer
            their intent, and drive measurable actions — whether that’s a booking, call, or purchase.
          </p>

          {/* CTA Button */}
          <Link href={"#form"}>
            <button className="px-7 py-3 rounded-full bg-gradient-to-tr from-green-500 via-green-800 to-green-950 hover:bg-gradient-to-tr hover:from-green-900 hover:via-green-800 hover:to-green-500 text-white font-semibold text-sm shadow-lg transition">
              Get a Free Website Audit
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
