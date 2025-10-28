"use client";

import { useState } from "react";

const faqs = [
  {
    question: "What makes an e-commerce website truly high-performing?",
    answer:
      "High performance comes from engineering, not plugins. A fast server-side rendered (SSR/SSG) front-end, optimized database queries, and Core Web Vitals tuning combine to reduce load time and bounce rate. Every millisecond improves both SEO and ad Quality Score.",
  },
  {
    question: "Should I choose Shopify, WooCommerce, or Headless Commerce?",
    answer:
      "Shopify / Shopify Plus → best for reliability, quick deployment, and integrated payments.\n\nWooCommerce → ideal when content marketing and SEO depth matter.\n\nHeadless → right for enterprises needing speed, multilingual scale, and omnichannel control.\n\nWe help clients map platform choice to revenue stage, SKU volume, and operational complexity.",
  },
  {
    question: "How does page speed affect sales?",
    answer:
      "According to Google’s 2024 benchmarks, each additional second of delay cuts conversions by 7–10%. Faster stores earn higher organic rank and lower ad CPC. Bixeltek builds sub-2 s LCP and < 100 ms INP by default through optimized rendering and CDN edge caching.",
  },
  {
    question: "What integrations can my store have?",
    answer:
      "We integrate CRMs (HubSpot, Salesforce, Odoo), ERPs (Zoho, SAP B1), payment gateways (PayTabs, Stripe, Razorpay, HyperPay), logistics APIs (ShipRocket, Aramex), and marketing automation (Klaviyo, Meta CAPI, GA4 Server-Side).",
  },
  {
    question: "How secure are your e-commerce builds?",
    answer:
      "Security follows OWASP ASVS: CSP/HSTS enforcement, SQL injection and XSS prevention, encrypted tokens, and PCI-aware payment flows. Compliance layers include GDPR, CCPA, and GCC data-localization policies.",
  },
  {
    question: "Can you migrate my existing Shopify or WooCommerce store?",
    answer:
      "Yes. We handle full-stack migrations — products, customers, URLs, SEO signals, and order history — while maintaining analytics and ad tracking continuity.",
  },
  {
    question: "Do you offer multilingual or multi-currency setups?",
    answer:
      "Absolutely. We implement localized catalogs with currency switchers, region-specific tax rules, and hreflang tags for Arabic, English, and French parity.",
  },
  {
    question: "What post-launch support do you provide?",
    answer:
      "Performance monitoring, CRO experiments, A/B testing, feature rollout, and quarterly optimization audits. Most clients keep us as a technical growth partner rather than a one-time developer.",
  },
  {
    question: "How do you measure success?",
    answer:
      "KPIs: conversion rate ≥ 3 %, cart abandonment < 40 %, repeat purchase rate > 20 %, and Core Web Vitals in the green — all tracked via GA4 + server-side tagging.",
  },
  {
    question: "How long will a new store take to launch?",
    answer:
      "Typical timelines:\nShopify/WooCommerce → 6–10 weeks\nHeadless Commerce → 10–16 weeks\n\nExact duration depends on catalog size, integrations, and localization scope.",
  },
];

export default function EcommerceFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-black">
      <div className="mx-auto max-w-[95%] md:max-w-[85%] px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-12">
          <div className="w-full">
            <h6 className="text-lg text-center font-medium text-blue-400 mb-2">
              FAQs
            </h6>
            <h2 className="text-4xl text-center md:text-5xl font-inter font-bold text-white mb-10">
              Everything You Need to Know Before You Build
            </h2>

            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="w-full border border-gray-600 rounded-2xl bg-black p-7 shadow-sm transition-all duration-300 hover:border-blue-600"
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
                    <p className="text-base text-gray-100 mt-3 pt-3 whitespace-pre-line transition-all duration-300">
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
