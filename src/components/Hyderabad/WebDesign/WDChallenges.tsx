import { Factory } from "lucide-react";
import Image from "next/image";
import React from "react";
import { MdDevices, MdTrendingUp } from "react-icons/md";
import section2img2 from '@/assets/laptop dentist 2.png'

const WDChallenges = () =>{
    return(
        <section className="bg-transparent px-6 pt-16 lg:pt-32 pb-14 text-black">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-10 items-start mb-16">
                        {/* Text Content */}
                        <div>
                            <h2 className="text-3xl font-inter md:text-5xl font-bold  leading-tight mb-4">
                                What’s Wrong With Most <span className="text-purple-600">Business Websites</span> in Hyderabad
                            </h2>
                            <p className="text-gray-800 text-base mb-4">
                                Most websites fail for one simple reason: they aren’t designed to solve business problems. They look decent on a desktop but break on mobile. They have flashy visuals but no clear call to action. And worse, they don’t show up on Google — even when people are searching for the exact service you offer.
                            </p>
                            <p className="text-gray-800 text-base mb-4">
                                If this sounds like your website, you’re not alone. We’ve worked with dozens of business owners across Hyderabad who were frustrated that their website wasn’t doing its job. They were spending money on ads and not getting leads. Losing customers to competitors with better search rankings. And watching visitors land on their site, only to leave without taking any action.

                            </p>
                            <p className="text-gray-800 text-base">
                                These are not design problems — they are growth problems. And that’s exactly what Bixeltek solves.
                            </p>
                        </div>

                        {/* Image Placeholder */}
                        <div className="w-full h-full flex items-center justify-center">
                            <Image src={section2img2} alt='laptop' className='w-full h-auto object-cover rounded-xl' />
                            {/* Replace with your actual image */}

                        </div>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-10 mt-12 border-t pt-10">
                        {/* Card 1 */}
                        <div className="flex items-start gap-10">
                            <div className="bg-blue-100 text-blue-600 p-3 rounded-xl">
                                <MdDevices className="text-3xl" />

                            </div>
                            <div>
                                <h3 className="text-5xl font-sofiasanscondensed font-bold text-purple-600 mb-2">100%</h3>
                                <p className="text-lg font-semibold text-black mb-3">High-Performance Websites</p>
                                <p className="text-gray-500 text-sm">
                                    All our custom websites are built from scratch with zero templates, delivering lightning-fast load speeds, 100% mobile responsiveness, and optimal Core Web Vitals scores.
                                </p>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="flex items-start gap-9">
                            <div className="bg-green-100 text-green-600 p-3 rounded-xl">
                                <MdTrendingUp className="text-3xl" />
                            </div>
                            <div>
                                <h3 className="text-5xl font-sofiasanscondensed font-bold text-purple-600 mb-2">120%+</h3>
                                <p className="text-lg font-semibold text-black mb-3">SEO-Optimized Architecture</p>
                                <p className="text-gray-500 text-sm">
                                    Our SEO-first web development approach increases organic traffic and search rankings—clients report up to 200% boost in visibility within the first 3 months of launch.
                                </p>
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className="flex items-start gap-10">
                            <div className="bg-yellow-100 text-yellow-600 p-3 rounded-xl">
                                <Factory className="text-3xl" />
                            </div>
                            <div>
                                <h3 className="text-5xl font-sofiasanscondensed font-bold text-purple-600 mb-2">15+</h3>
                                <p className="text-lg font-semibold text-black mb-3">Years of Industry Expertise</p>
                                <p className="text-gray-500 text-sm">
                                    Since 2009, Our founders have empowered 150+ brands globally through performance-driven websites, ongoing maintenance, and conversion-optimized user experiences.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
    )
}

export default WDChallenges