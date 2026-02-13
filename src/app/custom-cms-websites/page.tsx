import HeroCMSDevelopment from '@/components/WebCMS/CMSHero'
import CMSHeroSpline from '@/components/WebCMS/CMSHeroSpline'
import CMSIndustries from '@/components/WebCMS/CMSIndustries'
import CMSWorkflow from '@/components/WebCMS/CMSProcess'
import CMSProblemsSection from '@/components/WebCMS/CMSSection1'
import CMSStackedCards from '@/components/WebCMS/CMSSection2'
import CmsServicesGrid from '@/components/WebCMS/CMSSection3'
import CMSInfoSection from '@/components/WebCMS/CMSSection4'
import CMSProblemSection2 from '@/components/WebCMS/CMSSection5'
import MarketingInfrastructureSection from '@/components/WebCMS/CMSWhyChooseUs'
import ContactFromNew from '@/components/ContactFormNew'
import React from 'react'

export default function page() {
  return (
    <>
    <HeroCMSDevelopment/>
    <CMSInfoSection/>
    <CMSProblemSection2 />
    <CMSProblemsSection/>
    <CMSStackedCards />
    <CMSWorkflow />
    <CmsServicesGrid/>
    <CMSIndustries/>
    <MarketingInfrastructureSection/>
    <section
  className="bg-black py-20 px-6 lg:px-20 flex flex-col lg:flex-row items-center gap-10"
  id="form"
>
  {/* Left Side - Text & CTAs */}
  <div className="w-full lg:w-1/2 flex flex-col justify-start items-start">
    <h2 className="text-4xl md:text-6xl font-inter font-medium text-white mb-6">
      Find Out If Your <span className="text-blue-500">CMS Is Holding You Back</span>.
    </h2>

    <p className="text-gray-100 font-poppins text-base md:text-lg leading-relaxed mb-8">
      Our expert team will audit your current CMS for performance, SEO readiness, and scalability — and deliver a personalized roadmap for improvement.
    </p>

    {/* Audit Points */}
    <ul className="flex flex-col text-white gap-4 mb-8">
      <li className="flex items-start gap-3">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
        </svg>
        <span>Speed & Core Web Vitals report</span>
      </li>
      <li className="flex items-start gap-3">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
        </svg>
        <span>Technical SEO & content audit</span>
      </li>
      <li className="flex items-start gap-3">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
        </svg>
        <span>Conversion flow analysis</span>
      </li>
      <li className="flex items-start gap-3">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
        </svg>
        <span>30-day optimization roadmap</span>
      </li>
    </ul>

    {/* CTA Button */}
    <a
      href="#form"
      className="px-7 py-3 rounded-2xl bg-blue-600 text-white font-semibold text-sm shadow-lg hover:bg-blue-700 transition"
    >
      Get My Free CMS Audit
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
          <a target="_blank" href="https://www.goodfirms.co/company/bixeltek">
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
  <div className="lg:w-[50%] lg:mr-20 flex justify-start items-center">
    <ContactFromNew />
  </div>
</section>

    </>
  )
}
