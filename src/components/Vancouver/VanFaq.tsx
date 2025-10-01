'use client';

import { useState } from 'react';

const faqs = [
  {
    question: "How long does it take to see results from digital marketing?",
    answer:
      "Google Ads can generate leads within days, while SEO typically takes 3–6 months for sustainable results depending on your industry and competition.",
  },
  {
    question: "How much should I budget for digital marketing in Vancouver?",
    answer:
      "Budgets vary by business type, competition, and goals. We assess your industry trends and recommend a strategy that maximizes ROI without overspending.",
  },
  {
    question: "Do you only serve businesses in Vancouver?",
    answer:
      "No. While Vancouver is a focus market, Bixeltek works with clients across Greater Vancouver and throughout Canada.",
  },
  {
    question: "Why should I choose Bixeltek over other Vancouver agencies?",
    answer:
      "We are Google Partner Certified, ROI-driven, and offer integrated SEO, Google Ads, web design, and social media strategies backed by transparent reporting.",
  },
  {
    question: "What industries do you specialize in?",
    answer:
      "We help a wide range of industries including healthcare, home services, retail, education, professional services, and B2B/SaaS businesses.",
  },
  {
    question: "Can you redesign or build a new website for my business?",
    answer:
      "Yes, we create SEO-friendly, mobile-first websites designed to increase conversions and build a strong digital presence.",
  },
  {
    question: "How do you track and measure ROI?",
    answer:
      "We set up complete analytics, from conversion tracking in Google Ads to SEO keyword visibility, so you always know your exact ROI.",
  },
  {
    question: "Do you offer both organic and paid social media marketing?",
    answer:
      "Yes, we manage both organic content and paid campaigns on platforms like Facebook, Instagram, and LinkedIn to build engagement and generate leads.",
  },
];

export default function VancouverDMFaqs() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-14 bg-black">
      <div className="mx-auto max-w-[95%] md:max-w-[85%] px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-12">
          {/* FAQ Content */}
          <div className="w-full">
            <h6 className="text-lg text-center font-medium text-blue-400 mb-2">
              Frequently Asked Questions
            </h6>
            <h2 className="text-4xl text-center md:text-6xl font-inter font-bold text-white mb-6">
              Got Questions About <br /> <span className='text-blue-500'>Digital Marketing in Vancouver?</span>
            </h2>
            <p className="text-center text-gray-400 max-w-2xl mx-auto mb-10">
              Here are answers to the most common questions Vancouver businesses ask us about digital marketing.
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
