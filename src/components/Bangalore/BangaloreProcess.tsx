"use client";

import React from "react";

const stages = [
  {
    number: "01",
    title: "Discovery & Audit",
    text: "We begin with a detailed assessment of your digital ecosystem — analyzing website performance, ad accounts, analytics setup, and competitive benchmarks. This step uncovers inefficiencies, missed keyword opportunities, and data blind spots that prevent measurable growth.",
    gradient: "from-blue-500 via-cyan-400 to-transparent",
    color: "text-blue-400",
    bgcolor: "hover:bg-blue-500",
  },
  {
    number: "02",
    title: "Strategy & Keyword Mapping",
    text: "Once the audit is complete, we construct a data-driven roadmap that aligns audience intent with your business goals. From regional keyword clusters and content themes to ad positioning and funnel logic, every element is mapped to measurable KPIs.",
    gradient: "from-green-500 via-lime-400 to-transparent",
    color: "text-green-400",
    bgcolor: "hover:bg-green-500",
  },
  {
    number: "03",
    title: "Campaign Design & Setup",
    text: "With strategy locked in, we launch cohesive campaigns across channels — SEO clusters, Google Ads, and high-conversion landing pages. Every asset is built for scalability, ensuring consistent messaging and unified creative direction across all touchpoints.",
    gradient: "from-yellow-400 via-orange-400 to-transparent",
    color: "text-yellow-400",
    bgcolor: "hover:bg-yellow-500",
  },
  {
    number: "04",
    title: "Tracking & Analytics",
    text: "We implement advanced analytics architecture — GA4, Tag Manager, CRM events, and call tracking. Each user action, scroll, or conversion is captured accurately, giving you a transparent dashboard of what’s working and what’s not.",
    gradient: "from-teal-400 via-emerald-500 to-transparent",
    color: "text-emerald-400",
    bgcolor: "hover:bg-emerald-500",
  },
  {
    number: "05",
    title: "Optimization & Scaling",
    text: "Growth doesn’t stop at launch — we test, refine, and scale. From A/B testing CTAs and copy to CRO experiments and lead-quality analytics, we ensure every campaign delivers higher ROI month after month. This is how we turn systems into predictable growth engines.",
    gradient: "from-purple-500 via-transparent to-transparent",
    color: "text-purple-400",
    bgcolor: "hover:bg-purple-500",
  },
];

const GrowthFrameworkSection = () => {
  return (
    <div className="min-h-screen relative bg-white py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Section Header */}
      <h2 className="text-3xl md:text-6xl text-black text-center max-w-7xl mx-auto font-medium mb-6">
        From Discovery to Growth <br />{" "}
        <span className="text-blue-500">A Proven 5-Stage Framework</span>
      </h2>

      <p className="text-gray-900 max-w-2xl mx-auto mb-12 leading-relaxed text-center">
        Every Bangalore project follows our structured growth cycle — from in-depth audits to 
        ongoing optimization. No guesswork, no vanity metrics — just data-backed actions that 
        compound results month after month.
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
            <h3 className="text-xl font-bold text-white mb-2">{stage.title}</h3>
            <p className="text-gray-300 group-hover:text-white">{stage.text}</p>
          </div>
        ))}
      </div>

      {/* DESKTOP VERSION */}
      <div className="hidden md:block max-w-7xl mx-auto mt-40 space-y-[4px]">
        {stages.map((stage, idx) => {
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
                } ${stage.gradient} z-0`}
              ></div>

              <div className="relative flex flex-col justify-between items-center z-10 bg-white rounded-[20px] p-8 h-[260px]">
                {/* Floating Card */}
                <div
                  className={`absolute flex items-center gap-5 flex-row border border-white/40 bg-white shadow-2xl max-w-3xl rounded-2xl p-10 z-10 transition-all duration-300 ${positionClasses}`}
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
                    <p className="text-gray-900 leading-relaxed">{stage.text}</p>
                  </div>
                </div>

                {/* CTA Button on Last Step */}
                {idx === stages.length - 1 && (
                  <div className="mt-auto absolute -bottom-[20px] flex justify-center w-full">
                    <a href="mailto:strategy@bixeltek.com">
                      <button className="px-7 py-3 rounded-2xl bg-gradient-to-tr from-blue-600 via-indigo-700 to-purple-900 hover:from-purple-900 hover:via-indigo-700 hover:to-blue-600 text-white font-semibold text-sm transition">
                        Book a Strategy Call
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
        Each stage is designed to remove uncertainty — transforming your marketing from guesswork into 
        a measurable, scalable system that fuels consistent business growth.
      </p>
    </div>
  );
};

export default GrowthFrameworkSection;
