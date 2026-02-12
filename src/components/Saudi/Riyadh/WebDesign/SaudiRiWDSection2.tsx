"use client";

import React from "react";
import { Check } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import websiteImg from "@/assets/omacomputers.com_home_(hd screenshot).png";

export default function SaudiRiWDSection2() {
  const issues = [
    "Pages that load slowly and lose mobile users.",
    "No keyword or SEO structure behind the design.",
    "Weak calls-to-action and poor conversion flow.",
    "No analytics or tracking setup.",
    "Outdated layouts that ignore bilingual audiences.",
  ];

  return (
    <section className="bg-black mx-auto lg:max-w-[95%] text-white py-20 px-6 lg:px-20 flex flex-col-reverse lg:flex-row items-center gap-16">
      {/* LEFT SIDE — TEXT */}
      <div className="w-full lg:w-1/2 flex flex-col gap-6">
        <h2 className="text-3xl md:text-6xl font-medium text-white leading-tight">
          Beautiful Isn’t Enough —{" "}
          <span className="text-yellow-500">Your Website Has to Perform.</span>
        </h2>

        <p className="text-gray-200 text-lg leading-relaxed">
          Many Riyadh businesses invest in design but forget performance. Here’s
          what usually breaks the funnel:
        </p>

        {/* ✅ 2-column check icon list */}
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 text-gray-100">
          {issues.map((issue, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <Check className="text-yellow-500 w-5 h-5 mt-1 flex-shrink-0" />
              <span>{issue}</span>
            </li>
          ))}
        </ul>

        <p className="text-white font-semibold leading-relaxed">
          If your website doesn’t sell, it’s not marketing — it’s just
          decoration. We fix that by turning design into a measurable growth
          system.
        </p>
      </div>

      {/* RIGHT SIDE — IMAGE */}
      <div className="relative w-full lg:w-1/2 flex justify-center items-start overflow-hidden rounded-[0px] h-[550px]">
        <motion.div
          className="w-full"
          initial={{ y: 0 }}
          whileHover={{ y: -1600 }}
          transition={{ duration: 3.5, ease: "easeInOut" }}
        >
          <Image
            src={websiteImg}
            alt="Website trust and conversion"
            className="w-full h-auto object-cover"
          />
        </motion.div>

        <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-black to-transparent z-20 pointer-events-none" />
      </div>
    </section>
  );
}
