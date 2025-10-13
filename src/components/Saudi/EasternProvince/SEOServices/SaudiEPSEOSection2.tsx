"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import seoImg from "@/assets/122748606.jpg"; // ✅ replace with your actual image

export default function SemanticSEOSection() {
  return (
    <section className="relative py-10 md:py-16 bg-black overflow-hidden">
      <div className="flex max-w-[95%] md:max-w-[85%] mx-auto gap-10 flex-col md:flex-row-reverse items-center">

        {/* ✅ Left Image Container */}
        <div className="relative w-full md:w-1/2 h-[300px] md:h-[500px] flex justify-center items-center">
          <Image
            src={seoImg}
            alt="Semantic SEO"
            fill
            className="rounded-[0px] object-cover shadow-[rgba(0,0,0,0.4)_0px_2px_4px,rgba(0,0,0,0.3)_0px_7px_13px_-3px]"
            priority
          />
          {/* ✅ Optional bottom fade */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent z-20 pointer-events-none" />
        </div>

        {/* ✅ Right Content */}
        <div className="px-6 w-full md:w-1/2 py-10">
          {/* Heading */}
          <h2 className="text-3xl md:text-5xl font-inter text-white font-medium mb-4 leading-snug">
            Old SEO Doesn’t Work Anymore.{" "}
            <span className="text-yellow-500">AI Has Changed the Rules.</span>
          </h2>

          {/* Copy */}
          <p className="text-gray-300 mb-6 font-poppins leading-relaxed max-w-2xl">
            Most agencies still chase backlinks, keyword density, and random blog posts. The result?
            Thin content that doesn’t convert — or worse, gets ignored by search engines entirely.
          </p>

          <p className="text-gray-300 mb-6 font-poppins leading-relaxed max-w-2xl">
            When your site isn’t built around structured data, entity relevance, and user experience,
            even great services stay invisible.
          </p>

          <p className="text-gray-300 mb-6 font-poppins leading-relaxed max-w-2xl">
            That’s why at Bixeltek, we replaced outdated tactics with a semantic SEO system that
            search engines — and now AI — actually understand.
          </p>

          <p className="text-gray-300 mb-8 font-poppins leading-relaxed max-w-2xl">
            We engineer content that proves who you are, what you offer, and why you’re the best result.
          </p>

          {/* CTA Button */}
          <Link href={"#form"}>
            <button className="px-7 py-3 rounded-full bg-gradient-to-tr from-green-500 via-green-700 to-green-950 hover:bg-gradient-to-tr hover:from-green-950 hover:via-green-700 hover:to-green-500 text-white font-semibold text-sm shadow-lg transition">
              Get a Free SEO Audit
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
