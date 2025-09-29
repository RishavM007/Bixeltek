"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import image2 from '@/assets/dashboard-examples-hero.avif'

export default function DM_BenefitsMississauga() {
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

    const googleColors = [
        "#4285F4", "#EA4335", "#FBBC05", "#34A853", "#FF6D01", "#AB47BC",
    ];

    const [activeIndex, setActiveIndex] = useState<number>(0);

    return (
        <section className="w-full relative mx-auto pt-24 bg-transparent text-gray-100">
          
            {/* Section Heading */}
            <div className="text-center max-w-4xl mx-auto mb-12">
                <h2 className="text-4xl md:text-6xl font-bold mb-4">
                    The Longer You Wait, <span className="text-blue-500">the More Business You Lose</span>
                </h2>
                <p className="text-gray-300 text-lg md:text-xl">
                    Mississauga customers search online before they buy. If they don’t find you, they’ll find someone else. Digital marketing captures high-intent customers at the right moment.
                </p>
            </div>

            {/* Expanding Cards */}
            <div className="flex justify-center gap-4 h-96 overflow-x-auto md:overflow-visible mb-16">
                {benefits.map((benefit, idx) => {
                    const isActive = activeIndex === idx;
                    return (
                        <motion.div
                            key={idx}
                            layout
                            onMouseEnter={() => setActiveIndex(idx)}
                            className={`relative flex-shrink-0 cursor-pointer overflow-hidden border border-gray-200 bg-white p-4 ${isActive ? "rounded-3xl" : "rounded-full"}`}
                            initial={{ width: "40px" }}
                            animate={{ width: isActive ? "400px" : "80px" }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        >
                            {/* Title */}
                            <motion.div
                                className="font-semibold absolute left-8 bottom-0 font-inter transition-all duration-300 ease-in-out whitespace-nowrap"
                                style={{ color: googleColors[idx % googleColors.length] }}
                                animate={{
                                    rotate: isActive ? 0 : -90,
                                    top: isActive ? 16 : "95%",
                                    x: isActive ? 0 : -10,
                                    y: isActive ? 0 : -10,
                                    fontSize: isActive ? "2rem" : "1.4rem",
                                    transformOrigin: "top left",
                                    textWrap: isActive ? "wrap" : "nowrap",
                                }}
                            >
                                {benefit.title}
                            </motion.div>

                            {/* Description */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: isActive ? 1 : 0 }}
                                transition={{ duration: 0.3 }}
                                className="absolute bottom-28 left-4 right-4 text-gray-700 text-lg font-poppins"
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
            <div className="text-center mt-6 max-w-3xl mx-auto">
                <p className="text-gray-300 text-base md:text-lg font-poppins">
                    Delaying digital marketing isn’t saving money — it’s costing you revenue every single day.
                </p>
            </div>

            {/* Bottom Image */}
            {/* <div className="flex justify-center">
                <div className="relative w-[70%] h-[300px] md:h-[400px] overflow-hidden rounded-3xl">
                    <Image
                        src={image2}
                        alt="Digital Marketing Growth"
                        className="object-cover object-center w-full h-full"
                        priority
                    />
                </div>
            </div> */}

            {/* Closing Line */}
            {/* <div className="text-center mt-6 max-w-3xl mx-auto">
                <p className="text-gray-300 text-base md:text-lg font-poppins">
                    Delaying digital marketing isn’t saving money — it’s costing you revenue every single day.
                </p>
            </div> */}
        </section>
    );
}
