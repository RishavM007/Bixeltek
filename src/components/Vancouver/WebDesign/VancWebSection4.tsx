"use client";

import React from "react";

export default function WhyChooseBixeltekVancouver() {
  const values = [
    {
      title: "SEO-Ready, Conversion-Focused Websites",
      subtitle: "Built to drive results",
      description:
        "Websites designed for users and search engines. Fast-loading pages, clean code, persuasive layouts, and strong CTAs ensure traffic converts into leads.",
      color: "hover:bg-blue-600",
    },
    {
      title: "Built for Speed, Mobile, and Core Web Vitals",
      subtitle: "Performance at every step",
      description:
        "Optimized for lightning-fast loading and smooth mobile experiences. Prioritizing Core Web Vitals to delight users and boost search rankings.",
      color: "hover:bg-green-600",
    },
    {
      title: "Custom or CMS-Based Development",
      subtitle: "Tailored to your needs",
      description:
        "Whether fully custom-coded or on WordPress, we deliver secure, scalable websites that reflect your brand identity and goals.",
      color: "hover:bg-purple-600",
    },
    {
      title: "Landing Pages for PPC & Funnel Campaigns",
      subtitle: "Designed for conversions",
      description:
        "Dedicated landing pages for ads and email funnels — crafted with persuasive copy, conversion-focused layouts, and fast-loading architecture.",
      color: "hover:bg-yellow-500",
    },
    {
      title: "Proven Experience Across Canada",
      subtitle: "4+ years of trusted results",
      description:
        "Over four years delivering high-performance websites across Canada, helping businesses attract traffic and achieve measurable ROI.",
      color: "hover:bg-red-500",
    },
    {
      title: "Ongoing Maintenance & Growth Support",
      subtitle: "We keep your site thriving",
      description:
        "Continuous updates, security monitoring, and optimization ensure your website remains fast, secure, and performing at its best.",
      color: "hover:bg-pink-500",
    },
  ];

  return (
    <section className="max-w-[94%] md:max-w-[80%] mx-auto bg-black md:py-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-[95%] md:max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-3xl md:text-6xl font-bold text-white font-inter mb-6">
          Vancouver’s Trusted Partner for <br />
          <span className="text-blue-500">Conversion-Driven Web Design</span>
        </h2>
        <p className="text-gray-300 max-w-3xl mx-auto font-poppins leading-relaxed">
          At Bixeltek, design meets performance. We don’t just build beautiful websites — we deliver solutions that generate results. With SEO, user experience, and conversion optimization at the core, your site attracts quality traffic, engages visitors, and drives measurable business growth.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {values.map((item, idx) => (
          <div
            key={idx}
            className={`bg-[#fff] group border ${item.color} border-white/10 rounded-xl p-6 shadow-md hover:shadow-lg transition`}
          >
            <div className="flex items-center pb-4 border-b border-gray-200 mb-6">
              <div className="ml-0">
                <h3 className="text-lg group-hover:text-white font-semibold text-black">{item.title}</h3>
                <p className="text-sm group-hover:text-gray-100 text-gray-800">{item.subtitle}</p>
              </div>
            </div>
            <p className="text-gray-900 group-hover:text-gray-50 leading-relaxed">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
