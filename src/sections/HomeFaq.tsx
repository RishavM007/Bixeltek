'use client';

import { useState } from 'react';
import Image from 'next/image';
import faqImage from '@/assets/laptop dentist 2.png'; // Replace with your actual image path

const faqs = [
  {
    question: "How fast can we get started?",
    answer:
      "Onboarding typically begins within 3–5 business days post consultation. After the initial discovery call, we audit your digital presence and tailor a strategy before launching campaigns — all streamlined to get results faster.",
  },
  {
    question: "Can you handle multiple services at once?",
    answer:
      "Absolutely. We’re built to execute SEO, ads, web design, and branding projects in parallel — all under one strategy. Our integrated teams ensure there's zero bottleneck between departments.",
  },
  {
    question: "Do I get full access to reports?",
    answer:
      "Yes, always. You’ll have a custom dashboard with live campaign data, performance trends, keyword rankings, ad spends — all in plain English. Transparency is in our DNA, not a sales gimmick.",
  },
  {
    question: "Do you work internationally?",
    answer:
      "Yes, we work with brands across India, Canada, the US, the UAE, and Saudi Arabia. Our systems are optimized for global reach, localized execution, and multilingual performance campaigns.",
  },

];


export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-14 bg-white">
      <div className="mx-auto max-w-[95%] md:max-w-[85%] px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-12">
          {/* Left: FAQ Content */}
          <div className="w-full lg:w-1/2">
            <h6 className="text-lg font-medium text-indigo-500 mb-2">FAQs</h6>
            <h2 className="text-4xl md:text-5xl font-inter font-bold text-black mb-5">
              Got Questions? We’ve Got Clear Answers.
            </h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="border rounded-2xl border-gray-200 p-7">
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="flex justify-between items-center w-full text-left text-lg font-medium text-black transition duration-500 hover:text-indigo-700"
                  >
                    <span>{faq.question}</span>
                    <svg
                      className={`transition-transform duration-500 ${
                        openIndex === index ? 'rotate-180 text-indigo-500' : 'text-gray-900'
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
                    <p className="text-base text-gray-700 mt-2 pt-3 transition-all duration-300">
                      {faq.answer}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right: Image */}
          <div className="w-full lg:w-1/2">
            <div className="w-full h-full">
              <Image
                src={faqImage}
                alt="Frequently Asked Questions"
                className="rounded-lg object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
