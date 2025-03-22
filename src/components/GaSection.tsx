'use client';
import React from 'react'
import { motion } from 'framer-motion'
import Teamimg from '@/assets/pexels-fauxels-3182834.jpg'
import Image from 'next/image';

export default function GaSection() {
    return (
        <section className='flex flex-col justify-center items-center relative'>
            <motion.div
                className="absolute w-2 sm:w-3 md:w-3 h-8 hidden  bg-[#EA4335] bottom-0 left-0 origin-bottom"
                animate={{ scaleY: [0, 8, 0] }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    repeatType: "loop",
                    ease: "easeInOut",
                }}
            />
            <div className='flex flex-col md:flex-row  justify-between bg-white'>
                <div className="w-full md:w-1/3  relative">
                    <motion.div
                        className="absolute w-2 sm:w-3 md:w-3 h-10 bg-[#4285F4] top-0  right-0 origin-top"
                        animate={{ scaleY: [0, 10, 0] }}
                        transition={{
                            duration: 8,
                            repeat: Infinity,
                            repeatType: "loop",
                            ease: "easeInOut",
                        }}
                    />
                    <Image src={Teamimg} alt="Team" className='h-full w-full object-cover' />
                </div>


                <div className="w-full md:w-2/3 flex flex-col items-start px-10 xl:px-16 py-10 xl:py-16 bg-gray-100">
                    <h2 className="text-5xl font-sofiasanscondensed lg:text-5xl xl:text-5xl xl:leading-[50px] font-bold text-left my-10 xl:my-14 text-zinc-700">
                        Google Ads Agency Certified by{" "}
                        <span className="text-[#4285F4]">G</span>
                        <span className="text-[#EA4335]">o</span>
                        <span className="text-[#FFBB00]">o</span>
                        <span className="text-[#4285F4]">g</span>
                        <span className="text-[#34AB53]">l</span>
                        <span className="text-[#EA4335]">e</span>
                    </h2>
                    <p className="text-left mt-3 xl:mt-0 xl:text-lg mb-7 font-sans text-gray-700 leading-7">
                        As a <strong>Google Partner Certified Agency</strong>, we are recognized for delivering high-performance Google Ads campaigns.
                        Our certification ensures we meet <strong>Google’s strict quality standards</strong>, driving better ROI and conversions.
                    </p>
                    <p className="text-left mb-7 font-sans xl:text-lg text-gray-700 leading-7">
                        Our team of <strong>Google Ads specialists</strong> stays updated on the latest ad strategies, bidding techniques, and audience targeting
                        to maximize your campaign results.
                    </p>
                    <p className="text-left mb-7 font-sans xl:text-lg text-gray-700 leading-7">
                        With exclusive <strong>Google insights</strong> and beta features, we craft data-driven strategies tailored to your business goals,
                        ensuring optimal ad performance and growth.
                    </p>
                    <a
                        href="https://www.google.com/partners/agency?id=2188074075"
                        target="_blank"
                        className="mt-10 flex justify-start"
                    >
                        <img
                            src="https://www.gstatic.com/partners/badge/images/2024/PartnerBadgeClickable.svg"
                            alt="Google Partner Badge"
                            className="w-auto h-auto"
                        />
                    </a>
                </div>
            </div>
            <div className="= max-w-[97%] items-center relative flex flex-col md:flex-row pt-5 gap-5 md:gap-14 px-10 pb-20 md:pt-16 xl:pt-16">

                <div className="flex flex-col items-center text-center">
                    <h2 className="text-4xl xl:text-[44px] xl:leading-[44px] my-2 font-montaga font-bold text-zinc-700">5+</h2>
                    <p className="font-sofiasanscondensed text-gray-900 leading-6 tracking-wide text-sm lg:text-xl uppercase">Years creating campaigns</p>
                    <p className=" text-gray-700  tracking-wide my-1 text-sm xl:text-lg">
                        In Google Ads, the experience is a degree
                    </p>
                </div>

                <div className="flex flex-col items-center text-center">
                    <h2 className="text-4xl xl:text-[44px] xl:leading-[44px] my-2 font-bold font-montaga text-zinc-700">0</h2>
                    <p className="font-raleway text-gray-900 leading-6 tracking-wide uppercase font-sofiasanscondensed text-sm lg:text-xl">Months of permanence</p>
                    <p className=" text-gray-700 tracking-wide my-1 text-sm xl:text-lg">
                        Our service does not have permanence
                    </p>
                </div>

                <div className="flex flex-col items-center text-center">
                    <h2 className="text-4xl xl:text-[44px] xl:leading-[44px] my-2 font-bold font-montaga text-zinc-700">4</h2>
                    <p className="font-raleway text-gray-900 leading-6 tracking-wide uppercase  font-sofiasanscondensed lg:text-xl text-sm">Experts</p>
                    <p className=" text-gray-700 tracking-wide my-1 text-sm xl:text-lg">
                        A large team of certified professionals
                    </p>
                </div>

                <div className="flex flex-col items-center text-center">
                    <h2 className="text-4xl xl:text-[44px] xl:leading-[44px] my-2 font-bold font-montaga text-zinc-700">12</h2>
                    <p className="font-raleway text-gray-900 leading-6 tracking-wide font-sofiasanscondensed uppercase text-sm lg:text-xl">Years with us</p>
                    <p className=" text-gray-700 my-1 tracking-wide text-sm xl:text-lg">
                        Each customer is with us for an average of 12 years
                    </p>
                </div>
            </div>
        </section>
    )
}
