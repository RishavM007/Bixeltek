"use client";
import React, { useState } from "react";
import Image from "next/image";
import { ChevronRight, Star } from "lucide-react";
import { motion } from "framer-motion";
import { ButtonContactForm } from "@/sections/ButtonContactForm";
import { LogoTickerSaudi } from "@/components/LogoTicker2";

// ✅ Icons
import googleIcon from "@/assets/google-authenticator-svgrepo-com.png";
import reviewIcon from "@/assets/medal-ribbons-star-svgrepo-com.png";
import bilingualIcon from "@/assets/star-shine-svgrepo-com.png";

// ✅ Background Image
import heroBg from "@/assets/local-seo-bg.jpg"; // replace with your actual analytics bg image
import { SEOButtonContactForm } from "../SEOPopupForm";

export default function HeroAnalytics() {
    const [isVisible, setIsVisible] = useState(false);

    const toggleContactForm = () => {
        setIsVisible((prev) => !prev);
        console.log(!isVisible ? "Contact form visible" : "Contact form hidden");
    };

    const proofPoints = [
        { id: 1, text: "Unified Analytics Ecosystem", icon: googleIcon },
        { id: 2, text: "Conversion Intelligence", icon: reviewIcon },
        { id: 3, text: "Actionable Insights", icon: bilingualIcon },
    ];

    // Marquee text array with 6-7 words per line
    const marqueeTexts = [
        "Track every user interaction across all platforms seamlessly",
        "Convert raw data into actionable business intelligence insights",
        "Optimize conversion funnels for maximum revenue generation",
        "Understand customer behavior patterns and purchasing journeys",
        "Implement advanced analytics tracking without coding required",
        "Measure ROI from every marketing channel accurately",
        "Identify drop-off points and optimize user experience",
        "Automate reporting with real-time dashboard updates",
        "Connect CRM data with web analytics seamlessly",
        "Predict customer behavior using machine learning algorithms",
        "Customize analytics solutions for your unique business",
        "Monitor key performance indicators in real-time",
        "Generate comprehensive reports with actionable recommendations",
        "Track multi-channel attribution across all touchpoints",
        "Optimize advertising spend based on data insights",
        "Improve customer retention through behavioral analysis",
        "Scale analytics infrastructure as business grows",
        "Integrate with all major marketing platforms easily"
    ];

    // Framer Motion variants for the marquee
    const marqueeVariants = {
        animate: {
            x: ["0%", "-50%"],
            transition: {
                x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 30,
                    ease: "linear",
                },
            },
        },
    };

    return (
        <>
            <section className="relative flex flex-col items-center justify-center min-h-screen text-center px-0 overflow-hidden">
                {/* ✅ Content */}
                <div className="flex justify-center items-center">
                    <div className="relative z-10 max-w-7xl">
                        {/* Heading */}
                        <h1 className="text-4xl md:text-7xl font-medium leading-tight text-black">
                            Turn Chaos into Clarity. {" "}
                            <span className="text-blue-500">Make Every Click Count</span>
                        </h1>

                        {/* Subheading */}
                        <p className="mt-6 text-lg md:text-base text-gray-900 max-w-5xl mx-auto">
                            Most websites collect data — but very few understand it. At Bixeltek, we don't just set up tracking; we engineer insight. We connect every digital touchpoint — from ads to forms to CRM — into a unified analytics ecosystem that reveals what truly drives conversions.
                        </p>

                        {/* Proof Points */}
                        <div className="mt-8 flex flex-wrap justify-center gap-8">
                            {proofPoints.map((point) => (
                                <div
                                    key={point.id}
                                    className="flex flex-col md:flex-row justify-center items-center gap-4 text-black max-w-[250px]"
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

                        {/* Industry Examples */}
                        <div className="mt-8 text-black">
                            <p className="text-sm font-semibold mb-4">TRUSTED BY BUSINESSES WORLDWIDE</p>
                            <div className="flex flex-wrap justify-center gap-4 text-sm">
                                <span className="px-4 py-2 bg-gray-100 rounded-full border border-blue-500">Dental clinics in Brampton</span>
                                <span className="px-4 py-2 bg-gray-100 rounded-full border border-red-500">Contracting firms in Riyadh</span>
                                <span className="px-4 py-2 bg-gray-100 rounded-full border border-yellow-500">E-commerce brands in Hyderabad</span>
                            </div>
                        </div>

                        {/* CTA Buttons */}
                        <div className="mt-10 flex flex-wrap justify-center gap-4">
                            <button
                                onClick={toggleContactForm}
                                className="px-6 py-2 rounded-full bg-gradient-to-tr from-blue-500 via-blue-800 to-blue-950 text-white font-medium hover:from-blue-600 hover:to-blue-900 transition-all duration-300"
                            >
                                Get a Free Conversion Audit
                            </button>
                            <a href="mailto:zee@bixeltek.com">
                                <div className="p-[1px] rounded-full bg-gradient-to-r from-blue-500 via-blue-700 to-blue-950 inline-block hover:shadow-lg transition-all duration-300">
                                    <button className="px-8 flex gap-2 py-3 bg-white rounded-full text-black font-semibold transition w-full h-full hover:bg-gray-50">
                                        See Live Dashboard Demo <ChevronRight />
                                    </button>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>

                {/* ✅ Blue Gradient Marquee with Framer Motion */}
                <div className="w-full mt-20 py-4 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 overflow-hidden">
                    <motion.div
                        className="flex whitespace-nowrap"
                        variants={marqueeVariants}
                        animate="animate"
                    >
                        {[...marqueeTexts, ...marqueeTexts].map((text, index) => (
                            <div key={index} className="flex items-center mx-4">
                                <span className="text-white font-semibold text-sm md:text-base">
                                    {text}
                                </span>
                                <Star className="w-4 h-4 text-white mx-4 fill-current" />
                            </div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* ✅ Popup Form + Logo Carousel */}
            <SEOButtonContactForm isVisible={isVisible} onClose={() => setIsVisible(false)} />
        </>
    );
}