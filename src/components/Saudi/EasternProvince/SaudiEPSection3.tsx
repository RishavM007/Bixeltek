'use client';
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import systemImg from '@/assets/laptop-office-wooden-table-workplace-technology-concept.jpg'; // ✅ replace with your preferred image

export default function MarketingSystemsEasternProvince() {
    return (
        <section className="relative py-10 md:py-20 bg-black">
            <div className="flex flex-col md:flex-row-reverse items-center">

                {/* ✅ Right Image Container */}
                <div className="relative w-full md:w-2/5 h-[800px] rounded-l-[40px] bg-transparent md:bg-blue-600 flex justify-start items-center">
                    <div className="w-full h-full py-16 pl-6 md:pl-12 flex justify-start relative">
                        <div className="absolute md:-left-40 w-[90%] md:w-[90%]">
                            <Image
                                src={systemImg}
                                alt="Marketing systems visualization"
                                className="rounded-[30px] md:h-[700px] w-[600px] shadow-2xl object-cover z-10"
                            />
                        </div>
                    </div>
                </div>

                {/* ✅ Left Text Content */}
                <div className="px-6 w-full mt-[-160px] md:mt-0 md:w-3/5 md:pl-28 md:pr-44 py-16">
                    
                    {/* Heading */}
                    <h2 className="text-3xl md:text-6xl font-inter text-white font-bold mb-4 leading-snug">
                        If You’re Still Marketing Like It’s 2015,{" "}
                        <span className="text-blue-600">You’re Losing Customers in 2025.</span>
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
                    <Link href={"#form"}>
                        <button className="px-7 py-3 rounded-2xl bg-blue-600 text-white font-semibold text-sm shadow-lg hover:bg-blue-700 transition">
                            Build My Marketing System
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    );
}
