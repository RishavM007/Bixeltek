'use client';

import { useState } from 'react';
import Image from 'next/image';
import faqImage from '@/assets/google-ads-black-google-ads-shutterstock_1169319226-800x533.jpg'; // Replace with your actual image path

const faqs = [
  {
    question: "What is the minimum fee for digital marketing in Hyderabad?",
    answer:
      "Most businesses invest ₹25,000–₹50,000/month depending on the scope of services and campaign objectives.",
  },
  {
    question: "Is it worth hiring an agency in Hyderabad?",
    answer:
      "Yes — agencies save you time, reduce wasted spend, and deliver measurable ROI faster than freelancers or DIY efforts.",
  },
  {
    question: "How much does digital marketing cost in Hyderabad?",
    answer:
      "Costs vary widely. SMBs typically invest anywhere from ₹25,000 to ₹2,00,000+ per month depending on goals, channels, and campaign complexity.",
  },
  {
    question: "Is digital marketing costly?",
    answer:
      "It’s not just a cost — it’s an investment that generates leads, conversions, and long-term business growth.",
  },
  {
    question: "Should I hire a freelancer or an agency?",
    answer:
      "Freelancers usually cover one specific skill. Agencies provide a full team, proven processes, and accountability for end-to-end results.",
  },
  {
    question: "Google Ads vs Instagram Ads — which works better?",
    answer:
      "Google Ads capture high-intent customers actively searching for your services, while Instagram/Facebook Ads build awareness and retarget potential leads. The best results usually come from combining both channels strategically.",
  },
];


export default function HydFAQSection8() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-14 bg-[black]" >
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
