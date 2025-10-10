"use client";
import React, { useState } from "react";
import Image from "next/image";
import { ButtonContactForm } from "@/sections/ButtonContactForm";
import { LogoTicker2 } from "@/components/GoogleAdsCarousel";

// ✅ Import icons (replace with your actual assets)
import partnerIcon from "@/assets/google-authenticator-svgrepo-com.png";
import campaignIcon from "@/assets/medal-ribbons-star-svgrepo-com.png";
import globeIcon from "@/assets/star-shine-svgrepo-com.png";
import retentionIcon from "@/assets/award-svgrepo-com.png";

export default function HeroGoogleAdsAudit() {
    const [isVisible, setIsVisible] = useState(false);

    const toggleContactForm = () => {
        setIsVisible((prev) => !prev);
        console.log(!isVisible ? "Contact form visible" : "Contact form not visible");
    };

    const highlights = [
        { id: 1, text: "Google Partner Certified", icon: partnerIcon },
        { id: 2, text: "200+ Campaigns Managed", icon: campaignIcon },
        { id: 3, text: "4+ Years in Global Markets", icon: globeIcon },
        { id: 4, text: "90% Client Retention", icon: retentionIcon },
    ];

    return (
        <section className="relative flex flex-col items-center justify-center h-[160vh] md:h-[100vh] bg-black text-center px-0 overflow-hidden">
            <div className="flex justify-center mx-auto items-center ">
                <div className="relative z-10 mt-40  ">

                    {/* ✅ Heading */}
                    <h1 className="text-4xl md:text-7xl font-bold leading-tight text-white max-w-7xl mx-auto">
                        You’re Spending on Google Ads —{" "}
                        <span className="text-blue-500">But Where Are the Leads?</span>
                    </h1>

                    {/* ✅ Subheading */}
                    <p className="mt-6 text-lg md:text-base text-gray-300 max-w-4xl mx-auto">
                        If your campaigns aren’t delivering calls or customers, something’s broken.
                        <br />Let our Google Partner Certified experts audit your ads, fix the leaks,
                        and show you how to get <span className="font-semibold text-blue-400">3× more results</span> —
                        without increasing your budget.
                    </p>

                    {/* ✅ Trust Badges */}
                    <div className="mt-10 flex max-w-full flex-wrap  justify-center gap-4">
                        {highlights.map((point) => (
                            <div
                                key={point.id}
                                className="flex flex-col md:flex-row justify-center items-center gap-2 text-white max-w-[260px] p-4 border border-transparent rounded-2xl transition-all duration-300"
                            >
                                <Image
                                    src={point.icon}
                                    alt={point.text}
                                    className="w-10 h-10 mb-2 md:mb-0"
                                    width={40}
                                    height={40}
                                />
                                <p className="text-sm md:text-base">{point.text}</p>
                            </div>
                        ))}
                    </div>

                    {/* ✅ CTAs */}
                    <div className="mt-10 flex flex-wrap justify-center gap-4">
                        <button
                            onClick={toggleContactForm}
                            className="px-8 py-3 rounded-full bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
                        >
                            Get My Free Audit
                        </button>
                        <a href="mailto:zee@bixeltek.com">
                            <button
                                className="px-8 py-3 rounded-full border border-white text-white font-medium hover:bg-white hover:text-black transition"
                            >
                                Book a Strategy Call
                            </button>
                        </a>
                    </div>
                </div>
            </div>

            {/* ✅ Popup Form + Logo Carousel */}
            <ButtonContactForm
                isVisible={isVisible}
                onClose={() => setIsVisible(false)}
            />
            <LogoTicker2 />
        </section>
    );
}
