"use client";
import Image from "next/image";
import { Check } from "lucide-react";
import logFileImg from "@/assets/All_SEO_data_sources_1d5f013db2.webp"; // replace with your actual image

export default function LogFileAnalysisSection() {
    return (
        <section className="relative px-6 lg:px-20 py-24 bg-black">
            <div className="lg:max-w-[85%] mx-auto flex flex-col-reverse lg:flex-row items-center justify-between">
                {/* Left Content */}
                <div className="lg:w-1/2 flex flex-col items-start space-y-6 text-white">
                    {/* Tagline */}
                    <span className="inline-block bg-blue-700 text-white text-sm font-semibold px-4 py-1 rounded-full shadow-md">
                        Because Data Always Tells the Truth
                    </span>

                    {/* Heading */}
                    <h2 className="text-3xl md:text-5xl font-semibold leading-tight">
                        Log File Analysis That Reveals{" "}
                        <span className="text-blue-600">What Google Really Sees</span>
                    </h2>

                    {/* Description */}
                    <p className="md:text-base text-sm text-gray-100">
                        No matter what your SEO tools say, log files show reality. We analyze actual
                        server interactions to detect unseen issues that affect visibility.
                        Each issue is mapped and corrected to streamline indexation and enhance site health.
                    </p>

                    {/* Detection Section */}
                    <div className="mt-6">
                        <h3 className="text-xl font-semibold text-blue-500 mb-3">
                            What We Detect
                        </h3>
                        <ul className="space-y-2 text-gray-100">
                            <li className="flex items-start gap-2">
                                <Check className="w-5 h-5 text-blue-500 mt-[2px]" />
                                Orphaned URLs (no internal links).
                            </li>
                            <li className="flex items-start gap-2">
                                <Check className="w-5 h-5 text-blue-500 mt-[2px]" />
                                Crawl loops and redirect chains.
                            </li>
                            <li className="flex items-start gap-2">
                                <Check className="w-5 h-5 text-blue-500 mt-[2px]" />
                                Over-indexed or thin content pages.
                            </li>
                        </ul>
                    </div>

                    {/* Ending Line */}
                    <p className="mt-8 text-gray-400 italic text-sm md:text-base max-w-lg">
                        You’ll know exactly how Googlebot behaves — and how to guide it.
                    </p>
                </div>

                {/* Right Image */}
                <div className="lg:w-1/2 flex justify-center mb-12 md:mb-0">
                    <div className="relative  md:w-[690px] overflow-hidden rounded-2xl shadow-lg">
                        <Image
                            src={logFileImg}
                            alt="Log File Analysis Dashboard"
                            className="object-cover"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}
