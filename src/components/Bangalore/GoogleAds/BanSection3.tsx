"use client";
import React from "react";
import { motion } from "framer-motion";
import {
    Search,
    Layers,
    PenTool,
    Target,
    BarChart3,
    RefreshCw,
    ArrowRight
} from "lucide-react";
import { LuScanSearch } from "react-icons/lu";
import { LiaBullhornSolid } from "react-icons/lia";

const BanGoogleProcessCards = () => {
    const processes = [
        {
            icon: LuScanSearch,
            step: "01",
            title: "Discovery and Audit",
            description: "We analyze your current campaigns, market competition, and keyword intent to identify missed opportunities.",
            color: "from-blue-500 to-blue-600",
            bgColor: "bg-blue-50",
            iconColor: "text-blue-600"
        },
        {
            icon: Layers,
            step: "02",
            title: "Campaign Architecture",
            description: "We build structured campaigns separating search, display, remarketing, and performance max based on your business goals.",
            color: "from-green-500 to-green-600",
            bgColor: "bg-green-50",
            iconColor: "text-green-600"
        },
        {
            icon: PenTool,
            step: "03",
            title: "Conversion-Focused Ad Copy",
            description: "We write persuasive ad titles and descriptions that match user intent while maintaining Google Ads best practices.",
            color: "from-purple-500 to-purple-600",
            bgColor: "bg-purple-50",
            iconColor: "text-purple-600"
        },
        {
            icon: LiaBullhornSolid,
            step: "04",
            title: "Advanced Targeting and Bidding",
            description: "Using location filters, device segmentation, and custom audience groups, we ensure your ads reach the right users at the right time.",
            color: "from-orange-500 to-orange-600",
            bgColor: "bg-orange-50",
            iconColor: "text-orange-600"
        },
        {
            icon: BarChart3,
            step: "05",
            title: "Tracking and Analytics Integration",
            description: "We configure GA4, Google Tag Manager, and conversion events so every click and call is tracked.",
            color: "from-indigo-500 to-indigo-600",
            bgColor: "bg-indigo-50",
            iconColor: "text-indigo-600"
        },
        {
            icon: RefreshCw,
            step: "06",
            title: "Continuous Optimization",
            description: "We refine keywords, bids, and ad extensions weekly for higher quality scores and lower CPC.",
            color: "from-pink-500 to-pink-600",
            bgColor: "bg-pink-50",
            iconColor: "text-pink-600"
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15
            }
        }
    };

    const cardVariants = {
        hidden: {
            opacity: 0,
            y: 50,
            scale: 0.9
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        },
        hover: {
            y: -8,
            scale: 1.02,
            transition: {
                duration: 0.3,
                ease: "easeOut"
            }
        }
    };

    const iconVariants = {
        hidden: {
            scale: 0,
            rotate: -180
        },
        visible: {
            scale: 1,
            rotate: 0,
            transition: {
                duration: 0.6,
                ease: "backOut"
            }
        },
        hover: {
            scale: 1.1,
            rotate: 5,
            transition: {
                duration: 0.3,
                ease: "easeOut"
            }
        }
    };

    const stepVariants = {
        hidden: {
            opacity: 0,
            scale: 0.5
        },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        }
    };

    return (
        <section className="py-20 px-6 bg-white">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-6">
                        We Engineer Ads That <span className="text-blue-600">Perform</span>.
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Our Google Ads management process follows a systematic approach designed for maximum ROI and sustainable growth.
                    </p>
                </motion.div>

                {/* Process Cards Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {processes.map((process, index) => (
                        <motion.div
                            key={process.title}
                            className="relative bg-white rounded-3xl p-8 shadow-lg border border-gray-200 overflow-hidden group cursor-pointer h-full"
                            variants={cardVariants}
                            whileHover="hover"
                        >
                            {/* Step Number */}
                            <motion.div
                                className="absolute top-6 right-6 text-7xl font-semibold group-hover:text-white text-gray-100 z-10"
                                variants={stepVariants}
                            >
                                {process.step}
                            </motion.div>

                            {/* Animated Background */}
                            <motion.div
                                className={`absolute inset-0 bg-gradient-to-br ${process.color} opacity-0 group-hover:opacity-100 rounded-3xl`}
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.4, ease: "easeOut" }}
                            />

                            {/* Content */}
                            <div className="relative z-10 h-full flex flex-col">
                                {/* Icon */}
                                <motion.div
                                    className={`w-16 h-16 ${process.bgColor} rounded-2xl flex items-center justify-center mb-6 group-hover:bg-white/20 transition-colors duration-300 border`}
                                    variants={iconVariants}
                                >
                                    <process.icon className={`w-8 h-8 ${process.iconColor} group-hover:text-white transition-colors duration-300`} />
                                </motion.div>

                                {/* Title */}
                                <motion.h3
                                    className="text-xl font-bold text-gray-900 mb-4 group-hover:text-white transition-colors duration-300"
                                >
                                    {process.title}
                                </motion.h3>

                                {/* Description */}
                                <motion.p
                                    className="text-gray-600 leading-relaxed mb-6 group-hover:text-white/90 transition-colors duration-300 flex-grow"
                                >
                                    {process.description}
                                </motion.p>

                                {/* Step Indicator */}
                                <motion.div
                                    className="flex items-center gap-2 text-gray-500 group-hover:text-white transition-colors duration-300 mt-auto"
                                    whileHover={{ x: 5 }}
                                >
                                    <span className="text-sm font-semibold">Step {process.step}</span>
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                                </motion.div>
                            </div>

                            {/* Shine Effect */}
                            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

                            {/* Border Glow */}
                            <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-white/20 transition-all duration-300 pointer-events-none" />
                        </motion.div>
                    ))}
                </motion.div>


                <a href="#form">
                    {/* Bottom CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="text-center mt-16"
                    >
                        <motion.button
                            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-3 mx-auto"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Start Your Google Ads Journey
                            <ArrowRight className="w-5 h-5" />
                        </motion.button>
                        <p className="text-gray-500 text-sm mt-4">
                            Join 200+ Bangalore businesses already scaling with our systematic approach
                        </p>
                    </motion.div>
                </a>
            </div>
        </section>
    );
};

export default BanGoogleProcessCards;