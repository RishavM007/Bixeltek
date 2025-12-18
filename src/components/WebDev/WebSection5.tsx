"use client";

import React from "react";
import { motion } from "framer-motion";
import {
    HiOutlineDeviceMobile,
    HiOutlineSearch,
    HiOutlineLightningBolt,
    HiOutlineShieldCheck,
    HiOutlineCog,
    HiOutlineTrendingUp,
    HiOutlineCollection,
    HiOutlineChartBar,
} from "react-icons/hi";
import Image from "next/image";
import shape1 from "@/assets/testi-shape1.png";
import dashboard2 from "@/assets/user-interface-design-website-template.png";

const FeaturesSection = () => {
    const features = [
        {
            title: "Mobile Responsive",
            description:
                "Your website adapts perfectly to desktops, tablets, and smartphones.",
            icon: <HiOutlineDeviceMobile className="text-blue-700 w-6 h-6" />,
        },
        {
            title: "SEO-Ready",
            description:
                "Clean code, structured data, and fast speeds help you rank higher.",
            icon: <HiOutlineSearch className="text-blue-700 w-6 h-6" />,
        },
        {
            title: "Fast & Optimized",
            description: "Core Web Vitals compliance ensures top performance.",
            icon: <HiOutlineLightningBolt className="text-blue-700 w-6 h-6" />,
        },
        {
            title: "Secure",
            description:
                "HTTPS, SSL, and advanced security protocols protect you and your customers.",
            icon: <HiOutlineShieldCheck className="text-blue-700 w-6 h-6" />,
        },
        {
            title: "Integrated",
            description:
                "CRMs, payment gateways, and marketing tools work seamlessly.",
            icon: <HiOutlineCollection className="text-blue-700 w-6 h-6" />,
        },
        {
            title: "Analytics-Ready",
            description:
                "Track performance, leads, and ROI with built-in integrations.",
            icon: <HiOutlineChartBar className="text-blue-700 w-6 h-6" />,
        },
    ];

    return (
        <section className="w-full py-10 md:py-0 bg-[#f5f7fd] text-black relative overflow-hidden">
            <Image src={shape1} alt="shape1" className="absolute bottom-0 left-0" />

            <div className="max-w-full mx-auto flex flex-col-reverse lg:flex-row items-center gap-5">
                {/* Left: Text + Features Grid */}
                <div className="flex-1 flex flex-col gap-8 pl-4 pr-4 md:pl-32 md:pr-16">
                    <h2 className=" mt-10 text-center md:text-left text-4xl md:text-6xl font-bold font-inter leading-snug mb-2">
                        <span className="text-blue-500">Key Features </span>of Our Websites
                    </h2>
                    <p className="text-gray-800 text-center md:text-left text-base md:text-lg mb-4">
                        Every project we deliver includes the features businesses need to compete in 2025 and beyond.
                    </p>

                    {/* Features Grid */}
                    <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
                        {features.map((feature, index) => (
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
                                    {feature.icon}
                                </div>

                                {/* Text */}
                                <div className="relative z-10 flex flex-col text-left">
                                    <h3 className="text-xl font-bold text-black mb-1">
                                        {feature.title}
                                    </h3>
                                    <p className="text-gray-950 text-sm leading-relaxed">
                                        {feature.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Closing line */}
                    <p className="text-gray-900 mt-6 font-medium leading-relaxed">
                        With Bixeltek’s premier web design services, you don’t just get a website, you get a platform built for long-term growth and profitability.
                    </p>
                </div>

                {/* Right: Image */}
                <motion.div
                    initial={{ x: 80, opacity: 0, scale: 0.95 }}
                    whileInView={{ x: 0, opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                    viewport={{ once: true }}
                    className="relative lg:flex-1 w-full md:w-2/3 lg:w-1/2 h-[400px] md:h-[500px] lg:h-[1030px]"
                >
                    <Image
                        src={dashboard2}
                        alt="Website Features Preview"
                        fill
                        className="object-cover object-left rounded-r-2xl my-auto"
                        priority
                    />
                </motion.div>
            </div>
        </section>
    );
};

export default FeaturesSection;
