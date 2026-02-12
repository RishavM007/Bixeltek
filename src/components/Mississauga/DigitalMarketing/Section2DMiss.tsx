"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import image2 from '@/assets/Hosting-Hero.png'

export default function SEO_BenefitsInteractive() {
    const benefits = [
        {
            title: "Be Seen First",
            description: "90% of customers never scroll past page one of Google. Ensuring your business appears first drives high-intent traffic and more qualified leads consistently.",
        },
        {
            title: "Spend Smarter",
            description: "SEO builds lasting visibility while paid Ads deliver immediate results. Combining both ensures cost-effective marketing that captures short-term and long-term opportunities.",
        },
        {
            title: "Win Mobile-First Buyers",
            description: "Over half of Mississauga searches happen on smartphones. Optimizing your site for mobile ensures your business is accessible and converts on every device.",
        },
        {
            title: "Earn Trust Fast",
            description: "Modern websites, strong branding, and positive reviews build credibility quickly, positioning your business as the obvious choice among local competitors in Mississauga.",
        },
        {
            title: "Measure Everything",
            description: "Track every click, call, form submission, and conversion. Detailed analytics allow you to optimize campaigns, maximize ROI, and make data-driven marketing decisions.",
        },
        {
            title: "Stay Ahead",
            description: "Competitors investing in digital marketing are already capturing your leads. Consistent online visibility keeps you competitive and ensures long-term growth in the local market.",
        },
        {
            title: "Improve Local Visibility",
            description: "Optimize your website and Google Business Profile to dominate local map searches and attract customers searching for services within Mississauga neighborhoods.",
        },
        {
            title: "Future-Proof Your Marketing",
            description: "Prepare your digital presence for AI-driven search, voice assistants, and emerging platforms to stay ahead of trends and maintain top-of-mind awareness.",
        },
    ];

    const googleColors = ["#4285F4", "#EA4335", "#FBBC05", "#34A853", "#FF6D01", "#AB47BC"];
    const [activeIndex, setActiveIndex] = useState<number>(0);

    return (
        <section className="w-full relative mx-auto pt-12 md:pt-24 bg-transparent text-gray-100">
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-t from-transparent to-transparent pointer-events-none" />

            {/* Section Heading */}
            <div className="text-center max-w-4xl mx-auto mb-12 px-4 md:px-0">
                <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4">
                    What Our Clients Gain From{" "}
                    <span className="text-blue-500">SEO With Bixeltek</span>
                </h2>
                <p className="text-gray-300 text-base sm:text-lg md:text-xl">
                    We go beyond rankings. Our SEO strategies deliver business outcomes that
                    impact revenue, efficiency, and long-term market positioning.
                </p>
            </div>

            {/* DESKTOP: Expanding horizontal cards */}
            <div className="hidden lg:flex justify-center gap-4 overflow-visible mb-16 px-4 sm:px-8">
                {benefits.map((benefit, idx) => {
                    const isActive = activeIndex === idx;
                    return (
                        <motion.div
                            key={idx}
                            layout
                            onMouseEnter={() => setActiveIndex(idx)}
                            className={`relative flex-shrink-0 cursor-pointer h-[400px] overflow-hidden border border-gray-200 bg-white p-4 ${isActive ? "rounded-3xl" : "rounded-full"}`}
                            initial={{ width: "60px" }}
                            animate={{ width: isActive ? "300px" : "60px" }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        >
                            <motion.div
                                className="font-semibold absolute left-6 bottom-0 font-inter transition-all duration-300 ease-in-out whitespace-nowrap"
                                style={{ color: googleColors[idx % googleColors.length] }}
                                animate={{
                                    rotate: isActive ? 0 : -90,
                                    top: isActive ? 16 : "95%",
                                    x: isActive ? 0 : -10,
                                    y: isActive ? 0 : -10,
                                    fontSize: isActive ? "1.5rem" : "1.2rem",
                                    transformOrigin: "top left",
                                    textWrap: isActive ? "wrap" : "nowrap",
                                }}
                            >
                                {benefit.title}
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: isActive ? 1 : 0 }}
                                transition={{ duration: 0.3 }}
                                className="absolute bottom-20 left-4 right-4 text-gray-700 text-sm sm:text-base font-poppins"
                                style={{ display: isActive ? "block" : "none" }}
                            >
                                {benefit.description}
                            </motion.div>

                            {isActive && (
                                <div className="absolute bottom-4 left-4">
                                    <a href="#form">
                                    <button className="px-4 sm:px-6 py-2 sm:py-3 rounded-2xl bg-blue-600 text-white font-semibold text-xs sm:text-sm shadow-lg hover:bg-blue-700 transition">
                                        Book A Free Strategy Call
                                    </button>
                                    </a>
                                </div>
                            )}
                        </motion.div>
                    );
                })}
            </div>

            {/* MOBILE/TABLET: Vertical stacked cards */}
            <div className="flex flex-col lg:hidden gap-6 mb-16 px-4">
                {benefits.map((benefit, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: idx * 0.1 }}
                        className="border border-gray-200 rounded-3xl bg-white p-6 shadow-md"
                    >
                        <h3
                            className="font-semibold text-lg"
                            style={{ color: googleColors[idx % googleColors.length] }}
                        >
                            {benefit.title}
                        </h3>
                        <p className="text-gray-700 text-sm mt-2">{benefit.description}</p>
                        
                    </motion.div>
                ))}
                <button className="mt-4 px-4 py-3 md:w-1/2 mx-auto rounded-2xl bg-blue-600 text-white font-semibold text-sm shadow-lg hover:bg-blue-700 transition">
                            Book A Free Strategy Call
                        </button>
            </div>

            {/* Image */}
        </section>
    );
}
