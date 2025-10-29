"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { Check } from "lucide-react";

// 🖼️ Replace these with your actual assets
import reviewsImg from "@/assets/bl-seo1-macbookpro15_front-700x700.webp";
import citationsImg from "@/assets/what-is-local-seo.png";
import analyticsImg from "@/assets/SEO Dashboard.png";

gsap.registerPlugin(ScrollTrigger);

export default function LocalSEOStacked() {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  // ✅ FIX HERE — properly type the cardsRef
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  const cards = [
    {
      id: 1,
      tag: "Reputation Engineering",
      title: "The Digital Word-of-Mouth",
      desc: `Google trusts what people say about you more than what you say yourself.
We build review systems that automate feedback collection, manage responses, and turn sentiment into a marketing asset.`,
      features: [
        {
          title: "Automated Review Invites",
          desc: "Integrated with your CRM to send review requests after every client interaction — no manual follow-ups.",
        },
        {
          title: "AI Sentiment & Alerts",
          desc: "AI scans feedback to identify tone, trends, and triggers instant alerts for negative reviews.",
        },
      ],
      closing:
        "Our clients see a 30–70% increase in reviews and measurable improvements in trust and click conversions within weeks.",
      image: reviewsImg,
      color: {
        tag: "bg-blue-700",
        icon: "text-blue-700",
        gradient: "bg-gradient-to-tr from-blue-100 to-gray-100",
      },
    },
    {
      id: 2,
      tag: "Citations & Local Authority",
      title: "Consistency Across the Web = Trust in SERPs",
      desc: `Every mention of your business online is a “citation.” Google cross-checks these to verify legitimacy.
We make sure your business info is accurate, structured, and verified across all key directories and regional databases.`,
      features: [
        {
          title: "Structured Citations & JSON-LD",
          desc: "Maintain NAP consistency across directories using structured schema for optimal crawling.",
        },
        {
          title: "Regional & Niche Listings",
          desc: "We handle submissions across GCC Trade, Sulekha, TrustPilot, and relevant local networks.",
        },
      ],
      closing:
        "Clean citations improve both organic ranking and Map Pack visibility — trust begins with data accuracy.",
      image: citationsImg,
      color: {
        tag: "bg-emerald-700",
        icon: "text-emerald-700",
        gradient: "bg-gradient-to-tr from-emerald-100 to-gray-100",
      },
    },
    {
      id: 3,
      tag: "Tracking & Analytics",
      title: "Because Every Call and Direction Should Be Measured",
      desc: `We connect GBP, Analytics, and Tag Manager to trace every journey — from search to call, message, or visit.
Visibility without metrics is guesswork, so we turn engagement into measurable growth signals.`,
      features: [
        {
          title: "Action-Level Tracking",
          desc: "Monitor calls, direction clicks, and site visits directly from your Google Business Profile.",
        },
        {
          title: "City-Level Keyword Heatmaps",
          desc: "Visualize where you rank in each neighborhood using GMB grid heatmaps and analytics dashboards.",
        },
      ],
      closing:
        "With ROI dashboards tied to search data, you’ll know exactly how every local interaction drives revenue.",
      image: analyticsImg,
      color: {
        tag: "bg-purple-700",
        icon: "text-purple-700",
        gradient: "bg-gradient-to-tr from-purple-100 to-gray-100",
      },
    },
  ];

  useEffect(() => {
    const spacer = 100;
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
      className="relative flex flex-col items-center justify-start text-white py-20"
    >
      <div className="stacking w-full flex flex-col items-center">
        {cards.map((card, index) => {
          const isReversed = index === 1; // reverse middle layout

          return (
            <div
              key={card.id}
              ref={(el : any ) => (cardsRef.current[index] = el)}
              className={`stacking__card relative md:w-[85%] w-[95%] mx-auto flex flex-col ${
                isReversed ? "md:flex-row-reverse" : "md:flex-row"
              } justify-between items-center rounded-3xl backdrop-blur-sm shadow-2xl p-8 md:p-12 mb-[30vh] border ${card.color.gradient} transition-transform duration-500 hover:scale-[1.02]`}
            >
              {/* Text Section */}
              <div className="md:w-1/2 space-y-4">
                <span
                  className={`inline-block ${card.color.tag} text-white text-sm font-semibold px-4 py-1 rounded-full shadow-md`}
                >
                  {card.tag}
                </span>

                <h2 className="text-2xl md:text-5xl font-medium text-black">
                  {card.title}
                </h2>
                <p className="text-gray-900 mt-10 text-lg leading-relaxed">
                  {card.desc}
                </p>

                <div className="mt-4 space-y-4">
                  {card.features.map((feat, i) => (
                    <div key={i} className="flex mt-5 items-start gap-3">
                      <div className="flex-shrink-0 mt-1">
                        <Check className={`w-5 h-5 ${card.color.icon}`} />
                      </div>
                      <div>
                        <h4
                          className={`font-semibold ${card.color.icon} text-xl mb-1`}
                        >
                          {feat.title}
                        </h4>
                        <p className="text-gray-800 text-base leading-relaxed">
                          {feat.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <p className="mt-6 text-gray-700 italic">{card.closing}</p>
              </div>

              {/* Image Section */}
              <div className="relative md:w-1/2 flex justify-center mt-8 md:mt-0 overflow-hidden rounded-2xl">
                <Image
                  src={card.image}
                  alt={card.title}
                  width={600}
                  height={600}
                  className="rounded-lg object-contain drop-shadow-lg"
                />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
