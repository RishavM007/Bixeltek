"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import sampleImg from "@/assets/code-conversion.jpg";
import code from "@/assets/codess.png"; // ✅ replace with your image

const listItems = [
  "Semantic markup & entity-based internal linking.",
  "SSR/SSG rendering for indexability.",
  "Prefetching & route-level code-splitting.",
  "JSON-LD structured data for all content types.",
  "GA4 + server-side tracking for clean analytics.",
  "Localization logic for Arabic, English, and French parity.",
];

const textVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: any) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const CodeConversionSection = () => {
  return (
    <section className="w-full bg-black text-white py-4 md:py-24 px-6 md:px-16">
      <div className="max-w-[95%] md:max-w-[85%] mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Left Code Image Block */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="w-full md:w-1/2 relative h-[400px] md:h-[570px] rounded-3xl overflow-hidden"
        >
          <div className="relative h-full w-full grow">
            <div className="absolute bottom-0 left-0 md:left-10 top-10 right-0 overflow-hidden rounded-tl-xl bg-gray-900 shadow-2xl">
              <div className="flex bg-gray-800/40 ring-1 ring-white/5">
                <div className="-mb-px flex text-sm font-medium text-gray-400">
                  <div className="border-b border-r border-b-white/20 border-r-white/10 bg-white/5 px-4 py-2 text-white">
                    NotificationSetting.jsx
                  </div>
                  <div className="border-r border-gray-600/10 px-4 py-2">
                    App.jsx
                  </div>
                </div>
              </div>
              <div className="relative h-full w-full overflow-x-auto">
                 <Image
                    src={code}
                    alt="code"
                    className="h-full w-full object-cover"
                  />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Text Content */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="w-full md:w-1/2"
        >
          <h2 className="text-3xl md:text-5xl font-semibold mb-6 leading-tight">
            Where <span className="text-blue-500">Code</span> and{" "}
            <span className="text-blue-500">Conversion</span> Work in Sync
          </h2>

          <p className="text-gray-300 text-lg mb-8">
            A great website isn’t just engineered — it’s optimized. Our
            development aligns with SEO and marketing science at every level.
          </p>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-medium mb-4 text-blue-400">
              Under the Hood:
            </h4>
            <ul className="space-y-3 text-gray-300">
              {listItems.map((item, i) => (
                <motion.li
                  key={i}
                  custom={i}
                  variants={textVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="flex items-start gap-2"
                >
                  <span className="text-blue-500">▹</span> {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
            viewport={{ once: true }}
            className="text-gray-400 text-sm mt-8 border-t border-gray-800 pt-4"
          >
            This intersection of code + search + psychology is what makes
            <span className="text-blue-400 font-medium"> Bixeltek’s</span> builds
            outperform.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default CodeConversionSection;
