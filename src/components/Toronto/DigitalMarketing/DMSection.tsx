'use client';
import Image from 'next/image';
import React from 'react';
import { Check } from "lucide-react";
import Link from 'next/link';
import peopleImg from '@/assets/h1-choose.jpg'; // replace with your image

export default function BusinessProblems() {
    return (
        <section className="relative py-20 bg-black">
            <div className="flex flex-col md:flex-row items-center">

                {/* Left Blue Container */}
                <div className="relative w-full md:w-2/5 h-[800px] rounded-r-[40px] bg-transparent md:bg-blue-600 flex justify-end items-center">
                    {/* The big blue block touching left edge */}
                    <div className="w-full h-full py-16 pl-0 pr-6 md:pr-12 flex justify-end relative">
                        {/* Image overlapping outside */}
                        <div className=" absolute md:-right-32 w-[90%] md:w-[90%]">
                            <Image
                                src={peopleImg}
                                alt="Business team"
                                className="rounded-[30px]  shadow-lg object-cover z-10"
                            />
                            {/* Extend image outside the blue container */}
                            {/* <div className="absolute top-0 right-[-100%] h-full w-[20%] bg-transparent"></div> */}
                        </div>
                    </div>
                </div>

                {/* Right Content */}
                <div className="px-6 w-full mt-[-310px] md:mt-0 md:w-3/5  md:pl-44 md:pr-20 py-16">
                    {/* Main heading */}
                    <h2 className="text-3xl md:text-6xl font-inter text-white font-bold mb-4 leading-snug">
                        If Customers Can’t Find You Online,
                        <span className=" text-blue-600"> You’re Losing Them</span> to Competitors
                    </h2>

                    {/* Paragraph */}
                    <p className="text-gray-300 mb-6 font-poppins leading-relaxed max-w-2xl">
                        Toronto is one of Canada’s most competitive business markets. Whether you run a local clinic,
                        a home service business, or an ecommerce store, digital marketing determines if customers see
                        you first — or never see you at all.
                    </p>

                    {/* Problems List */}
                    <div className="mb-6 text-white">
                        <p className="font-semibold mb-4">Common Problems Toronto Businesses Face:</p>

                        <ul className="space-y-4">
                            <li className="flex gap-3">
                                <Check className="text-blue-500 w-5 h-5 shrink-0 mt-1" />
                                High competition across industries
                            </li>
                            <li className="flex gap-3">
                                <Check className="text-blue-500 w-5 h-5 shrink-0 mt-1" />
                                Rising ad costs with low ROI
                            </li>
                            <li className="flex gap-3">
                                <Check className="text-blue-500 w-5 h-5 shrink-0 mt-1" />
                                Outdated websites that fail to convert
                            </li>
                            <li className="flex gap-3">
                                <Check className="text-blue-500 w-5 h-5 shrink-0 mt-1" />
                                Poor visibility in Google searches
                            </li>
                            <li className="flex gap-3">
                                <Check className="text-blue-500 w-5 h-5 shrink-0 mt-1" />
                                Disconnected strategies across multiple vendors
                            </li>
                        </ul>
                    </div>

                    {/* Closing Line */}
                    <p className="text-gray-300 mb-6 font-poppins leading-relaxed max-w-2xl">
                        We solve these problems by making sure your business is visible, trusted,
                        and chosen when people search online.
                    </p>

                    {/* CTA Button */}
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
