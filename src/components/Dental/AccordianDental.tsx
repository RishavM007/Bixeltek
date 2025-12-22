'use client'
import { ChevronDown } from "lucide-react";
import { useState } from "react";


export default function AccordianDental() {
      const [activeAccordion, setActiveAccordion] = useState(null);
        const faqs = [
    { q: "How long until we see results?", a: "Most practices see increased calls within 30 days. SEO results typically show in 60-90 days, while paid ads can generate leads immediately." },
    { q: "Do you work with practices in my area?", a: "Yes! We serve dental practices across the United States and Canada. Our strategies work regardless of location." },
    { q: "What's included in monthly reporting?", a: "You'll receive detailed reports on website traffic, keyword rankings, ad performance, call tracking, ROI, and new patient acquisition." },
    { q: "Can you help with our existing website?", a: "Absolutely! We can optimize your current site or build a new one from scratch - whatever makes the most sense for your practice." },
    { q: "What makes dental marketing different?", a: "Dental patients search and decide differently. They need trust, look for specific procedures, and care about location. Generic marketing doesn't work." },
    { q: "Do you require long-term contracts?", a: "No. We offer month-to-month agreements. We believe in earning your business through results, not locking you into lengthy contracts." }
  ];

      return(
              <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Common Questions Answered</h2>
            <p className="text-xl text-gray-600">Everything you need to know</p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <button
                //@ts-ignore
                  onClick={() => setActiveAccordion(activeAccordion === i ? null : i)}
                  className="w-full p-6 text-left flex justify-between items-center hover:bg-gray-50 transition"
                >
                  <span className="font-semibold text-lg pr-8">{faq.q}</span>
                  <ChevronDown className={`flex-shrink-0 transition-transform ${activeAccordion === i ? 'rotate-180' : ''}`} />
                </button>
                {activeAccordion === i && (
                  <div className="px-6 pb-6 text-gray-600">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      )
}
