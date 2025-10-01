'use client';

import React from 'react';

const steps = [
  {
    number: '01',
    title: 'Discovery & Market Research',
    text: "Understand your goals, audience, and Vancouver’s competition to lay the foundation for an effective campaign.",
    gradient: 'from-blue-500 via-blue-400 to-black',
    color: 'text-blue-500',
    bgcolor: 'hover:bg-blue-500',
  },
  {
    number: '02',
    title: 'Campaign Strategy & Setup',
    text: "Build structured campaigns for maximum relevance, quality score, and ROI.",
    gradient: 'from-green-500 via-teal-400 to-transparent',
    color: 'text-teal-500',
    bgcolor: 'hover:bg-teal-500',
  },
  {
    number: '03',
    title: 'Ad Creation & Landing Pages',
    text: "Write persuasive ads and design landing pages that convert visitors into leads.",
    gradient: 'from-yellow-400 via-yellow-300 to-transparent',
    color: 'text-yellow-500',
    bgcolor: 'hover:bg-yellow-500',
  },
  {
    number: '04',
    title: 'Tracking & Launch',
    text: "Install call, form, and sales tracking before launch to ensure complete visibility of results.",
    gradient: 'from-pink-500 via-purple-400 to-transparent',
    color: 'text-purple-500',
    bgcolor: 'hover:bg-purple-500',
  },
  {
    number: '05',
    title: 'Daily Optimization',
    text: "Monitor keywords, adjust bids, and refine targeting for continuous performance improvement.",
    gradient: 'from-indigo-500 via-indigo-400 to-transparent',
    color: 'text-indigo-500',
    bgcolor: 'hover:bg-indigo-500',
  },
  {
    number: '06',
    title: 'Reporting & Scaling',
    text: "Share transparent reports and scale winning campaigns to maximize ROI.",
    gradient: 'from-red-500 via-transparent to-transparent',
    color: 'text-red-500',
    bgcolor: 'hover:bg-red-500',
  },
];

const GoogleAdsProcessVancouver = () => {
  return (
    <div className="min-h-screen relative bg-black py-12 px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <h2 className="text-3xl md:text-6xl text-white text-center max-w-7xl mx-auto font-bold font-inter mb-6">
        A Transparent Process That Delivers<span className="text-blue-500"> Consistent ROI</span>
      </h2>
      <p className="text-gray-300 max-w-2xl mx-auto mb-12 font-poppins leading-relaxed text-center">
        We use a proven, step-by-step process that ensures every Google Ads campaign is optimized for growth.
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
                    <a href={'#form'}>
                      <button className="px-7 py-3 rounded-2xl bg-blue-600 text-white font-semibold text-sm shadow-lg hover:bg-blue-700 transition">
                        Book a Free Google Ads Consultation
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
        This structured approach ensures your Google Ads campaigns in Vancouver are transparent, measurable, and continuously optimized for growth.
      </p>
    </div>
  );
};

export default GoogleAdsProcessVancouver;
