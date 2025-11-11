"use client";

import React from "react";

const processLayers = [
  {
    number: "01",
    title: "Research & Audit",
    text: "We start with a deep-dive technical, keyword, and competitive analysis. Our audit maps every ranking factor — from crawl depth to keyword gaps — and evaluates AI-readiness to identify how your site can leverage intelligent search signals.",
    gradient: "from-blue-500 via-cyan-400 to-transparent",
    color: "text-blue-500",
    bgcolor: "hover:bg-blue-500",
  },
  {
    number: "02",
    title: "Foundation Setup",
    text: "We establish the traditional SEO backbone — from metadata and structured sitemaps to GMB optimization and local SEO enhancements. This stage ensures your site is technically sound, fast, and ready to rank on both organic and AI-driven surfaces.",
    gradient: "from-green-500 via-lime-400 to-transparent",
    color: "text-green-500",
    bgcolor: "hover:bg-green-500",
  },
  {
    number: "03",
    title: "Content Architecture",
    text: "We craft a semantic content structure powered by topical clusters, treatment hubs, and FAQ ecosystems. Every page connects contextually to strengthen authority and relevance, covering city-service and intent-based keyword combinations.",
    gradient: "from-yellow-400 via-orange-400 to-transparent",
    color: "text-yellow-400",
    bgcolor: "hover:bg-yellow-500",
  },
  {
    number: "04",
    title: "AI SEO Integration",
    text: "We embed entity optimization, schema markup, and structured data signals to align your site with AI search systems. Knowledge graph linking and E-E-A-T reinforcement ensure your brand earns trust and visibility in Search Generative Experiences (SGE).",
    gradient: "from-purple-500 via-pink-500 to-transparent",
    color: "text-purple-500",
    bgcolor: "hover:bg-purple-500",
  },
  {
    number: "05",
    title: "Authority Building",
    text: "Our team builds off-page credibility through citations, backlinks, and digital PR. Every link and mention strengthens your brand’s trust graph, enhancing both traditional ranking signals and AI-driven reputation factors.",
    gradient: "from-indigo-500 via-blue-600 to-transparent",
    color: "text-indigo-500",
    bgcolor: "hover:bg-indigo-500",
  },
  {
    number: "06",
    title: "Tracking & AI Insights",
    text: "We implement full analytics stacks — Google Analytics, GSC, and heatmaps — with AI-assisted dashboards to track conversions, detect emerging AI queries, and report on your visibility within SGE. Every insight loops back into optimization and growth.",
    gradient: "from-rose-500 via-transparent to-transparent",
    color: "text-rose-500",
    bgcolor: "hover:bg-rose-500",
  },
];

const SEOAISystemSection = () => {
  return (
    <div className="min-h-screen relative bg-white py-16 px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <h2 className="text-3xl md:text-6xl text-black text-center max-w-7xl mx-auto font-medium mb-6">
        Our Proven <span className="text-red-500">SEO + AI SEO System</span>
      </h2>
      <p className="text-gray-900 max-w-2xl mx-auto mb-12 leading-relaxed text-center">
        We combine traditional SEO foundations with advanced AI-driven techniques to future-proof your search visibility. Every stage builds a smarter, stronger ecosystem around your brand.
      </p>

      {/* MOBILE VERSION */}
      <div className="space-y-10 md:hidden">
        {processLayers.map((layer, idx) => (
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
        {processLayers.map((layer, idx) => {
          const isEven = idx % 2 === 0;
          let positionClasses = "";
          if (idx % 4 === 0) positionClasses = "-top-20 right-10";
          else if (idx % 4 === 1) positionClasses = "-top-20 left-1/3 -translate-x-1/4";
          else if (idx % 4 === 2) positionClasses = "-top-20 left-10";
          else if (idx % 4 === 3) positionClasses = "-top-20 left-1/3 -translate-x-1/4";

          return (
            <div key={idx} className="relative z-0">
              <div
                className={`absolute -inset-1 rounded-[20px] ${
                  isEven ? "bg-gradient-to-r" : "bg-gradient-to-l"
                } ${layer.gradient} z-0`}
              ></div>

              <div className="relative flex flex-col justify-between items-center z-10 bg-white rounded-[20px] p-8 h-[260px]">
                <div
                  className={`absolute flex items-center gap-5 flex-row border border-white/40 bg-white shadow-2xl max-w-3xl rounded-2xl p-10 z-10 transition-all duration-300 ${positionClasses}`}
                >
                  <div>
                    <p className={`${layer.color} text-7xl font-bold`}>{layer.number}</p>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-black mb-4">{layer.title}</h3>
                    <p className="text-black leading-relaxed">{layer.text}</p>
                  </div>
                </div>

                {idx === processLayers.length - 1 && (
                  <div className="mt-auto absolute -bottom-[20px] flex justify-center w-full">
                    <a href="mailto:zee@bixeltek.com">
                      <button className="px-7 py-3 rounded-2xl bg-gradient-to-tr from-red-500 via-red-700 to-red-950 hover:from-red-950 hover:via-red-700 hover:to-red-500 text-white font-semibold text-sm transition">
                        Get My SEO Audit
                      </button>
                    </a>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      <p className="text-gray-900 mt-10 max-w-[90%] md:max-w-[55%] mx-auto mb-12 leading-relaxed text-center">
        Each layer amplifies the next — data shapes structure, structure feeds AI, and AI feedback refines authority. The result: compounding search performance and brand visibility in the age of intelligent search.
      </p>
    </div>
  );
};

export default SEOAISystemSection;
