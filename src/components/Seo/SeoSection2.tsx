"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
    HiOutlineEye,
    HiOutlineShieldCheck,
    HiOutlineDeviceMobile,
    HiOutlineTrendingUp,
} from "react-icons/hi";
import shape1 from '@/assets/shape-1-seo.png'
import Image from "next/image";
import shape2 from '@/assets/chaka-rounded-two.png'

const SEOSection = () => {
    const seoPoints = [
        {
            title: "Boost Visibility",
            description:
                "Your business appears at the top of Google and AI-powered results, not buried below your competitors.",
            icon: <HiOutlineEye className="text-blue-700 w-6 h-6" />,
        },
        {
            title: "Build Authority",
            description:
                "Positive signals like links, reviews, and content establish your reputation as the trusted choice.",
            icon: <HiOutlineShieldCheck className="text-blue-700 w-6 h-6" />,
        },
        {
            title: "Engage Visitors",
            description:
                "A fast, mobile-friendly site keeps customers browsing longer and encourages them to take action.",
            icon: <HiOutlineDeviceMobile className="text-blue-700 w-6 h-6" />,
        },
        {
            title: "Drive Growth",
            description:
                "Unlike ads that stop when budgets pause, SEO compounds over time, delivering leads month after month.",
            icon: <HiOutlineTrendingUp className="text-blue-700 w-6 h-6" />,
        },
    ];

    return (
        <section className=" overflow-hidden relative w-full py-24 bg-black text-white">
            {/* Glowing blue circle */}
            <div className="absolute top-32 -left-20 w-[500px] h-[500px] bg-blue-500 rounded-full opacity-30 blur-[190px] pointer-events-none"></div>
            <motion.div
                className="absolute -bottom-20 -right-24"
                animate={{ rotate: 360 }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                }}
            >
                <Image src={shape2} alt="shape1" className="brightness-[3]" />
            </motion.div>

            <div className="max-w-7xl mx-auto px-6 text-center">
                {/* Title */}
                <h2 className="text-4xl md:text-6xl font-bold font-inter leading-snug mb-6">
                    <span className="text-blue-500">How</span> SEO Works
                </h2>

                {/* First Paragraph */}
                <p className="text-gray-300 mb-16 font-poppins leading-relaxed max-w-4xl mx-auto text-base md:text-lg">
                    At its core, SEO is about connecting your business with people who are already searching
                    for what you offer. Instead of chasing customers with ads, SEO positions you in front of
                    them at the exact moment they’re ready to buy. Here’s how it works:
                </p>

                {/* Cards */}
                <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4 mb-16">
                    {seoPoints.map((point, index) => (
                        <motion.div
                            key={index}
                            className="relative bg-gray-900 rounded-xl p-8 flex flex-col items-center text-center overflow-hidden"
                            whileHover={{ scale: 1.03 }}
                        >
                            {/* Animated border */}
                            <motion.div
                                className="absolute inset-0 rounded-xl border-2 border-blue-700"
                                animate={{
                                    borderColor: [
                                        "rgba(29, 78, 216, 0.2)",
                                        "rgba(29, 78, 216, 0.6)",
                                        "rgba(29, 78, 216, 0.2)",
                                    ],
                                }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                            />

                            {/* Icon container */}
                            <div className="relative z-10 bg-blue-100 p-4 rounded-full mb-4 shadow-md">
                                {point.icon}
                            </div>

                            {/* Title */}
                            <h3 className="relative z-10 text-xl font-semibold text-white mb-2">
                                {point.title}
                            </h3>

                            {/* Description */}
                            <p className="relative text-sm z-10 text-gray-400">{point.description}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Closing Paragraph */}
                <p className="text-gray-300 mb-8 font-poppins leading-relaxed max-w-4xl mx-auto text-base md:text-lg">
                    With the right strategy, SEO turns Google searches into phone calls, inquiries, and sales —
                    helping your business grow without being dependent on paid ads. At{" "}
                    <span className="font-semibold text-white">Bixeltek</span>, we manage every step of this
                    process so you can focus on running your business while we bring the customers to you.
                </p>

                {/* CTA */}
                <Link href={"tel:+91910023201"}>
                    <button className="px-8 py-3 rounded-2xl bg-blue-600 text-white font-semibold text-base shadow-lg hover:bg-blue-700 transition">
                        Get Your Free SEO Strategy
                    </button>
                </Link>
            </div>
        </section>
    );
};

export default SEOSection;
