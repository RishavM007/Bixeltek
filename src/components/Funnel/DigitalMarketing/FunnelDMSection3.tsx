"use client";

import React from "react";

const steps = [
    {
        number: "01",
        title: "Audit & Blueprint",
        text: "We start with a full-funnel audit to uncover gaps, overlaps, and untapped growth opportunities. From ad data to SEO architecture, every insight is mapped into a performance blueprint designed for measurable outcomes.",
        gradient: "from-green-500 via-emerald-400 to-transparent",
        color: "text-green-500",
        bgcolor: "hover:bg-green-500",
    },
    {
        number: "02",
        title: "Ads + SEO Integration",
        text: "Your paid and organic channels should complement each other — not compete. We align ad targeting with SEO intent, capturing short-term conversions while steadily building long-term authority and visibility.",
        gradient: "from-blue-500 via-sky-400 to-transparent",
        color: "text-sky-500",
        bgcolor: "hover:bg-sky-500",
    },
    {
        number: "03",
        title: "Conversion-First Web Design",
        text: "A website shouldn’t just look good — it should convert. We design and optimize landing pages built for intent, clarity, and trust, ensuring every visitor’s journey leads to measurable results, not just impressions.",
        gradient: "from-purple-500 via-violet-400 to-transparent",
        color: "text-violet-500",
        bgcolor: "hover:bg-violet-500",
    },
    {
        number: "04",
        title: "Analytics + Attribution",
        text: "Every click, call, and form submission is tracked back to revenue. With integrated analytics and custom attribution models, you’ll see exactly what drives ROI — no guesswork, no vanity metrics.",
        gradient: "from-pink-500 via-rose-400 to-transparent",
        color: "text-pink-500",
        bgcolor: "hover:bg-pink-500",
    },
    {
        number: "05",
        title: "Continuous Optimization",
        text: "The system never stops improving. We combine AI-driven data learning with human strategy — refining campaigns, content, and design in real time to lower costs and scale performance month after month.",
        gradient: "from-yellow-500 via-transparent to-transparent",
        color: "text-yellow-500",
        bgcolor: "hover:bg-yellow-500",
    },
];

const CollaborativeGrowthFramework = () => {
    return (
        <div className="min-h-screen relative bg-black py-20 px-4 sm:px-6 lg:px-8">
            {/* Section Header */} <h2 className="text-3xl md:text-6xl text-white text-center max-w-6xl mx-auto font-bold font-inter mb-6 leading-tight">
                Your Ads, SEO, and Website Shouldn’t Compete —{" "} <span className="text-blue-500">They Should Collaborate.</span> </h2> <p className="text-gray-300 max-w-3xl mx-auto mb-12 font-poppins leading-relaxed text-center">
                We don’t run campaigns in silos. We build connected growth systems where every
                touchpoint — from a Google ad click to a website visit — is tracked, analyzed,
                and improved in real time. Every element works together to amplify results. </p>

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
                            {/* Gradient border */}
                            <div
                                className={`absolute -inset-1 rounded-[20px] ${isEven ? "bg-gradient-to-r" : "bg-gradient-to-l"
                                    } ${item.gradient} z-0`}
                            ></div>

                            <div className="relative flex flex-col justify-between items-center z-10 bg-black rounded-[20px] p-8 h-[260px]">
                                {/* Floating content box */}
                                <div
                                    className={`absolute flex items-center gap-5 flex-row border border-white/40 bg-black max-w-3xl rounded-2xl p-10 z-10 ${positionClasses}`}
                                >
                                    <div>
                                        <p className={`${item.color} text-7xl font-bold`}>{item.number}</p>
                                    </div>
                                    <div>
                                        <h2 className="text-2xl font-bold text-white mb-4">{item.title}</h2>
                                        <p className="text-gray-300">{item.text}</p>
                                    </div>
                                </div>

                                {idx === steps.length - 1 && (
                                    <div className="mt-auto absolute -bottom-[20px] flex justify-center w-full">
                                        <a href="mailto:zee@bixeltek.com">
                                        <button className="px-7 py-3 rounded-2xl bg-blue-600 text-white font-semibold text-sm shadow-lg hover:bg-blue-700 transition">
                                            See How It Works
                                        </button>
                                        </a>
                                    </div>
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>

            <p className="text-gray-300 mt-16 max-w-[90%] md:max-w-[60%] mx-auto font-poppins leading-relaxed text-center">
                This isn’t “marketing management.” It’s <span className="text-white font-semibold">growth architecture</span> — a connected ecosystem
                built for consistency, clarity, and compounding performance, not chaos.
            </p>
        </div>

);
};

export default CollaborativeGrowthFramework;
