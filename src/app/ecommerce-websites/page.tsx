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

export default function page() {
  return (
    <>
      <EcommerceHeroSection />
      <EcommerceSystemSection />
      <EcommercePlatforms />
      <IntegrationMindMap />
      <MobileTechGrid/>
      <EcomPerformanceSection />
      <EcomProcessWorkflow />
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
