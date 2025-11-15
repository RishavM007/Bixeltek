"use client";
import React from "react";
import { motion } from "framer-motion";
import { 
    Award, 
    Brain, 
    BarChart3, 
    PawPrint, 
    Users, 
    Palette,
    ArrowUpRight
} from "lucide-react";

const PetBrandAdvantages = () => {
    const advantages = [
        {
            icon: Award,
            platform: "Google Partner Certified",
            useCase: "Search Algorithm Expertise",
            description: "Deep understanding of search algorithms and ranking factors with certified expertise in Google's latest updates and best practices for the pet industry.",
            keyValue: "Certified search optimization specialists"
        },
        {
            icon: Brain,
            platform: "AI SEO Ready",
            useCase: "Future-Proof Optimization",
            description: "Future-proof optimization for voice search and generative AI results. We optimize for conversational queries and AI-powered search features that dominate modern search behavior.",
            keyValue: "Ready for next-gen search technology"
        },
        {
            icon: BarChart3,
            platform: "Full Funnel Measurement",
            useCase: "Complete Performance Tracking",
            description: "Complete tracking from website clicks to in-store visits and phone calls. Advanced analytics that connect online presence to offline conversions and customer lifetime value.",
            keyValue: "End-to-end conversion tracking"
        },
        {
            icon: PawPrint,
            platform: "Pet Industry Experience",
            useCase: "Vertical Specialization",
            description: "Proven success across grooming salons, boarding centers, pet retail stores, and manufacturing brands. Industry-specific strategies that understand pet parent behavior.",
            keyValue: "Deep pet industry knowledge"
        },
        {
            icon: Users,
            platform: "In-House Team",
            useCase: "Unified Strategy Execution",
            description: "SEO strategy and creative execution aligned under one roof. Seamless collaboration between technical optimization and engaging content that converts pet parents.",
            keyValue: "Integrated creative and technical teams"
        },
        {
            icon: Palette,
            platform: "Integrated Marketing",
            useCase: "Holistic Brand Presence",
            description: "Holistic strategy combining SEO with social media, email marketing, and local search optimization to create comprehensive brand presence across all channels.",
            keyValue: "Multi-channel marketing synergy"
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
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
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Why Pet Brands Choose Bixeltek
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Comprehensive SEO solutions designed specifically for the unique needs of pet businesses looking to dominate search results.
                    </p>
                </motion.div>

                {/* 3x2 Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
                >
                    {advantages.map((advantage, index) => (
                        <motion.div
                            key={advantage.platform}
                            variants={itemVariants}
                            className="relative bg-white rounded-2xl p-8 border border-gray-200 hover:border-amber-300 transition-all duration-300 hover:shadow-xl group"
                        >
                            {/* Icon Container - Half In, Half Out */}
                            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                                <div className="relative">
                                    {/* Background Circle */}
                                    <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                                        <advantage.icon className="w-6 h-6 text-white" />
                                    </div>
                                    {/* Outer Ring Effect */}
                                    <div className="absolute inset-0 w-12 h-12 rounded-full border-2 border-amber-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-125"></div>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="pt-4 text-center">
                                {/* Platform */}
                                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-amber-600 transition-colors">
                                    {advantage.platform}
                                </h3>

                                {/* Use Case */}
                                <p className="text-sm font-semibold text-amber-600 mb-3 bg-amber-50 px-3 py-1 rounded-full inline-block">
                                    {advantage.useCase}
                                </p>

                                {/* Description */}
                                <p className="text-gray-600 text-sm leading-relaxed mb-4 min-h-[80px]">
                                    {advantage.description}
                                </p>

                                {/* Key Value */}
                                <div className="border-t border-gray-100 pt-4">
                                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">
                                        Key Advantage
                                    </p>
                                    <p className="text-sm font-medium text-gray-900">
                                        {advantage.keyValue}
                                    </p>
                                </div>
                            </div>

                            {/* Hover Effect */}
                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-amber-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="text-center mt-16"
                >
                    <p className="text-gray-600 mb-6">
                        Ready to achieve these advantages for your pet business?
                    </p>
                    <motion.a
                        href="/contact-us"
                        className="px-8 py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-full font-semibold hover:shadow-xl transition-all duration-300 shadow-lg inline-flex items-center gap-2 group"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <PawPrint className="w-5 h-5" />
                        Start Your SEO Journey
                        <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </motion.a>
                    <p className="text-gray-500 text-sm mt-3">
                        Join 200+ pet businesses growing with Bixeltek
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default PetBrandAdvantages;