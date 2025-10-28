'use client';
import React from "react";
import Image from "next/image";
import hybridImg from "@/assets/feature-image-1-dark.png";
import headlessImg from "@/assets/feature-image-2-dark.png";
import customImg from "@/assets/feature-image-3-dark.png";

export default function CMSFlexibilitySection() {
    const services = [
        "Strategy and Planning",
        "Network Design & Management",
        "Strategic IT Consulting",
        "Fast Response Time",
        "User-Friendly Tech Support",
        "Advanced Cybersecurity Protection",
    ];

    const cards = [
        {
            heading: "Hybrid CMS Builds",
            description:
                "We connect WordPress or Shopify CMS backends to custom React or Next.js frontends. This allows marketers to keep the CMS interface they love while developers achieve instant-loading, SEO-optimized performance. Use-cases: corporate blogs, marketing sites, regional landing pages, or multi-brand setups needing centralized control.",
            image: hybridImg,
            reverse: false,
        },
        {
            heading: "Headless CMS Builds",
            description:
                "For content-rich enterprises, we decouple backend and frontend entirely — integrating WordPress, Strapi, or Sanity via GraphQL or REST APIs. This architecture delivers SSG/ISR speed, cleaner code, and channel-agnostic publishing (web, app, kiosk, even smart devices). Use-cases: multi-region brands, e-commerce with complex product logic, education networks, or data-heavy knowledge hubs.",
            image: headlessImg,
            reverse: true,
        },
        {
            heading: "Flexibility Without Friction",
            description:
                "Whether fully custom or hybrid, our goal is the same: flexibility without friction. Bixeltek empowers businesses with CMS familiarity and engineering freedom to scale without limits.",
            image: customImg,
            reverse: false,
        },
    ];

    return (
        <section className="relative w-full bg-black text-white py-24 px-6 md:px-12">
            <div className="max-w-[90%] mx-auto flex flex-col gap-16">
                <h2 className="text-3xl md:text-6xl font-medium text-center mb-12">
                    When CMS Flexibility Meets <br /> <span className="text-blue-500">Engineering Freedom</span>
                </h2>

                {/* Flex row for all cards */}
                <div className="flex flex-col md:flex-row gap-8">
                    {cards.map((card, idx) => (
                        <div
                            key={idx}
                            className={`flex flex-col justify-between p-10 rounded-3xl bg-neutral-900 items-center gap-10 md:w-1/3 ${card.reverse ? "md:flex-col-reverse" : ""
                                }`}
                        >
                            {/* Text */}
                            <div className="text-center md:text-left">
                                <h3 className="text-3xl font-medium mb-2">{card.heading}</h3>
                                <p className="text-gray-300 text-sm md:text-base">{card.description}</p>
                            </div>

                            {/* Image */}
                            <div className="w-full flex justify-center">
                                <Image
                                    src={card.image}
                                    alt={card.heading}
                                    className="rounded-xl w-full h-auto"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="max-w-5xl mx-auto flex mt-10 flex-wrap gap-4 justify-center">
                {services.map((service, idx) => (
                    <div
                        key={idx}
                        className="flex items-center gap-2 border border-gray-800 rounded-full px-4 py-2 text-sm md:text-base hover:bg-gray-800 transition"
                    >
                        <span className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></span>
                        <span>{service}</span>
                    </div>
                ))}
            </div>

        </section>
    );
}
