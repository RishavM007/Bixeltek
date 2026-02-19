import PayAreas from '@/components/PaymentGateway/PayAreas'
import PaymentGatewayFAQ from '@/components/PaymentGateway/PayFaqs'
import PaymentHeroSection from '@/components/PaymentGateway/PayHero'
import PaymentTrustSection from '@/components/PaymentGateway/PaySection1'
import CheckoutTrustBanner from '@/components/PaymentGateway/PaySection2'
import PaymentTypes from '@/components/PaymentGateway/PaySection3'
import PaymentWorkflow from '@/components/PaymentGateway/PaySection4'
import PayFinanceToGrowth from '@/components/PaymentGateway/PaySection5'
import ContactFromNew from '@/components/ContactFormNew'
import React from 'react'
import LocationProcessSection from '@/components/Common/location/LocationProcessSection'
import GlobalExpertiseSection from '@/components/Common/GlobalExpertiseSection'
import saudiImg from "@/assets/Saudi Web Design.png";
import indiaImg from "@/assets/india-gate-delhi-1-attr-hero.jpeg";
import uaeImg from "@/assets/pexels-photo-13736456.jpeg";
import canadaImg from "@/assets/m_Toronto_destination_main_1_l_572_1000.webp";
import usaImg from "@/assets/17.jpg";

const steps = [
    {
        number: "01",
        title: "Technical Discovery",
        text: "We begin by auditing your platform stack, checkout flow, and compliance requirements — including PCI-DSS, RBI norms, and country-specific tax laws — to define the perfect foundation for a secure integration.",
        gradient: "from-blue-500 via-cyan-400 to-transparent",
        color: "text-yellow-500",
        bgcolor: "hover:bg-yellow-500",
    },
    {
        number: "02",
        title: "Gateway Selection",
        text: "Based on your geography, scale, and customer base, we recommend the right mix of Razorpay, Stripe, or PayTabs. Each gateway is chosen for performance, payout speed, and international compatibility.",
        gradient: "from-green-500 via-teal-400 to-transparent",
        color: "text-green-500",
        bgcolor: "hover:bg-orange-500",
    },
    {
        number: "03",
        title: "Integration & Testing",
        text: "We implement direct API connections, enable tokenized payments, and run complete sandbox simulations to ensure every checkout — from card to UPI to wallet — runs flawlessly across devices.",
        gradient: "from-yellow-400 via-yellow-300 to-transparent",
        color: "text-blue-500",
        bgcolor: "hover:bg-yellow-400",
    },
    {
        number: "04",
        title: "Compliance Validation",
        text: "Every system undergoes PCI-DSS scans, penetration tests, and webhook validation. Our setup ensures encrypted transactions, verified callbacks, and a hardened security layer before going live.",
        gradient: "from-pink-500 via-purple-400 to-transparent",
        color: "text-red-500",
        bgcolor: "hover:bg-yellow-500",
    },
    {
        number: "05",
        title: "Go Live & Analytics",
        text: "Once approved, we deploy live keys, configure GA4 or CRM integrations for real-time revenue tracking, and activate dashboards that monitor every transaction across your funnel.",
        gradient: "from-green-500 via-transparent to-transparent",
        color: "text-blue-600",
        bgcolor: "hover:bg-yellow-600",
    },
    {
        number: "06",
        title: "Support & Optimization",
        text: "Our 24×7 monitoring system handles chargebacks, payment errors, and gateway issues in real time — while continuous A/B testing and conversion audits ensure peak performance post-launch.",
        gradient: "from-purple-600 via-transparent to-transparent",
        color: "text-purple-600",
        bgcolor: "hover:bg-purple-700",
    },
];

const locations = [
  {
    country: "Saudi Arabia",
    emoji: "🇸🇦",
    image: saudiImg,
    desc: (
      <>
        <a
          href="/saudi-arabia/riyadh"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          Riyadh
        </a>
        ,{" "}
        <a
          href="/saudi-arabia/eastern-province"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          Eastern Province
        </a>
        ,{" "}
        — bilingual builds with Arabic + English parity, mobile-first layouts,
        and GCC-compliant hosting.
      </>
    ),
  },
  {
    country: "India",
    emoji: "🇮🇳",
    image: indiaImg,
    desc: (
      <>
        <a
          href="/hyderabad"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          Hyderabad
        </a>
        ,{" "}
        <a
          href="/bangalore"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          Banglore
        </a>
        ,{" "}
        — fast, marketing-ready hybrid websites integrating CMS, CRM, and
        automation tools.
      </>
    ),
  },
  {
    country: "UAE",
    emoji: "🇦🇪",
    image: uaeImg,
    desc: (
      <>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className=""
        >
          Dubai
        </a>
        ,{" "}
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className=""
        >
          Abu Dhabi
        </a>{" "}
        — premium design + high-performance React front-ends for luxury,
        real estate, and financial brands.
      </>
    ),
  },
  {
    country: "Canada",
    emoji: "🇨🇦",
    image: canadaImg,
    desc: (
      <>
        <a
          href="/toronto"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          Toronto
        </a>
        ,{" "}
        <a
          href="/vancouver"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          Vancouver
        </a>
        ,{" "}
        <a
          href="/mississauga"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          Mississauga
        </a>{" "}
        — bilingual (EN/FR) systems built for accessibility, compliance, and
        Core Web Vitals excellence.
      </>
    ),
  },
  {
    country: "United States",
    emoji: "🇺🇸",
    image: usaImg,
    desc: (
      <>
        SaaS and enterprise clients across{" "}
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className=""
        >
          the U.S.
        </a>{" "}
        using Next.js + Node for speed, analytics depth, and compliance
        readiness.
      </>
    ),
  },
];

export default function page() {
  return (
    <>
      <PaymentHeroSection />
      <PaymentTrustSection />
      <CheckoutTrustBanner />
      <PaymentTypes />
      {/* <PaymentWorkflow /> */}
      <LocationProcessSection
      bg='bg-white'
      tag={
        <h3 className="text-bg text-purple-500 uppercase font-semibold text-center" > From API to ROI </h3>
      }
      heading={
        <span>How We Implement Secure <span className="text-purple-500"> Payment Systems</span></span>
      }
      description='Every integration is designed to maximize trust, compliance, and conversions — ensuring your
                customers enjoy seamless payments while your business runs securely and efficiently.'
      steps={steps}  
      cta={{
        text:'Book a Free Strategy Call',
        href:'mailto:zee@bixeltek.com',
        bg:'bg-gradient-to-tr from-purple-500 via-purple-700 to-purple-950 hover:bg-gradient-to-tr hover:from-purple-950 hover:via-purple-700 hover:to-purple-500 text-white'
      }}
      footerText='Every payment workflow we deploy is built for speed, trust, and transparency — ensuring your
                e-commerce or SaaS brand scales globally with complete financial confidence.'        
      />
      <PayFinanceToGrowth />
      {/* <PayAreas /> */}
      <GlobalExpertiseSection
      backgroundColor='bg-white'
      heading={
        <span>Local Payment Systems,{" "}
          <span className="text-purple-500">Global Performance</span></span>
      }
      description='We engineer e-commerce ecosystems for businesses in:'
      locations={locations}
      footerText='Wherever your users are, we deploy your site on the edge — close,
        compliant, and lightning-fast.'
      />
      <PaymentGatewayFAQ />
      <section
        className="bg-black py-20 px-6 lg:px-20 flex flex-col lg:flex-row items-center gap-10"
        id="checkout-audit"
      >
        {/* LEFT SIDE — TEXT + CTA */}
        <div className="w-full lg:w-1/2 flex flex-col justify-start items-start ">
          <h2 className="text-3xl md:text-6xl font-inter font-medium text-white mb-6 leading-snug">
            Let’s Review Your Checkout —{" "}
            <span className="text-purple-500">
              for Security, Compliance, and Speed
            </span>
          </h2>

          <p className="text-gray-100 font-poppins text-base md:text-lg leading-relaxed mb-8">
            Get a full audit of your payment process — from gateway reliability to
            conversion rate optimization.
          </p>

          {/* AUDIT POINTS */}
          <ul className="flex flex-col text-white gap-4 mb-8">
            {[
              "API performance and transaction success rate",
              "PCI-DSS & compliance checks",
              "Refund and webhook reliability",
              "Checkout UX and mobile optimization",
              "30-day improvement roadmap",
            ].map((point, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-blue-500 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>{point}</span>
              </li>
            ))}
          </ul>

          {/* CTA BUTTON */}
          <a
            href="#checkout-audit"
            className="px-7 py-3 rounded-2xl bg-purple-600 text-white font-semibold text-sm shadow-lg hover:bg-blue-700 transition"
          >
            Get My Free Audit
          </a>

          {/* BADGES */}
          <ul className="text-sm mt-8 flex flex-row md:flex-row gap-5 md:gap-10 transition-all duration-500">
            <li className="mb-6">
              <a
                href="https://www.google.com/partners/agency?id=2188074075"
                target="_blank"
                className="mt-2 flex justify-start"
              >
                <img
                  src="https://www.gstatic.com/partners/badge/images/2024/PartnerBadgeClickable.svg"
                  alt="Google Partner Badge"
                  className="w-auto h-16 md:h-24"
                />
              </a>
            </li>
            <li>
              <div>
                <a
                  target="_blank"
                  href="https://www.goodfirms.co/company/bixeltek"
                >
                  <img
                    src="https://assets.goodfirms.co/badges/color-badge/top-digital-marketing-companies.svg"
                    title="Top Digital Marketing Company"
                    className="w-20 md:w-32 h-auto"
                    alt="Top Digital Marketing Company on GoodFirms"
                  />
                </a>
              </div>
            </li>
          </ul>
        </div>

        {/* RIGHT SIDE — FORM */}
        <div className="md:w-[95%] lg:w-[50%] lg:mr-20 flex justify-start items-center">
          <ContactFromNew />
        </div>
      </section>
    </>
  )
}
