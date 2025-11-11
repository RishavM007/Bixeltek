"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Check } from "lucide-react";
import Image from "next/image";
import keywordImg from "@/assets/Dentist Near Me Search Dashboard.png";
import onpageImg from "@/assets/Delmain-dental-seo-case-study.webp";
import localImg from "@/assets/Digital-Marketing-for-Dentists-2.png";
import technicalImg from "@/assets/All_SEO_data_sources_1d5f013db2.webp";

gsap.registerPlugin(ScrollTrigger);



export default function DentalTraditionalSEO() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  const cards = [
    {
      id: 1,
      tag: "1.1 Keyword Strategy",
      title: "Targeting the Right Intent",
      desc: "We identify high-intent 'money keywords' that reflect actual treatment demand, ensuring your website ranks when patients are ready to act.",
      features: [
        '“Root canal specialist near me” — local treatment intent',
        '“Dental implant cost in [city]” — transactional keyword',
        '“Invisalign dentist [area]” — geo-specific services',
        '“Emergency dentist open now” — urgency-driven query',
        'Each keyword is mapped to treatment or location pages to build topical clusters and search relevance.',
      ],
      image: keywordImg,
      color: { tag: "bg-blue-600", icon: "text-blue-600", gradient: "bg-gradient-to-tr from-blue-50 to-gray-100" },
    },
    {
      id: 2,
      tag: "1.2 On-Page SEO",
      title: "Structuring for Humans and Algorithms",
      desc: "We optimize every page to balance clarity, engagement, and algorithmic understanding — ensuring Google and patients love your content equally.",
      features: [
        "Optimized meta titles, headers, and schema markup for services.",
        "Internal linking between treatments, doctors, and FAQs.",
        "Alt text and metadata on every image for semantic value.",
        "Structured data for reviews, pricing, and local business info.",
        "Readable layout and mobile-first content design.",
      ],
      image: onpageImg,
      color: { tag: "bg-green-600", icon: "text-green-600", gradient: "bg-gradient-to-tr from-green-50 to-gray-100" },
    },
    {
      id: 3,
      tag: "1.3 Local SEO",
      title: "Winning the Google Maps Battle",
      desc: "Local SEO drives 80% of dental patient conversions. We ensure your clinic appears in Google’s Top 3 map pack for every local search.",
      features: [
        "Google Business Profile optimization with keywords and photos.",
        "NAP (Name, Address, Phone) consistency across directories.",
        "Location pages for each branch or neighborhood.",
        "Geotagged photos, reviews, and local backlinks.",
        "Proximity + prominence strategy for local visibility.",
      ],
      image: localImg,
      color: { tag: "bg-purple-600", icon: "text-purple-600", gradient: "bg-gradient-to-tr from-purple-50 to-gray-100" },
    },
    {
      id: 4,
      tag: "1.4 Technical SEO",
      title: "Speed, Security & Site Architecture",
      desc: "A technically sound website is the backbone of your ranking strength. We make sure your site loads fast, stays secure, and is easy for Google to crawl.",
      features: [
        "Core Web Vitals optimization — LCP, FID, CLS tuning.",
        "HTTPS, XML sitemap, and robots.txt structure.",
        "Mobile-first indexing and responsive design testing.",
        "Fixing canonicalization, redirects, and indexation issues.",
        "Ensuring crawl depth and internal hierarchy efficiency.",
      ],
      image: technicalImg,
      color: { tag: "bg-orange-600", icon: "text-orange-600", gradient: "bg-gradient-to-tr from-orange-50 to-gray-100" },
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card, index) => {
        ScrollTrigger.create({
          trigger: card,
          start: `center center`,
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
    <section ref={sectionRef} className="relative flex flex-col items-center justify-start text-gray-900 py-32 bg-white">
      <div className="max-w-6xl mx-auto text-center mb-24">
        <h2 className="text-3xl md:text-5xl font-medium text-gray-900 mb-4">
          Understanding <span className="text-red-600">Traditional SEO</span> for Dental Clinics
        </h2>
        <p className="text-gray-700 text-lg max-w-5xl mx-auto leading-relaxed">
          Traditional SEO lays the foundation. It makes your site crawlable, content keyword-aligned,
          and your clinic discoverable in both organic and local searches. At Bixeltek, we combine
          proven frameworks with precision execution to build lasting visibility.
        </p>
      </div>

      <div className="stacking w-full flex flex-col items-center">
        {cards.map((card, index) => {
          const isReversed = index % 2 !== 0;

          return (
            <div
              key={card.id}
              ref={(el: any) => (cardsRef.current[index] = el)}
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
                <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">{card.title}</h2>
                <p className="text-gray-800 mt-4 text-lg leading-relaxed">{card.desc}</p>

                <div className="mt-6 space-y-4">
                  {card.features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <Check className={`w-5 h-5 ${card.color.icon} mt-[2px] flex-shrink-0`} />
                      <p className="text-gray-700 text-base leading-relaxed">{feat}</p>
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
