import React from "react";
import { FaSpotify, FaCogs, FaFileAlt, FaUsers } from "react-icons/fa";

type PillarColor = "green" | "blue" | "pink" | "yellow";

interface Pillar {
    title: string;
    subtitle: string;
    desc: string[];
    color: PillarColor;
    icon: React.ReactNode;
}


const pillars: Pillar[] = [
    {
        title: "SEO Audit",
        subtitle: "Site Analysis",
        desc: [
            "Analyze your website performance,",
            "identify technical issues,",
            "and optimize for better rankings."
        ],
        color: "green",
        icon: <FaCogs size={32} />, // Using a cog/gear to represent optimization
    },

    {
        title: "Technical SEO",
        subtitle: "Site Optimization",
        desc: [
            "Boost speed, schema,",
            "and internal linking",
            "for better crawl efficiency.",
        ],
        color: "blue",
        icon: <FaCogs size={32} />,
    },
    {
        title: "Content Arch",
        subtitle: "SEO Pages",
        desc: [
            "Arabic + English landing pages,",
            "service pages, and blogs",
            "optimized for local & AI SERPs.",
        ],
        color: "pink",
        icon: <FaFileAlt size={32} />,
    },
    {
        title: "Authority Building",
        subtitle: "Brand Trust",
        desc: [
            "E-E-A-T strategies: brand mentions,",
            "PR citations, and internal author schema.",
        ],
        color: "yellow",
        icon: <FaUsers size={32} />,
    },
];

const colorClasses = {
    green: {
        border: "border-green-500/20",
        hoverBorder: "hover:border-green-500/40",
        shadowHover: "hover:shadow-green-500/40",
        bgPing: "bg-green-500/10",
        from: "from-green-500/20",
        via: "via-green-500",
        textGradient: "from-green-400 via-green-500 to-green-400",
        hoverShadow: "hover:shadow-green-500/20",
    },
    blue: {
        border: "border-blue-500/20",
        hoverBorder: "hover:border-blue-500/40",
        shadowHover: "hover:shadow-blue-500/40",
        bgPing: "bg-blue-500/10",
        from: "from-blue-500/20",
        via: "via-blue-500",
        textGradient: "from-blue-400 via-blue-500 to-blue-400",
        hoverShadow: "hover:shadow-blue-500/20",
    },
    pink: {
        border: "border-pink-500/20",
        hoverBorder: "hover:border-pink-500/40",
        shadowHover: "hover:shadow-pink-500/40",
        bgPing: "bg-pink-500/10",
        from: "from-pink-500/20",
        via: "via-pink-500",
        textGradient: "from-pink-400 via-pink-500 to-pink-400",
        hoverShadow: "hover:shadow-pink-500/20",
    },
    yellow: {
        border: "border-yellow-500/20",
        hoverBorder: "hover:border-yellow-500/40",
        shadowHover: "hover:shadow-yellow-500/40",
        bgPing: "bg-yellow-500/10",
        from: "from-yellow-500/20",
        via: "via-yellow-500",
        textGradient: "from-yellow-400 via-yellow-500 to-yellow-400",
        hoverShadow: "hover:shadow-yellow-500/20",
    },
};

export default function SeoCards() {
    return (
        <section className="py-20 px-4 md:px-20 bg-black text-white">
            <div className="text-center mb-12 max-w-[85%] mx-auto">
                <h2 className="text-3xl md:text-6xl font-bold mb-4">
                    We Build SEO Systems That Google’s AI <br /> <span className="text-yellow-500">Understands and Customers Trust.</span> 
                </h2>
                <p className="text-gray-300 max-w-5xl mx-auto text-lg">
                    We don’t guess — we map. Our SEO framework aligns your content, technical infrastructure, and brand identity into one search ecosystem.
                </p>
            </div>

            <div className="flex flex-col md:flex-row gap-8 justify-center flex-wrap">
                {pillars.map((pillar, idx) => {
                    const c = colorClasses[pillar.color];
                    return (
                        <div
                            key={idx}
                            className="group cursor-pointer transform transition-all duration-500 hover:scale-105 hover:-rotate-1"
                        >
                            <div
                                className={`text-white rounded-3xl ${c.border} bg-gradient-to-tr from-[#2c2c2c] to-[#0B0B0B] shadow-2xl duration-700 z-10 relative backdrop-blur-xl ${c.hoverBorder} overflow-hidden ${c.shadowHover} hover:shadow-3xl w-[350px]`}
                            >
                                {/* Decorative Backgrounds */}
                                <div className="absolute inset-0 z-0 overflow-hidden">
                                    <div
                                        className={`absolute inset-0 bg-gradient-to-tr ${c.bgPing} to-${pillar.color}-400/10 opacity-40 group-hover:opacity-60 transition-opacity duration-500`}
                                    />
                                    <div
                                        className={`absolute -bottom-20 -left-20 w-48 h-48 rounded-full bg-gradient-to-tr ${c.from} to-transparent blur-3xl opacity-30 group-hover:opacity-50 transform group-hover:scale-110 transition-all duration-700 animate-bounce delay-500`}
                                    />
                                    <div className={`absolute top-10 left-10 w-16 h-16 rounded-full ${c.bgPing} blur-xl animate-ping`} />
                                    <div className={`absolute bottom-16 right-16 w-12 h-12 rounded-full ${c.bgPing} blur-lg animate-ping delay-1000`} />
                                    <div
                                        className={`absolute inset-0 bg-gradient-to-r from-transparent ${c.via}/5 to-transparent transform -skew-x-12 translate-x-full group-hover:translate-x-[-200%] transition-transform duration-1000`}
                                    />
                                </div>

                                {/* Content */}
                                <div className="p-8 relative z-10 text-center flex flex-col items-center">
                                    <div className="relative mb-6">
                                        <div className={`absolute inset-0 rounded-full border-2 ${c.border} animate-ping`} />
                                        <div className={`absolute inset-0 rounded-full border ${c.border} animate-pulse delay-500`} />
                                        <div className={`p-6 rounded-full backdrop-blur-lg border ${c.border} bg-gradient-to-br from-black/80 to-gray-900/60 shadow-2xl transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-500 ${c.hoverShadow}`}>
                                            <div className="transform group-hover:rotate-180 transition-transform duration-700">
                                                {pillar.icon}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mb-4 transform group-hover:scale-105 transition-transform duration-300">
                                        <p className={`text-3xl font-bold bg-gradient-to-r ${c.textGradient} bg-clip-text text-transparent animate-pulse whitespace-normal break-words`}>
                                            {pillar.title}
                                        </p>
                                    </div>

                                    <div className="space-y-1 max-w-sm">
                                        <p className="text-white font-semibold text-base transform group-hover:scale-105 transition-transform duration-300">
                                            {pillar.subtitle}
                                        </p>
                                        {pillar.desc.map((line, i) => (
                                            <p
                                                key={i}
                                                className="text-gray-300 text-sm leading-relaxed transform group-hover:text-gray-200 transition-colors duration-300"
                                            >
                                                {line}
                                            </p>
                                        ))}
                                    </div>

                                    <div
                                        className={`mt-6 w-1/3 h-0.5 bg-gradient-to-r from-transparent via-${pillar.color}-500 to-transparent rounded-full transform group-hover:w-1/2 group-hover:h-1 transition-all duration-500 animate-pulse`}
                                    />

                                    <div className="flex space-x-2 mt-4 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                                        <div className={`w-2 h-2 bg-${pillar.color}-500 rounded-full animate-bounce`} />
                                        <div className={`w-2 h-2 bg-${pillar.color}-500 rounded-full animate-bounce delay-100`} />
                                        <div className={`w-2 h-2 bg-${pillar.color}-500 rounded-full animate-bounce delay-200`} />
                                    </div>
                                </div>

                                {/* Corner Gradients */}
                                <div
                                    className={`absolute top-0 left-0 w-20 h-20 bg-gradient-to-br ${c.from} to-transparent rounded-br-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                                />
                                <div
                                    className={`absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl ${c.from} to-transparent rounded-tl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                                />
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
