"use client";

import React from "react";
import Link from "next/link";

export default function SeoServicesRiyadh() {
  const services = [
    {
      title: "SEO Audit & Strategy",
      description:
        "Full website audit, competitor analysis, and a growth roadmap tailored for Riyadh’s search intent.",
      link: "/riyadh/seo/audit-strategy",
    },
    {
      title: "On-Page Optimization",
      description:
        "Meta tags, structured data, internal linking, keyword placement, and Core Web Vitals optimization for better rankings.",
      link: "/riyadh/seo/on-page-optimization",
    },
    {
      title: "Off-Page SEO & Link Building",
      description:
        "Acquire high-quality backlinks through PR, partnerships, and contextual citations to boost authority and trust.",
      link: "/riyadh/seo/off-page-seo",
    },
    {
      title: "Local SEO",
      description:
        "Google Business optimization, Arabic/English listings, and area-specific pages for districts like Al Olaya, Diriyah, and Qurtubah.",
      link: "/riyadh/seo/local-seo",
    },
    {
      title: "Content Strategy & Blogging",
      description:
        "Topical map-driven content plans aligned with E-E-A-T principles and bilingual storytelling for your target audience.",
      link: "/riyadh/seo/content-strategy",
    },
    {
      title: "Analytics & Reporting",
      description:
        "GA4 + GSC integration, ranking dashboards, and conversion analysis — transparent and measurable results.",
      link: "/riyadh/seo/analytics-reporting",
    },
  ];

  return (
    <section
      className="relative py-14 md:py-24 bg-black text-gray-100"
      id="seo-services-riyadh"
    >
      {/* Background Glows */}
      <div className="absolute top-32 -left-20 w-[500px] h-[500px] bg-yellow-500 rounded-full opacity-30 blur-[190px] pointer-events-none"></div>
      <div className="absolute bottom-52 right-0 w-[500px] h-[500px] bg-yellow-500 rounded-full opacity-30 blur-[190px] pointer-events-none"></div>

      <div>
        {/* Heading + Intro */}
        <div className="max-w-[90%] md:max-w-[80%] mx-auto mb-10 text-center">
          <h2 className="text-white text-3xl lg:text-6xl font-inter mb-3 font-semibold">
            Comprehensive{" "}
            <span className="text-yellow-500">SEO Services</span> for Riyadh-Based Businesses
          </h2>
          <p className="text-gray-100 text-base md:text-[17px] tracking-wider mt-4 max-w-4xl mx-auto leading-relaxed">
            We manage your SEO end-to-end — from keyword research and technical optimization
            to content strategy and analytics — tailored for the Saudi market.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 max-w-[75%] mx-auto mt-10 gap-0">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative w-full h-96 group border border-gray-800 bg-black/10 hover:bg-yellow-600/10 transition-all duration-300 flex flex-col justify-center items-center p-10 md:p-14 rounded-lg"
            >
              <h3 className="text-white text-2xl font-bold text-center mb-2">
                {service.title}
              </h3>
              <p className="text-gray-300 text-sm text-center mb-3 leading-relaxed">
                {service.description}
              </p>
              <Link href={service.link}>
                <p className="text-green-400 group-hover:text-white text-sm mt-2 hover:font-semibold transition-all">
                  Discover More
                </p>
              </Link>

              {/* Decorative Plus Icons */}
              {index % 4 === 0 && (
                <span className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 text-gray-300 text-3xl z-30">
                  <i className="fa fa-plus text-2xl" aria-hidden="true"></i>
                </span>
              )}
              {(index % 4 === 1 || index === 0 || index === 2) && (
                <span className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 text-gray-300 text-3xl z-30">
                  <i className="fa fa-plus text-2xl" aria-hidden="true"></i>
                </span>
              )}
              {(index % 4 === 2 || index === 0 || index === 3) && (
                <span className="absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2 text-gray-300 text-3xl z-30">
                  <i className="fa fa-plus text-2xl" aria-hidden="true"></i>
                </span>
              )}
              {(index % 4 === 3 || index === 5) && (
                <span className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 text-gray-300 text-3xl z-30">
                  <i className="fa fa-plus text-2xl" aria-hidden="true"></i>
                </span>
              )}
            </div>
          ))}
        </div>

        {/* Closing Paragraph */}
        <p className="text-gray-300 text-center mt-16 text-base md:text-lg max-w-4xl mx-auto leading-relaxed">
          Our approach blends creative storytelling with analytical precision — transforming
          SEO efforts into measurable growth. Whether you’re launching a startup or scaling
          an enterprise, our Riyadh SEO specialists ensure your strategy performs with{" "}
          <span className="text-green-400 font-medium">clarity, consistency, and confidence.</span>
        </p>
      </div>
    </section>
  );
}
