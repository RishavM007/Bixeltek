"use client";

import React from "react";

const steps = [
  {
    number: "01",
    title: "Discovery & Audit",
    text: "We analyze your existing infrastructure, identifying technical and marketing inefficiencies while mapping opportunities for scalability, SEO, and performance gains.",
    gradient: "from-blue-500 via-cyan-400 to-transparent",
    color: "text-yellow-500",
    bgcolor: "hover:bg-yellow-500",
  },
  {
    number: "02",
    title: "Architecture & Strategy",
    text: "We design a modular CMS architecture — with scalable taxonomies, optimized URL trees, multilingual logic, and content governance frameworks built for long-term growth.",
    gradient: "from-green-500 via-teal-400 to-transparent",
    color: "text-green-500",
    bgcolor: "hover:bg-orange-500",
  },
  {
    number: "03",
    title: "Design & Development",
    text: "We translate the architecture into seamless user experiences using React, Next.js, or native WordPress environments — ensuring every pixel and interaction drives engagement.",
    gradient: "from-yellow-400 via-yellow-300 to-transparent",
    color: "text-blue-500",
    bgcolor: "hover:bg-yellow-400",
  },
  {
    number: "04",
    title: "Integration & Tracking",
    text: "We integrate GA4, Meta Pixel, conversion APIs, and CRMs — ensuring complete visibility into every lead, conversion, and campaign event across your digital ecosystem.",
    gradient: "from-pink-500 via-purple-400 to-transparent",
    color: "text-red-500",
    bgcolor: "hover:bg-yellow-500",
  },
  {
    number: "05",
    title: "Optimization & Scaling",
    text: "After launch, we continuously monitor performance, conduct A/B tests, refine conversion funnels, and scale winning modules — turning data into measurable growth.",
    gradient: "from-green-500 via-transparent to-transparent",
    color: "text-blue-600",
    bgcolor: "hover:bg-yellow-600",
  },
];

const CMSWorkflow = () => {
  return (
    <div className="min-h-screen relative bg-[#fffdf5] py-12 px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <h2 className="text-3xl md:text-6xl text-black text-center max-w-7xl mx-auto font-medium font-inter mb-6">
        Our Process Combines <br />{" "}
        <span className="text-yellow-500">Engineering Discipline & Marketing Foresight</span>
      </h2>
      <p className="text-gray-900 max-w-2xl mx-auto mb-12 font-poppins leading-relaxed text-center">
        Every CMS build we deliver is a living system — structured for performance, optimized for
        SEO, and designed to evolve with your campaigns and business goals.
      </p>

      {/* MOBILE VERSION */}
      <div className="space-y-10 md:hidden">
        {steps.map((item, idx) => (
          <div
            key={idx}
            className={`flex group ${item.bgcolor} p-6 rounded-3xl flex-col items-start transition-all duration-300`}
          >
            <p className={`${item.color} group-hover:text-white text-5xl font-bold mb-2`}>
              {item.number}
            </p>
            <h2 className="text-xl font-bold text-black group-hover:text-white mb-2">
              {item.title}
            </h2>
            <p className="text-gray-900 group-hover:text-white">{item.text}</p>
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
              {/* Gradient Border */}
              <div
                className={`absolute -inset-1 rounded-[20px] ${
                  isEven ? "bg-gradient-to-r" : "bg-gradient-to-l"
                } ${item.gradient} z-0`}
              ></div>

              <div className="relative flex flex-col justify-between items-center z-10 bg-[#fffdf5] rounded-[20px] p-8 h-[260px]">
                {/* Floating Card */}
                <div
                  className={`absolute flex items-center gap-5 flex-row border border-white/40 bg-[#fffdf5] max-w-3xl shadow-[rgba(0,0,0,0.4)_0px_2px_4px,rgba(0,0,0,0.3)_0px_7px_13px_-3px,rgba(0,0,0,0.2)_0px_-3px_0px_inset] rounded-2xl p-10 z-10 transition-all duration-300 ${positionClasses}`}
                >
                  <div>
                    <p className={`${item.color} text-7xl font-bold`}>{item.number}</p>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-black mb-4">{item.title}</h2>
                    <p className="text-gray-900 leading-relaxed">{item.text}</p>
                  </div>
                </div>

                {/* CTA Button on Last Step */}
                {idx === steps.length - 1 && (
                  <div className="mt-auto absolute -bottom-[20px] flex justify-center w-full">
                    <a href={"mailto:zee@bixeltek.com"}>
                      <button className="px-7 py-3 rounded-2xl bg-gradient-to-tr from-green-500 via-green-700 to-green-950 hover:bg-gradient-to-tr hover:from-green-950 hover:via-green-700 hover:to-green-500 text-white font-semibold text-sm shadow-lg transition">
                        Book a Free Strategy Call
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
      <p className="text-gray-900 mt-10 max-w-[90%] md:max-w-[50%] mx-auto mb-12 font-poppins leading-relaxed text-center">
        Your CMS doesn’t just go live — it evolves with your campaigns. Every feature is crafted to
        deliver clarity, control, and continuous performance improvement.
      </p>
    </div>
  );
};

export default CMSWorkflow;
