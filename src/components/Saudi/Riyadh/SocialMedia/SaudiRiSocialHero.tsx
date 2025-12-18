"use client";
import React, { useState } from "react";
import Image from "next/image";
import { ButtonContactForm } from "@/sections/ButtonContactForm";
import { FunnelSEOLogoTicker } from "@/components/Funnel/SocialMedia/SEOLogoTicker";
import textimg from '@/assets/Assets-1.png'
import asset3 from '@/assets/Assets3-800x78.png'
// ✅ Icons
import googleIcon from "@/assets/google-authenticator-svgrepo-com.png";
import metaIcon from "@/assets/star-shine-svgrepo-com.png"; // add a Meta icon in your assets
import clientIcon from "@/assets/medal-ribbons-star-svgrepo-com.png";
import asset2 from '@/assets/Assets2-800x340.png'
import insta from '@/assets/instaimg.png'
// ✅ Background Image
import heroBg from "@/assets/BG-Grid-4.jpeg";

export default function HeroRiyadhSocial() {
    const [isVisible, setIsVisible] = useState(false);

    const toggleContactForm = () => setIsVisible((prev) => !prev);

    const proofPoints = [
        { id: 1, text: "Google Partner Certified", icon: googleIcon },
        { id: 2, text: "Meta Ads Specialists", icon: metaIcon },
        { id: 3, text: "90% Client Retention", icon: clientIcon },
    ];

    return (
        <>
        <section className="relative flex flex-col pb-20 items-center justify-center h-[150vh] md:h-[110vh] text-center px-6 overflow-hidden">
            {/* Background Image */}
            <Image
                src={heroBg}
                alt="Riyadh Skyline"
                fill
                className="object-cover object-center absolute inset-0 -z-10"
                priority
            />
            <Image 
            src={insta}
            alt="insta mockup"
            className="absolute hidden md:block -right-[400px] mt-[-100px]"
            />
            <Image 
            src={asset2}
            alt="social graph bixeltek"
            className="absolute hidden md:block w-[600px] mt-[-100px] h-auto -left-[300px] -rotate-[10deg]"
            />
            <Image 
            src={asset3}
             alt="social graph bixeltek"
            className="absolute hidden md:block w-[600px] mt-[200px] h-auto -left-[300px] rotate-[2deg]"
            >

            </Image>


            {/* Overlay */}
            {/* <div className="absolute inset-0 bg-black/60 -z-10" /> */}

            {/* Content */}
            <div className="flex justify-center items-center">
                <div className="relative z-10 mt-40 max-w-[100%] md:max-w-[85%] ">
                    {/* Heading */}
                    <h1 className="text-4xl md:text-7xl  font-medium leading-tight text-blue-950 flex flex-wrap items-center justify-center gap-3 md:gap-4">
                        <span> Social Media Marketing</span>

                        {/* Middle images */}
                        <span className="hidden relative md:flex -gap-4">
                            <Image src={textimg} alt="Card 1" className="w-12 md:w-24 z-10 -rotate-12 rounded-lg shadow" />
                            <Image src={textimg} alt="Card 2" className="w-12 md:w-24 rotate-12 z-20 rounded-lg shadow" />
                        </span>

                        <span>in Riyadh That</span>
                        <span>Turns Attention</span>

                        {/* Boxed text */}
                        <span className="relative inline-block px-3 py-1 bg-sky-200 border border-sky-300 text-[#08aaf3] font-bold">
                            Into Action
                            {/* 1px corners */}
                            <span className="absolute -top-[1px] -left-[1px] w-3 h-3 border-t-2 border-l-2 border-white"></span>
                            <span className="absolute -top-[1px] -right-[1px] w-3 h-3 border-t-2 border-r-2 border-white"></span>
                            <span className="absolute -bottom-[1px] -left-[1px] w-3 h-3 border-b-2 border-l-2 border-white"></span>
                            <span className="absolute -bottom-[1px] -right-[1px] w-3 h-3 border-b-2 border-r-2 border-white"></span>
                        </span>

                        
                    </h1>

                    {/* Subheading */}
                    <p className="mt-6 text-lg md:text-lg text-gray-900 max-w-5xl mx-auto">
                        We help Riyadh businesses grow with smart, creative, and data-driven social media campaigns.
                        From Meta ads to full-funnel strategy — every post, story, and reel is built to sell.
                    </p>

                    {/* Proof Points */}
                    <div className="mt-8 flex flex-wrap justify-center gap-8">
                        {proofPoints.map((point) => (
                            <div
                                key={point.id}
                                className="flex flex-col md:flex-row justify-center items-center gap-4 text-white max-w-[260px]"
                            >
                                <Image
                                    src={point.icon}
                                    alt={point.text}
                                    className="w-12 h-12 mb-2 md:mb-0"
                                    width={40}
                                    height={40}
                                />
                                <p className="text-sm text-black text-center md:text-left md:text-base">
                                    {point.text}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* CTA Buttons */}
                    <div className="mt-10 flex flex-wrap justify-center gap-4">
                        <button
                            onClick={toggleContactForm}
                            className="px-6 py-3 rounded-full bg-gradient-to-tr shadow-2xl border-2 border-sky-400 shadow-sky-500 hover:shadow-none bg-blue-500 text-white font-medium hover:bg-blue-600 transition duration-300"
                        >
                            Get My Free Social Audit
                        </button>
                        <a href="mailto:zee@bixeltek.com">
                            <button className="px-6 py-3 rounded-full border border-black text-black font-medium hover:bg-green-600 hover:text-white hover:border-green-600 transition">
                                Talk to a Strategist
                            </button>
                        </a>
                    </div>
                </div>
            </div>
             <div className="absolute bottom-0 left-0 w-full h-24 md:h-32 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>

            {/* Popup Form + Logo Carousel */}
           
            <FunnelSEOLogoTicker />
        </section>
         <ButtonContactForm isVisible={isVisible} onClose={() => setIsVisible(false)} />
        </>
    );
}
