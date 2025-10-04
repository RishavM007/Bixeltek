"use client";

import React from "react";
import Image from "next/image";
import { Check } from "lucide-react";
import socialImg from "@/assets/3d-render-digital-communication-background.png"; // replace with your actual image

export default function SocialTrustSection() {
    const valuePoints = [
        "Meta Partner-Level Expertise",
        "Google & Analytics Certified Team",
        "End-to-End Social + Ads Integration",
        "Transparent Reporting and ROI Tracking",
        "Focused on Real Results, Not Vanity Metrics",
    ];

    return (
        <section className="bg-black max-w-[85%] mx-auto py-20 px-6 md:px-10 flex flex-col md:flex-row items-center justify-center gap-12">
            {/* Left Side - Text */}
            <div className="md:w-1/2 text-white flex flex-col gap-6">
                <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                    Vancouver’s Trusted Partner for{" "}
                    <span className="text-blue-500">High-Impact Social Media Marketing</span>
                </h2>

                <p className="text-gray-300 text-lg leading-relaxed">
                    With over <span className="text-blue-400 font-semibold">4 years</span> of experience managing campaigns for brands across Canada,
                    Bixeltek blends creativity with data-driven insights to help Vancouver businesses
                    grow their online presence, engagement, and conversions.
                </p>

                {/* Why Businesses Choose Us */}
                <div>
                    <h3 className="text-xl font-poppins font-semibold text-blue-500 mb-3">
                        Why Businesses Choose Bixeltek:
                    </h3>
                    <ul className="space-y-3 text-gray-300">
                        {valuePoints.map((point, idx) => (
                            <li key={idx} className="flex gap-2">
                                <Check className="text-blue-500 w-5 h-5 shrink-0 mt-1" />
                                {point}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Closing Line */}
                <p className="mt-4 text-gray-300 text-lg font-semibold">
                    Social media success isn’t about posting more — it’s about posting smarter, with strategy and intent.
                </p>
            </div>

            {/* Right Side - Image */}
            <div className="md:w-1/2 flex justify-center">
                <Image
                    src={socialImg}
                    alt="Social media marketing in Vancouver"
                    priority
                    className="rounded-xl shadow-lg w-full h-auto md:w-[95%] lg:w-[120%] object-contain"
                />
            </div>

        </section>
    );
}
