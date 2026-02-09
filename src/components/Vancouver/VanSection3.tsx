"use client";

import React from "react";
import Link from "next/link";

export default function ServicesVancouver() {
  const services = [
    {
      title: "Google Ads Management",
      description:
        "Most businesses waste money on irrelevant clicks. We build campaigns that cut wasted spend and deliver qualified leads.",
      benefit: "More leads at a lower cost per acquisition.",
      link: "vancouver/google-ads-management",
    },
    {
      title: "SEO Services",
      description:
        "Ranking on Google is critical for Vancouver businesses. Our SEO strategies cover local, national, and AI-driven visibility.",
      benefit: "Sustainable traffic and consistent organic leads.",
      link: "vancouver/seo-services",
    },
    {
      title: "Web Design & Development",
      description:
        "An outdated site costs you trust and conversions. We design SEO-ready, mobile-first websites that convert.",
      benefit: "Stronger brand presence and higher conversions.",
      link: "vancouver/web-design-services",
    },
    {
      title: "Social Media Marketing",
      description:
        "Posting randomly doesn’t work. We run organic + paid campaigns that boost engagement and generate leads.",
      benefit: "Build awareness and connect with your audience.",
      link: "vancouver/social-media-marketing",
    },
    {
      title: "Analytics & CRO",
      description:
        "Without data, you’re guessing. We set up full tracking, analyze performance, and optimize for ROI.",
      benefit: "Smarter decisions, higher ROI.",
      link: "#",
    },
    {
      title: "Branding & Graphic Design",
      description:
        "Weak branding creates confusion. We design cohesive brand assets that elevate your business.",
      benefit: "Professional identity that stands out.",
      link: "#",
    },
  ];

  return (
    <section className="relative py-10 md:py-24" id="services">
      {/* Background Blobs */}
      <div className="absolute top-32 -left-20 w-[500px] h-[500px] bg-blue-500 rounded-full opacity-30 blur-[190px] pointer-events-none"></div>
      <div className="absolute bottom-52 right-0 w-[500px] h-[500px] bg-blue-500 rounded-full opacity-30 blur-[190px] pointer-events-none"></div>

      <div>
        {/* Section Heading */}
        <div className="max-w-[90%] lg:max-w-[80%] mx-auto mb-5 text-center">
          <h2 className="text-white text-3xl md:text-6xl max-w-7xl mx-auto font-inter mb-3 font-semibold">
            Digital Marketing Services That{" "}
            <span className="text-blue-500">Solve Business Challenges</span>
          </h2>
          <p className="text-gray-100 text-base md:text-[17px] tracking-wider mt-4 max-w-4xl mx-auto">
            We deliver end-to-end digital marketing services to help Vancouver
            businesses attract, convert, and scale.
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