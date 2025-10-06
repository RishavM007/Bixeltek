"use client";

import React from 'react';

const steps = [
  {
    number: '01',
    title: 'Audit & Discovery',
    text: "We start by auditing your existing social media presence, analyzing competitors, and reviewing audience behavior. This deep dive uncovers strengths, weaknesses, and hidden opportunities to make your Mississauga campaigns stand out right from the foundation.",
    gradient: 'from-blue-500 via-blue-400 to-black',
    color: 'text-blue-500',
        bgcolor: 'hover:bg-blue-500',
  },
  {
    number: '02',
    title: 'Strategy Development',
    text: "We define clear goals such as awareness, leads, or sales. By mapping your target audience, ideal platforms, and ad placements, we create a data-driven roadmap that ensures every campaign has a measurable ROI focus.",
    gradient: 'from-green-500 via-teal-400 to-transparent',
    color: 'text-teal-500',
        bgcolor: 'hover:bg-teal-500',
  },
  {
    number: '03',
    title: 'Content Creation',
    text: "Our creative team develops visuals, videos, and copywriting that resonate with your audience. From engaging carousel posts to scroll-stopping ad creatives, we craft content that doesn’t just look good but drives action.",
    gradient: 'from-yellow-400 via-yellow-300 to-transparent',
    color: 'text-yellow-500',
        bgcolor: 'hover:bg-yellow-500',
  },
  {
    number: '04',
    title: 'Campaign Setup & Launch',
    text: "We configure targeting, budget allocation, and ad placements across platforms like Facebook, Instagram, LinkedIn, and TikTok. Every launch is optimized to maximize exposure while keeping costs efficient for Mississauga businesses.",
    gradient: 'from-pink-500 via-purple-400 to-transparent',
    color: 'text-purple-500',
        bgcolor: 'hover:bg-purple-500',
  },
  {
    number: '05',
    title: 'Daily Optimization',
    text: "Campaigns don’t run on autopilot — we constantly monitor performance, tweak audience targeting, refresh creatives, and A/B test copy. This ensures your campaigns remain efficient and never burn budget unnecessarily.",
    gradient: 'from-indigo-500 via-indigo-400 to-transparent',
    color: 'text-indigo-500',
        bgcolor: 'hover:bg-indigo-500',
  },
  {
    number: '06',
    title: 'Reporting & Scaling',
    text: "Every month, you’ll receive transparent performance reports showing leads, clicks, sales, and ROI. We double down on what works, scale winning campaigns, and refine underperforming areas for continuous growth.",
    gradient: 'from-red-500 via-transparent to-transparent',
    color: 'text-red-500',
        bgcolor: 'hover:bg-red-500',
  },
];

const SocialProcessTimeline = () => {
  return (
    <div className="min-h-screen relative bg-black py-12 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl md:text-6xl text-white text-center max-w-6xl mx-auto font-bold font-inter mb-6">
        Our Proven Social Media Marketing <span className="text-blue-500">Process That Delivers ROI</span>
      </h2>
      <p className="text-gray-300 max-w-2xl mx-auto mb-12 font-poppins leading-relaxed text-center">
        Social media success isn’t luck — it’s a system. We follow a structured process that keeps your campaigns consistent, strategic, and focused on results for Mississauga businesses.
      </p>

      {/* MOBILE VERSION */}
     <div className="space-y-10 md:hidden">
        {steps.map((item, idx) => (
          <div key={idx} className={`flex group ${item.bgcolor} p-6 rounded-3xl flex-col items-start`}>
            <p className={`${item.color} group-hover:text-white text-5xl font-bold mb-2`}>{item.number}</p>
            <h2 className="text-xl font-bold text-white mb-2">{item.title}</h2>
            <p className="text-gray-300 group-hover:text-white">{item.text}</p>
          </div>
        ))}
      </div>


      {/* DESKTOP VERSION */}
      <div className="hidden md:block max-w-7xl mx-auto mt-40 space-y-[4px]">
        {steps.map((item, idx) => {
          const isEven = idx % 2 === 0;
          let positionClasses = '';
          if (idx % 4 === 0) positionClasses = '-top-20 right-10';
          else if (idx % 4 === 1) positionClasses = '-top-20 left-1/3 -translate-x-1/4';
          else if (idx % 4 === 2) positionClasses = '-top-20 left-10';
          else if (idx % 4 === 3) positionClasses = '-top-20 left-1/3 -translate-x-1/4';

          return (
            <div key={idx} className="relative z-0">
              {/* Gradient border */}
              <div
                className={`absolute -inset-1 rounded-[20px] ${isEven ? 'bg-gradient-to-r' : 'bg-gradient-to-l'} ${item.gradient} z-0`}
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

                {/* Call-to-action after last step */}
                {idx === steps.length - 1 && (
                  <div className="mt-auto absolute -bottom-[20px] flex justify-center w-full">
                    <a href={'mailto:zee@bixeltek.com'}>
                      <button className="px-7 py-3 rounded-2xl bg-blue-600 text-white font-semibold text-sm shadow-lg hover:bg-blue-700 transition">
                       Talk to a social media specialist
                      </button>
                    </a>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      <p className="text-gray-300 mt-10 max-w-[90%] md:max-w-[30%] mx-auto mb-12 font-poppins leading-relaxed text-center">
        This structured process ensures your social media campaigns run efficiently, adapt quickly, and deliver consistent ROI for Mississauga businesses.
      </p>
    </div>
  );
};

export default SocialProcessTimeline;
