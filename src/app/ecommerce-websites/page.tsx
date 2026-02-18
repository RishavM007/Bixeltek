import EcomAreas from '@/components/EcommerceWeb/EcomAreas'
import EcommerceHeroSection from '@/components/EcommerceWeb/EcomHero'
import EcomProcessWorkflow from '@/components/EcommerceWeb/EcomProcess'
import EcommerceSystemSection from '@/components/EcommerceWeb/EcomSection'
import EcommercePlatforms from '@/components/EcommerceWeb/EcomSection2'
import EcomStackedCards from '@/components/EcommerceWeb/EcomSection2'
import IntegrationMindMap from '@/components/EcommerceWeb/EcomSection3'
import TechnologiesSection from '@/components/EcommerceWeb/EcomSection3'
import EcomPerformanceSection from '@/components/EcommerceWeb/EcomSection4'
import DesignPsychologySection from '@/components/EcommerceWeb/EcomSection5'
import GrowthAfterGoLive from '@/components/EcommerceWeb/EcomSection6'
import React from 'react'
import ContactFromNew from '@/components/ContactFormNew'
import EcommerceFAQ from '@/components/EcommerceWeb/EcomFaq'
import MobileTechGrid from '@/components/EcommerceWeb/EcomTechMob'
import LocationProcessSection from '@/components/Common/location/LocationProcessSection'


const steps = [
  {
    number: "01",
    title: "Discovery & Audit",
    text: "We benchmark your store’s vitals: performance, funnel leaks, search visibility, and competitor landscape. Then we define KPIs — speed, conversion, retention.",
    gradient: "from-blue-400 via-cyan-400 to-transparent",
    color: "text-blue-400",
    bgcolor: "hover:bg-blue-500/20",
  },
  {
    number: "02",
    title: "Information Architecture & UX Strategy",
    text: "We design the journey. From navigation to product cards, every interaction supports intent. UX is built on user psychology — clarity before creativity.",
    gradient: "from-cyan-400 via-green-400 to-transparent",
    color: "text-green-400",
    bgcolor: "hover:bg-green-500/20",
  },
  {
    number: "03",
    title: "Design System & Prototyping",
    text: "Visual hierarchy, trust signals, and conversion paths take precedence. Every page is tested for readability, load sequence, and CTA logic.",
    gradient: "from-purple-400 via-pink-400 to-transparent",
    color: "text-pink-400",
    bgcolor: "hover:bg-purple-500/20",
  },
  {
    number: "04",
    title: "Development & Integration",
    text: "Full-stack build on Shopify, WooCommerce, or Next.js. We connect ERPs, CRMs, and marketing automation tools like Klaviyo, HubSpot, or Odoo for unified operations.",
    gradient: "from-orange-400 via-yellow-400 to-transparent",
    color: "text-yellow-400",
    bgcolor: "hover:bg-orange-500/20",
  },
  {
    number: "05",
    title: "Optimization & Launch",
    text: "Continuous testing via Lighthouse CI, GTMetrix, and Core Web Vitals. Server-side tracking and A/B testing setups are finalized before going live.",
    gradient: "from-pink-400 via-red-400 to-transparent",
    color: "text-red-400",
    bgcolor: "hover:bg-pink-500/20",
  },
  {
    number: "06",
    title: "Scale & Evolve",
    text: "After launch, we move to continuous CRO and technical scaling — caching, API refinement, new market adaptation, and SEO expansion.",
    gradient: "from-blue-400 via-transparent to-transparent",
    color: "text-teal-400",
    bgcolor: "hover:bg-green-500/20",
  },
];

export default function page() {
  return (
    <>
      <EcommerceHeroSection />
      <EcommerceSystemSection />
      <EcommercePlatforms />
      <IntegrationMindMap />
      <MobileTechGrid/>
      <EcomPerformanceSection />
      {/* <EcomProcessWorkflow /> */}
      <LocationProcessSection
      heading={
        <>
        <span> A Repeatable, Data-Driven Process <br />
        <span className="text-blue-400">for High-Performing Stores</span></span>
        </>
      }
      description='Our process combines audit, UX, design, and development into a unified growth engine — built to convert faster, scale smoother, and perform longer.'
      steps={steps}
      cta={{
        text:'Talk To E-commerce Expert',
        href:'mailto:zee@bixeltek.com'
      }}
      footerText=' We don’t just launch stores — we build scalable growth systems engineered for performance, psychology, and long-term ROI.'
      />
      <DesignPsychologySection />
      <EcomAreas />
      <GrowthAfterGoLive />
      <EcommerceFAQ/>
      <section
        className="bg-black py-20 px-6 lg:px-20 flex flex-col lg:flex-row items-center gap-10"
        id="form"
      >
        {/* Left Side - Text & CTAs */}
        <div className="w-full lg:w-1/2 flex flex-col justify-start items-start ">
          <h2 className="text-4xl md:text-6xl font-inter font-medium text-white mb-6">
            Find Out What’s Limiting{" "}
            <span className="text-blue-500">Your Online Sales</span>
          </h2>

          <p className="text-gray-100 font-poppins text-base md:text-lg leading-relaxed mb-8">
            Get a free, data-backed audit of your store’s performance, checkout flow, SEO, and conversion setup.
          </p>

          {/* Audit Points */}
          <ul className="flex flex-col text-white gap-4 mb-8">
            {[
              "Speed & Core Web Vitals Review",
              "Checkout Funnel Diagnostics",
              "SEO & Schema Evaluation",
              "Payment Gateway & Analytics Health",
              "30-Day Optimization Roadmap",
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

          {/* CTA Button */}
          <a
            href="#form"
            className="px-7 py-3 rounded-2xl bg-blue-600 text-white font-semibold text-sm shadow-lg hover:bg-blue-700 transition"
          >
            Get My Free Store Audit
          </a>

          {/* Badges */}
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

        {/* Right Side - Contact Form */}
        <div className=" lg:w-[50%] lg:mr-10 flex justify-start items-center">
          <ContactFromNew />
        </div>
      </section>
    </>
  )
}
