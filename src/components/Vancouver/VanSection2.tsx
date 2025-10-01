'use client';
import Image from 'next/image';
import React from 'react';
import { Check } from "lucide-react";
import Link from 'next/link';
import peopleImg from '@/assets/vancouver-1.jpg'; 

export default function BusinessStrugglesVancouver() {
    return (
        <section className="relative mt-[-70px] md:mt-0 py-0 md:py-20 bg-black">
            <div className="flex flex-col md:flex-row items-center">
                
                {/* ✅ Left Content */}
                <div className="px-6 w-full md:w-3/5  md:pl-20 md:pr-16 py-16">
                    
                    {/* Heading */}
                    <h2 className="text-3xl md:text-6xl font-inter text-white font-bold mb-4 leading-snug">
                        Why Many Businesses <span className="text-blue-600">Struggle With Online Growth</span>
                    </h2>

                    {/* Paragraph */}
                    <p className="text-gray-300 mb-6 font-poppins leading-relaxed max-w-2xl">
                        We hear the same challenges from Vancouver businesses: too much spend on ads with no ROI, 
                        websites that don’t convert, and SEO campaigns that never rank.
                    </p>

                    {/* Pain Points List */}
                    <div className="mb-6 text-white">
                        <p className="font-semibold mb-4">Common Pain Points:</p>

                        <ul className="space-y-4">
                            <li className="flex gap-3">
                                <Check className="text-blue-500 w-5 h-5 shrink-0 mt-1" />
                                High ad costs with little return
                            </li>
                            <li className="flex gap-3">
                                <Check className="text-blue-500 w-5 h-5 shrink-0 mt-1" />
                                Outdated websites that don’t build trust
                            </li>
                            <li className="flex gap-3">
                                <Check className="text-blue-500 w-5 h-5 shrink-0 mt-1" />
                                Poor SEO visibility on Google
                            </li>
                            <li className="flex gap-3">
                                <Check className="text-blue-500 w-5 h-5 shrink-0 mt-1" />
                                Weak social media engagement
                            </li>
                            <li className="flex gap-3">
                                <Check className="text-blue-500 w-5 h-5 shrink-0 mt-1" />
                                No clear tracking or reporting
                            </li>
                        </ul>
                    </div>

                    {/* Closing Line */}
                    <p className="text-gray-300 mb-6 font-poppins leading-relaxed max-w-2xl">
                        Bixeltek solves these problems by combining strategy, creativity, and data.
                    </p>

                    {/* CTA Button */}
                    <Link href={"#form"}>
                        <button className="px-7 py-3 rounded-2xl bg-blue-600 text-white font-semibold text-sm shadow-lg hover:bg-blue-700 transition">
                            Fix My Marketing
                        </button>
                    </Link>
                </div>

                {/* ✅ Right Blue/Image Container */}
                <div className="relative w-full md:w-2/5 h-[300px] mt-[-80px] md:mt-[-80px] rounded-l-[40px] bg-transparent md:bg-blue-600 flex justify-start items-center">
                    <div className="w-full h-full py-16 pr-0 pl-6 md:pl-12 flex justify-start relative">
                        <div className="absolute md:-left-20 w-[90%] md:w-[90%]">
                            <Image
                                src={peopleImg}
                                alt="Struggling businesses"
                                className="rounded-[30px] shadow-2xl object-cover z-10"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
