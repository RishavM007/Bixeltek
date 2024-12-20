'use client';
import React from 'react';
import Image from 'next/image';
import rocket from '@/assets/rb_3704.png';
import { motion } from 'framer-motion';
import people from '@/assets/Group.png'
import Head from 'next/head';

export default function Home() {
    return (
        <>
            <section>
                <div className="relative mt-[-90px]  isolate lg:mt-[-150px] mb-[0px] overflow-hidden bg-black h-[100vh] md:h-[100vh] lg:h-[100vh] xl:h-[70vh]  sm:h-[80vh]  flex items-center justify-center">
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
                        className="absolute right-0 bottom-[-100px] z-10"
                        animate={{ y: [-20, 20, -20], x: [-20, 20, -20] }}
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
                    <div className="max-w-full px-4 text-center mb-[-120px] lg:max-w-3xl z-30">
                        <h1 className="text-2xl font-bold tracking-tight text-white md:text-4xl xl:text-5xl">
                            Drive <span className="text-purple-500 px-1 leading-4">300%</span>More Traffic with Precision Google Ads Management by Bixeltek!
                        </h1>
                        <p className="mt-10 text-sm lg:text-lg xl:text-xl leading-8 text-gray-200 ">
                            Based in <span className="text-purple-600 px-1">Hyderabad</span>, trusted by 50+ businesses for scalable ad performance.
                        </p>

                        <button className="backdrop-blur-3xl border border-white group text-white font-normal text-sm py-2 px-4 md:px-6 md:py-3 md:text-md rounded-lg mt-14 md:mt-16 shadow-custom ">
                            <span>
                                Get a Free Audit Today!{' '}
                                <i className="fa fa-arrow-right ml-2 rotate-[-45deg] group-hover:rotate-[0deg] transition-all" aria-hidden="true"></i>
                            </span>
                        </button>
                    </div>
                </div>
            </section>
            <section>
                <div className="relative py-20 sm:py-28 md:py-52 bg-black isolate">
                    <Image
                        src={people}
                        alt="people"
                        height={1000}
                        width={1000}
                        className="absolute z-0 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 object-fill"
                    />
                    <div className="max-w-[95%] mx-auto px-4 sm:px-6 lg:px-15 relative z-10">
                        <div className="flex flex-col lg:flex-row justify-between gap-10 sm:gap-20 lg:gap-96">
                            <div className="flex flex-col justify-between space-y-6 sm:space-y-10 flex-1">
                                <div className="bg-black backdrop-blur-3xl bg-transparent px-4 py-8 sm:px-6 sm:py-10 rounded-lg shadow-md">
                                    <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">
                                        Advanced Keyword Targeting
                                    </h3>
                                    <p className="text-gray-200 text-sm sm:text-base">
                                        We pinpoint the right keywords to connect your ads with the perfect audience, ensuring every click counts.
                                    </p>
                                </div>
                                <div className="bg-black backdrop-blur-3xl bg-transparent px-4 py-8 sm:px-6 sm:py-10 rounded-lg shadow-md">
                                    <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">
                                        Ad Copy That Converts
                                    </h3>
                                    <p className="text-gray-200 text-sm sm:text-base">
                                        Our expertly written ad copy engages your audience, driving actions and turning views into valuable conversions.
                                    </p>
                                </div>
                            </div>
                            <div className="flex flex-col justify-between space-y-6 sm:space-y-10 flex-1">
                                <div className="bg-black backdrop-blur-3xl bg-transparent px-4 py-8 sm:px-6 sm:py-10 rounded-lg shadow-md">
                                    <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">
                                        A/B Testing for Maximum ROI
                                    </h3>
                                    <p className="text-gray-200 text-sm sm:text-base">
                                        Through continuous testing, we find the most effective strategies to optimize performance and maximize your returns.
                                    </p>
                                </div>
                                <div className="bg-black backdrop-blur-3xl bg-transparent px-4 py-8 sm:px-6 sm:py-10 rounded-lg shadow-md">
                                    <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">
                                        Real-Time Analytics & Reporting
                                    </h3>
                                    <p className="text-gray-200 text-sm sm:text-base">
                                        Track every detail with our transparent reporting and actionable insights to stay ahead of your campaign goals.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



        </>
    );
}
