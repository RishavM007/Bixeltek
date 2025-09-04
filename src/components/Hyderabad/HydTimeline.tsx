import React from 'react';
import Link from 'next/link';

const containers = [
  {
    number: '01',
    title: 'Audit & Analysis',
    text: 'Spot missed opportunities, uncover competitor gaps, and identify where your brand can win.',
    gradient: 'from-blue-500 via-blue-400 to-[black]',
    color: 'text-blue-500',
  },
  {
    number: '02',
    title: 'Strategic Planning',
    text: 'Build a tailored roadmap across the right channels to align with your business goals.',
    gradient: 'from-green-500 via-teal-400 to-[#13131333]',
    color: 'text-yellow-500',
  },
  {
    number: '03',
    title: 'Campaign Launch',
    text: 'Activate campaigns on the platforms your customers already live and engage.',
    gradient: 'from-yellow-400 via-yellow-300 to-[#13131333]',
    color: 'text-red-500',
  },
  {
    number: '04',
    title: 'Optimization & Testing',
    text: 'Test, measure, and refine campaigns every week for consistent performance growth.',
    gradient: 'from-pink-500 via-purple-400 to-[#13131333]',
    color: 'text-orange-500',
  },
  {
    number: '05',
    title: 'Scaling & Growth',
    text: 'Double down on what’s working and expand to accelerate ROI and long-term growth.',
    gradient: 'from-indigo-500 via-indigo-400 to-[#13131333]',
    color: 'text-teal-500',
  },
];

const HydTimeline = () => {
    return (
        <div className="min-h-screen hidden md:block bg-[black] py-12 px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-6xl text-white text-center max-w-3xl mx-auto font-bold font-inter mb-6">
                A <span className='text-blue-500'>Proven Framework</span> to Scale Profitably
            </h2>
            <p className='text-gray-300 max-w-2xl mx-auto mb-12 font-poppins leading-relaxed text-center'>Our Google Ads process is battle-tested across multiple industries and regions:</p>
            <div className="max-w-7xl mx-auto mt-40 space-y-[4px]">
                {containers.map((item, idx) => {
                    const isEven = idx % 2 === 0;
                    let positionClasses = '';
                    if (idx % 4 === 0) positionClasses = '-top-20 right-10'; // top-right
                    else if (idx % 4 === 1) positionClasses = '-top-20 left-1/3 -translate-x-1/4'; 
                    else if (idx % 4 === 2) positionClasses = '-top-20 left-10'; // top-left
                    else if (idx % 4 === 3) positionClasses = '-top-20 left-1/3 -translate-x-1/4';
                    return (
                        <div key={idx} className="relative z-10">
                            <div
                                className={`absolute -inset-1 rounded-[20px] ${isEven ? 'bg-gradient-to-r' : 'bg-gradient-to-l'
                                    } ${item.gradient} z-0`}
                            ></div>

                            <div className="relative flex z-10 bg-[black] rounded-[20px] p-8 h-[220px]">
                                
                                <div className={`absolute flex items-center gap-5 flex-row bg-black border border-white/50  max-w-3xl rounded-2xl p-10 z-10 ${positionClasses}`}>
                                    <div>
                                    <p className={` ${item.color} text-7xl font-bold`}>{item.number}</p>
                                </div>
                                <div>
                                     <h2 className="text-2xl font-bold text-white mb-4">{item.title}</h2>
                                    <p className="text-gray-300">{item.text}</p> 
                                </div>
                                   
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
            <p className='text-gray-300 mt-20 max-w-2xl mx-auto mb-12 font-poppins leading-relaxed text-center'>This isn’t theory. It’s a repeatable framework we’ve used to drive results in the USA, Canada, India, and Saudi Arabia.
            </p>
            <div className="flex justify-center mt-2">
                <Link href={'tel:+919100032301'}>
                <button className="px-7 py-3 rounded-2xl bg-blue-600 text-white font-semibold text-sm shadow-lg hover:bg-blue-700 transition">
                    Talk To Our Digital Marketing Specialist
                </button>
                </Link>
            </div>

        </div>
    );
};

export default HydTimeline;
