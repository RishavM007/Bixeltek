import React from 'react';
import Link from 'next/link';

const containers = [
  {
    number: "01",
    title: "Discovery & Audit",
    text: "We analyze your current marketing, website, and competition to identify growth gaps.",
    gradient: "from-blue-500 via-blue-400 to-gray-50/10",
    color: "bg-gradient-to-r from-blue-700 to-purple-600",
    color2: "text-blue-500",
    bgcolor: 'hover:bg-blue-500',
  },
  {
    number: "02",
    title: "Customized Growth Plan",
    text: "A tailored strategy for your treatments, market, and patient base.",
    gradient: "from-green-500 via-teal-400 to-gray-50/10",
    color: "bg-gradient-to-r from-blue-600  to-teal-600",
    color2: "text-teal-500",
    bgcolor: 'hover:bg-teal-500',
  },
  {
    number: "03",
    title: "Implementation & Launch",
    text: "We fix your digital foundation, launch high-converting ads, and optimize your website for calls.",
    gradient: "from-yellow-400 via-yellow-300 to-gray-50/10",
    color: "bg-gradient-to-r from-yellow-500 to-green-500",
    color2: "text-green-500",
    bgcolor: 'hover:bg-green-500',
  },
  {
    number: "04",
    title: "Optimization & Scaling",
    text: "Continuous tracking, testing, and scaling to reduce cost per lead and maximize ROI.",
    gradient: "from-pink-500 via-purple-400 to-gray-50/10",
    color: "bg-gradient-to-r from-yellow-500  to-purple-600",
    color2: "text-purple-500",
    bgcolor: 'hover:bg-purple-500',
  },
  {
    number: "05",
    title: "Reporting & Partnership",
    text: "Transparent performance reporting and ongoing strategy sessions so you always know where growth is coming from.",
    gradient: "from-indigo-500 via-indigo-100 to-gray-50",
    color: "bg-gradient-to-r from-indigo-500  to-pink-600",
    color2: "text-indigo-500",
    bgcolor: 'hover:bg-indigo-500',
  },
];

const GradientBorderContainersMobDental = () => {
  return (
    <div className="min-h-screen relative bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl md:text-6xl text-black text-center max-w-3xl mx-auto font-bold font-inter mb-6">
        Our <span className="text-blue-500"> Process to Scale<br></br></span>Your Clinic
      </h2>
      <p className="text-gray-900 max-w-2xl mx-auto mb-12 font-poppins leading-relaxed text-center">
        Our proven process ensures every project is delivered with precision, scalability, and measurable ROI.
      </p>

      {/* ✅ MOBILE VERSION (simple cards) */}
      <div className="space-y-10 md:hidden">
        {containers.map((item, idx) => (
          <div key={idx} className={`flex group ${item.bgcolor} py-6 rounded-3xl flex-col items-start`}>
            <p className={`${item.color2} group-hover:text-white text-5xl font-bold mb-2`}>{item.number}</p>
            <h2 className="text-xl font-bold text-neutral-900 group-hover:text-white mb-2">{item.title}</h2>
            <p className="text-black group-hover:text-white">{item.text}</p>
          </div>
        ))}
      </div>

      <div className="hidden md:block max-w-7xl bg-white mx-auto mt-40 space-y-[4px]">
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

              <div className="relative flex flex-col justify-between items-center z-10 bg-gray-50 rounded-[20px] p-8 h-[260px]">
                {/* Floating black content box */}
                <div
                  className={`absolute flex items-center gap-5 flex-row border border-white/50 ${item.color} w-[85%] lg:max-w-3xl rounded-2xl p-10 z-10 ${positionClasses}`}
                >
                  <div>
                    <p className={`text-white text-7xl font-bold`}>{item.number}</p>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-4">{item.title}</h2>
                    <p className="text-white text-lg">{item.text}</p>
                  </div>
                </div>

                {idx === containers.length - 1 && (
                  <div className="mt-auto absolute -bottom-[20px]  flex justify-center w-full">
                    <a href={'tel:+919100032301'}>
                      <button className="px-7 py-3 rounded-2xl bg-blue-600 text-white font-semibold text-sm shadow-lg hover:bg-blue-700 transition">
                        Talk To Our Dental Marketing Experts
                      </button>
                    </a>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>



      <p className="text-gray-900 mt-10 max-w-[90%] lg:max-w-[30%] mx-auto mb-12 font-poppins leading-relaxed text-center">
        This structured approach ensures your website is not only launched but consistently optimized for growth.
      </p>
    </div>
  );
};

export default GradientBorderContainersMobDental;
