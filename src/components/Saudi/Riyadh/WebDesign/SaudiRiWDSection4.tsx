'use client';

import React from "react";
import { motion } from "framer-motion";
import { FaRocket, FaBullseye, FaSearch, FaGlobe } from "react-icons/fa";

interface CardProps {
    title: string;
    description: string;
    icon: React.ReactNode;
}

const corePillars: CardProps[] = [
    {
        title: "Speed & Core Web Vitals",
        description:
            "Next.js or optimized WordPress architecture ensures sub-2.5 s load times for optimal user experience.",
        icon: <FaRocket size={24} className="text-white" />,
    },
    {
        title: "Conversion Architecture",
        description:
            "UX and copy mapped for lead capture, calls, and WhatsApp inquiries to maximize conversions.",
        icon: <FaBullseye size={24} className="text-white" />,
    },
    {
        title: "SEO & Schema Foundation",
        description:
            "Structured data and entity-based internal linking baked in to boost rankings and visibility.",
        icon: <FaSearch size={24} className="text-white" />,
    },
    {
        title: "Bilingual Language Experience",
        description:
            "Arabic + English content with full RTL compatibility for wider audience reach.",
        icon: <FaGlobe size={24} className="text-white" />,
    },
];

const GradientCards: React.FC = () => {
    return (
        <section className="py-20 max-w-[95%] md:max-w-[85%] mx-auto flex flex-col items-center">
            {/* Heading */}
            <div className="text-center mb-12 px-4 md:px-0">
                <h2 className="text-3xl md:text-6xl font-medium font-inter text-white mb-4">
                    Web Design Built for <span className="text-yellow-500">Speed,</span> <span className="text-blue-500">Search,</span>and<span className="text-green-500"> Sales.</span> 
                </h2>
                <p className="text-gray-100 text-lg max-w-3xl mx-auto">
                    Our websites aren’t just coded — they’re engineered for ROI. Every
                    build combines design psychology, SEO precision, and conversion science.
                </p>
            </div>

            {/* Cards Container */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center gap-8 w-[95%] md:w-[85%]">
                {corePillars.map((pillar, idx) => (
                    <div
                        key={idx}
                        className="relative w-auto h-auto bg-[#07182e] rounded-[20px] shadow-[0_20px_40px_rgba(0,0,0,0.3)] overflow-hidden flex flex-col p-6 justify-start items-start"
                    >
                        {/* Rotating linear gradient background */}
                        <motion.div
                            className="absolute w-[300%] h-[300%] -top-[100%] -left-[100%] 
             bg-gradient-to-r 
             from-yellow-200 
             via-yellow-300
             via-green-600
             to-green-200 
             blur-[30px] opacity-60 z-0"
                            animate={{ rotate: 360 }}
                            transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
                        />


                        {/* Inner mask */}
                        <div className="absolute inset-[4px] bg-[#07182e] rounded-[16px] z-10 shadow-[inset_0_0_20px_rgba(0,183,255,0.1)]"></div>

                        {/* Content */}
                        <div className="relative z-20 flex flex-col gap-4 w-full">
                            {/* Icon Box */}
                            <div className="w-12 h-12 bg-[#7b2ff7] rounded-lg flex items-center justify-center">
                                {pillar.icon}
                            </div>

                            {/* Title */}
                            <h3 className="text-white font-medium font-inter text-2xl">{pillar.title}</h3>

                            {/* Description */}
                            <p className="text-white text-sm">{pillar.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default GradientCards;
