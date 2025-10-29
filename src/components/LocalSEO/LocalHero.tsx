"use client";
import React, { useState } from "react";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { ButtonContactForm } from "@/sections/ButtonContactForm";
import { LogoTickerSaudi } from "@/components/LogoTicker2";

// ✅ Icons
import googleIcon from "@/assets/google-authenticator-svgrepo-com.png";
import reviewIcon from "@/assets/medal-ribbons-star-svgrepo-com.png";
import bilingualIcon from "@/assets/star-shine-svgrepo-com.png";

// ✅ Background Image
import heroBg from "@/assets/local-seo-bg.jpg"; // replace with your actual local SEO bg image
import { SEOButtonContactForm } from "../SEOPopupForm";

export default function HeroLocalSEO() {
    const [isVisible, setIsVisible] = useState(false);

    const toggleContactForm = () => {
        setIsVisible((prev) => !prev);
        console.log(!isVisible ? "Contact form visible" : "Contact form hidden");
    };

    const proofPoints = [
        { id: 1, text: "Google Business Profile Experts", icon: googleIcon },
        { id: 2, text: "Review & Reputation Systems", icon: reviewIcon },
        { id: 3, text: "Bilingual Local Optimization (EN | AR)", icon: bilingualIcon },
    ];

    return (
        <>
            <section className="relative flex flex-col items-center justify-center h-[140vh] md:h-[80vh] text-center px-6 overflow-hidden">
                {/* ✅ Background Image */}

                {/* ✅ Dark Overlay */}
                <div className="absolute inset-0 bg-black/60 -z-10" />

                {/* ✅ Content */}
                <div className="flex justify-center items-center">
                    <div className="relative z-10 mt-24 max-w-7xl">
                        {/* Heading */}
                        <h1 className="text-4xl md:text-7xl font-medium leading-tight text-white">
                            Your customers aren’t just online {" "}
                            <span className="text-blue-500">they’re nearby.</span>
                        </h1>

                        {/* Subheading */}
                        <p className="mt-6 text-lg md:text-base text-gray-100 max-w-5xl mx-auto">
                            Bixeltek’s Local SEO framework ensures you appear where people act: on Google Maps,
                            “near me” searches, and mobile voice results. We build local authority systems that
                            drive calls, directions, and in-store visits — not vanity impressions.
                        </p>

                        {/* Proof Points */}
                        <div className="mt-8 flex flex-wrap justify-center gap-8">
                            {proofPoints.map((point) => (
                                <div
                                    key={point.id}
                                    className="flex flex-col md:flex-row justify-center items-center gap-4 text-white max-w-[250px]"
                                >
                                    <Image
                                        src={point.icon}
                                        alt={point.text}
                                        className="w-12 h-12 mb-3"
                                        width={40}
                                        height={40}
                                    />
                                    <p className="text-sm text-center md:text-left md:text-sm">{point.text}</p>
                                </div>
                            ))}
                        </div>

                        {/* CTA Buttons */}
                        <div className="mt-10 flex flex-wrap justify-center gap-4">
                            <button
                                onClick={toggleContactForm}
                                className="px-6 py-2 rounded-full bg-gradient-to-tr from-blue-500 via-blue-800 to-blue-950 text-white font-medium hover:bg-green-700 transition"
                            >
                                Get My Local SEO Audit
                            </button>
                            <a href="mailto:zee@bixeltek.com">
                                <div className="p-[1px] rounded-full bg-gradient-to-r from-blue-500 via-blue-700 to-blue-950 inline-block">
                                    <button className="px-8 flex gap-2 py-3 bg-black rounded-full text-white font-semibold shadow-lg transition w-full h-full">
                                        Talk to a Local SEO Specialist <ChevronRight />
                                    </button>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            {/* ✅ Popup Form + Logo Carousel */}
                <SEOButtonContactForm isVisible={isVisible} onClose={() => setIsVisible(false)} />
            <LogoTickerSaudi />
        </>
    );
}
