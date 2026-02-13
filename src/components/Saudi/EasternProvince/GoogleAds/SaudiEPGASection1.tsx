'use client';
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import heroImg from '@/assets/desert-x-alula-saudi-arabia-female-artists-DXA-Lita-Albuquerque-12-Lance-Gerber.jpg'; // replace with your image path

export default function GoogleAdsAwarenessSection() {
    return (
        <section className="relative px-6 py-16 md:py-20 bg-[#fffdf5]">
            <div className="flex lg:max-w-[85%] mx-auto gap-10 flex-col lg:flex-row items-center">

                {/* ✅ Left Image Container */}
                <div className="relative w-full lg:w-1/2 rounded-r-[40px] flex justify-center items-center">
                    <Image
                        src={heroImg}
                        alt="Google search illustration"
                        className="rounded-[0px] shadow-2xl object-cover z-10"
                    />
                </div>

                {/* ✅ Right Content */}
                <div className=" w-full lg:mt-0 lg:w-1/2 ">
                    
                    {/* Heading */}
                    <h2 className="text-3xl md:text-6xl font-inter text-black font-medium mb-4 leading-snug">
                        Your Customers Are Searching — 
                        <span className="text-yellow-600"> You Just Need to Be There When They Do.</span>
                    </h2>

                    {/* Copy */}
                    <p className="text-gray-900 mb-4 font-poppins leading-relaxed max-w-2xl">
                        In Khobar, Dammam, and across the Eastern Province, customers search Google before they make almost any business decision — from hiring a service to choosing a clinic or supplier.
                    </p>

                    <p className="text-gray-900 mb-4 font-poppins leading-relaxed max-w-2xl">
                        But here’s the challenge: many businesses run Google Ads campaigns without understanding intent, quality score, or landing page experience. The result?
                    </p>

                    <ul className="list-disc list-inside text-gray-900 mb-6 space-y-2 max-w-2xl">
                        <li>High costs.</li>
                        <li>Low conversions.</li>
                        <li>Missed opportunities.</li>
                    </ul>

                    <p className="text-gray-950 mb-8 font-poppins leading-relaxed max-w-2xl">
                        That’s where Bixeltek steps in. We help you appear at the top when it matters — on the right keywords, in the right locations, at the right time — with campaigns built to convert, not just display.
                    </p>

                    {/* CTA Button */}
                    <Link href="#form">
                        <button className="px-7 py-3 rounded-full bg-gradient-to-tr from-green-500 via-green-700 to-green-950 hover:bg-gradient-to-tr hover:from-green-950 hover:via-green-700 hover:to-green-500 text-white font-semibold text-sm shadow-lg hover:bg-[#d6ae3f] transition">
                            Get a Free Marketing Audit
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    );
}
