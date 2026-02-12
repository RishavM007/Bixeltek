"use client";

import React from "react";
import Image from "next/image";
import { Check } from "lucide-react";
import whatYouGetImg from "@/assets/toronto-web-design-section-1.png"; // 🖼️ Replace with your actual image

const WhatYouGetSection = () => {

    const benefits = [
        "Custom website design built for your brand identity",
        "SEO and analytics integration from day one",
        "UX-optimized navigation and conversion flow",
        "Mobile-first responsive design for all devices",
        "Post-launch maintenance and update support",
        "Transparent timeline and milestone-based delivery",
    ];

    return (
        <section className="px-6 lg:w-[85%] mx-auto py-16 md:py-24 flex flex-col lg:flex-row items-center justify-between gap-12 md:gap-20">
            {/* LEFT — TEXT CONTENT */}
            <div className="w-full lg:w-1/2 text-left flex flex-col justify-center">
                {/* Heading */}
                <h2 className="text-3xl md:text-5xl font-semibold text-gray-900 leading-tight mb-6">
                    What You Get with <span className="text-purple-600">Bixeltek</span>
                </h2>

                {/* Description */}
                <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6">
                    Partnering with Bixeltek means building more than just a website —
                    you’re creating a digital asset designed for visibility, performance,
                    and conversion. From design to data, every detail is engineered for
                    measurable growth.
                </p>

                {/* Bullet Points */}
                <ul className="flex flex-col gap-4 mb-6">
                    {benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start gap-3">
                            <Check className="w-6 h-6 text-purple-600 flex-shrink-0 mt-[2px]" />
                            <span className="text-gray-700 text-base md:text-lg leading-relaxed">
                                {benefit}
                            </span>
                        </li>
                    ))}
                </ul>

                {/* Closing line */}
                <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                    Every website we deliver is{" "}
                    <span className="text-purple-600 font-medium">
                        fast, secure, and growth-ready
                    </span>{" "}
                    — built to adapt as your business evolves.
                </p>
            </div>

            {/* RIGHT — IMAGE */}
            <div className="relative w-full lg:w-1/2 h-[320px] md:h-[520px] rounded-2xl ">
                <Image
                    src={whatYouGetImg}
                    alt="Professional web design illustration"
                    fill
                    className="object-contain object-center"
                    priority
                />
            </div>
        </section>
    );
};

export default WhatYouGetSection;
