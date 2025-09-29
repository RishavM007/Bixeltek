"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import dashboardImg from "@/assets/MISSISSAUGA DASHBOARD 2.webp";
import Link from "next/link";
import React from "react";
import { AiOutlineCheckCircle } from "react-icons/ai";

const MississaugaSection4: React.FC = () => {
  const valueProps = [
    "Google Partner Certified for Ads & Analytics",
    "200+ Projects Delivered Across Canada",
    "90% Client Retention Rate",
    "Transparent ROI Reporting",
    "Integrated Team for Ads, SEO, Web, and Branding",
  ];

  return (
    <section className="max-w-[90%] mx-auto mt-0 bg-black text-gray-100 py-20 overflow-hidden">
      <div className="flex flex-col lg:flex-row items-center lg:items-start">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ x: -80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="flex-1 lg:w-1/2 px-8 lg:px-16 mb-10 lg:mb-0"
        >
          <h2 className="text-3xl md:text-6xl font-bold font-inter leading-snug mb-6">
            A <span className="text-blue-500">Google Partner Agency</span> With Proven Canadian Results
          </h2>

          <p className="text-gray-300 mb-6 font-poppins leading-relaxed max-w-2xl">
            For over 4 years, Bixeltek has been working with businesses across Canada to cut wasted spend, generate more leads, and scale ROI by 10x. As a Google Partner Certified Agency, we bring expertise, transparency, and a track record of success.
          </p>

          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 text-gray-100 font-poppins">
            {valueProps.map((prop, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <AiOutlineCheckCircle className="text-blue-500 text-2xl mt-1 flex-shrink-0" />
                <p className="text-gray-100">{prop}</p>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <motion.div>
            <Link href={"#form"}>
              <button className="px-7 py-3 rounded-2xl bg-blue-600 text-white font-semibold text-sm shadow-lg hover:bg-blue-700 transition">
                Book a Free Strategy Call
              </button>
            </Link>
          </motion.div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ x: 80, opacity: 0, scale: 0.95 }}
          whileInView={{ x: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="flex-1 relative w-full lg:w-1/2 h-[400px] md:h-[500px] lg:h-[550px]"
        >
          <Image
            src={dashboardImg}
            alt="Google Ads Overview"
            fill
            className="object-contain object-right rounded-l-2xl shadow-2xl"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
};

export default MississaugaSection4;
;
