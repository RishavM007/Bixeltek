'use client';

import { motion } from "framer-motion";
import Image from "next/image";
import dashboardImg from "@/assets/Google Ads Dashboard.png";
import { LiaStarOfLifeSolid } from "react-icons/lia";
import Link from "next/link";

export default function GMissSection2() {
    return (
        <section className="w-[95%] md:w-[75%] mx-auto mt-0 bg-black text-gray-100 py-16 overflow-hidden">
            <div className="flex flex-col lg:flex-row-reverse gap-10 md:gap-0 items-center justify-center">

                {/* LEFT IMAGE */}
                <motion.div
                    initial={{ x: -80, opacity: 0, scale: 0.95 }}
                    whileInView={{ x: 0, opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                    viewport={{ once: true }}
                    className="flex-1 w-full lg:w-1/2 h-[500px] md:h-[600px] lg:h-[700px] relative"
                >
                    <Image
                        src={dashboardImg}
                        alt="Google Ads Dashboard"
                        fill
                        className="object-cover object-center rounded-2xl shadow-2xl"
                        priority
                    />
                </motion.div>

                {/* RIGHT CONTENT */}
                <motion.div
                    initial={{ x: 80, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                    viewport={{ once: true }}
                    className="flex-1 lg:w-1/2 px-4 md:px-8 lg:px-2 text-center lg:text-left mt-10 lg:mt-0"
                >
                    <h2 className="text-3xl md:text-6xl font-medium font-inter leading-snug mb-6">
                        Why Most Mississauga Businesses <span className="text-blue-500">Waste Ad Budgets</span>
                    </h2>

                    <p className="text-gray-300 mb-6 font-poppins leading-relaxed max-w-xl mx-auto lg:mx-0">
                        Google Ads works — but only when managed correctly. Many businesses lose money because campaigns are poorly set up or left unoptimized.
                    </p>

                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5 max-w-xl mx-auto lg:mx-0">
                        <li className="flex gap-3 items-center">
                            <LiaStarOfLifeSolid className="text-blue-500 flex-shrink-0" /> High CPC with little ROI
                        </li>
                        <li className="flex gap-3 items-center">
                            <LiaStarOfLifeSolid className="text-blue-500 flex-shrink-0" /> Ads targeting irrelevant searches
                        </li>
                        <li className="flex gap-3 items-center">
                            <LiaStarOfLifeSolid className="text-blue-500 flex-shrink-0" /> Generic ad copy that doesn’t convert
                        </li>
                        <li className="flex gap-3 items-center">
                            <LiaStarOfLifeSolid className="text-blue-500 flex-shrink-0" /> Landing pages that leak leads
                        </li>
                    </ul>

                    <p className="text-gray-300 mb-8 font-poppins leading-relaxed max-w-xl mx-auto lg:mx-0">
                        We turn underperforming campaigns into lead-generation systems.
                    </p>

                    <motion.div>
                        <Link href={"mailto:zee@bixeltek.com"}>
                            <button className="px-7 py-3 rounded-2xl bg-blue-600 text-white font-semibold text-sm shadow-lg hover:bg-blue-700 transition">
                                Talk With Our Google Ads Expert
                            </button>
                        </Link>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
