"use client";

import React from "react";

const stages = [
  {
    number: "01",
    title: "Audit & Research",
    text: "We begin by identifying everything that’s holding your visibility back — from missing meta data and crawl errors to poor site speed, broken links, and weak content depth. Our SEO audit uncovers technical, on-page, and competitive gaps that limit your reach.",
    gradient: "from-blue-500 via-cyan-400 to-transparent",
    color: "text-blue-400",
    bgcolor: "hover:bg-blue-500",
  },
  {
    number: "02",
    title: "Strategy & Mapping",
    text: "Once insights are gathered, we create an actionable blueprint — keyword clusters, topical content pillars, and internal linking maps designed to strengthen topical authority. Every keyword and page is mapped to intent, ensuring both search relevance and conversion focus.",
    gradient: "from-green-500 via-lime-400 to-transparent",
    color: "text-green-400",
    bgcolor: "hover:bg-green-500",
  },
  {
    number: "03",
    title: "Implementation",
    text: "Our team executes with precision — optimizing meta tags, headings, content hierarchy, and backlinks. We deploy both on-page and off-page SEO strategies, ensuring search engines and users experience a seamless, optimized journey from discovery to engagement.",
    gradient: "from-yellow-400 via-orange-400 to-transparent",
    color: "text-yellow-400",
    bgcolor: "hover:bg-yellow-500",
  },
  {
    number: "04",
    title: "Tracking & Reporting",
    text: "Real-time data drives decisions. We integrate GA4, Google Search Console, and Tag Manager to track rankings, clicks, and conversions. Weekly progress reports highlight performance wins, new keyword visibility, and ongoing optimization opportunities.",
    gradient: "from-teal-400 via-emerald-500 to-transparent",
    color: "text-emerald-400",
    bgcolor: "hover:bg-emerald-500",
  },
  {
    number: "05",
    title: "Scaling & Authority Building",
    text: "SEO doesn’t stop at ranking. We focus on authority growth — earning backlinks, creating evergreen content, and expanding into new keyword territories. Through consistent publication and optimization, your brand becomes the go-to authority in its niche.",
    gradient: "from-red-500 via-transparent to-transparent",
    color: "text-purple-400",
    bgcolor: "hover:bg-purple-500",
  },
];

const SEOFrameworkSection = () => {
  return (
    <div className="min-h-screen relative bg-white py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Section Header */}
      <h2 className="text-3xl md:text-6xl text-black text-center max-w-7xl mx-auto font-medium mb-6">
        From Audit to Authority <br />{" "}
        <span className="text-red-500">A Proven 5-Stage SEO Framework</span>
      </h2>

      <p className="text-gray-900 max-w-2xl mx-auto mb-12 leading-relaxed text-center">
        Every project follows a structured, data-driven SEO cycle — designed to build 
        authority, trust, and measurable organic growth. No shortcuts, no guesswork — 
        only systems engineered for long-term visibility.
      </p>

      {/* MOBILE VERSION */}
      <div className="space-y-10 md:hidden">
        {stages.map((stage, idx) => (
          <div
            key={idx}
            className={`flex group ${stage.bgcolor} p-6 rounded-3xl flex-col items-start transition-all duration-300`}
          >
            <p
              className={`${stage.color} group-hover:text-white text-5xl font-bold mb-2`}
            >
              {stage.number}
            </p>
            <h3 className="text-xl font-bold text-white mb-2">
              {stage.title}
            </h3>
            <p className="text-gray-300 group-hover:text-white">
              {stage.text}
            </p>
          </div>
        ))}
      </div>

      {/* DESKTOP VERSION */}
      <div className="hidden md:block max-w-7xl mx-auto mt-40 space-y-[4px]">
        {stages.map((stage, idx) => {
          const isEven = idx % 2 === 0;
          let positionClasses = "";
          if (idx % 4 === 0) positionClasses = "-top-20 right-10";
          else if (idx % 4 === 1)
            positionClasses = "-top-20 left-1/3 -translate-x-1/4";
          else if (idx % 4 === 2) positionClasses = "-top-20 left-10";
          else if (idx % 4 === 3)
            positionClasses = "-top-20 left-1/3 -translate-x-1/4";

          return (
            <div key={idx} className="relative z-0">
              {/* Gradient Border */}
              <div
                className={`absolute -inset-1 rounded-[20px] ${
                  isEven ? "bg-gradient-to-r" : "bg-gradient-to-l"
                } ${stage.gradient} z-0`}
              ></div>

              {/* White Base Layer */}
              <div className="relative flex flex-col justify-between items-center z-10 bg-white rounded-[20px] p-8 h-[260px]">
                {/* Floating Card */}
                <div
                  className={`absolute flex items-center gap-5 flex-row border border-gray-300 bg-white shadow-2xl max-w-3xl rounded-2xl p-10 z-10 transition-all duration-300 ${positionClasses}`}
                >
                  <div>
                    <p className={`${stage.color} text-7xl font-bold`}>
                      {stage.number}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-black mb-4">
                      {stage.title}
                    </h3>
                    <p className="text-gray-900 leading-relaxed">
                      {stage.text}
                    </p>
                  </div>
                </div>

                {/* CTA Button on Last Step */}
                {idx === stages.length - 1 && (
                  <div className="mt-auto absolute -bottom-[20px] flex justify-center w-full">
                    <a href="mailto:strategy@bixeltek.com">
                      <button className="px-7 py-3 rounded-2xl bg-gradient-to-tr from-red-600 via-red-700 to-red-900 hover:from-red-900 hover:via-red-700 hover:to-red-600 text-white font-semibold text-sm transition">
                        Request an SEO Audit
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
      <p className="text-gray-900 mt-10 max-w-[90%] md:max-w-[55%] mx-auto mb-12 leading-relaxed text-center">
        Each stage reinforces the next — audits identify issues, strategy defines solutions,
        implementation drives traction, and analytics guide ongoing scaling. That’s how
        we convert visibility into consistent, compounding growth.
      </p>
    </div>
  );
};

export default SEOFrameworkSection;
