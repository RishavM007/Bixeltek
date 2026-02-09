"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Check } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function SEOStacked() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  const cards = [
    {
      id: 1,
      tag: "🏗️ Content Hierarchy & Information Design",
      title: "Teaching Google How Your Ideas Connect",
      desc: `A website is a knowledge graph in disguise. We design your H-tag structure so algorithms understand topic progression like a reader does — introduction → context → detail → action.`,
      features: [
        {
          title: "Our Structure",
          desc: `H1: One primary intent per page.\nH2: Supporting subtopics that expand the core concept.\nH3–H4: Process steps, examples, FAQs.\nInternal Anchors: Semantic links like “Explore Technical SEO Systems.”`,
        },
        {
          title: "Why It Matters",
          desc: `Clean hierarchy improves both passage-ranking eligibility and reader retention simultaneously.`,
        },
      ],
      color: {
        tag: "bg-indigo-700",
        icon: "text-indigo-700",
        gradient: "bg-gradient-to-tr from-indigo-50 to-gray-100",
      },
    },
    {
      id: 2,
      tag: "🧩 Content Optimization & NLP Tuning",
      title: "Writing for Humans, Validating with Machines",
      desc: `Google evaluates semantic completeness — the breadth and depth of your topics. We balance AI-driven entity coverage with human readability.`,
      features: [
        {
          title: "We Refine",
          desc: `Paragraph density and readability scores.\nTerm frequency for primary entities.\nCo-occurrence patterns via top-10 SERP data.\nNLP sentiment tuning for credibility.`,
        },
        {
          title: "Example",
          desc: `For “Dental Implants,” we integrate expert-level entities like “osseointegration,” “titanium posts,” and “aftercare” naturally.`,
        },
      ],
      color: {
        tag: "bg-emerald-700",
        icon: "text-emerald-700",
        gradient: "bg-gradient-to-tr from-emerald-50 to-gray-100",
      },
    },
    {
      id: 3,
      tag: "🔗 Internal Linking & Authority Flow",
      title: "Building a Network, Not a Library",
      desc: `Internal links distribute both PageRank and semantic context. We build a web of meaning that improves crawlability and topic depth.`,
      features: [
        {
          title: "Implementation",
          desc: `Contextual anchors within content (never footer dumps).\nBalanced link ratios.\nHorizontal cluster linking.\nBreadcrumb schema for structure.`,
        },
        {
          title: "Result",
          desc: `Higher crawl efficiency, longer sessions, and cross-topic ranking improvements within 45 days.`,
        },
      ],
      color: {
        tag: "bg-purple-700",
        icon: "text-purple-700",
        gradient: "bg-gradient-to-tr from-purple-50 to-gray-100",
      },
    },
    {
      id: 4,
      tag: "🧱 Schema & E-E-A-T Integration",
      title: "Speaking Fluently to Search Engines",
      desc: `Schema markup is structured truth. It tells Google who you are, what you offer, and why you’re credible.`,
      features: [
        {
          title: "We Implement",
          desc: `Service & Product for commercial entities.\nFAQ & HowTo for educational pages.\nOrganization & Author for credibility.\nBreadcrumbList & WebPage for clarity.`,
        },
        {
          title: "Benefit",
          desc: `Boosted CTR (up to 30%) and eligibility for rich results + AI Overviews.`,
        },
      ],
      color: {
        tag: "bg-rose-700",
        icon: "text-rose-700",
        gradient: "bg-gradient-to-tr from-rose-50 to-gray-100",
      },
    },
  ];

  useEffect(() => {
    const spacer = 20;
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
      className="relative flex flex-col items-center justify-start text-gray-900 py-28 bg-black"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(100,100,255,0.05),_transparent_70%)] pointer-events-none" />
      <div className="stacking w-full flex flex-col items-center">
        {cards.map((card, index) => {
          const isReversed = index % 2 !== 0;

          return (
            <div
              key={card.id}
              ref={(el : any) => (cardsRef.current[index] = el)}
              className={`stacking__card relative md:w-[85%] w-[95%] mx-auto flex flex-col ${
                isReversed ? "lg:flex-row-reverse" : "lg:flex-row"
              } justify-between items-center rounded-3xl backdrop-blur-md shadow-xl p-10 md:p-14 mb-[40vh] border border-gray-200 ${card.color.gradient} transition-transform duration-500 hover:scale-[1.015]`}
            >
              <div className="lg:w-1/2 space-y-5">
                <span
                  className={`inline-block ${card.color.tag} text-white text-sm font-semibold px-4 py-1 rounded-full shadow-md`}
                >
                  {card.tag}
                </span>

                <h2 className="text-3xl md:text-5xl font-semibold text-gray-900">
                  {card.title}
                </h2>
                <p className="text-gray-800 mt-6 text-lg leading-relaxed whitespace-pre-line">
                  {card.desc}
                </p>

                <div className="mt-6 space-y-6">
                  {card.features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="flex-shrink-0 mt-1">
                        <Check className={`w-5 h-5 ${card.color.icon}`} />
                      </div>
                      <div>
                        <h4
                          className={`font-semibold ${card.color.icon} text-xl mb-1`}
                        >
                          {feat.title}
                        </h4>
                        <p className="text-gray-700 text-base leading-relaxed whitespace-pre-line">
                          {feat.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="w-full lg:w-1/2 mt-10 md:mt-0 flex justify-center">
                <div className="w-[85%] h-[280px] rounded-2xl bg-white/70 shadow-lg backdrop-blur-sm border border-gray-200 flex items-center justify-center">
                  <span className={`text-6xl ${card.color.icon}`}>✦</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
