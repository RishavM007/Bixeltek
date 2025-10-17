"use client";

import React, { useState } from "react";
import { ButtonContactForm } from "@/sections/ButtonContactForm";
import { FunnelSEOLogoTicker } from "@/components/Funnel/SocialMedia/SEOLogoTicker";
import Image from "next/image";
import heroBg from '@/assets/glenov-brankovic-flsXgoPoIuY-unsplash.jpg'
import { ChevronRight  } from "lucide-react";

// ✅ Icons
import googleIcon from "@/assets/google-authenticator-svgrepo-com.png";
import clientIcon from "@/assets/star-shine-svgrepo-com.png";
import saudiIcon from "@/assets/medal-ribbons-star-svgrepo-com.png";
import { LogoTickerSaudi } from "@/components/LogoTicker2";
import { EPLogoTickerSaudiEP } from "./SaudiLogoTickerEP";

export default function HeroGAEasternProvince() {
    const [isVisible, setIsVisible] = useState(false);

    const toggleContactForm = () => setIsVisible((prev) => !prev);

    const proofPoints = [
        { id: 1, text: "Google Partner Certified", icon: googleIcon },
        { id: 2, text: "90% Client Retention", icon: clientIcon },
        { id: 3, text: "Proven ROI Systems", icon: saudiIcon },
    ];

    return (
        <>
        <section className="relative flex flex-col items-center justify-center h-[130vh] md:h-[100vh] text-center px-6 overflow-hidden">
            {/* ✅ YouTube Video Background */}
            {/* <iframe
                className="absolute inset-0 w-full h-full object-cover -z-20"
                src="https://www.youtube.com/embed/E7fdZQGZm2Q?autoplay=1&mute=1&loop=1&playlist=E7fdZQGZm2Q&controls=0&modestbranding=1&rel=0"
                title="YouTube video player"
                frameBorder="0"
                allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
                allowFullScreen
            ></iframe> */}
             <Image
                      src={heroBg}
                      alt="Eastern Province Skyline"
                      fill
                      className="object-cover object-center absolute inset-0 -z-10"
                      priority
                    />

            {/* ✅ Dark Overlay */}
            <div className="absolute inset-0 bg-black/60 -z-10" />

            {/* ✅ Content */}
            <div className="relative z-10 mt-40 max-w-7xl">
                {/* Heading */}
                <h1 className="text-4xl md:text-7xl font-medium leading-tight text-white">
                    Google Ads Management in Eastern Province{" "}
                    <span className="text-yellow-500">That Delivers More Leads, Not Just Clicks</span>
                </h1>

                {/* Subheading */}
                <p className="mt-6 text-lg md:text-lg font-inter text-gray-100 max-w-5xl mx-auto">
                    Serving Khobar, Dammam, Jubail and Riyadh in Central Province — Bixeltek helps Saudi businesses turn advertising
                    budgets into predictable growth with data-driven campaings and strategies.
                </p>

                {/* Proof Points */}
                <div className="mt-8 flex flex-wrap justify-center gap-8">
                    {proofPoints.map((point) => (
                        <div
                            key={point.id}
                            className="flex flex-col md:flex-row justify-center items-center gap-4 text-white max-w-[250px]"
                        >
                            <Image src={point.icon} alt={point.text} className="w-12 h-12 mb-3" width={40} height={40} />
                            <p className="text-sm text-center md:text-left">{point.text}</p>
                        </div>
                    ))}
                </div>

                {/* CTA Buttons */}
                <div className="mt-10 flex flex-wrap justify-center gap-4">
                    <button
                        onClick={toggleContactForm}
                        className="px-7 py-3 rounded-full bg-gradient-to-tr from-green-500 via-green-700 to-green-950 hover:bg-gradient-to-tr hover:from-green-950 hover:via-green-700 hover:to-green-500 text-white font-semibold text-sm shadow-lg hover:bg-[#d6ae3f] transition"
                    >
                        Get a Free Campaign Audit
                    </button>
                    <a href='mailto:zee@bixeltek.com'>
                        <div className="p-[1px] rounded-full bg-gradient-to-r from-green-500 via-green-700 to-green-950 inline-block">
                            <button className="px-8 flex gap-2 py-3 bg-black rounded-full text-white font-semibold shadow-lg transition w-full h-full">
                                 Talk to a Google Ads Expert <ChevronRight />
                            </button>
                        </div>
                    </a>
                </div>
            </div>

            {/* Popup Form + Logo Carousel */}
        </section>
            <ButtonContactForm isVisible={isVisible} onClose={() => setIsVisible(false)} />
            <EPLogoTickerSaudiEP />
        </>
    );
}
