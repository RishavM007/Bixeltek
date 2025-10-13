"use client";

import React from "react";
import Link from "next/link";

export default function SocialMediaServicesEasternProvince() {
    const services = [
        {
            title: "Social Media Strategy Development",
            description:
                "Tailored content calendars and campaign structures crafted around your business goals for maximum engagement.",
            link: "#",
        },
        {
            title: "Creative Content Production",
            description:
                "High-quality posts, reels, and videos designed to tell your brand story and drive audience interaction consistently.",
            link: "#",
        },
        {
            title: "Paid Advertising Campaigns",
            description:
                "Meta, Instagram, and LinkedIn ad campaigns optimized for high ROI with smart targeting and engaging creatives.",
            link: "#",
        },
        {
            title: "Community Management",
            description:
                "Active brand voice control with real-time responses to strengthen relationships and boost audience trust.",
            link: "#",
        },
        {
            title: "Influencer Collaborations",
            description:
                "Partnering with local creators to increase reach, credibility, and engagement within your target market.",
            link: "#",
        },
        {
            title: "Performance Reports & Analytics",
            description:
                "Detailed monthly reports with actionable insights on campaign performance, growth, and ROI optimization.",
            link: "#",
        },
    ];

    return (
        <section className="relative py-14 md:py-24 bg-black text-gray-100" id="social-media-services">
            <div>
                {/* Heading + Intro */}
                <div className="max-w-[90%] md:max-w-[80%] mx-auto mb-10 text-center">
                    <h2 className="text-white text-3xl lg:text-5xl font-inter mb-3 font-semibold">
                        Comprehensive <span className="text-yellow-500">Social Media Services</span> for Businesses in the Eastern Province
                    </h2>
                    <p className="text-gray-100 text-base md:text-[17px] tracking-wider mt-4 max-w-4xl mx-auto leading-relaxed">
                        We create campaigns that work in both English and Arabic, built for Saudi market dynamics and cultural nuances. Your audience is online 6+ hours daily — we make sure your brand becomes part of their daily feed.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 max-w-[75%] mx-auto mt-10 gap-0">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="relative w-full group border border-gray-800 bg-black/10 hover:bg-yellow-700/10 transition-all duration-300 flex flex-col justify-between items-center p-10 md:p-14 rounded-sm text-center"
                        >
                            <h3 className="text-white text-2xl font-bold mb-4">{service.title}</h3>
                            <p className="text-gray-300 text-base mb-6 leading-relaxed">{service.description}</p>
                            <Link href={service.link}>
                                <p className="text-green-500 group-hover:text-white text-sm mt-2 hover:font-semibold">
                                    Discover More
                                </p>
                            </Link>
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
