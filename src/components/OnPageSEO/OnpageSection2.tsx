"use client";

import React from "react";

const layers = [
  {
    number: "01",
    title: "Intent Discovery & Entity Mapping",
    text: "We start with in-depth SERP decoding — understanding how Google interprets your niche through entities, related questions, and semantic relationships. Each keyword is mapped to its intent layer — informational, navigational, or transactional — forming the foundation for relevance.",
    gradient: "from-yellow-500 via-amber-400 to-transparent",
    color: "text-yellow-400",
    bgcolor: "hover:bg-yellow-600",
  },
  {
    number: "02",
    title: "Content Architecture",
    text: "Next, we structure your website like an information pyramid — topics flow logically from H1 to H4, creating a visual and semantic breadcrumb trail. Each paragraph and section plays a role in building contextual depth while keeping UX intuitive and fluid.",
    gradient: "from-blue-500 via-cyan-400 to-transparent",
    color: "text-cyan-400",
    bgcolor: "hover:bg-blue-600",
  },
  {
    number: "03",
    title: "Meta Layering",
    text: "We design meta titles and descriptions not just for clickbait — but for clarity. Each tag balances emotional pull with keyword precision, helping Google connect your page to user intent while boosting CTR organically.",
    gradient: "from-pink-500 via-fuchsia-400 to-transparent",
    color: "text-pink-400",
    bgcolor: "hover:bg-pink-600",
  },
  {
    number: "04",
    title: "Internal Link Flow",
    text: "We engineer authority routing — placing internal links where they make sense both logically and semantically. Every page passes value to the next, ensuring search engines crawl your ecosystem efficiently and users stay within your content universe.",
    gradient: "from-green-400 via-emerald-500 to-transparent",
    color: "text-emerald-400",
    bgcolor: "hover:bg-emerald-500",
  },
  {
    number: "05",
    title: "Schema Enrichment",
    text: "We integrate structured data — defining entities like People, Organization, FAQ, and Article. This allows AI-driven engines to fully ‘understand’ your site, enabling rich snippets and visibility in voice search results.",
    gradient: "from-purple-500 via-indigo-500 to-transparent",
    color: "text-purple-400",
    bgcolor: "hover:bg-purple-600",
  },
];

const OnPageSEOFramework = () => {
  return (
    <div className="min-h-screen relative bg-black py-16 px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <h2 className="text-3xl md:text-6xl text-white text-center font-medium mb-6 max-w-7xl mx-auto">
        Where <span className="text-blue-500">Language</span> Meets <span className="text-yellow-400">Engineering</span>
      </h2>
      <p className="text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed text-center">
        True optimization blends linguistics and logic. We analyze how search engines read your content — then design each
        page as a semantic model that satisfies both machines and minds. Every section, tag, and title is engineered to 
        communicate expertise clearly, making your content unmistakably relevant.
      </p>

      {/* MOBILE VERSION */}
      <div className="space-y-10 md:hidden">
        {layers.map((layer, idx) => (
          <div
            key={idx}
            className={`flex group ${layer.bgcolor} py-6 rounded-3xl flex-col items-start transition-all duration-300`}
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

              <div className="relative flex flex-col justify-between items-center z-10 bg-black rounded-[20px] p-8 h-[300px] lg:h-[260px]">
                <div
                  className={`absolute flex items-center gap-5 flex-row border border-white/40 bg-black w-[85%] lg:max-w-3xl rounded-2xl p-10 z-10 transition-all duration-300 ${positionClasses}`}
                >
                  <div>
                    <p className={`${layer.color} text-7xl font-bold`}>{layer.number}</p>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-4">{layer.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{layer.text}</p>
                  </div>
                </div>

                {/* CTA Button */}
                {idx === layers.length - 1 && (
                  <div className="mt-auto absolute -bottom-[20px] flex justify-center w-full">
                    <a href="mailto:zee@bixeltek.com">
                      <button className="px-7 py-3 rounded-2xl bg-gradient-to-tr from-blue-600 via-blue-800 to-blue-950 hover:from-blue-950 hover:via-blue-700 hover:to-blue-500  text-white font-semibold text-sm transition">
                        Get My On-Page SEO Audit
                      </button>
                    </a>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Footer */}
      <p className="text-gray-300 mt-10 max-w-[90%] lg:max-w-[55%] mx-auto mb-12 leading-relaxed text-center">
        Every word becomes a signal. Every signal builds context. And context is what earns you both rankings and reader trust — sustainably.
      </p>
    </div>
  );
};

export default OnPageSEOFramework;
