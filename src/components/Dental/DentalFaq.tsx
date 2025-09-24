"use client";

import { useState } from "react";

const faqs = [
  {
    question: "How fast will my dental clinic see results with digital marketing?",
    answer:
      "With Google Ads, many clinics see patient calls within the first week. SEO typically takes 2–3 months to gain traction, but delivers long-term, compounding results.",
  },
  {
    question: "How much should a dental clinic budget for marketing each month?",
    answer:
      "Most clinics invest 5–10% of monthly revenue into marketing. Our clients often recover that investment quickly, as strategies generate measurable ROI and consistent patient calls.",
  },
  {
    question: "What makes Bixeltek different from other marketing agencies?",
    answer:
      "We specialize exclusively in dental clinics across the USA & Canada. We understand the treatments, patient journey, and local competition—so every strategy is built to convert into real appointments.",
  },
  {
    question: "Can you guarantee a specific number of new patients?",
    answer:
      "No ethical agency can promise exact numbers. What we can say is that clinics working with us consistently generate 120+ patient calls every month, with some scaling revenue 10x in just 3 months.",
  },
  {
    question: "Do you offer website design along with marketing?",
    answer:
      "Yes. We design conversion-optimized websites that act as your 24/7 front desk. The goal isn’t just to look good—it’s to drive phone calls and appointment requests.",
  },
  {
    question: "How do you track marketing performance?",
    answer:
      "We use call tracking, dashboards, and transparent reporting. You’ll know exactly how many calls, leads, and patients are coming from your campaigns.",
  },
  {
    question: "Is Google Ads or SEO better for dentists?",
    answer:
      "Both are powerful, but they serve different roles:\nGoogle Ads = instant patient calls.\n\nSEO = sustainable long-term growth.\n\nThe best results come from combining both.",
  },
  {
    question: "Do you work with multiple clinics in the same city?",
    answer:
      "No. We maintain city-level exclusivity so you’re not competing with another Bixeltek client in your area.",
  },
  {
    question: "What dental services can you help promote?",
    answer:
      "We run campaigns for emergency dentistry, veneers, Invisalign, implants, cosmetic dentistry, cleanings, and more. Each campaign is tailored to the treatments that drive your revenue.",
  },
  {
    question: "How do I get started with Bixeltek?",
    answer:
      "It begins with a free growth consultation. We’ll audit your current marketing, identify missed opportunities, and create a custom plan to increase calls and bookings.",
  },
];

export default function DentalFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-14 bg-gray-50">
      <div className="mx-auto max-w-[95%] md:max-w-[85%] px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-12">
          {/* FAQ Content */}
          <div className="w-full">
            <h6 className="text-lg text-center font-medium text-blue-600 mb-2">
              FAQs
            </h6>
            <h2 className="text-4xl text-center md:text-5xl font-inter font-bold text-gray-900 mb-10">
              Still Got Questions?
            </h2>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="w-full border border-gray-200 rounded-2xl bg-white p-7 shadow-sm"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="flex justify-between items-center w-full text-left text-lg font-medium text-gray-800 transition duration-500 hover:text-blue-600"
                  >
                    <span>{faq.question}</span>
                    <svg
                      className={`transition-transform duration-500 ${
                        openIndex === index
                          ? "rotate-180 text-blue-600"
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
                    <p className="text-base text-gray-600 mt-2 pt-3 transition-all duration-300">
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
