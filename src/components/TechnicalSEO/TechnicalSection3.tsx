"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Check } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function TechnicalSEOStacked() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  const cards = [
    {
      id: 1,
      tag: "⚡ Because Speed Builds Trust",
      title: "Core Web Vitals & Page Experience",
      desc: `A site that feels slow also feels unreliable. Google measures real-world performance using Core Web Vitals (CWV) — now a direct ranking and Quality Score factor.\nWe don’t rely on plugins. We fix performance at the code level.`,
      features: [
        {
          title: "What We Optimize",
          desc: `• LCP (Largest Contentful Paint): visible content loads within 2.5 seconds.\n• CLS (Cumulative Layout Shift): no unexpected visual jumps.\n• INP (Interaction to Next Paint): fast responsiveness for user actions.`,
        },
        {
          title: "How We Do It",
          desc: `• Server-side rendering (Next.js / Nuxt / Laravel).\n• CDN & edge caching for global delivery.\n• Image compression & lazy loading.\n• Script deferral, hydration control, and critical CSS extraction.`,
        },
      ],
      color: {
        tag: "bg-blue-700",
        icon: "text-blue-700",
        gradient: "bg-gradient-to-tr from-blue-50 to-gray-100",
      },
    },
    {
      id: 2,
      tag: "🧠 Teaching Search Engines to Understand You",
      title: "Structured Data & Semantic SEO",
      desc: `Search engines no longer just read text — they parse meaning. Structured data (schema) tells Google what each page, section, and entity represents.`,
      features: [
        {
          title: "Our Approach",
          desc: `• Implement JSON-LD schema for Organization, WebSite, Service, Product, FAQ, LocalBusiness, and Breadcrumbs.\n• Inject data at build time, avoiding render-blocking scripts.\n• Map internal entities (services, authors, locations) into a consistent schema graph.\n• Link relevant external entities (Wikipedia, Wikidata) for contextual validation.`,
        },
        {
          title: "Result",
          desc: `Your pages become machine-readable — increasing eligibility for:\n• Rich Snippets (FAQs, Ratings, Services)\n• AI Overviews & Featured Answers\n• Knowledge Graph inclusion\nWith semantic markup, your site isn’t just visible — it’s comprehensible.`,
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
      tag: "🕸️ Building Hierarchy Like a Neural Network",
      title: "Site Architecture & Internal Linking",
      desc: `Google’s understanding of your expertise is shaped by your information architecture — the way topics connect. We rebuild websites with semantic hierarchy, where each page supports a broader topic cluster.`,
      features: [
        {
          title: "We Focus On",
          desc: `• Topic Silos & Clusters: linking related services or blogs into authority hubs.\n• Canonical Mapping: avoiding competing pages on the same intent.\n• Breadcrumbs & Navigation: structured for UX and crawl flow.\n• Authority Flow Optimization: distributing link equity to underperforming pages.`,
        },
        {
          title: "Benefits",
          desc: `• Faster discovery of new content.\n• Stronger entity recognition.\n• Consistent ranking stability after Google Core Updates.\nA structured website is one that both users and algorithms can navigate intuitively.`,
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
      tag: "🌍 Speak Every Language — and Be Found in All of Them",
      title: "International & Multilingual SEO",
      desc: `For multi-country clients, translation isn’t enough. We ensure every language and region variation sends clear, localized signals to Google.`,
      features: [
        {
          title: "Our Expertise",
          desc: `• Hreflang tags for Arabic, English, and French versions.\n• Region-specific schema and local address data.\n• Duplicate prevention through canonical alignment.\n• CDN-level routing to serve content faster to each market.`,
        },
        {
          title: "Example",
          desc: `A bilingual site in Riyadh with /en/ and /ar/ subdirectories gets equal visibility across both indices — improving total search presence by up to 40%.\nInternational SEO is about consistency, not just translation.`,
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
              ref={(el: any) => (cardsRef.current[index] = el)}
              className={`stacking__card relative lg:w-[85%] mx-auto flex flex-col ${
                isReversed ? "lg:flex-row-reverse" : "lg:flex-row"
              } justify-between items-center rounded-3xl backdrop-blur-md shadow-xl p-10 md:p-14 mb-[40vh] border border-gray-200 ${card.color.gradient} transition-transform duration-500 hover:scale-[1.015]`}
            >
              {/* Left - Text */}
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

              {/* Right - Visual Placeholder */}
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
