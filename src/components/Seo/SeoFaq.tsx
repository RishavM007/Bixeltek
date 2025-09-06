'use client';

import { useState } from 'react';

const faqs = [
  {
    question: "How long does SEO take?",
    answer:
      "Most businesses see results in 3–6 months, with growth compounding over time.",
  },
  {
    question: "Will SEO replace ads completely?",
    answer:
      "SEO reduces heavy dependency on ads. Many clients lower ad budgets by 30–50% once SEO kicks in.",
  },
  {
    question: "How do I know it’s working?",
    answer:
      "We track calls, forms, and walk-ins directly linked to Google searches, so you see clear ROI.",
  },
  {
    question: "Can SEO work for my industry?",
    answer:
      "Yes. Whether you’re in healthcare, real estate, SaaS, or retail, SEO strategies are tailored to your industry and audience.",
  },
  {
    question: "Do you follow Google’s guidelines?",
    answer:
      "Absolutely. We use ethical, white-hat SEO practices that align with Google’s algorithms to ensure long-term, safe growth.",
  },
  {
    question: "What happens if Google updates its algorithm?",
    answer:
      "Our team monitors changes closely and adapts strategies to keep your rankings strong, even during major updates.",
  },
  {
    question: "Is SEO a one-time effort?",
    answer:
      "SEO is ongoing. Rankings, competitors, and search trends evolve — continuous optimization ensures you stay ahead.",
  },
];

export default function FAQSectionSEO() {
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
            <h6 className="text-lg text-center font-medium text-blue-400 mb-2">FAQs</h6>
            <h2 className="text-4xl text-center md:text-5xl font-inter font-bold text-white mb-10">
              Still Got Questions?
            </h2>
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
                          ? 'rotate-180 text-blue-400'
                          : 'text-gray-400'
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
