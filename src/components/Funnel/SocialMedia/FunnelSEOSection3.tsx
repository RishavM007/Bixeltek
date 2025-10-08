"use client";

import Image from "next/image";
import aiIcon from "@/assets/icon18-HUR6XWP.png";
import techIcon from "@/assets/icon16-HUR6XWP.png";
import expIcon from "@/assets/icon23-HUR6XWP.png";
import authorityIcon from "@/assets/icon20-HUR6XWP.png";

const features = [
    {
        icon: aiIcon,
        title: "AI SEO + Semantic SEO Expertise",
        desc: "We leverage advanced AI models and semantic analysis to optimize for meaning, not just keywords — ensuring long-term search relevance.",
    },
    {
        icon: techIcon,
        title: "Technical + On-Page + Off-Page Integration",
        desc: "From site structure and content optimization to authority link building, we ensure every SEO layer works together seamlessly.",
    },
    {
        icon: expIcon,
        title: "Experience Across 200+ Websites",
        desc: "We’ve audited, built, and scaled hundreds of websites across niches, learning exactly what works in competitive industries.",
    },
    {
        icon: authorityIcon,
        title: "E-E-A-T Driven Authority Building",
        desc: "We craft content and digital PR strategies that strengthen Expertise, Experience, Authoritativeness, and Trustworthiness signals.",
    },
];

const SEOFunnelBenefitsSection = () => {
    return (
        <section className="w-[80%] mx-auto py-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                {/* Left Content */}
                <div>
                    <p className="text-indigo-600 uppercase tracking-widest font-medium text-sm mb-2">
                        Why Choose Us
                    </p>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                        We Don’t Just Rank You — We Future-Proof You.
                    </h2>
                    <p className="text-gray-600 text-lg leading-relaxed max-w-xl">
                        Our SEO strategies aren’t made for algorithms — they’re built for longevity.
                        By combining Koray Tugberk GÜBÜR’s Holistic SEO frameworks with modern AI
                        search principles, we make your business more discoverable across all platforms.
                    </p>
                    <div className="mt-10 flex flex-wrap justify-start gap-4">
                        <a href="mailto:zee@bixeltek.com">
                            <button className="px-8 py-3 rounded-full border bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-500 text-white font-medium transition">
                                Book a Strategy Call
                            </button>
                        </a>
                    </div>
                </div>

                {/* Right Cards */}
                <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6">
                    {features.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow"
                        >
                            <div className="flex items-center gap-3 mb-3">
                                <Image src={item.icon} alt={item.title} className="w-7 h-7" />
                                <h3 className="font-semibold text-lg text-gray-900">
                                    {item.title}
                                </h3>
                            </div>
                            <p className="text-gray-600 font-inter text-base leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

        </section>
    );
};

export default SEOFunnelBenefitsSection;
