"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import image2 from '@/assets/Hosting-Hero.png'


export default function SEO_BenefitsInteractive() {
    const benefits = [
        {
            title: "Consistent, Qualified Leads",
            description:
                "Attract customers who are ready to take action and convert, ensuring a steady flow of high-quality inquiries through SEO.",
        },
        {
            title: "Reduced Dependence on Ads",
            description:
                "Build a sustainable inbound marketing channel that drives organic traffic, reducing the need for expensive paid advertising campaigns.",
        },
        {
            title: "Stronger Local Visibility",
            description:
                "Dominate Toronto's map pack and service-area searches, ensuring local customers can easily find your business when searching for services.",
        },
        {
            title: "AI SEO Readiness",
            description:
                "Optimize for AI-driven platforms like Gemini, ChatGPT, and other emerging search engines to future-proof your online visibility.",
        },
        {
            title: "Measurable ROI",
            description:
                "Transparent SEO reporting that directly connects search performance to leads, sales, and overall business growth metrics.",
        },
        {
            title: "Long-Term Advantage",
            description:
                "SEO compounds over time, making it increasingly difficult for competitors to catch up while solidifying your market position.",
        },
        {
            title: "Enhanced User Experience",
            description:
                "SEO best practices improve site speed, mobile responsiveness, and navigation, creating a smoother experience that keeps visitors engaged.",
        },
        {
            title: "Competitive Edge",
            description:
                "Outrank competitors by owning top positions on search engines, positioning your brand as the go-to choice for customers in your niche.",
        },
    ];


    const googleColors = [
        "#4285F4", // Blue
        "#EA4335", // Red
        "#FBBC05", // Yellow
        "#34A853", // Green
        "#FF6D01", // Orange
        "#AB47BC", // Purple
    ];

    const [activeIndex, setActiveIndex] = useState<number>(0); // First card open by default

    return (
        <section className="w-[100%] relative mx-auto pt-24 bg-transparent text-gray-100">
            <div className="absolute bottom-0 left-0 w-full h-24  bg-gradient-to-t from-white via-white/40 to-transparent pointer-events-none" />
            {/* Section Heading */}
            <div className="text-center max-w-4xl mx-auto mb-12">
                <h2 className="text-4xl md:text-6xl font-bold mb-4">
                    What Our Clients Gain From{" "}
                    <span className="text-blue-500">SEO With Bixeltek</span>
                </h2>
                <p className="text-gray-300 text-lg md:text-xl">
                    We go beyond rankings. Our SEO strategies deliver business outcomes that
                    impact revenue, efficiency, and long-term market positioning.
                </p>
            </div>

            {/* TOP: Expanding cards */}
            <div className="flex justify-center gap-4 h-96 overflow-x-auto md:overflow-visible mb-16">
                {benefits.map((benefit, idx) => {
                    const isActive = activeIndex === idx;
                    return (
                        <motion.div
                            key={idx}
                            layout
                            onMouseEnter={() => setActiveIndex(idx)} // Hover switches active card
                            className={`relative flex-shrink-0 cursor-pointer overflow-hidden border border-gray-200 bg-white p-4 ${isActive ? "rounded-3xl" : "rounded-full"
                                }`}
                            initial={{ width: "40px" }}
                            animate={{ width: isActive ? "400px" : "80px" }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        >
                            {/* Title with Google Color */}
                            <motion.div className="font-semibold absolute left-8 bottom-0 font-inter transition-all duration-300 ease-in-out whitespace-nowrap"
                                style={{ color: googleColors[idx % googleColors.length] }}
                                animate={{
                                    rotate: isActive ? 0 : -90, top: isActive ? 16 : "95%",
                                    x: isActive ? 0 : -10,
                                    y: isActive ? 0 : -10,
                                    fontSize: isActive ? "2rem" : "1.4rem",
                                    transformOrigin: "top left",
                                    textWrap: isActive ? "wrap" : "nowrap",
                                }} > {benefit.title}
                            </motion.div>

                            {/* Description */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: isActive ? 1 : 0 }}
                                transition={{ duration: 0.3 }}
                                className="absolute bottom-24 left-4 right-4 text-gray-700 text-lg font-poppins"
                                style={{ display: isActive ? "block" : "none" }}
                            >
                                {benefit.description}
                            </motion.div>

                            {/* Button */}
                            {isActive && (
                                <div className="absolute bottom-4 left-4">
                                    <button className="px-8 py-4 rounded-2xl bg-blue-600 text-white font-semibold text-sm shadow-lg hover:bg-blue-700 transition">
                                        Book a Free Strategy Call
                                    </button>
                                </div>
                            )}
                        </motion.div>
                    );
                })}
            </div>

            {/* BOTTOM: Image */}
            <div className="flex justify-center">
                <Image
                    src={image2}
                    alt="SEO Growth"
                    className="max-w-full w-[90%] rounded-3xl"
                />
            </div>
        </section>
    );
}
