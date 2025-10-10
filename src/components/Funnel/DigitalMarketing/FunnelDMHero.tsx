"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ButtonContactForm } from "@/sections/ButtonContactForm";
import { LogoTicker2 } from "@/components/GoogleAdsCarousel";

// ✅ Import icons
import partnerIcon from "@/assets/google-authenticator-svgrepo-com.png";
import retentionIcon from "@/assets/award-svgrepo-com.png";
import globeIcon from "@/assets/star-shine-svgrepo-com.png";

/**
 * HeroFullSystemMarketing
 * - Typing animation cycles through phrases (type -> pause -> delete -> next)
 * - Bottom blinking cursor (underline style)
 */
const PHRASES = [
    "We Engineer It.",
    "We Measure It.",
    "We Scale It.",
    "We Own the Results.",
];

const TYPING_SPEED = 90; // ms per character while typing
const DELETING_SPEED = 45; // ms per character while deleting
const PAUSE_AFTER_COMPLETE = 1400; // pause after a phrase is fully typed (ms)

export default function HeroFullSystemMarketing() {
    const [isVisible, setIsVisible] = useState(false);

    // typing state
    const [phraseIndex, setPhraseIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    // typing effect
    useEffect(() => {
        const current = PHRASES[phraseIndex];
        let timeoutId: number;

        if (!isDeleting) {
            // typing
            if (charIndex < current.length) {
                timeoutId = window.setTimeout(() => {
                    setCharIndex((c) => c + 1);
                }, TYPING_SPEED);
            } else {
                // finished typing -> pause, then start deleting
                timeoutId = window.setTimeout(() => {
                    setIsDeleting(true);
                }, PAUSE_AFTER_COMPLETE);
            }
        } else {
            // deleting
            if (charIndex > 0) {
                timeoutId = window.setTimeout(() => {
                    setCharIndex((c) => c - 1);
                }, DELETING_SPEED);
            } else {
                // finished deleting -> move to next phrase and start typing
                setIsDeleting(false);
                setPhraseIndex((i) => (i + 1) % PHRASES.length);
            }
        }

        return () => window.clearTimeout(timeoutId);
    }, [charIndex, isDeleting, phraseIndex]);

    const displayed = PHRASES[phraseIndex].substring(0, charIndex);

    // Trust badges
    const highlights = [
        { id: 1, text: "Google Partner Certified", icon: partnerIcon },
        { id: 2, text: "90% Client Retention", icon: retentionIcon },
        { id: 3, text: "Clients in 4 Countries", icon: globeIcon },
    ];

    return (
        <section className="relative flex flex-col items-center justify-center h-[110vh] md:h-[100vh] bg-black text-center px-4 overflow-hidden">
            <div className="flex justify-center mx-auto items-center">
                <div className="relative z-10 mt-40">
                    {/* Heading */}
                    <h1 className="text-4xl md:text-7xl font-bold leading-tight text-white max-w-6xl mx-auto">
                        Tired of Agencies Promising Growth?{" "}
                        <span className="text-blue-500 relative inline-block">
                            {/* displayed typed text */}
                            <span className="inline-block">{displayed}</span>
                            <motion.span
                                aria-hidden
                                className="absolute bottom-0 right-[-3px] w-[5px] h-14 bg-blue-400"
                                animate={{ opacity: [0, 1, 0] }}
                                transition={{ duration: 1.0, repeat: Infinity }}
                            />
                        </span>
                    </h1>
                    
                    <p className="mt-6 text-lg md:text-base text-gray-300 max-w-4xl mx-auto">
                        Bixeltek’s Full-System Marketing™ combines Google Ads, SEO, Web
                        Design, and Analytics into one data-driven framework that turns
                        chaos into clarity — and marketing into measurable revenue.
                    </p>

                    {/* Trust Badges */}
                    <div className="mt-10 flex max-w-full flex-wrap justify-center gap-4">
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

                    {/* CTAs */}
                    <div className="mt-10 flex flex-wrap justify-center gap-4">
                        <button
                            onClick={() => setIsVisible((prev) => !prev)}
                            className="px-8 py-3 rounded-full bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
                        >
                            Get My Growth Forecast
                        </button>
                        <a href="#process">
                            <button className="px-8 py-3 rounded-full border border-white text-white font-medium hover:bg-white hover:text-black transition">
                                See How It Works
                            </button>
                        </a>
                    </div>
                </div>
            </div>

            {/* Popup Form + Logo Carousel */}
            <ButtonContactForm isVisible={isVisible} onClose={() => setIsVisible(false)} />
            <LogoTicker2 />
        </section>
    );
}
