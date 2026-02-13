"use client";

import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import teamImage from "@/assets/working-job-career-casual-showing-SJZWF3N-1024x737.webp";

export default function ExpertiseSection() {
    const services = [
        "Competitors appear on Google while you don’t.",
        "Ads cost money but bring little return.",
        "Your website looks fine but doesn’t convert.",
        "Customers don’t remember or trust your brand.",
    ];

    return (
        <section className="max-w-[90%] mx-auto bg-black text-white lg:py-20 px-6 lg:px-24">
            <div className="flex flex-col lg:flex-row gap-12">
                {/* Left side */}
                <div className="relative w-full lg:w-2/5 flex flex-col">
                    {/* Consultation Card */}
                    <div className="bg-gradient-to-br absolute top-0 left-0 z-20 from-black to-black rounded-br-3xl p-6 w-[80%] md:w-[70%] shadow-lg border-neutral-800">
                        <h3 className="text-2xl font-bold mb-2">
                            Ready to Elevate Your Digital Presence?
                        </h3>
                        <p className="text-gray-300 mb-4">
                            Let&apos;s create a custom strategy that fits your business goals.
                        </p>
                        <a href="/contact-us">
                        <button className="cta-btn px-12 py-2  bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-full transition-colors duration-300">
                            Get Started
                        </button>
                        </a>
                    </div>

                    {/* Full height Team Image */}
                    <div className="relative w-full h-full min-h-[500px] rounded-2xl overflow-hidden">
                        <Image
                            src={teamImage}
                            alt="Team working on digital marketing"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                </div>

                {/* Right side */}
                <div className="w-full lg:w-3/5 flex flex-col justify-center gap-10">
                    {/* Heading & intro */}
                    <div>
                        <span className="text-blue-400 text-sm font-medium uppercase tracking-wider">
                            Digital Marketing
                        </span>
                        <h2 className="text-4xl md:text-6xl font-bold mt-2 leading-tight">
                            Why <span className="text-blue-500">Digital Marketing</span>  Matters ?
                        </h2>
                        <p className="text-gray-300 mt-4">
                            Hyderabad is one of India’s most competitive markets. From healthcare and education to real estate, restaurants, and SaaS — every business is fighting for visibility.
                        </p>
                    </div>
                    <div className="flex flex-col md:flex-row gap-10 md:gap-4">
                        {/* Services list */}
                        <div className=" w-full md:w-1/2">
                            <h3 className="text-xl font-semibold mb-4">Your challenges might feel familiar:</h3>
                            <ul className="grid grid-cols-1 sm:grid-cols-1 gap-3">
                                {services.map((service, i) => (
                                    <li key={i} className="flex items-center gap-2 text-gray-300">
                                        <CheckCircle2 className="w-5 h-5 text-blue-500" />
                                        {service}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Experience Card */}
                        <div className="bg-gradient-to-br w-full md:w-2/3 from-neutral-900 to-black rounded-2xl p-6 shadow-lg border border-neutral-800">
                            <div className="flex flex-col items-start justify-between gap-4">
                                <div className="flex flex-col justify-center items-center md:flex-row gap-4">
                                    <h4 className="counter-text  text-7xl">14+</h4>
                                    <p className="font-semibold text-xl font-inter">
                                        Years of Experience on <br /> Digital Marketing Services
                                    </p>
                                </div>
                                <p className="text-gray-300 mt-2 text-base font-inter">
                                    The good news? These problems are fixable. Digital marketing makes sure your business is present at the right time, in the right place, with the right message.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
