"use client";

import React from "react";

const ecomProcess = [
  {
    number: "01",
    title: "Discovery & Audit",
    text: "We benchmark your store’s vitals: performance, funnel leaks, search visibility, and competitor landscape. Then we define KPIs — speed, conversion, retention.",
    gradient: "from-blue-400 via-cyan-400 to-transparent",
    color: "text-blue-400",
    bgcolor: "hover:bg-blue-500/20",
  },
  {
    number: "02",
    title: "Information Architecture & UX Strategy",
    text: "We design the journey. From navigation to product cards, every interaction supports intent. UX is built on user psychology — clarity before creativity.",
    gradient: "from-cyan-400 via-green-400 to-transparent",
    color: "text-green-400",
    bgcolor: "hover:bg-green-500/20",
  },
  {
    number: "03",
    title: "Design System & Prototyping",
    text: "Visual hierarchy, trust signals, and conversion paths take precedence. Every page is tested for readability, load sequence, and CTA logic.",
    gradient: "from-purple-400 via-pink-400 to-transparent",
    color: "text-pink-400",
    bgcolor: "hover:bg-purple-500/20",
  },
  {
    number: "04",
    title: "Development & Integration",
    text: "Full-stack build on Shopify, WooCommerce, or Next.js. We connect ERPs, CRMs, and marketing automation tools like Klaviyo, HubSpot, or Odoo for unified operations.",
    gradient: "from-orange-400 via-yellow-400 to-transparent",
    color: "text-yellow-400",
    bgcolor: "hover:bg-orange-500/20",
  },
  {
    number: "05",
    title: "Optimization & Launch",
    text: "Continuous testing via Lighthouse CI, GTMetrix, and Core Web Vitals. Server-side tracking and A/B testing setups are finalized before going live.",
    gradient: "from-pink-400 via-red-400 to-transparent",
    color: "text-red-400",
    bgcolor: "hover:bg-pink-500/20",
  },
  {
    number: "06",
    title: "Scale & Evolve",
    text: "After launch, we move to continuous CRO and technical scaling — caching, API refinement, new market adaptation, and SEO expansion.",
    gradient: "from-blue-400 via-transparent to-transparent",
    color: "text-teal-400",
    bgcolor: "hover:bg-green-500/20",
  },
];

const EcomProcessWorkflow = () => {
  return (
    <div className="min-h-screen relative bg-black py-20 md:py-12 px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <h2 className="text-3xl md:text-6xl text-white text-center max-w-7xl mx-auto font-medium font-inter mb-6">
        A Repeatable, Data-Driven Process <br />
        <span className="text-blue-400">for High-Performing Stores</span>
      </h2>

      <p className="text-gray-300 max-w-2xl mx-auto mb-12 font-poppins leading-relaxed text-center">
        Our process combines audit, UX, design, and development into a unified growth engine — built to convert faster, scale smoother, and perform longer.
      </p>

      {/* MOBILE VERSION */}
      <div className="space-y-10 md:hidden">
        {ecomProcess.map((item, idx) => (
          <div
            key={idx}
            className={`flex group ${item.bgcolor} py-6 rounded-3xl flex-col items-start transition-all duration-300`}
          >
            <p className={`${item.color} group-hover:text-white text-5xl font-bold mb-2`}>
              {item.number}
            </p>
            <h2 className="text-xl font-bold text-white mb-2">{item.title}</h2>
            <p className="text-gray-300 group-hover:text-white">{item.text}</p>
          </div>
        ))}
      </div>

      {/* DESKTOP VERSION */}
      <div className="hidden md:block max-w-7xl mx-auto mt-40 space-y-[4px]">
        {ecomProcess.map((item, idx) => {
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
                } ${item.gradient} z-0`}
              ></div>

              <div className="relative flex flex-col justify-between items-center z-10 bg-black rounded-[20px] p-8 h-[260px]">
                {/* Floating Card */}
                <div
                  className={`absolute flex items-center gap-5 flex-row border border-white/40 bg-black w-[85%] lg:max-w-3xl rounded-2xl p-10 z-10 transition-all duration-300 ${positionClasses}`}
                >
                  <div>
                    <p className={`${item.color} text-7xl font-bold`}>{item.number}</p>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-4">{item.title}</h2>
                    <p className="text-gray-300 leading-relaxed">{item.text}</p>
                  </div>
                </div>

                {idx === ecomProcess.length - 1 && (
                  <div className="mt-auto absolute -bottom-[20px] flex justify-center w-full">
                    <a href="mailto:zee@bixeltek.com">
                      <button className="px-7 py-3 rounded-2xl bg-gradient-to-tr from-blue-500 via-blue-700 to-blue-950 hover:bg-gradient-to-tr hover:from-blue-950 hover:via-blue-700 hover:to-blue-500 text-white font-semibold text-sm shadow-lg transition">
                        Talk To E-commerce Expert
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
      <p className="text-gray-300 mt-10 max-w-[90%] lg:max-w-[50%] mx-auto mb-12 font-poppins leading-relaxed text-center">
        We don’t just launch stores — we build scalable growth systems engineered for performance, psychology, and long-term ROI.
      </p>
    </div>
  );
};

export default EcomProcessWorkflow;
