"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import dashboardImg from "@/assets/mississauga dashboard.png";
import { LiaStarOfLifeSolid } from "react-icons/lia";
import Link from "next/link";

export default function WhyGoogleAdsMississauga() {
    return (
        <section className="w-full mt-0 bg-black text-gray-100 py-20 overflow-hidden">
            <div className="flex flex-col lg:flex-row items-center lg:items-start">

                {/* LEFT IMAGE */}
                <motion.div
                    initial={{ x: -80, opacity: 0, scale: 0.95 }}
                    whileInView={{ x: 0, opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                    viewport={{ once: true }}
                    className="flex-1 relative w-full lg:w-1/2 h-[400px] md:h-[500px] ml-[-100px] lg:h-[690px]"
                >
                    <Image
                        src={dashboardImg}
                        alt="Digital Marketing Overview"
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
                    className="flex-1 lg:w-1/2 px-8 lg:px-16 mt-10 lg:mt-10"
                >
                    <h2 className="text-3xl md:text-6xl font-bold font-inter leading-snug mb-6">
                        If You’re Not Online, <span className="text-blue-500">You’re Losing Business</span>
                    </h2>

                    <p className="text-gray-300 mb-6 font-poppins leading-relaxed max-w-2xl">
                        Mississauga is home to thriving industries — from healthcare and home services to retail, logistics,
                        and professional services. But without a strong online presence, even the best businesses get overlooked.
                    </p>

                    {/* Pain Points */}
                    <ul className="space-y-4 mb-8">
                        <li className="flex gap-3">
                            <LiaStarOfLifeSolid className="text-blue-500" /> Fierce competition in local industries
                        </li>
                        <li className="flex gap-3">
                            <LiaStarOfLifeSolid className="text-blue-500" /> Rising ad costs with low ROI
                        </li>
                        <li className="flex gap-3">
                           <LiaStarOfLifeSolid className="text-blue-500" /> Outdated websites that lose customer trust
                        </li>
                        <li className="flex gap-3">
                            <LiaStarOfLifeSolid className="text-blue-500" /> Poor visibility in Google searches
                        </li>
                        <li className="flex gap-3">
                            <LiaStarOfLifeSolid className="text-blue-500" /> Fragmented marketing across multiple vendors
                        </li>
                    </ul>

                    {/* Closing Line */}
                    <p className="text-gray-300 mb-8 font-poppins leading-relaxed max-w-2xl">
                        Digital marketing fixes these issues by ensuring you’re seen, trusted, and chosen when customers search in Mississauga.
                    </p>

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
