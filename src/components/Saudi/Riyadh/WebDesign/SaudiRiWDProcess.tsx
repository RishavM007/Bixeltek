'use client';

import React from "react";

const webDesignSteps = [
  {
    number: "01",
    title: "Discovery & Audit",
    text: "Identify your business goals, audience behavior, and competitor landscape to define the website’s strategy and KPIs.",
    gradient: "from-yellow-400 via-green-400 to-transparent",
    color: "text-purple-500",
    bgcolor: "hover:bg-yellow-500/20",
  },
  {
    number: "02",
    title: "Strategy & Wireframing",
    text: "Plan site structure, user flows, and conversion funnels, ensuring SEO readiness and marketing alignment.",
    gradient: "from-green-500 via-purple-400 to-transparent",
    color: "text-orange-500",
    bgcolor: "hover:bg-green-500/20",
  },
  {
    number: "03",
    title: "Design & Development",
    text: "Create SEO-optimized, mobile-first pages with clear CTAs, modern UI/UX, and bilingual content support.",
    gradient: "from-purple-400 via-blue-300 to-transparent",
    color: "text-blue-400",
    bgcolor: "hover:bg-lime-500/20",
  },
  {
    number: "04",
    title: "QA & Launch",
    text: "Test website performance, Core Web Vitals, and bilingual functionality before go-live.",
    gradient: "from-pink-300 via-orange-400 to-transparent",
    color: "text-red-400",
    bgcolor: "hover:bg-yellow-400/20",
  },
  {
    number: "05",
    title: "Optimization & Maintenance",
    text: "Continuous improvements including CRO tweaks, analytics monitoring, updates, and security checks.",
    gradient: "from-green-400 via-transparent to-transparent",
    color: "text-blue-500",
    bgcolor: "hover:bg-green-500/20",
  },
];

const RiyadhWebDesignWorkflow = () => {
  return (
    <div className="min-h-screen relative bg-black py-12 px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <h2 className="text-3xl md:text-6xl text-white text-center max-w-7xl mx-auto font-medium font-inter mb-6">
        Every High-Performing Website <br />
        <span className="text-yellow-500">Follows a Proven Process.</span>
      </h2>
      <p className="text-gray-300 max-w-2xl mx-auto mb-12 font-poppins leading-relaxed text-center">
        We build websites designed to convert from day one — from discovery to launch and beyond, each step ensures measurable performance and ROI.
      </p>

      {/* MOBILE VERSION */}
      <div className="space-y-10 md:hidden">
        {webDesignSteps.map((item, idx) => (
          <div
            key={idx}
            className={`flex group ${item.bgcolor} p-6 rounded-3xl flex-col items-start transition-all duration-300`}
          >
            <p className={`${item.color} group-hover:text-white text-5xl font-bold mb-2`}>
              {item.number}
            </p>
            <h2 className="text-xl font-bold text-white mb-2">{item.title}</h2>
            <p className="text-gray-300 group-hover:text-white">{item.text}</p>
          </div>
        ))}
      </div>

      {/* DESKTOP VERSION */}
      <div className="hidden md:block max-w-7xl mx-auto mt-40 space-y-[4px]">
        {webDesignSteps.map((item, idx) => {
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

              <div className="relative flex flex-col justify-between items-center z-10 bg-black rounded-[20px] p-8 h-[260px]">
                {/* Floating Card */}
                <div
                  className={`absolute flex items-center gap-5 flex-row border border-white/40 bg-black max-w-3xl rounded-2xl p-10 z-10 transition-all duration-300 ${positionClasses}`}
                >
                  <div>
                    <p className={`${item.color} text-7xl font-bold`}>{item.number}</p>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-4">{item.title}</h2>
                    <p className="text-gray-300 leading-relaxed">{item.text}</p>
                  </div>
                </div>
                {idx === webDesignSteps.length - 1 && (
                  <div className="mt-auto absolute -bottom-[20px] flex justify-center w-full">
                    <a href={"mailto:zee@bixeltek.com"}>
                      <button className="px-7 py-3 rounded-2xl bg-gradient-to-tr from-green-500 via-green-700 to-green-950 hover:bg-gradient-to-tr hover:from-green-950 hover:via-green-700 hover:to-green-500 text-white font-semibold text-sm shadow-lg transition">
                        Talk To Web Design Expert
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
      <p className="text-gray-300 mt-10 max-w-[90%] md:max-w-[50%] mx-auto mb-12 font-poppins leading-relaxed text-center">
        Our process ensures your website keeps performing long after launch — optimized for conversions, speed, and growth.
      </p>
    </div>
  );
};

export default RiyadhWebDesignWorkflow;
