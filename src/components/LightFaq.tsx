"use client";
import { useState } from "react";

interface FAQ {
  question: string;
  answer: string;
}

interface FaqSectionProps {
  faqs: FAQ[];
}

export default function LightFaqSection({ faqs }: FaqSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
          <div className="w-full lg:w-full">
            <div className="lg:max-w-full">
              <h6 className="text-lg text-center font-medium text-indigo-700 mb-2">FAQs</h6>
              <h2 className="text-5xl text-center font-sofiasanscondensed font-bold text-gray-800 mb-5">
                Looking for answers?
              </h2>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div key={index} className="border-b border-gray-200 pb-4">
                    <button
                      onClick={() => toggleFAQ(index)}
                      className="flex justify-between items-center w-full text-base md:text-xl pt-4 pb-4 text-black font-normal transition duration-500 hover:text-indigo-700"
                    >
                      {faq.question}
                      <svg
                        className={`transition-transform duration-500 ${
                          openIndex === index ? "rotate-180 text-indigo-800" : "text-gray-800"
                        }`}
                        width="22"
                        height="22"
                        viewBox="0 0 22 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M16.5 8.25L12.4142 12.3358C11.7475 13.0025 11.4142 13.3358 11 13.3358C10.5858 13.3358 10.2525 13.0025 9.58579 12.3358L5.5 8.25"
                          stroke="currentColor"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                    {openIndex === index && (
                      <p className=" text-sm md:text-base text-gray-950 mt-2 pt-5 pb-5 transition-all duration-300">
                        {faq.answer}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
