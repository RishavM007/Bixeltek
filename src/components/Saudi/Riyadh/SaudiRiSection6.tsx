"use client";

import React from "react";
import Link from "next/link";
import { HiLocationMarker } from "react-icons/hi";

export default function CoverageMapRiyadh() {
  return (
    <section className="bg-[#fffdf5] text-gray-900 py-16">
      <div className="max-w-[85%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        {/* LEFT: Content */}
        <div>
          <h2 className="text-3xl md:text-5xl font-inter font-semibold text-black mb-6 leading-tight">
            Proudly Serving Businesses Across <span className="text-yellow-500">Riyadh and Beyond</span> 
          </h2>

          <p className="text-gray-900 mb-6 max-w-2xl font-poppins leading-relaxed">
            Bixeltek partners with organizations across major districts, commercial hubs, and expanding
            business zones, including:
          </p>

          <ul className="space-y-4 mb-6">
            <li className="flex items-start gap-3">
              <HiLocationMarker className="text-yellow-500 mt-1" size={22} />
              <div className="flex gap-3 items-center">
                <strong className="text-black">Al Olaya</strong>
                <div className="text-gray-900 text-base">Corporate and financial center of Riyadh.</div>
              </div>
            </li>

            <li className="flex items-start gap-3">
              <HiLocationMarker className="text-yellow-500 mt-1" size={22} />
              <div className="flex gap-3 items-center">
                <strong className="text-black">Diriyah</strong>
                <div className="text-gray-900 text-base">The historic capital reimagined for global enterprise.</div>
              </div>
            </li>

            <li className="flex items-start gap-3">
              <HiLocationMarker className="text-yellow-500 mt-1" size={22} />
              <div className="flex gap-3 items-center">
                <strong className="text-black">Al Yasmin & Qurtubah</strong>
                <div className="text-gray-900 text-base">Fast-growing residential and retail communities.</div>
              </div>
            </li>

            <li className="flex items-start gap-3">
              <HiLocationMarker className="text-yellow-500 mt-1" size={22} />
              <div className="flex gap-3 items-center">
                <strong className="text-black">Al Sulimaniyah & Al Nakheel</strong>
                <div className="text-gray-900 text-base">Modern districts driving lifestyle and healthcare innovation.</div>
              </div>
            </li>

            <li className="flex items-start gap-3">
              <HiLocationMarker className="text-yellow-500 mt-1" size={22} />
              <div className="flex gap-3 items-center">
                <strong className="text-black">Al Malaz & Al Murabba</strong>
                <div className="text-gray-900 text-base">Emerging service-based and tech hubs.</div>
              </div>
            </li>
          </ul>

          <p className="text-gray-900 leading-relaxed max-w-xl">
            Each campaign is customized to its local audience — from Arabic-language ad copy to precise geo-targeting.
          </p>
        </div>

        {/* RIGHT: Map iframe */}
        <div className="w-full">
          <div className="relative rounded-2xl shadow-2xl overflow-hidden border ">
            {/* Responsive iframe container keeps aspect ratio */}
            <div className="w-full aspect-[16/10]">
              {/* OpenStreetMap embed centered on Riyadh (lat ~24.71, lon ~46.67). BBOX around Riyadh used. */}
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d927767.3399049372!2d46.163081231815035!3d24.723750059422045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f03890d489399%3A0xba974d1c98e79fd5!2sRiyadh%20Saudi%20Arabia!5e0!3m2!1sen!2sin!4v1760370110918!5m2!1sen!2sin" width="600" height="450"   loading="lazy" className="h-full w-full rounded-3xl"></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
