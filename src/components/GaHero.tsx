'use client';
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import rocket from '@/assets/rb_3704.png';
import { ContactForm } from "@/sections/ContactForm";
import { useState } from 'react';
import { IoCheckmarkOutline } from "react-icons/io5";
export default function GaHero() {

        const [isVisible, setIsVisible] = useState(false);
    
        const toggleContactForm = () => {
            setIsVisible(prev => !prev);
            console.log(!isVisible ? "Contact form visible" : "Contact form not visible");
        };

    return (
        <>  
        <section>
            <div className="relative mt-[-90px]  isolate lg:mt-[-150px] mb-[0px] overflow-hidden bg-black h-[100vh] md:h-[100vh] lg:h-[105vh] xl:h-[105vh]  sm:h-[120vh]  flex items-center justify-center">
                <svg
                    className="absolute inset-0 -z-10 h-full w-full stroke-white/10 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
                    aria-hidden="true">
                    <defs>
                        <pattern id="hero-pattern" width="200" height="200" x="100%" y="-1" patternUnits="userSpaceOnUse">
                            <path d="M.5 200V.5H200" fill="none"></path>
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#hero-pattern)"></rect>
                </svg>
                <motion.div
                    className="absolute right-0 bottom-[-140px] md:bottom-[-120px] z-10"
                    animate={{ y: [-20, 20, -20], x: [-40, 40, -40] }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                >
                    <Image src={rocket} height={600} width={600} alt="rocket" />
                </motion.div>
                <div
                    className="absolute left-[calc(50%-12rem)] top-10 -z-10 transform-gpu blur-[180px] sm:left-[calc(50%-24rem)] lg:left-48 lg:top-[calc(50%-40rem)] xl:left-[calc(50%-32rem)]"
                    aria-hidden="true">
                    <div
                        className="aspect-[1108/632] w-[100rem] bg-gradient-to-r from-[#8653f5] to-[#ae07e6] opacity-30"
                        style={{
                            clipPath:
                                "polygon(50% 0%, 85% 20%, 100% 50%, 85% 80%, 50% 100%, 15% 80%, 0% 50%, 15% 20%)",
                        }}
                    ></div>
                </div>
                <div className="max-w-full px-1 text-center justify-center mb-[-10px] lg:mb-[-120px] lg:max-w-5xl xl:max-w-7xl z-30">
                    <h1 className="text-4xl font-sofiasanscondensed font-bold tracking-normal text-white md:text-4xl xl:text-7xl">
                        Hyderabad&apos;s Top Google Ads Agency <br />
                        <span className="text-purple-500 px-1 text-2xl md:text-4xl leading-4">Delivering Real ROI, Not Just Clicks</span>
                    </h1>
                    <p className="mt-10 max-w-3xl mx-auto text-sm lg:text-lg xl:text-xl leading-0 md:leading-8 text-gray-200">
                        Get 2x–3x more qualified leads with smart, optimized Google Ads campaigns managed by certified professionals who understand your market.
                    </p>

                    {/* New Section with React Icons */}
                    <div className="mt-6 flex flex-col md:flex-row items-center justify-center gap-4 text-white text-sm md:text-base">
                        <div className="flex items-center md:border-r md:px-4 gap-2">
                            <IoCheckmarkOutline className="text-purple-600 text-lg" />
                            Google Partner Certified
                        </div>
                        <div className="flex items-center md:border-r md:pr-4 gap-2">
                            <IoCheckmarkOutline className="text-purple-600 text-lg" />
                            100+ Businesses Served
                        </div>
                        <div className="flex items-center gap-2">
                            <IoCheckmarkOutline className="text-purple-600 text-lg" />
                            Based in Hyderabad
                        </div>
                    </div>


                    <a href="tel:+919100032301">
                    <button className=" bg-white capitalize tracking-wide group text-black font-medium text-sm xl:text-base py-2 px-4 md:px-6 md:py-3 xl:py-2 xl:px-5 md:text-md rounded-lg mt-14 md:mt-16 mx-5">
                        <span>
                            Talk to a google-ads Specialist
                        </span>
                    </button>
                    </a>

                    <button onClick={toggleContactForm} className="backdrop-blur-3xl border  border-white group text-white font-normal text-sm xl:text-base py-2 px-4 md:px-6 md:py-3 xl:py-2 xl:px-5 md:text-md rounded-lg mt-14 md:mt-16 shadow-custom">
                        <span>
                            Get a Free Audit Today!{' '}
                            <i className="fa fa-arrow-right ml-2 rotate-[-45deg] group-hover:rotate-[0deg] transition-all" aria-hidden="true"></i>
                        </span>
                    </button>

                </div>
            </div>
        </section>
         <ContactForm isVisible={isVisible} onClose={() => setIsVisible(false)} />
        </>
    )
}
