'use client';
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import saudiImg from '@/assets/Riyadh.jpg'; // ✅ replace with a relevant Eastern Province image

export default function BusinessGrowthEasternProvince() {
    return (
        <section className="relative px-6 py-10 md:py-10 bg-black">
            <div className="flex lg:max-w-[85%] mx-auto gap-0 md:gap-10 flex-col lg:flex-row items-center">

                {/* ✅ Left Blue/Image Container */}
                <div className="relative w-full lg:w-1/2 rounded-r-[40px] bg-transparent flex justify-center items-center">
                    <Image
                                src={saudiImg}
                                alt="Eastern Province skyline"
                                className="rounded-[0px] shadow-2xl object-cover z-10"
                            />
                </div>

                {/* ✅ Right Content */}
                <div className=" w-full md:mt-0 lg:w-1/2 py-16">
                    
                    {/* Heading */}
                    <h2 className="text-3xl md:text-5xl font-inter text-white font-medium mb-4 md:leading-snug">
                        Eastern Province Is Growing Fast — 
                        <span className="text-yellow-500"> Your Marketing Should Too.</span>
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

                    {/* <p className="text-gray-300 mb-6 font-poppins leading-relaxed max-w-2xl">
                        Whether your business is in Khobar’s tech district, Dammam’s industrial zones, or 
                        Dhahran’s corporate hubs, being found online can be the difference between growing fast 
                        or getting left behind.
                    </p> */}

                    <p className="text-gray-300 mb-8 font-poppins leading-relaxed max-w-2xl">
                        At Bixeltek, we bridge this gap — combining advertising, search, and conversion systems 
                        that make every click count.
                    </p>

                    {/* CTA Button */}
                    <Link href={"#form"}>
                        <button className="px-7 py-3 rounded-full bg-gradient-to-tr from-green-500 via-green-700 to-green-950 hover:bg-gradient-to-tr hover:from-green-950 hover:via-green-700 hover:to-green-500 text-white font-semibold text-sm shadow-lg hover:bg-[#d6ae3f] transition">
                            Get a Free Marketing Audit
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    );
}
