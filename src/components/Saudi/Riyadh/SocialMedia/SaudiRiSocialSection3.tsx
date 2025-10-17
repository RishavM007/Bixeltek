"use client";

import React from "react";

const steps = [
  {
    number: "01",
    title: "Discovery & Audit",
    text: "We start with a complete review of your brand’s current performance — analyzing audience insights, engagement data, and content strategy. This step uncovers what’s working, what’s not, and where your biggest opportunities for revenue growth lie.",
    gradient: "from-blue-500 via-blue-400 to-transparent",
    color: "text-blue-400",
    bgcolor: "hover:bg-blue-500",
  },
  {
    number: "02",
    title: "Positioning & Planning",
    text: "Next, we refine your messaging and positioning. We define your tone, target audience personas, and key brand messages that resonate. This clarity allows every piece of content and campaign to align with your core business goals.",
    gradient: "from-purple-500 via-indigo-400 to-transparent",
    color: "text-purple-400",
    bgcolor: "hover:bg-purple-500",
  },
  {
    number: "03",
    title: "Content & Campaign Production",
    text: "Our creative team designs scroll-stopping visuals, reels, and video ads crafted for maximum engagement. Every asset is optimized for clicks — built to capture attention, trigger curiosity, and convert casual viewers into loyal customers.",
    gradient: "from-pink-500 via-red-400 to-transparent",
    color: "text-pink-400",
    bgcolor: "hover:bg-pink-500",
  },
  {
    number: "04",
    title: "Launch & Manage Ads",
    text: "We activate full-funnel campaigns across Meta and LinkedIn, targeting each stage of your buyer journey. From awareness to conversion, every ad is tracked, tested, and optimized for real performance — not vanity metrics.",
    gradient: "from-yellow-400 via-orange-400 to-transparent",
    color: "text-yellow-400",
    bgcolor: "hover:bg-yellow-500",
  },
  {
    number: "05",
    title: "Optimization & Reporting",
    text: "Once campaigns are live, we continuously analyze results, retarget high-intent audiences, and scale what’s performing best. Our transparent reports break down ROI clearly — showing how awareness directly turns into revenue growth.",
    gradient: "from-green-500 via-transparent to-transparent",
    color: "text-green-400",
    bgcolor: "hover:bg-green-500",
  },
];

const SocialMediaHowItWorks = () => {
  return (
    <div className="min-h-screen relative bg-white py-16 px-6 md:px-12 lg:px-20">
      {/* Section Header */}
      <h2 className="text-3xl md:text-6xl text-black text-center font-medium mb-6 leading-tight">
        A Proven 5-Step System{" "}
        <br />
        <span className="text-blue-500">That Turns Awareness Into Revenue.</span>
      </h2>
      <p className="text-gray-900 max-w-2xl mx-auto mb-16 text-center leading-relaxed">
        Our framework transforms brand visibility into measurable business growth. 
        From deep-dive audits to campaign optimization, each step compounds results — 
        turning social engagement into tangible sales outcomes.
      </p>

      {/* MOBILE VERSION */}
      <div className="space-y-10 md:hidden">
        {steps.map((item, idx) => (
          <div
            key={idx}
            className={`flex group ${item.bgcolor} p-6 rounded-3xl flex-col items-start transition-all duration-300`}
          >
            <p
              className={`${item.color} group-hover:text-white text-5xl font-bold mb-2`}
            >
              {item.number}
            </p>
            <h2 className="text-xl font-bold text-black group-hover:text-white mb-2">{item.title}</h2>
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
                } ${item.gradient} z-0`}
              ></div>

              <div className="relative flex flex-col justify-between items-center z-10 bg-white rounded-[20px] p-8 h-[280px]">
                {/* Floating Card */}
                <div
                  className={`absolute flex items-center gap-6 flex-row border border-white/40 bg-white shadow-2xl max-w-3xl rounded-2xl p-10 z-10 transition-all duration-300 ${positionClasses}`}
                >
                  <div>
                    <p className={`${item.color} text-7xl font-bold`}>
                      {item.number}
                    </p>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-black mb-4">
                      {item.title}
                    </h2>
                    <p className="text-gray-900 leading-relaxed">{item.text}</p>
                  </div>
                </div>

                {/* CTA Button on Last Step */}
                {idx === steps.length - 1 && (
                  <div className="mt-auto absolute -bottom-[20px] flex justify-center w-full">
                    <a href="mailto:zee@bixeltek.com">
                      <button className="px-7 py-3 rounded-2xl bg-gradient-to-tr from-blue-600 via-blue-700 to-blue-950 hover:from-blue-950 hover:via-blue-700 hover:to-blue-600 text-white font-semibold text-sm shadow-lg transition">
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
      <p className="text-gray-900 mt-12 max-w-[90%] md:max-w-[50%] mx-auto text-center leading-relaxed">
        Each step compounds your visibility — not vanity metrics. 
        Our process ensures your brand captures attention, nurtures it with storytelling, 
        and converts it into measurable growth you can scale.
      </p>
    </div>
  );
};

export default SocialMediaHowItWorks;
