"use client";

import React from "react";

const steps = [
  {
    number: "01",
    title: "Discovery & Strategy",
    text: "We start by understanding your goals, target audience, and competitors in the Vancouver market. This phase uncovers business objectives, customer pain points, and opportunities for high-converting design solutions.",
    gradient: "from-blue-500 via-blue-400 to-black",
    color: "text-blue-500",
    bgcolor: "hover:bg-blue-500",
  },
  {
    number: "02",
    title: "Wireframing & Visual Planning",
    text: "We create intuitive layouts and mockups that map user journeys and highlight key conversion opportunities. Wireframes ensure every page element aligns with your business goals before moving to development.",
    gradient: "from-green-500 via-teal-400 to-transparent",
    color: "text-teal-500",
    bgcolor: "hover:bg-teal-500",
  },
  {
    number: "03",
    title: "Design & Development",
    text: "Our team builds responsive, SEO-friendly websites with clean, scalable code. Visual design and functionality are integrated seamlessly to provide an engaging user experience that converts visitors into customers.",
    gradient: "from-yellow-400 via-yellow-300 to-transparent",
    color: "text-yellow-500",
    bgcolor: "hover:bg-yellow-500",
  },
  {
    number: "04",
    title: "Conversion Optimization",
    text: "We implement trust elements, persuasive CTAs, and strategic layouts to maximize leads. Every component is crafted to reduce friction and guide visitors through the conversion funnel effectively.",
    gradient: "from-pink-500 via-purple-400 to-transparent",
    color: "text-purple-500",
    bgcolor: "hover:bg-purple-500",
  },
  {
    number: "05",
    title: "Testing & Launch",
    text: "Before going live, we rigorously test performance, page speed, responsiveness, and cross-device compatibility. This ensures your website runs flawlessly and delivers consistent results from day one.",
    gradient: "from-indigo-500 via-indigo-400 to-transparent",
    color: "text-indigo-500",
    bgcolor: "hover:bg-indigo-500",
  },
  {
    number: "06",
    title: "Maintenance & Growth",
    text: "After launch, we monitor analytics, track conversions, and optimize continuously. This ongoing support ensures your website evolves with market trends, maintaining performance and ROI over time.",
    gradient: "from-red-500 via-transparent to-transparent",
    color: "text-red-500",
    bgcolor: "hover:bg-red-500",
  },
];

const WebDesignProcessVancouver = () => {
  return (
    <div className="min-h-screen relative bg-black py-12 px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <h2 className="text-3xl md:text-6xl text-white text-center max-w-7xl mx-auto font-bold font-inter mb-6">
        Our Proven Web Design Process<span className="text-blue-500"><br />That Delivers ROI</span>
      </h2>
      <p className="text-gray-300 max-w-2xl mx-auto mb-12 font-poppins leading-relaxed text-center">
        Our process combines design thinking, data insights, and SEO strategy to ensure your website not only looks great but performs flawlessly.
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
                {idx === steps.length - 1 && (
                  <div className="mt-auto absolute -bottom-[20px] flex justify-center w-full">
                    <a href={"mailto:zee@bixeltek.com"}>
                      <button className="px-7 py-3 rounded-2xl bg-blue-600 text-white font-semibold text-sm shadow-lg hover:bg-blue-700 transition">
                        Talk to a Web Design Expert
                      </button>
                    </a>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      <p className="text-gray-300 mt-10 max-w-[90%] md:max-w-[50%] mx-auto mb-12 font-poppins leading-relaxed text-center">
        This structured methodology ensures Vancouver businesses get websites that are visually appealing, conversion-focused, and optimized for long-term ROI.
      </p>
    </div>
  );
};

export default WebDesignProcessVancouver;
