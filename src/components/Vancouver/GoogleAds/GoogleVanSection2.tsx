'use client';

import React from "react";
import Link from "next/link";

export default function GoogleAdsServicesVancouver() {
  const services = [
    {
      title: "Campaign Setup & Strategy",
      description:
        "Keyword research, competitor analysis, and campaign structuring designed for Vancouver’s competitive market.",
      benefit: "Campaigns built for maximum ROI.",
      link: "#",
    },
    {
      title: "Compelling Ad Copywriting",
      description:
        "Ads written to resonate with local customers and drive action.",
      benefit: "Higher click-through rates and engagement.",
      link: "#",
    },
    {
      title: "Landing Page Optimization",
      description:
        "SEO-friendly, conversion-focused designs built to capture leads.",
      benefit: "More conversions from your ad traffic.",
      link: "#",
    },
    {
      title: "Conversion Tracking & Analytics",
      description:
        "Track every click, call, and form with transparent reporting.",
      benefit: "Complete visibility on ROI.",
      link: "#",
    },
    {
      title: "Bid & Budget Management",
      description:
        "Daily adjustments to maximize ROI and minimize waste.",
      benefit: "Optimized spend and lower cost-per-lead.",
      link: "#",
    },
    {
      title: "Continuous Optimization",
      description:
        "A/B testing, keyword pruning, and campaign refinement.",
      benefit: "Better performance over time.",
      link: "#",
    },
  ];

  return (
    <section className="relative py-14 md:py-24 bg-black text-gray-100" id="google-ads-services">
      {/* Background Blobs */}
      <div className="absolute top-32 -left-20 w-[500px] h-[500px] bg-blue-500 rounded-full opacity-30 blur-[190px] pointer-events-none"></div>
      <div className="absolute bottom-52 right-0 w-[500px] h-[500px] bg-blue-500 rounded-full opacity-30 blur-[190px] pointer-events-none"></div>

      <div>
        {/* Section Heading */}
        <div className="max-w-[90%] md:max-w-[80%] mx-auto mb-10 text-center">
          <h2 className="text-white text-3xl lg:text-6xl font-inter mb-3 font-semibold">
            Smarter Campaigns That <span className="text-blue-500">Deliver Real Results</span>
          </h2>
          <p className="text-gray-100 text-base md:text-[17px] tracking-wider mt-4 max-w-4xl mx-auto">
            Bixeltek provides complete Google Ads management in Vancouver — from setup to optimization — ensuring your budget works harder for better results.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 max-w-[75%] mx-auto mt-10 gap-0">
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
              <p className="text-blue-400 group-hover:text-white group-hover:font-bold text-xs italic text-center mb-3">
                Benefit: {service.benefit}
              </p>
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
