"use client";

import { useState } from "react";

const faqs = [
  {
    question: "What is the difference between On-Page and Technical SEO?",
    answer:
      "On-Page SEO optimizes what is visible to users — content, headings, metadata, schema — while Technical SEO optimizes how search engines access and interpret that content. Think of On-Page as your 'language' layer and Technical SEO as your 'infrastructure.' When both are aligned, Google reads your site efficiently and understands your expertise accurately.",
  },
  {
    question: "How does Google determine if my content is 'helpful'?",
    answer:
      "Google’s Helpful Content System measures depth, relevance, and experience. Pages that fully answer search intent, use first-hand examples, and display clear authorship perform better than thin or generic text. On-Page SEO ensures your pages prove expertise through structure, schema, and completeness — all signals of E-E-A-T.",
  },
  {
    question: "Do keywords still matter for On-Page SEO in 2025?",
    answer:
      "Yes, but only as contextual entities. Search engines now interpret meaning using NLP — not simple keyword counts. We optimize content around entities, related phrases, and search intent clusters rather than repeating one term. The result is broader visibility across multiple long-tail queries.",
  },
  {
    question: "How can I optimize my titles and headings for better rankings?",
    answer:
      "Each page should have: One H1 that mirrors the main search intent, H2/H3 subtopics that expand naturally from the main theme, a concise title tag (≤ 60 chars) with your primary entity and action word, and a meta description that earns clicks, not just describes content. Proper hierarchy helps both users and crawlers follow your logic.",
  },
  {
    question: "What is entity SEO and why is it important?",
    answer:
      "Entity SEO focuses on recognized concepts — people, brands, topics — instead of isolated keywords. By linking entities internally and externally (e.g., Wikipedia, LinkedIn, schema IDs), Google can connect your content to verified knowledge graphs. This strengthens topical authority and prepares your site for AI Overviews and voice search inclusion.",
  },
  {
    question: "How do internal links affect On-Page SEO?",
    answer:
      "Internal links tell Google which pages are most important and how topics relate. Using descriptive, contextual anchors ('See our Technical SEO framework') distributes authority efficiently and reduces crawl waste. Sites with strong internal topology index faster and retain rank stability after algorithm updates.",
  },
  {
    question: "Should I add FAQ schema to every page?",
    answer:
      "No — only where FAQs provide genuine value. Excessive or irrelevant FAQ schema can dilute authority. We add it selectively to service, educational, or product pages to secure additional SERP real estate through expandable FAQ rich results.",
  },
  {
    question: "How do I measure On-Page SEO performance?",
    answer:
      "Monitor: Click-through rate (CTR) from Google Search Console, average scroll depth and time-on-page, ranking movement of target queries, schema and index coverage errors, and conversion rate on optimized pages. Performance improves when technical signals, semantics, and UX metrics all align.",
  },
  {
    question: "How often should I update content for On-Page SEO?",
    answer:
      "Review core pages every quarter. Update when search trends, products, or data change. Regular refreshes trigger recrawls, reinforcing freshness signals — a known ranking factor in competitive industries.",
  },
  {
    question: "Can On-Page SEO alone help me rank without backlinks?",
    answer:
      "In low-competition niches, yes; in mature markets, On-Page SEO provides the foundation but backlinks remain an external authority signal. Our goal is to make your site link-worthy through quality, clarity, and completeness.",
  },
];

export default function OnPageSeoFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-14 bg-black" id="onpage-seo-faq">
      <div className="mx-auto max-w-[95%] md:max-w-[85%] px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-12">
          <div className="w-full">
            <h6 className="text-lg text-center font-medium text-blue-400 mb-2">
              FAQs
            </h6>
            <h2 className="text-4xl text-center md:text-5xl font-inter font-bold text-white mb-10">
              Everything You Need to Know About On-Page SEO
            </h2>

            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="w-full border border-gray-600 rounded-2xl bg-black p-7 shadow-sm transition duration-300 hover:border-blue-500"
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
                    <p className="text-base text-gray-100 mt-2 pt-3 leading-relaxed transition-all duration-300">
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
