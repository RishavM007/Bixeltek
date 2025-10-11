"use client";
import React from "react";
import Image from "next/image";

// ✅ Background image
import auditBg from "@/assets/saleh-kIt4FjqO-RQ-unsplash.jpg"; // change this to your actual image

export default function FreeAuditBanner() {
  return (
    <section className="relative flex flex-col justify-center items-center text-center py-32 px-6 overflow-hidden">
      {/* ✅ Background Image */}
      <Image
        src={auditBg}
        alt="Saudi Marketing Audit Banner"
        fill
        priority
        className="object-cover object-center absolute inset-0 -z-10"
      />

      {/* ✅ Overlay */}
      <div className="absolute inset-0 bg-black/40 -z-10" />

      {/* ✅ Content */}
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-inter font-medium text-white leading-tight mb-6">
          Find Out What’s Holding Your Marketing Back —{" "}
          <span className="text-yellow-500">Free Audit for Saudi Businesses</span>
        </h2>

        <p className="text-gray-200 text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
          Before you invest more in ads or SEO, let’s identify what’s working and what’s not.
          <br />
          Our free audit covers performance metrics, wasted ad spend, SEO visibility gaps, and
          an actionable 30-day improvement roadmap.
        </p>

        {/* ✅ CTA Button */}
        <div className="mt-10">
          <a href="mailto:zee@bixeltek.com">
          <button className="px-8 py-3 bg-gradient-to-tr from-green-600 via-green-700 to-green-950 text-white font-medium text-sm font-inter rounded-full shadow-lg 
                  ring-offset-2 ring-offset-transparent 
                   hover:bg-green-700 transition-all uppercase ">
  Get My Free Audit
</button>

          </a>
        </div>
      </div>
    </section>
  );
}
