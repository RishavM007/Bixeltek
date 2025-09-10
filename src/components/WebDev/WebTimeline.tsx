import React from 'react';
import Link from 'next/link';

const containers = [
  {
    number: '01',
    title: 'Need Identification',
    text: 'We analyze your business goals, challenges, and competitors to lay a solid foundation for your website project.',
    gradient: 'from-blue-500 via-blue-400 to-[black]',
    color: 'text-blue-500',
  },
  {
    number: '02',
    title: 'Strategy & Planning',
    text: 'We define the website structure, features, and clear conversion pathways that guide your users toward action.',
    gradient: 'from-green-500 via-teal-400 to-[#13131333]',
    color: 'text-teal-500',
  },
  {
    number: '03',
    title: 'Design & Branding',
    text: 'Pixel-perfect mockups and visuals crafted to align seamlessly with your brand identity and engage your audience.',
    gradient: 'from-yellow-400 via-yellow-300 to-[#13131333]',
    color: 'text-yellow-500',
  },
  {
    number: '04',
    title: 'Development',
    text: 'Custom-coded or WordPress builds tailored to your requirements, ensuring scalability, flexibility, and security.',
    gradient: 'from-pink-500 via-purple-400 to-[#13131333]',
    color: 'text-purple-500',
  },
  {
    number: '05',
    title: 'Integrations',
    text: 'Payment gateways, analytics, CRM, and other third-party tools integrated for smooth business operations.',
    gradient: 'from-indigo-500 via-indigo-400 to-[#13131333]',
    color: 'text-indigo-500',
  },
  {
    number: '06',
    title: 'Testing & Launch',
    text: 'Comprehensive QA for speed, security, SEO, and responsiveness before going live to ensure maximum impact.',
    gradient: 'from-red-500 via-[#13131333] to-[#13131333]',
    color: 'text-red-500',
  },
];

const GradientBorderContainersMobWeb = () => {
  return (
    <div className="min-h-screen relative bg-black py-12 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl md:text-6xl text-white text-center max-w-3xl mx-auto font-bold font-inter mb-6">
        Our<span className="text-blue-500"> Web Design <br></br></span>Process
      </h2>
      <p className="text-gray-300 max-w-2xl mx-auto mb-12 font-poppins leading-relaxed text-center">
        Our proven process ensures every project is delivered with precision, scalability, and measurable ROI.
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
                  <div className="mt-auto absolute -bottom-[20px]  flex justify-center w-full">
                    <a href={'tel:+919100032301'}>
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



      <p className="text-gray-300 mt-10 max-w-[90%] md:max-w-[30%] mx-auto mb-12 font-poppins leading-relaxed text-center">
        This structured approach ensures your website is not only launched but consistently optimized for growth.
      </p>
    </div>
  );
};

export default GradientBorderContainersMobWeb;
