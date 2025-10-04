"use client";

import React from "react";

const steps = [
  {
    number: "01",
    title: "Discovery & Audience Research",
    text: "We start by understanding your brand, business goals, and audience. Through detailed persona mapping and competitor analysis, we identify which platforms and content formats resonate most with your ideal customers — setting the foundation for every campaign that follows.",
    gradient: "from-blue-500 via-blue-400 to-transparent",
    color: "text-blue-500",
    bgcolor: "hover:bg-blue-500",
  },
  {
    number: "02",
    title: "Strategy Development",
    text: "Based on our research, we craft platform-specific strategies for Meta, Instagram, YouTube, and LinkedIn. Each plan defines tone, content mix, ad funnels, and KPIs — ensuring every action taken aligns with your growth objectives.",
    gradient: "from-teal-500 via-green-400 to-transparent",
    color: "text-teal-500",
    bgcolor: "hover:bg-teal-500",
  },
  {
    number: "03",
    title: "Content Creation",
    text: "Our creative team designs scroll-stopping visuals, writes persuasive copy, and plans narratives that emotionally connect with your audience. From posts and Reels to carousel ads, every piece of content strengthens your brand identity and builds trust.",
    gradient: "from-yellow-400 via-amber-300 to-transparent",
    color: "text-yellow-500",
    bgcolor: "hover:bg-yellow-500",
  },
  {
    number: "04",
    title: "Campaign Launch",
    text: "Once your strategy and content are ready, we launch data-backed ad campaigns tailored to custom audiences and funnel stages. Each campaign includes pixel tracking, conversion objectives, and A/B-tested creatives for maximum impact.",
    gradient: "from-pink-500 via-fuchsia-400 to-transparent",
    color: "text-pink-500",
    bgcolor: "hover:bg-pink-500",
  },
  {
    number: "05",
    title: "Optimization",
    text: "After launch, we continuously refine targeting, ad spend, and creatives based on live performance metrics. Our agile optimization approach ensures your campaigns stay efficient and consistently drive stronger ROI week after week.",
    gradient: "from-indigo-500 via-indigo-400 to-transparent",
    color: "text-indigo-500",
    bgcolor: "hover:bg-indigo-500",
  },
  {
    number: "06",
    title: "Reporting & Scale",
    text: "We believe in full transparency. You’ll receive detailed performance reports with insights on reach, engagement, conversions, and cost-efficiency. Then, we scale the winning campaigns — amplifying results and revenue sustainably.",
    gradient: "from-red-500 via-transparent to-transparent",
    color: "text-red-500",
    bgcolor: "hover:bg-red-500",
  },
];

const SocialMediaProcessVancouver = () => {
  return (
    <div className="min-h-screen relative bg-black py-12 px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <h2 className="text-3xl md:text-6xl text-white text-center max-w-7xl mx-auto font-bold font-inter mb-6">
        Our Social Media Strategy <br />
        <span className="text-blue-500">That Converts Followers Into Customers</span>
      </h2>
      <p className="text-gray-300 max-w-2xl mx-auto mb-12 font-poppins leading-relaxed text-center">
        We don’t guess what works — we test, analyze, and refine. Every post, ad, and campaign is designed to move your audience closer to conversion, ensuring your marketing spend drives measurable business outcomes.
      </p>

      {/* MOBILE VERSION */}
      <div className="space-y-10 md:hidden">
        {steps.map((item, idx) => (
          <div
            key={idx}
            className={`flex group ${item.bgcolor} p-6 rounded-3xl flex-col items-start`}
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
                    <p className={`${item.color} text-7xl font-bold`}>{item.number}</p>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-4">{item.title}</h2>
                    <p className="text-gray-300">{item.text}</p>
                  </div>
                </div>

                {idx === steps.length - 1 && (
                  <div className="mt-auto absolute -bottom-[20px] flex justify-center w-full">
                    <a href={"#form"}>
                      <button className="px-7 py-3 rounded-2xl bg-blue-600 text-white font-semibold text-sm shadow-lg hover:bg-blue-700 transition">
                        Talk to a Social Media Expert
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
        This proven strategy helps Vancouver businesses grow beyond vanity metrics — turning engagement into conversions, and followers into loyal customers.
      </p>
    </div>
  );
};

export default SocialMediaProcessVancouver;
