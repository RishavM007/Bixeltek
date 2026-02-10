"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

// 🖼️ Replace with your own image
import websiteImg from "@/assets/omacomputers.com_home_(hd screenshot).png";

const painPoints = [
    {
        title: "Slow Load Speeds",
        desc: "Every extra second drops conversion by 7–10%.",
    },
    {
        title: "Disjointed Integrations",
        desc: "Ads, CRM, and analytics don’t communicate.",
    },
    {
        title: "Weak Taxonomy",
        desc: "Users can’t find products; crawlers can’t understand structure.",
    },
    {
        title: "Low Mobile Conversion",
        desc: "Pages designed for desktop, not touch behavior.",
    },
    {
        title: "Cart Abandonment",
        desc: "Overcomplicated checkouts and trust gaps.",
    },
];

export default function EcomPerformanceSection() {
    return (
        <section className="bg-black text-white max-w-[90%] mx-auto md:py-20 px-6 md:px-20 flex flex-col lg:flex-row-reverse items-center gap-12">
            {/* Left - Image (flipped position) */}
            <div className="relative w-full lg:w-1/2 flex justify-center items-start overflow-hidden rounded-[0px] h-[590px]">
             <motion.div
                        className="w-full"
                        initial={{ y: 0 }}
                        whileHover={{ y: -1600 }}
                        transition={{ duration: 3.5, ease: "easeInOut" }}
                    >
                        <Image
                            src={websiteImg}
                            alt="Website trust and conversion"
                            className="w-full h-auto object-cover"
                        />
                    </motion.div>
                    <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-black to-transparent z-20 pointer-events-none" />
            </div>

            {/* Right - Content */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center items-start">
                <h2 className="text-4xl md:text-5xl font-inter font-medium mb-6 leading-tight">
                    Most Stores Don’t Fail Because of Products
                    They Fail Because of <span className="text-blue-500">Performance and Process</span>
                </h2>

                <p className="text-gray-300 font-poppins text-base md:text-lg leading-relaxed mb-6">
                    Many businesses invest in ads, influencers, and photography — but
                    still can’t sustain ROI. The problem usually isn’t traffic. It’s
                    conversion friction.
                </p>

                <p className="text-gray-300 font-poppins text-base md:text-lg leading-relaxed mb-6">
                    Common pain points we solve:
                </p>

                <ul className="flex flex-col gap-4 mb-8 text-gray-200">
                    {painPoints.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                            <Check className="text-blue-500 w-6 h-6 mt-1" />
                            <span>
                                <strong className="text-white">{item.title}:</strong>{" "}
                                {item.desc}
                            </span>
                        </li>
                    ))}
                </ul>

                <p className="text-gray-300 font-poppins text-base md:text-lg leading-relaxed">
                    Our goal is to eliminate friction from click to confirmation — and
                    then amplify data so you can scale predictably.
                </p>
            </div>
        </section>
    );
}
