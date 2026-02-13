"use client";
import React from "react";
import { motion } from "framer-motion";
import { CheckCircle, TrendingUp, Target, Users, DollarSign, BarChart3 } from "lucide-react";


const GoogleAdsDashboardBan = () => {
    const issues = [
        "Poor keyword targeting and broad match waste",
        "Weak ad copy that fails to convert",
        "Lack of landing page optimization",
        "No proper conversion tracking or analytics",
        "Overlapping campaigns competing for the same audience"
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
        hidden: { opacity: 0, x: -20 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    const dashboardVariants = {
        hidden: { opacity: 0, x: 30, scale: 0.95 },
        visible: {
            opacity: 1,
            x: 0,
            scale: 1,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        }
    };

    return (
        <section className="py-20 px-6 bg-white">
            <div className="lg:max-w-[87%] mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={containerVariants}
                    >
                        <motion.div
                            variants={itemVariants}
                            className="mb-8"
                        >
                            <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-6">
                                Clicks Without Conversions Are <span className="text-blue-600">Costly</span>.
                            </h2>
                            <p className="text-xl text-gray-600 leading-relaxed mb-8">
                                Many Bangalore businesses launch campaigns without proper structure or tracking. They get clicks but struggle to turn them into measurable results.
                            </p>
                        </motion.div>

                        {/* Issues List */}
                        <motion.div
                            variants={containerVariants}
                            className="space-y-4 mb-8"
                        >
                            <h3 className="text-lg font-semibold text-gray-900 mb-4">Common issues include:</h3>
                            {issues.map((issue, index) => (
                                <motion.div
                                    key={issue}
                                    variants={itemVariants}
                                    className="flex items-start gap-3"
                                >
                                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                                    </div>
                                    <p className="text-gray-700 leading-relaxed">{issue}</p>
                                </motion.div>
                            ))}
                        </motion.div>

                        {/* Solution */}
                        <motion.div
                            variants={itemVariants}
                          
                        >

                        <a href="mailto:zee@bixeltek.com">
                            <button className="px-8 py-4 rounded-full border-2 border-gray-300 text-gray-700 font-semibold hover:border-blue-600 hover:text-blue-600 transition-all duration-300 flex items-center gap-2">
                                Talk to a Google Ads Expert
                                <TrendingUp className="w-5 h-5" />
                            </button>
                        </a>
                           
                        </motion.div>
                    </motion.div>

                    {/* Right Side - Custom Google Ads Dashboard */}
                    <motion.div
                        variants={dashboardVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="relative"
                    >
                        {/* Dashboard Container */}
                        <div className="bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden">
                            {/* Dashboard Header */}
                            <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-4">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <div className="flex gap-1">
                                            <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                                            <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                                            <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                                        </div>
                                        <div className="text-white text-sm font-medium">Google Ads Performance Dashboard</div>
                                    </div>
                                    <div className="text-blue-200 text-xs">Live Data</div>
                                </div>
                            </div>
                            
                            {/* Dashboard Content */}
                            <div className="p-6">
                                {/* Top Metrics Row */}
                                <div className="grid grid-cols-2 gap-4 mb-6">
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.3 }}
                                        viewport={{ once: true }}
                                        className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-4 border border-green-200"
                                    >
                                        <div className="flex items-center gap-2 mb-2">
                                            <TrendingUp className="w-4 h-4 text-green-600" />
                                            <p className="text-xs font-semibold text-gray-600">CONVERSION RATE</p>
                                        </div>
                                        <p className="text-2xl font-bold text-gray-900">8.7%</p>
                                        <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                                            <motion.div
                                                className="bg-gradient-to-r from-green-500 to-green-600 h-2 rounded-full"
                                                initial={{ width: 0 }}
                                                whileInView={{ width: '87%' }}
                                                transition={{ duration: 1, delay: 0.5 }}
                                                viewport={{ once: true }}
                                            />
                                        </div>
                                    </motion.div>

                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.4 }}
                                        viewport={{ once: true }}
                                        className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-4 border border-blue-200"
                                    >
                                        <div className="flex items-center gap-2 mb-2">
                                            <DollarSign className="w-4 h-4 text-blue-600" />
                                            <p className="text-xs font-semibold text-gray-600">COST PER LEAD</p>
                                        </div>
                                        <p className="text-2xl font-bold text-gray-900">₹342</p>
                                        <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                                            <motion.div
                                                className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full"
                                                initial={{ width: 0 }}
                                                whileInView={{ width: '42%' }}
                                                transition={{ duration: 1, delay: 0.6 }}
                                                viewport={{ once: true }}
                                            />
                                        </div>
                                    </motion.div>
                                </div>

                                {/* Campaign Performance Chart */}
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ delay: 0.5 }}
                                    viewport={{ once: true }}
                                    className="bg-gray-50 rounded-xl p-4 mb-4 border border-gray-200"
                                >
                                    <div className="flex justify-between items-center mb-4">
                                        <p className="text-sm font-semibold text-gray-900">Campaign Performance</p>
                                        <p className="text-xs text-gray-600">Last 7 days</p>
                                    </div>
                                    <div className="space-y-3">
                                        {[
                                            { label: "Search Campaign", value: 85, color: "from-blue-500 to-blue-600" },
                                            { label: "Display Network", value: 65, color: "from-green-500 to-green-600" },
                                            { label: "Shopping Ads", value: 78, color: "from-purple-500 to-purple-600" },
                                            { label: "Video Campaign", value: 45, color: "from-orange-500 to-orange-600" }
                                        ].map((campaign, index) => (
                                            <div key={campaign.label} className="flex items-center gap-3">
                                                <div className="w-20">
                                                    <span className="text-xs text-gray-600">{campaign.label}</span>
                                                </div>
                                                <div className="flex-1 bg-gray-200 rounded-full h-3">
                                                    <motion.div
                                                        className={`bg-gradient-to-r ${campaign.color} h-3 rounded-full`}
                                                        initial={{ width: 0 }}
                                                        whileInView={{ width: `${campaign.value}%` }}
                                                        transition={{ duration: 1, delay: 0.7 + index * 0.1 }}
                                                        viewport={{ once: true }}
                                                    />
                                                </div>
                                                <span className="text-xs font-bold text-gray-900 w-8">{campaign.value}%</span>
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>

                                {/* Bottom Metrics */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.8 }}
                                    viewport={{ once: true }}
                                    className="grid grid-cols-3 gap-4"
                                >
                                    <div className="text-center">
                                        <Users className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                                        <p className="text-xl font-inter font-bold text-gray-900">2.4K</p>
                                        <p className="text-sm tracking-wider text-gray-600">Clicks</p>
                                    </div>
                                    <div className="text-center">
                                        <Target className="w-6 h-6 text-green-600 mx-auto mb-2" />
                                        <p className="text-xl font-inter font-bold text-gray-900">189</p>
                                        <p className="text-sm tracking-wider text-gray-600">Conversions</p>
                                    </div>
                                    <div className="text-center">
                                        <BarChart3 className="w-6 h-6 text-purple-600 mx-auto mb-2" />
                                        <p className="text-xl font-inter font-bold text-gray-900">4.2x</p>
                                        <p className="text-sm tracking-wider text-gray-600">ROI</p>
                                    </div>
                                </motion.div>
                            </div>

                            {/* Dashboard Footer */}
                            <div className="bg-gray-50 px-6 py-3 border-t border-gray-200">
                                <div className="flex justify-between items-center text-xs text-gray-600">
                                    <span>Updated just now</span>
                                    <span>Bixeltek Optimized</span>
                                </div>
                            </div>
                        </div>

                        {/* Floating Elements */}
                       
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default GoogleAdsDashboardBan;