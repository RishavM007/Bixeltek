"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const protections = [
    {
        title: "Policy Compliance",
        description:
            "We craft ads that meet Google’s strict policies, lowering the chances of disapprovals and wasted time. Our compliance-first approach keeps your campaigns safe and scalable.",
        image: "/account suspension.gif",
    },
    {
        title: "Suspension Recovery",
        description:
            "Got flagged or suspended? Don’t panic. Our specialists handle appeals and reinstatements to recover your account fast, minimizing downtime and revenue loss.",
        image: "/account suspension.gif",
    },
    {
        title: "Advertiser Verification",
        description:
            "Industries like healthcare, finance, and education require strict advertiser verification. We guide you step-by-step, ensuring your account passes without hiccups.",
        image: "/advertiser verification.png",
    },
    {
        title: "Click Fraud Prevention",
        description:
            "Stop competitors and bots from draining your budget. Using AI-driven fraud detection, IP blocking, and geo-exclusions, we protect every ad dollar you spend.",
        image: "/click fraud prevention.png",
    },
];

export default function ProtectAds() {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <section className="w-full bg-[#131313] text-gray-100 py-20">
            <div className="max-w-6xl mx-auto px-6 text-center">
                {/* Heading */}
                <h2 className="text-3xl md:text-6xl max-w-3xl mx-auto font-bold font-inter mb-6">
                    Protecting Your <span className="text-blue-500">Google Ads</span> Investment
                </h2>
                <p className="text-gray-300 max-w-2xl mx-auto mb-12 font-poppins leading-relaxed">
                    Too many businesses lose money because of policy violations, sudden suspensions,
                    or click fraud. We make sure that doesn’t happen to you.
                </p>

                {/* Tabs */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {protections.map((item, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveTab(index)}
                            className={`px-7 py-3 rounded-xl font-medium text-sm transition ${activeTab === index
                                    ? "bg-blue-600 text-white"
                                    : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                                }`}
                        >
                            {item.title}
                        </button>
                    ))}
                </div>

                {/* Tab Content */}
                <div className="relative min-h-[350px]">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -30 }}
                            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                            className="grid md:grid-cols-2 gap-10 items-center text-left"
                        >
                            {/* LEFT IMAGE */}
                            <div className="relative w-full h-72 md:h-96 bg-transparent rounded-2xl overflow-hidden">
                                <Image
                                    src={protections[activeTab].image}
                                    alt={protections[activeTab].title}
                                    fill
                                    className="object-contain"
                                />
                            </div>

                            {/* RIGHT TEXT */}
                            <div>
                                <h3 className="text-2xl font-semibold mb-4">
                                    {protections[activeTab].title}
                                </h3>
                                <p className="text-gray-300 leading-relaxed">
                                    {protections[activeTab].description}
                                </p>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* CTA */}
                <motion.div
                    className="mt-14"
                >
                    <Link href={'#form'}>
                        <button className="px-7 py-3 rounded-2xl bg-blue-600 text-white font-semibold text-sm shadow-lg hover:bg-blue-700 transition">
                            Secure Your Account and Maximize ROI.
                        </button>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
