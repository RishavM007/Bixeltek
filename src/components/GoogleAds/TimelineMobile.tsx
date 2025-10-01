import React from 'react';
import Link from 'next/link';

const containers = [
  {
    number: '01',
    title: 'Research & Analysis',
    text: 'In-depth keyword research, competitor benchmarking, and market insights ensuring stronger, data-driven advertising performance.',
    gradient: 'from-blue-500 via-blue-400 to-[#131313]',
    color: 'text-blue-500',
  },
  {
    number: '02',
    title: 'Campaign Architecture',
    text: 'Scalable account structures built for efficiency, higher quality scores, and long-term advertising success growth.',
    gradient: 'from-green-500 via-teal-400 to-[#13131333]',
    color: 'text-yellow-500',
  },
  {
    number: '03',
    title: 'Ad Copy & Creatives',
    text: 'Compelling ad copy and compliant creatives designed to maximize visibility, engagement, and consistent click-through rates.',
    gradient: 'from-yellow-400 via-yellow-300 to-[#13131333]',
    color: 'text-red-500',
  },
  {
    number: '04',
    title: 'Landing Page Optimization',
    text: 'Fast, responsive, and conversion-focused landing pages designed to improve mobile experiences and drive results.',
    gradient: 'from-pink-500 via-purple-400 to-[#13131333]',
    color: 'text-orange-500',
  },
  {
    number: '05',
    title: 'Conversion Tracking',
    text: 'Robust GA4, GTM, and CRM integrations delivering full-funnel tracking and actionable performance insights.',
    gradient: 'from-indigo-500 via-indigo-400 to-[#13131333]',
    color: 'text-teal-500',
  },
  {
    number: '06',
    title: 'Continuous Scaling',
    text: 'Ongoing A/B testing, budget optimization, and audience expansion strategies for consistent campaign performance improvements.',
    gradient: 'from-red-500 via-[#131313] to-[#13131333]',
    color: 'text-pink-500',
  },
];

const GradientBorderContainersMob = () => {
  return (
    <div className="min-h-screen bg-[#131313] py-12 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl md:text-6xl text-white text-center max-w-3xl mx-auto font-bold font-inter mb-6">
        A <span className="text-blue-500">Proven Framework</span> to Scale Profitably
      </h2>
      <p className="text-gray-300 max-w-2xl mx-auto mb-12 font-poppins leading-relaxed text-center">
        Our Google Ads process is battle-tested across multiple industries and regions:
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
                className={`absolute -inset-1 rounded-[20px] ${isEven ? 'bg-gradient-to-r' : 'bg-gradient-to-l'
                  } ${item.gradient} z-0`}
              ></div>

              <div className="relative flex flex-col justify-between items-center z-10 bg-[#131313] rounded-[20px] p-8 h-[260px]">
                {/* Floating black content box */}
                <div
                  className={`absolute flex items-center gap-5 flex-row bg-black max-w-3xl rounded-2xl p-10 z-10 ${positionClasses}`}
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
                  <div className="mt-auto absolute -bottom-[20px]  flex justify-center w-full">
                    <Link href={'tel:+919100032301'}>
                      <button className="px-7 py-3 rounded-2xl bg-blue-600 text-white font-semibold text-sm shadow-lg hover:bg-blue-700 transition">
                        Talk To Our Certified PPC Specialist
                      </button>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>



      <p className="text-gray-300 mt-10 max-w-[90%] md:max-w-[30%] mx-auto mb-12 font-poppins leading-relaxed text-center">
        This isn’t theory. It’s a repeatable framework we’ve used to drive results in the USA, Canada, India, and Saudi Arabia.
      </p>
    </div>
  );
};

export default GradientBorderContainersMob;
