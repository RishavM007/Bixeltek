import React from 'react';

const containers = [
  {
    number: '01',
    title: 'Discovery & Research',
    text: "Understand your business, goals, and competitors. Dive deep into Mississauga’s market to identify high-value opportunities and audience behaviors.",
    gradient: 'from-blue-500 via-blue-400 to-[black]',
    color: 'text-blue-500',
  },
  {
    number: '02',
    title: 'Campaign Strategy',
    text: "Define campaign structure, audience targeting, and budget allocation. Optimize for high-converting keywords, ad groups, and funnels.",
    gradient: 'from-green-500 via-teal-400 to-[#13131333]',
    color: 'text-teal-500',
  },
  {
    number: '03',
    title: 'Ad Creation',
    text: "Write compelling ads and design optimized landing pages. Focus on benefits-first messaging, trust-building elements, and clear CTAs.",
    gradient: 'from-yellow-400 via-yellow-300 to-[#13131333]',
    color: 'text-yellow-500',
  },
  {
    number: '04',
    title: 'Tracking & Setup',
    text: "Install call, form, and sales tracking. Set up conversion pixels, analytics, and attribution to ensure accurate performance measurement.",
    gradient: 'from-pink-500 via-purple-400 to-[#13131333]',
    color: 'text-purple-500',
  },
  {
    number: '05',
    title: 'Launch & Monitor',
    text: "Activate campaigns and monitor initial performance closely. Adjust bids, placements, and creative variations in real time.",
    gradient: 'from-indigo-500 via-indigo-400 to-[#13131333]',
    color: 'text-indigo-500',
  },
  {
    number: '06',
    title: 'Daily Optimization',
    text: "Refine targeting, test creatives, manage bids, and prune low-performing keywords. Continuous adjustments ensure maximum ROI.",
    gradient: 'from-red-500 via-red-400 to-[#13131333]',
    color: 'text-red-500',
  },
  {
    number: '07',
    title: 'Reporting & Scaling',
    text: "Share transparent results and insights. Scale winning campaigns, reallocate budgets, and replicate high-performing strategies.",
    gradient: 'from-purple-500 via-transparent to-transparent',
    color: 'text-purple-400',
  },
];

const GMissTimeline = () => {
  return (
    <div className="min-h-screen relative bg-black py-12 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl md:text-6xl text-white text-center max-w-3xl mx-auto font-bold font-inter mb-6">
        Our <span className="text-blue-500">Proven Google Ads <br /></span>Process
      </h2>
      <p className="text-gray-300 max-w-2xl mx-auto mb-12 font-poppins leading-relaxed text-center">
        How We Build Winning Campaigns Step by Step. Our process is transparent and proven, giving Mississauga businesses clarity and confidence in every campaign.
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
                    <a href={'tel:+919100032301'}>
                      <button className="px-7 py-3 rounded-2xl bg-blue-600 text-white font-semibold text-sm shadow-lg hover:bg-blue-700 transition">
                        Talk To Our Ads Specialist
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
        This structured approach ensures your Google Ads campaigns are launched fast, optimized daily, and built to maximize ROI.
      </p>
    </div>
  );
};

export default GMissTimeline;
