"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import phoneMockup from "@/assets/phone finanacce.png";
import Link from "next/link";

export default function PaymentHeroSection() {
    return (
        <section className="relative w-full bg-white overflow-hidden">
            {/* Main Content */}
            <div className="max-w-[95%] md:max-w-[90%] h-auto md:h-[94vh] mx-auto flex flex-col md:flex-row items-center justify-between px-6 md:px-12 py-20 gap-10">

                {/* Left Text Section */}
                <motion.div
                    initial={{ opacity: 0, x: -60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="flex flex-col mt-32 md:mt-0 gap-6 md:w-2/3 text-center md:text-left"
                >
                    <h1 className="text-4xl md:text-6xl font-medium text-gray-900 leading-tight">
                       Secure, Seamless Payment Gateway Integrations 
                        <span className="text-purple-600"> for Global E-Commerce Success</span>
                    </h1>

                    <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-3xl">
                       Bixeltek integrates leading gateways — Razorpay, Stripe, PayTabs, and PayPal — ensuring every transaction is fast, verified, and globally compliant. Our architecture is engineered for trust, PCI security, and conversion-optimized checkout flows, so your customers can pay confidently in any currency, on any device, without ever hitting friction.
                    </p>

                    <div className="flex justify-center md:justify-start gap-4 mt-2">
                        <Link href="#form">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-gradient-to-tr from-black to-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-purple-700 transition"
                        >
                            Get Started
                        </motion.button>
                        </Link>
                        <Link href="/contact-us">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-gray-100 text-gray-800 px-6 py-3 rounded-xl font-semibold hover:bg-gray-200 transition"
                        >
                            Get In Touch With Us
                        </motion.button>
                        </Link>
                    </div>
                </motion.div>

                {/* Center Phone Image */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="flex justify-center md:w-1/3 relative"
                >
                    <motion.div
                        animate={{ y: [10, 0, 10] }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    >
                        <Image
                            src={phoneMockup}
                            alt="Phone Finance Mockup"
                            className="w-[440px] h-auto drop-shadow-2xl z-10"
                        />
                    </motion.div>
                </motion.div>

                {/* Right Stats Section */}
            </div>

            {/* Marquee Section */}
            <div className="w-full bg-gradient-to-tr from-black via-purple-800 to-purple-400 py-5 overflow-hidden">
                <motion.div
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                    className="whitespace-nowrap text-white text-xl md:text-2xl font-medium tracking-wide"
                >
                    <span className="mx-8">Seamless Payment Gateway Integration</span>
                    <span className="text-white/70">✦</span>
                    <span className="mx-8">Supports Stripe, Razorpay, PayPal, and PayTabs</span>
                    <span className="text-white/70">✦</span>
                    <span className="mx-8">End-to-End Secure Transactions with PCI Compliance</span>
                    <span className="text-white/70">✦</span>
                    <span className="mx-8">Frictionless Checkout with Saved Card Support</span>
                    <span className="text-white/70">✦</span>
                    <span className="mx-8">Multi-Currency and Regional Payment Options</span>
                    <span className="text-white/70">✦</span>
                    <span className="mx-8">Real-Time Payment Status & Order Sync</span>
                    <span className="text-white/70">✦</span>
                    <span className="mx-8">Smart Retry Logic for Failed Transactions</span>
                    <span className="text-white/70">✦</span>
                    <span className="mx-8">One-Click Payments with Tokenized Cards</span>
                    <span className="text-white/70">✦</span>
                    <span className="mx-8">Instant Refunds & Wallet Support Built-In</span>
                    <span className="text-white/70">✦</span>
                    <span className="mx-8">Integrated Fraud Detection & Risk Scoring</span>
                </motion.div>
            </div>

        </section>
    );
}
