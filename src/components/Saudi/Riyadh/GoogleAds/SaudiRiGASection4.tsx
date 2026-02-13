"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const RiyadhGoogleAdsFramework = () => {
    const cards = [
        {
            id: 1,
            title: "Strategy & Structure",
            desc: "Campaigns mapped by service, location, and search intent. SKAGs (Single Keyword Ad Groups) or thematic clusters based on data volume.",
        },
        {
            id: 2,
            title: "Conversion-Centric Design",
            desc: "Landing pages built for your Riyadh audience — mobile-first, bilingual, and tracked with GA4 + Tag Manager.",
        },
        {
            id: 3,
            title: "Continuous Optimization",
            desc: "Weekly performance reviews, negative keyword updates, bid automation, and ad copy testing to improve CTR and reduce CPA.",
        },
        {
            id: 4,
            title: "Reporting & Insights",
            desc: "Monthly performance decks with actionable insights — from keyword trends to ROI tracking and future budget allocation.",
        },
    ];

    return (
        <section className="bg-[#fffdf5]  text-black py-12 md:py-2 px-6 lg:px-20 ">
            <div className=" lg:max-w-[85%] mx-auto text-center">
                {/* Heading */}
                <h2 className="text-3xl md:text-6xl font-semibold mb-6 text-black">
                    Our Google Ads Framework Combines <br /> <span className="text-yellow-500">Strategy, Science, and Scale.</span>
                </h2>

                {/* Subheading */}
                <p className="text-lg text-gray-950 max-w-3xl mx-auto mb-12">
                    We manage every campaign like an investment — tracking each click, lead, and riyal spent.
                    Our 3-tier framework powers continuous growth.
                </p>

                {/* Cards Row */}
                <div className="flex flex-col lg:flex-row justify-center items-center gap-10 md:gap-12">
                    {cards.map((card, index) => (
                        <motion.div
                            key={card.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className="relative w-[95%] lg:w-1/4 h-[420px] flex flex-col justify-center items-center rounded-2xl overflow-hidden group"
                        >
                            {/* Animated rotating gradient border */}
                            <motion.div
                                className="absolute w-[120px] h-[130%] bg-gradient-to-b from-yellow-500 to-green-500"
                                animate={{ rotate: 360 }}
                                transition={{
                                    repeat: Infinity,
                                    duration: 3,
                                    ease: "linear",
                                }}
                            ></motion.div>

                            {/* Inner Card */}
                            <div className="absolute inset-[3px] bg-neutral-100 rounded-2xl flex flex-col justify-evenly items-center text-center p-5">
                                <div>
                                    <h3 className="text-3xl font-medium text-black mb-3">{card.title}</h3>
                                    <p className="text-gray-900 text-base leading-relaxed">{card.desc}</p>

                                </div>

                                <Link href={"#form"}>
                                    <button className="px-7 mt-4 py-3 rounded-full bg-gradient-to-tr from-green-500 via-green-700 to-green-950 hover:bg-gradient-to-tr hover:from-green-950 hover:via-green-700 hover:to-green-500 text-white font-semibold text-sm shadow-lg transition">
                                        Get a Free PPC Audit
                                    </button>
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Closing Statement */}
                <p className="mt-14 text-lg text-gray-950 max-w-3xl mx-auto">
                    This structure turns chaos into clarity — your ad spend starts to work like{" "}
                    <span className="text-yellow-400 font-medium">capital</span>, not expense.
                </p>
            </div>
        </section>
    );
};

export default RiyadhGoogleAdsFramework;
