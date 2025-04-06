"use client";
import Image from "next/image";
import image1 from "@/assets/01-3.jpg";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";

export const About = () => {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

    return (
        <section ref={sectionRef} className="py-16 px-6 md:px-16 overflow-hidden bg-black">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
                {/* Left Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="w-full md:w-1/2"
                >
                    <p className="px-4 py-1 mb-4 rounded-lg border w-fit text-white font-poppins text-sm">
                        About Us
                    </p>
                    <h2 className="text-4xl font-bold text-gray-50 leading-tight">
                        We are a leading <br />Digital Marketing Agency
                    </h2>
                    <p className="mt-4 text-gray-100 text-[16px] md:mr-16">
                    Bixeltek is a performance-first digital marketing agency based in Hyderabad, helping businesses grow online with custom strategies that actually work.</p>
                    <p className="py-2 text-gray-100 text-[16px] md:mr-16">We&apos;re not just marketers — we&apos;re your growth partners. Whether you need a high-converting website, better Google rankings, more leads through paid ads, or a stronger brand presence on social media — we bring creative thinking and data-driven execution under one roof. </p>
                    <p className="text-gray-100 text-[16px] md:mr-16">Our team is Google-Certified, ROI-obsessed, and trusted by brands across India,</p>
                    <div className="mt-4 md:mt-10 flex flex-col md:flex-row items-start md:items-center gap-4">
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="border border-gray-200 px-5 py-3 rounded-md text-white flex items-center hover:bg-purple-700 hover:border-purple-700 hover:text-white transition"
                        >
                            <Link href={"/about-us"}>
                            Know More &nbsp; &rarr;
                            </Link>
                        </motion.button>
                        <div className="text-[16px] ml-1 md:ml-20 mt-4 md:mt-0 text-white font-semibold">
                            <p>
                                (6k) <span className="font-bold">Highest rated</span>
                            </p>
                            <p className="text-purple-400 mt-2 font-bold">Upwork ⭐⭐⭐⭐⭐</p>
                        </div>
                    </div>
                </motion.div>

                {/* Right Image */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="md:w-1/2 mt-2 md:mt-0 relative bg-transparent"
                >
                    <Image src={image1} alt="Team" className="rounded-lg w-auto h-[350px] md:h-[400px]" />
                    <motion.a
                        href="https://www.google.com/partners/agency?id=2188074075"
                        target="_blank"
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="mt-10 flex absolute bottom-0 left-[0%] justify-start"
                    >
                        <img
                            src="https://www.gstatic.com/partners/badge/images/2024/PartnerBadgeClickable.svg"
                            alt="Google Partner Badge"
                            className="w-auto h-auto"
                        />
                    </motion.a>
                </motion.div>
            </div>

            
            <motion.div
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: {
                        opacity: 1,
                        y: 0,
                        transition: { staggerChildren: 0.3 },
                    },
                }}
                className="max-w-7xl mx-auto mt-10 grid md:grid-cols-3 gap-6"
            >
                {[
                    { title: "Unique Value Proposition" },
                    { title: "Client-Centric Approach" },
                    { title: "Expert Team Members" },
                ].map((item, index) => (
                    <motion.div
                        key={index}
                        variants={{
                            hidden: { opacity: 0.3, scale: 0.8 },
                            visible: { opacity: 1, scale: 1 },
                        }}
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                        className="flex items-start gap-3 p-10 border-2 rounded-3xl hover:border-purple-500 transition-all duration-300"
                    >
                        <span className="text-purple-600 text-lg">☑</span>
                        <div>
                            <h3 className="text-lg text-white font-semibold">{item.title}</h3>
                            <p className="text-white mt-2 text-[15px]">
                                Clearly articulate what sets your company apart from competitors, such as
                                specialized expertise, innovative solutions, or exceptional customer service.
                            </p>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
};
