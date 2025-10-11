'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import bgImg from '@/assets/Google Ads Dashboard.png';
import { Check } from 'lucide-react'; // ✅ replace with your actual image

export default function GoogleAdsStrategySection() {
    return (
        <section className="relative py-20 px-6 md:px-20 bg-[#fffdf5] overflow-hidden">
            <div className="flex max-w-[95%] md:max-w-[90%] mx-auto flex-col md:flex-row items-center gap-10">

                {/* ✅ Left Content */}
                <div className="w-full md:w-1/2 font-semibold text-left">
                    {/* Heading */}
                    <h2 className="text-3xl md:text-5xl font-inter font-semibold mb-6 leading-snug text-black">
                        Your Ads Aren’t the Problem.{" "}
                        <span className="text-yellow-600">Your Strategy Is.</span>
                    </h2>

                    {/* Copy */}
                    <p className="text-gray-700 mb-6 font-poppins leading-relaxed max-w-2xl">
                        Most businesses waste 40–60% of their ad spend because of poor structure, irrelevant keywords,
                        and unoptimized landing pages.
                    </p>

                    <p className="text-gray-700 mb-6 font-poppins leading-relaxed max-w-2xl">
                        Without proper campaign segmentation, match-type control, and conversion tracking, Google’s AI
                        spends where it shouldn’t — costing you clicks that never turn into customers.
                    </p>

                    <p className="text-gray-700 mb-8 font-poppins leading-relaxed max-w-2xl">
                        Our approach fixes that from the foundation:
                    </p>

                    {/* Bullet-like points */}
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-3 text-green-800 font-poppins leading-relaxed mb-10">
                        <li className="flex items-start gap-2">
                            <Check className="text-green-700 mt-1 text-sm" />
                            <span>Intent-driven keyword mapping.</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <Check className="text-green-700 mt-1 text-sm" />
                            <span>High-CTR ad copywriting.</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <Check className="text-green-700 mt-1 text-sm" />
                            <span>Local targeting for Arabic + English audiences.</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <Check className="text-green-700 mt-1 text-sm" />
                            <span>Full conversion tracking setup.</span>
                        </li>
                    </ul>


                    <p className="text-gray-700 mb-10 font-poppins leading-relaxed max-w-2xl">
                        When every element is aligned, your campaigns perform like a system — not an expense.
                    </p>

                    {/* CTA Button */}
                    <Link href="#form">
                        <button className="px-7 py-3 rounded-full bg-gradient-to-tr from-green-500 via-green-700 to-green-950 text-white font-semibold text-sm shadow-lg hover:bg-[#d6ae3f] transition">
                            Optimize My Campaigns
                        </button>
                    </Link>
                </div>

                {/* ✅ Right Image */}
                <div className="relative w-full md:w-1/2 h-[400px] md:h-[700px] flex justify-center items-center">
                    <Image
                        src={bgImg}
                        alt="Google Ads Optimization"
                        className="rounded-[0px] object-cover"
                        fill
                        priority
                    />
                </div>

            </div>
        </section>
    );
}
