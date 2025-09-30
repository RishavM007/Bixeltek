"use client";

import React from 'react';

const containers = [
  {
    number: '01',
    title: 'SEO Audit & Research',
    text: "We begin by analyzing your current rankings, competitor performance, and technical site health. This foundation reveals opportunities to strengthen visibility and close market gaps in Mississauga.",
    gradient: 'from-blue-500 via-blue-400 to-black',
    color: 'text-blue-500',
  },
  {
    number: '02',
    title: 'Strategy Development',
    text: "Based on research, we define targeted keywords, core topics, and realistic goals. Every strategy is tailored to Mississauga businesses to maximize local and long-term ROI.",
    gradient: 'from-green-500 via-teal-400 to-transparent',
    color: 'text-teal-500',
  },
  {
    number: '03',
    title: 'On-Page Optimization',
    text: "We refine your site’s structure, metadata, and content hierarchy. From headings to internal linking, every page is optimized for search engine visibility and user experience.",
    gradient: 'from-yellow-400 via-yellow-300 to-transparent',
    color: 'text-yellow-500',
  },
  {
    number: '04',
    title: 'Content Creation & Expansion',
    text: "SEO thrives on content. We create and expand query-responsive blogs, landing pages, and service content that match search intent and capture qualified Mississauga traffic.",
    gradient: 'from-pink-500 via-purple-400 to-transparent',
    color: 'text-purple-500',
  },
  {
    number: '05',
    title: 'Technical SEO',
    text: "From site speed to mobile usability and indexing, we fix backend issues that block rankings. A technically sound site ensures search engines and users stay engaged.",
    gradient: 'from-indigo-500 via-indigo-400 to-transparent',
    color: 'text-indigo-500',
  },
  {
    number: '06',
    title: 'Link Building & Authority Growth',
    text: "We secure high-quality, relevant backlinks that grow domain authority and trust. Strong off-page signals increase your visibility and credibility in competitive Mississauga markets.",
    gradient: 'from-red-500 via-red-400 to-transparent',
    color: 'text-red-500',
  },
  {
    number: '07',
    title: 'Monitoring & Reporting',
    text: "We track rankings, traffic, and conversions with transparent reports. Continuous monitoring ensures accountability, with data-driven refinements that keep your SEO on the growth path.",
    gradient: 'from-purple-500 via-transparent to-transparent',
    color: 'text-purple-400',
  },
];

const SEOTimelineMiss = () => {
  return (
    <div className="min-h-screen relative bg-black py-12 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl md:text-6xl text-white text-center max-w-6xl mx-auto font-bold font-inter mb-6">
        How We Deliver<span className="text-blue-500"> SEO Results</span> <br /> Step by Step
      </h2>
      <p className="text-gray-300 max-w-2xl mx-auto mb-12 font-poppins leading-relaxed text-center">
        SEO isn’t guesswork — it’s a system. At Bixeltek, we follow a structured process that builds visibility, credibility, and measurable improvements over time.
      </p>

      {/* MOBILE VERSION */}
      <div className="space-y-10 md:hidden">
        {containers.map((item, idx) => (
          <div key={idx} className="flex flex-col items-start">
            <p className={`${item.color} text-5xl font-bold mb-2`}>{item.number}</p>
            <h2 className="text-xl font-bold text-white mb-2">{item.title}</h2>
            <p className="text-gray-300">{item.text}</p>
          </div>
        ))}
      </div>

      {/* DESKTOP VERSION */}
      <div className="hidden md:block max-w-7xl mx-auto mt-40 space-y-[4px]">
        {containers.map((item, idx) => {
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
                {idx === containers.length - 1 && (
                  <div className="mt-auto absolute -bottom-[20px] flex justify-center w-full">
                    <a href={'#form'}>
                      <button className="px-7 py-3 rounded-2xl bg-blue-600 text-white font-semibold text-sm shadow-lg hover:bg-blue-700 transition">
                        Book a Free SEO Consultation
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
        This structured approach ensures your SEO campaign builds steadily, adapts to changes, and delivers long-term growth for Mississauga businesses.
      </p>
    </div>
  );
};

export default SEOTimelineMiss;
