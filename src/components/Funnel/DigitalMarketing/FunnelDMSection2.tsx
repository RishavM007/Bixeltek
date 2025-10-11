"use client";

import Image from "next/image";
import { Target, TrendingUp, RefreshCcw, ArrowUpRight } from "lucide-react";
import { TbDevicesStar } from "react-icons/tb";
import { SiGitbook } from "react-icons/si";
import { VscGraph } from "react-icons/vsc";
import ima1 from '@/assets/about-us-image-2.png'
export default function DeliveringMathSection() {
    return (
        <section className="bg-black py-10 md:py-20 px-6 md:px-20">
            <div className="max-w-[85%] mx-auto">
                {/* Heading + Paragraph */}
                <div className="max-w-full flex-col md:flex-row flex gap-5 justify-center items-center mb-12">
                    <h2 className="text-4xl md:w-[50%] md:text-5xl font-bold text-gray-50 leading-tight">
                        We Can’t Control the Market. <span className="text-blue-500">But We Control the{" "}
                        <span className="italic text-blue-500">Math.</span></span> 
                    </h2>
                    <p className="text-gray-100 md:w-[50%] font-lg font-inter mt-6 leading-relaxed">
                        Before we launch anything — ads, SEO, or content — we build a
                        performance model designed to answer one question:
                        <span className="font-semibold text-gray-100">
                            “How do we make sure every dollar you spend moves you closer to
                            measurable growth?”
                        </span>
                        We don’t predict the future — we design systems that adapt, learn,
                        and scale with precision.
                    </p>
                </div>

                {/* Grid Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
                    {/* Left Card */}
                    <div className="bg-gradient-to-br from-blue-700 via-purple-400 to-purple-700 rounded-2xl text-white p-10 flex flex-col justify-between">
                        <div>
                            <h3 className="text-xl font-semibold mb-4 uppercase text-indigo-200 tracking-wide">
                                READY FOR RESULTS
                            </h3>
                            <p className="text-2xl font-semibold leading-snug">
                                Building marketing systems that learn, scale, and deliver
                                precision-driven growth.
                            </p>
                             
                            
                            {/* <a href="https://www.google.com/partners/agency?id=2188074075" target="_blank" className="mt-2 flex justify-start">
                <img src="https://www.gstatic.com/partners/badge/images/2024/PartnerBadgeClickable.svg"
                  alt="Google Partner Badge"
                  className="w-auto h-40 mt-10" />
              </a> */}
                        </div>
                        <div className="mt-8">
                           {/* <Image src={ima1} alt="what we do" ></Image> */}
                           <button className="bg-white text-indigo-900 font-semibold px-5 py-3 rounded-lg inline-flex items-center gap-2 hover:bg-indigo-50 transition">
                                See How It Works <ArrowUpRight className="w-4 h-4" />
                            </button>
                        </div>
                    </div>

                    {/* Right Cards */}
                    <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Card 1 */}
                        <div className="bg-green-50 p-6 rounded-3xl flex flex-col justify-between hover:shadow-lg transition-all duration-300 min-h-[260px]">
                            <div className="flex flex-col items-start gap-3">
                                <TbDevicesStar className="w-8 h-8 text-green-600 flex-shrink-0" />
                                <div>
                                    <h4 className="text-3xl font-semibold text-gray-900 mb-4">
                                        Strategic Accountability
                                    </h4>
                                    <p className="text-gray-800 font-poppins leading-relaxed">
                                        Every channel is tied to a measurable KPI — ensuring clarity,
                                        focus, and consistent performance.
                                    </p>
                                </div>
                            </div>
                            <ArrowUpRight className="w-6 h-6 mt-6 text-gray-500 self-end" />
                        </div>

                        {/* Card 2 */}
                        <div className="bg-pink-50 p-6 rounded-3xl flex flex-col justify-between hover:shadow-lg transition-all duration-300 min-h-[260px]">
                            <div className="flex flex-col items-start gap-3">
                                <VscGraph className="w-7 h-7 text-pink-600 flex-shrink-0" />
                                <div>
                                    <h4 className="text-3xl font-semibold text-gray-900 mb-4">
                                        Predictive <br /> Insights
                                    </h4>
                                    <p className="text-gray-800 font-poppins leading-relaxed">
                                        Campaigns are optimized through real data — not opinions —
                                        delivering smarter, faster growth.
                                    </p>
                                </div>
                            </div>
                            <ArrowUpRight className="w-6 h-6 mt-6 text-gray-500 self-end" />
                        </div>

                        {/* Card 3 */}
                        <div className="bg-blue-50 p-6 rounded-3xl hidden  md:flex flex-col justify-between hover:shadow-lg transition-all duration-300 sm:col-span-2 min-h-[260px]">
                            <div className="flex flex-col items-start gap-3">
                                <SiGitbook className="w-7 h-7 text-blue-600 flex-shrink-0" />
                                <div>
                                    <h4 className="text-3xl font-semibold text-gray-900 mb-5">
                                        Learning Loops
                                    </h4>
                                    <p className="text-gray-800 font-poppins leading-relaxed">
                                        The longer we run, the smarter your system becomes — compounding performance
                                        with every iteration and transforming raw data into refined strategy, driving
                                        consistent, scalable growth over time.
                                    </p>
                                </div>
                            </div>
                            <ArrowUpRight className="w-6 h-6 mt-6 text-gray-500 self-end" />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

