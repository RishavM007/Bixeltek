"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import dashboardImg from "@/assets/UI Screen.jpg";
import Link from "next/link";// replace with your image path
import seodashboardimg from '@/assets/main-image.png'

export default function WhySeo() {
    return (
        <section className="w-full md:mt-20 bg-black text-gray-100 pt-20 md:py-20 overflow-hidden">
            <div className="flex flex-col lg:flex-row items-center lg:items-start">

                {/* LEFT IMAGE */}
                <motion.div
                    initial={{ x: -80, opacity: 0, scale: 0.95 }}
                    whileInView={{ x: 0, opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                    viewport={{ once: true }}
                    className="flex-1 relative w-full lg:w-1/2 h-[300px] md:h-[500px] lg:h-[680px] px-6"
                >
                    <Image
                        src={seodashboardimg}
                        alt="Google Ads Dashboard"
                        className="object-cover object-right rounded-r-2xl shadow-2xl"
                        priority
                    />
                </motion.div>

                {/* RIGHT CONTENT */}
                <motion.div
                    initial={{ x: 80, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                    viewport={{ once: true }}
                    className="flex-1 lg:w-1/2 px-8 justify-center items-center lg:px-16 mt-8 md:mt-10 lg:mt-0"
                >
                    <h2 className="text-4xl md:text-6xl font-bold font-inter leading-snug mb-6">
                       Why <span className="text-blue-500">SEO Matters</span>  for Your Business ?
                    </h2>

                    <p className="text-gray-300 mb-6 font-poppins leading-relaxed max-w-xl">
                        Every day, thousands of potential customers search for businesses like yours. The question is:
                        will they find <span className="font-semibold text-white">you</span> or your competitors?
                    </p>

                    <p className="text-gray-300 mb-6 font-poppins leading-relaxed max-w-xl">
                        SEO (Search Engine Optimization) helps your website appear where it matters most — at the top of
                        Google results. Unlike ads that stop the moment you stop paying, SEO builds long-term visibility
                        and delivers leads month after month.
                    </p>

                    <ul className="space-y-4 mb-8">
                        <li className="flex gap-3">
                            <span className="text-blue-500">✔</span> Build sustainable online visibility
                        </li>
                        <li className="flex gap-3">
                            <span className="text-blue-500">✔</span> Reduce reliance on costly ads
                        </li>
                    </ul>

                    <p className="text-gray-300 mb-6 font-poppins leading-relaxed max-w-xl">
                        For local businesses — whether you run a clinic in Hyderabad, a law firm in Toronto,
                        or a real estate agency in Dubai — SEO is the smartest investment you can make to
                        reduce ad spend and grow sustainably.
                    </p>

                    {/* CTA */}
                    <motion.div>
                        <Link href={'/contact-us'}>
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
