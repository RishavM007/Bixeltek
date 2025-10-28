"use client";
import React from "react";
import Image from "next/image";
import { Check } from "lucide-react";

// ✅ Replace this image with your actual storefront-related image
import storefrontImage from "@/assets/ecommerce.png";

const EcommerceSystemSection = () => {
    return (
        <section className="bg-black text-white max-w-[90%] mx-auto py-20 px-6 md:px-20 flex flex-col md:flex-row items-center gap-12">
            {/* Left Side - Image - ENLARGED */}
            <div className="w-full md:w-1/2 relative">
                <div className="relative  rounded-2xl shadow-xl overflow-hidden">
                    <Image
                        src={storefrontImage}
                        alt="E-commerce System of Trust"
                        className="object-cover h-[200px] md:h-[400px] w-full"
                        priority
                    />
                </div>
            </div>

            {/* Right Side - Content */}
            <div className="w-full md:w-1/2 flex flex-col justify-center items-start">
                <h2 className="text-2xl md:text-4xl font-inter font-medium mb-6 leading-tight">
                    Your Storefront Is No Longer a Website — <br className="hidden md:block" />
                    It&apos;s a System of <span className="text-blue-500">Trust, Data, and Psychology</span>
                </h2>

                <p className="text-gray-300 font-poppins text-base md:text-lg leading-relaxed mb-6">
                    In today&apos;s commerce landscape, a website is not an online brochure; it&apos;s a behavioral engine.
                    Every pixel, query, and millisecond plays into how your customer decides to buy.
                </p>

                <p className="text-gray-300 font-poppins text-base md:text-lg leading-relaxed mb-6">
                    E-commerce success is no longer about who has the prettiest theme — it&apos;s about:
                </p>

                {/* Feature Points */}
                <ul className="flex flex-col gap-4 mb-8 text-gray-200">
                    <li className="flex items-start gap-3">
                        <Check className="text-blue-500 w-6 h-6 mt-1" />
                        <span>
                            <strong className="text-white">Speed:</strong> Google ranks it, buyers feel it, revenue depends on it.
                        </span>
                    </li>
                    <li className="flex items-start gap-3">
                        <Check className="text-blue-500 w-6 h-6 mt-1" />
                        <span>
                            <strong className="text-white">Trust:</strong> Secure checkouts, transparent shipping, social proof, and visible guarantees.
                        </span>
                    </li>
                    <li className="flex items-start gap-3">
                        <Check className="text-blue-500 w-6 h-6 mt-1" />
                        <span>
                            <strong className="text-white">Relevance:</strong> Smart product taxonomy, AI-powered search, and intent-driven recommendations.
                        </span>
                    </li>
                    <li className="flex items-start gap-3">
                        <Check className="text-blue-500 w-6 h-6 mt-1" />
                        <span>
                            <strong className="text-white">Data Intelligence:</strong> Analytics that show where revenue leaks — not just where clicks happen.
                        </span>
                    </li>
                </ul>

                <p className="text-gray-300 font-poppins text-base md:text-lg leading-relaxed">
                    Bixeltek builds the backbone for all of that. Our team doesn&apos;t just install a store;
                    we engineer the architecture of digital selling.
                </p>
            </div>
        </section>
    );
};

export default EcommerceSystemSection;