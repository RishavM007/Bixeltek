import React from 'react';

const containers = [
  {
    number: '01',
    title: 'Deep Discovery & Market Analysis',
    text: "Map your goals, competitors, and Toronto’s unique search patterns. Leverage Koray Tuğberk’s frameworks for in-depth entity, intent, and audience mapping.",
    gradient: 'from-blue-500 via-blue-400 to-[black]',
    color: 'text-blue-500',
  },
  {
    number: '02',
    title: 'Custom Campaign Strategy',
    text: "Design campaigns and structures for maximum Quality Score and market coverage. Identify highest-converting and most valuable keywords (including long-tail and local-specific terms).",
    gradient: 'from-green-500 via-teal-400 to-[#13131333]',
    color: 'text-teal-500',
  },
  {
    number: '03',
    title: 'Ad & Landing Page Creation',
    text: "Write persuasive, benefits-first copy. Build Toronto-optimized landing pages with calls-to-action, trust badges, and social proof.",
    gradient: 'from-yellow-400 via-yellow-300 to-[#13131333]',
    color: 'text-yellow-500',
  },
  {
    number: '04',
    title: 'Launch, Tracking, & Measurement',
    text: "Rapid turnaround (5–10 days). Full analytics, call tracking, and lead attribution from the outset.",
    gradient: 'from-pink-500 via-purple-400 to-[#13131333]',
    color: 'text-purple-500',
  },
  {
    number: '05',
    title: 'Ongoing Optimization',
    text: "Daily adjustments: Negative keyword pruning, bid management, and search term refinement. Weekly/Monthly deep-dive reports and ROI-boosting recommendations.",
    gradient: 'from-indigo-500 via-indigo-400 to-[#13131333]',
    color: 'text-indigo-500',
  },
];

const GradientBorderContainersMobToronto = () => {
  return (
    <div className="min-h-screen relative bg-black py-12 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl md:text-6xl text-white text-center max-w-3xl mx-auto font-bold font-inter mb-6">
        Our<span className="text-blue-500"> Proven Google Ads <br /></span>Management Process
      </h2>
      <p className="text-gray-300 max-w-2xl mx-auto mb-12 font-poppins leading-relaxed text-center">
        The 5-Step Process That Delivers Results for Toronto Businesses.
      </p>

      {/* ✅ MOBILE VERSION (simple cards) */}
      <div className="space-y-10 md:hidden">
        {containers.map((item, idx) => (
          <div key={idx} className="flex flex-col items-start">
            <p className={`${item.color} text-5xl font-bold mb-2`}>{item.number}</p>
            <h2 className="text-xl font-bold text-white mb-2">{item.title}</h2>
            <p className="text-gray-300">{item.text}</p>
          </div>
        ))}
      </div>

      {/* ✅ DESKTOP VERSION (gradient bordered cards) */}
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

export default GradientBorderContainersMobToronto;
