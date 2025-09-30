"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import dashboardImg from "@/assets/13-2-seo-high-quality-png.png";
import { LiaStarOfLifeSolid } from "react-icons/lia";
import Link from "next/link";

export default function WhySEOMississauga() {
    return (
        <section className="w-full mt-0 bg-black text-gray-100 py-20 overflow-hidden">
            <div className="flex flex-col lg:flex-row items-center lg:items-start">

                {/* LEFT IMAGE */}
                <motion.div
                    initial={{ x: -80, opacity: 0, scale: 0.95 }}
                    whileInView={{ x: 0, opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                    viewport={{ once: true }}
                    className="flex-1 relative w-full lg:w-1/2 h-[400px] md:h-[500px] lg:h-[620px]"
                >
                    <Image
                        src={dashboardImg}
                        alt="SEO Dashboard Mississauga"
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
                    {/* Heading */}
                    <h2 className="text-3xl md:text-6xl font-bold font-inter leading-snug mb-6">
                        Without SEO, <span className="text-blue-500">Your Business Is Invisible</span>
                    </h2>

                    {/* Paragraph */}
                    <p className="text-gray-300 mb-6 font-poppins leading-relaxed max-w-2xl">
                        Most Mississauga customers search online before making a decision. 
                        If your business isn’t ranking on page one, you’re losing customers every single day. 
                        Paid ads can bring immediate visibility, but SEO builds long-term credibility and compounding traffic.
                    </p>

                    {/* Benefits of SEO */}
                    <ul className="space-y-4 mb-8">
                        <li className="flex gap-3">
                            <LiaStarOfLifeSolid className="text-blue-500" /> Higher rankings in local searches (“near me” searches dominate Mississauga)
                        </li>
                        <li className="flex gap-3">
                            <LiaStarOfLifeSolid className="text-blue-500" /> Consistent leads without paying per click
                        </li>
                        <li className="flex gap-3">
                            <LiaStarOfLifeSolid className="text-blue-500" /> Builds authority and trust with customers
                        </li>
                        <li className="flex gap-3">
                            <LiaStarOfLifeSolid className="text-blue-500" /> Long-term ROI that compounds over time
                        </li>
                    </ul>

                    {/* CTA */}
                    <motion.div>
                        <Link href={"#form"}>
                            <button className="px-7 py-3 rounded-2xl bg-blue-600 text-white font-semibold text-sm shadow-lg hover:bg-blue-700 transition">
                                Get a Free SEO Audit
                            </button>
                        </Link>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
