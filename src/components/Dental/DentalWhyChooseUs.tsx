"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
    HiOutlineUserGroup,
    HiOutlineSearch,
    HiOutlineCursorClick,
    HiOutlineRefresh,
    HiOutlineTrendingUp,
    HiOutlineSupport,
} from "react-icons/hi";

const benefits = [
    {
        icon: <HiOutlineUserGroup className="w-8 h-8 group-hover:text-blue-500 text-blue-500" />,
        title: "Dental Focused",
        description:
            "We specialize exclusively in dental clinics, ensuring every strategy and campaign is tailored to the unique needs of dental practices.",
        hoverBg: "hover:bg-blue-600",
    },
    {
        icon: <HiOutlineSearch className="w-8 h-8 group-hover:text-green-500 text-green-500" />,
        title: "Proven Results",
        description:
            "Clinics partnering with us consistently see over 120 patient bookings each month, demonstrating the effectiveness of our campaigns.",
        hoverBg: "hover:bg-green-600",
    },
    {
        icon: <HiOutlineCursorClick className="w-8 h-8 group-hover:text-yellow-500 text-yellow-500" />,
        title: "ROI Growth",
        description:
            "Achieve up to 10x return on ad spend within just 2–3 months, helping your clinic grow efficiently and profitably.",
        hoverBg: "hover:bg-yellow-500",
    },
    {
        icon: <HiOutlineSupport className="w-8 h-8 group-hover:text-pink-500 text-pink-500" />,
        title: "Long-Term Partnerships",
        description:
            "Many of our clinics have been with us since day one, highlighting the trust and sustained value we provide.",
        hoverBg: "hover:bg-pink-600",
    },
    {
        icon: <HiOutlineTrendingUp className="w-8 h-8 group-hover:text-indigo-500 text-indigo-500" />,
        title: "Tailored Strategies",
        description:
            "Every clinic receives personalized marketing plans designed to maximize local patient engagement and growth.",
        hoverBg: "hover:bg-indigo-600",
    },
    {
        icon: <HiOutlineRefresh className="w-8 h-8 group-hover:text-text-red-500 text-red-500" />,
        title: "Ongoing Optimization",
        description:
            "Continuous monitoring and refinement of campaigns ensures your clinic stays ahead of competitors month after month.",
        hoverBg: "hover:bg-red-600",
    },
];

const BenefitsSectionDental = () => {
    return (
        <section className="w-full bg-gray-50 text-gray-900 py-20 px-6 md:px-12 lg:px-24">
            <div className="max-w-[95%] mx-auto flex flex-col md:flex-row gap-12 items-start">
                {/* Left Side */}
                <div className="md:w-[34%] flex flex-col justify-start items-start space-y-6">
                    <motion.h2
                        initial={{ y: 40, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.7 }}
                        className="text-4xl md:text-6xl font-bold leading-snug"
                    >
                        Why Clinics Choose <span className="text-blue-500">Bixeltek</span>
                    </motion.h2>

                    <motion.p
                        initial={{ y: 40, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.9 }}
                        className="text-gray-700 text-lg leading-relaxed"
                    >
                        Our specialized approach for dental clinics delivers proven results,
                        exceptional ROI, and long-term partnerships. We focus on growth,
                        patient acquisition, and strategies tailored specifically for dental
                        practices.
                    </motion.p>

                    <Link href={'tel:+919100032301'}>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold shadow-md"
                        >
                            Talk to Our Experts
                        </motion.button>
                    </Link>
                </div>

                {/* Right Side: Grid */}
                <div className="md:w-[66%] grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {benefits.map((benefit, index) => (
                        <motion.div
                            key={index}
                            className={`bg-white rounded-2xl group p-6 flex flex-col items-start gap-4 shadow-lg transition-colors group duration-300 cursor-pointer ${benefit.hoverBg}`}
                            initial={{ y: 40, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                        >
                            <div className="bg-gray-100 p-3 rounded-full">{benefit.icon}</div>
                            <h3 className="text-xl font-semibold group-hover:text-white">{benefit.title}</h3>
                            <p className="text-gray-700 text-sm leading-relaxed group-hover:text-white">{benefit.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BenefitsSectionDental;
