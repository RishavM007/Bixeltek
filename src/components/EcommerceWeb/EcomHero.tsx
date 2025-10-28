"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, TrendingUp, Globe, ShoppingCart } from "lucide-react";

// Replace with your actual e-commerce image
import ecommerceImage from "@/assets/download.png";

const EcommerceHeroSection = () => {
    return (
        <section className="w-full bg-black text-white py-24 px-6 md:px-16 overflow-hidden">
            <div className="max-w-[94%] h-[100vh] md:h-[85vh] flex items-center justify-center mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 mt-60 md:mt-0 gap-20 items-center w-full">
                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        {/* Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/30 px-4 py-2 rounded-full"
                        >
                            <TrendingUp className="w-4 h-4 text-blue-400" />
                            <span className="text-blue-400 text-sm font-medium">E-Commerce Excellence</span>
                        </motion.div>

                        {/* Main Heading */}
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-6xl font-medium leading-tight"
                        >
                            E-Commerce Websites That{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                                Don&quot;t Just Sell
                            </span>{" "}
                            — They Scale
                        </motion.h1>

                        {/* Subheading */}
                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                            viewport={{ once: true }}
                            className="text-sm text-gray-300 font-medium leading-relaxed"
                        >
                            From Shopify and WooCommerce to headless commerce on Next.js — Bixeltek engineers full-stack e-commerce systems that blend speed, UX, and conversion intelligence.
                        </motion.p>

                        {/* CTA Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
                            viewport={{ once: true }}
                            className="flex flex-col sm:flex-row gap-4"
                        >
                            <motion.button
                                whileHover={{
                                    scale: 1.05,
                                    backgroundColor: "#2563eb"
                                }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-4 rounded-lg font-semibold text-sm transition-all duration-300 flex items-center justify-center gap-2 shadow-2xl shadow-blue-500/20"
                            >
                                Get My Free Store Audit
                                <ArrowRight className="w-5 h-5" />
                            </motion.button>


                        </motion.div>

                        {/* Trust Row */}

                    </motion.div>

                    {/* Right Image */}
                    <motion.div
                        initial={{ opacity: 0, x: 60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="relative flex justify-center items-center"
                    >
                        <div className="relative h-[500px] w-full rounded-3xl group">
                            <Image
                                src={ecommerceImage}
                                alt="E-Commerce Platform"
                                fill
                                className="object-cover transition-transform duration-700"
                            />
                            <div className="absolute top-[-2px] left-[-2px]">
                                <svg width="100" height="100" viewBox="0 0 100 100">
                                    <polygon points="0,0 100,0 0,100" fill="black" />
                                </svg>
                            </div>
                            <div className="absolute bottom-[-2px] right-[-2px]">
                               <svg width="100" height="100" viewBox="0 0 100 100">
  <polygon points="100,100 0,100 100,0" fill="black"/>
</svg>
                            </div>

                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                            {/* Floating Elements */}

                        </div>

                        {/* Background Decoration */}
                        <div className="absolute -top-4 -right-4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl -z-10"></div>
                        <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl -z-10"></div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default EcommerceHeroSection;