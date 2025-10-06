'use client';

import React from 'react';
import Link from 'next/link';

const containers = [
  {
    number: '01',
    title: 'Audit & Discovery',
    text: 'We begin with a full technical SEO audit, keyword gap analysis, and competitor insights to uncover opportunities and roadblocks for growth.',
    gradient: 'from-blue-500 via-blue-400 to-transparent',
    color: 'text-blue-500',
        bgcolor: 'hover:bg-blue-500',
  },
  {
    number: '02',
    title: 'Strategy & Roadmap',
    text: 'Every campaign follows a prioritized roadmap with clear milestones, actions tied to ROI, and strategies aligned to business objectives.',
    gradient: 'from-green-500 via-teal-400 to-transparent',
    color: 'text-teal-500',
        bgcolor: 'hover:bg-teal-500',
  },
  {
    number: '03',
    title: 'On-Page Optimization',
    text: 'We refine metadata, schema, internal linking, and content structure so search engines and users can easily understand and navigate your site.',
    gradient: 'from-yellow-400 via-yellow-300 to-transparent',
    color: 'text-yellow-500',
        bgcolor: 'hover:bg-yellow-500',
  },
  {
    number: '04',
    title: 'Content Development',
    text: 'From service pages to long-form blogs and topical clusters, we craft content designed to rank, engage, and convert your audience.',
    gradient: 'from-pink-500 via-purple-400 to-transparent',
    color: 'text-purple-500',
        bgcolor: 'hover:bg-purple-500',
  },
  {
    number: '05',
    title: 'Local SEO Toronto',
    text: 'We strengthen your Maps presence, citations, and customer reviews to help you dominate local searches across Toronto and the GTA.',
    gradient: 'from-indigo-500 via-indigo-400 to-transparent',
    color: 'text-indigo-500',
        bgcolor: 'hover:bg-indigo-500',
  },
  {
    number: '06',
    title: 'AI SEO Integration',
    text: 'By clarifying entities and context, we prepare your brand to be discovered and recommended by AI-driven platforms like Google Gemini & ChatGPT.',
    gradient: 'from-red-500 via-[#13131333] to-transparent',
    color: 'text-red-500',
        bgcolor: 'hover:bg-red-500',
  },
  {
    number: '07',
    title: 'Authority Building',
    text: 'High-quality backlinks, digital PR, and strategic mentions build trust and boost your authority in competitive markets.',
    gradient: 'from-purple-500 via-pink-400 to-transparent',
    color: 'text-purple-500',
        bgcolor: 'hover:bg-purple-500',
  },
  {
    number: '08',
    title: 'Reporting & Review',
    text: 'Transparent monthly reports that track rankings, traffic, leads, and ROI — ensuring you see real business impact from SEO.',
    gradient: 'from-blue-500 via-transparent to-transparent',
    color: 'text-blue-500',
        bgcolor: 'hover:bg-blue-500',
  },
];

const GradientBorderContainersSEO = () => {
  return (
    <div className="min-h-screen relative bg-black py-12 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl md:text-6xl text-white text-center max-w-3xl mx-auto font-bold font-inter mb-6">
        A Proven Process for <span className="text-blue-500">Sustainable Growth</span>
      </h2>
      <p className="text-gray-300 max-w-2xl mx-auto mb-12 font-poppins leading-relaxed text-center">
        SEO success requires structure, discipline, and ongoing optimization. Our process ensures every
        campaign builds momentum and compounds results over time.
      </p>

      {/* ✅ MOBILE VERSION (simple cards) */}
       <div className="space-y-10 md:hidden">
        {containers.map((item, idx) => (
          <div key={idx} className={`flex group ${item.bgcolor} p-6 rounded-3xl flex-col items-start`}>
            <p className={`${item.color} group-hover:text-white text-5xl font-bold mb-2`}>{item.number}</p>
            <h2 className="text-xl font-bold text-white mb-2">{item.title}</h2>
            <p className="text-gray-300 group-hover:text-white">{item.text}</p>
          </div>
        ))}
      </div>

      {/* ✅ DESKTOP VERSION (gradient bordered cards) */}
      <div className="hidden md:block max-w-7xl mx-auto mt-40 space-y-[4px]">
        {containers.map((item, idx) => {
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

                {idx === containers.length - 1 && (
                  <div className="mt-auto absolute -bottom-[20px] flex justify-center w-full">
                    <a href="mailto:zee@bixeltek.com">
                      <button className="px-7 py-3 rounded-2xl bg-blue-600 text-white font-semibold text-sm shadow-lg hover:bg-blue-700 transition">
                        Talk To Our SEO Specialist
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
        This structured approach ensures your SEO campaigns deliver not just rankings — but measurable growth.
      </p>
    </div>
  );
};

export default GradientBorderContainersSEO;
