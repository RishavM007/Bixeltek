'use client';

import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

interface LocationFaqProps {
  label?: string;
  heading: React.ReactNode;
  spanText?: string;
  description?: string;
  faqs: FAQItem[];
}

export default function LocationFaqSection({
  label = 'Frequently Asked Questions',
  heading,
  spanText,
  description,
  faqs,
}: LocationFaqProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-14 bg-black">
      <div className="mx-auto lg:max-w-[85%] px-6">
        <div className="flex flex-col gap-12">
          <div className="w-full">
            {/* Label */}
            <h6 className="text-lg text-center font-medium text-blue-400 mb-2">
              {label}
            </h6>

            {heading}

            {description && (
              <p className="text-center text-gray-400 max-w-2xl mx-auto mb-10">
                {description}
              </p>
            )}

            {/* FAQ List */}
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
