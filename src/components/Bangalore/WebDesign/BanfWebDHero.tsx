"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronRight, Palette, Zap, TrendingUp, ArrowRight } from "lucide-react";

const BangaloreWebsiteDesignHero = () => {
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
        <section className="relative h-[110vh] flex flex-col justify-center items-center bg-white py-10 lg:py-14 px-6 overflow-hidden">
            <div className="max-w-[85%] mx-auto">
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
                        <span className="inline-flex items-center gap-2 px-4 py-2 bg-purple-50 text-purple-600 rounded-full text-sm font-medium border border-purple-100">
                            <Palette className="w-4 h-4" />
                            Premier Web Design Agency
                        </span>
                    </motion.div>

                    {/* Main Heading */}
                    <motion.h1
                        variants={itemVariants}
                        className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6 max-w-7xl"
                    >
                        Website Design Company in Bangalore Focused on{" "}
                        <span className="text-purple-600">Performance and Conversions</span>
                    </motion.h1>

                    {/* Subheading */}
                    <motion.p
                        variants={itemVariants}
                        className="text-lg md:text-xl text-gray-600 mb-8 max-w-6xl leading-relaxed"
                    >
                        Bixeltek builds websites that combine visual excellence with measurable business impact. From corporate sites to e-commerce platforms, our Bangalore team delivers design systems built to convert.
                    </motion.p>
                     <motion.div
                        variants={itemVariants}
                        className="flex flex-wrap justify-center items-center gap-8 md:gap-12 text-gray-600 mb-12"
                    >
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                                <Palette className="w-5 h-5 text-purple-600" />
                            </div>
                            <span className="font-semibold text-gray-900">Design & Development Experts</span>
                        </div>
                        
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                                <Zap className="w-5 h-5 text-blue-600" />
                            </div>
                            <span className="font-semibold text-gray-900">High-Speed Websites</span>
                        </div>
                        
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                                <TrendingUp className="w-5 h-5 text-green-600" />
                            </div>
                            <span className="font-semibold text-gray-900">Conversion-Optimized Frameworks</span>
                        </div>
                    </motion.div>

                    {/* CTA Buttons */}
                    <motion.div
                        variants={itemVariants}
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
                    >
                        <button
                            onClick={toggleContactForm}
                            className="px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 to-purple-700 text-white font-semibold hover:from-purple-700 hover:to-purple-800 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2"
                        >
                            Get a Free Website Audit
                            <ChevronRight className="w-5 h-5" />
                        </button>
                        
                        <a href="mailto:zee@bixeltek.com">
                            <button className="px-8 py-4 rounded-full border-2 border-gray-300 text-gray-700 font-semibold hover:border-purple-600 hover:text-purple-600 transition-all duration-300 flex items-center gap-2">
                                Talk to Our Design Team
                                <Palette className="w-5 h-5" />
                            </button>
                        </a>
                    </motion.div>

                    {/* Trust Row */}
                   

                    {/* Stats Section */}
                   
                    {/* Technology Stack */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1 }}
                        className="mt-8"
                    >
                        <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">
                            Built With Modern Technology
                        </p>
                        <div className="flex flex-wrap justify-center gap-3 text-sm">
                            <span className="px-3 py-2 bg-gray-100 text-gray-700 rounded-full border">
                                Next.js & React
                            </span>
                            <span className="px-3 py-2 bg-gray-100 text-gray-700 rounded-full border">
                                WordPress
                            </span>
                            <span className="px-3 py-2 bg-gray-100 text-gray-700 rounded-full border">
                                Shopify
                            </span>
                            <span className="px-3 py-2 bg-gray-100 text-gray-700 rounded-full border">
                                Webflow
                            </span>
                        </div>
                    </motion.div>
                </motion.div>
            </div>

            {/* Background Elements with Purple Hints */}
            <div className="absolute inset-0 -z-10 opacity-5">
                <div className="absolute top-10 left-10 w-64 h-64 bg-purple-400 rounded-full blur-3xl"></div>
                <div className="absolute bottom-10 right-10 w-64 h-64 bg-blue-400 rounded-full blur-3xl"></div>
            </div>

            {/* Purple Accent Elements */}
           
        </section>
    );
};

export default BangaloreWebsiteDesignHero;