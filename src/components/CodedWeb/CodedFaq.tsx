"use client";

import { useState } from "react";

const faqs = [
  {
    question: "What is a custom-coded website?",
    answer:
      "A custom-coded website is built from the ground up (e.g., React/Next.js + Node/Laravel) with code, routing, data models, and UX tailored to your goals. Unlike themes/builders, you control rendering strategy (SSR/SSG/ISR), integrations, performance budgets, and security.",
  },
  {
    question: "When should we choose custom code vs. a CMS theme?",
    answer:
      "Choose custom code when you need speed at scale, complex UX/logic, multi-region localization, strict security, or deep integrations. If content teams need a familiar editor, we pair custom front-ends with CMS back-ends (Hybrid/Headless) so marketers keep their workflows.",
  },
  {
    question: "What’s the difference between Hybrid and Headless?",
    answer:
      "Hybrid: CMS (WordPress/Shopify) remains the editor; a custom React/Next.js front-end consumes CMS data for instant-feel UX.\n\nHeadless: CMS and front-end are fully decoupled via APIs (GraphQL/REST) for maximum performance, multi-channel publishing, and engineering freedom.",
  },
  {
    question: "Will a custom build help SEO?",
    answer:
      "Yes—because we design semantic architecture: entity-driven URLs, internal linking, canonical/hreflang rules, and JSON-LD injected at build time. Faster rendering improves crawl efficiency, Core Web Vitals, and ad Quality Scores.",
  },
  {
    question: "How do Core Web Vitals affect conversions and ads?",
    answer:
      "Better LCP/INP/CLS → higher organic rank, stronger engagement, and lower CPC in paid campaigns. We enforce vitals in CI (builds fail if budgets regress) and benchmark with field data, not just lab tests.",
  },
  {
    question: "Can we keep WordPress or Shopify and still go custom?",
    answer:
      "Absolutely. We routinely ship Hybrid (custom front-end + WordPress/Shopify back-end) or Headless (Next.js + APIs) so teams keep their editors while users get instant-loading UX.",
  },
  {
    question: "What about security and compliance?",
    answer:
      "We implement OWASP controls, CSP/HSTS, least-privilege IAM, secret management, dependency scans, and WAF/CDN protection. Consent, data retention, and logs are aligned to GDPR/CCPA. Payment flows follow PCI-aware patterns.",
  },
  {
    question: "How long does a custom build take?",
    answer:
      "Typical ranges:\nHybrid marketing site: 4–8 weeks\nHeadless corporate/e-com: 8–14 weeks\nComplex platforms/portals: 12–20+ weeks\nTimeline depends on scope, integrations, content readiness, and localization.",
  },
  {
    question: "What does it cost?",
    answer:
      "We price by scope/complexity rather than pages. You’ll get a fixed proposal with milestones; ongoing care (SLA, CRO, SRE) is optional but recommended for growth.",
  },
  {
    question: "How do you track conversions and revenue?",
    answer:
      "We deliver analytics governance: GA4 (server-side where applicable), GTM standards, Meta CAPI, event naming conventions, consent mode, and CRM pipelines (HubSpot/Odoo/Salesforce). Every form, call, and checkout is traceable.",
  },
  {
    question: "Do you support multilingual/RTL builds?",
    answer:
      "Yes—Arabic, English, French and more. We maintain routing parity, mirrored content blocks, RTL layout rules, and region-specific schema so both users and crawlers get a consistent experience.",
  },
  {
    question: "What happens after launch?",
    answer:
      "We monitor vitals, errors, and conversions; run A/B tests; and maintain security patches. Most clients keep us on an optimization plan for continuous gains.",
  },
];

export default function CustomCodeFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-8 md:py-14 bg-black">
      <div className="mx-auto md:max-w-[85%] px-6 lg:px-8">
        <div className="flex flex-col gap-12">
          <div className="w-full">
            <h6 className="text-lg text-center font-medium text-blue-400 mb-2">
              FAQs
            </h6>
            <h2 className="text-4xl text-center md:text-5xl font-inter font-bold text-white mb-10">
              Still Got Questions?
            </h2>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="w-full border border-gray-500 rounded-2xl bg-black p-7 shadow-sm"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="flex justify-between items-center w-full text-left text-lg font-medium text-gray-100 transition duration-500 hover:text-blue-600"
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
                    <p className="text-base text-gray-100 mt-2 pt-3 transition-all duration-300">
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
