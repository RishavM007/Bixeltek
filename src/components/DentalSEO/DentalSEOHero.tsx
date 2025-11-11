"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, Star, Zap, Search, BarChart3 } from "lucide-react";

const DentalSEOHero = () => {
  return (
    <section className=" h-[100vh] bg-white px-6 flex items-center justify-center">
      <div className="max-w-6xl mx-auto text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-blue-200 shadow-sm mb-8"
        >
          <Zap className="w-4 h-4 text-red-600" />
          <span className="text-sm font-semibold text-red-700">AI-Powered Dental SEO</span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl md:text-6xl lg:text-6xl font-semibold text-gray-900 mb-6 leading-tight"
        >
          SEO for Dental Clinics That{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-purple-600">
            Combines Human Psychology
          </span>{" "}
          with AI Precision
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-lg md:text-lg text-gray-600 mb-10 max-w-7xl mx-auto leading-relaxed"
        >
          We help dental practices rank higher, appear in AI search results, and turn Google clicks into booked patients.{" "}
          <span className="font-semibold text-gray-700">
            Bixeltek&apos;s hybrid SEO + AI SEO systems are built for clinics that want measurable growth, not vanity traffic.
          </span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 mb-10 gap-8 max-w-2xl mx-auto"
        >
          {/* Trust Item 1 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-3">
              <BarChart3 className="w-6 h-6 text-red-600" />
            </div>
            <p className="text-sm text-gray-600 font-semibold">
              Page 1 Rankings for Competitive Keywords
            </p>
          </div>

          {/* Trust Item 2 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-3">
              <Star className="w-6 h-6 text-purple-600" />
            </div>
            <p className="text-sm text-gray-600 font-semibold">
              AI Search Feature Appearances
            </p>
          </div>

          {/* Trust Item 3 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-3">
              <Zap className="w-6 h-6 text-green-600" />
            </div>
            <p className="text-sm text-gray-600 font-semibold">
              Measurable Patient Conversions
            </p>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-7 justify-center items-center mb-3"
        >
          <motion.a
            href="/contact-us"
            className="px-8 py-3 bg-gradient-to-r from-red-300 via-red-600 to-red-950 text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center gap-3 text-base group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Search className="w-5 h-5" />
            Get My Free SEO Audit
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.a>

          <motion.a
            href="#form"
            className="px-8 py-3 bg-white text-gray-900 font-bold rounded-full shadow-lg hover:shadow-xl border border-gray-200 transition-all duration-300 inline-flex items-center gap-3 text-base group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Calendar className="w-5 h-5" />
            Book a Strategy Call
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default DentalSEOHero;