"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Check } from "lucide-react";
import Image from "next/image";

import keywordImg from "@/assets/Metadata-Change-Alerts.png";
import onpageImg from "@/assets/Metadata-Change-Alerts.png";
import localImg from "@/assets/Metadata-Change-Alerts.png";
import technicalImg from "@/assets/Metadata-Change-Alerts.png";

gsap.registerPlugin(ScrollTrigger);

export default function PetTraditionalSEO() {
  const sectionRef = useRef(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  const cards = [
    {
      id: 1,
      tag: "1.1 Keyword & Intent Research",
      title: "Understanding What Pet Owners Search For",
      desc: "We identify the exact phrases pet owners use at every stage — from quick grooming searches to pet food buying decisions — ensuring your brand appears when intent is highest.",
      features: [
        "“Pet shop near me” — local discovery keyword",
        "“Dog grooming in [city]” — service-based intent",
        "“Pet boarding with CCTV” — trust-driven search",
        "“Natural cat food supplier” — product-driven intent",
        "Each keyword is mapped to purchase or inquiry pages to maximize conversions.",
      ],
      image: keywordImg,
      color: {
        tag: "bg-blue-600",
        icon: "text-blue-600",
        gradient: "bg-gradient-to-tr from-blue-50 to-gray-100",
      },
    },
    {
      id: 2,
      tag: "1.2 On-Page SEO for Pet Businesses",
      title: "Structuring for Visibility and Engagement",
      desc: "We optimize your pages to appeal to both pet owners and algorithms — blending emotional triggers with technical clarity for higher rankings and conversions.",
      features: [
        "Optimized titles, meta descriptions, and service headers.",
        "Pet-focused alt text and keyword-rich image metadata.",
        "Localized CTAs and service descriptions for each city.",
        "Internal linking between categories (Shop → Grooming → Boarding).",
        "Schema markup for services, reviews, and products.",
      ],
      image: onpageImg,
      color: {
        tag: "bg-green-600",
        icon: "text-green-600",
        gradient: "bg-gradient-to-tr from-green-50 to-gray-100",
      },
    },
    {
      id: 3,
      tag: "1.3 Local SEO",
      title: "Dominating Google’s Local Map Pack",
      desc: "We make your grooming salon, pet shop, or boarding center appear at the top of local search results when nearby pet parents are searching for you.",
      features: [
        "Google Business Profile optimization with pet-friendly content.",
        "Review and Q&A management for trust and engagement.",
        "Geo-tagged photos, local schema, and NAP consistency.",
        "City-wise landing pages for multi-location pet businesses.",
        "Citations and local backlinks to strengthen area relevance.",
      ],
      image: localImg,
      color: {
        tag: "bg-purple-600",
        icon: "text-purple-600",
        gradient: "bg-gradient-to-tr from-purple-50 to-gray-100",
      },
    },
    {
      id: 4,
      tag: "1.4 Technical SEO",
      title: "Fixing What Slows You Down",
      desc: "A poorly optimized website can lose both traffic and trust. We fix all technical roadblocks so your pet business site is fast, crawlable, and conversion-ready.",
      features: [
        "Page speed optimization and Core Web Vitals improvement.",
        "Crawl errors and mobile indexing fixes.",
        "Product schema for eCommerce pet stores.",
        "HTTPS security, canonical tags, and clean site structure.",
        "Ensuring smooth navigation across all pet categories and services.",
      ],
      image: technicalImg,
      color: {
        tag: "bg-orange-600",
        icon: "text-orange-600",
        gradient: "bg-gradient-to-tr from-orange-50 to-gray-100",
      },
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card) => {
        ScrollTrigger.create({
          trigger: card,
          start: "center center",
          endTrigger: sectionRef.current,
          end: "bottom top",
          pin: true,
          pinSpacing: false,
          scrub: true,
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative flex flex-col items-center justify-start text-gray-900 py-32 bg-white"
    >
      <div className="max-w-6xl mx-auto text-center mb-24">
        <h2 className="text-3xl md:text-5xl font-medium text-gray-900 mb-4">
          Traditional <span className="text-amber-600">SEO</span> for the Pet Industry
        </h2>
        <p className="text-gray-700 text-lg max-w-5xl mx-auto leading-relaxed">
          Traditional SEO builds your visibility and authority — helping your pet business
          earn clicks organically, not through ads. Bixeltek’s SEO systems combine proven
          strategies with pet-market insights to make your brand the alpha in every search result.
        </p>
      </div>

      <div className="stacking w-full flex flex-col items-center">
        {cards.map((card, index) => {
          const isReversed = index % 2 !== 0;

          return (
            <div
              key={card.id}
              ref={(el : any) => (cardsRef.current[index] = el)}
              className={`stacking__card relative md:w-[90%] w-[95%] mx-auto flex flex-col ${
                isReversed ? "md:flex-row-reverse" : "md:flex-row"
              } justify-between items-center rounded-3xl backdrop-blur-md shadow-xl p-10 md:p-14 mb-[45vh] min-h-[650px] border border-gray-200 ${card.color.gradient} transition-transform duration-500 hover:scale-[1.015]`}
            >
              {/* Text Section */}
              <div className="md:w-1/2 space-y-5">
                <span
                  className={`inline-block ${card.color.tag} text-white text-sm font-semibold px-4 py-1 rounded-full shadow-md`}
                >
                  {card.tag}
                </span>
                <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
                  {card.title}
                </h2>
                <p className="text-gray-800 mt-4 text-lg leading-relaxed">
                  {card.desc}
                </p>

                <div className="mt-6 space-y-4">
                  {card.features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <Check
                        className={`w-5 h-5 ${card.color.icon} mt-[2px] flex-shrink-0`}
                      />
                      <p className="text-gray-700 text-base leading-relaxed">
                        {feat}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Image Section */}
              <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center h-full">
                <div className="w-full h-full rounded-2xl overflow-hidden relative">
                  <Image
                    src={card.image}
                    alt={card.title}
                    className="object-cover object-center w-full h-full"
                    fill
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
