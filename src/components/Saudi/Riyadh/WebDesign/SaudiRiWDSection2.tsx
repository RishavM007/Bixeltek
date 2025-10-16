'use client';

import React from 'react'
import image1 from '@/assets/Unlock Your Online Potential_ Pro Web Design_.jpg'
import Image from 'next/image'
import { motion } from "framer-motion";
import websiteImg from "@/assets/omacomputers.com_home_(hd screenshot).png";

export default function SaudiRiWDSection2() {
    return (
        <section className="bg-black max-w-[95%] mx-auto md:max-w-[85%] text-white py-20 px-4 md:px-20 flex flex-col md:flex-row items-center gap-10">
            {/* LEFT SIDE — TEXT */}
            <div className="w-full md:w-1/2 flex flex-col gap-6">
                <h2 className="text-3xl md:text-5xl font-medium text-white">
                    Beautiful Isn’t Enough — <span className='text-yellow-500'>Your Website Has to Perform.</span> 
                </h2>
                <p className="text-gray-100 text-lg">
                    Many Riyadh businesses invest in design but forget performance. Here’s what usually breaks the funnel:
                </p>
                <ul className="list-disc list-inside text-gray-100 space-y-2">
                    <li>Pages that load slowly and lose mobile users.</li>
                    <li>No keyword or SEO structure behind the design.</li>
                    <li>Weak calls-to-action and poor conversion flow.</li>
                    <li>No analytics or tracking setup.</li>
                    <li>Outdated layouts that ignore bilingual audiences.</li>
                </ul>
                <p className="text-white font-semibold">
                    If your website doesn’t sell, it’s not marketing — it’s just decoration. We fix that by turning design into a measurable growth system.
                </p>
            </div>

            {/* RIGHT SIDE — IMAGE */}
            <div className="relative w-full md:w-1/2 flex justify-center items-start overflow-hidden rounded-[0px] shadow-2xl h-[550px]">
          <motion.div
            className="w-full"
            initial={{ y: 0 }}
            whileHover={{ y: -1600 }} // scroll up 200px on hover, adjust as needed
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

    )
}
