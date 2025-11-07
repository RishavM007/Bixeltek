"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Check } from "lucide-react";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

import technicalImg from "@/assets/android-mobile-bannr.png";
import behavioralImg from "@/assets/SEO Dashboard.png";
import funnelImg from "@/assets/a-full-suite-of-SEO-tools.webp";
import experimentImg from "@/assets/mississauga dashboard.png";
import reportingImg from "@/assets/ipad-business-analytics.png";

export default function CROFrameworkStacked() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  const cards = [
    {
      id: 1,
      tag: "1. Technical Setup & Calibration",
      title: "Reliable Analytics Foundation",
      desc: "We begin with a deep technical audit — verifying your tracking architecture across GA4, Tag Manager, Meta Pixel, LinkedIn Insight Tag, and CRM integrations.",
      features: [
        "Event duplication is removed",
        "Parameters (source, medium, campaign) are unified",
        "Cross-domain tracking is enabled",
        "Consent and privacy compliance is intact",
        "The result: your analytics foundation becomes reliable enough for strategic decisions.",
      ],
      image: technicalImg,
      color: { tag: "bg-blue-600", icon: "text-blue-600", gradient: "bg-gradient-to-tr from-blue-50 to-gray-100" },
    },
    {
      id: 2,
      tag: "2. Behavioral Intelligence Mapping",
      title: "Understanding User Behavior",
      desc: "We pair analytics with behavioral data to visualize user experience.",
      features: [
        "Heatmaps & Scrollmaps reveal where attention dies.",
        "Session Recordings show actual user hesitation points.",
        "Form Analytics pinpoint abandonment fields.",
        "Click Distribution shows which CTAs are ignored.",
        "When numbers meet behavior, patterns emerge — and that’s where optimization begins.",
      ],
      image: behavioralImg,
      color: { tag: "bg-green-600", icon: "text-green-600", gradient: "bg-gradient-to-tr from-green-50 to-gray-100" },
    },
    {
      id: 3,
      tag: "3. Funnel Reconstruction",
      title: "Mapping the Customer Journey",
      desc: "We map your end-to-end customer journey to locate friction points.",
      features: [
        "Ad Click → Landing Page → Engagement → Conversion → Retention",
        "By visualizing this path, we locate friction — the “why” behind drop-offs.",
        "Then, we redesign or re-sequence key funnel steps for smoother flow.",
        "For e-commerce, compressing a 4-step checkout into 2.",
        "For B2B, pre-qualifying leads before form submission.",
      ],
      image: funnelImg,
      color: { tag: "bg-purple-600", icon: "text-purple-600", gradient: "bg-gradient-to-tr from-purple-50 to-gray-100" },
    },
    {
      id: 4,
      tag: "4. Experimentation & Hypothesis Testing",
      title: "Scientific CRO",
      desc: "CRO isn’t about random tweaks. It’s the scientific method applied to marketing.",
      features: [
        'A/B or multivariate tests',
        "Confidence intervals and sample size calculations",
        "User cohort segmentation",
        "Testable hypotheses validated systematically",
        "We don’t guess. We prove.",
      ],
      image: experimentImg,
      color: { tag: "bg-rose-600", icon: "text-rose-600", gradient: "bg-gradient-to-tr from-rose-50 to-gray-100" },
    },
    {
      id: 5,
      tag: "5. Visualization & Reporting",
      title: "From Data to Insight",
      desc: "Our Looker Studio dashboards merge GA4, Search Console, Ads, and CRM into one cohesive story.",
      features: [
        "Funnel conversion rates",
        "Device & demographic breakdowns",
        "Keyword → Landing Page → Lead flow",
        "Cost per conversion (cross-channel)",
        "Data stops being abstract; it becomes insight you can act on.",
      ],
      image: reportingImg,
      color: { tag: "bg-orange-600", icon: "text-orange-600", gradient: "bg-gradient-to-tr from-orange-50 to-gray-100" },
    },
  ];

  useEffect(() => {
    const spacer = 0;
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

        const scaleValue = 1 ;
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
    <section ref={sectionRef} className="relative flex flex-col items-center justify-start text-gray-900 py-32 bg-white">
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
                <h2 className="text-3xl md:text-5xl font-semibold text-gray-900">{card.title}</h2>
                <p className="text-gray-800 mt-6 text-lg leading-relaxed whitespace-pre-line">{card.desc}</p>

                <div className="mt-6 space-y-4">
                  {card.features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <Check className={`w-5 h-5 ${card.color.icon} mt-[2px] flex-shrink-0`} />
                      <p className="text-gray-700 text-base leading-relaxed whitespace-pre-line">{feat}</p>
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
