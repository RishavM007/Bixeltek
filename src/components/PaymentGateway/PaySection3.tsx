"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

import razorpayImg from "@/assets/Card-1.png";
import stripeImg from "@/assets/Component-1-1.png";
import paytabsImg from "@/assets/Frame-297.png";
import { Check } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function PaymentTypes() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  const cards = [
    {
      id: 1,
      tag: "Bixeltek x Razorpay",
      title: "Smarter Payments for India’s Digital-First Businesses",
      desc: `Razorpay powers Indian eCommerce with UPI, cards, wallets, and EMI — all running on secure, real-time APIs. 
Bixeltek’s integration ensures your Razorpay checkout feels instant, transparent, and built for trust.`,
      features: [
        {
          title: "Smart UPI & GST Automation",
          desc: "Auto-manage GST invoices and deep-link UPI payments without manual overhead.",
        },
        {
          title: "Real-Time Payment Intelligence",
          desc: "Webhook-driven refund tracking and settlement visibility across all platforms.",
        },
      ],
      closing:
        "Every Razorpay implementation is built with tokenization, encryption, and PCI-DSS compliance at its core.",
      image: razorpayImg,
    },
    {
      id: 2,
      tag: "Bixeltek x Stripe",
      title: "Global Checkout Without Borders or Bottlenecks",
      desc: `Stripe fuels global commerce with tokenized payments, recurring billing, and fraud detection. 
Bixeltek’s Stripe integrations deliver frictionless experiences — across currencies, countries, and customer types.`,
      features: [
        {
          title: "Subscription & Tax Intelligence",
          desc: "Handle complex billing cycles and VAT logic for SaaS or marketplace businesses.",
        },
        {
          title: "Frictionless Wallet Payments",
          desc: "Integrate Apple Pay, Google Pay, and one-click checkout flows seamlessly.",
        },
      ],
      closing:
        "Stripe with Bixeltek means borderless commerce, powered by precision engineering.",
      image: stripeImg,
    },
    {
      id: 3,
      tag: "Bixeltek x PayTabs & HyperPay",
      title: "Localized Gateways for GCC’s Trusted Commerce",
      desc: `PayTabs and HyperPay enable secure, Sharia-compliant payments across Saudi Arabia and the UAE. 
Bixeltek ensures these systems integrate deeply with your backend for compliant, reliable transactions.`,
      features: [
        {
          title: "Localized Commerce Logic",
          desc: "Split payouts, Zakat-friendly hooks, and local bank settlement flows.",
        },
        {
          title: "Dual-Language Checkout",
          desc: "Arabic–English interfaces built with RTL support and native card compatibility.",
        },
      ],
      closing:
        "In GCC markets, Bixeltek builds gateways that feel local, scale global, and inspire trust at every click.",
      image: paytabsImg,
    },
  ];

  useEffect(() => {
     const isMobile = window.innerWidth < 768;

  // Skip GSAP stacking on mobile — use CSS only
  if (isMobile) return;
    const spacer = 80; // gap between stacked cards
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
      className="relative flex flex-col items-center justify-start text-white pt-20 pb-10 md:py-20 px-4"
    >
      <div className="stacking w-full flex flex-col items-center">
        {cards.map((card, index) => {
          const gradients = [
            "bg-gradient-to-tr from-purple-100 to-gray-100",
            "bg-gradient-to-br from-purple-100 to-gray-100",
            "bg-gradient-to-br from-purple-100 to-gray-100",
          ];
          const gradientClass = gradients[index % gradients.length];
          const isReversed = index === 1; // Reverse layout for Stripe

          return (
            <div
              key={card.id}
              ref={(el) => {
                if (el) cardsRef.current[index] = el;
              }}
              className={`stacking__card relative lg:w-[85%] md:w-[95%] mx-auto flex flex-col ${
                isReversed ? "lg:flex-row-reverse" : "lg:flex-row"
              } justify-between items-center rounded-3xl backdrop-blur-sm shadow-2xl p-8 md:p-12 mb-8 md:mb-[30vh] border ${gradientClass} transition-transform duration-500 hover:scale-[1.02]`}
            >
              {/* Text Section */}
              <div className="lg:w-1/2 space-y-4">
                <span className="inline-block bg-purple-600 text-white text-sm font-semibold px-4 py-1 rounded-full shadow-md">
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
      {/* Icon */}
      <div className="flex-shrink-0 mt-1">
        <Check className="w-5 h-5 text-purple-800" />
      </div>

      {/* Text content */}
      <div>
        <h4 className="font-semibold text-purple-900 text-xl mb-1">{feat.title}</h4>
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
              <div className="relative lg:w-1/2 flex justify-center mt-8 md:mt-0 overflow-hidden rounded-2xl">
                <Image
                  src={card.image}
                  alt={card.title}
                  width={600}
                  height={600}
                  className="rounded-lg object-contain drop-shadow-lg"
                />
                {/* Purple bottom mask overlay */}
                {/* <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-purple-700/70 to-transparent pointer-events-none"></div> */}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
