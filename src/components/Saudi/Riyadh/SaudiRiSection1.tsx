'use client';
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import riyadhImg from '@/assets/A_business_traveller’s_guide_to_Riyadh_Saudi_Arabia-Riyadh_roads_and_streets_are_filled_with_ornamental_trees-MOHAMED_HUSSAIN_YOUNIS-Gettyimages-HERO.renditionimage.900.600.jpg'; // replace with your Riyadh image

export default function BusinessGrowthRiyadh() {
    return (
        <section className="relative px-6 py-10 bg-[#fffdf5]">
            <div className="flex lg:max-w-[85%] mx-auto md:gap-10 flex-col lg:flex-row items-center">

                {/* Left Image */}
                <div className="relative w-full lg:w-1/2 rounded-r-[40px] bg-transparent flex justify-center items-center">
                    <Image
                        src={riyadhImg}
                        alt="Riyadh skyline"
                        className="rounded-[0px] shadow-2xl lg:h-[500px] object-cover z-10"
                    />
                </div>

                {/* Right Content */}
                <div className="w-full mt-8 md:mt-0 lg:w-1/2 lg:py-16">
                    
                    {/* Heading */}
                    <h2 className="text-3xl md:text-6xl font-inter text-black font-medium mb-4 leading-snug">
                        Riyadh Is the Heart of Vision 2030 — 
                        <span className="text-yellow-500"> Your Marketing Should Match Its Pace.</span>
                    </h2>

                    {/* Copy */}
                    <p className="text-gray-900 mb-6 font-poppins leading-relaxed max-w-2xl">
                        As Saudi Arabia’s capital and fastest-growing business hub, Riyadh is the center of innovation, finance, and enterprise. From Al Olaya’s corporate towers to the new smart districts of Diriyah and Qurtubah, businesses here are competing for attention in a market that’s gone digital first.
                    </p>

                    <p className="text-gray-900 mb-6 font-poppins leading-relaxed max-w-2xl">
                        Today’s customer doesn’t wait — they search, compare, and decide within seconds. If your business isn’t visible online with authority and clarity, you’re invisible.
                    </p>

                    <p className="text-gray-900 mb-8 font-poppins leading-relaxed max-w-2xl">
                        At Bixeltek, we bridge that gap — combining Google Ads, SEO, and creative systems that make every riyal deliver results. Whether you run a clinic, a retail store, or a B2B service, we help you scale faster with marketing that speaks to Saudi audiences in both Arabic and English.
                    </p>

                    {/* CTA Button */}
                    <Link href={"#form"}>
                        <button className="px-7 py-3 rounded-full bg-gradient-to-tr from-green-500 via-green-700 to-green-950 hover:bg-gradient-to-tr hover:from-green-950 hover:via-green-700 hover:to-green-500 text-white font-semibold text-sm shadow-lg transition">
                            Get a Free Marketing Audit
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    );
}
