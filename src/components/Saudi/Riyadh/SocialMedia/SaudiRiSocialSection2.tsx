"use client";
import Image from "next/image";
import React from "react";
import phone from "@/assets/creative-reels-composition.png";

const SocialStrategySection = () => {
    return (
        <section className="bg-white mb-[-2px] md:mb-0 px-6 pb-20 lg:pb-56 text-black mt-[-2px] md:mt-0 md:py-20 flex flex-col-reverse lg:flex-row items-center relative">
            {/* LEFT — TEXT */}
            <div className="w-full md:mt-20 lg:pl-40 lg:w-1/2 space-y-6 z-10">
                <h2 className="text-3xl md:text-6xl font-medium text-black leading-tight">
                    Posting Randomly Isn’t a Strategy —{" "}
                    <span className="text-blue-500">It’s a Guess.</span>
                </h2>

                <p className="text-lg text-gray-600 leading-relaxed">
                    Too many businesses treat social media like a checkbox — post, boost,
                    repeat. That’s why most pages look busy but don’t grow revenue.
                </p>

                <ul className="list-none space-y-2 text-gray-900">
                    <li>• No consistent brand storytelling.</li>
                    <li>• Poor ad targeting — wasted budget.</li>
                    <li>• Weak creative design and copy.</li>
                    <li>• No retargeting or funnel setup.</li>
                    <li>• Zero tracking to measure ROI.</li>
                </ul>

                <p className="text-lg text-gray-800">
                    <span className="text-blue-600 font-semibold">Bixeltek</span> fixes
                    this by combining content, paid ads, and analytics into one marketing
                    engine that sells, not just speaks.
                </p>
                <a href="#form">
                    <button

                        className="px-6 py-3 mt-6 rounded-full bg-gradient-to-tr shadow-2xl border-2 border-sky-400 shadow-sky-500 hover:shadow-none bg-blue-500 text-white font-medium hover:bg-blue-600 transition duration-300"
                    >
                        Get A Free Quote
                    </button>
                </a>
            </div>

            {/* RIGHT — IMAGE */}
            <div className="w-full lg:w-1/2 h-[500px]  md:pl-10 relative">
                <div className="absolute inset-0 transform scale-[1.6] md:scale-[1.8] translate-x-5 md:translate-x-10">
                    <Image
                        src={phone}
                        alt="Social Media Marketing Strategy"
                        fill
                        className="object-cover object-center"
                        priority
                    />
                </div>
            </div>
        </section>
    );
};

export default SocialStrategySection;
