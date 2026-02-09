"use client";
import Image from "next/image";
import { Check } from "lucide-react";
import aiOverviewImg from "@/assets/SEO Dashboard.png"; // 🖼️ Replace with your actual image

export default function AIFutureProofSection() {
    return (
        <section className="relative px-0 md:px-20 py-24 bg-black">
            <div className="max-w-[90%] md:max-w-[85%] mx-auto flex flex-col lg:flex-row-reverse items-center justify-between">
                {/* Right Content */}
                <div className="lg:w-1/2 flex flex-col items-start space-y-6 text-white">
                    {/* Tagline */}
                    <span className="inline-block bg-blue-700 text-white text-sm font-semibold px-4 py-1 rounded-full shadow-md">
                        Preparing for Google’s AI Overviews and Beyond
                    </span>

                    {/* Heading */}
                    <h2 className="text-3xl md:text-5xl font-semibold leading-tight">
                        Future-Proofing SEO for{" "}
                        <span className="text-blue-500">AI-Driven Search</span>
                    </h2>

                    {/* Description */}
                    <p className="text-lg text-gray-100 max-w-lg">
                        Search behavior is changing — and SEO must evolve with it. With AI-driven
                        search results (SGE, Gemini, Perplexity, ChatGPT), structured and factual
                        clarity will define visibility.
                    </p>

                    {/* Features / Fixes */}
                    <div className="mt-6">
                        <h3 className="text-xl font-semibold text-blue-500 mb-3">
                            We Future-Proof Your Website By
                        </h3>
                        <ul className="space-y-2 text-gray-100">
                            <li className="flex items-start gap-2">
                                <Check className="w-5 h-5 text-blue-500 mt-[2px]" />
                                Implementing machine-readable entity schemas for brand, products, and expertise.
                            </li>
                            <li className="flex items-start gap-2">
                                <Check className="w-5 h-5 text-blue-500 mt-[2px]" />
                                Writing fact-rich micro-content optimized for snippet extraction.
                            </li>
                            <li className="flex items-start gap-2">
                                <Check className="w-5 h-5 text-blue-500 mt-[2px]" />
                                Building internal knowledge graphs to help LLMs connect your brand context.
                            </li>
                            <li className="flex items-start gap-2">
                                <Check className="w-5 h-5 text-blue-500 mt-[2px]" />
                                Eliminating duplication that confuses AI summarizers.
                            </li>
                        </ul>
                    </div>

                    {/* Ending Line */}
                    <p className="mt-8 text-gray-400 italic text-sm md:text-base max-w-lg">
                        When AI starts citing sources — you want to be one of them.
                    </p>
                </div>

                {/* Left Image */}
                <div className="lg:w-1/2 flex justify-center mt-12 md:mt-0">
                    <div className="relative w-[90%] md:w-[85%] overflow-hidden rounded-2xl shadow-lg">
                        <Image
                            src={aiOverviewImg}
                            alt="AI Overview Optimization"
                            width={700}
                            height={500}
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
