"use client";

import React from "react";
import Image from "next/image";
import partnerBg from "@/assets/neom-wTmGtmGQCjQ-unsplash.jpg"; // ✅ replace with your image

export default function GooglePartnerBanner2() {
    return (
        <section className="relative flex flex-col justify-center items-center text-center py-32 px-6 overflow-hidden">
            {/* ✅ Background Image */}
            <Image
                src={partnerBg}
                alt="Google Partner Certified Agency Banner"
                fill
                priority
                className="object-cover object-center absolute inset-0 -z-10"
            />

            {/* ✅ Dark Overlay */}
            <div className="absolute inset-0 bg-black/60 -z-10" />

            {/* ✅ Content */}
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl md:text-6xl font-inter font-medium text-white leading-tight mb-6">
                    Google Partner Certified.{" "} <br />
                    <span className="text-yellow-500">Globally Trusted. Locally Focused.</span>
                </h2>

                <p className="text-gray-200 text-base md:text-xl leading-relaxed max-w-4xl mx-auto">
                    Bixeltek’s recognition as a <span className="text-green-400 font-medium">Google Partner</span> isn’t just a badge —
                    it’s proof of our expertise in delivering real business outcomes.
                    Our campaigns consistently maintain top optimization scores, outperform industry benchmarks,
                    and deliver predictable growth for businesses across Saudi Arabia.
                </p>
                <ul className="text-sm flex gap-10 justify-center mt-5 transition-all duration-500">
                    <li className="mb-6"><a href="https://www.google.com/partners/agency?id=2188074075" target="_blank" className="mt-2 flex justify-start">
                        <img src="https://www.gstatic.com/partners/badge/images/2024/PartnerBadgeClickable.svg"
                            alt="Google Partner Badge"
                            className="w-auto h-24" />
                    </a></li>
                    <li>
                        <div><a target="_blank" href="https://www.goodfirms.co/company/bixeltek"> <img src="https://assets.goodfirms.co/badges/color-badge/top-digital-marketing-companies.svg" title="Top Digital Marketing Company" className="w-32 h-auto" alt="Top Digital Marketing Company on GoodFirms" /></a></div>
                    </li>

                </ul>

                {/* ✅ CTA Button */}
                <div className="mt-10">
                    <a href="#form">
                        <button className="px-7 py-3 rounded-full bg-gradient-to-tr from-green-500 via-green-800 to-black shadow-2xl shadow-black text-white font-semibold text-sm hover:bg-[#d6ae3f] transition uppercase">
                            Work With Certified Experts
                        </button>
                    </a>
                </div>
            </div>
        </section>
    );
}
