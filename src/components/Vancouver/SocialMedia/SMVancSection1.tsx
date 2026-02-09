"use client";
import React from "react";
import Image from "next/image";
import socialImg1 from "@/assets/smv1.jpg";
import socialImg2 from "@/assets/smv2.jpg";
import socialImg3 from "@/assets/smv3.jpg";
import { Check } from "lucide-react";
import { motion } from "framer-motion";
import rotimage from '@/assets/Text-Round.png'

export default function VancouverSocialCitySection() {
    const benefits = [
        "Build consistent brand awareness and trust",
        "Drive traffic and conversions through paid ads",
        "Engage your audience with creative storytelling",
        "Create repeat customers through remarketing and loyalty campaigns",
    ];

    return (
        <section className="bg-black text-white py-24 px-6">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-16">

                {/* ✅ LEFT TEXT CONTENT */}
                <div className="flex-1">
                    <h2 className="text-3xl md:text-6xl font-bold leading-tight mb-6">
                        Vancouver Is a Social City — <span className="text-blue-500">Your Business Should Be Too</span>
                    </h2>

                    <p className="text-gray-300 text-base md:text-lg mb-8">
                        Over 80% of Vancouver consumers use social media to discover new brands, compare services,
                        and make purchase decisions. Without a strong presence, you’re leaving customers to find —
                        and choose — your competitors instead.
                    </p>

                    {/* ✅ BENEFITS LIST */}
                    <ul className="space-y-4 mb-10">
                        {benefits.map((benefit, i) => (
                            <li key={i} className="flex items-start gap-3">
                                <Check className="text-blue-500" />
                                <span className="text-gray-200">{benefit}</span>
                            </li>
                        ))}
                    </ul>

                    {/* ✅ CLOSING LINE */}
                    <p className="italic text-gray-400 border-l-4 border-blue-500 pl-4">
                        Social media isn’t about posting often — it’s about posting with purpose.
                    </p>
                    <div className="mt-10 flex flex-wrap gap-4">
                        <a href="mailto:zee@bixeltek.com">
                            <button className="px-6 py-3 rounded-full bg-blue-600 text-white font-medium hover:bg-blue-700 transition">
                                Talk With Our Social Media Consultant
                            </button>
                        </a>
                    </div>
                </div>

                {/* ✅ RIGHT IMAGE */}
                <div className="flex-1 w-full lg:w-1/2 relative flex flex-col md:flex-row justify-center items-stretch gap-5">
                    <motion.div
                        className="absolute left-[35%] top-[37%]  -translate-x-1/2 -translate-y-1/2 z-20"
                        animate={{ rotate: 360 }}
                        transition={{
                            repeat: Infinity,
                            ease: "linear",
                            duration: 12, // Adjust rotation speed (lower = faster)
                        }}
                    >
                        <Image
                            src={rotimage}
                            alt="Rotating graphic"
                            width={190}
                            height={190}
                            className=" hidden lg:block select-none pointer-events-none"
                        />
                    </motion.div>
                    {/* LEFT — Ground-touching main image */}
                    <div className="w-full md:w-1/2 flex items-end">
                        <Image
                            src={socialImg1}
                            alt="Social media marketing in Vancouver"
                            width={600}
                            height={700}
                            className="w-[90%] mx-auto md:w-full md:h-auto rounded-2xl shadow-lg hover:scale-[1.02] transition-transform duration-500 object-cover"
                        />
                    </div>

                    {/* RIGHT — Two stacked images */}
                    <div className="hidden md:flex w-full md:w-1/2 flex-col gap-5">
                        <div className="flex-1">
                            <Image
                                src={socialImg2}
                                alt="Social media marketing in Vancouver"
                                width={600}
                                height={400}
                                className="w-full h-full object-cover rounded-2xl shadow-lg hover:scale-[1.02] transition-transform duration-500"
                            />
                        </div>
                        <div className="flex-1">
                            <Image
                                src={socialImg3}
                                alt="Social media marketing in Vancouver"
                                width={600}
                                height={400}
                                className="w-full h-full object-cover rounded-2xl shadow-lg hover:scale-[1.02] transition-transform duration-500"
                            />
                        </div>
                    </div>
                </div>


            </div>
        </section>
    );
}
