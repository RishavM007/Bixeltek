"use client";

import React from "react";

const layers = [
  {
    number: "01",
    title: "Audit & NAP Correction",
    text: "We start by running a complete Local SEO audit — identifying data conflicts, duplicate listings, and NAP (Name, Address, Phone) inconsistencies across Google, Apple Maps, and local directories. Standardizing this ensures Google trusts your business data at every touchpoint.",
    gradient: "from-green-500 via-lime-400 to-transparent",
    color: "text-green-500",
    bgcolor: "hover:bg-green-500",
  },
  {
    number: "02",
    title: "Google Business Profile Optimization",
    text: "We go beyond claiming your listing — we optimize it for conversion. That means category-aligned descriptions, geo-tagged photos, FAQ optimization, service areas, and UTM tracking so every customer action is measurable and attributed.",
    gradient: "from-blue-500 via-cyan-400 to-transparent",
    color: "text-cyan-400",
    bgcolor: "hover:bg-blue-500",
  },
  {
    number: "03",
    title: "Local Content & Landing Pages",
    text: "We create SEO-rich location pages tailored to each service area — blending human-first copywriting with local keywords, schema markup, and internal linking. These pages boost both organic reach and relevance in city-level search results.",
    gradient: "from-yellow-400 via-orange-400 to-transparent",
    color: "text-yellow-400",
    bgcolor: "hover:bg-yellow-500",
  },
  {
    number: "04",
    title: "Citations & Local Backlinks",
    text: "We build authority by listing your business in trusted regional directories — from Yelp and JustDial to Arab Local and GCC Yellow Pages. Every mention acts as a trust signal, strengthening your local domain authority and Google Map Pack ranking.",
    gradient: "from-teal-400 via-emerald-500 to-transparent",
    color: "text-emerald-400",
    bgcolor: "hover:bg-emerald-500",
  },
  {
    number: "05",
    title: "Review & Reputation Management",
    text: "We help you scale authentic reviews through automated WhatsApp and email funnels. Sentiment analysis tools monitor every response, feeding real feedback into your CRO (Conversion Rate Optimization) loop — so your reputation drives measurable ROI.",
    gradient: "from-purple-500 via-transparent to-transparent",
    color: "text-purple-400",
    bgcolor: "hover:bg-purple-500",
  },
];

const LocalSEOFrameworkSection = () => {
  return (
    <div className="min-h-screen relative bg-black py-16 px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <h2 className="text-3xl md:text-6xl text-white text-center max-w-7xl mx-auto font-medium mb-6">
        We Engineer <span className="text-blue-500">Local Trust</span> at Scale
      </h2>
      <p className="text-gray-300 max-w-2xl mx-auto mb-12 leading-relaxed text-center">
        We don’t just claim your listing — we build a repeatable Local SEO system combining data accuracy, 
        social proof, and geo-targeted content. Our 5-layer framework ensures your brand earns visibility, 
        trust, and measurable conversions in every market.
      </p>

      {/* MOBILE VERSION */}
      <div className="space-y-10 md:hidden">
        {layers.map((layer, idx) => (
          <div
            key={idx}
            className={`flex group ${layer.bgcolor} p-6 rounded-3xl flex-col items-start transition-all duration-300`}
          >
            <p className={`${layer.color} group-hover:text-white text-5xl font-bold mb-2`}>
              {layer.number}
            </p>
            <h3 className="text-xl font-bold text-white mb-2">{layer.title}</h3>
            <p className="text-gray-300 group-hover:text-white">{layer.text}</p>
          </div>
        ))}
      </div>

      {/* DESKTOP VERSION */}
      <div className="hidden md:block max-w-7xl mx-auto mt-40 space-y-[4px]">
        {layers.map((layer, idx) => {
          const isEven = idx % 2 === 0;
          let positionClasses = "";
          if (idx % 4 === 0) positionClasses = "-top-20 right-10";
          else if (idx % 4 === 1) positionClasses = "-top-20 left-1/3 -translate-x-1/4";
          else if (idx % 4 === 2) positionClasses = "-top-20 left-10";
          else if (idx % 4 === 3) positionClasses = "-top-20 left-1/3 -translate-x-1/4";

          return (
            <div key={idx} className="relative z-0">
              {/* Gradient Border */}
              <div
                className={`absolute -inset-1 rounded-[20px] ${
                  isEven ? "bg-gradient-to-r" : "bg-gradient-to-l"
                } ${layer.gradient} z-0`}
              ></div>

              <div className="relative flex flex-col justify-between items-center z-10 bg-black rounded-[20px] p-8 h-[260px]">
                {/* Floating Card */}
                <div
                  className={`absolute flex items-center gap-5 flex-row border border-white/40 bg-black max-w-3xl rounded-2xl p-10 z-10 transition-all duration-300 ${positionClasses}`}
                >
                  <div>
                    <p className={`${layer.color} text-7xl font-bold`}>{layer.number}</p>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-4">{layer.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{layer.text}</p>
                  </div>
                </div>

                {/* CTA Button on Last Step */}
                {idx === layers.length - 1 && (
                  <div className="mt-auto absolute -bottom-[20px] flex justify-center w-full">
                    <a href="mailto:zee@bixeltek.com">
                      <button className="px-7 py-3 rounded-2xl bg-gradient-to-tr from-purple-500 via-purple-700 to-purple-950 hover:from-purple-950 hover:via-purple-700 hover:to-purple-500  text-white font-semibold text-sm transition">
                        Get My Local SEO Audit
                      </button>
                    </a>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Footer Paragraph */}
      <p className="text-gray-300 mt-10 max-w-[90%] md:max-w-[55%] mx-auto mb-12 leading-relaxed text-center">
        Each layer reinforces the next — visibility builds trust, trust drives engagement, and
        engagement leads to real, trackable sales growth.
      </p>
    </div>
  );
};

export default LocalSEOFrameworkSection;
