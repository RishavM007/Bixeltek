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


const WebDesignSection = () => {
    const designPoints = [
        {
            title: "Visibility",
            description:
                "SEO-ready websites make sure you’re discovered by customers when they search online.",
            icon: <HiOutlineEye className="text-blue-700 w-6 h-6" />,
        },
        {
            title: "Trust",
            description:
                "A polished, modern design signals professionalism and credibility.",
            icon: <HiOutlineShieldCheck className="text-blue-700 w-6 h-6" />,
        },
        {
            title: "Engagement",
            description:
                "Fast, mobile-responsive sites keep visitors browsing longer.",
            icon: <HiOutlineDeviceMobile className="text-blue-700 w-6 h-6" />,
        },
        {
            title: "Conversions",
            description:
                "Clear design funnels guide users toward inquiries, bookings, or purchases.",
            icon: <HiOutlineTrendingUp className="text-blue-700 w-6 h-6" />,
        },
    ];

    return (
        <section className=" overflow-hidden relative w-full py-20 md:py-24 bg-black text-white">
            {/* Glowing blue circle */}
            {/* <div className="absolute top-10 md:top-32 -left-20 w-[500px] h-[500px] bg-blue-500 rounded-full opacity-30 blur-[190px] pointer-events-none"></div> */}
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
                    <span className="text-blue-500">How</span> Our Web Design Works For Your Brand
                </h2>

                {/* First Paragraph */}
                <p className="text-gray-300 mb-16 font-poppins leading-relaxed max-w-4xl mx-auto text-base md:text-lg">
                    Professional web design services combine creativity, strategy, and technology to deliver measurable results. At its core, web design ensures that your business is visible, trusted, and accessible. Here’s how:
                </p>

                {/* Cards */}
                <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4 mb-16">
                    {designPoints.map((point, index) => (
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
                    At <span className="font-semibold text-white">Bixeltek</span>, we design websites that do more than exist — they actively generate leads and sales for your business.
                </p>

                {/* CTA */}
                <a href={"tel:+919100032301"}>
                    <button className="px-8 py-3 rounded-2xl bg-blue-600 text-white font-semibold text-base shadow-lg hover:bg-blue-700 transition">
                        Talk to Our Web Design Experts
                    </button>
                </a>
            </div>
        </section>
    );
};

export default WebDesignSection;
