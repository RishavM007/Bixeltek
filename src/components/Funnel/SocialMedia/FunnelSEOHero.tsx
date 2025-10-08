"use client";
import React, { useState } from "react";
import Image from "next/image";
import { ButtonContactForm } from "@/sections/ButtonContactForm";
import { LogoTicker2 } from "@/components/GoogleAdsCarousel";
import websitesIcon from "@/assets/medal-ribbons-star-svgrepo-com.png";
import globeIcon from "@/assets/star-shine-svgrepo-com.png";
import aiIcon from "@/assets/google-authenticator-svgrepo-com.png";
import { FunnelSEOLogoTicker } from "./SEOLogoTicker";
import manimg from '@/assets/SEO AUDIT MAN.png'
import rocketicon from '@/assets/rocket icon.png'
import icon2 from '@/assets/icon 500k.png'
import { motion } from "framer-motion";
import icon3 from '@/assets/icon 1m.png'
import icon4 from '@/assets/icon sales.png'

export default function HeroSEOAudit() {
    const [isVisible, setIsVisible] = useState(false);

    const toggleContactForm = () => {
        setIsVisible((prev) => !prev);
        console.log(!isVisible ? "Contact form visible" : "Contact form not visible");
    };
    const floatTransition = {
        duration: 3,
        repeat: Infinity,
        repeatType: "mirror" as const,
        ease: "easeInOut",
    };


    const highlights = [
        { id: 1, text: "200+ Websites Ranked", icon: websitesIcon },
        { id: 2, text: "Active in 4 Countries", icon: globeIcon },
        { id: 3, text: "AI + Semantic SEO Experts", icon: aiIcon },
    ];

    return (
        <section className="relative flex flex-col items-center justify-center md:h-[170vh] bg-purple-50 text-center px-0 overflow-hidden"
            style={{
                backgroundImage: `url('/buzzz-main-bg.png')`, // Replace with your image filename in /public
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}>
            <div className="flex justify-center mx-auto items-center">
                <div className="relative z-10 mt-40">

                    {/* ✅ Heading */}
                    <h1 className="text-4xl md:text-7xl font-bold leading-tight text-neutral-900 max-w-7xl mx-auto">
                        Ranking on Google Is Hard. <br />
                        <span className="text-blue-500 text-6xl">Ranking on AI Platforms Is Harder.</span>
                    </h1>

                    {/* ✅ Subheading */}
                    <p className="mt-6 text-lg font-semibold md:text-base text-gray-900 max-w-4xl mx-auto">
                        We help you win both.
                        Bixeltek’s AI-powered SEO strategies help your business rank on Google, Gemini, and ChatGPT by optimizing for search engines and large language models. <br />
                        <span className="font-semibold text-blue-400">
                            Get your Free SEO Audit & Ranking Forecast — see where you stand and how fast you can grow.
                        </span>
                    </p>

                    {/* ✅ Trust Badges */}
                    <div className="mt-10 flex max-w-full flex-wrap justify-center gap-4">
                        {highlights.map((point) => (
                            <div
                                key={point.id}
                                className="flex flex-col md:flex-row justify-center items-center gap-2 text-black max-w-[260px] p-4 border border-transparent rounded-2xl transition-all duration-300"
                            >
                                <Image
                                    src={point.icon}
                                    alt={point.text}
                                    className="w-10 h-10 mb-2 md:mb-0"
                                    width={40}
                                    height={40}
                                />
                                <p className="text-sm font-semibold md:text-base">{point.text}</p>
                            </div>
                        ))}
                    </div>

                    {/* ✅ CTA Buttons */}
                    <div className="mt-10 flex flex-wrap justify-center gap-4">
                        <button
                            onClick={toggleContactForm}
                            className="px-8 py-3 rounded-full bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
                        >
                            Get My Free SEO Audit
                        </button>
                        <a href="mailto:zee@bixeltek.com">
                            <button className="px-8 py-3 rounded-full border border-black text-black font-medium hover:bg-white hover:text-black transition">
                                Book a Strategy Call
                            </button>
                        </a>
                    </div>
                </div>
            </div>

            {/* ✅ Popup Form + Logo Carousel */}
            <ButtonContactForm
                isVisible={isVisible}
                onClose={() => setIsVisible(false)}
            />
            <FunnelSEOLogoTicker />
            <section className="relative mx-auto sm:w-[95%] md:w-[70%] lg:w-[50%] flex justify-center py-20">
                {/* Background box */}
                <div className="relative  bg-gradient-to-b from-[#4F46E5] to-[#4338CA] rounded-2xl w-full h-[350px] md:h-[580px] flex items-center justify-center overflow-visible">

                    {/* Main Image */}
                    <Image
                        src={manimg} // replace with your image path
                        alt="Excited man celebrating success"
                        className="absolute -bottom-10 z-10 w-[400px] md:w-[590px] object-cover"
                        style={{ transform: "translateY(-40px)" }}
                    />

                    {/* Left floating badges */}
                    <motion.div
                        animate={{ y: [-20, 10] , x :[-10,10] }}
                        transition={{ ...floatTransition, delay: 0 }}
                        className="sm:hidden md:flex absolute left-[-100px] top-[30%]"
                    >
                        <div className="flex items-center gap-2 bg-white shadow-md px-4 py-2 rounded-full">
                            <Image src={rocketicon} alt="rocket" className="w-6 h-6" />
                            <span className="text-base font-medium text-gray-800">
                                Scale ads with 4x ROI
                            </span>
                        </div>
                    </motion.div>

                    <motion.div
                        animate={{ y: [-18, 8] ,x :[-30,10] }}
                        transition={{ ...floatTransition, delay: 0.4 }}
                        className="sm:hidden md:flex absolute left-[-120px] bottom-[25%]"
                    >
                        <div className="flex items-center gap-2 bg-white shadow-md px-4 py-2 rounded-full">
                            <Image src={icon2} alt="sales" className="w-6 h-6" />
                            <span className="text-base font-medium text-gray-800">
                                Generate $25K+ in sales
                            </span>
                        </div>
                    </motion.div>

                    <motion.div
                        animate={{ y: [-10, 10] ,x :[-20,-50] }}
                        transition={{ ...floatTransition, delay: 0.2 }}
                        className="sm:hidden md:flex absolute right-[-120px] top-[25%]"
                    >
                        <div className="flex items-center gap-2 bg-white shadow-md px-4 py-2 rounded-full">
                            <Image src={icon3} alt="followers" className="w-6 h-6" />
                            <span className="text-base font-medium text-gray-800">
                                Reach 500K+ new followers
                            </span>
                        </div>
                    </motion.div>

                    <motion.div
                        animate={{ y: [-12, 12] }}
                        transition={{ ...floatTransition, delay: 0.6 }}
                        className="sm:hidden md:flex absolute right-[-100px] bottom-[20%]"
                    >
                        <div className="flex items-center gap-2 bg-white shadow-md px-4 py-2 rounded-full">
                            <Image src={icon4} alt="video" className="w-6 h-6" />
                            <span className="text-base font-medium text-gray-800">
                                Hit 1M+ video views
                            </span>
                        </div>
                    </motion.div>
                </div>
            </section>

        </section>
    );
}
