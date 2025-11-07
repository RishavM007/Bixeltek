"use client";
import React from "react";
import { motion } from "framer-motion";
import { 
    Target, 
    DollarSign, 
    TrendingUp, 
    BarChart3, 
    RefreshCw,
    Eye,
    Shield,
    Zap,
    Users
} from "lucide-react";

const OutcomesGrid = () => {
    const outcomes = [
        {
            icon: Target,
            platform: "Full Transparency",
            useCase: "Data-Driven Decision Making",
            description: "No more 'we think this worked.' You'll know exactly which campaigns, pages, and audiences convert with precise attribution and clear performance metrics.",
            keyValue: "Eliminate guesswork from marketing decisions"
        },
        {
            icon: DollarSign,
            platform: "Reduced Wasted Spend",
            useCase: "Budget Optimization",
            description: "Reallocate ad budgets based on verified conversion data and stop pouring money into channels that don't deliver measurable business results.",
            keyValue: "Maximize marketing ROI efficiently"
        },
        {
            icon: TrendingUp,
            platform: "UX That Converts",
            useCase: "Behavior-Driven Design",
            description: "Behavioral insights lead to frictionless user journeys and improved trust signals that naturally guide visitors toward conversion actions.",
            keyValue: "Higher conversion rates through better UX"
        },
        {
            icon: BarChart3,
            platform: "Actionable Dashboards",
            useCase: "Real-Time Performance Monitoring",
            description: "Daily performance snapshots at a glance with automated reporting that eliminates manual data compilation and spreadsheet management.",
            keyValue: "Instant access to key metrics"
        },
        {
            icon: RefreshCw,
            platform: "Continuous Improvement Loop",
            useCase: "Optimization Framework",
            description: "Analytics fuels testing → testing improves conversion → improved conversion fuels marketing ROI in a perpetual cycle of growth.",
            keyValue: "Sustained performance improvement"
        },
        {
            icon: Eye,
            platform: "Competitive Intelligence",
            useCase: "Market Positioning Insights",
            description: "Understand how your performance compares to industry benchmarks and identify opportunities to outperform your competitors strategically.",
            keyValue: "Data-driven competitive advantage"
        },
        {
            icon: Shield,
            platform: "Data Security & Compliance",
            useCase: "Risk Mitigation",
            description: "Ensure all data collection and processing meets regulatory requirements while maintaining the highest standards of data protection and privacy.",
            keyValue: "Compliant and secure analytics"
        },
        {
            icon: Zap,
            platform: "Automated Reporting",
            useCase: "Time Efficiency",
            description: "Eliminate manual reporting tasks with automated dashboards that deliver insights directly to stakeholders without technical overhead.",
            keyValue: "Save hours on manual reporting"
        },
        {
            icon: Users,
            platform: "Customer Journey Mapping",
            useCase: "Audience Understanding",
            description: "Track complete customer journeys from first touch to conversion and identify key touchpoints that influence purchasing decisions.",
            keyValue: "Complete customer journey visibility"
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
                        Measurable Outcomes You Can Expect
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Transform your analytics from data collection to actionable business intelligence that drives real growth and measurable results.
                    </p>
                </motion.div>

                {/* 3x3 Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
                >
                    {outcomes.map((outcome, index) => (
                        <motion.div
                            key={outcome.platform}
                            variants={itemVariants}
                            className="relative bg-white rounded-2xl p-8 border border-gray-200 hover:border-blue-300 transition-all duration-300 hover:shadow-xl group"
                        >
                            {/* Icon Container - Half In, Half Out */}
                            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                                <div className="relative">
                                    {/* Background Circle */}
                                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                                        <outcome.icon className="w-6 h-6 text-white" />
                                    </div>
                                    {/* Outer Ring Effect */}
                                    <div className="absolute inset-0 w-12 h-12 rounded-full border-2 border-blue-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-125"></div>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="pt-4 text-center">
                                {/* Platform */}
                                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                                    {outcome.platform}
                                </h3>

                                {/* Use Case */}
                                <p className="text-sm font-semibold text-blue-600 mb-3 bg-blue-50 px-3 py-1 rounded-full inline-block">
                                    {outcome.useCase}
                                </p>

                                {/* Description */}
                                <p className="text-gray-600 text-sm leading-relaxed mb-4 min-h-[60px]">
                                    {outcome.description}
                                </p>

                                {/* Key Value */}
                                <div className="border-t border-gray-100 pt-4">
                                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">
                                        Key Benefit
                                    </p>
                                    <p className="text-sm font-medium text-gray-900">
                                        {outcome.keyValue}
                                    </p>
                                </div>
                            </div>

                            {/* Hover Effect */}
                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
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
                        Ready to achieve these measurable outcomes for your business?
                    </p>
                    <button className="px-8 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-colors duration-300 shadow-lg hover:shadow-xl">
                        Start Achieving Results
                    </button>
                </motion.div>
            </div>
        </section>
    );
};

export default OutcomesGrid;