"use client";
import React, { useState } from "react";
import Image from "next/image";
import bgimg from "@/assets/hero-bg-shape.png";
import img1 from "@/assets/hero-benefit-counter-image-1.png";
import img2 from "@/assets/hero-benefit-counter-image-2.png";
import img3 from "@/assets/hero-benefit-counter-image-3.png";
import { IoIosLaptop } from "react-icons/io";
import { AiOutlineSecurityScan } from "react-icons/ai";
import { RiCustomerService2Line } from "react-icons/ri";
import { Laptop, Laptop2 } from "lucide-react";
import Link from "next/link";

export default function CustomCodedHeroSection() {
    const [showForm, setShowForm] = useState(false);

    return (
        <section className="relative h-auto lg:h-[140vh] bg-black text-center flex flex-col items-center justify-center overflow-hidden">
            {/* Background Image */}
            <Image
                src={bgimg}
                alt="Hero Background"
                fill
                className="object-cover opacity-100"
                priority
            />

            {/* Content */}
            <div className="relative z-10 w-full px-6 md:px-0 mt-52 md:mt-36 lg:mt-24">
                {/* Heading */}
                <h1 className="text-3xl md:text-6xl font-medium text-white leading-tight md:px-3 lg:px-0">
                    Custom-Coded, Headless & Hybrid Websites <br /> Engineered for Performance
                </h1>

                {/* Subheading */}
                <p className="mt-6 text-gray-300 text-base md:text-lg max-w-2xl lg:max-w-3xl mx-auto">
                    Bixeltek builds custom-engineered web systems — blending React, Next.js, and headless CMS architecture — designed to load faster, rank higher, and convert better across global markets.
                </p>

                {/* Proof Points / Badges */}
                <div className="mt-8 flex flex-wrap justify-center gap-6 text-gray-200 text-sm">
                    <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm border border-white/20">

                        <p>Core Web Vitals Optimized</p>
                    </div>
                    <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm border border-white/20">

                        <p>200+ Global Deployments</p>
                    </div>
                    <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm border border-white/20">

                        <p>Multilingual & Scalable</p>
                    </div>
                </div>

                {/* Buttons */}
                <div className="mt-10 flex flex-wrap  justify-center gap-4">
                    <Link href={'/contact-us'}>
                    <button
                        className="px-6 py-3 rounded-full bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
                    >
                        Get My Free IT Consultation
                    </button>
                    </Link>
                    <a href="mailto:zee@bixeltek.com">
                        <button className="px-6 py-3 rounded-full border border-white text-white font-medium hover:bg-white hover:text-black transition">
                            Talk to a Developer
                        </button>
                    </a>
                </div>

                {/* Cards Section */}
                <div className=" flex flex-col lg:flex-row w-[90%] mt-20 mx-auto gap-8">
                    {/* Card 1 */}
                    <div className="relative backdrop-blur-lg w-full lg:w-1/3 font-inter flex flex-col gap-12 justify-between bg-white/10  rounded-3xl p-8 hover:scale-105 transition-transform mx-auto">

                        <div className="flex justify-between  items-start gap-6 mb-6">
                            <div className="flex flex-col gap-2">
                                <h3 className="font-semibold text-left text-white text-2xl">End-to-End Web Design Solutions</h3>
                                <p className="text-base text-gray-100 text-left">
                                    From consulting deployment we cover your full digital journey.
                                </p>
                            </div>
                            <div className="flex-shrink-0">
                                <IoIosLaptop className="text-blue-500 w-16 h-16" />
                            </div>
                        </div>

                        {/* Inner Card / Highlight Section */}
                        <div className="flex justify-between items-center gap-6 bg-white/10   rounded-3xl p-6 mb-0">
                            <div className="flex flex-col gap-2">
                                <h4 className="font-semibold text-white text-lg text-left">99.9%</h4>
                                <p className="text-base text-gray-100 text-left">
                                    Uptime Guarantee
                                </p>
                            </div>
                            <div className="">
                                <Image src={img1} alt="End-to-End IT Solutions" className="w-[90%] h-auto" />
                            </div>
                        </div>
                    </div>

                    <div className="relative backdrop-blur-lg w-full lg:w-1/3 font-inter flex flex-col gap-12 justify-between bg-white/10  rounded-3xl p-8 hover:scale-105 transition-transform mx-auto">
                        {/* Inner Card / Highlight Section */}
                        <div className="flex justify-evenly items-center gap-6 bg-white/10   rounded-3xl p-6 mb-0">
                            <div className="">
                                <Image src={img2} alt="End-to-End IT Solutions" className="w-[70%] h-auto" />
                            </div>
                            <div className="flex flex-col gap-2">
                                <h4 className="font-semibold text-white text-lg text-left">500+</h4>
                                <p className="text-base text-gray-100 text-left">
                                    Project Completed
                                </p>
                            </div>

                        </div>

                        <div className="flex justify-between  items-start gap-6 mb-0">
                            <div className="flex flex-col gap-2">
                                <h3 className="font-semibold text-left text-white text-2xl">Cybersecurity Approach</h3>
                                <p className="text-base text-gray-100 text-left">
                                    From consulting deployment we cover your full digital journey.
                                </p>
                            </div>
                            <div className="flex-shrink-0">
                                <AiOutlineSecurityScan className="text-blue-500 w-16 h-16" />
                            </div>
                        </div>

                    </div>

                    <div className="relative backdrop-blur-lg w-full lg:w-1/3 h-[350px] lg:h-auto font-inter flex flex-col gap-16 justify-between bg-white/10  rounded-3xl p-8 hover:scale-105 transition-transform mx-auto">
                        <div className="flex justify-between  items-start gap-6 mb-0">
                            <div className="flex flex-col gap-2">
                                <h3 className="font-semibold text-left text-white text-2xl">24/7 Support & Monitoring</h3>
                                <p className="text-base text-gray-100 text-left">
                                    From consulting deployment we cover your full digital journey.
                                </p>
                            </div>
                            <div className="flex-shrink-0">
                                <RiCustomerService2Line className="text-blue-500 w-16 h-16" />
                            </div>
                        </div>
                        <Image src={img3} alt="End-to-End IT Solutions" className="w-[90%] left-1/2 -translate-x-1/2 absolute bottom-0 h-auto" />
                    </div>

                    {/* Card 2 */}
                    {/* <div className="relative backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl p-6 flex flex-col items-start text-left hover:scale-105 transition-transform">
                        <Image src={img2} alt="Cybersecurity Approach" className="w-16 h-16 mb-4" />
                        <h3 className="font-semibold text-xl mb-2">Cybersecurity Approach</h3>
                        <p className="text-sm mb-4">From consulting deployment we cover your full digital journey.</p>
                        <div className="bg-white/20 px-3 py-1 rounded-full text-sm font-medium">
                            500+ Projects Complete
                        </div>
                    </div>

                    <div className="relative backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl p-6 flex flex-col items-center text-center hover:scale-105 transition-transform">
                        <Image src={img3} alt="24/7 Support & Monitoring" className="w-16 h-16 mb-4" />
                        <h3 className="font-semibold text-xl mb-2">24/7 Support & Monitoring</h3>
                        <p className="text-sm mb-4">From consulting deployment we cover your full digital journey.</p>
                    </div> */}
                </div>
            </div>

            {/* Optional: Popup Form */}
            {showForm && (
                <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
                    <div className="bg-white p-8 rounded-xl max-w-md w-full">
                        <h2 className="text-xl font-semibold mb-4">Request a Free Consultation</h2>
                        <button
                            onClick={() => setShowForm(false)}
                            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                        >
                            ✕
                        </button>
                        {/* Add your form component here */}
                    </div>
                </div>
            )}
        </section>
    );
}
