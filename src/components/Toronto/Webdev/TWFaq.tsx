'use client';

import { useState } from 'react';

const faqs = [
  {
    question: "Why isn’t my current website generating leads?",
    answer:
      "It may lack conversion-focused design, clear calls-to-action, or an SEO foundation to attract qualified traffic.",
  },
  {
    question: "How long does a redesign take?",
    answer:
      "Most website redesigns take 6–8 weeks, depending on scope, complexity, and content migration requirements.",
  },
  {
    question: "Will my new website rank on Google?",
    answer:
      "Yes — all sites are built SEO-friendly, with proper schema, metadata, mobile optimization, and fast loading times.",
  },
  {
    question: "Which platforms do you use?",
    answer:
      "We work with WordPress, Next.js, Shopify, and fully custom-coded solutions tailored to your business needs.",
  },
  {
    question: "Do you provide support post-launch?",
    answer:
      "Absolutely. We offer ongoing maintenance, performance monitoring, security updates, and optimizations after launch.",
  },
  {
    question: "Can you build eCommerce websites?",
    answer:
      "Yes — we develop Shopify, WooCommerce, and custom eCommerce stores with optimized user experience and secure payment gateways.",
  },
  {
    question: "Do you ensure mobile responsiveness?",
    answer:
      "All websites are fully responsive, ensuring smooth performance and usability across mobile phones, tablets, and desktop devices.",
  },
  {
    question: "Will my website load fast?",
    answer:
      "Yes — we optimize images, code, and server configurations to ensure fast loading speeds and improved user engagement.",
  },
  {
    question: "Can you integrate third-party tools?",
    answer:
      "We seamlessly integrate CRMs, booking systems, analytics tools, and payment gateways to streamline your operations.",
  },
  {
    question: "Do you offer custom web design?",
    answer:
      "Yes — we create unique, brand-aligned designs that enhance credibility, improve conversions, and reflect your business vision.",
  },
];

export default function TWFaq() {
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
              Questions We Hear From Toronto Businesses
            </h2>
            <p className="text-center text-gray-400 max-w-2xl mx-auto mb-10">
              Here are answers to the most common questions Toronto businesses ask us about web design, development, and online growth.
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
