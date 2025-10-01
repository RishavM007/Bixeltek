'use client';

import { useState } from 'react';

const faqs = [
  {
    question: "How fast can I get results with Google Ads?",
    answer:
      "Google Ads delivers instant visibility. Businesses often start seeing leads within the first few days of launching well-optimized campaigns.",
  },
  {
    question: "What budget should I set for Google Ads in Vancouver?",
    answer:
      "Budgets vary by competition and industry, but we’ll build a strategy designed to maximize ROI — not just spend your ad dollars.",
  },
  {
    question: "Do you only manage Google Ads for Vancouver businesses?",
    answer:
      "No. While Vancouver is a focus area, we manage Google Ads campaigns for businesses across Greater Vancouver and throughout Canada.",
  },
  {
    question: "How does Bixeltek make my ads more effective?",
    answer:
      "We combine keyword targeting, ad copywriting, landing page optimization, and advanced conversion tracking — all focused on generating leads, not just clicks.",
  },
  {
    question: "What types of Google Ads campaigns do you manage?",
    answer:
      "We handle Search, Display, Shopping, Performance Max, YouTube, Local Service Ads, Discovery, and Remarketing to meet every business goal.",
  },
  {
    question: "Will you set up tracking and reporting for my campaigns?",
    answer:
      "Yes. We install full conversion tracking for calls, forms, and sales so you always see the real ROI from your campaigns.",
  },
  {
    question: "Can Google Ads work for small businesses in Vancouver?",
    answer:
      "Absolutely. With the right targeting and smart budget management, even small businesses can generate consistent leads and growth from Google Ads.",
  },
  {
    question: "How is working with a Google Partner Agency like Bixeltek different?",
    answer:
      "As a Google Partner Certified agency, we follow best practices, have proven experience managing large-scale campaigns, and receive direct support from Google.",
  },
];

export default function VancouverAdsFaqs() {
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
              Frequently Asked Questions
            </h6>
            <h2 className="text-4xl text-center md:text-6xl font-inter font-bold text-white mb-6">
              Got Questions About <br /> <span className='text-blue-500'>Google Ads in Vancouver?</span>
            </h2>
            <p className="text-center text-gray-400 max-w-2xl mx-auto mb-10">
              Here are answers to the most common questions Vancouver businesses ask about Google Ads.
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
