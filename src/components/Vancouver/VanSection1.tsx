'use client';
import Image from 'next/image';
import React from 'react';
import { Check } from "lucide-react";
import Link from 'next/link';
import peopleImg from '@/assets/new-york-city-manhattan-central-park.jpg'; // ✅ replace with your Vancouver image if you have one

export default function BusinessProblemsVancouver() {
    return (
        <section className="relative py-10 lg:py-32 bg-black ">
            <div className="flex flex-col lg:flex-row items-center w-[90%] lg:w-full mx-auto">

                {/* Left Blue Container */}
                <div className="relative w-full lg:w-2/5 lg:h-[800px] rounded-r-[40px] bg-transparent lg:bg-blue-600 flex justify-center lg:justify-end items-center">
                    <div className="w-full h-full md:py-16 lg:pr-12 flex justify-center lg:justify-end relative">
                        <div className="lg:absolute md:-right-40 w-[90%] md:w-[90%]">
                            <Image
                                src={peopleImg}
                                alt="Business team"
                                className="rounded-[30px] h-[300px] md:h-[400px] lg:h-[700px] lg:w-[600px] shadow-2xl object-cover z-10"
                            />
                        </div>
                    </div>
                </div>

                {/* Right Content */}
                <div className="px-6 w-full lg:w-3/5 lg:pl-44 lg:pr-20 py-6 lg:py-16">
                    
                    {/* ✅ Heading */}
                    <h2 className="text-3xl md:text-6xl font-inter text-white font-bold mb-4 leading-snug">
                        Without Digital Marketing,
                        <span className=" text-blue-600"> You’re Losing Customers</span>
                    </h2>

                    {/* ✅ Paragraph */}
                    <p className="text-gray-300 mb-6 font-poppins leading-relaxed max-w-2xl">
                        From local startups to global enterprises, Vancouver businesses face fierce competition. 
                        Customers no longer just “walk in” — they search online first. Without the right digital presence, 
                        your competitors win those clicks, calls, and sales.
                    </p>

                    {/* ✅ Benefits List */}
                    <div className="mb-6 text-white">
                        <p className="font-semibold mb-4">Benefits of Digital Marketing:</p>

                        <ul className="space-y-4">
                            <li className="flex gap-3">
                                <Check className="text-blue-500 w-5 h-5 shrink-0 mt-1" />
                                Appear when customers search for your services
                            </li>
                            <li className="flex gap-3">
                                <Check className="text-blue-500 w-5 h-5 shrink-0 mt-1" />
                                Build brand credibility across Google and social media
                            </li>
                            <li className="flex gap-3">
                                <Check className="text-blue-500 w-5 h-5 shrink-0 mt-1" />
                                Generate consistent leads and sales
                            </li>
                            <li className="flex gap-3">
                                <Check className="text-blue-500 w-5 h-5 shrink-0 mt-1" />
                                Measure ROI on every campaign
                            </li>
                        </ul>
                    </div>

                    {/* ✅ Closing Line */}
                    <p className="text-gray-300 mb-6 font-poppins leading-relaxed max-w-2xl">
                        We help Vancouver businesses stay visible, trusted, and chosen when people search online.
                    </p>

                    {/* ✅ CTA Button */}
                    <Link href={"#form"}>
                        <button className="px-7 py-3 rounded-2xl bg-blue-600 text-white font-semibold text-sm shadow-lg hover:bg-blue-700 transition">
                            Get a Digital Marketing Audit
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    );
}
