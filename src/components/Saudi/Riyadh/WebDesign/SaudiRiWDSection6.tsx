"use client";

import React from "react";

export default function RiyadhWebMapSection() {
    return (
        <section className="py-32 px-6 lg:px-20 bg-black text-white">
            <div className="lg:max-w-[85%] mx-auto flex flex-col lg:flex-row items-center gap-12">
                {/* LEFT SIDE — Heading + Copy */}
                <div className="lg:w-1/2 space-y-6">
                    <h2 className="text-3xl md:text-6xl font-bold">
                         Building Websites for Businesses Across Riyadh
                    </h2>
                    <p className="text-gray-300 text-lg leading-relaxed">
                        We design campaigns that target both Arabic and English search intent across:{" "}
                        <span className="text-white font-semibold">
                            Serving Al Olaya • Diriyah • Al Yasmin • Al Sulimaniyah • Al Malaz • Al Nakheel • Qurtubah • Al Narjis — each project localized for Saudi search behavior and Arabic-English audiences.
                        </span>
                    </p>
                    <a href={"/contact-us"}>
                        <button className="px-7 py-3 mt-7 rounded-2xl bg-gradient-to-tr from-green-500 via-green-700 to-green-950 hover:bg-gradient-to-tr hover:from-green-950 hover:via-green-700 hover:to-green-500 text-white font-semibold text-sm shadow-lg transition">
                            Get An Instant Quote
                        </button>
                    </a>
                </div>

                {/* RIGHT SIDE — Map Iframe */}
                <div className="lg:w-1/2 w-full h-80 md:h-96 rounded-2xl overflow-hidden shadow-2xl border border-gray-700">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d927767.3399049372!2d46.163081231815035!3d24.723750059422045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f03890d489399%3A0xba974d1c98e79fd5!2sRiyadh%20Saudi%20Arabia!5e0!3m2!1sen!2sin!4v1760370110918!5m2!1sen!2sin" width="600" height="450" loading="lazy" className="h-full w-full rounded-3xl"></iframe>
                </div>
            </div>
        </section>
    );
}
