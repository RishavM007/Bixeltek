"use client";

import React from "react";
import Image from "next/image";
import leftimg from "@/assets/left-shape-mic-seo.png";

const seoSteps = [
  {
    number: "01",
    title: "Technical Audit & Entity Mapping",
    text: "We start by auditing your site for crawl issues, broken links, schema gaps, and missing entities. This ensures that search engines and AI models can fully understand your website structure and brand connections.",
    gradient: "from-blue-500 via-blue-400 to-transparent",
    color: "text-blue-500",
    bgcolor: "hover:bg-blue-500",
  },
  {
    number: "02",
    title: "Semantic Content Strategy",
    text: "We build comprehensive topic clusters that answer every related query and sub-intent. This ensures your content strategy covers all angles, improves topical authority, and keeps competitors from outranking you.",
    gradient: "from-indigo-500 via-indigo-400 to-transparent",
    color: "text-indigo-500",
    bgcolor: "hover:bg-indigo-500",
  },
  {
    number: "03",
    title: "AI SEO Optimization",
    text: "We optimize content for Google’s AI Overviews, Gemini, and ChatGPT recommendations, ensuring your brand isn’t just indexed but understood and recommended by modern AI-powered search systems.",
    gradient: "from-amber-400 via-yellow-400 to-transparent",
    color: "text-yellow-400",
    bgcolor: "hover:bg-yellow-400",
  },
  {
    number: "04",
    title: "On-Page SEO",
    text: "We optimize titles, headings, internal links, and E-E-A-T signals to improve relevance and credibility. Every page is structured to satisfy both search engines and user intent.",
    gradient: "from-teal-500 via-green-400 to-transparent",
    color: "text-teal-500",
    bgcolor: "hover:bg-teal-500",
  },
  {
    number: "05",
    title: "Off-Page SEO & Authority Building",
    text: "We build authority through link acquisition, brand mentions, and knowledge graph integration, ensuring your website is trusted, referenced, and recognized across the web and AI knowledge bases.",
    gradient: "from-pink-500 via-fuchsia-400 to-transparent",
    color: "text-pink-500",
    bgcolor: "hover:bg-pink-500",
  },
  {
    number: "06",
    title: "Tracking & Reporting",
    text: "We provide detailed reports on clicks, impressions, and AI visibility improvements. You’ll see exactly how your semantic SEO efforts are impacting rankings, traffic, and authority in real-time.",
    gradient: "from-red-500 via-transparent to-transparent",
    color: "text-red-500",
    bgcolor: "hover:bg-red-500",
  },
];

const SemanticSEOProcessSection = () => {
  return (
    <div className="min-h-screen relative bg-white pt-32 pb-12 px-4 sm:px-6 lg:px-8">
      {/* Decorative left image */}

      {/* Section Header */}
      <h2 className="text-3xl md:text-6xl text-black text-center max-w-7xl mx-auto font-bold font-inter mb-6">
        We Don’t Do Old-School SEO —{" "}
        <span className="text-blue-500">We Build Semantic Growth Systems</span>
      </h2>
      <p className="text-gray-900 text-sm md:text-base max-w-4xl mx-auto mb-12 font-poppins leading-relaxed text-center">
        At <span className="font-semibold text-black">Bixeltek</span>, we go beyond keywords. Our AI-powered SEO process focuses on entities, topical authority, and semantic coverage — ensuring your brand isn’t just indexed but understood by search engines and AI models.
      </p>

      {/* Mobile Version */}
      <div className="space-y-10 md:hidden">
        {seoSteps.map((item, idx) => (
          <div
            key={idx}
            className={`flex group ${item.bgcolor} p-6 rounded-3xl flex-col items-start`}
          >
            <p className={`${item.color} group-hover:text-white text-5xl font-bold mb-2`}>
              {item.number}
            </p>
            <h2 className="text-xl font-bold text-black group-hover:text-white mb-4">{item.title}</h2>
            <p className="text-gray-900 text-sm group-hover:text-white">{item.text}</p>
          </div>
        ))}
      </div>

      {/* Desktop Version */}
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
              {/* Gradient border */}
              <div
                className={`absolute -inset-1 rounded-[20px] ${
                  isEven ? "bg-gradient-to-r" : "bg-gradient-to-l"
                } ${item.gradient} z-0`}
              ></div>

              <div className="relative flex flex-col justify-between items-center z-10 bg-white rounded-[20px] p-8 h-[260px]">
                {/* Floating content box */}
                <div
                  className={`absolute flex items-center gap-5 flex-row border border-white bg-white shadow-2xl max-w-3xl rounded-2xl p-10 z-10 ${positionClasses}`}
                >
                  <div>
                    <p className={`${item.color} text-7xl font-bold`}>{item.number}</p>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-black mb-3">{item.title}</h2>
                    <p className="text-gray-950 text-sm leading-relaxed">{item.text}</p>
                  </div>
                </div>

                {/* CTA only for last step */}
                {idx === seoSteps.length - 1 && (
                  <div className="mt-auto absolute -bottom-[20px] flex justify-center w-full">
                    <a href="mailto:zee@bixeltek.com">
                      <button className="px-7 py-3 rounded-2xl bg-blue-600 text-white font-semibold text-sm shadow-lg hover:bg-blue-700 transition">
                        Get My Free SEO Audit
                      </button>
                    </a>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Closing Paragraph */}
      <p className="text-gray-950 text-sm md:text-base mt-10 max-w-[90%] md:max-w-[50%] mx-auto mb-12 font-poppins leading-relaxed text-center">
        This semantic, AI-focused system ensures your website isn’t just visible — it’s authoritative, trusted, and recommended across Google and AI platforms. Every step is designed to capture traffic, leads, and brand authority.
      </p>
    </div>
  );
};

export default SemanticSEOProcessSection;
