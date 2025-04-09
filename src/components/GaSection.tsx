'use client';
import React from 'react'
import { motion } from 'framer-motion'
import Teamimg from '@/assets/pexels-fauxels-3182834.jpg'
import Link from 'next/link';
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
                <div className="w-full md:w-2/3 flex flex-col items-start px-10 xl:px-16 py-10 xl:py-16 bg-gray-100">
                    {/* Headline */}
                    <h2 className="text-5xl font-sofiasanscondensed lg:text-5xl xl:text-5xl xl:leading-[50px] font-bold text-left my-10 xl:my-14 text-zinc-700">
                        Meet <span className="text-purple-600">Bixeltek</span> — Your Performance Marketing Partner in Hyderabad
                    </h2>

                    {/* Copy */}
                    <p className="text-left mt-3 xl:mt-0 xl:text-lg mb-7 font-sans text-gray-700 leading-7">
                        We are a <strong>Google Partner Certified</strong> digital marketing agency headquartered in <strong>Suncity, Hyderabad</strong>.
                        At Bixeltek, we specialize in delivering <strong>ROI-driven Google Ads campaigns</strong> for businesses that want results — not just impressions.
                    </p>

                    <p className="text-left mb-7 font-sans xl:text-lg text-gray-700 leading-7">
                        Our team consists of <strong>certified PPC specialists, media buyers, conversion strategists, and analysts</strong> who bring together technical precision and creative execution.
                        Every campaign is designed around your business goals, backed by real-time data, and optimized consistently to maximize returns.
                    </p>

                    {/* Success Metrics */}
                    <h3 className="text-xl font-bold text-gray-800 mb-4">Over the years, we&apos;ve helped:</h3>
                    <ul className="list-disc list-inside text-gray-700 xl:text-lg leading-7">
                        <li><strong>Service-based businesses</strong> reduce their cost per lead by over <span className="text-purple-700">60%</span></li>
                        <li><strong>Real estate companies</strong> generate <span className="text-purple-700">2–3x</span> more qualified inquiries</li>
                        <li><strong>E-commerce brands</strong> scale Shopping Ads with consistent <span className="text-purple-700">5–6x ROAS</span></li>
                    </ul>

                    <p className="text-left mt-7 mb-7 font-sans xl:text-lg text-gray-700 leading-7">
                        We understand how people search in Hyderabad. From <strong>Jubilee Hills to Gachibowli</strong>, from <strong>Banjara Hills to Madhapur</strong> —
                        we craft strategies tailored to <strong>local buying behaviors, search intent, and competitor landscapes</strong>.
                    </p>

                    <p className="text-left mb-7 font-sans xl:text-lg text-gray-700 leading-7">
                        Whether you&apos;re looking to target a specific pin code or expand nationally, our approach ensures your brand appears where and when it matters most.
                    </p>

                    <p className="text-left font-sans xl:text-lg text-gray-700 leading-7">
                        We are more than just a Google Ads company — we’re your <strong>long-term growth partner</strong>.
                    </p>

                    {/* Google Partner Badge */}
                    <a href="https://www.google.com/partners/agency?id=2188074075" target="_blank" className="mt-10 flex justify-start">
                        <img src="https://www.gstatic.com/partners/badge/images/2024/PartnerBadgeClickable.svg"
                            alt="Google Partner Badge"
                            className="w-auto h-auto" />
                    </a>
                    <div className='flex flex-col md:flex-row gap-5 mt-10'>
                        <Link href={'/contact-us'}>
                    <button className='bg-neutral-800 rounded-lg text-white px-5 py-3'>Get An Audit</button>
                        </Link>
                        <a href="tel:+919100032301">
                    <button className='bg-transparent text-black hover:bg-neutral-800 hover:text-white py-3 px-5 transition-all duration-200 rounded-lg '>Speak to our Google Ads Specialist</button>
                        </a>
                    </div>
                </div>

                <div className="w-full md:w-1/3  relative">
                    <motion.div
                        className="absolute w-2 sm:w-3 md:w-3 h-10 md:h-20 bg-[#4285F4] top-0  left-0 origin-top"
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
            </div>
            <div className="= max-w-[97%] items-center relative flex flex-col md:flex-row pt-5 gap-5 md:gap-14 px-10 pb-20 md:pt-16 xl:pt-16">

                <div className="flex flex-col items-center text-center">
                    <h2 className="text-4xl xl:text-5xl my-2 font-sofiasanscondensed font-bold text-zinc-700">7+</h2>
                    <p className="font-sofiasanscondensed text-gray-900 leading-6 tracking-wide text-sm lg:text-xl uppercase">Years creating campaigns</p>
                    <p className=" text-gray-700  tracking-wide my-1 text-sm xl:text-lg">
                        In Google Ads, the experience is a degree
                    </p>
                </div>

                <div className="flex flex-col items-center text-center">
                    <h2 className="text-4xl xl:text-5xl my-2 font-bold font-sofiasanscondensed text-zinc-700">9</h2>
                    <p className="font-raleway text-gray-900 leading-6 tracking-wide uppercase  font-sofiasanscondensed lg:text-xl text-sm">Google Certified Experts</p>
                    <p className=" text-gray-700 tracking-wide my-1 text-sm xl:text-lg">
                        A large team of certified professionals
                    </p>
                </div>

                <div className="flex flex-col items-center text-center">
                    <h2 className="text-4xl xl:text-5xl my-2 font-bold font-sofiasanscondensed text-zinc-700">3+</h2>
                    <p className="font-raleway text-gray-900 leading-6 tracking-wide font-sofiasanscondensed uppercase text-sm lg:text-xl">Years with us</p>
                    <p className=" text-gray-700 my-1 tracking-wide text-sm xl:text-lg">
                        Each customer is with us for an average of 12 years
                    </p>
                </div>
            </div>
        </section>
    )
}
