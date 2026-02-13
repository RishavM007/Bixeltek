"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import socialImg from "@/assets/Success-removebg-preview (1).png"; // ✅ replace with your relevant social media image

export default function SocialMediaTrustSection() {
  return (
    <section className="relative py-10 lg:py-16 bg-black overflow-hidden">
      <div className="flex px-6 lg:max-w-[85%] mx-auto gap-10 flex-col lg:flex-row items-center">

        {/* ✅ Left Image */}
        <div className="relative w-full lg:w-1/2 flex justify-center items-center">
          <Image
            src={socialImg}
            alt="Social Media Trust"
            className="rounded-[0px] shadow-2xl object-cover z-10"
          />
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent z-20 pointer-events-none" />
        </div>

        {/* ✅ Right Content */}
        <div className=" w-full lg:w-1/2 py-10">
          {/* Heading */}
          <h2 className="text-3xl md:text-5xl font-inter text-white font-medium mb-6 leading-snug">
            <span className="text-yellow-500">
              Because Attention Is the New Currency —
            </span>{" "}
            and Social Media Is Where It’s Spent.
          </h2>

          {/* Copy */}
          <p className="text-gray-300 mb-6 font-poppins leading-relaxed max-w-2xl">
            Every business wants visibility. But in 2025, visibility alone isn’t enough.
            People trust brands that show up consistently, communicate value, and connect emotionally.
          </p>
          <p className="text-gray-300 mb-6 font-poppins leading-relaxed max-w-2xl">
            Whether you’re a startup in Khobar or an established business in Dammam, your customers are already scrolling — the question is, are they stopping for you?
          </p>
          <p className="text-gray-300 mb-6 font-poppins leading-relaxed max-w-2xl">
            At Bixeltek, we help you turn social media from noise into opportunity — with content that builds authority, ads that generate leads, and analytics that prove ROI.
          </p>

          {/* CTA Button */}
          <Link href={"#form"}>
            <button className="px-7 py-3 rounded-full bg-gradient-to-tr from-green-500 via-green-700 to-green-950 hover:bg-gradient-to-tr hover:from-green-900 hover:via-green-700 hover:to-green-500 text-white font-semibold text-sm shadow-lg transition">
              Get a Free Social Media Audit
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
