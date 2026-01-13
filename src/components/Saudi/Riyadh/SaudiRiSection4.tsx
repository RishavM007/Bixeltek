
"use client";
import React from "react";
import Link from "next/link";

export default function DigitalMarketingServicesRiyadh() {
  const services = [
    {
      title: "Google Ads Management",
      description:
        "Instant visibility, high-intent targeting, and smarter bidding. We design campaigns that capture Arabic and English search audiences in Riyadh with measurable lead tracking.",
      link: "/saudi-arabia/riyadh/google-ads-management",
    },
    {
      title: "SEO & Local Search Optimization",
      description:
        "From technical SEO to topical mapping and Google Business optimization — we build bilingual authority so your brand ranks where it matters.",
      link: "/saudi-arabia/riyadh/seo-services",
    },
    {
      title: "Web Design & Development",
      description:
        "Fast, conversion-optimized websites built on Next.js or WordPress. Every site is SEO-ready, mobile-first, and tracked for conversions.",
      link: "/saudi-arabia/riyadh/web-design-development",
    },
    {
      title: "Social Media Marketing",
      description:
        "Storytelling that converts — creative campaigns on Meta, LinkedIn, and TikTok designed for engagement and lead generation.",
      link: "/saudi-arabia/riyadh/social-media-marketing",
    },
    {
      title: "Branding & Creative Strategy",
      description:
        "From logos to corporate identity and ad creatives, we craft brand visuals that inspire trust and recognition.",
      link: "/saudi-arabia/riyadh/branding-and-creative",
    },
    {
      title: "Analytics & Conversion Optimization",
      description:
        "GA4 dashboards, funnel tracking, and CRO experiments that turn data into decisions — and decisions into revenue.",
      link: "/saudi-arabia/riyadh/analytics-and-cro",
    },
  ];

  return (
    <section
      className="relative py-14 md:py-24 bg-[#fffdf5] text-gray-900"
      id="digital-marketing-services"
    >
      {/* Background Glows */}
      <div className="absolute top-32 -left-20 w-[500px] h-[500px] bg-green-500 rounded-full opacity-30 blur-[190px] pointer-events-none"></div>
      <div className="absolute bottom-52 right-0 w-[500px] h-[500px] bg-green-500 rounded-full opacity-30 blur-[190px] pointer-events-none"></div>

      <div>
        {/* Heading + Intro */}
        <div className="max-w-[90%] md:max-w-[80%] mx-auto mb-10 text-center">
          <h2 className="text-black text-3xl lg:text-6xl font-inter mb-3 font-semibold">
             Comprehensive Digital Marketing Services <br /> 
            <span className="text-yellow-500"> for Riyadh Businesses</span>
          </h2>
          <p className="text-gray-900 text-base md:text-[17px] tracking-wider mt-4 max-w-4xl mx-auto leading-relaxed">
            Our team manages your entire digital ecosystem — from campaign strategy and creative design to analytics and reporting. We help Riyadh’s ambitious brands stay visible, profitable, and ahead of their competitors.

          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 max-w-[75%] mx-auto mt-10 gap-0">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative w-full h-96 group border border-gray-500 bg-white/10 hover:bg-gradient-to-tr from-black via-green-700 to-green-500 transition-all duration-300 flex flex-col justify-center items-center p-10 md:p-14 rounded-lg"
            >
              <h3 className="text-black group-hover:text-white text-2xl font-bold text-center mb-2">
                {service.title}
              </h3>
              <p className="text-gray-900 group-hover:text-white text-base text-center mb-3 leading-relaxed">
                {service.description}
              </p>
              <Link href={service.link}>
                <p className="text-green-500 group-hover:text-white text-sm mt-2 hover:font-semibold transition-all">
                  Discover More
                </p>
              </Link>

              {/* Decorative Plus Icons */}
              {index % 4 === 0 && (
                <span className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 text-black text-3xl z-30">
                  <i className="fa fa-plus text-2xl" aria-hidden="true"></i>
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
