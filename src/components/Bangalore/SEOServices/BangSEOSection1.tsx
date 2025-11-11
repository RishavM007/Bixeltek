"use client";

import React from "react";
import Image from "next/image";
import seoImg from "@/assets/SEO Dashboard.png"; // 🔁 replace with your image
import { ChevronRight } from "lucide-react";

const SEOVisibilitySection = () => {
    return (
        <section className="w-[95%] md:w-[85%] mx-auto py-10  flex flex-col md:flex-row items-center justify-between gap-12 md:gap-20">
            {/* LEFT — Image */}
            <div className="relative w-full md:w-1/2 h-[320px] md:h-[520px] rounded-2xl overflow-hidden">
                <Image
                    src={seoImg}
                    alt="SEO visibility and rankings dashboard"
                    fill
                    className="object-cover object-center"
                    priority
                />
            </div>

            {/* RIGHT — Content */}
            <div className="w-full md:w-1/2 text-left flex flex-col justify-center">
                <h2 className="text-3xl md:text-5xl font-semibold text-gray-900 leading-tight mb-6">
                    Visibility Creates Opportunity —{" "}
                    <span className="text-red-600">Let’s Help You Be Found First.</span>
                </h2>

                <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6">
                    Bangalore’s customers live online. They research, compare, and decide within seconds.
                    If your business doesn’t appear on page one, you’re losing leads to competitors who do.
                </p>

                <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6">
                    <span className="font-semibold text-gray-900">Bixeltek’s SEO framework</span> is built for performance.
                    We combine technical accuracy, topical depth, and local authority so your brand shows up whenever
                    and wherever your audience searches.
                </p>

                <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                    Whether you run a tech startup in HSR Layout or a clinic in Indiranagar, our SEO services ensure
                    your website ranks for the keywords and locations that matter most.
                </p>

                <button
                    className="p-[1px] w-fit mt-6 rounded-full bg-gradient-to-r from-red-300 via-red-400 via-red-600 to-red-950 text-white font-semibold transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2"
                >
                    <span className="bg-white text-black flex flex-row gap-2 px-5 py-3 rounded-full">
                        Get a Free SEO Audit
                         <ChevronRight className="w-5 h-5" />
                    </span>                   
                </button>
            </div>
        </section>
    );
};

export default SEOVisibilitySection;
