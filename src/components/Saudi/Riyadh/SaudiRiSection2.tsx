'use client';
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import chaosImg from '@/assets/Google Ads Dashboard.png'; // replace with a relevant image for this section

export default function MarketingChaosRiyadh() {
    return (
        <section className="relative py-10 md:py-16 bg-black">
            <div className="flex max-w-[85%] mx-auto gap-10 flex-col md:flex-row items-center">

                {/* Left Content */}
                <div className="px-6 w-full md:w-1/2 py-16">
                    {/* Heading */}
                    <h2 className="text-3xl md:text-5xl font-inter text-white font-medium mb-6 leading-snug">
                        If You’re Still Relying on Guesswork, 
                        <span className="text-yellow-500"> You’re Leaving Growth on the Table.</span>
                    </h2>

                    {/* Copy */}
                    <p className="text-gray-300 mb-4 font-poppins leading-relaxed max-w-2xl">
                        Many Riyadh businesses still rely on outdated marketing habits — boosting random posts, running broad ads, or trusting agencies that don’t report performance transparently. That might bring clicks, but it doesn’t build a system. Here’s what we see every day:
                    </p>

                    <ul className="list-disc text-gray-300 pl-5 space-y-2 mb-6 font-poppins">
                        <li>Campaigns run without conversion tracking or analytics.</li>
                        <li>Poor Arabic localization that misses cultural tone.</li>
                        <li>Websites that load slowly or fail to convert.</li>
                        <li>SEO strategies built on keywords, not entities.</li>
                        <li>Ad budgets wasted on irrelevant audiences.</li>
                    </ul>

                    <p className="text-gray-300 mb-6 font-poppins leading-relaxed max-w-2xl">
                        Your challenge isn’t visibility — it’s structure. Without a connected framework linking ads, SEO, and analytics, marketing becomes guesswork.Bixeltek replaces that chaos with clarity — building systems that deliver consistent, measurable ROI.
                    </p>

                    {/* CTA Button */}
                    <Link href={"#form"}>
                        <button className="px-7 py-3 rounded-full bg-gradient-to-tr from-green-500 via-green-700 to-green-950 hover:bg-gradient-to-tr hover:from-green-950 hover:via-green-700 hover:to-green-500 text-white font-semibold text-sm shadow-lg transition">
                            Get a Free Marketing Audit
                        </button>
                    </Link>
                </div>

                {/* Right Image */}
                <div className="relative w-full md:w-1/2 rounded-l-[40px] bg-transparent flex justify-center items-center">
                    <Image
                        src={chaosImg}
                        alt="Marketing chaos in Riyadh"
                        className="rounded-[0px] shadow-2xl h-[800px] object-cover z-10"
                    />
                </div>
            </div>
        </section>
    );
}
