"use client";
import React from "react";
import googleadsicon from "@/assets/googleads-logo.png";
import Link from "next/link";
import Gridimg from "@/assets/BgHomehero.png";
import Image from "next/image";

export default function VisibilityLossBanner() {
    return (
        <section className="relative w-full overflow-hidden bg-gradient-to-r from-blue-600 via-indigo-700 to-purple-500 text-white text-center py-16 px-6 flex flex-col justify-center items-center">

            {/* ✅ Background Grid Image */}
            <div className="absolute inset-0 w-full h-full z-0">
                <Image
                    src={Gridimg}
                    alt="Background grid"
                    fill
                    priority
                    className="object-cover opacity-20"
                />
            </div>

            {/* ✅ Google Ads Icon (Top Left) */}

            {/* ✅ Text Content */}
            <div className="relative z-10 max-w-5xl">
                <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
                    Every Day You’re Invisible, You’re Losing Customers.
                </h2>

                <p className="text-sm md:text-lg text-blue-50 leading-relaxed">
                    When potential customers search for{" "}
                    <span className="font-semibold text-white">“best dentist in Toronto”</span> or{" "}
                    <span className="font-semibold text-white">“SEO agency near me,”</span> they’re not scrolling —
                    they’re clicking the first brand Google or AI recommends.
                    If you’re not there, <span className="font-semibold text-white">you’re invisible.</span>
                    And invisibility in 2025 isn’t just a ranking issue — it’s a{" "}
                    <span className="font-semibold text-white">revenue leak.</span> Your competitors are capturing traffic, leads,
                    and authority that could’ve been yours.
                </p>

                <h3 className="text-sm mt-6 md:text-lg text-blue-50 leading-relaxed">
                    In our last 100 audits, the average business could have saved{" "}
                    <span className="font-semibold text-white">28% of ad spend</span> and increased conversions by{" "}
                    <span className="font-semibold text-white">3.2×</span> just through proper setup and management.
                </h3>
                <div className="mt-10 flex flex-wrap justify-center gap-4">
                    <Link href={'#form'}>
                    <button
                        className="px-8 py-3 rounded-full bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
                    >
                        Get My Free Audit
                    </button>
                    </Link>
                    <a href="mailto:zee@bixeltek.com">
                        <button
                            className="px-8 py-3 rounded-full border border-white text-white font-medium hover:bg-white hover:text-black transition"
                        >
                            Book a Strategy Call
                        </button>
                    </a>
                </div>
            </div>
        </section>
    );
}
