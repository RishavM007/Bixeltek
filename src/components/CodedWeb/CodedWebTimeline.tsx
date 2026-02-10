"use client";
import React from "react";

const containers = [
  {
    number: "01",
    title: "Technical Discovery & Audit",
    text: "We benchmark your website’s speed, crawl structure, conversion funnels, and data flow. We analyze every metric from Core Web Vitals to user engagement to identify opportunities and pain points, ensuring a solid foundation for development and marketing alignment.",
    gradient: "from-blue-500 via-blue-400 to-transparent",
    color: "text-blue-500",
  },
  {
    number: "02",
    title: "Architecture & Design System",
    text: "We define the information hierarchy and UX wireframes around optimized conversion paths. Every component is designed for scalability, accessibility, and visual consistency, ensuring your website functions as a high-performing product rather than just a page.",
    gradient: "from-green-500 via-teal-400 to-transparent",
    color: "text-teal-500",
  },
  {
    number: "03",
    title: "Development & Integration",
    text: "Our front-end is built with React/Next.js and back-end with Node.js or Laravel, fully integrated with marketing and analytics pipelines. Every line of code is optimized for performance, SEO, and cross-platform consistency to deliver a smooth user experience.",
    gradient: "from-yellow-400 via-yellow-300 to-transparent",
    color: "text-yellow-500",
  },
  {
    number: "04",
    title: "Headless or Hybrid CMS Integration",
    text: "We integrate APIs, custom content models, and admin dashboards tailored for non-technical teams. Your content operations are streamlined for flexibility and control while ensuring full compatibility with your design system and automation workflows.",
    gradient: "from-pink-500 via-purple-400 to-transparent",
    color: "text-purple-500",
  },
  {
    number: "05",
    title: "Optimization & QA",
    text: "Automated Lighthouse CI, Core Web Vitals, and accessibility audits ensure your website meets modern web standards. We perform rigorous cross-browser and device testing, fine-tune performance, and optimize every interaction to exceed user expectations.",
    gradient: "from-indigo-500 via-indigo-400 to-transparent",
    color: "text-indigo-500",
  },
  {
    number: "06",
    title: "Continuous Improvement",
    text: "Your site evolves through real user metrics, heatmaps, A/B testing, and conversion refinement. We continually analyze traffic, engagement, and sales data to improve UX, performance, and conversion outcomes, turning your website into a living, high-performing digital product.",
    gradient: "from-red-500 via-transparent to-transparent",
    color: "text-red-500",
  },
];

const WebsiteProcessTimeline = () => {
  return (
    <div className="min-h-screen relative bg-black py-12 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl md:text-6xl text-white text-center max-w-4xl mx-auto font-semibold mb-6">
        How We Build <span className="text-blue-500">Websites That Perform Like Products</span>
      </h2>
      <p className="text-gray-300 max-w-2xl mx-auto mb-12 font-poppins leading-relaxed text-center">
        From discovery to continuous improvement, our process ensures your website evolves into a high-performance ecosystem that drives traffic, conversions, and business growth.
      </p>

      {/* MOBILE VERSION */}
      <div className="space-y-10 md:hidden">
        {containers.map((item, idx) => (
          <div key={idx} className="flex flex-col p-6 items-start">
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
          let positionClasses = "";
          if (idx % 4 === 0) positionClasses = "-top-20 right-10";
          else if (idx % 4 === 1) positionClasses = "-top-20 left-1/3 -translate-x-1/4";
          else if (idx % 4 === 2) positionClasses = "-top-20 left-10";
          else if (idx % 4 === 3) positionClasses = "-top-20 left-1/3 -translate-x-1/4";

          return (
            <div key={idx} className="relative z-0">
              {/* Gradient border */}
              <div
                className={`absolute -inset-1 rounded-[20px] ${isEven ? "bg-gradient-to-r" : "bg-gradient-to-l"} ${item.gradient} z-0`}
              ></div>

              <div className="relative flex flex-col justify-between items-center z-10 bg-black rounded-[20px] p-8 h-[320px]">
                {/* Floating content box */}
                <div
                  className={`absolute flex items-center gap-5 flex-row border border-white/50 bg-black w-[85%] lg:max-w-3xl rounded-2xl p-10 z-10 ${positionClasses}`}
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
                    <a href={"mailto:zee@bixeltek.com"}>
                      <button className="px-7 py-3 rounded-2xl bg-red-600 text-white font-semibold text-sm shadow-lg hover:bg-red-700 transition">
                        Talk To Our Web Specialist
                      </button>
                    </a>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      <p className="text-gray-300 mt-10 max-w-[90%] lg:max-w-[30%] mx-auto mb-12 font-poppins leading-relaxed text-center">
        This structured approach ensures your website is launched with precision, optimized continuously, and designed to maximize performance and conversions.
      </p>
    </div>
  );
};

export default WebsiteProcessTimeline;
