'use client';

import React from 'react';
import Link from 'next/link';

const processTimeline = [
  {
    number: '01',
    title: 'Discovery & Audit',
    text: 'Weeks 1–2 focus on understanding your goals, reviewing competitors, analyzing your current website, and mapping opportunities to ensure a strong foundation for success.',
    gradient: 'from-blue-500 via-blue-400 to-black',
    color: 'text-blue-500',
    bgcolor: 'hover:bg-blue-500',
  },
  {
    number: '02',
    title: 'Strategy & Wireframing',
    text: 'Weeks 2–3 involve creating detailed strategies, planning user flows, and developing wireframes that align design layouts with your business objectives and audience needs.',
    gradient: 'from-green-500 via-teal-400 to-transparent',
    color: 'text-teal-500',
    bgcolor: 'hover:bg-teal-500',
  },
  {
    number: '03',
    title: 'Design & Development',
    text: 'Weeks 3–5 focus on building responsive, visually appealing, and SEO-optimized websites, turning wireframes into fully functional designs ready for content integration.',
    gradient: 'from-yellow-400 via-yellow-300 to-transparent',
    color: 'text-yellow-500',
    bgcolor: 'hover:bg-yellow-500',
  },
  {
    number: '04',
    title: 'Content & SEO Integration',
    text: 'Weeks 5–6 involve adding high-quality content, visuals, and on-page SEO elements including metadata, schema, and internal linking to improve visibility and engagement.',
    gradient: 'from-pink-500 via-purple-400 to-transparent',
    color: 'text-purple-500',
    bgcolor: 'hover:bg-purple-500',
  },
  {
    number: '05',
    title: 'Testing & QA',
    text: 'Weeks 6–7 focus on comprehensive testing across devices, browsers, and platforms to ensure flawless performance, responsiveness, and an excellent user experience before launch.',
    gradient: 'from-indigo-500 via-indigo-400 to-transparent',
    color: 'text-indigo-500',
    bgcolor: 'hover:bg-indigo-500',
  },
  {
    number: '06',
    title: 'Launch & Support',
    text: 'Week 8 is dedicated to a smooth go-live, monitoring performance, and providing ongoing maintenance, updates, and support to ensure long-term website reliability and success.',
    gradient: 'from-red-500 via-transparent to-transparent',
    color: 'text-red-500',
    bgcolor: 'hover:bg-red-500',
  },
];

const ProcessTorontoWebdev = () => {
  return (
    <div className="min-h-screen relative bg-black py-12 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl md:text-6xl text-white text-center max-w-3xl mx-auto font-bold font-inter mb-6">
        From Audit to Launch — <span className="text-blue-500">How We Work </span>
      </h2>
      <p className="text-gray-300 max-w-2xl mx-auto mb-12 font-poppins leading-relaxed text-center">
         Our process is transparent, collaborative, and outcome-driven. Most projects are completed within 6–8 weeks, depending on complexity.
      </p>

      {/* ✅ MOBILE VERSION (simple cards) */}
      <div className="space-y-10 md:hidden">
        {processTimeline.map((item, idx) => (
          <div key={idx} className={`flex group ${item.bgcolor} p-6 rounded-3xl flex-col items-start`}>
            <p className={`${item.color} group-hover:text-white text-5xl font-bold mb-2`}>{item.number}</p>
            <h2 className="text-xl font-bold text-white mb-2">{item.title}</h2>
            <p className="text-gray-300 group-hover:text-white">{item.text}</p>
          </div>
        ))}
      </div>

      {/* ✅ DESKTOP VERSION (gradient bordered cards) */}
      <div className="hidden md:block max-w-7xl mx-auto mt-40 space-y-[4px]">
        {processTimeline.map((item, idx) => {
          const isEven = idx % 2 === 0;
          let positionClasses = '';
          if (idx % 4 === 0) positionClasses = '-top-20 right-10'; // top-right
          else if (idx % 4 === 1) positionClasses = '-top-20 left-1/3 -translate-x-1/4'; // bottom-center
          else if (idx % 4 === 2) positionClasses = '-top-20 left-10'; // top-left
          else if (idx % 4 === 3) positionClasses = '-top-20 left-1/3 -translate-x-1/4'; // bottom-center

          return (
            <div key={idx} className="relative z-0">
              {/* Gradient border */}
              <div
                className={`absolute -inset-1 rounded-[20px] ${
                  isEven ? 'bg-gradient-to-r' : 'bg-gradient-to-l'
                } ${item.gradient} z-0`}
              ></div>

              <div className="relative flex flex-col justify-between items-center z-10 bg-black rounded-[20px] p-8 h-[260px]">
                {/* Floating black content box */}
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

                {idx === processTimeline.length - 1 && (
                  <div className="mt-auto absolute -bottom-[20px] flex justify-center w-full">
                    <a href="mailto:zee@bixeltek.com">
                      <button className="px-7 py-3 rounded-2xl bg-blue-600 text-white font-semibold text-sm shadow-lg hover:bg-blue-700 transition">
                        Talk To Our Web Design Specialist
                      </button>
                    </a>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      <p className="text-gray-300 mt-10 max-w-[90%] md:max-w-[40%] mx-auto mb-12 font-poppins leading-relaxed text-center">
        From discovery to launch, we audit, strategize, design, develop, integrate content, optimize SEO, test thoroughly, and provide ongoing support
      </p>
    </div>
  );
};

export default ProcessTorontoWebdev;
