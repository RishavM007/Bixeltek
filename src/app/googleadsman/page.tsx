'use client';
import React from 'react';
import Image from 'next/image';
import rocket from '@/assets/rb_3704.png';
import { motion } from 'framer-motion';
import HoverDevCards from '@/components/Hovercards';
import myplaceholder from '@/assets/pexels-emilio-garcia-96280844-29700658.jpg';
import Link from 'next/link';

export default function Home() {
    return (
        <>
            <section>
                <div className="relative mt-[-90px]  isolate lg:mt-[-150px] mb-[0px] overflow-hidden bg-black h-[100vh] md:h-[100vh] lg:h-[105vh] xl:h-[105vh]  sm:h-[80vh]  flex items-center justify-center">
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
                    <div className="max-w-full px-1  text-center mb-[-120px] lg:max-w-5xl xl:max-w-7xl z-30">
                        <h1 className="text-2xl font-bold tracking-tight text-white md:text-4xl xl:text-7xl">
                            Drive <span className="text-purple-500 px-1 leading-4">300%</span>More Traffic with Precision Google Ads Management by Bixeltek!
                        </h1>
                        <p className="mt-10 text-sm lg:text-lg  xl:text-3xl leading-8 text-gray-200 ">
                            Based in <span className="text-purple-600 px-1">Hyderabad</span>, trusted by 50+ businesses for scalable ad performance.
                        </p>

                        <button className="backdrop-blur-3xl border border-white group text-white font-normal text-sm xl:text-lg py-2 px-4 md:px-6 md:py-3 xl:py-5 xl:px-5 md:text-md rounded-lg mt-14 md:mt-16 shadow-custom ">
                            <span>
                                Get a Free Audit Today!{' '}
                                <i className="fa fa-arrow-right ml-2 rotate-[-45deg] group-hover:rotate-[0deg] transition-all" aria-hidden="true"></i>
                            </span>
                        </button>
                    </div>
                </div>
            </section>
            <section className='border-b'>
                <div className="bg-white flex flex-col md:flex-row items-center justify-between py-6 px-6 md:px-20 md:py-32">

                    <div className="text-center md:text-left md:w-1/2  space-y-4">
                        <h2 className="text-2xl lg:text-5xl font-bold text-gray-800 leading-[32px] lg:leading-[53px] tracking-tight">80% of Google Ads Budgets Are Wasted Without Strategic Management.</h2>
                        <p className="text-gray-600 text-sm lg:text-xl pt-3">
                            Many businesses struggle to see results from their Google Ads campaigns due to poor targeting and ineffective strategies. Without proper management, high costs per click and low returns on investment become common hurdles.
                        </p>
                        <div className='my-2 lg:my-5 group'>
                            <Link href="#" className="text-black font-semibold text-lg ">
                                Lets Optimize Your Campaigns!  <i className="fa fa-arrow-right hidden rotate-[-45deg] ml-1 group-hover:rotate-[0deg] transition-all" aria-hidden="true"></i>
                            </Link>
                        </div>
                        <p className='text-gray-500 text-[13px] lg:text-[16px] pt-1 lg:pt-3'>Enhance your online presence with a professionally optimized website tailored to drive results.</p>
                    </div>

                    <div className="md:w-1/2 flex justify-center mt-4 mb-2 items-center ">
                        <Image
                            width={500}
                            height={500}
                            src={myplaceholder}
                            alt="Description of the image"
                            className="rounded-lg  shadow-md"
                        />
                    </div>
                </div>
            </section>
            <section>
                <div className="bg-white flex flex-col pt-10 pb-20 items-center">
                    <div className="text-center flex flex-col max-w-5xl">
                        <h2 className="text-3xl lg:text-5xl font-bold text-gray-800">
                            Maximize Every Click with Our Proven Strategies
                        </h2>
                        <p className="text-lg text-gray-700 py-10 font-sans">
                            We focus on making your ad spend count by combining precision, creativity, and data-driven insights. Here's how we transform your campaigns into performance powerhouses:
                        </p>
                    </div>
                    <div className="w-full py-10 flex justify-center">
                        <HoverDevCards />
                    </div>
                </div>
            </section>



        </>
    );
}
