"use client";
import React from "react";
import { motion } from "framer-motion";
import { CheckCircle, ArrowUpRight, DollarSign, Users, TrendingUp, BarChart3, Check } from "lucide-react";
import dentalimage from '@/assets/dental-clinic.jpg';
import Image from "next/image";

const CaseStudySnapshot = () => {
    return (
        <section className="py-20 px-6 bg-white">
            <div className="max-w-[90%] mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Case Study Snapshot
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Real data, real impact — replicated across verticals from retail to construction.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        {/* Client Header */}
                        <div className="bg-white rounded-2xl p-6 shadow-lg border flex flex-col border-gray-200 hover:shadow-xl transition-all duration-300">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                                    <Users className="w-6 h-6 text-blue-600" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-gray-900">Dental Clinic</h3>
                                    <p className="text-gray-600">Toronto, Ontario</p>
                                </div>

                            </div>
                            <Image src={dentalimage} alt="dentalclinic" className="rounded-2xl object-cover"></Image>
                        </div>

                        {/* Problem */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300"
                        >
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <span className="text-red-600 font-bold text-lg">!</span>
                                </div>
                                <div>
                                    <h4 className="text-lg font-semibold text-gray-900 mb-2">The Problem</h4>
                                    <p className="text-gray-600 leading-relaxed">
                                        High website traffic with low appointment bookings. Despite strong visibility,
                                        the conversion funnel was leaking potential patients at critical touchpoints.
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Action */}
                     

                        {/* Results */}
                        {/* <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                            viewport={{ once: true }}
                            className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-6 text-white shadow-xl hover:shadow-2xl transition-all duration-300"
                        >
                            <h4 className="text-lg font-semibold mb-6 text-center">The Results</h4>
                            <div className="grid grid-cols-2 gap-6">
                                <div className="text-center">
                                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-3 hover:scale-110 transition-transform">
                                        <ArrowUpRight className="w-6 h-6" />
                                    </div>
                                    <p className="text-2xl font-bold">+34%</p>
                                    <p className="text-sm opacity-90 mt-1">Form Submissions</p>
                                    <p className="text-xs opacity-75 mt-1">in 3 weeks</p>
                                </div>
                                <div className="text-center">
                                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-3 hover:scale-110 transition-transform">
                                        <DollarSign className="w-6 h-6" />
                                    </div>
                                    <p className="text-2xl font-bold">42%</p>
                                    <p className="text-sm opacity-90 mt-1">Lower Cost Per Lead</p>
                                    <p className="text-xs opacity-75 mt-1">more efficient</p>
                                </div>
                            </div>
                        </motion.div> */}
                    </motion.div>

                    {/* Right Side - Dashboard */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        {/* Mockup Dashboard */}
                        <div className="bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden hover:shadow-3xl transition-all duration-300">
                            {/* Dashboard Header */}
                            <div className="bg-gradient-to-r from-gray-900 to-gray-800 px-6 py-4">
                                <div className="flex items-center gap-3">
                                    <div className="flex gap-1">
                                        <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                                        <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                                        <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                                    </div>
                                    <div className="text-white text-sm font-medium">Performance Dashboard</div>
                                </div>
                            </div>

                            {/* Dashboard Content */}
                            <div className="p-6">
                                {/* Metrics Row */}
                                <div className="grid grid-cols-2 gap-4 mb-6">
                                    <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-4 border border-blue-200">
                                        <p className="text-xs text-gray-600 mb-1">Form Submissions</p>
                                        <p className="text-2xl font-bold text-gray-900">+34%</p>
                                        <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                                            <div className="bg-gradient-to-r from-green-500 to-green-600 h-2 rounded-full" style={{ width: '74%' }}></div>
                                        </div>
                                    </div>
                                    <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-4 border border-green-200">
                                        <p className="text-xs text-gray-600 mb-1">Cost Per Lead</p>
                                        <p className="text-2xl font-bold text-gray-900">-42%</p>
                                        <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                                            <div className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full" style={{ width: '58%' }}></div>
                                        </div>
                                    </div>
                                </div>

                                {/* Chart Area */}
                                <div className="bg-gray-50 rounded-xl p-4 mb-4 border border-gray-200">
                                    <div className="flex justify-between items-center mb-4">
                                        <p className="text-sm font-semibold text-gray-900">Conversion Trend</p>
                                        <p className="text-xs text-gray-600">Last 30 days</p>
                                    </div>
                                    <motion.div
                                        className="space-y-2"
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true }}
                                        variants={{
                                            hidden: {},
                                            visible: {
                                                transition: {
                                                    staggerChildren: 0.1
                                                }
                                            }
                                        }}
                                    >
                                        {[70, 65, 80, 75, 85, 90, 95].map((width, index) => (
                                            <motion.div
                                                key={index}
                                                className="flex items-center gap-3"
                                                variants={{
                                                    hidden: { opacity: 0, x: -20 },
                                                    visible: {
                                                        opacity: 1,
                                                        x: 0,
                                                        transition: {
                                                            duration: 0.5,
                                                            ease: "easeOut"
                                                        }
                                                    }
                                                }}
                                            >
                                                <div className="w-10 text-right">
                                                    <span className="text-xs font-medium text-gray-700">Day{index + 1}</span>
                                                </div>
                                                <div className="flex-1 bg-gray-200 rounded-full h-3 overflow-hidden">
                                                    <motion.div
                                                        className="bg-gradient-to-r from-blue-500 to-blue-600 h-3 rounded-full"
                                                        initial={{ width: 0 }}
                                                        whileInView={{ width: `${width}%` }}
                                                        transition={{
                                                            duration: 1,
                                                            delay: 0.3,
                                                            ease: "easeOut"
                                                        }}
                                                        viewport={{ once: true }}
                                                    />
                                                </div>
                                                <motion.div
                                                    className="w-8 text-right"
                                                    initial={{ opacity: 0 }}
                                                    whileInView={{ opacity: 1 }}
                                                    transition={{
                                                        duration: 0.3,
                                                        delay: 0.8,
                                                    }}
                                                    viewport={{ once: true }}
                                                >
                                                    <span className="text-xs font-semibold text-gray-900">{width}%</span>
                                                </motion.div>
                                            </motion.div>
                                        ))}
                                    </motion.div>
                                </div>

                                {/* Funnel Visualization */}
                                <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                                    <p className="text-sm font-semibold text-gray-900 mb-3">Booking Funnel</p>
                                    <div className="space-y-3">
                                        {[
                                            { label: "Website Visitors", value: "100%", color: "from-blue-200 to-blue-300", width: "100%" },
                                            { label: "Booking Page Views", value: "45%", color: "from-blue-300 to-blue-400", width: "45%" },
                                            { label: "Form Started", value: "28%", color: "from-blue-400 to-blue-500", width: "28%" },
                                            { label: "Appointment Booked", value: "19%", color: "from-blue-500 to-blue-600", width: "19%" }
                                        ].map((step, index) => (
                                            <div key={index} className="flex items-center justify-between">
                                                <span className="text-xs text-gray-600 flex-1">{step.label}</span>
                                                <div className="flex items-center gap-3 flex-1">
                                                    <div className="w-full bg-gray-200 rounded-full h-3">
                                                        <div className={`bg-gradient-to-r ${step.color} h-3 rounded-full transition-all duration-1000`} style={{ width: step.width }}></div>
                                                    </div>
                                                    <span className="text-xs font-bold text-gray-900 w-8 text-right">{step.value}</span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                
                            </div>
                            
                        </div>
                           <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-2xl p-6 mt-10 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300"
                        >
                            <h4 className="text-lg font-semibold text-gray-900 mb-4">Our Solution</h4>
                            <div className="space-y-3">
                                {[
                                    "Implemented GA4 event tracking for complete user journey mapping",
                                    "Conducted form funnel analysis to identify drop-off points",
                                    "Performed heatmap testing on booking page interface",
                                    "Optimized call-to-action placement and messaging"
                                ].map((action, index) => (
                                    <div key={index} className="flex items-center gap-3 group">
                                        <Check className="w-5 h-5 text-green-500 flex-shrink-0 group-hover:scale-110 transition-transform" />
                                        <span className="text-gray-600 text-sm group-hover:text-gray-900 transition-colors">{action}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Floating Elements */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.8 }}
                            viewport={{ once: true }}
                            className="absolute -top-4 -right-4 bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2 rounded-full shadow-lg"
                        >
                            <div className="flex items-center gap-2">
                                <TrendingUp className="w-4 h-4" />
                                <span className="text-sm font-semibold">Proven Results</span>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>

                {/* Bottom Note */}

            </div>
        </section>
    );
};

export default CaseStudySnapshot;