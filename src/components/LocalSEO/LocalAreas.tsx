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
                    href="/saudi-arabia/riyadh/seo-services"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                >
                    Riyadh
                </a>
                ,{" "}
                <a
                    href="/saudi-arabia/eastern-province/seo-services"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                >
                    Eastern Province
                </a>
                ,{" "}
                <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className=""
                >
                    Dhahran
                </a>{" "}
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
                    href="/social-media-marketing-agency-hyderabad"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                >
                    Hyderabad
                </a>
                ,{" "}
                <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white "
                >
                    Bangalore
                </a>
                ,{" "}
                <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white "
                >
                    Mumbai
                </a>{" "}
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
                — premium design + high-performance React front-ends for luxury, real
                estate, and financial brands.
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
                    href="/toronto/seo-services"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                >
                    Toronto
                </a>
                ,{" "}
                <a
                    href="/vancouver/seo-services"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                >
                    Vancouver
                </a>{" "}
                <a
                    href="/mississauga/seo-services"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                >
                    Missassauga
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

const LocalAreas = () => {
    return (
        <section className="relative w-full py-24 px-6 md:px-16 bg-black text-white overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0">
                <Image
                    src={bgimage}
                    alt="Global background"
                    fill
                    className="object-contain object-center"
                />
            </div>

            {/* Heading */}
            <div className="relative z-10 max-w-4xl mx-auto text-center mb-12">
                <h2 className="text-3xl md:text-6xl font-semibold mb-4">
                    Local Expertise ,{" "}
                    <span className="text-blue-500">with Global Execution</span>
                </h2>
                <p className="text-gray-300 text-lg">
                    We manage multi-location Local SEO systems across :
                </p>
            </div>

            {/* Cards */}
            <div className="relative z-10 flex flex-wrap justify-center gap-8 max-w-7xl mx-auto">
                {locations.map((loc, idx) => (
                    <div
                        key={idx}
                        className={`flex flex-col bg-black/70 hover:bg-neutral-800 rounded-2xl p-6 max-w-sm w-full md:w-[30%] transition-all duration-300`}
                        style={{
                            marginTop: idx >= 3 ? "2rem" : "0",
                        }}
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
                        <p className="text-gray-300 leading-relaxed">{loc.desc}</p>
                    </div>
                ))}
            </div>

            {/* Footer */}
            <p className="relative z-10 text-center text-gray-300 mt-12 max-w-2xl mx-auto">
                Wherever your users are, we deploy your site on the edge — close,
                compliant, and lightning-fast.
            </p>
        </section>
    );
};

export default LocalAreas;
