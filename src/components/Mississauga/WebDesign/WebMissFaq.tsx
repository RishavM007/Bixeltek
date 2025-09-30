"use client";

import { useState } from "react";

const faqs = [
  {
    question: "How long does it take to build a website?",
    answer: "Typically 4–8 weeks, depending on the complexity of your project and the features you require.",
  },
  {
    question: "Will my website be SEO-friendly?",
    answer: "Yes — every site we build is SEO-optimized with clean code, fast load times, and schema setup to help you rank on search engines.",
  },
  {
    question: "Do I own my website after it’s launched?",
    answer: "Absolutely. You’ll have full ownership and access to your website, including all code, content, and assets.",
  },
  {
    question: "Do you provide support after launch?",
    answer: "Yes — we offer ongoing support, maintenance, and upgrades to ensure your site runs smoothly and stays up-to-date.",
  },
];

export default function WebDesignFaqs() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-14 bg-black">
      <div className="mx-auto max-w-[95%] md:max-w-[85%] px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-12">
          {/* FAQ Header */}
          <div className="w-full text-center">
            <h6 className="text-lg font-medium text-blue-400 mb-2">
              Web Design FAQs
            </h6>
            <h2 className="text-4xl md:text-6xl font-inter font-bold text-white mb-6">
              Web Design FAQs for{" "}
              <span className="text-blue-500">Mississauga Businesses</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto mb-10">
              Common questions Mississauga businesses ask about website development, SEO, ownership, and support.
            </p>
          </div>

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
                      openIndex === index ? "rotate-180 text-blue-400" : "text-gray-400"
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
    </section>
  );
}
