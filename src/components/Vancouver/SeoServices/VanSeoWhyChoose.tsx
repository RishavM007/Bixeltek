// app/components/SeoSection.tsx
import React from "react";
// Replace with your actual imported icons
import { Check } from "lucide-react";
import google from '@/assets/google-partner.webp'
import meta from '@/assets/meta-business-partner.webp'
import hub from '@/assets/hubspot-certified-partner.webp'
import tiktok from '@/assets/tiktok-marketing-partners.webp'
import Image from "next/image";

export default function SeoChooseVancSection() {
    const leftItems = [
        { icon: Check, text: "Data-Driven, AI-Enhanced SEO Strategies" },
        { icon: Check, text: "Google Partner Certified Team" },
        { icon: Check, text: "Transparent Monthly Reporting" },
    ];

    const rightItems = [
        { icon: Check, text: "Topical & Entity-Based Optimization" },
        { icon: Check, text: "Integrated with Google Ads & Web Design" },
        { icon: Check, text: "Transparent Monthly Reporting (Expanded Insight)" },
    ];

    return (
        <section className="py-16 bg-white">
            <div className="max-w-[94%] mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                {/* Left Content */}
                <div className="text-center lg:text-left">
                    <h3 className="text-sm font-semibold text-blue-600 uppercase tracking-wide mb-2">
                        Why Choose Us
                    </h3>
                    <h2 className="text-3xl md:text-5xl  font-bold text-gray-900 leading-snug mb-4">
                        A Google Partner SEO Agency <br /> <span className="text-blue-500">Built for ROI</span>
                    </h2>
                    <p className="text-lg lg:max-w-xl text-gray-600 mb-4">
                        With 4+ years of SEO experience and a 90% client retention rate,{" "}
                        <span className="font-semibold text-gray-900">Bixeltek</span> has
                        become a trusted partner for businesses across Canada. We focus on
                        metrics that matter — traffic, leads, and conversions — not vanity
                        rankings.
                    </p>
                    <a href="https://www.google.com/partners/agency?id=2188074075" target="_blank" className="mt-2 flex justify-center lg:justify-start">
                        <img src="https://www.gstatic.com/partners/badge/images/2024/PartnerBadgeClickable.svg"
                            alt="Google Partner Badge"
                            className="w-auto h-20" />
                    </a>
                    <a href="mailto:zee@bixltek.com">
                        <button className="px-6 py-3 mt-5 rounded-full bg-blue-600 hover:bg-blue-800 text-gray-100 font-medium transition">
                            Get Free Proposal
                        </button>
                    </a>
                </div>

                {/* Right Content */}
                <div className="grid grid-cols-1 mt-5 md:grid-cols-2 gap-12">
                    {/* Left Side - Blue */}
                    <div>
                        <h4 className="text-xl tracking-wide font-inter font-semibold text-gray-900 mb-6">
                            Why choose us
                        </h4>
                        <ul className="space-y-6">
                            {leftItems.map((item, idx) => {
                                const Icon = item.icon;
                                return (
                                    <li
                                        key={idx}
                                        className="flex items-start space-x-4 text-gray-700"
                                    >
                                        <span className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-500 text-white shrink-0">
                                            <Icon size={20} />
                                        </span>
                                        <p className="font-inter ">{item.text}</p>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>

                    {/* Right Side - Orange */}
                    <div>
                        <h4 className="text-xl tracking-wide font-inter font-semibold text-gray-900 mb-6">
                            Benefits for you
                        </h4>
                        <ul className="space-y-6">
                            {rightItems.map((item, idx) => {
                                const Icon = item.icon;
                                return (
                                    <li
                                        key={idx}
                                        className="flex items-start space-x-4 text-gray-700"
                                    >
                                        <span className="flex items-center justify-center w-10 h-10 rounded-full bg-orange-500 text-white shrink-0">
                                            <Icon size={20} />
                                        </span>
                                        <p className="font-inter">{item.text}</p>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
            </div>

        </section>
    );
}
