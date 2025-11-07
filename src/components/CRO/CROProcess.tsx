"use client";

import React from "react";

const processLayers = [
  {
    number: "01",
    title: "Discovery Audit",
    text: "We assess your current tracking and data flow to identify gaps, redundancies, and opportunities for accurate measurement and insights.",
    gradient: "from-blue-500 via-cyan-400 to-transparent",
    color: "text-blue-500",
    bgcolor: "hover:bg-blue-500",
  },
  {
    number: "02",
    title: "Implementation",
    text: "GA4, Tag Manager, and dashboard setup are implemented to ensure all events, conversions, and interactions are tracked reliably for analysis.",
    gradient: "from-green-500 via-lime-400 to-transparent",
    color: "text-green-500",
    bgcolor: "hover:bg-green-500",
  },
  {
    number: "03",
    title: "Behavioral Analysis",
    text: "We analyze user behavior with heatmaps, funnels, and UX diagnostics to uncover friction points and optimization opportunities.",
    gradient: "from-yellow-400 via-orange-400 to-transparent",
    color: "text-yellow-400",
    bgcolor: "hover:bg-yellow-500",
  },
  {
    number: "04",
    title: "Testing & Optimization",
    text: "Hypothesis-based improvements are executed through A/B testing, multivariate testing, and cohort analysis to scientifically validate results.",
    gradient: "from-purple-500 via-pink-500 to-transparent",
    color: "text-purple-500",
    bgcolor: "hover:bg-purple-500",
  },
  {
    number: "05",
    title: "Reporting & Scaling",
    text: "Dashboards and strategy refinement provide actionable insights that drive conversion improvements and scalable growth.",
    gradient: "from-rose-500 via-transparent to-transparent",
    color: "text-rose-500",
    bgcolor: "hover:bg-rose-500",
  },
];

const CROProcessSection = () => {
  return (
    <div className="min-h-screen relative bg-white py-16 px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <h2 className="text-3xl md:text-6xl text-black text-center max-w-7xl mx-auto font-medium mb-6">
        Our <span className="text-blue-500">Process in Practice</span>
      </h2>
      <p className="text-gray-900 max-w-2xl mx-auto mb-12 leading-relaxed text-center">
        From audit to reporting, we follow a structured, scientific approach to Conversion Rate Optimization. Each step builds upon the previous to create measurable improvements.
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

              <div className="relative flex flex-col justify-between items-center z-10  bg-white rounded-[20px] p-8 h-[260px]">
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

                {/* CTA Button on Last Step */}
                {idx === processLayers.length - 1 && (
                  <div className="mt-auto absolute -bottom-[20px] flex justify-center w-full">
                    <a href="mailto:zee@bixeltek.com">
                      <button className="px-7 py-3 rounded-2xl bg-gradient-to-tr from-red-500 via-red-700 to-red-950 hover:from-red-950 hover:via-red-700 hover:to-red-500 text-white font-semibold text-sm transition">
                        Get My CRO Audit
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
        Each step reinforces the next — tracking informs insights, insights drive experiments, and experiments lead to measurable conversion growth.
      </p>
    </div>
  );
};

export default CROProcessSection;
