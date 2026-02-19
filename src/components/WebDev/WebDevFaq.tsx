'use client';

import { useState } from 'react';
import Image from 'next/image';
import faqImage from '@/assets/google-ads-black-google-ads-shutterstock_1169319226-800x533.jpg'; // Replace with your actual image path

const faqs = [
  {
    question: "How long does it take to design a website?",
    answer:
      "Most business websites take 4–6 weeks, depending on complexity and content readiness.",
  },
  {
    question: "Do you only build WordPress websites?",
    answer:
      "No. We offer both custom-coded builds and WordPress CMS websites, depending on your goals.",
  },
  {
    question: "Can you redesign my existing website?",
    answer:
      "Yes. We specialize in website redesigns that improve aesthetics, performance, and conversions.",
  },
  {
    question: "Do you develop e-commerce websites?",
    answer:
      "Yes. We build scalable e-commerce platforms using Shopify, WooCommerce, or custom solutions with Next.js.",
  },
  {
    question: "Will my website be mobile-friendly?",
    answer:
      "Absolutely. Every site we build is fully responsive and optimized for all devices.",
  },
  {
    question: "Can you integrate third-party tools or APIs?",
    answer:
      "Yes. We can integrate CRMs, payment gateways, booking systems, analytics, and other third-party tools.",
  },
  {
    question: "Do you provide website maintenance?",
    answer:
      "Yes. We offer monthly maintenance plans to ensure your site stays secure, updated, and fast.",
  },
  {
    question: "What technologies do you use?",
    answer:
      "We specialize in modern stacks like Next.js, React, Node.js, and also support WordPress and Shopify.",
  },
  {
    question: "Do you offer SEO-friendly websites?",
    answer:
      "Yes. All websites we build follow SEO best practices including fast load times, clean code, and proper on-page structure.",
  },
  {
    question: "Can you help with hosting and domain setup?",
    answer:
      "Yes. We guide you through domain registration, hosting setup, and connect everything for a smooth launch.",
  },
];


export default function WebDevFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-[black]" >
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
