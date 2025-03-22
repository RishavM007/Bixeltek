'use client';
import React from 'react'
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaSnapchatGhost, FaPinterestP, FaTiktok } from 'react-icons/fa';
import { SiGoogleads, SiSemrush } from "react-icons/si";
import { motion } from 'framer-motion';

export default function DmHero() {

    const socialIcons = [
        { icon: <FaFacebookF />, top: "20%", left: "10%", animation: { y: [0, -10, 0] } },
        { icon: <FaTwitter />, top: "30%", left: "80%", animation: { rotate: [0, 360] } },
        { icon: <SiSemrush />, top: "65%", left: "60%", animation: { scale: [1, 1.3, 1] } },
        { icon: <FaInstagram />, top: "70%", left: "20%", animation: { x: [-10, 10, -10] } },
        { icon: <FaYoutube />, top: "17%", left: "50%", animation: { scale: [1, 1.5, 1] } },
        { icon: <FaSnapchatGhost />, top: "85%", left: "50%", animation: { rotate: [0, -360] } },
        { icon: <FaPinterestP />, top: "60%", left: "90%", animation: { y: [0, 15, 0] } },
        { icon: <FaTiktok />, top: "40%", left: "10%", animation: { x: [10, -10, 10] } },
        { icon: <SiGoogleads />, top: "80%", left: "80%", animation: { x: [10, -10, 10] } },
    ];
  return (
    <section className="px-6 md:px-24 text-center bg-white min-h-[80vh] md:min-h-[100vh] lg:min-h-[120vh] flex flex-col items-center justify-center relative mt-[-150px] overflow-hidden">
                    <div className="max-w-4xl mx-auto relative z-10">
                        <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-8">
                            Reach more customers with our digital marketing services
                        </h1>
                        <p className="text-sm md:text-xl  font-normal mb-12">
                            <strong>Tap into new audiences</strong> and <strong>increase sales</strong> by selling across multiple channels, including popular marketplaces like Amazon, social media platforms like TikTok, and search engines like Google.
                        </p>
                        <a
                            href="#"
                            className="bg-[#670ef7] text-white text-sm md:text-lg font-semibold px-6 py-3 md:px-7 md:py-4 rounded-lg shadow-md hover:bg-[#570bd4] transition"
                        >
                            Get A Quote
                        </a>
                    </div>
                    {socialIcons.map((item, index) => (
                        <motion.div
                            key={index}
                            className="absolute hidden md:flex text-[#670ef7] text-2xl md:text-3xl lg:text-4xl"
                            style={{
                                top: item.top,
                                left: item.left,
                                transform: "translate(-50%, -50%)",
                            }}
                            animate={item.animation}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        >
                            {item.icon}
                        </motion.div>
                    ))}
                </section>
  )
}
