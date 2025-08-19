'use client';

import { useState } from 'react';
import Image from 'next/image';
import faqImage from '@/assets/google-ads-black-google-ads-shutterstock_1169319226-800x533.jpg'; // Replace with your actual image path

const faqs = [
  {
    question: "How quickly can a Google Ads campaign go live?",
    answer:
      "Once we finalize your strategy and ad creatives, most campaigns can be live within 3–5 business days. Google usually approves ads within 24 hours, so you’ll start seeing traffic almost immediately.",
  },
  {
    question: "What budget do I need to run Google Ads?",
    answer:
      "Budgets are super flexible — we’ve managed accounts from ₹10,000/month to ₹10 lakh+. The key is aligning spend with your goals, competition, and industry benchmarks. We’ll recommend a smart starting point and scale based on performance.",
  },
  {
    question: "Will I get detailed reports on performance?",
    answer:
      "Absolutely. You’ll receive transparent reports with live access to clicks, conversions, cost-per-click (CPC), and ROI metrics. No black-box reporting — you’ll know exactly where every rupee is going.",
  },
  {
    question: "Do you optimize campaigns after launch?",
    answer:
      "Yes, optimization is continuous. We refine keywords, ad copy, targeting, and bidding strategies weekly (often daily for competitive niches) to make sure you’re squeezing maximum ROI out of your budget.",
  },
  {
    question: "Can you run campaigns internationally?",
    answer:
      "Definitely. We run geo-targeted campaigns for multiple regions including the US, UK, UAE, and India. Whether you want local leads or global reach, we tailor targeting and messaging accordingly.",
  },
];

export default function FAQSection8() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-14 bg-[#131313]" >
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
