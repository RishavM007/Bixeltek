"use client";

import React from "react";
import Link from "next/link";
import ContactFromNew from "../ContactFormNew";

const BlockQuoteSection = () => {
  return (
    <section className="w-full bg-gray-50">
      <div
        className="relative flex justify-center items-center text-white min-h-[70vh] shadow-xl p-10 overflow-hidden"
        style={{
          backgroundImage: `url('/cta_bg_1.jpeg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay (optional for readability) */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content Wrapper */}
        <div className="relative z-10 container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ">
          {/* Left Text Section */}
          <div className="text-center lg:text-left">
            <h2 className="text-3xl md:text-6xl font-bold mb-4 text-white">
              Don’t Wait—Your Competitors Aren’t
            </h2>
            <p className="text-gray-200 mb-4 max-w-2xl text-lg md:text-xl">
              Every week you delay is another week your competitors’ phones keep ringing instead of yours. Patients are searching right now. If they don’t find you, they’ll book with someone else.
            </p>
            <p className="text-gray-200 mb-6 text-lg md:text-xl">
              We only onboard a limited number of clinics per city to protect our clients’ results.
            </p>

            {/* CTA Button */}
            <div className="mt-8">
              <Link href={"tel:+919100032301"}>
                <button className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
                  Be the First Choice for Patients..!!
                </button>
              </Link>
            </div>
          </div>

          {/* Right Contact Form */}
          <div className="bg-transparent rounded-2xl shadow-lg border">
            <ContactFromNew />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlockQuoteSection;
