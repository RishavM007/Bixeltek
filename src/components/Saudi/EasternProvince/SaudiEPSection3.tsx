'use client';
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import systemImg from '@/assets/m-k-R1gC_gJaJ14-unsplash.jpg';
import { ChevronRight } from 'lucide-react'; // ✅ replace with your preferred image

export default function MarketingSystemsEasternProvince() {
    return (
        <section className="relative py-10 md:py-20 bg-black">
            <div className="flex max-w-[95%] md:max-w-[85%] mx-auto  flex-col md:flex-row-reverse items-center">

                {/* ✅ Right Image Container */}
                <div className="relative w-full md:w-2/5 h-[800px] rounded-l-[40px] bg-transparent flex justify-center items-center">
                    <Image
                        src={systemImg}
                        alt="Marketing systems visualization"
                        className="rounded-[0px]  shadow-2xl object-cover z-10"
                    />
                </div>

                {/* ✅ Left Text Content */}
                <div className="px-6 w-full mt-[-160px] md:mt-0 md:w-3/5 md:pl-28 md:pr-44 py-16">

                    {/* Heading */}
                    <h2 className="text-3xl md:text-5xl font-inter text-white font-medium mb-4 leading-snug">
                        If You’re Still Marketing Like It’s 2015,{" "}
                        <span className="text-yellow-500">You’re Losing Customers in 2025.</span>
                    </h2>

                    {/* Paragraphs */}
                    <p className="text-gray-300 mb-6 font-poppins leading-relaxed max-w-2xl">
                        Many Saudi businesses still rely on word of mouth, old agency models, or disconnected
                        campaigns that no longer convert.
                    </p>

                    <p className="text-gray-300 mb-6 font-poppins leading-relaxed max-w-2xl">
                        You might already be running ads or posting on social media — but if you’re not tracking
                        performance, connecting platforms, or optimizing landing pages, you’re spending more and earning less.
                    </p>

                    <p className="text-gray-300 mb-6 font-poppins leading-relaxed max-w-2xl">
                        Your problem isn’t lack of marketing — it’s lack of systemization.
                    </p>

                    <p className="text-gray-300 mb-8 font-poppins leading-relaxed max-w-2xl">
                        A modern business needs visibility, credibility, and measurable ROI — all connected under
                        one marketing framework. That’s what we build for every client in the Eastern Province.
                    </p>

                    {/* CTA */}
                    <a href='tel:+919100032301'>
                        <div className="p-[1px] rounded-full bg-gradient-to-r from-green-500 via-green-700 to-green-950 inline-block">
                            <button className="px-8 flex gap-2 py-3 bg-black rounded-full text-white font-semibold shadow-lg transition w-full h-full">
                                 Build My Marketing System <ChevronRight />
                            </button>
                        </div>
                    </a>
                </div>
            </div>
        </section>
    );
}
