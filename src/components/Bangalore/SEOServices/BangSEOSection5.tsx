"use client";
import React from "react";
import { motion } from "framer-motion";
import { 
    Brain, 
    BarChart3, 
    FileText, 
    Languages, 
    Globe,
    ArrowRight,
    Target,
    Star
} from "lucide-react";

const WhyChooseBixeltekSEO = () => {
    const features = [
        {
            icon: Brain,
            title: "Entity-based SEO",
            description: "We implement advanced entity-based SEO strategies that align with Google's AI algorithms, building semantic topic authority and improving E-A-T signals for sustainable organic growth.",
            color: "blue",
            hoverColor: "bg-blue-600",
            textColor: "text-blue-600",
            hoverTextColor: "text-white"
        },
        {
            icon: BarChart3,
            title: "Integrated Analytics",
            description: "Our comprehensive analytics integration connects Google Ads, GA4, and Search Console data to provide complete funnel visibility and data-driven optimization decisions.",
            color: "green",
            hoverColor: "bg-green-600",
            textColor: "text-green-600",
            hoverTextColor: "text-white"
        },
        {
            icon: FileText,
            title: "Transparent Reporting",
            description: "Receive detailed monthly performance reports with clear metrics, actionable insights, and progress tracking—no vanity metrics, just measurable business outcomes.",
            color: "purple",
            hoverColor: "bg-purple-600",
            textColor: "text-purple-600",
            hoverTextColor: "text-white"
        },
        {
            icon: Languages,
            title: "Multilingual Capability",
            description: "We create optimized content and local SEO strategies for both English and Kannada audiences, ensuring maximum reach across Bangalore's diverse linguistic landscape.",
            color: "orange",
            hoverColor: "bg-orange-600",
            textColor: "text-orange-600",
            hoverTextColor: "text-white"
        },
        {
            icon: Globe,
            title: "Global Proven Performance",
            description: "With successful SEO implementations across India, UAE, and Canada, we bring international best practices tailored to Bangalore's unique market dynamics.",
            color: "red",
            hoverColor: "bg-red-600",
            textColor: "text-red-600",
            hoverTextColor: "text-white"
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
                duration: 0.5,
                ease: "easeOut"
            }
        }
    };

    const cardHoverVariants = {
        initial: { 
            backgroundColor: "#ffffff",
            color: "#374151"
        },
        hover: { 
            backgroundColor: "", // Will be set dynamically
            color: "#ffffff",
            transition: {
                duration: 0.3,
                ease: "easeOut"
            }
        }
    };

    const getColorClasses = (color: string) => {
        const colors = {
            blue: "bg-blue-50 text-blue-600 border-blue-200",
            green: "bg-green-50 text-green-600 border-green-200",
            purple: "bg-purple-50 text-purple-600 border-purple-200",
            orange: "bg-orange-50 text-orange-600 border-orange-200",
            red: "bg-red-50 text-red-600 border-red-200"
        };
        return colors[color as keyof typeof colors] || colors.blue;
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
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        Why Bangalore Businesses Choose <span className="text-blue-600">Bixeltek</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        We don&apos;t chase rankings. We build authority.
                    </p>
                </motion.div>

                {/* 3x3 Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {/* Feature Cards */}
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            variants={itemVariants}
                            className="relative rounded-2xl p-6 border border-gray-200 overflow-hidden group cursor-pointer h-full"
                            initial="initial"
                            whileHover="hover"
                            style={{
                                backgroundColor: "#ffffff"
                            }}
                        >
                            {/* Hover Background */}
                            <motion.div
                                className={`absolute inset-0 ${feature.hoverColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                            />

                            <div className="relative z-10 flex flex-col items-center text-center h-full">
                                {/* Icon */}
                                <div className={`w-12 h-12 ${getColorClasses(feature.color)} rounded-xl flex items-center justify-center mb-4 border group-hover:bg-white/20 group-hover:border-white/30 transition-all duration-300`}>
                                    <feature.icon className={`w-6 h-6 ${feature.textColor} group-hover:text-white transition-colors duration-300`} />
                                </div>

                                {/* Title */}
                                <h3 className={`text-lg font-bold mb-3 ${feature.textColor} group-hover:text-white transition-colors duration-300`}>
                                    {feature.title}
                                </h3>

                                {/* Description */}
                                <p className="text-gray-600 text-sm leading-relaxed flex-grow group-hover:text-white/90 transition-colors duration-300">
                                    {feature.description}
                                </p>
                            </div>

                            {/* Hover Border Effect */}
                            <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-white/20 transition-all duration-300 pointer-events-none" />
                        </motion.div>
                    ))}

                    {/* CTA Card */}
                    <motion.div
                        variants={itemVariants}
                        className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-6 text-white hover:shadow-xl transition-all duration-300 group cursor-pointer"
                    >
                        <div className="flex flex-col items-center text-center h-full justify-between">
                            {/* Icon */}
                            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                <Target className="w-6 h-6" />
                            </div>

                            {/* Content */}
                            <div className="flex-grow">
                                <h3 className="text-lg font-bold mb-3">
                                    Ready to Build Authority?
                                </h3>
                                <p className="text-blue-100 text-sm leading-relaxed mb-6">
                                    Join 150+ Bangalore businesses that trust Bixeltek for sustainable growth and measurable SEO results that drive real business impact.
                                </p>
                            </div>

                            {/* CTA Button */}
                            <motion.button
                                className="w-full bg-white text-blue-600 font-semibold py-3 rounded-xl hover:bg-gray-100 transition-colors duration-300 flex items-center justify-center gap-2"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                Start Your Journey
                                <ArrowRight className="w-4 h-4" />
                            </motion.button>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Bottom Trust Indicator */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="text-center mt-12"
                >
                    <div className="flex flex-wrap justify-center items-center gap-8 text-gray-600">
                        <div className="flex items-center gap-2">
                            <Star className="w-5 h-5 text-yellow-500 fill-current" />
                            <span className="font-semibold">Google Partner Certified</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                            <span className="font-semibold">90% Client Retention</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                            <span className="font-semibold">150+ Bangalore Clients</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default WhyChooseBixeltekSEO;