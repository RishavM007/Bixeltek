"use client";

import React from "react";

const steps = [
  {
    number: "01",
    title: "Discovery & Market Analysis",
    text: "We start by understanding your business goals, customer behavior, and Vancouver’s unique search landscape. This stage includes competitor benchmarking, industry research, and uncovering the search intent that drives profitable traffic.",
    gradient: "from-blue-500 via-blue-400 to-black",
    color: "text-blue-500",
    bgcolor: "hover:bg-blue-500",
  },
  {
    number: "02",
    title: "SEO Audit & Strategy",
    text: "A deep audit reveals technical issues, content gaps, and hidden opportunities. From crawlability to indexation signals, we create a data-driven SEO roadmap aligned with your growth targets.",
    gradient: "from-green-500 via-teal-400 to-transparent",
    color: "text-teal-500",
    bgcolor: "hover:bg-teal-500",
  },
  {
    number: "03",
    title: "Keyword & Entity Mapping",
    text: "We don’t just target keywords—we build entity-driven maps around people, places, services, and topics. This ensures Google sees your brand as contextually relevant across Vancouver search queries.",
    gradient: "from-yellow-400 via-yellow-300 to-transparent",
    color: "text-yellow-500",
    bgcolor: "hover:bg-yellow-500",
  },
  {
    number: "04",
    title: "Content Creation & Optimization",
    text: "From blogs to service pages, every piece of content is crafted around real search queries and optimized with schema, headings, and semantic relevance. This makes your content both user-friendly and algorithm-friendly.",
    gradient: "from-pink-500 via-purple-400 to-transparent",
    color: "text-purple-500",
    bgcolor: "hover:bg-purple-500",
  },
  {
    number: "05",
    title: "Technical Enhancements",
    text: "We fine-tune your site’s infrastructure: Core Web Vitals, mobile-first design, crawl efficiency, and security signals. Technical health ensures your site performs better and builds search engine trust.",
    gradient: "from-indigo-500 via-indigo-400 to-transparent",
    color: "text-indigo-500",
    bgcolor: "hover:bg-indigo-500",
  },
  {
    number: "06",
    title: "Link Building & Digital PR",
    text: "Authority matters. We acquire high-quality backlinks from relevant publications, local Vancouver sources, and industry leaders. These links improve domain authority and amplify your brand reputation.",
    gradient: "from-red-500 via-cyan-500 to-transparent",
    color: "text-red-500",
    bgcolor: "hover:bg-red-500",
  },
  {
    number: "07",
    title: "Performance Tracking & Scaling",
    text: "We track rankings, engagement, and conversions in real time, refining strategies with AI insights. Winning tactics are scaled across services and geographies for sustainable, long-term growth.",
    gradient: "from-cyan-500 via-transparent to-transparent",
    color: "text-cyan-500",
    bgcolor: "hover:bg-cyan-500",
  },
];

const SeoProcessVancouver = () => {
  return (
    <div className="min-h-screen relative bg-black py-12 px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <h2 className="text-3xl md:text-6xl text-white text-center max-w-7xl mx-auto font-bold font-inter mb-6">
        How We Build <span className="text-blue-500">SEO Strategies That Scale</span>
      </h2>
      <p className="text-gray-300 max-w-2xl mx-auto mb-12 font-poppins leading-relaxed text-center">
        Our process follows Koray Tugberk GÜBÜR’s Holistic SEO methodology — aligning every optimization with user intent, entity relevance, and algorithmic context for maximum long-term impact.
      </p>

      {/* MOBILE VERSION */}
      <div className="space-y-10 md:hidden">
        {steps.map((item, idx) => (
          <div
            key={idx}
            className={`flex group ${item.bgcolor} p-6 rounded-3xl flex-col items-start`}
          >
            <p
              className={`${item.color} group-hover:text-white text-5xl font-bold mb-2`}
            >
              {item.number}
            </p>
            <h2 className="text-xl font-bold text-white mb-2">{item.title}</h2>
            <p className="text-gray-300 group-hover:text-white">{item.text}</p>
          </div>
        ))}
      </div>

      {/* DESKTOP VERSION */}
      <div className="hidden md:block max-w-7xl mx-auto mt-40 space-y-[4px]">
        {steps.map((item, idx) => {
          const isEven = idx % 2 === 0;
          let positionClasses = "";
          if (idx % 4 === 0) positionClasses = "-top-20 right-10";
          else if (idx % 4 === 1) positionClasses = "-top-20 left-1/3 -translate-x-1/4";
          else if (idx % 4 === 2) positionClasses = "-top-20 left-10";
          else if (idx % 4 === 3) positionClasses = "-top-20 left-1/3 -translate-x-1/4";

          return (
            <div key={idx} className="relative z-0">
              {/* Gradient border */}
              <div
                className={`absolute -inset-1 rounded-[20px] ${
                  isEven ? "bg-gradient-to-r" : "bg-gradient-to-l"
                } ${item.gradient} z-0`}
              ></div>

              <div className="relative flex flex-col justify-between items-center z-10 bg-black rounded-[20px] p-8 h-[260px]">
                {/* Floating content box */}
                <div
                  className={`absolute flex items-center gap-5 flex-row border border-white/50 bg-black max-w-3xl rounded-2xl p-10 z-10 ${positionClasses}`}
                >
                  <div>
                    <p className={`${item.color} text-7xl font-bold`}>
                      {item.number}
                    </p>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-4">
                      {item.title}
                    </h2>
                    <p className="text-gray-300">{item.text}</p>
                  </div>
                </div>

                {/* CTA at last step */}
                {idx === steps.length - 1 && (
                  <div className="mt-auto absolute -bottom-[20px] flex justify-center w-full">
                    <a href={"#form"}>
                      <button className="px-7 py-3 rounded-2xl bg-blue-600 text-white font-semibold text-sm shadow-lg hover:bg-blue-700 transition">
                        Request a Free SEO Audit
                      </button>
                    </a>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      <p className="text-gray-300 mt-10 max-w-[90%] md:max-w-[30%] mx-auto mb-12 font-poppins leading-relaxed text-center">
        This structured methodology ensures your Vancouver SEO campaigns are built for transparency, adaptability, and compounding growth.
      </p>
    </div>
  );
};

export default SeoProcessVancouver;
