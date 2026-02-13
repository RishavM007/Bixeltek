"use client";

import { useState } from "react";

const technicalFaqs = [
  {
    question: "What is Technical SEO and why does it matter?",
    answer:
      "Technical SEO refers to the backend optimisations of your website (crawlability, indexation, speed, schema, site architecture) that allow search engines to find, understand, and rank your content. Without it, even the best content may never perform.",
  },
  {
    question:
      "How long does it take for search engines to index my site after technical fixes?",
    answer:
      "There’s no fixed timeline — some changes can reflect in a few days, others may take weeks or months. Google’s own guidance says the time varies based on site size, update frequency and crawl budget.",
  },
  {
    question: "What is a crawl budget and how does it impact my site performance?",
    answer:
      "A crawl budget is the number of pages search bots will crawl within a given timeframe. If bots waste clicks on irrelevant pages (duplicate content, thin pages, redirect loops), they may not crawl your important pages, delaying or weakening indexing and visibility.",
  },
  {
    question: "What are Core Web Vitals and why should I care?",
    answer:
      "Core Web Vitals — LCP (Largest Contentful Paint), CLS (Cumulative Layout Shift), INP (Interaction to Next Paint) — measure user experience speed and stability. These metrics now directly influence ranking and ad performance because they reflect how users actually perceive your site.",
  },
  {
    question: "Can schema / structured data really help my SEO?",
    answer:
      "Yes — structured data (JSON-LD, schema.org markup) gives search engines context about your pages: products, services, FAQs, breadcrumbs, local business info. Proper schema helps you be eligible for rich results, improved visibility, and better alignment with AI-powered search.",
  },
  {
    question: "How do I know if my site architecture or internal linking is hurting my SEO?",
    answer:
      "Look for signs such as key pages being more than 3-4 clicks from the homepage, many orphan pages (no internal links), redirect chains, or duplicate content. A log-analysis + link-mapping audit will highlight these issues.",
  },
  {
    question: "What issues does multilingual or international SEO introduce?",
    answer:
      "Challenges include duplicate content across languages, incorrect hreflang tags, geo-targeting errors, different currency or tax logic, and regional hosting latency. Poor handling of these can reduce visibility in regional search indexes.",
  },
  {
    question: "Will fixing technical SEO automatically increase traffic?",
    answer:
      "Not automatically — technical fixes remove barriers so your content and marketing can perform. But without fresh content, backlinks and ongoing optimisation, gains could be limited. Think of technical SEO as foundation, not the entire building.",
  },
  {
    question: "How often should I audit my site’s technical health?",
    answer:
      "For most businesses: major audit annually, smaller check-ups quarterly. Rapid-growth sites or those undergoing structural changes may benefit from monthly technical checks. A good audit covers crawl logs, speed, schema, indexation and error rates.",
  },
  {
    question:
      "Why did my organic traffic drop despite good content? Could it be a technical issue?",
    answer:
      "Yes — organic drops often stem from technical issues: crawl budget wasted, major redirect errors, core web vital regressions, indexation blocks or algorithm updates affecting your architecture. Technical SEO audits can help diagnose these.",
  },
];

export default function TechnicalSeoFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-14 bg-black" id="technical-seo-faq">
      <div className="mx-auto lg:max-w-[85%] px-6 lg:px-8">
        <div className="flex flex-col gap-12">
          <div className="w-full">
            <h6 className="text-lg text-center font-medium text-blue-400 mb-2">
              FAQs
            </h6>
            <h2 className="text-4xl text-center md:text-5xl font-inter font-bold text-white mb-10">
              Frequently Asked Questions — Technical SEO
            </h2>

            <div className="space-y-6">
              {technicalFaqs.map((faq, index) => (
                <div
                  key={index}
                  className="w-full border border-gray-700 rounded-2xl bg-black p-7 shadow-sm transition duration-300 hover:border-blue-500"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="flex justify-between items-center w-full text-left text-lg font-medium text-gray-100 transition duration-500 hover:text-blue-500"
                  >
                    <span>{faq.question}</span>
                    <svg
                      className={`transition-transform duration-500 ${
                        openIndex === index
                          ? "rotate-180 text-blue-500"
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
                    <p className="text-base text-gray-200 mt-3 pt-3 leading-relaxed transition-all duration-300">
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
