'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { PawPrint } from 'lucide-react';

interface FAQItem {
    id: number;
    question: string;
    answer: string;
}

const PetSEOFAQAccordion = () => {
    
    const [openItems, setOpenItems] = useState<number[]>([0]);

const faqs: FAQItem[] = [
    {
        id: 1,
        question: "How long does SEO take for pet businesses?",
        answer: "Most see visibility improvement within 2–3 months and conversions growing by month 4–6."
    },
    {
        id: 2,
        question: "What's the difference between SEO and AI SEO for pet brands?",
        answer: "SEO improves rankings using keywords and backlinks. AI SEO makes your business machine-readable, ensuring you show up in AI Overviews, voice assistants, and semantic search."
    },
    {
        id: 3,
        question: "Can one strategy work for both pet shops and groomers?",
        answer: "We customize by intent — eCommerce SEO for pet shops, local SEO for groomers, and content SEO for manufacturers."
    },
    {
        id: 4,
        question: "What's the monthly investment?",
        answer: "Packages start at ₹40,000/month for single-location businesses and scale with multi-location or eCommerce setups."
    },
    {
        id: 5,
        question: "Do you handle Google Business Profile optimization too?",
        answer: "Absolutely. We optimize your GBP for visibility in local map packs, add service keywords, and post regularly to increase local engagement."
    },
    {
        id: 6,
        question: "Can SEO help increase in-store visits for pet groomers?",
        answer: "Yes — through local SEO, location-based landing pages, and optimized Google reviews, we directly boost foot traffic and appointment bookings."
    },
    {
        id: 7,
        question: "Do you provide content creation for blogs and product pages?",
        answer: "Yes, our content team writes SEO-optimized blogs, pet care guides, and product descriptions designed to attract organic traffic and conversions."
    },
    {
        id: 8,
        question: "Is link building part of your strategy?",
        answer: "We focus on quality over quantity — building links from pet blogs, directories, and partner sites that improve authority and referral traffic."
    },
    {
        id: 9,
        question: "Can AI SEO improve my rankings on ChatGPT and Gemini search results?",
        answer: "Exactly. AI SEO ensures your brand data is structured and recognized by AI systems, increasing your chance of being mentioned in AI Overviews."
    },
    {
        id: 10,
        question: "Do you provide monthly reports and performance tracking?",
        answer: "Yes, you’ll receive detailed analytics showing ranking growth, traffic sources, conversions, and ROI each month."
    }
];
 
    const toggleItem = (id: number) => {
        setOpenItems(prev =>
            prev.includes(id)
                ? prev.filter(itemId => itemId !== id)
                : [...prev, id]
        );
    };

    return (
        <section className="py-20 bg-gradient-to-br from-amber-950 via-amber-700 to-amber-950">
            <div className="mx-auto max-w-[95%] md:max-w-[85%] px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 bg-amber-500/20 text-amber-200 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                        <PawPrint className="w-4 h-4" />
                        Pet Business SEO
                    </div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                        Frequently Asked Questions
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-400 mt-2">
                            SEO for Pet Industry
                        </span>
                    </h2>
                    <p className="text-xl text-amber-100 max-w-3xl mx-auto leading-relaxed">
                        Get comprehensive answers about how AI-powered SEO transforms pet business visibility and customer acquisition.
                    </p>
                </div>

                {/* FAQ Accordion */}
                <div className="max-w-7xl mx-auto space-y-4">
                    {faqs.map((faq, index) => {
                        const isOpen = openItems.includes(faq.id);

                        return (
                            <div
                                key={faq.id}
                                className="group relative overflow-hidden"
                            >
                                {/* Animated background gradient */}
                                <div className={`absolute inset-0 bg-gradient-to-r from-amber-500/5 to-amber-500/5 rounded-2xl transition-all duration-500 ${isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 group-hover:opacity-50'
                                    }`}></div>

                                <div className="relative border border-amber-700 rounded-2xl bg-amber-800/50 backdrop-blur-sm transition-all duration-500 hover:border-amber-500/50 hover:shadow-2xl hover:shadow-amber-500/10">
                                    <button
                                        onClick={() => toggleItem(faq.id)}
                                        className="w-full px-8 py-6 text-left flex items-start justify-between focus:outline-none rounded-2xl transition-all duration-300"
                                    >
                                        <div className="flex items-start space-x-6 flex-1">
                                            {/* Number indicator with gradient */}
                                            <div className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center text-base font-bold transition-all duration-500 ${isOpen
                                                ? 'bg-gradient-to-br from-amber-500 to-orange-500 text-white shadow-lg shadow-amber-500/25'
                                                : 'bg-white text-amber-900 group-hover:bg-amber-600 group-hover:text-white'
                                                }`}>
                                                {index + 1}
                                            </div>

                                            {/* Question */}
                                            <h3 className={`text-lg md:text-xl font-semibold pr-8 transition-all duration-300 ${isOpen ? 'text-white' : 'text-amber-100 group-hover:text-white'
                                                }`}>
                                                {faq.question}
                                            </h3>
                                        </div>

                                        {/* Animated icon */}
                                        <div className={`flex-shrink-0 w-6 h-6 flex items-center justify-center transition-all duration-500 ${isOpen
                                            ? 'text-amber-400 transform rotate-180 scale-110'
                                            : 'text-amber-300 group-hover:text-amber-200'
                                            }`}>
                                            <svg
                                                className="transition-transform duration-500"
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
                                        </div>
                                    </button>

                                    {/* Answer with smooth animation */}
                                    <div className={`overflow-hidden transition-all duration-700 ease-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                                        }`}>
                                        <div className="px-8 pb-8">
                                            <div className="flex space-x-6">
                                                {/* Answer text */}
                                                <p className="text-amber-100 leading-relaxed text-lg pt-1">
                                                    {faq.answer}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Enhanced Bottom CTA */}
                <div className="text-center mt-16">
                    <div className="relative bg-gradient-to-br from-amber-800 to-amber-900 rounded-3xl p-12 border border-amber-700 max-w-2xl mx-auto shadow-2xl shadow-amber-500/5">
                        {/* Background pattern */}
                        <div className="absolute inset-0 opacity-5">
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.15)_1px,transparent_0)] bg-[length:20px_20px]"></div>
                        </div>

                        <div className="relative z-10">
                            <h3 className="text-2xl font-bold text-white mb-4">
                                Ready to Grow Your Pet Business?
                            </h3>
                            <p className="text-amber-100 mb-8 text-lg max-w-md mx-auto">
                                Get personalized SEO strategies tailored specifically for pet businesses.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link href={'/contact-us'}>
                                    <button className="group relative bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-500 hover:to-orange-500 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-amber-500/25 transform hover:-translate-y-1">
                                        <span className="relative z-10 flex items-center gap-2">
                                            <PawPrint className="w-5 h-5" />
                                            Get Free Consultation
                                        </span>
                                        <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-orange-500 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    </button>
                                </Link>

                                <Link href={'/case-studies'}>
                                    <button className="border border-amber-600 hover:border-amber-400 text-amber-200 hover:text-white px-8 py-4 rounded-xl font-medium transition-all duration-300 hover:shadow-lg">
                                        View Case Studies
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PetSEOFAQAccordion;