"use client";

import React from "react";
import Link from "next/link";

export default function SocialMediaServicesVancouver() {
  const services = [
    {
      title: "Meta Ads (Facebook & Instagram)",
      description:
        "Run highly targeted Meta campaigns that drive real conversions — not just clicks. From creative storytelling to audience segmentation, we optimize every ad for ROI and brand growth.",
      link: "#",
    },
    {
      title: "Content Strategy & Management",
      description:
        "We handle everything from content planning to posting — designing scroll-stopping visuals, writing persuasive captions, and aligning each post with your brand tone and marketing funnel.",
      link: "#",
    },
    {
      title: "Funnel & Remarketing Campaigns",
      description:
        "Turn missed opportunities into loyal customers with smart remarketing campaigns. We re-engage visitors and past engagers using data-driven funnel strategies that convert interest into action.",
      link: "#",
    },
    {
      title: "Paid Video Campaigns (YouTube & Reels)",
      description:
        "Use storytelling and motion to grab attention where it matters. From Reels to YouTube Ads, our paid video campaigns are built to inspire action and increase your reach dramatically.",
      link: "#",
    },
    {
      title: "Social Media Branding & Design",
      description:
        "Every pixel tells your story. We craft cohesive visuals, post templates, and brand kits that ensure your presence across all platforms looks consistent, modern, and memorable.",
      link: "#",
    },
    {
      title: "Analytics, Insights & Reporting",
      description:
        "We don’t guess — we measure. Get transparent insights through real-time dashboards and monthly performance reports that show exactly how your campaigns are performing.",
      link: "#",
    },
  ];

  return (
    <section className="relative py-16 md:py-24 bg-black text-gray-100" id="social-media-services">
      {/* Background Blobs */}
      <div className="absolute top-20 -left-20 w-[450px] h-[450px] bg-blue-600 rounded-full opacity-30 blur-[180px] pointer-events-none"></div>
      <div className="absolute bottom-24 right-0 w-[450px] h-[450px] bg-purple-600 rounded-full opacity-30 blur-[180px] pointer-events-none"></div>

      {/* Section Heading */}
      <div className="max-w-[90%] md:max-w-[80%] mx-auto mb-10 text-center">
        <h2 className="text-white text-3xl lg:text-6xl font-inter mb-3 font-semibold">
          Everything You Need to <span className="text-blue-500">Grow Through Social Media</span>
        </h2>
        <p className="text-gray-100 text-base md:text-[17px] tracking-wider mt-4 max-w-4xl mx-auto">
          From organic content planning to high-performing Meta Ads, we manage every aspect of your
          social media presence — focusing on leads, brand authority, and measurable revenue growth.
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
            <p className="text-gray-300 text-sm text-center mb-3 leading-relaxed">
              {service.description}
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
    </section>
  );
}
