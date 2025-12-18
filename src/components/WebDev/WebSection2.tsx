"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import dashboardImg from "@/assets/UI Screen.jpg";
import Link from "next/link"; // replace with your image path
import seodashboardimg from "@/assets/laptop dentist 2.png";

export default function WhyWebDev() {
    return (
        <section className="w-full relative md:mt-20 bg-black text-gray-100 py-20  overflow-x-hidden">
             <div className="absolute bottom-12 -right-20 w-[500px] h-[500px] bg-blue-500 rounded-full opacity-30 blur-[190px] pointer-events-none"></div>
            <div className="flex flex-col lg:flex-row items-center lg:items-start">

                {/* LEFT IMAGE */}
                <motion.div
                    initial={{ x: -100, opacity: 0, scale: 0.95 }}
                    whileInView={{ x: 0, opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                    viewport={{ once: true }}
                    className="flex-1 relative w-full lg:w-1/2 h-[300px] md:h-[500px] lg:h-[600px]"
                >
                    <Image
                        src={seodashboardimg}
                        alt="Web Design Showcase"
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
                    className="flex-1 lg:w-1/2 px-8 justify-center items-center lg:px-16 md:mt-10 lg:mt-0"
                >
                    <h2 className="text-4xl md:text-6xl font-bold font-inter leading-snug mb-6">
                        Why <span className="text-blue-500">Web Design</span><br></br> Matters for Your Business
                    </h2>

                    <p className="text-gray-300 mb-6 font-poppins leading-relaxed max-w-[650px]">
                        Your website is often the first interaction customers have with your brand. Within
                        seconds, they decide whether to trust you or move on to a competitor. That’s why
                        design is not just about looks — it’s about credibility, usability, and conversions.
                    </p>

                    <ul className="space-y-4 mb-8">
                        <li className="flex gap-3">
                            <span className="text-blue-500">✔</span> Builds trust instantly, giving your business authority.
                        </li>
                        <li className="flex gap-3">
                            <span className="text-blue-500">✔</span> Improves search visibility, as Google prioritizes SEO-friendly, fast websites.
                        </li>
                        <li className="flex gap-3">
                            <span className="text-blue-500">✔</span> Guides users to take action, with clear navigation and call-to-actions.
                        </li>
                        <li className="flex gap-3">
                            <span className="text-blue-500">✔</span> Drives long-term growth, turning your site into a 24/7 sales engine.
                        </li>
                    </ul>

                    <p className="text-gray-300 mb-6 font-poppins leading-relaxed max-w-[650px]">
                        In today’s digital economy, working with a professional web design agency ensures
                        your site is built to meet modern standards and deliver business outcomes.
                    </p>

                    {/* CTA */}
                    <motion.div>
                        <Link href={"/contact-us"}>
                            <button className="px-7 py-3 rounded-2xl bg-blue-600 text-white font-semibold text-sm shadow-lg hover:bg-blue-700 transition">
                                Get a Free Web Design Consultation
                            </button>
                        </Link>
                    </motion.div>
                </motion.div>

            </div>
        </section>
    );
}
