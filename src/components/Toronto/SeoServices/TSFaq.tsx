'use client';

import { useState } from 'react';

const faqs = [
  {
    question: "How long before SEO shows results?",
    answer:
      "Most businesses see improvements within 3–6 months, depending on competition.",
  },
  {
    question: "How is SEO different from paid ads?",
    answer:
      "Ads stop when you stop paying. SEO builds sustainable traffic that compounds over time.",
  },
  {
    question: "What is AI SEO?",
    answer:
      "AI SEO ensures your brand is recognized and recommended by AI-driven platforms like Google Gemini and ChatGPT.",
  },
  {
    question: "Do you create SEO content?",
    answer:
      "Yes — we build optimized blogs, service pages, and local landing pages.",
  },
  {
    question: "Will I get reports?",
    answer:
      "Yes. Our reports track rankings, traffic, leads, and ROI.",
  },
];

export default function TSFaq() {
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
            <h2 className="text-4xl text-center md:text-5xl font-inter font-bold text-white mb-6">
              Still Got Questions?
            </h2>
            <p className="text-center text-gray-400 max-w-2xl mx-auto mb-10">
              Here are answers to the most common questions Canadian businesses ask us about SEO.
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
