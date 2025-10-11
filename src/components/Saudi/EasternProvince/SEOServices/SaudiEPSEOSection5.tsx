"use client";

import React from "react";
import Link from "next/link";

export default function SEOServicesEasternProvince() {
  const services = [
    {
      title: "Local SEO",
      description:
        "Dominate searches in Khobar and Dammam with localized maps, NAP consistency, and review optimization.",
      link: "#",
    },
    {
      title: "On-Page SEO",
      description:
        "Optimize page titles, headers, and schema for maximum clarity and intent matching.",
      link: "#",
    },
    {
      title: "Technical SEO",
      description:
        "Improve site speed, fix indexing issues, and enhance mobile usability for better user experience and crawlability.",
      link: "#",
    },
    {
      title: "Content Strategy & Topical Maps",
      description:
        "Create a content ecosystem around your core services, ranking for every question your audience asks.",
      link: "#",
    },
    {
      title: "AI SEO Optimization",
      description:
        "Position your brand to appear in AI search engines like Gemini and Perplexity with entity-rich, query-responsive content.",
      link: "#",
    },
    {
      title: "Link Building & Authority Development",
      description:
        "Earn backlinks from region-relevant, high-trust domains that boost your domain authority.",
      link: "#",
    },
  ];

  return (
    <section
      className="relative py-14 md:py-24 bg-black text-gray-100"
      id="seo-services"
    >
      {/* Background Glows */}
      <div className="absolute top-32 -left-20 w-[500px] h-[500px] bg-yellow-500 rounded-full opacity-30 blur-[190px] pointer-events-none"></div>
      <div className="absolute bottom-52 right-0 w-[500px] h-[500px] bg-yellow-500 rounded-full opacity-30 blur-[190px] pointer-events-none"></div>

      <div>
        {/* Heading + Intro */}
        <div className="max-w-[90%] md:max-w-[80%] mx-auto mb-10 text-center">
          <h2 className="text-white text-3xl lg:text-6xl font-inter mb-3 font-semibold">
            Comprehensive SEO Solutions{" "}
            <span className="text-yellow-500">for Businesses in Eastern Province</span>
          </h2>
          <p className="text-gray-100 text-base md:text-[17px] tracking-wider mt-4 max-w-4xl mx-auto leading-relaxed">
            We offer full-spectrum SEO services customized for Saudi markets — bilingual, compliant, and ROI-focused.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 max-w-[75%] mx-auto mt-10 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative w-full h-96 group border border-gray-800 bg-black/10 hover:bg-yellow-600/10 transition-all duration-300 flex flex-col justify-center items-center p-10 md:p-14 rounded-lg"
            >
              <h3 className="text-white text-2xl font-bold text-center mb-2">
                {service.title}
              </h3>
              <p className="text-gray-300 text-base text-center mb-3 leading-relaxed">
                {service.description}
              </p>
              <Link href={service.link}>
                <p className="text-green-500 group-hover:text-white text-sm mt-2 hover:font-semibold transition-all">
                  Discover More
                </p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
