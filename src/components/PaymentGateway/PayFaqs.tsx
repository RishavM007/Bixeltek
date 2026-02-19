"use client";

import { useState } from "react";

const faqs = [
    {
        question: "What payment gateways do you integrate?",
        answer: `We integrate Razorpay, Stripe, PayTabs, HyperPay, PayPal, and Authorize.net, along with region-specific gateways for India, GCC, and North America.
Our team handles both plugin-based and direct API integrations across Shopify, WooCommerce, and custom-coded frameworks (React, Laravel, Node.js).`,
    },
    {
        question: "Why is Razorpay recommended for Indian businesses?",
        answer: `Razorpay offers one of the most comprehensive payment ecosystems for Indian SMEs and e-commerce brands — covering UPI, cards, EMI, wallets, subscriptions, and international payments.
It’s developer-friendly, has low latency APIs, and integrates seamlessly with GST billing and automated invoicing — making it ideal for both retail and SaaS.`,
    },
    {
        question: "How secure are your payment gateway integrations?",
        answer: `Every implementation follows PCI-DSS Level 1 compliance.
We secure all transactions with SSL/TLS 1.3, CSP, HSTS, tokenized payments, and secure webhooks.
Additionally, 3D Secure 2.2 and Strong Customer Authentication (SCA) are enforced for compliant transactions across all regions.`,
    },
    {
        question: "Can you integrate Razorpay or PayTabs into my existing website?",
        answer: `Yes — we integrate payment gateways into existing WordPress, Shopify, or custom-built websites without disrupting design or content.
We also refactor your checkout flow for fewer redirects, faster response times, and localized currency/tax logic to maintain conversions.`,
    },
    {
        question: "What’s the difference between plugin and API integration?",
        answer: `Plugin integration (e.g., Razorpay for WooCommerce, PayTabs for Shopify) is fast but limited in customization.

Direct API integration gives full control over checkout UX, refund automation, webhook handling, and subscription management — suitable for scaling businesses.

We usually recommend a hybrid approach for brands planning future automation or mobile app sync.`,
    },
    {
        question: "How do you ensure global compliance?",
        answer: `We apply OWASP ASVS, GDPR/CCPA frameworks, and regional laws like GCC data localization.
All payment data passes through the gateway’s tokenization system, not your servers — keeping you compliant by design.`,
    },
    {
        question: "Can we offer multiple payment options (UPI, cards, PayLater, etc.)?",
        answer: `Absolutely.
Through multi-gateway routing and Razorpay Smart Collect, you can accept cards, UPI, EMI, wallets, net banking, and BNPL — all within one secure checkout interface.
For GCC and North America, we configure equivalent multi-channel support with PayTabs and Stripe.`,
    },
    {
        question: "What analytics and reporting do you set up?",
        answer: `We connect transaction data to Google Analytics 4, Meta CAPI, and CRMs (HubSpot, Odoo, Zoho).
You’ll see where every sale came from, which campaigns performed best, and how checkout behavior changes over time.`,
    },
    {
        question: "How long does a payment integration take?",
        answer: `Plugin integrations: 2–5 business days

Custom API integrations: 1–2 weeks (including sandbox testing and PCI validation)

Enterprise or multi-gateway setups: 3–4 weeks

We deliver a live test environment before going fully live to ensure reliability.`,
    },
    {
        question: "What’s included in a Bixeltek Payment Integration Audit?",
        answer: `Transaction success rate analysis
API latency & webhook reliability
PCI-DSS compliance scan
Checkout UX review
30-day optimization roadmap

It’s a technical + business audit designed to boost conversion and trust simultaneously.`,
    },
];

export default function PaymentGatewayFAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="pt-4 pb-20 md:py-16 bg-white">
            <div className="mx-auto max-w-[95%] md:max-w-[85%] px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col gap-12">
                    <div className="w-full">
                        <h6 className="text-lg text-center font-medium text-purple-600 mb-2">
                            FAQs
                        </h6>
                        <h2 className="text-3xl text-center md:text-5xl font-inter font-bold text-gray-900 mb-10">
                            Everything You Need to Know About <br />{" "}
                            <span className="text-purple-500">Payment Gateway Integrations</span>
                        </h2>

                        <div className="space-y-6">
                            {faqs.map((faq, index) => (
                                <div
                                    key={index}
                                    className="w-full border border-gray-300 rounded-2xl bg-white p-7 shadow-sm transition-all duration-300 hover:border-purple-500"
                                >
                                    <button
                                        onClick={() => toggleFAQ(index)}
                                        className="flex justify-between items-center w-full text-left text-lg font-medium text-gray-900 transition duration-500 hover:text-yellow-600"
                                    >
                                        <span>{faq.question}</span>
                                        <svg
                                            className={`transition-transform duration-500 ${openIndex === index
                                                    ? "rotate-180 text-purple-500"
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
                                        <p className="text-base text-gray-700 mt-3 pt-3 whitespace-pre-line transition-all duration-300">
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
