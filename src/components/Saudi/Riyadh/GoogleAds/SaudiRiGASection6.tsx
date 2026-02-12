"use client";

import React from "react";
import Link from "next/link";

export default function GoogleAdsServicesRiyadh() {
  const services = [
    {
      title: "Search Campaigns",
      description:
        "Capture ready-to-convert customers actively searching for your services in Riyadh. Every ad group is intent-driven, keyword-mapped, and A/B tested for maximum ROI.",
      link: "/riyadh/google-ads/search-campaigns",
    },
    {
      title: "Performance Max (PMax)",
      description:
        "Leverage Google’s AI to target across Search, YouTube, and Display — all from one smart campaign. Perfect for Saudi businesses aiming for visibility at scale.",
      link: "/riyadh/google-ads/performance-max",
    },
    {
      title: "Display Campaigns",
      description:
        "Stay visible across top Arabic and English websites. Our design team creates compelling display ads that build awareness and retarget high-value users across Riyadh and beyond.",
      link: "/riyadh/google-ads/display-campaigns",
    },
    {
      title: "YouTube Ads",
      description:
        "Turn storytelling into conversions. We craft localized YouTube campaigns with powerful hooks, precise targeting, and high-retention video sequences tailored to Saudi audiences.",
      link: "/riyadh/google-ads/youtube-ads",
    },
    {
      title: "Shopping Ads (E-commerce)",
      description:
        "Dominate e-commerce searches with optimized product feeds, custom labels, and ROAS-driven structures. Ideal for Saudi retailers scaling on Google Shopping.",
      link: "/riyadh/google-ads/shopping-ads",
    },
    {
      title: "Remarketing Campaigns",
      description:
        "Re-engage past visitors with dynamic remarketing. From cart abandoners to returning customers — we personalize every message to drive higher lifetime value.",
      link: "/riyadh/google-ads/remarketing",
    },
  ];

  return (
    <section
      className="relative px-6 py-14 lg:py-24 bg-[#fffdf5] text-black"
      id="google-ads-services-riyadh"
    >
      {/* Background Glows */}
      <div className="absolute top-32 -left-20 w-[500px] h-[500px] bg-green-500 rounded-full opacity-30 blur-[190px] pointer-events-none"></div>
      <div className="absolute bottom-52 right-0 w-[500px] h-[500px] bg-green-500 rounded-full opacity-30 blur-[190px] pointer-events-none"></div>

      <div>
        {/* Heading + Intro */}
        <div className="lg:max-w-[80%] mx-auto mb-10 text-center">
          <h2 className="text-black text-3xl md:text-6xl font-inter mb-3 font-semibold">
            Full-Spectrum{" "}
            <span className="text-yellow-500">Google Ads Management for Riyadh Businesses</span>
          </h2>
          <p className="text-gray-900 text-base md:text-[17px] tracking-wider mt-4 max-w-4xl mx-auto leading-relaxed">
            We specialize in multi-channel Google Ads management crafted for Saudi Arabia’s
            evolving digital ecosystem. Our Riyadh team combines AI automation, cultural insight,
            and precise analytics to deliver campaigns that attract, convert, and scale profitably.
            Every campaign is bilingual, conversion-tracked, and compliant with Saudi advertising
            regulations — ensuring performance with integrity.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:max-w-[75%] mx-auto mt-10 gap-0">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative w-full h-96 group border border-gray-500 bg-white hover:bg-gradient-to-br hover:from-black hover:via-green-600 hover:to-green-500 transition-all duration-300 flex flex-col justify-center items-center p-10 md:p-14 rounded-lg"
            >
              <h3 className="text-black text-2xl group-hover:text-white font-bold text-center mb-2">
                {service.title}
              </h3>
              <p className="text-gray-900 text-sm group-hover:text-white text-center mb-3 leading-relaxed">
                {service.description}
              </p>
              <Link href={service.link}>
                <p className="text-green-700 group-hover:text-white text-sm mt-2 hover:font-semibold transition-all">
                  Discover More
                </p>
              </Link>

              {/* Decorative Plus Icons */}
              {index % 4 === 0 && (
                <span className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 text-gray-700 text-3xl z-30">
                  <i className="fa fa-plus text-2xl" aria-hidden="true"></i>
                </span>
              )}
              {(index % 4 === 1 || index === 0 || index === 2) && (
                <span className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 text-gray-700 text-3xl z-30">
                  <i className="fa fa-plus text-2xl" aria-hidden="true"></i>
                </span>
              )}
              {(index % 4 === 2 || index === 0 || index === 3) && (
                <span className="absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2 text-gray-700 text-3xl z-30">
                  <i className="fa fa-plus text-2xl" aria-hidden="true"></i>
                </span>
              )}
              {(index % 4 === 3 || index === 5) && (
                <span className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 text-gray-700 text-3xl z-30">
                  <i className="fa fa-plus text-2xl" aria-hidden="true"></i>
                </span>
              )}
            </div>
          ))}
        </div>

        {/* Closing Paragraph */}
        <p className="text-gray-900 text-center mt-16 text-base md:text-lg max-w-4xl mx-auto leading-relaxed">
          Our approach blends creative storytelling with analytical precision — transforming ad
          spend into measurable growth. Whether you’re launching a startup or scaling an enterprise,
          our Riyadh Google Ads specialists ensure your campaigns perform with{" "}
          <span className="text-yellow-400 font-medium">clarity, consistency, and confidence.</span>
        </p>
      </div>
    </section>
  );
}
