"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronRight, MapPin, Zap, Target } from "lucide-react";
import Link from "next/link";

const HeroBangalore = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleContactForm = () => {
        setIsVisible((prev) => !prev);
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    return (
        <section className="relative bg-white py-32 lg:py-40 px-6 overflow-hidden">
            <div className="lg:max-w-[85%] mx-auto">
                <motion.div
                    className="flex flex-col items-center text-center"
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                >
                    {/* Badge */}
                    <motion.div
                        variants={itemVariants}
                        className="mb-8"
                    >
                        <span className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-medium border border-blue-100">
                            <MapPin className="w-4 h-4" />
                            Bangalore Focused Marketing
                        </span>
                    </motion.div>

                    {/* Main Heading */}
                    <motion.h1
                        variants={itemVariants}
                        className="text-3xl md:text-6xl font-bold text-gray-900 leading-tight mb-8  md:max-w-[85%] mx-auto"
                    >
                        Digital Marketing Agency in Bangalore That  <br className="hidden md:block" />{" "}
                        <span className="text-blue-600">Delivers Performance and Precision</span>
                    </motion.h1>

                    {/* Body Text */}
                    <motion.div
                        variants={itemVariants}
                        className="space-y-6 mb-12 md:max-w-[85%] mx-auto"
                    >
                        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                           From Koramangala to Whitefield and Indiranagar, Bixeltek helps Bangalore businesses drive visibility, generate qualified leads, and grow revenue through data-driven marketing systems.
                        </p>
                    </motion.div>

                    {/* Business Types */}
                    <motion.div
                        variants={itemVariants}
                        className="mb-5"
                    >
                        <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">
                            Trusted By Businesses Across Bangalore
                        </p>
                        <div className="flex flex-wrap justify-center gap-4 text-sm">
                            <span className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full border border-blue-200">
                                B2B and B2C
                            </span>
                            <span className="px-4 py-2 bg-green-50 text-green-700 rounded-full border border-green-200">
                                Dental Clinics
                            </span>
                            <span className="px-4 py-2 bg-purple-50 text-purple-700 rounded-full border border-purple-200">
                               Realestate Agencies
                            </span>
                            <span className="px-4 py-2 bg-orange-50 text-orange-700 rounded-full border border-orange-200">
                                Hospitality
                            </span>
                            <span className="px-4 py-2 bg-red-50 text-red-700 rounded-full border border-red-200">
                                Healthcare
                            </span>
                            <span className="px-4 py-2 bg-yellow-50 text-yellow-700 rounded-full border border-red-200">
                                Manufacturing
                            </span>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.2 }}
                        className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6 mb-6 pb-8  max-w-5xl"
                    >
                        <div className="text-center">
                            <div className="text-3xl font-bold text-blue-600 mb-2">3.2M+</div>
                            <div className="text-sm text-gray-600">Bangalore Digital Users</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-green-600 mb-2">67%</div>
                            <div className="text-sm text-gray-600">Higher Search Intent</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-purple-600 mb-2">2.4x</div>
                            <div className="text-sm text-gray-600">Faster Conversion Rate</div>
                        </div>
                    </motion.div>

                    {/* CTA Buttons */}
                    <motion.div
                        variants={itemVariants}
                        className="flex flex-col md:flex-row gap-4 justify-center items-center"
                    >
                    <Link href='/contact-us'>
                        <button
                            onClick={toggleContactForm}
                            className="px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2"
                        >
                            Get  Marketing Audit
                            <ChevronRight className="w-5 h-5" />
                        </button>
                        </Link>
                        
                        <a href="mailto:zee@bixeltek.com">
                            <button className="px-8 py-4 rounded-full border-2 border-gray-300 text-gray-700 font-semibold hover:border-blue-600 hover:text-blue-600 transition-all duration-300 flex items-center gap-2">
                                Talk to  Specialist
                                <MapPin className="w-5 h-5" />
                            </button>
                        </a>
                    </motion.div>
                </motion.div>
            </div>

            {/* Background Pattern */}
            <div className="absolute inset-0 -z-10 opacity-5">
                <div className="absolute top-0 left-0 w-72 h-72 bg-blue-400 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 right-0 w-72 h-72 bg-green-400 rounded-full blur-3xl"></div>
            </div>
        </section>
    );
};

export default HeroBangalore;