"use client";

import { useState } from "react";

const faqs = [
  {
    question: "What is full-system digital marketing?",
    answer:
      "Full-system digital marketing integrates Ads, SEO, Social Media, Email, and Web Design into a single strategy to generate predictable growth.",
  },
  {
    question: "How fast can I see results?",
    answer:
      "Paid campaigns can generate leads within days, while SEO and organic strategies take 3–6 months to build sustainable, measurable growth.",
  },
  {
    question: "Do you provide a complete strategy?",
    answer:
      "Yes! We audit your business, create a full digital marketing system, and implement it across all channels for maximum ROI.",
  },
  {
    question: "Can you manage multiple services together?",
    answer:
      "Absolutely. We integrate Ads, SEO, Social Media, Email, and Web Design to ensure consistent branding and measurable results across all platforms.",
  },
  {
    question: "Do small businesses benefit from this system?",
    answer:
      "Yes! Our systems are scalable and designed for startups, SMBs, and large enterprises alike, tailored to their goals and budgets.",
  },
  {
    question: "Will I get reporting and analytics?",
    answer:
      "Every system comes with clear dashboards and metrics so you can track performance, leads, and ROI in real-time across all channels.",
  },
  {
    question: "Is this service limited to one location?",
    answer:
      "No — we work with clients nationally and internationally, delivering growth regardless of location while optimizing campaigns locally where needed.",
  },
  {
    question: "What types of businesses do you work with?",
    answer:
      "We’ve helped e-commerce, local services, B2B, and professional service businesses — any business that wants predictable and measurable growth.",
  },
];

export default function FullSystemFAQ() {
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
              Full-System Digital Marketing FAQs for <span className="text-blue-500"><br /> Growing Businesses</span>
            </h2>
            <p className="text-center text-gray-400 max-w-2xl mx-auto mb-10">
              Answers to common questions about our complete digital marketing systems, combining Ads, SEO, Social Media, Web Design, and more for measurable growth.
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
