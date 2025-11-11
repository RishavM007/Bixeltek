"use client";

import React from "react";
import Image from "next/image";
import dentalSeoImg from "@/assets/Digital-Marketing-for-Dentists-2.png"; // replace with your actual image path
import { motion } from "framer-motion";

const DentalSEOIntro = () => {
    return (
        <section className="bg-white pb-20 max-w-[85%] mx-auto px-6 md:px-20 flex flex-col md:flex-row items-center gap-10">
            {/* LEFT SIDE — TEXT */}
            <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="w-full md:w-1/2 flex flex-col justify-center"
            >
                <h2 className="text-3xl md:text-5xl font-medium text-gray-900 leading-snug mb-6">
                    Introduction:{" "}
                    <span className="text-red-600">
                        Why SEO Is the Lifeline of Modern Dental Practices
                    </span>
                </h2>

                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    Every dental clinic competes in a <span className="font-semibold">5–10 km radius</span> for
                    the same patients. Most people searching{" "}
                    <span className="italic">“dentist near me”</span> decide within minutes. If your clinic
                    doesn’t show up in Google’s Top 3 or AI Overview cards, someone else gets that booking.
                </p>

                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    SEO is how modern dental clinics build <span className="font-semibold">visibility, trust, and
                        predictability.</span> It’s not just about ranking for keywords — it’s about ranking for{" "}
                    <span className="italic">intent</span>: when someone nearby actually needs treatment.
                </p>

                <p className="text-gray-700 text-lg leading-relaxed">
                    With the rise of <span className="font-semibold">AI-powered search results,</span> your clinic
                    now needs more than keyword optimization. You need to teach Google{" "}
                    <span className="text-red-600 font-medium">who you are, what you specialize in,</span> and
                    why your practice is the most relevant entity in your geography.
                </p>
            </motion.div>

            {/* RIGHT SIDE — IMAGE */}
            <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="w-full md:w-1/2 flex justify-center"
            >
                <div className="relative w-full rounded-3xl overflow-hidden">
                    <Image
                        src={dentalSeoImg}
                        alt="Dental SEO strategy illustration"
                        className="object-cover w-full h-full"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-transparent"></div>
                </div>
            </motion.div>
        </section>
    );
};

export default DentalSEOIntro;
