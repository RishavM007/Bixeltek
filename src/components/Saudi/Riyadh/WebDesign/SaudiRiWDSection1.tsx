"use client";
import React from "react";
import Image from "next/image";
import fastWebImage from "@/assets/laptop dentist 2.png"; 
import Link from "next/link";// ⚙️ Replace with your actual image

export default function WebSpeedRiyadh() {
    return (
        <section className="bg-black max-w-[95%] md:max-w-[85%] mx-auto text-white py-24 px-6 md:px-20 flex flex-col md:flex-row items-center gap-10 overflow-hidden">
            {/* LEFT SIDE — IMAGE */}
            <div className="relative w-full md:w-1/2 h-[400px] md:h-[450px] rounded-2xl overflow-hidden shadow-lg">
                <Image
                    src={fastWebImage}
                    alt="High-speed web design for Riyadh businesses"
                    fill
                    className="object-cover object-center"
                    priority
                />
                {/* Gradient mask overlay */}
                {/* <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_rgba(0,0,0,0.1),_transparent_90%)] before:absolute before:inset-0 before:bg-[linear-gradient(to_right,rgba(0,0,0,0.9),transparent_20%,transparent_80%,rgba(0,0,0,0.9))]" /> */}
            </div>


            {/* RIGHT SIDE — CONTENT */}
            <div className="w-full md:w-1/2 space-y-6">
                <h2 className="text-3xl md:text-5xl font-medium leading-tight">
                    Riyadh Is Moving Fast —{" "}
                    <span className="text-yellow-500">Your Website Should Too.</span>
                </h2>

                <div className="space-y-5 text-gray-200 text-lg leading-relaxed">
                    <p>
                        As Saudi Arabia’s capital leads <span className="text-yellow-400 font-medium">Vision 2030</span>, businesses in every
                        sector are racing to modernize their digital presence.
                    </p>

                    <p>
                        But the truth is simple: a slow, outdated website silently kills conversions.
                        Your site isn’t just your brochure — it’s your <span className="font-semibold text-white">sales engine.</span>
                    </p>

                    <p>
                        If it can’t load quickly, capture leads, and tell your brand story in both
                        Arabic and English, you’re losing customers by the minute.
                    </p>

                    <p>
                        At <span className="text-yellow-400 font-medium">Bixeltek</span>, we build websites that blend{" "}
                        <span className="text-white font-semibold">strategy, speed,</span> and{" "}
                        <span className="text-white font-semibold">storytelling</span> — crafted to help Riyadh brands win
                        attention and revenue.
                    </p>
                    <Link href={"#form"}>
                        <button className="px-7 mt-10 py-3 rounded-full bg-gradient-to-tr from-green-500 via-green-700 to-green-950 hover:bg-gradient-to-tr hover:from-green-950 hover:via-green-700 hover:to-green-500 text-white font-semibold text-sm shadow-lg hover:bg-[#d6ae3f] transition">
                            Get Your Web Design Quote
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    );
}
