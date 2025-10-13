"use client";

import React from "react";
import { ButtonContactForm } from "@/sections/ButtonContactForm";
import { FaGoogle, FaGlobe, FaChartLine, FaUserTie, FaHandshake } from "react-icons/fa";
import { useState } from "react";

export default function SaudiEPWhyChooseBixeltek() {
    const features = [
        {
            icon: <FaGoogle className="text-yellow-600 text-3xl" />,
            title: "Google Partner Certified Agency",
            desc: "Performance-verified by Google — ensuring your campaigns meet global quality and ROI standards.",
        },
        {
            icon: <FaGlobe className="text-yellow-600 text-3xl" />,
            title: "Global Experience, Local Adaptation",
            desc: "We combine international expertise with deep knowledge of Saudi markets for locally resonant campaigns.",
        },
        {
            icon: <FaChartLine className="text-yellow-600 text-3xl" />,
            title: "Full Transparency",
            desc: "Real-time dashboards and budget tracking — you see every click, lead, and ROI metric clearly.",
        },
        {
            icon: <FaUserTie className="text-yellow-600 text-3xl" />,
            title: "Dedicated Account Managers",
            desc: "Our bilingual managers (Arabic & English) ensure smooth communication and aligned strategy execution.",
        },
        {
            icon: <FaHandshake className="text-yellow-600 text-3xl" />,
            title: "Long-Term Partnership Focus",
            desc: "We go beyond short-term wins — building predictable growth systems that scale month after month.",
        },
    ];
      const [isVisible, setIsVisible] = useState(false);
    
      const toggleContactForm = () => {
        setIsVisible((prev) => !prev);
        console.log(!isVisible ? "Contact form visible" : "Contact form hidden");
      };

    return (
        <section className="bg-black py-20 px-6 md:px-20 text-center">
            {/* Small Label */}
            <p className="text-gray-100 uppercase tracking-wide font-medium mb-4">
                Why Businesses Choose Bixeltek
            </p>

            {/* Heading */}
            <h2 className="text-3xl md:text-5xl font-medium font-inter text-gray-100 mb-6 leading-snug">
                Because Real Growth Comes From{" "}
                <span className="text-yellow-600">Systems</span> — Not Guesswork.
            </h2>

            {/* Copy */}
            <p className="text-gray-100 max-w-3xl mx-auto mb-16 leading-relaxed">
                We’ve helped 200+ businesses across the globe — including many in Saudi Arabia — generate
                sustainable growth through clarity, analytics, and high-performance marketing systems.
                <br />
                Here’s why companies in the Eastern Province partner with us:
            </p>

            {/* Feature Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {features.map((item, idx) => (
                    <div
                        key={idx}
                        className={`border-2 bg-gradient-to-br from-gray-900 via-neutral-950 to-black border-gray-700 rounded-2xl p-8 text-left transition-all duration-300
        ${idx === features.length ? "bg-yellow-600 text-white hover:shadow-xl" : "hover:shadow-lg"}`}
                    >
                        <div className="mb-4">
                            {idx === features.length ? <FaHandshake className="text-white text-3xl" /> : item.icon}
                        </div>
                        <h3 className="text-lg text-white font-semibold mb-2">
                            {idx === features.length ? "Ready to Grow?" : item.title}
                        </h3>
                        <p className="text-gray-300 text-sm leading-relaxed">
                            {idx === features.length
                                ? "Book your free audit today and discover how your business can scale predictably with Bixeltek."
                                : item.desc}
                        </p>
                        {idx === features.length && (
                            <button className="mt-4 px-6 py-3 bg-white text-blue-600 font-medium rounded-full hover:bg-gray-100 transition">
                                Get My Free Audit
                            </button>
                        )}
                    </div>
                ))}

                {/* 6th CTA card */}
                <div className="bg-yellow-600 group hover:bg-white text-white rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300">
                    <h3 className="text-xl font-bold group-hover:text-yellow-600 mb-2">Ready to Grow?</h3>
                    <p className="text-sm group-hover:text-yellow-700 mb-4">
                        Book your free audit today and discover how your business can scale predictably with Bixeltek.
                    </p>
                    <button className="px-6 py-3 bg-white text-yellow-600 font-medium rounded-full hover:bg-green-600 hover:text-white transition" onClick={toggleContactForm}>
                        Get My Free Audit
                    </button>
                </div>
            </div>
             <ButtonContactForm isVisible={isVisible} onClose={() => setIsVisible(false)} />

        </section>
    );
}
