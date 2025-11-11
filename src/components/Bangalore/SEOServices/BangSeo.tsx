"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronRight, Search, Target, MapPin, Star, TrendingUp } from "lucide-react";
import { SEOButtonContactForm } from "@/components/SEOPopupForm";
import { BangaloreLogoTicker } from "../GoogleAds/BanLogoTicker";

const BangaloreSEOHero = () => {
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
        <>
            <section className="relative h-auto md:h-[120vh] flex flex-col justify-center items-center bg-white pt-40 lg:pt-32 px-6 overflow-hidden">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        className="flex flex-col items-center text-center"
                        initial="hidden"
                        animate="visible"
                        variants={containerVariants}
                    >
                        {/* Badge */}

                        {/* Main Heading */}
                        <motion.h1
                            variants={itemVariants}
                            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6 max-w-5xl"
                        >
                            SEO Company in Bangalore Focused on{" "}
                            <span className="text-red-600">Sustainable Growth</span>
                        </motion.h1>

                        {/* Subheading */}
                        <motion.p
                            variants={itemVariants}
                            className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl leading-relaxed"
                        >
                            From Koramangala to Whitefield, Bixeltek helps Bangalore businesses dominate Google search results with technical precision, local optimization, and data-driven strategy.
                        </motion.p>
                        <motion.div
                            variants={itemVariants}
                            className="flex flex-wrap justify-center items-center gap-8 md:gap-12 text-gray-600 mb-12"
                        >
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                                    <Star className="w-5 h-5 text-blue-600" />
                                </div>
                                <span className="font-semibold text-sm md:text-base text-gray-900">Google Partner Certified</span>
                            </div>

                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                                    <TrendingUp className="w-5 h-5 text-purple-600" />
                                </div>
                                <span className="font-semibold text-sm md:text-base text-gray-900">Entity-Based SEO Framework</span>
                            </div>

                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                                    <MapPin className="w-5 h-5 text-orange-600" />
                                </div>
                                <span className="font-semibold text-sm md:text-base text-gray-900">Trusted by Businesses Across Bangalore</span>
                            </div>
                        </motion.div>

                        {/* Stats Section */}

                        {/* Bangalore Areas */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1 }}
                            className="mt-0"
                        >
                            <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">
                                Serving Key Bangalore Locations
                            </p>
                            <div className="flex flex-wrap justify-center gap-3 text-sm">
                                <span className="px-3 py-2 bg-gray-100 text-gray-700 rounded-full border">
                                    Koramangala
                                </span>
                                <span className="px-3 py-2 bg-gray-100 text-gray-700 rounded-full border">
                                    Whitefield
                                </span>
                                <span className="px-3 py-2 bg-gray-100 text-gray-700 rounded-full border">
                                    HSR Layout
                                </span>
                                <span className="px-3 py-2 bg-gray-100 text-gray-700 rounded-full border">
                                    Indiranagar
                                </span>
                                <span className="px-3 py-2 bg-gray-100 text-gray-700 rounded-full border">
                                    Electronic City
                                </span>
                            </div>
                        </motion.div>
                        <motion.div
                            variants={itemVariants}
                            className="flex flex-col md:flex-row gap-4 justify-center items-center mt-12 mb-12"
                        >
                            <button
                                onClick={toggleContactForm}
                                className="px-8 py-4 rounded-full bg-gradient-to-r from-red-300 via-red-400 via-red-600 to-red-950 text-white font-semibold transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2"
                            >
                                Get a Free SEO Audit
                                <ChevronRight className="w-5 h-5" />
                            </button>

                            <a href="mailto:zee@bixeltek.com">
                                <button className="px-8 py-4 rounded-full border-2 border-gray-300 text-gray-700 font-semibold hover:border-green-600 hover:text-green-600 transition-all duration-300 flex items-center gap-2">
                                    Talk to an SEO Expert
                                    <Target className="w-5 hidden md:block h-5" />
                                </button>
                            </a>
                        </motion.div>

                    </motion.div>
                </div>

                {/* Background Elements */}
            <BangaloreLogoTicker />

            </section>
            <SEOButtonContactForm isVisible={isVisible} onClose={() => setIsVisible(false)} />
        </>
    );
};

export default BangaloreSEOHero;