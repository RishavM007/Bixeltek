"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import dashboardImg from "@/assets/UI Screen.jpg"; 
import Link from "next/link";// replace with your image path

export default function WhyGoogleAds() {
  return (
    <section className="w-full mt-0 bg-black text-gray-100 py-10 md:py-20 overflow-hidden">
      <div className="flex flex-col lg:flex-row items-center lg:items-start">
        
        {/* LEFT IMAGE */}
        <motion.div
          initial={{ x: -80, opacity: 0, scale: 0.95 }}
          whileInView={{ x: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="flex-1 relative w-full lg:w-1/2 h-[400px] md:h-[500px] lg:h-[600px]"
        >
          <Image
            src={dashboardImg}
            alt="Google Ads Dashboard"
            fill
            className="object-cover object-left rounded-r-2xl shadow-2xl"
            priority
          />
        </motion.div>

        {/* RIGHT CONTENT */}
        <motion.div
          initial={{ x: 80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="flex-1 lg:w-1/2 px-8 lg:px-16 mt-0 lg:mt-0"
        >
          <h2 className="text-3xl md:text-6xl font-bold font-inter leading-snug mb-6">
            <span className="text-blue-500">Smarter</span> Google Ads Management, Built for ROI
          </h2>

          <p className="text-gray-300 mb-6 font-poppins leading-relaxed max-w-xl">
            Running ads is easy. Running profitable campaigns is not. The average business wastes{" "}
            <span className="font-semibold text-white">30–40% of its budget</span> on irrelevant clicks,
            low-quality leads, or disapproved ads. That’s where{" "}
            <span className="font-semibold text-white">Bixeltek</span> steps in.
          </p>

          <ul className="space-y-4 mb-8">
            <li className="flex gap-3">
              <span className="text-blue-500">✔</span> Leverage AI-powered tools like Performance Max and Smart Bidding
            </li>
            <li className="flex gap-3">
              <span className="text-blue-500">✔</span> Prevent wasted spend with tight targeting & fraud monitoring
            </li>
            <li className="flex gap-3">
              <span className="text-blue-500">✔</span> Navigate Google Ads policy compliance to keep your account safe
            </li>
            <li className="flex gap-3">
              <span className="text-blue-500">✔</span> Focus relentlessly on ROI, not just impressions or clicks
            </li>
          </ul>
          <p className="text-gray-300 mb-6 font-poppins leading-relaxed max-w-xl">
            When you work with Bixeltek, you’re not just hiring a PPC agency — you’re partnering with a global performance marketing team that treats your money like our own.
          </p>

          {/* CTA */}
          <motion.div
          >
            <Link href={'#form'}>
            <button className="px-7 py-3 rounded-2xl bg-blue-600 text-white font-semibold text-sm shadow-lg hover:bg-blue-700 transition">
            Book a Free Strategy Call
            </button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
