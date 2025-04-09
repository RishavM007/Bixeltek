'use client';
import React from 'react'
import { VscDebugBreakpointDataUnverified } from "react-icons/vsc";
import { ContactForm } from '@/sections/ContactForm';
import Link from 'next/link';
import { useState } from 'react';
export default function SeoHero() {
    const [isVisible, setIsVisible] = useState(false);

    const toggleContactForm = () => {
        setIsVisible(prev => !prev);
        console.log(!isVisible ? "Contact form visible" : "Contact form not visible");
    };
    return (
        <>
        <section className="relative pt-12 overflow-hidden bg-black sm:pt-16">
            <div className="absolute bottom-0 left-0 w-full z-10 h-40 bg-gradient-to-t from-black to-transparent"></div>
            <div className="relative px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <div className="max-w-4xl mx-auto text-center">
                    <p className="text-xs md:text-sm font-normal tracking-widest uppercase">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r  from-cyan-500 to-purple-500">
                            Your Business Needs Visibility, And We Can Help you rank on <span className='font-bold italic'>Google</span>
                        </span>
                    </p>
                    <h1 className="mt-8 text-2xl font-normal text-white lg:text-6xl xl:text-6xl">
                        Bixeltek – A Premier SEO Agency in Hyderabad,India
                    </h1>
                    <p className='text-base text-white/80 mt-4'>
                        Ready to outshine the competition and drive consistent leads? Bixeltek is your trusted SEO company in Hyderabad, offering cutting-edge SEO services that propel your business to the top of Google’s search results. Let’s turn organic traffic into tangible growth.
                    </p>

                    <div className="flex flex-col items-center justify-center px-8 mt-12 space-y-5 sm:space-y-0 sm:px-0 sm:space-x-5 sm:flex-row">
                        <div className="relative inline-flex items-center justify-center w-full sm:w-auto group">
                            <div className="absolute transition-all duration-200 rounded-full -inset-px bg-gradient-to-r from-cyan-500 to-purple-500 group-hover:shadow-lg group-hover:shadow-cyan-500/50"></div>
                            <button onClick={toggleContactForm} className="relative inline-flex items-center justify-center w-full px-8 py-3 text-base font-normal text-white bg-black border border-transparent rounded-full sm:w-auto">
                                Get A Quote
                            </button>
                        </div>
                        <a href="tel:+919100032301" className="inline-flex items-center justify-center w-full px-8 py-3 text-base font-normal text-white transition-all duration-200 bg-black border border-gray-600 rounded-full sm:w-auto hover:border-white">
                            Contact Us
                        </a>
                    </div>
                </div>

                <div className="relative mt-12 sm:mt-16 lg:mt-24">

                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -z-10">
                        <svg
                            className="blur-[64px] filter"
                            width="645"
                            height="413"
                            viewBox="0 0 645 413"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M181.316 218.778C86.2529 123.715 -63.7045 134.94 31.3589 39.8762C126.422 -55.1873 528.427 41.1918 623.49 136.255C718.554 231.319 470.678 289.068 375.614 384.131C280.551 479.195 276.38 313.842 181.316 218.778Z"
                                fill="url(#d)"
                            />
                            <defs>
                                <linearGradient
                                    id="d"
                                    x1="665.741"
                                    y1="178.506"
                                    x2="296.286"
                                    y2="474.62"
                                    gradientUnits="userSpaceOnUse"
                                >
                                    <stop offset="0%" className="text-cyan-500" stopColor="currentColor" />
                                    <stop offset="100%" className="text-purple-500" stopColor="currentColor" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>


                    <div className="bg-[#7b00e0] max-w-full pt-2 md:pt-5 mx-auto shadow-purple-custom2 rounded-t-2xl">
                        <div className="max-w-[97%] pt-4 md:pt-10 pb-5  px-5 mx-auto bg-black rounded-t-2xl flex flex-col lg:flex-row justify-center items-center">
                            {/* Left side */}
                            <div className=" w-full md:w-1/2 flex flex-col">
                                <h2 className="text-xl md:text-2xl lg:text-4xl text-white mt-4 md:mt-10 mx-2 md:mx-5 lg:mx-7">
                                    <span className="text-[#7b00e0]">Rank Higher, Get More Traffic</span> & Skyrocket Your Business Growth
                                </h2>
                                <div className="flex mt-10 md:mt-20 mb-6 mx-2 px-0 gap-8">
                                    <div className=" w-1/2 flex flex-col text-white">
                                        <h1 className="text-[#6728cc] text-3xl md:text-5xl font-semibold">278%</h1>
                                        <p className="text-gray-100 text-sm mt-2">Increase in organic traffic <br /> within six months for our clients</p>
                                    </div>
                                    <div className="w-1/2 flex flex-col text-white">
                                        <h1 className="text-[#6728cc] text-3xl md:text-5xl font-semibold">4.2X</h1>
                                        <p className="text-gray-100 text-sm mt-2">
                                            Higher lead conversions from targeted SEO campaigns.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Right side */}
                            <div className="w-full md:w-1/2 pb-10 md:pb-0">
                                <ul className="flex flex-col text-gray-100 gap-10 px-2 md:px-6">
                                    <li className="flex items-start gap-4 text-sm md:text-[16px]">
                                        <VscDebugBreakpointDataUnverified className="text-[#670ef7] mt-[-17px] text-6xl" />
                                        <span>
                                            <span className='font-semibold'>Is your website struggling to generate leads and sales?</span> You&apos;re not alone. Over 91% of online content gets zero traffic from Google, meaning businesses without a strong SEO strategy are missing out on valuable customers.
                                        </span>
                                    </li>
                                    <li className="flex z-20 items-start gap-4 text-2xl ml-8 ">
                                        <span>
                                            <Link href={'/contact-us'}>Want to dominate search engine rankings? <span className='text-[#670ef7]'>Get a Free SEO Audit today!</span> </Link>
                                        </span>
                                    </li>
                                </ul>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </section>
        <ContactForm isVisible={isVisible} onClose={() => setIsVisible(false)} />
        </>
    )
}
