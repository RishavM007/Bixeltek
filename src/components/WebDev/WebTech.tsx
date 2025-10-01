import Image from "next/image";

import React from "react";
import wordpress from "@/assets/WordPress-logotype-wordmark-white.png";
import drupel from "@/assets/Wordmark2_blue_RGB.png";
import elementor from "@/assets/Elementor-Logo-Full-Pink.png";
import nextjsicon from "@/assets/Logo.png";
import tailwindcsslogo from "@/assets/queesdocker1-768x432-1.webp";
import jslogo from "@/assets/nodejs-white-web-story.png";
import html from "@/assets/Stripe_Logo,_revised_2016.svg.png";
import mongo from "@/assets/NewMongo_logo_White-2000x503.png";
import hostinder from '@/assets/Hostinger-logo.png'
import shopify from '@/assets/shopify_logo_white.png'
import mongoose from "@/assets/razorpay.png";
import redis from "@/assets/redis-icon.webp";

const logos = [
  { src: wordpress, alt: "WordPress" },
  { src: elementor, alt: "Elementor" },
  { src: nextjsicon, alt: "Next.js" },
  { src: tailwindcsslogo, alt: "TailwindCSS" },
  { src: jslogo, alt: "Node.js" },
  { src: html, alt: "HTML5" },
  { src: mongo, alt: "MongoDB" },
  { src: mongoose, alt: "Mongoose" },
  { src: redis, alt: "Redis" },
  { src: drupel, alt: "WordPress" },
  { src: hostinder, alt: "Hostinger" },
  { src: shopify, alt: "Shopify" },
];


export default function WebTech() {
  return (
    <section className="w-full py-16 mt-20 bg-black">
      <div className="max-w-[90%] mx-auto flex flex-col md:flex-row gap-8">
        {/* Left text */}
        <div className="w-full md:w-[40%] flex items-center justify-center md:justify-start">
          <h2 className=" text-3xl md:text-5xl text-center md:text-left font-semibold text-gray-50">
            Powered by<br /> Industry-Leading Tools
          </h2>
        </div>
        
        {/* Right side logos */}
        <div className="w-full md:w-[60%] col-span-2 md:col-span-3">
          {Array.from({ length: 3 }).map((_, rowIndex) => (
            <div
              key={rowIndex}
              className={`grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-14 md:gap-7 p-5 items-center justify-items-center py-2  ${
                rowIndex !== 2 ? "" : ""
              }`}
            >
              {logos
                .slice(rowIndex * 4, rowIndex * 4 + 4)
                .map((logo, idx) => (
                  <Image
                    key={idx}
                    src={logo.src}
                    alt={logo.alt}
                    className={` h-10 w-auto object-contain ${logo.alt === "Hostinger" ? "md:h-14" : "h-10"} ${logo.alt === "Next.js" ? "md:h-6" : "h-10"} ${logo.alt === "Redis" ? "md:h-32" : "h-10"} ${logo.alt === "Mongoose" ? "md:h-10" : "h-10"} ${logo.alt === "Node.js" ? "md:h-16" : "h-10"} ${logo.alt === "Shopify" ? "h-12" : "h-10"} ${logo.alt === "TailwindCSS" ? "h-24" : "h-10"}` }
                  />
                ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
