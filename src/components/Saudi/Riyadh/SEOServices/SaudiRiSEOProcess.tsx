"use client";

import React from "react";

const seoSteps = [
  {
    number: "01",
    title: "Discovery & Audit",
    text: "Analyze site health, competition, and entity gaps. Identify missing opportunities and growth areas to build a solid SEO foundation.",
    gradient: "from-blue-500 via-cyan-400 to-transparent",
    color: "text-yellow-500",
    bgcolor: "hover:bg-yellow-500",
  },
  {
    number: "02",
    title: "Keyword & Topical Mapping",
    text: "Build content silos in both Arabic and English. Map keywords and entities to pages to maximize topical authority and relevance.",
    gradient: "from-green-500 via-teal-400 to-transparent",
    color: "text-green-500",
    bgcolor: "hover:bg-orange-500",
  },
  {
    number: "03",
    title: "Technical Optimization",
    text: "Fix website structure, speed, schema markup, and Core Web Vitals to improve crawl efficiency and user experience.",
    gradient: "from-yellow-400 via-yellow-300 to-transparent",
    color: "text-blue-500",
    bgcolor: "hover:bg-yellow-400",
  },
  {
    number: "04",
    title: "Content & Authority Building",
    text: "Publish, interlink, and promote entity-based content. Build backlinks and mentions to strengthen domain authority and E-E-A-T signals.",
    gradient: "from-pink-500 via-purple-400 to-transparent",
    color: "text-red-500",
    bgcolor: "hover:bg-yellow-500",
  },
  {
    number: "05",
    title: "Tracking & Reporting",
    text: "Monthly ranking, traffic, and conversion insights through transparent dashboards — SEO isn’t a one-time fix, it’s a compounding investment.",
    gradient: "from-green-500 via-transparent to-transparent",
    color: "text-blue-600",
    bgcolor: "hover:bg-yellow-600",
  },
];

const RiyadhSeoWorkflow = () => {
  return (
    <div className="min-h-screen relative bg-black py-12 px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <h2 className="text-3xl md:text-6xl text-white text-center max-w-7xl mx-auto font-medium font-inter mb-6">
        From Discovery to Domination <br />{" "}
        <span className="text-yellow-500">A 5-Step SEO Framework.</span>
      </h2>
      <p className="text-gray-300 max-w-2xl mx-auto mb-12 font-poppins leading-relaxed text-center">
        Our Riyadh-based SEO process transforms websites from being invisible in search to ranking authority. Every step compounds value over time.
      </p>

      {/* MOBILE VERSION */}
      <div className="space-y-10 md:hidden">
        {seoSteps.map((item, idx) => (
          <div
            key={idx}
            className={`flex group ${item.bgcolor} p-6 rounded-3xl flex-col items-start transition-all duration-300`}
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
        {seoSteps.map((item, idx) => {
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
                  className={`absolute flex items-center gap-5 flex-row border border-white/40 bg-black max-w-3xl rounded-2xl p-10 z-10 transition-all duration-300 ${positionClasses}`}
                >
                  <div>
                    <p className={`${item.color} text-7xl font-bold`}>{item.number}</p>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-4">{item.title}</h2>
                    <p className="text-gray-300 leading-relaxed">{item.text}</p>
                  </div>
                </div>

                {/* CTA Button on Last Step */}
                {idx === seoSteps.length - 1 && (
                  <div className="mt-auto absolute -bottom-[20px] flex justify-center w-full">
                    <a href={"mailto:zee@bixeltek.com"}>
                      <button className="px-7 py-3 rounded-2xl bg-gradient-to-tr from-green-500 via-green-700 to-green-950 hover:bg-gradient-to-tr hover:from-green-950 hover:via-green-700 hover:to-green-500 text-white font-semibold text-sm shadow-lg transition">
                        Book a Free SEO Strategy Call
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
      <p className="text-gray-300 mt-10 max-w-[90%] md:max-w-[50%] mx-auto mb-12 font-poppins leading-relaxed text-center">
        Our framework ensures long-term, measurable SEO growth — no guesswork, no black box, just compounding results that drive authority and traffic.
      </p>
    </div>
  );
};

export default RiyadhSeoWorkflow;
