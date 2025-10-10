'use client';
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import saudiImg from '@/assets/shanghai-aerial-day.jpg'; // ✅ replace with a relevant Eastern Province image

export default function BusinessGrowthEasternProvince() {
    return (
        <section className="relative py-10 md:py-20 bg-black">
            <div className="flex flex-col md:flex-row items-center">

                {/* ✅ Left Blue/Image Container */}
                <div className="relative w-full md:w-2/5 h-[800px] rounded-r-[40px] bg-transparent md:bg-blue-600 flex justify-end items-center">
                    <div className="w-full h-full py-16 pl-0 pr-6 md:pr-12 flex justify-end relative">
                        <div className="absolute md:-right-40 w-[90%] md:w-[90%]">
                            <Image
                                src={saudiImg}
                                alt="Eastern Province skyline"
                                className="rounded-[30px] md:h-[700px] w-[600px] shadow-2xl object-cover z-10"
                            />
                        </div>
                    </div>
                </div>

                {/* ✅ Right Content */}
                <div className="px-6 w-full mt-[-160px] md:mt-0 md:w-3/5 md:pl-44 md:pr-20 py-16">
                    
                    {/* Heading */}
                    <h2 className="text-3xl md:text-6xl font-inter text-white font-bold mb-4 leading-snug">
                        Eastern Province Is Growing Fast — 
                        <span className="text-blue-600"> Your Marketing Should Too.</span>
                    </h2>

                    {/* Copy */}
                    <p className="text-gray-300 mb-6 font-poppins leading-relaxed max-w-2xl">
                        As Saudi Arabia’s economic powerhouse, the Eastern Province is home to thriving businesses 
                        in logistics, oil & gas, construction, healthcare, and retail. Yet while industries grow, 
                        the challenge remains the same — how do you reach customers who live online?
                    </p>

                    <p className="text-gray-300 mb-6 font-poppins leading-relaxed max-w-2xl">
                        Today’s buyers and clients don’t just choose based on reputation; they search, compare, 
                        and decide within seconds. That’s where digital visibility becomes your competitive edge.
                    </p>

                    <p className="text-gray-300 mb-6 font-poppins leading-relaxed max-w-2xl">
                        Whether your business is in Khobar’s tech district, Dammam’s industrial zones, or 
                        Dhahran’s corporate hubs, being found online can be the difference between growing fast 
                        or getting left behind.
                    </p>

                    <p className="text-gray-300 mb-8 font-poppins leading-relaxed max-w-2xl">
                        At Bixeltek, we bridge this gap — combining advertising, search, and conversion systems 
                        that make every click count.
                    </p>

                    {/* CTA Button */}
                    <Link href={"#form"}>
                        <button className="px-7 py-3 rounded-2xl bg-blue-600 text-white font-semibold text-sm shadow-lg hover:bg-blue-700 transition">
                            Get a Free Marketing Audit
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    );
}
