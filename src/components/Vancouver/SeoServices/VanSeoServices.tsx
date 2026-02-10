"use client";

import React from "react";
import Link from "next/link";

export default function SeoServicesVancouver() {
  const services = [
    {
      title: "Local SEO",
      description:
        "Get found by customers searching “near me.” We optimize your Google Business Profile, local citations, reviews, and service pages to help you rank in the Vancouver Map Pack.",
      benefit: "More local leads and walk-ins.",
      link: "/local-seo",
    },
    {
      title: "On-Page SEO",
      description:
        "Content and structure that align with Google’s Helpful Content and E-E-A-T principles. We optimize headings, schema, internal links, and keyword relevance for maximum visibility.",
      benefit: "Better rankings with trustworthy content.",
      link: "/on-page-seo",
    },
    {
      title: "Technical SEO",
      description:
        "Fix crawl errors, improve page speed, mobile UX, and indexing signals that boost your site’s performance and trust.",
      benefit: "Search engines + users love your site.",
      link: "/technical-seo",
    },
    {
      title: "AI SEO (Next-Gen Optimization)",
      description:
        "We optimize your content to be understood and recommended by AI systems — including Google Gemini, ChatGPT, and Perplexity. Through entity mapping, structured data, and semantic optimization, your business gains visibility across AI-driven search experiences.",
      benefit: "Future-proof SEO with AI integration.",
      link: "#",
    },
    {
      title: "Content Strategy & Topical Maps",
      description:
        "We develop content clusters and entity-driven strategies that build authority around your core services and industry expertise.",
      benefit: "Your site becomes an authority hub.",
      link: "#",
    },
    {
      title: "Link Building & Digital PR",
      description:
        "Build backlinks from relevant, high-authority websites to increase your domain strength and reputation in Google’s eyes.",
      benefit: "More authority = higher rankings.",
      link: "#",
    },
  ];

  return (
    <section className="relative py-10 md:py-20 bg-black text-gray-100" id="seo-services">
      {/* Background Blobs */}
      <div className="absolute top-32 -left-20 w-[500px] h-[500px] bg-blue-500 rounded-full opacity-30 blur-[190px] pointer-events-none"></div>
      <div className="absolute bottom-52 right-0 w-[500px] h-[500px] bg-blue-500 rounded-full opacity-30 blur-[190px] pointer-events-none"></div>

      <div>
        {/* Section Heading */}
        <div className="max-w-[90%] lg:max-w-[80%] mx-auto mb-10 text-center">
          <h2 className="text-white text-3xl md:text-6xl font-inter mb-3 font-semibold">
            Complete <span className="text-blue-500">SEO Solutions</span> Tailored for Vancouver Businesses
          </h2>
          <p className="text-gray-100 text-base md:text-[17px] tracking-wider mt-4 max-w-4xl mx-auto">
            Our SEO approach covers every aspect of search optimization — from local visibility to AI-driven recommendations — designed to help your business dominate Vancouver search results.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-[90%] lg:max-w-[75%] mx-auto mt-10 gap-0">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative w-full h-96 group border border-gray-800 bg-black/10 hover:bg-blue-600 transition-all duration-300 flex flex-col justify-center items-center p-10 md:p-14"
            >
              <h3 className="text-white text-2xl font-bold text-center mb-2">
                {service.title}
              </h3>
              <p className="text-gray-300 text-sm text-center mb-3">
                {service.description}
              </p>
              {/* <p className="text-blue-400 group-hover:text-white group-hover:font-bold text-xs italic text-center mb-3">
                Benefit: {service.benefit}
              </p> */}
              <Link href={service.link}>
                <p className="text-blue-500 group-hover:text-white text-sm mt-2 hover:font-semibold">
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
      </div>
    </section>
  );
}
