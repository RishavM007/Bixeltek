"use client";

import { Check } from "lucide-react";
import Image from "next/image";
import seoImage from "@/assets/KSA-and-Cisco_1200x675.jpg"; // replace with your actual image

export default function FutureSEOSection() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center mx-auto max-w-[90%] md:max-w-[85%] py-16 gap-10">
      {/* LEFT IMAGE */}
      <div className="w-full relative md:w-1/2">
        <Image
          src={seoImage}
          alt="AI-powered SEO strategy"
          className=" shadow-lg object-cover w-full h-full"
        />
         <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent z-20 pointer-events-none" />
      </div>

      {/* RIGHT CONTENT */}
      <div className="w-full md:w-1/2 flex flex-col gap-6">
        <h2 className="text-3xl md:text-5xl font-medium text-white leading-snug">
          Because We Don’t Do SEO the Old Way — <span className="text-yellow-500">We Build for the Future.</span> 
        </h2>

        <p className="text-gray-50 text-lg leading-relaxed">
          Bixeltek is one of the few agencies in the region combining
          <span className="font-semibold text-gray-50">
            {" "}
            AI-powered SEO, semantic content systems,{" "}
          </span>
          and{" "}
          <span className="font-semibold text-gray-50">
            Google Partner expertise
          </span>{" "}
          under one roof.
        </p>

        <ul className="flex flex-col gap-4 text-white text-base">
          {[
            "Results in as little as 60 days.",
            "Full transparency — you own your data and reports.",
            "Arabic + English content optimization.",
            "Technical + content SEO handled by certified experts.",
            "Long-term scalability, not short-term ranking spikes.",
            "We don’t chase algorithms — we align with them.",
          ].map((point, index) => (
            <li key={index} className="flex items-start gap-3">
              <Check className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
