"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

import wordpressImg from "@/assets/seo-packages.png";
import shopifyImg from "@/assets/seo-packages.png";
import headlessImg from "@/assets/seo-packages.png";

gsap.registerPlugin(ScrollTrigger);

export default function CMSStackedCards() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  const cards = [
    {
      id: 1,
      title: "WordPress Development — Flexible, Powerful, SEO-Driven",
      desc: `WordPress remains the most flexible and scalable CMS in the world — but only when engineered properly.
We develop custom-coded, marketing-ready WordPress ecosystems that go beyond themes.`,
      features: [
        "Gutenberg + React-based custom blocks for modular editing.",
        "WooCommerce setups with structured product data, GTINs, and analytics pipelines.",
        "Multisite & bilingual CMS builds (English + Arabic, English + French).",
        "Headless WordPress with Next.js front-end for instant rendering.",
        "Advanced caching, CDN, and schema integration for SEO strength.",
      ],
      idealFor: [
        "Content-heavy brands.",
        "B2B enterprises with multilingual markets.",
        "SEO-focused service providers.",
        "Publishers and educational institutions.",
      ],
      closing:
        "WordPress done right delivers enterprise-grade performance and full marketing control.",
      image: wordpressImg,
    },
    {
      id: 2,
      title: "Shopify Development — Conversion-Centric E-Commerce Systems",
      desc: `Shopify makes selling easy. We make it strategic.
Our Shopify solutions are optimized for high-conversion e-commerce performance across regions and channels.`,
      features: [
        "Custom Liquid themes and Hydrogen-based Headless builds.",
        "Shopify Plus for B2B with bulk pricing and inventory sync.",
        "Integration with Google Shopping, Meta, and TikTok.",
        "Localization for GCC (Arabic UI + PayTabs, HyperPay gateways).",
        "Performance optimization for global audiences.",
      ],
      idealFor: [
        "D2C and retail brands expanding internationally.",
        "Fast-growth e-commerce startups.",
        "Wholesale and distributor networks.",
      ],
      closing:
        "Every store we deliver is CRO-optimized, analytics-connected, and SEO-compatible.",
      image: shopifyImg,
    },
    {
      id: 3,
      title: "Headless CMS Development — Built for Scale, Speed & Future Growth",
      desc: `Headless CMS is where marketing flexibility meets engineering excellence.
By separating the backend (content) from the frontend (experience), we deliver instant-loading, omnichannel-ready digital systems.`,
      features: [
        "WordPress Headless (GraphQL / REST APIs).",
        "Shopify Hydrogen + Storefront API.",
        "Strapi, Sanity, or Ghost for enterprise CMS.",
        "Next.js and React-based frontends for SEO + performance.",
      ],
      idealFor: [
        "Instant page loads and optimized Core Web Vitals.",
        "Multi-platform content delivery (web, app, PWA).",
        "Full creative control, zero theme limitations.",
        "Scalable for multi-brand, multi-region setups.",
      ],
      closing:
        "For global businesses, Headless CMS is how you grow faster without sacrificing performance.",
      image: headlessImg,
    },
  ];

  useEffect(() => {
    const isMobile = window.innerWidth < 768;

  // Skip GSAP stacking on mobile — use CSS only
  if (isMobile) return;
    const spacer = 100; // gap between stacked cards
    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card, index) => {
        ScrollTrigger.create({
          trigger: card,
          start: `center-=${index * spacer} center`,
          endTrigger: sectionRef.current,
          end: "bottom top",
          pin: true,
          pinSpacing: false,
          scrub: true,
        });

        const scaleValue = 0.95 + index * 0.03;
        gsap.to(card, {
          scrollTrigger: {
            trigger: card,
            start: "top center",
            end: "bottom center",
            scrub: true,
          },
          scale: scaleValue,
          ease: "none",
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative flex flex-col items-center justify-start  text-white pb-10 md:py-20"
    >
      <div className="stacking w-full flex flex-col items-center">
        {cards.map((card, index) => {
          const gradients = [
            "bg-gradient-to-br from-blue-600/90 via-blue-800/80 to-indigo-900/80 border-blue-600",
            "bg-gradient-to-br from-red-600/90 via-pink-700/80 to-rose-900/80 border-red-600",
            "bg-gradient-to-br from-yellow-500/90 via-amber-600/80 to-orange-800/80 border-yellow-500",
          ];
          const gradientClass = gradients[index % gradients.length];

          return (
            <div
              key={card.id}
              ref={(el) => {
                if (el) cardsRef.current[index] = el;
              }}
              className={`stacking__card relative lg:w-[85%] w-[95%] mx-auto flex flex-col lg:flex-row justify-between items-center rounded-3xl backdrop-blur-sm shadow-2xl p-8 lg:p-12 mb-8 border ${gradientClass} transition-transform duration-500`}
            >
              {/* Text Section */}
              <div className="lg:w-1/2 space-y-4">
                <h2 className="text-2xl md:text-3xl font-medium text-white">
                  {card.title}
                </h2>
                <p className="text-gray-200 leading-relaxed">{card.desc}</p>

                <div className="mt-4">
                  <h4 className="font-semibold text-white/80 mb-2">Our Capabilities:</h4>
                  <ul className="text-gray-100 text-sm list-disc list-inside space-y-1">
                    {card.features.map((feat, i) => (
                      <li key={i}>{feat}</li>
                    ))}
                  </ul>
                </div>

                <div className="mt-4">
                  <h4 className="font-semibold text-white/80 mb-2">Ideal For:</h4>
                  <ul className="text-gray-100 text-sm list-disc list-inside space-y-1">
                    {card.idealFor.map((feat, i) => (
                      <li key={i}>{feat}</li>
                    ))}
                  </ul>
                </div>

                <p className="mt-4 text-gray-300 italic">{card.closing}</p>
              </div>

              {/* Image Section */}
              <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
                <Image
                  src={card.image}
                  alt={card.title}
                  width={450}
                  height={350}
                  className="rounded-lg object-contain drop-shadow-lg"
                />
              </div>
            </div>
          );
        })}

      </div>
        {/* <div className="h-[90vh]"></div> */}
    </section>
  );
}
