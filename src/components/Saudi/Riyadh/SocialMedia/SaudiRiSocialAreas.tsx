"use client";

import React from "react";

export default function SaudiRiAreasWeServe() {
  return (
    <section className="py-20 px-6 lg:px-20 bg-white text-black">
      <div className="lg:max-w-[85%] mx-auto flex flex-col lg:flex-row items-center gap-12">
        
        {/* LEFT SIDE — TEXT CONTENT */}
        <div className="lg:w-1/2 space-y-6">
          <h2 className="text-4xl md:text-5xl font-medium leading-tight">
            Helping Brands Across{" "} <br />
            <span className="text-blue-500">Riyadh Grow Online</span>
          </h2>
          <p className="text-black text-lg leading-relaxed">
            We create bilingual campaigns for clients across Riyadh’s top
            business zones —{" "}
            <span className="text-black font-semibold">
              Al Olaya • Diriyah • Al Yasmin • Al Malaz • Qurtubah • Al
              Sulimaniyah • Al Nakheel • Al Narjis
            </span>
            . <br />
            Local insights meet global marketing systems — that’s the{" "}
            <span className="text-blue-500 font-semibold">Bixeltek</span>{" "}
            advantage.
          </p>
          <a href="mailto:zee@bixeltek.com">
            <button className="px-7 py-3 mt-7 rounded-2xl bg-gradient-to-tr from-blue-600 via-blue-700 to-blue-900 hover:bg-gradient-to-tr hover:from-blue-900 hover:via-blue-700 hover:to-blue-600 text-white font-semibold text-sm shadow-lg transition-all duration-300">
              Let’s Talk Growth →
            </button>
          </a>
        </div>

        {/* RIGHT SIDE — MAP */}
        <div className="lg:w-1/2 w-full h-80 md:h-96 rounded-2xl overflow-hidden shadow-2xl">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d927767.3399049372!2d46.163081231815035!3d24.723750059422045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f03890d489399%3A0xba974d1c98e79fd5!2sRiyadh%20Saudi%20Arabia!5e0!3m2!1sen!2sin!4v1760370110918!5m2!1sen!2sin"
            width="600"
            height="450"
            loading="lazy"
            className="h-full w-full rounded-3xl"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
