"use client";

import React from "react";
import Link from "next/link";

export default function SEOServicesEasternProvince() {
  const services = [
    {
      title: "Local SEO",
      description:
        "Dominate searches in Khobar and Dammam with localized maps, NAP consistency, and review optimization.",
      link: "/local-seo",
    },
    {
      title: "On-Page SEO",
      description:
        "Optimize page titles, headers, and schema for maximum clarity and intent matching.",
      link: "/on-page-seo",
    },
    {
      title: "Technical SEO",
      description:
        "Improve site speed, fix indexing issues, and enhance mobile usability for better user experience and crawlability.",
      link: "/technical-seo",
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
      className="relative py-14 md:py-24 bg-[#fffdf5] text-black"
      id="seo-services"
    >
      {/* Background Glows */}
      <div className="absolute top-32 -left-20 w-[500px] h-[500px] bg-green-500 rounded-full opacity-30 blur-[190px] pointer-events-none"></div>
      <div className="absolute bottom-52 right-0 w-[500px] h-[500px] bg-green-500 rounded-full opacity-30 blur-[190px] pointer-events-none"></div>

      <div>
        {/* Heading + Intro */}
        <div className="max-w-[90%] md:max-w-[80%] mx-auto mb-10 text-center">
          <h2 className="text-black text-3xl lg:text-6xl font-inter mb-3 font-semibold">
            Comprehensive SEO Solutions{" "} <br />
            <span className="text-yellow-500">for Businesses in Eastern Province</span>
          </h2>
          <p className="text-gray-900 text-base md:text-[17px] tracking-wider mt-4 max-w-4xl mx-auto leading-relaxed">
            We offer full-spectrum SEO services customized for Saudi markets — bilingual, compliant, and ROI-focused.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 max-w-[75%] mx-auto mt-10 gap-0">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative w-full h-96 group border border-gray-400 bg-white hover:bg-gradient-to-br hover:from-black hover:via-green-700 hover:to-green-500 transition-all duration-300 flex flex-col justify-center items-center p-10 md:p-14 rounded-none"
            >
              <h3 className="text-black group-hover:text-white text-2xl font-bold text-center mb-2">
                {service.title}
              </h3>
              <p className="text-gray-900 group-hover:text-white text-base text-center mb-3 leading-relaxed">
                {service.description}
              </p>
              <Link href={service.link}>
                <p className="text-green-500 group-hover:text-white group-hover:scale-105 text-base  mt-2 hover:font-semibold transition-all duration-300">
                  Discover More
                </p>
              </Link>
              {index % 4 === 0 && (
                <span className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 text-gray-300 text-3xl z-30">
                  <i className="fa fa-plus text-black text-2xl" aria-hidden="true"></i>
                </span>
              )}
              {(index % 4 === 1 || index === 0 || index === 2) && (
                <span className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 text-black text-3xl z-30">
                  <i className="fa fa-plus text-2xl" aria-hidden="true"></i>
                </span>
              )}
              {(index % 4 === 2 || index === 0 || index === 3) && (
                <span className="absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2 text-black text-3xl z-30">
                  <i className="fa fa-plus text-2xl" aria-hidden="true"></i>
                </span>
              )}
              {(index % 4 === 3 || index === 5) && (
                <span className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 text-black text-3xl z-30">
                  <i className="fa fa-plus text-2xl" aria-hidden="true"></i>
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
