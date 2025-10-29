import LocalAreas from '@/components/LocalSEO/LocalAreas'
import HeroLocalSEO from '@/components/LocalSEO/LocalHero'
import LocalSEOFrameworkSection from '@/components/LocalSEO/LocalProcess'
import LocalSEOIntroSection from '@/components/LocalSEO/LocalSection1'
import LocalSEOProximitySection from '@/components/LocalSEO/LocalSection2'
import LocalSEODailyCareSection from '@/components/LocalSEO/LocalSection3'
import LocalSEOStacked from '@/components/LocalSEO/LocalSection4'
import ContactFromNew from '@/components/ContactFormNew'
import React from 'react'
import { Check } from 'lucide-react'

export default function page() {
  return (
    <>
    <HeroLocalSEO/>
    <LocalSEOIntroSection/>
    <LocalSEOProximitySection/>
    <LocalSEOFrameworkSection/>
    <LocalSEODailyCareSection/>
    <LocalSEOStacked/>
    <LocalAreas/>
      <section
      className="bg-black py-20 px-4 md:px-20 flex flex-col md:flex-row items-center gap-10"
      id="local-seo-audit"
    >
      {/* Left Side - Text & CTAs */}
      <div className="w-full md:w-1/2 flex flex-col justify-start items-start px-6">
        <h2 className="text-4xl md:text-5xl font-inter font-medium text-white mb-6">
          Pinpoint What’s Holding You Back{" "}
          <span className="text-blue-500">in Local Search</span>
        </h2>

        <p className="text-gray-100 font-poppins text-sm md:text-base leading-relaxed mb-8">
          We analyze your Google Business Profile, citations, and review
          ecosystem to craft a 30-day Local SEO improvement roadmap — tailored
          to boost your visibility, trust signals, and conversions from Maps and
          “near me” searches.
        </p>

        {/* Audit Points */}
        <ul className="flex flex-col text-white gap-4 mb-8">
          {[
            "GBP Optimization Scorecard",
            "NAP & Citation Accuracy Audit",
            "Review Strategy Assessment",
            "Geo-Ranking Heat Map Visualization",
          ].map((point, idx) => (
            <li key={idx} className="flex items-start gap-3">
              <Check className="h-6 w-6 text-blue-500 flex-shrink-0 mt-[2px]" />
              <span>{point}</span>
            </li>
          ))}
        </ul>

        {/* Trust Badges */}
        <ul className="text-sm mt-8 flex flex-row md:flex-row gap-5 md:gap-10 transition-all duration-500">
          <li>
            <a
              href="https://www.google.com/partners/agency?id=2188074075"
              target="_blank"
              rel="noopener noreferrer"
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
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.goodfirms.co/company/bixeltek"
            >
              <img
                src="https://assets.goodfirms.co/badges/color-badge/top-digital-marketing-companies.svg"
                title="Top Digital Marketing Company"
                className="w-20 md:w-32 h-auto"
                alt="Top Digital Marketing Company on GoodFirms"
              />
            </a>
          </li>
        </ul>
      </div>

      {/* Right Side - Contact Form */}
      <div className="w-[95%] md:w-[50%] lg:mr-10 flex justify-start items-center">
        <ContactFromNew />
      </div>
    </section>
    </>
  )
}
