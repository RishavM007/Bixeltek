"use client";
import React from "react";
import Image from "next/image";
import { Check, CheckCircle } from "lucide-react";
import localSEOImg from "@/assets/Local-SEO-Dashboard-Customize.webp"; // 🖼️ Replace with your own image

export default function LocalSEOIntroSection() {
    const points = [
        { id: 1, text: "Visibility: Appear in the top 3 Google Map Pack positions." },
        { id: 2, text: "Credibility: Maintain accurate data & authentic reviews." },
        { id: 3, text: "Engagement: Encourage calls, messages, and directions through optimized CTAs." },
        { id: 4, text: "Reputation: Show consistent ratings across Google, Facebook, and industry directories." },
    ];

    return (
        <section className="lg:w-[85%] px-6 mx-auto flex flex-col lg:flex-row items-center justify-between py-20 gap-10 md:gap-5">
            {/* Left - Image */}
            <div className="relative w-full lg:w-1/2 h-[300px] md:h-[500px] rounded-2xl overflow-hidden shadow-lg">
                <Image
                    src={localSEOImg}
                    alt="Local SEO Map Optimization"
                    fill
                    className="object-cover object-center"
                    priority
                />
            </div>

            {/* Right - Content */}
            <div className="w-full lg:w-1/2 text-left flex flex-col justify-center">
                <h2 className="text-3xl md:text-6xl font-medium text-white leading-tight">
                    Where Digital Search Meets{" "}
                    <span className="text-blue-500">Real-World Action</span>
                </h2>

                <p className="mt-6 text-gray-300 text-base md:text-base leading-relaxed">
                    Local SEO is the practice of optimizing your online presence so nearby customers find and
                    trust you. It governs how your business appears on Google Maps, “near me” queries, and
                    local directories. Whether you’re a clinic in Riyadh, a store in Hyderabad, or a service
                    provider in Toronto — visibility in local SERPs drives revenue.
                </p>

                {/* Points Section */}
                <div className="mt-8">
                    <h3 className="text-xl font-semibold text-white mb-4">Core Objectives</h3>
                    <ul className="space-y-4">
                        {points.map((point) => (
                            <li key={point.id} className="flex items-start gap-3 text-gray-200">
                                <Check className="w-5 h-5 text-blue-500 mt-[2px]" />
                                <span className="text-sm md:text-base">{point.text}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                <p className="mt-8 text-gray-400 italic text-sm md:text-base">
                    Local SEO is less about keywords — more about trust, proximity, and consistency.
                </p>
            </div>
        </section>
    );
}
