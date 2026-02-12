"use client";

import React from "react";

const steps = [
    {
        number: "01",
        title: "Technical Discovery",
        text: "We begin by auditing your platform stack, checkout flow, and compliance requirements — including PCI-DSS, RBI norms, and country-specific tax laws — to define the perfect foundation for a secure integration.",
        gradient: "from-blue-500 via-cyan-400 to-transparent",
        color: "text-yellow-500",
        bgcolor: "hover:bg-yellow-500",
    },
    {
        number: "02",
        title: "Gateway Selection",
        text: "Based on your geography, scale, and customer base, we recommend the right mix of Razorpay, Stripe, or PayTabs. Each gateway is chosen for performance, payout speed, and international compatibility.",
        gradient: "from-green-500 via-teal-400 to-transparent",
        color: "text-green-500",
        bgcolor: "hover:bg-orange-500",
    },
    {
        number: "03",
        title: "Integration & Testing",
        text: "We implement direct API connections, enable tokenized payments, and run complete sandbox simulations to ensure every checkout — from card to UPI to wallet — runs flawlessly across devices.",
        gradient: "from-yellow-400 via-yellow-300 to-transparent",
        color: "text-blue-500",
        bgcolor: "hover:bg-yellow-400",
    },
    {
        number: "04",
        title: "Compliance Validation",
        text: "Every system undergoes PCI-DSS scans, penetration tests, and webhook validation. Our setup ensures encrypted transactions, verified callbacks, and a hardened security layer before going live.",
        gradient: "from-pink-500 via-purple-400 to-transparent",
        color: "text-red-500",
        bgcolor: "hover:bg-yellow-500",
    },
    {
        number: "05",
        title: "Go Live & Analytics",
        text: "Once approved, we deploy live keys, configure GA4 or CRM integrations for real-time revenue tracking, and activate dashboards that monitor every transaction across your funnel.",
        gradient: "from-green-500 via-transparent to-transparent",
        color: "text-blue-600",
        bgcolor: "hover:bg-yellow-600",
    },
    {
        number: "06",
        title: "Support & Optimization",
        text: "Our 24×7 monitoring system handles chargebacks, payment errors, and gateway issues in real time — while continuous A/B testing and conversion audits ensure peak performance post-launch.",
        gradient: "from-purple-600 via-transparent to-transparent",
        color: "text-purple-600",
        bgcolor: "hover:bg-purple-700",
    },
];

const PaymentWorkflow = () => {
    return (
        <div className="min-h-screen relative bg-[white] py-12 px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <h3 className="text-bg text-purple-500 uppercase font-semibold text-center" > From API to ROI </h3>
            <h2 className="text-3xl md:text-6xl text-black text-center max-w-7xl mx-auto font-medium font-inter mb-6">
                How We Implement Secure <span className="text-purple-500"> Payment Systems</span>
            </h2>
            <p className="text-gray-900 max-w-3xl mx-auto mb-12 font-poppins leading-relaxed text-center">
                Every integration is designed to maximize trust, compliance, and conversions — ensuring your
                customers enjoy seamless payments while your business runs securely and efficiently.
            </p>

            {/* MOBILE VERSION */}
            <div className="space-y-10 md:hidden">
                {steps.map((item, idx) => (
                    <div
                        key={idx}
                        className={`flex group ${item.bgcolor} py-6 rounded-3xl flex-col items-start transition-all duration-300`}
                    >
                        <p className={`${item.color} group-hover:text-white text-5xl font-bold mb-2`}>
                            {item.number}
                        </p>
                        <h2 className="text-xl font-bold text-black group-hover:text-white mb-2">
                            {item.title}
                        </h2>
                        <p className="text-gray-900 group-hover:text-white">{item.text}</p>
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
                            <div
                                className={`absolute -inset-1 rounded-[20px] ${isEven ? "bg-gradient-to-r" : "bg-gradient-to-l"
                                    } ${item.gradient} z-0`}
                            ></div>

                            <div className="relative flex flex-col justify-between items-center z-10 bg-[white] rounded-[20px] p-8 h-[260px]">
                                <div
                                    className={`absolute flex items-center gap-5 flex-row border border-white/40 bg-[white] w-[85%] lg:max-w-3xl shadow-[rgba(0,0,0,0.4)_0px_2px_4px,rgba(0,0,0,0.3)_0px_7px_13px_-3px,rgba(0,0,0,0.2)_0px_-3px_0px_inset] rounded-2xl p-10 z-10 transition-all duration-300 ${positionClasses}`}
                                >
                                    <div>
                                        <p className={`${item.color} text-7xl font-bold`}>{item.number}</p>
                                    </div>
                                    <div>
                                        <h2 className="text-2xl font-bold text-black mb-4">{item.title}</h2>
                                        <p className="text-gray-900 leading-relaxed">{item.text}</p>
                                    </div>
                                </div>

                                {/* CTA Button on Last Step */}
                                {idx === steps.length - 1 && (
                                    <div className="mt-auto absolute -bottom-[20px] flex justify-center w-full">
                                        <a href={"mailto:zee@bixeltek.com"}>
                                            <button className="px-7 py-3 rounded-2xl bg-gradient-to-tr from-purple-500 via-purple-700 to-purple-950 hover:bg-gradient-to-tr hover:from-purple-950 hover:via-purple-700 hover:to-purple-500 text-white font-semibold text-sm shadow-lg transition">
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
            <p className="text-gray-900 mt-10 max-w-[90%] lg:max-w-[50%] mx-auto mb-12 font-poppins leading-relaxed text-center">
                Every payment workflow we deploy is built for speed, trust, and transparency — ensuring your
                e-commerce or SaaS brand scales globally with complete financial confidence.
            </p>
        </div>
    );
};

export default PaymentWorkflow;
