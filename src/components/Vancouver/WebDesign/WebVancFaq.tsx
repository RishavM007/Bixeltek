"use client";

import { useState } from "react";

const faqs = [
  {
    question: "How long does it take to build a website?",
    answer:
      "Typically 3–6 weeks, depending on the project scope and complexity of design and functionality.",
  },
  {
    question: "Do you create landing pages for campaigns and promotions?",
    answer:
      "Yes — we specialize in conversion-optimized landing pages for Google Ads, Meta campaigns, and email funnels.",
  },
  {
    question: "Are Bixeltek websites SEO-friendly?",
    answer:
      "Absolutely. All sites are built following best practices for structure, speed, and technical SEO.",
  },
  {
    question: "Can you redesign my existing website?",
    answer:
      "Yes — we can revamp your website’s design, performance, and user experience while keeping your brand identity intact.",
  },
];

export default function VancouverWebDesignFaqs() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-14 bg-black">
      <div className="mx-auto max-w-[95%] md:max-w-[85%] px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-12">
          <div className="w-full">
            <h6 className="text-lg text-center font-medium text-blue-400 mb-2">
              Web Design FAQs
            </h6>
            <h2 className="text-4xl text-center md:text-6xl font-inter font-bold text-white mb-6">
              Web Design Questions for <br />
              <span className="text-blue-500">Vancouver Businesses</span>
            </h2>
            <p className="text-center text-gray-400 max-w-2xl mx-auto mb-10">
              Answers to the most common questions Vancouver businesses have about web design and development.
            </p>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="w-full border-2 border-black rounded-2xl bg-[#1a1a1a] p-7"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="flex justify-between items-center w-full text-left text-lg font-medium text-white transition duration-500 hover:text-blue-400"
                  >
                    <span>{faq.question}</span>
                    <svg
                      className={`transition-transform duration-500 ${
                        openIndex === index
                          ? "rotate-180 text-blue-400"
                          : "text-gray-400"
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
                    <p className="text-base text-gray-300 mt-2 pt-3 transition-all duration-300">
                      {faq.answer}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
