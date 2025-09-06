"use client";

import React from "react";
import { motion } from "framer-motion";
import {
    HiOutlineCash,
    HiOutlineUserGroup,
    HiOutlineTrendingUp,
    HiOutlineShieldCheck,
    HiOutlineLocationMarker,
} from "react-icons/hi";
import Image from "next/image";
import shape1 from '@/assets/testi-shape1.png'


import dashboard2 from "@/assets/main-image.png";

const SEOGridSection = () => {
    const benefits = [
        {
            title: "Reduced Ad Spend",
            description: "Rely less on expensive pay-per-click campaigns.",
            icon: <HiOutlineCash className="text-blue-700 w-6 h-6" />,
        },
        {
            title: "Consistent Leads",
            description:
                "A steady pipeline of inquiries from people already searching for your services.",
            icon: <HiOutlineUserGroup className="text-blue-700 w-6 h-6" />,
        },
        {
            title: "Compounding ROI",
            description:
                "Unlike ads, SEO delivers long-term returns that grow over time.",
            icon: <HiOutlineTrendingUp className="text-blue-700 w-6 h-6" />,
        },
        {
            title: "Better Local Visibility",
            description:
                "Capture the “near me” searches that bring in ready-to-buy customers.",
            icon: <HiOutlineLocationMarker className="text-blue-700 w-6 h-6" />,
        },
    ];

    return (
        <section className="w-full py-24 bg-[#f5f7fd] text-black relative overflow-hidden">
            <Image src={shape1} alt="shape1" className="absolute bottom-0 left-0" />

            <div className="max-w-full mx-auto flex flex-col lg:flex-row items-center gap-12">
                {/* Left: Vertical stacked cards */}
                <div className="flex-1 flex flex-col gap-8 pl-4 pr-4 md:pl-32 md:pr-16">
                    <h2 className="text-4xl md:text-6xl font-bold font-inter leading-snug mb-6">
                        <span className="text-blue-500">Benefits </span>of <br></br> Implementing SEO
                    </h2>
                    {benefits.map((benefit, index) => (
                        <motion.div
                            key={index}
                            className="relative bg-transparent rounded-xl p-6 flex items-start gap-4 overflow-hidden"
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

                            {/* Icon */}
                            <div className="relative z-10 bg-blue-100 p-4 rounded-full shadow-md flex items-center justify-center">
                                {benefit.icon}
                            </div>

                            {/* Text */}
                            <div className="relative z-10 flex flex-col text-left">
                                <h3 className="text-xl font-bold text-black mb-1">
                                    {benefit.title}
                                </h3>
                                <p className="text-gray-950 text-sm leading-relaxed">
                                    {benefit.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Right: Full-height fixed edge image */}
                <motion.div
                    initial={{ x: 80, opacity: 0, scale: 0.95 }}
                    whileInView={{ x: 0, opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                    viewport={{ once: true }}
                    className="relative flex-1 w-full lg:w-1/2 h-[400px] md:h-[500px] lg:h-[730px]"
                >
                    <Image
                        src={dashboard2}
                        alt="SEO Dashboard"
                        fill
                        className="object-cover object-left rounded-r-2xl"
                        priority
                    />
                </motion.div>
            </div>
        </section>
    );
};

export default SEOGridSection;
