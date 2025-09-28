"use client";
import Image from 'next/image';
import React from 'react';
import { Check } from "lucide-react";
import Link from 'next/link';
import agencyImg from '@/assets/blog-5.jpg'; // replace with your own image

export default function WhyChooseBixeltek() {
    return (
        <section className="relative md:py-20 bg-black">
            <div className="flex flex-col-reverse md:flex-row items-center">
                
                {/* LEFT CONTENT */}
                <div className="px-6 w-full mt-[-200px] md:mt-0 md:w-3/5 md:pl-20 md:pr-12 py-16">
                    {/* Main heading */}
                    <h2 className="text-3xl md:text-6xl font-inter max-w-3xl text-white font-bold mb-4 leading-snug">
                        A Google Partner Agency With{" "}
                        <span className=" text-blue-600">4+ Years of Proven Results</span> in Canada
                    </h2>

                    {/* Paragraph */}
                    <p className="text-gray-300 mb-6 font-poppins leading-relaxed max-w-2xl">
                        We’re not another “do-it-all” agency. We’re a{" "}
                        <span className="font-semibold text-white">Google Partner Certified</span> agency 
                        with over 4 years of experience helping Toronto businesses generate more leads, 
                        reduce wasted spend, and scale ROI by 10x.
                    </p>

                    {/* Value Props */}
                    <div className="mb-6 text-white">
                        <ul className="space-y-4">
                            <li className="flex gap-3">
                                <Check className="text-blue-500 w-5 h-5 shrink-0 mt-1" />
                                Google Partner Certified for Ads & Analytics
                            </li>
                            <li className="flex gap-3">
                                <Check className="text-blue-500 w-5 h-5 shrink-0 mt-1" />
                                200+ Projects Delivered Across Canada
                            </li>
                            <li className="flex gap-3">
                                <Check className="text-blue-500 w-5 h-5 shrink-0 mt-1" />
                                90% Client Retention Rate
                            </li>
                            <li className="flex gap-3">
                                <Check className="text-blue-500 w-5 h-5 shrink-0 mt-1" />
                                Transparent ROI Tracking
                            </li>
                            <li className="flex gap-3">
                                <Check className="text-blue-500 w-5 h-5 shrink-0 mt-1" />
                                Integrated Team: Ads, SEO, Web, Social, and Branding
                            </li>
                        </ul>
                    </div>

                    {/* CTA Button */}
                    <Link href={"#form"}>
                        <button className="px-8 mt-2 py-4 rounded-2xl bg-blue-600 text-white font-semibold text-base shadow-lg hover:bg-blue-700 transition">
                            Work With Us
                        </button>
                    </Link>
                </div>

                {/* RIGHT Blue Container */}
                <div className="relative w-full md:w-2/5 h-[500px] rounded-l-[40px] bg-transparent md:bg-blue-600 flex justify-start items-center">
                    <div className="w-full h-full py-16 pl-6 md:pl-12 pr-0 flex justify-start relative">
                        {/* Image overlapping outside */}
                        <div className="absolute md:-left-32 w-[90%] md:w-[90%]">
                            <Image
                                src={agencyImg}
                                alt="Bixeltek Agency Team"
                                className="rounded-[30px] shadow-lg object-cover z-10"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
