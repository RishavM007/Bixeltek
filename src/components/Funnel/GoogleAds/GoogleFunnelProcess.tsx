"use client";

import React from "react";
import Image from "next/image";
import leftimg from '@/assets/left-shape-mic-seo.png'

const steps = [
  {
    number: "01",
    title: "Audit & Discovery",
    text: "Every strong campaign starts with data, not guesswork. In this phase, we analyze your existing Google Ads setup, identify wasted ad spend, audit negative keywords, and uncover audience mismatches that silently drain ROI. You’ll finally see where your money is going — and where it should be going instead.",
    gradient: "from-blue-500 via-blue-400 to-transparent",
    color: "text-blue-500",
    bgcolor: "hover:bg-blue-500",
  },
  {
    number: "02",
    title: "Campaign Rebuild",
    text: "Once we’ve identified inefficiencies, we rebuild your ad structure from the ground up. We organize campaigns for laser-targeted clarity, improve Quality Scores, and lower your cost per click (CPC) — ensuring every rupee spent is tied directly to measurable performance and conversions.",
    gradient: "from-indigo-500 via-indigo-400 to-transparent",
    color: "text-indigo-500",
    bgcolor: "hover:bg-indigo-500",
  },
  {
    number: "03",
    title: "Ad Copy & Creative",
    text: "A click starts with curiosity. Our copywriters and creative strategists craft intent-driven headlines, compelling descriptions, and eye-catching creatives that stop the scroll and attract the right audience. The result? Ads that not only get clicks — but clicks that actually convert.",
    gradient: "from-amber-400 via-yellow-400 to-transparent",
    color: "text-yellow-400",
    bgcolor: "hover:bg-yellow-400",
  },
  {
    number: "04",
    title: "Landing Page Optimization",
    text: "We don’t just send traffic to your site — we make sure your landing pages are built to convert. From strategic CTAs and above-the-fold design to mobile speed and user psychology, every element is engineered to turn visitors into leads, not bounces.",
    gradient: "from-teal-500 via-green-400 to-transparent",
    color: "text-teal-500",
    bgcolor: "hover:bg-teal-500",
  },
  {
    number: "05",
    title: "Conversion Tracking & Reporting",
    text: "We implement clean, accurate tracking across every touchpoint — from form submissions to phone calls. No more guessing what’s working. You’ll have transparent ROI visibility, real-time dashboards, and actionable insights that make optimization a science, not a mystery.",
    gradient: "from-pink-500 via-fuchsia-400 to-transparent",
    color: "text-pink-500",
    bgcolor: "hover:bg-pink-500",
  },
  {
    number: "06",
    title: "Ongoing Optimization",
    text: "Google Ads isn’t set-and-forget — it’s an evolving system. Our team runs continuous A/B tests, adjusts bids based on performance, refreshes creatives, and fine-tunes targeting weekly. That’s how we keep your campaigns ahead of algorithm changes and consistently improving over time.",
    gradient: "from-red-500 via-transparent to-transparent",
    color: "text-red-500",
    bgcolor: "hover:bg-red-500",
  },
];

const GoogleAdsFunnelProcessSection = () => {
  return (
    <div className="min-h-screen relative bg-black pt-32 pb-12 px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <h2 className="text-3xl md:text-6xl text-white text-center max-w-7xl mx-auto font-bold font-inter mb-6">
        We Don’t Just Manage Ads —{" "}
        <span className="text-blue-500">We Build Predictable Growth Engines</span>
      </h2>
      <p className="text-gray-300 text-sm md:text-base max-w-4xl mx-auto mb-12 font-poppins leading-relaxed text-center">
        At <span className="font-semibold text-white">Bixeltek</span>, we treat Google Ads as a precision science.
        Our certified experts combine deep market research, conversion psychology, and continuous optimization
        to transform your ad spend into predictable, scalable, and measurable ROI.
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
            <p className="text-gray-300 text-sm group-hover:text-white">{item.text}</p>
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
                    <h2 className="text-2xl font-bold text-white mb-3">{item.title}</h2>
                    <p className="text-gray-300 text-sm leading-relaxed">{item.text}</p>
                  </div>
                </div>

                {/* CTA only for last step */}
                {idx === steps.length - 1 && (
                  <div className="mt-auto absolute -bottom-[20px] flex justify-center w-full">
                    <a href="mailto:zee@bixeltek.com">
                      <button className="px-7 py-3 rounded-2xl bg-blue-600 text-white font-semibold text-sm shadow-lg hover:bg-blue-700 transition">
                        Get My Free Google Ads Audit
                      </button>
                    </a>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      <p className="text-gray-300 text-sm md:text-base mt-10 max-w-[90%] md:max-w-[50%] mx-auto mb-12 font-poppins leading-relaxed text-center">
        This proven, data-backed system transforms your Google Ads from a guessing game into a predictable growth engine — driving consistent leads, sales, and revenue across every campaign.
      </p>
    </div>
  );
};

export default GoogleAdsFunnelProcessSection;
