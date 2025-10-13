"use client";

import React from "react";

const steps = [
    {
        number: "01",
        title: "Discovery & Audit",
        text: "We analyze your current digital presence, competitors, and growth potential. This step uncovers performance gaps, hidden opportunities, and defines benchmarks for success in Riyadh’s competitive market.",
        gradient: "from-blue-500 via-blue-400 to-transparent",
        color: "text-yellow-500",
        bgcolor: "hover:bg-yellow-500",
    },
    {
        number: "02",
        title: "Strategy & Keyword Mapping",
        text: "We identify Arabic and English search opportunities that align with your business goals — building a strategic roadmap based on audience behavior, search intent, and market dynamics.",
        gradient: "from-green-500 via-teal-400 to-transparent",
        color: "text-orange-500",
        bgcolor: "hover:bg-orange-500",
    },
    {
        number: "03",
        title: "Campaign Design & Web Setup",
        text: "Our team creates high-performing ad campaigns, localized SEO clusters, and conversion-focused landing pages. Every component is engineered to attract, engage, and convert.",
        gradient: "from-yellow-400 via-yellow-300 to-transparent",
        color: "text-yellow-400",
        bgcolor: "hover:bg-yellow-400",
    },
    {
        number: "04",
        title: "Launch & Tracking",
        text: "We deploy your campaigns with precision — full GA4 integration, Tag Manager setup, and conversion event tracking ensure every click is measured and every lead accounted for.",
        gradient: "from-pink-500 via-purple-400 to-transparent",
        color: "text-yellow-500",
        bgcolor: "hover:bg-yellow-500",
    },
    {
        number: "05",
        title: "Optimization & Scale",
        text: "Continuous A/B testing, conversion rate optimization, and data-backed scaling — turning your marketing from reactive to predictable, and from clicks to consistent growth.",
        gradient: "from-green-500 via-transparent to-transparent",
        color: "text-yellow-600",
        bgcolor: "hover:bg-yellow-600",
    },
];


const RiyadhDMSteps = () => {
    return (
        <div className="min-h-screen relative bg-black py-12 px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <h2 className="text-3xl md:text-6xl text-white text-center max-w-7xl mx-auto font-medium font-inter mb-6">
                From First Click to Consistent Growth <br /> <span className="text-yellow-500">A 5-Step Proven System.</span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto mb-12 font-poppins leading-relaxed text-center">
                Every Riyadh client follows our structured roadmap that transforms their marketing from reactive to predictable.
            </p>

            {/* MOBILE VERSION */}
            <div className="space-y-10 md:hidden">
                {steps.map((item, idx) => (
                    <div
                        key={idx}
                        className={`flex group ${item.bgcolor} p-6 rounded-3xl flex-col items-start transition-all duration-300`}
                    >
                        <p className={`${item.color} group-hover:text-white text-5xl font-bold mb-2`}>
                            {item.number}
                        </p>
                        <h2 className="text-xl font-bold text-white mb-2">{item.title}</h2>
                        <p className="text-gray-300 group-hover:text-white">{item.text}</p>
                    </div>
                ))}
            </div>

            {/* DESKTOP VERSION */}
            <div className="hidden md:block max-w-7xl mx-auto mt-40 space-y-[4px]">
                {steps.map((item, idx) => {
                    const isEven = idx % 2 === 0;
                    let positionClasses = "";
                    if (idx % 4 === 0) positionClasses = "-top-20 right-10";
                    else if (idx % 4 === 1) positionClasses = "-top-20 left-1/3 -translate-x-1/4";
                    else if (idx % 4 === 2) positionClasses = "-top-20 left-10";
                    else if (idx % 4 === 3) positionClasses = "-top-20 left-1/3 -translate-x-1/4";

                    return (
                        <div key={idx} className="relative z-0">
                            {/* Gradient Border */}
                            <div
                                className={`absolute -inset-1 rounded-[20px] ${isEven ? "bg-gradient-to-r" : "bg-gradient-to-l"
                                    } ${item.gradient} z-0`}
                            ></div>

                            <div className="relative flex flex-col justify-between items-center z-10 bg-black rounded-[20px] p-8 h-[260px]">
                                {/* Floating Card */}
                                <div
                                    className={`absolute flex items-center gap-5 flex-row border border-white/40 bg-black max-w-3xl rounded-2xl p-10 z-10 transition-all duration-300 ${positionClasses}`}
                                >
                                    <div>
                                        <p className={`${item.color} text-7xl font-bold`}>{item.number}</p>
                                    </div>
                                    <div>
                                        <h2 className="text-2xl font-bold text-white mb-4">{item.title}</h2>
                                        <p className="text-gray-300 leading-relaxed">{item.text}</p>
                                    </div>
                                </div>

                                {/* CTA Button on Last Step */}
                                {idx === steps.length - 1 && (
                                    <div className="mt-auto absolute -bottom-[20px] flex justify-center w-full">
                                        <a href={"mailto:zee@bixeltek.com"}>
                                            <button className="px-7 py-3 rounded-2xl bg-gradient-to-tr from-green-500 via-green-700 to-green-950 hover:bg-gradient-to-tr hover:from-green-950 hover:via-green-700 hover:to-green-500 text-white font-semibold text-sm shadow-lg transition">
                                                Book a Free Strategy Call
                                            </button>
                                        </a>
                                    </div>
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Footer Paragraph */}
            <p className="text-gray-300 mt-10 max-w-[90%] md:max-w-[50%] mx-auto mb-12 font-poppins leading-relaxed text-center">
                This systematic approach ensures that your campaigns, SEO, and ads grow smarter over time —
                guided by insights, not guesswork.
            </p>
        </div>
    );
};

export default RiyadhDMSteps;
