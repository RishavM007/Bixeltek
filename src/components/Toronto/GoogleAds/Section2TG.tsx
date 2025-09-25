"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import dashboardImg from "@/assets/toronto google ads img 1.webp";
import Link from "next/link";

export default function WhyGoogleAdsToronto() {
    return (
        <section className="w-full mt-0 bg-black text-gray-100 py-20 overflow-hidden">
            <div className="flex flex-col lg:flex-row items-center lg:items-start">

                {/* LEFT IMAGE */}
                <motion.div
                    initial={{ x: -80, opacity: 0, scale: 0.95 }}
                    whileInView={{ x: 0, opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                    viewport={{ once: true }}
                    className="flex-1 relative w-full lg:w-1/2 h-[400px] md:h-[500px] lg:h-[500px]"
                >
                    <Image
                        src={dashboardImg}
                        alt="Google Ads Overview"
                        fill
                        className="object-contain object-left rounded-r-2xl shadow-2xl"
                        priority
                    />

                </motion.div>

                {/* RIGHT CONTENT */}
                <motion.div
                    initial={{ x: 80, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                    viewport={{ once: true }}
                    className="flex-1 lg:w-1/2 px-8 lg:px-16 mt-10 lg:mt-0"
                >
                    <h2 className="text-3xl md:text-6xl font-bold font-inter leading-snug mb-6">
                        What Is Google Ads <span className="text-blue-500">and Why Does It Matter?</span>
                    </h2>

                    <p className="text-gray-300 mb-6 font-poppins leading-relaxed max-w-2xl">
                        Google Ads is Google’s online advertising platform that lets businesses appear at the top of search results,
                        on YouTube, across websites, and even on Gmail. Instead of waiting months for SEO results, Google Ads helps you:
                    </p>

                    <ul className="space-y-4 mb-8">
                        <li className="flex gap-3">
                            <span className="text-blue-500">✔</span> Reach people at the exact moment they search for your service
                            (“dentist in Toronto,” “roof repair near me,” “best ecommerce store”).
                        </li>
                        <li className="flex gap-3">
                            <span className="text-blue-500">✔</span> Control your budget with pay-per-click (PPC) bidding.
                        </li>
                        <li className="flex gap-3">
                            <span className="text-blue-500">✔</span> Track clicks, calls, and conversions in real-time.
                        </li>
                        <li className="flex gap-3">
                            <span className="text-blue-500">✔</span> Scale fast — from local campaigns in Toronto to Canada-wide growth.
                        </li>
                    </ul>

                    {/* CTA */}
                    <motion.div>
                        <Link href={"#form"}>
                            <button className="px-7 py-3 rounded-2xl bg-blue-600 text-white font-semibold text-sm shadow-lg hover:bg-blue-700 transition">
                                Book a Free Strategy Call
                            </button>
                        </Link>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
