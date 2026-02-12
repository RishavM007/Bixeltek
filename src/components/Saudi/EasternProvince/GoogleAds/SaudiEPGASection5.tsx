"use client";

import React from "react";
import Link from "next/link";

export default function GoogleAdsCampaignTypesSaudi() {
  const campaigns = [
    {
      title: "Search Campaigns",
      description:
        "Capture demand instantly with high-intent keywords that drive leads, calls, and form submissions — the most direct path to ROI.",
      link: "#",
    },
    {
      title: "Display Campaigns",
      description:
        "Build brand awareness and stay top-of-mind with visual ads across millions of websites, targeting audiences who’ve already shown interest.",
      link: "#",
    },
    {
      title: "Shopping Ads",
      description:
        "Showcase your products directly on Google Search with optimized feeds, pricing, and imagery designed for maximum e-commerce performance.",
      link: "#",
    },
    {
      title: "Performance Max Campaigns",
      description:
        "Leverage Google’s AI to reach customers across Search, YouTube, Gmail, Maps, and Display — all from one powerful, automated campaign.",
      link: "#",
    },
    {
      title: "Local Service Ads",
      description:
        "Ideal for service-based businesses like clinics, cleaning, and maintenance — reach customers in Khobar, Dammam, or nearby areas who are ready to book now.",
      link: "#",
    },
    {
      title: "Remarketing & Retargeting",
      description:
        "Re-engage past visitors with tailored messaging that converts interest into action — increasing your conversion rates and lowering cost per lead.",
      link: "#",
    },
  ];

  return (
    <section
      className="relative px-6 py-16 lg:py-20 bg-[#fffdf5] text-gray-950"
      id="google-ads-campaigns"
    >
      {/* Background Glows */}
      <div className="absolute top-32 -left-20 w-[500px] h-[500px] bg-green-500 rounded-full opacity-30 blur-[190px] pointer-events-none"></div>
      <div className="absolute bottom-52 right-0 w-[500px] h-[500px] bg-green-500 rounded-full opacity-30 blur-[190px] pointer-events-none"></div>

      <div>
        {/* Heading + Copy */}
        <div className="lg:max-w-[85%] mx-auto mb-10 text-center">
          <h2 className="text-black text-3xl md:text-6xl font-inter mb-3 font-semibold">
            Comprehensive Google Ads Campaigns{" "}
            <span className="text-yellow-600">for Every Business Model</span>
          </h2>
          <p className="text-gray-950 text-base md:text-[17px] tracking-wider mt-4 max-w-4xl mx-auto leading-relaxed">
            Whether you’re a local service provider or an enterprise brand in
            Saudi Arabia, our team manages every major Google Ads format with
            precision, strategy, and measurable ROI.
          </p>
        </div>

        {/* Campaigns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:max-w-[75%] mx-auto mt-10 gap-0">
          {campaigns.map((campaign, index) => (
            <div
              key={index}
              className="relative w-full h-96 group border border-gray-900/25 bg-[#fffdf571] hover:bg-gradient-to-br hover:from-black hover:via-green-700 hover:to-green-500 transition-all duration-300 flex flex-col justify-center items-center p-10 md:p-14"
            >
              <h3 className="text-black group-hover:text-white text-2xl font-bold text-center mb-2">
                {campaign.title}
              </h3>
              <p className="text-gray-950 group-hover:text-white text-sm text-center mb-3 leading-relaxed">
                {campaign.description}
              </p>
              <Link href={campaign.link}>
                <p className="text-green-800 group-hover:text-white text-base mt-2 hover:font-semibold transition-all">
                  Learn More
                </p>
              </Link>
              {/* Decorative Plus Icons */}
              {/* {index % 4 === 0 && (
                <span className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 text-gray-300 text-3xl z-30">
                  <i className="fa fa-plus text-black text-2xl" aria-hidden="true"></i>
                </span>
              )}
              {(index % 4 === 1 || index === 0 || index === 2) && (
                <span className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 text-gray-300 text-3xl z-30">
                  <i className="fa fa-plus text-black text-2xl" aria-hidden="true"></i>
                </span>
              )}
              {(index % 4 === 2 || index === 0 || index === 3) && (
                <span className="absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2 text-gray-300 text-3xl z-30">
                  <i className="fa fa-plus text-black text-2xl" aria-hidden="true"></i>
                </span>
              )}
              {(index % 4 === 3 || index === 5) && (
                <span className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 text-gray-300 text-3xl z-30">
                  <i className="fa fa-plus text-black text-2xl" aria-hidden="true"></i>
                </span>
              )} */}
            </div>
          ))}
        </div>

        {/* Supporting Line */}
        <p className="text-gray-900 mt-12 max-w-[80%] md:max-w-[50%] mx-auto text-center font-poppins leading-relaxed">
          Every campaign we run is supported by conversion-optimized landing
          pages, real-time analytics, and transparent ROI tracking — ensuring
          every Riyal you spend drives measurable growth.
        </p>
      </div>
    </section>
  );
}
