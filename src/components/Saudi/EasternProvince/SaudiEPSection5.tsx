"use client";

import React from "react";
import Link from "next/link";

export default function DigitalMarketingServicesEasternProvince() {
  const services = [
    {
      title: "Google Ads Management",
      description:
        "Instant visibility, high-intent targeting, and lower cost per lead. We create and optimize ad campaigns that connect your business with ready-to-buy customers across Khobar, Dammam, and beyond.",
      link: "/saudi-arabia/eastern-province/google-ads-management",
    },
    {
      title: "SEO & Local Search Optimization",
      description:
        "Boost your visibility across Arabic and English searches. From technical SEO to Google Map optimization, we help your business rank where your customers are searching most.",
      link: "/saudi-arabia/eastern-province/seo-services",
    },
    {
      title: "Web Design & Development",
      description:
        "Websites that convert — not just impress. We build responsive, SEO-friendly, and high-converting websites tailored specifically for Saudi audiences and regional trends.",
      link: "/saudi-arabia/eastern-province/web-design-services",
    },
    {
      title: "Social Media Marketing",
      description:
        "Build awareness and community through data-backed storytelling. We design campaigns that drive engagement and loyalty across Instagram, LinkedIn, TikTok, and more.",
      link: "//saudi-arabia/eastern-province/social-media-management",
    },
    {
      title: "Branding & Creative Strategy",
      description:
        "Your visual identity defines your reputation. We craft premium, consistent brand experiences that earn trust and differentiate your business in a competitive Saudi market.",
      link: "#",
    },
    {
      title: "Analytics & Conversion Optimization",
      description:
        "What gets measured, gets improved. We install advanced analytics to track performance, refine funnels, and make decisions backed by real data — not guesswork.",
      link: "#",
    },
  ];

  return (
    <section
      className="relative py-14 md:py-24 bg-black text-gray-100"
      id="digital-marketing-services"
    >
      {/* Background Glows */}
      <div className="absolute top-32 -left-20 w-[500px] h-[500px] bg-yellow-500 rounded-full opacity-30 blur-[190px] pointer-events-none"></div>
      <div className="absolute bottom-52 right-0 w-[500px] h-[500px] bg-yellow-500 rounded-full opacity-30 blur-[190px] pointer-events-none"></div>

      <div>
        {/* Heading + Intro */}
        <div className="max-w-[90%] md:max-w-[80%] mx-auto mb-10 text-center">
          <h2 className="text-white text-3xl lg:text-6xl font-inter mb-3 font-semibold">
            Comprehensive Digital Marketing Services{" "}
            <span className="text-yellow-500">for Businesses Across the Eastern Province</span>
          </h2>
          <p className="text-gray-100 text-base md:text-[17px] tracking-wider mt-4 max-w-4xl mx-auto leading-relaxed">
            Our team manages end-to-end marketing solutions — from strategic planning and content
            creation to campaign execution and reporting. We help you stay visible, competitive, and
            profitable in a fast-changing Saudi market.
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
                <p className="text-green-500 group-hover:text-white text-sm mt-2 hover:font-semibold transition-all">
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
