"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronRight, Star, Target, TrendingUp, MapPin } from "lucide-react";
import { LogoTicker } from "@/sections/LogoTicker";
import { BangaloreLogoTicker } from "./BanLogoTicker";

const GoogleAdsHero = () => {
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
        <section className="relative bg-white py-20 lg:py-40 flex flex-col justify-center items-center  px-6 overflow-hidden">
            <div className="max-w-6xl mx-auto">
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
                            <Target className="w-4 h-4" />
                            Premier Google Ads Agency
                        </span>
                    </motion.div>

                    {/* Main Heading */}
                    <motion.h1
                        variants={itemVariants}
                        className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6 max-w-7xl"
                    >
                        Google Ads Management Company in Bangalore That Drives{" "}
                        <span className="text-blue-600">Real ROI</span>
                    </motion.h1>

                    {/* Subheading */}
                    <motion.p
                        variants={itemVariants}
                        className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl leading-relaxed"
                    >
                        Bixeltek helps Bangalore businesses run high-performing PPC campaigns with advanced targeting, lead tracking, and smart budget optimization.
                    </motion.p>
                      <motion.div
                        variants={itemVariants}
                        className="flex flex-wrap justify-center items-center gap-8 md:gap-12 text-gray-600 mb-12"
                    >
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                                <Star className="w-5 h-5 text-green-600" />
                            </div>
                            <span className="font-semibold text-gray-900">Google Partner Certified</span>
                        </div>

                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                                <TrendingUp className="w-5 h-5 text-blue-600" />
                            </div>
                            <span className="font-semibold text-gray-900">90% Client Retention</span>
                        </div>

                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                                <MapPin className="w-5 h-5 text-purple-600" />
                            </div>
                            <span className="font-semibold text-gray-900">Trusted by Businesses Across Bangalore</span>
                        </div>
                    </motion.div>

                    {/* CTA Buttons */}
                    <motion.div
                        variants={itemVariants}
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
                    >
                        <button
                            onClick={toggleContactForm}
                            className="px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2"
                        >
                            Get My Free PPC Audit
                            <ChevronRight className="w-5 h-5" />
                        </button>

                        <a href="mailto:zee@bixeltek.com">
                            <button className="px-8 py-4 rounded-full border-2 border-gray-300 text-gray-700 font-semibold hover:border-blue-600 hover:text-blue-600 transition-all duration-300 flex items-center gap-2">
                                Talk to a Google Ads Expert
                                <TrendingUp className="w-5 h-5" />
                            </button>
                        </a>
                    </motion.div>


                    {/* Trust Row */}
                  
                    {/* Stats Section */}

                </motion.div>
            </div>
            {/* Background Elements */}
            <div className="absolute inset-0 -z-10 opacity-5">
                <div className="absolute top-10 left-10 w-64 h-64 bg-blue-400 rounded-full blur-3xl"></div>
                <div className="absolute bottom-10 right-10 w-64 h-64 bg-green-400 rounded-full blur-3xl"></div>
            </div>
            <BangaloreLogoTicker />
        </section>
    );
};

export default GoogleAdsHero;