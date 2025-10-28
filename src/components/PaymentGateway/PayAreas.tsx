"use client";
import React from "react";
import Image from "next/image";

import saudiImg from "@/assets/Saudi Web Design.png";
import indiaImg from "@/assets/india-gate-delhi-1-attr-hero.jpeg";
import uaeImg from "@/assets/pexels-photo-13736456.jpeg";
import canadaImg from "@/assets/m_Toronto_destination_main_1_l_572_1000.webp";
import usaImg from "@/assets/17.jpg";
import bgimage from "@/assets/dotted-map-1.webp";

const locations = [
  {
    country: "Saudi Arabia",
    emoji: "🇸🇦",
    image: saudiImg,
    desc: (
      <>
        <a
          href="/saudi-arabia/riyadh"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          Riyadh
        </a>
        ,{" "}
        <a
          href="/saudi-arabia/eastern-province"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          Eastern Province
        </a>
        ,{" "}
        — bilingual builds with Arabic + English parity, mobile-first layouts,
        and GCC-compliant hosting.
      </>
    ),
  },
  {
    country: "India",
    emoji: "🇮🇳",
    image: indiaImg,
    desc: (
      <>
        <a
          href="/hyderabad"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          Hyderabad
        </a>
        ,{" "}
        — fast, marketing-ready hybrid websites integrating CMS, CRM, and
        automation tools.
      </>
    ),
  },
  {
    country: "UAE",
    emoji: "🇦🇪",
    image: uaeImg,
    desc: (
      <>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className=""
        >
          Dubai
        </a>
        ,{" "}
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className=""
        >
          Abu Dhabi
        </a>{" "}
        — premium design + high-performance React front-ends for luxury,
        real estate, and financial brands.
      </>
    ),
  },
  {
    country: "Canada",
    emoji: "🇨🇦",
    image: canadaImg,
    desc: (
      <>
        <a
          href="/toronto"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          Toronto
        </a>
        ,{" "}
        <a
          href="/vancouver"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          Vancouver
        </a>
        ,{" "}
        <a
          href="/mississauga"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          Mississauga
        </a>{" "}
        — bilingual (EN/FR) systems built for accessibility, compliance, and
        Core Web Vitals excellence.
      </>
    ),
  },
  {
    country: "United States",
    emoji: "🇺🇸",
    image: usaImg,
    desc: (
      <>
        SaaS and enterprise clients across{" "}
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className=""
        >
          the U.S.
        </a>{" "}
        using Next.js + Node for speed, analytics depth, and compliance
        readiness.
      </>
    ),
  },
];

const PayAreas = () => {
  return (
    <section className="relative w-full py-24 px-6 md:px-16 bg-white text-black overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={bgimage}
          alt="Global background"
          fill
          className="object-contain object-center"
        />
      </div>

      {/* Section Heading */}
      <div className="relative z-10 max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-6xl font-medium mb-4">
          Local Payment Systems,{" "}
          <span className="text-purple-500">Global Performance</span>
        </h2>
        <p className="text-gray-900 text-lg">
          We engineer e-commerce ecosystems for businesses in:
        </p>
      </div>

      {/* Cards */}
      <div className="relative z-10 flex flex-wrap justify-center gap-8 max-w-7xl mx-auto">
        {locations.map((loc, idx) => (
          <div
            key={idx}
            className="flex flex-col bg-white hover:bg-purple-100 rounded-2xl p-6 max-w-sm w-full md:w-[30%] shadow-sm transition-all duration-300"
            style={{ marginTop: idx >= 3 ? "2rem" : "0" }}
          >
            <div className="w-full h-48 relative mb-4 rounded-xl overflow-hidden">
              <Image
                src={loc.image}
                alt={loc.country}
                fill
                className="object-cover object-center"
              />
            </div>
            <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
              <span>{loc.emoji}</span> {loc.country}
            </h3>
            <p className="text-gray-900 leading-relaxed">{loc.desc}</p>
          </div>
        ))}
      </div>

      {/* Footer */}
      <p className="relative z-10 text-center text-gray-900 mt-12 max-w-2xl mx-auto">
        Wherever your users are, we deploy your site on the edge — close,
        compliant, and lightning-fast.
      </p>
    </section>
  );
};

export default PayAreas;
