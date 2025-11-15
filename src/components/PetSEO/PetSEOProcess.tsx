"use client";

import React from "react";

const processLayers = [
  {
    number: "01",
    title: "Discovery & Audit",
    text: "We assess your business, competitors, and current SEO setup to identify ranking gaps and growth opportunities.",
    gradient: "from-blue-500 via-cyan-400 to-transparent",
    color: "text-blue-500",
    bgcolor: "hover:bg-blue-500",
  },
  {
    number: "02",
    title: "Technical SEO Setup",
    text: "We fix crawl issues, improve page speed, and optimize mobile performance to ensure smooth, high-ranking experiences.",
    gradient: "from-amber-400 via-yellow-400 to-transparent",
    color: "text-amber-500",
    bgcolor: "hover:bg-amber-500",
  },
  {
    number: "03",
    title: "Content Architecture",
    text: "We create pet-focused content clusters — grooming, food, and care — to boost authority across search topics.",
    gradient: "from-blue-400 via-amber-300 to-transparent",
    color: "text-blue-600",
    bgcolor: "hover:bg-blue-600",
  },
  {
    number: "04",
    title: "AI SEO Integration",
    text: "We add schema, entities, and structured data to make your site visible in AI-powered and voice search results.",
    gradient: "from-cyan-400 via-amber-400 to-transparent",
    color: "text-cyan-500",
    bgcolor: "hover:bg-cyan-500",
  },
  {
    number: "05",
    title: "Off-Page SEO & Authority",
    text: "We earn backlinks, citations, and mentions in pet directories to strengthen trust and industry relevance.",
    gradient: "from-blue-600 via-amber-500 to-transparent",
    color: "text-amber-600",
    bgcolor: "hover:bg-amber-600",
  },
  {
    number: "06",
    title: "Analytics & Tracking",
    text: "We track conversions, traffic, and rankings using GA4, GSC, and heatmaps for continuous optimization.",
    gradient: "from-amber-500 via-blue-500 to-transparent",
    color: "text-blue-500",
    bgcolor: "hover:bg-blue-500",
  },
];


const PetSEOSystemSection = () => {
  return (
    <div className="min-h-screen relative bg-white py-16 px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <h2 className="text-3xl md:text-6xl text-black text-center max-w-7xl mx-auto font-medium mb-6">
        End-to-End <span className="text-blue-600">SEO System</span> for{" "}
        <span className="text-amber-500">Pet Businesses</span>
      </h2>
      <p className="text-gray-800 max-w-2xl mx-auto mb-12 leading-relaxed text-center">
        Our process blends proven SEO principles with next-generation AI strategies — built specifically for the pet economy. From technical optimization to authority growth, every stage is designed to help your brand dominate search and attract lifelong pet owners.
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
              {/* Gradient Border */}
              <div
                className={`absolute -inset-1 rounded-[20px] ${
                  isEven ? "bg-gradient-to-r" : "bg-gradient-to-l"
                } ${layer.gradient} z-0`}
              ></div>

              <div className="relative flex flex-col justify-between items-center z-10 bg-white rounded-[20px] p-8 h-[260px]">
                {/* Floating Card */}
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

                {/* CTA Button */}
                {idx === processLayers.length - 1 && (
                  <div className="mt-auto absolute -bottom-[20px] flex justify-center w-full">
                    <a href="mailto:zee@bixeltek.com">
                      <button className="px-7 py-3 rounded-2xl bg-gradient-to-tr from-blue-600 via-amber-500 to-yellow-400 hover:from-yellow-400 hover:via-amber-500 hover:to-blue-600 text-white font-semibold text-sm transition">
                        Get My Pet SEO Audit
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
      <p className="text-gray-800 mt-10 max-w-[90%] md:max-w-[55%] mx-auto mb-12 leading-relaxed text-center">
        Every stage builds momentum — from audits to analytics, each layer strengthens your visibility,
        improves conversions, and positions your pet brand at the top of organic and AI-powered search results.
      </p>
    </div>
  );
};

export default PetSEOSystemSection;
