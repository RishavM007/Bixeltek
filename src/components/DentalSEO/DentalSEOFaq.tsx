'use client';

import React, { useState } from 'react';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const FAQAccordion = () => {
  const [openItems, setOpenItems] = useState<number[]>([0]);

  const faqs: FAQItem[] = [
    {
      id: 1,
      question: "What's the difference between regular SEO and AI SEO for dental clinics?",
      answer: "Regular SEO helps you rank for keywords; AI SEO helps you become the answer. It involves entity optimization, semantic structure, and Google's machine learning models."
    },
    {
      id: 2,
      question: "Can AI SEO replace traditional SEO?",
      answer: "No — they work together. Traditional SEO builds the foundation, while AI SEO amplifies visibility in the evolving search landscape."
    },
    {
      id: 3,
      question: "How long before we see measurable results?",
      answer: "Most dental clinics notice visibility gains in 3 months and appointment growth between months 4–6, depending on competition and content depth."
    },
    {
      id: 4,
      question: "Is AI SEO future-proof?",
      answer: "Yes. AI SEO aligns with Google's shift toward meaning-based indexing and generative summaries. It's the safest long-term SEO investment for any local business."
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
    <section className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900" id="form">
      <div className="mx-auto max-w-[95%] md:max-w-[85%] px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Frequently Asked Questions
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 mt-2">
              AI SEO for Dental Practices
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Get comprehensive answers about how AI-powered SEO transforms dental clinic visibility and patient acquisition.
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
                <div className={`absolute inset-0 bg-gradient-to-r from-blue-500/5 to-cyan-500/5 rounded-2xl transition-all duration-500 ${
                  isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 group-hover:opacity-50'
                }`}></div>
                
                <div className="relative border border-gray-700 rounded-2xl bg-gray-800/50 backdrop-blur-sm transition-all duration-500 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/10">
                  <button
                    onClick={() => toggleItem(faq.id)}
                    className="w-full px-8 py-6 text-left flex items-start justify-between focus:outline-none  rounded-2xl transition-all duration-300"
                  >
                    <div className="flex items-start space-x-6 flex-1">
                      {/* Number indicator with gradient */}
                      <div className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center text-base font-bold transition-all duration-500 ${
                        isOpen 
                          ? 'bg-gradient-to-br from-blue-500 to-cyan-500 text-white shadow-lg shadow-blue-500/25' 
                          : 'bg-gradient-to-br from-blue-500 to-cyan-500 text-gray-300 group-hover:bg-gray-600'
                      }`}>
                        {index + 1}
                      </div>
                      
                      {/* Question */}
                      <h3 className={`text-lg md:text-xl font-semibold pr-8 transition-all duration-300 ${
                        isOpen ? 'text-white' : 'text-gray-200 group-hover:text-white'
                      }`}>
                        {faq.question}
                      </h3>
                    </div>
                    
                    {/* Animated icon */}
                    <div className={`flex-shrink-0 w-6 h-6 flex items-center justify-center transition-all duration-500 ${
                      isOpen 
                        ? 'text-cyan-400 transform rotate-180 scale-110' 
                        : 'text-gray-400 group-hover:text-gray-300'
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
                  <div className={`overflow-hidden transition-all duration-700 ease-out ${
                    isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                    <div className="px-8 pb-8">
                      <div className="flex space-x-6">
                        {/* Vertical line */}
                        
                        {/* Answer text */}
                        <p className="text-gray-300 leading-relaxed text-lg pt-1">
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
          <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-12 border border-gray-700 max-w-2xl mx-auto shadow-2xl shadow-blue-500/5">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.15)_1px,transparent_0)] bg-[length:20px_20px]"></div>
            </div>
            
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-white mb-4">
                Ready to Transform Your Dental Practice?
              </h3>
              <p className="text-gray-300 mb-8 text-lg max-w-md mx-auto">
                Get personalized AI SEO strategies tailored specifically for dental clinics.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="group relative bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-blue-500/25 transform hover:-translate-y-1">
                  <span className="relative z-10">Get Free Consultation</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
                <button className="border border-gray-600 hover:border-gray-400 text-gray-300 hover:text-white px-8 py-4 rounded-xl font-medium transition-all duration-300 hover:shadow-lg">
                  View Case Studies
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQAccordion;