"use client";

import React from "react";

const steps = [
  {
    number: "01",
    title: "Market & Competitor Analysis",
    text: "We analyze your industry, competitors, and target demographics in Khobar, Dammam, and nearby regions to identify profitable opportunities.",
    gradient: "from-green-500 via-green-400 to-transparent",
    color: "text-green-500",
    bgcolor: "hover:bg-green-500",
  },
  {
    number: "02",
    title: "Campaign Architecture & Setup",
    text: "We design structured campaigns — separating branded, non-branded, service-specific, and remarketing ads to maximize control and clarity.",
    gradient: "from-yellow-400 via-yellow-300 to-transparent",
    color: "text-yellow-500",
    bgcolor: "hover:bg-yellow-500",
  },
  {
    number: "03",
    title: "Ad Copywriting & Creative Strategy",
    text: "Our copywriters craft ads that speak directly to user intent, increasing click-through rates and reducing cost-per-click.",
    gradient: "from-blue-500 via-blue-400 to-transparent",
    color: "text-blue-500",
    bgcolor: "hover:bg-blue-500",
  },
  {
    number: "04",
    title: "Tracking & Analytics",
    text: "We implement Google Tag Manager, Call Tracking, and Conversion APIs to measure every action — calls, forms, sales, and more.",
    gradient: "from-pink-500 via-purple-400 to-transparent",
    color: "text-purple-500",
    bgcolor: "hover:bg-purple-500",
  },
  {
    number: "05",
    title: "Continuous Optimization & Reporting",
    text: "Daily bid management, search term pruning, A/B testing, and ROI reporting ensure performance keeps improving every week.",
    gradient: "from-green-500 via-transparent to-transparent",
    color: "text-indigo-500",
    bgcolor: "hover:bg-indigo-500",
  },
];

const GoogleAdsProcessSection = () => {
  return (
    <section className="relative bg-[#fffdf5] py-20 px-6 md:px-16 overflow-hidden">
      {/* Header */}
      <div className="text-center max-w-5xl mx-auto mb-16">
        <h3 className="text-lg font-semibold mb-4 font-inter tracking-wider uppercase text-yellow-700">Our Process</h3>
        <h2 className="text-3xl md:text-6xl font-inter font-semibold text-black mb-4">
          How We Turn Ad Spend into ROI<span className=""></span>
        </h2>
        <p className="text-gray-950 text-lg md:text-xl leading-relaxed font-semibold font-poppins">
          We follow a precise, data-backed process to ensure every Riyal spent delivers measurable growth.
        </p>
      </div>

      {/* MOBILE VERSION */}
      <div className="space-y-10 md:hidden">
        {steps.map((item, idx) => (
          <div
            key={idx}
            className={`flex group ${item.bgcolor} p-6 rounded-3xl flex-col items-start transition-all duration-300`}
          >
            <p className={`${item.color} group-hover:text-white text-5xl font-bold mb-2`}>
              {item.number}
            </p>
            <h2 className="text-xl font-bold group-hover:text-white text-black mb-2">{item.title}</h2>
            <p className="text-gray-900 group-hover:text-white">{item.text}</p>
          </div>
        ))}
      </div>

      {/* DESKTOP VERSION */}
      <div className="hidden md:block max-w-6xl mx-auto mt-40 space-y-[4px]">
        {steps.map((item, idx) => {
          const isEven = idx % 2 === 0;
          return (
            <div key={idx} className="relative z-0">
              {/* Gradient Border */}
              <div
                className={`absolute -inset-1 rounded-[20px] ${
                  isEven ? "bg-gradient-to-r" : "bg-gradient-to-l"
                } ${item.gradient} z-0`}
              ></div>

              {/* Floating Card */}
              <div className="relative flex flex-col justify-between items-center z-10 bg-[#fffdf5] rounded-[20px] p-8 h-[260px]">
                <div
                  className={`absolute flex items-center gap-6 flex-row border border-white/30 bg-[#fffdf5] shadow-[rgba(0,0,0,0.4)_0px_2px_4px,rgba(0,0,0,0.3)_0px_7px_13px_-3px,rgba(0,0,0,0.2)_0px_-3px_0px_inset] max-w-4xl rounded-2xl p-10 z-10 transition-all duration-300 ${
                    isEven ? "right-10" : "left-10"
                  } -top-20`}
                >
                  <div>
                    <p className={`${item.color} text-7xl font-bold`}>{item.number}</p>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-black mb-3">{item.title}</h2>
                    <p className="text-gray-950 leading-relaxed">{item.text}</p>
                  </div>
                </div>

                {/* CTA Button on Last Step */}
                {idx === steps.length - 1 && (
                  <div className="mt-auto absolute -bottom-[20px] flex justify-center w-full">
                    <a href="mailto:zee@bixeltek.com">
                      <button className="px-7 py-3 rounded-full bg-gradient-to-tr from-green-500 via-green-700 to-green-950 text-white font-semibold text-sm shadow-lg hover:bg-[#d6ae3f] transition">
                        Talk To Our Google Ads Expert
                      </button>
                    </a>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Footer Note */}
      <p className="text-gray-950 mt-16 max-w-3xl mx-auto text-center font-poppins leading-relaxed">
        This isn’t a one-time setup — it’s a continuous growth engine designed to make your Google Ads perform better every single week.
      </p>
    </section>
  );
};

export default GoogleAdsProcessSection;
