'use client';
import React from "react";
import { motion } from "framer-motion";

const steps = [
  {
    title: "Discovery",
    subtitle: "Understanding Your Vision",
    description:
      "We start by deep diving into your business goals, target audience, and market environment. This foundational understanding helps us tailor strategies perfectly aligned with your needs.",
  },
  {
    title: "Strategy Development",
    subtitle: "Crafting Your Blueprint",
    description:
      "Leveraging our industry expertise, we create a comprehensive marketing strategy that encompasses paid advertising, graphic design, and continuous optimization to ensure maximum impact.",
  },
  {
    title: "Implementation",
    subtitle: "Execution with Precision",
    description:
      "Our team of experts rolls out your campaigns with meticulous attention to detail, ensuring every ad and design element works cohesively to meet your marketing objectives.",
  },
  {
    title: "Optimization",
    subtitle: "Refining for Maximum ROI",
    description:
      "We analyze campaign data and make informed adjustments to maximize performance, ensuring your investment delivers the highest possible returns.",
  },
  {
    title: "Growth & Scaling",
    subtitle: "Expanding Your Reach",
    description:
      "Once the foundation is strong, we focus on scaling your campaigns to new markets, amplifying brand awareness, and accelerating long-term growth.",
  },
];

export default function TimelineSection() {
  return (
    <section className="bg-white text-black md:pt-16 md:pb-10 px-6">
      <div className="max-w-6xl mx-auto justify-center items-center flex flex-col">
        <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center">
          Our Approach to Your <span className="text-purple-500">Success</span>
        </h2>

        <div className="relative">
          {/* Center timeline line */}
          <div className="hidden md:flex absolute top-0 left-1/2 transform -translate-x-1/2 w-[2px] bg-gray-700 h-full"></div>

          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-16"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.3, ease: "easeOut" }}
            >

              {index % 2 === 0 ? (
                <>
                  {/* Desktop Title */}
                  <div className="relative  text-right pr-8 hidden md:block">
                    <div className="absolute top-1/2 right-[-32px] transform -translate-y-1/2 w-8 h-8 bg-purple-500 rounded-full text-white flex items-center justify-center font-bold shadow-lg">
                      {index + 1}
                    </div>
                    <h3 className="text-4xl font-inter font-bold pr-4">{step.title}</h3>
                  </div>

                  {/* Desktop Subtitle + Description */}
                  <div className="relative text-left shadow-lg border border-black/20 ml-10 rounded-2xl px-8 py-4 hidden md:block
  before:content-[''] before:absolute before:top-1/2 before:-translate-y-1/2 before:-left-[15px]
  before:border-y-transparent before:border-y-[14px] before:border-r-[15px] before:border-r-black/20
  after:content-[''] after:absolute after:top-1/2 after:-translate-y-1/2 after:-left-[13px]
  after:border-y-transparent after:border-y-[12px] after:border-r-[13px] after:border-r-white">

                    <h4 className="text-lg font-semibold">{step.subtitle}</h4>
                    <p className="text-gray-700 mt-2 font-poppins text-sm">{step.description}</p>
                  </div>



                  {/* Mobile version (centered and stacked) */}
                  <div className="flex flex-col items-center text-center px-4 rounded-2xl py-6 border md:hidden space-y-4">
                    <div className="w-8 h-8 bg-purple-500 rounded-full text-white flex items-center justify-center font-bold shadow-lg">
                      {index + 1}
                    </div>
                    <h3 className="text-3xl font-inter font-bold">{step.title}</h3>
                    <h4 className="text-lg font-semibold">{step.subtitle}</h4>
                    <p className="text-gray-700 font-poppins text-sm">{step.description}</p>
                  </div>
                </>
              ) : (
                <>
                  {/* Desktop Subtitle + Description */}
                  <div className="relative shadow-lg text-right mr-10 rounded-2xl px-8 py-4 border border-black/10 hidden md:flex md:flex-col
  before:content-[''] before:absolute before:top-1/2 before:-translate-y-1/2 before:-right-[15px]
  before:border-y-transparent before:border-y-[14px] before:border-l-[15px] before:border-l-black/10
  after:content-[''] after:absolute after:top-1/2 after:-translate-y-1/2 after:-right-[13px]
  after:border-y-transparent after:border-y-[12px] after:border-l-[13px] after:border-l-white">

                    <h4 className="text-lg font-semibold">{step.subtitle}</h4>
                    <p className="text-gray-700 mt-2 font-poppins text-sm">{step.description}</p>
                  </div>


                  {/* Desktop Title */}
                  <div className="relative hidden md:block">
                    <div className="absolute top-1/2 left-[-32px] transform -translate-y-1/2 w-8 h-8 bg-yellow-500 rounded-full text-white flex items-center justify-center font-bold shadow-lg">
                      {index + 1}
                    </div>
                    <h3 className="text-4xl font-inter font-bold pl-10">{step.title}</h3>
                  </div>

                  {/* Mobile version (centered and stacked) */}
                  <div className="flex flex-col items-center text-center px-4 rounded-2xl py-6 border border-black/10 md:hidden space-y-4">
                    <div className="w-8 h-8 bg-yellow-500 rounded-full text-white flex items-center justify-center font-bold shadow-lg">
                      {index + 1}
                    </div>
                    <h3 className="text-3xl font-inter font-bold">{step.title}</h3>
                    <h4 className="text-lg font-semibold">{step.subtitle}</h4>
                    <p className="text-gray-700 font-poppins text-sm">{step.description}</p>
                  </div>
                </>
              )}

            </motion.div>
          ))}
        </div>
        <a href="/contact-us" className="box-border md:mt-10 relative z-30 inline-flex items-center justify-center w-auto px-8 py-3 overflow-hidden font-bold text-white transition-all duration-300 bg-purple-600 rounded-full cursor-pointer group ring-offset-2 ring-1 ring-purple-300 ring-offset-purple-200 hover:ring-offset-purple-500 ease focus:outline-none">
          <span className="absolute bottom-0 right-0 w-8 h-20 -mb-8 -mr-5 transition-all duration-300 ease-out transform rotate-45 translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
          <span className="absolute top-0 left-0 w-20 h-8 -mt-1 -ml-12 transition-all duration-300 ease-out transform -rotate-45 -translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
          <span className="relative z-20 flex items-center text-sm">
            <svg className="relative w-5 h-5 mr-2 capitalize text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
            Start your success story with us
          </span>
        </a>

      </div>

    </section>
  );
}
