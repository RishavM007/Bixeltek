"use client";
import React from "react";
import { motion } from "framer-motion";
import {
    Search,
    TrendingUp,
    Code,
    Users,
    Palette,
    BarChart3,
    Target,
    Zap,
    ArrowRight
} from "lucide-react";

const ServicesSectionBangalore = () => {
    const services = [
        {
            icon: Target,
            title: "Google Ads & PPC Management",
            description: "Instant visibility and measurable ROI. We run high-intent search and display campaigns targeting Bangalore's local and tech audiences with precise keyword and device segmentation.",
            color: "from-blue-500 to-blue-600",
            bgColor: "bg-blue-50",
            iconColor: "text-blue-600"
        },
        {
            icon: Search,
            title: "SEO & Local Search Optimization",
            description: "Entity-based SEO, content systems, and Google Business optimization that position your brand across organic and map results.",
            color: "from-green-500 to-green-600",
            bgColor: "bg-green-50",
            iconColor: "text-green-600"
        },
        {
            icon: Code,
            title: "Web Design & Development",
            description: "Custom-coded websites built with WordPress, Next.js, or Shopify — fast, responsive, and conversion-ready.",
            color: "from-purple-500 to-purple-600",
            bgColor: "bg-purple-50",
            iconColor: "text-purple-600"
        },
        {
            icon: Users,
            title: "Social Media Marketing & Creative Strategy",
            description: "Content that builds awareness and trust. We create bilingual campaigns (English & Kannada) optimized for engagement and brand recognition.",
            color: "from-pink-500 to-pink-600",
            bgColor: "bg-pink-50",
            iconColor: "text-pink-600"
        },
        {
            icon: Palette,
            title: "Branding & Graphic Design",
            description: "Logo design, brand identity systems, and ad creatives that establish visual authority and consistency.",
            color: "from-orange-500 to-orange-600",
            bgColor: "bg-orange-50",
            iconColor: "text-orange-600"
        },
        {
            icon: BarChart3,
            title: "Analytics & Conversion Tracking",
            description: "GA4 dashboards, funnel tracking, and A/B testing that convert insights into growth.",
            color: "from-indigo-500 to-indigo-600",
            bgColor: "bg-indigo-50",
            iconColor: "text-indigo-600"
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
            y: 60,
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
            y: -10,
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
            scale: 1.2,
            rotate: 360,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        }
    };

    const bgVariants = {
        hover: {
            scale: 1.1,
            opacity: 1,
            transition: {
                duration: 0.4,
                ease: "easeOut"
            }
        }
    };

    const contentVariants = {
        hover: {
            y: -5,
            transition: {
                duration: 0.3,
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
                    <h3 className="text-sm font-semibold text-blue-600 uppercase tracking-wide mb-4">
                        What We Offer
                    </h3>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        Complete Digital Marketing Solutions for <br /> <span className="text-blue-500">Bangalore Businesses</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                        Our in-house teams manage your entire digital ecosystem — from ad strategy and creative content to analytics and automation. We help Bangalore&apos;s forward-thinking brands stay visible, profitable, and positioned ahead of competitors.
                    </p>
                </motion.div>

                {/* Services Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            className="relative bg-white rounded-3xl p-8 shadow-lg border border-gray-200 overflow-hidden group cursor-pointer h-full"
                            variants={cardVariants}
                            whileHover="hover"
                        >
                            {/* Animated Background */}
                            {/* Animated Background */}
                            <div
                                className={`absolute inset-x-0 bottom-0 h-0 bg-gradient-to-t ${service.color} rounded-b-3xl 
  group-hover:h-full group-hover:rounded-3xl group-hover:opacity-100 opacity-0 transition-all duration-500 ease-out`}
                            ></div>


                            {/* Background Pattern */}
                            <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-300">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full -translate-y-16 translate-x-16"></div>
                                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white rounded-full translate-y-12 -translate-x-12"></div>
                            </div>

                            {/* Content */}
                            <motion.div
                                className="relative z-10 h-full flex flex-col"
                                variants={contentVariants}
                            >
                                {/* Icon */}
                                <motion.div
                                    className={`w-14 h-14 ${service.bgColor} rounded-2xl flex items-center justify-center mb-6 group-hover:bg-white/20 transition-colors duration-300`}
                                    variants={iconVariants}
                                >
                                    <service.icon className={`w-6 h-6 ${service.iconColor} group-hover:text-white transition-colors duration-300`} />
                                </motion.div>

                                {/* Title */}
                                <motion.h3
                                    className="text-2xl font-bold text-black mb-4 group-hover:text-white transition-colors duration-300 flex-grow"
                                >
                                    {service.title}
                                </motion.h3>

                                {/* Description */}
                                <motion.p
                                    className="text-black leading-relaxed mb-6 group-hover:text-white/90 transition-colors duration-300"
                                >
                                    {service.description}
                                </motion.p>

                                {/* CTA Arrow */}
                                <motion.div
                                    className="flex items-center gap-2 text-white group-hover:text-white transition-colors duration-300 mt-auto"
                                    whileHover={{ x: 5 }}
                                >
                                    <span className="text-sm font-semibold">Learn more</span>
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                                </motion.div>
                            </motion.div>

                            {/* Shine Effect */}
                            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

                            {/* Border Glow */}
                            <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-white/30 transition-all duration-300 pointer-events-none" />
                        </motion.div>
                    ))}
                </motion.div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="text-center mt-16"
                >
                    <motion.button
                        className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center gap-3 mx-auto"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Zap className="w-5 h-5" />
                        Get Your Free Marketing Strategy
                        <ArrowRight className="w-5 h-5" />
                    </motion.button>
                </motion.div>
            </div>
        </section>
    );
};

export default ServicesSectionBangalore;