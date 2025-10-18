export const metadata = {
    title:  " Web Design & Development | Eastern Province – Bixeltek",
    description:
        " Build SEO-ready, conversion-focused websites in Khobar, Dammam & Dhahran. Launch your site in 30 days with Bixeltek’s expert web design team.",
    openGraph: {
        title: " Web Design & Development | Eastern Province – Bixeltek",
        description:
            " Build SEO-ready, conversion-focused websites in Khobar, Dammam & Dhahran. Launch your site in 30 days with Bixeltek’s expert web design team.",
        type: "website",
    },
    alternates: {
        canonical: "https://bixeltek.com/saudi-arabia/eastern-province/web-design-services",
    },
};


import HeroWebDesignSEO from '@/components/Saudi/EasternProvince/WebDesign/SaudiEPWDHero';
import SaudiEPWDIndustries from '@/components/Saudi/EasternProvince/WebDesign/SaudiEPWDInd';
import WebDesignFramework from '@/components/Saudi/EasternProvince/WebDesign/SaudiEPWDProcess';
import WebsiteTrustSection from '@/components/Saudi/EasternProvince/WebDesign/SaudiEPWDSection1';
import WebsiteAuditSection from '@/components/Saudi/EasternProvince/WebDesign/SaudiEPWDSection2';
import WebDesignScienceSection from '@/components/Saudi/EasternProvince/WebDesign/SaudiEPWDSection3';
import WebDevServicesEasternProvince from '@/components/Saudi/EasternProvince/WebDesign/SaudiEPWDSection4';
import GrowthStatsSection from '@/components/Saudi/EasternProvince/WebDesign/SaudiEPWDSection5';
import WebsiteInvestmentSection from '@/components/Saudi/EasternProvince/WebDesign/SaudiEPWDSection6';
import ContactFromNew from '@/components/ContactFormNew';
import React from 'react'

export default function page() {
  return (
    <>
    <HeroWebDesignSEO/>
    <WebsiteTrustSection />
    <WebsiteAuditSection />
    <WebDesignScienceSection />
    <WebDevServicesEasternProvince/>
    <WebDesignFramework/>
    <SaudiEPWDIndustries />
    <GrowthStatsSection />
    <WebsiteInvestmentSection />
    <section
      className="bg-black py-20 px-4 md:px-20 flex flex-col md:flex-row items-center gap-10"
      id="website-cta"
    >
      {/* LEFT SIDE — TEXT */}
      <div className="w-full md:w-1/2 flex flex-col justify-start items-start px-6">
        <h2 className="text-4xl md:text-6xl font-inter font-bold text-white mb-6">
          Build a Website That <span className="text-yellow-500">Works as Hard as You Do</span>
        </h2>

        <p className="text-gray-50 font-poppins text-base md:text-lg leading-relaxed mb-8">
          Stop treating your website as decoration — turn it into your business’s growth engine.
          Launch a conversion-focused, SEO-ready, mobile-optimized website designed to help you dominate the Eastern Province market.
        </p>
         <ul className="text-sm mt-5 flex flex-row md:flex-row gap-5 md:gap-10  transition-all duration-500">
            <li className="mb-6"><a href="https://www.google.com/partners/agency?id=2188074075" target="_blank" className="mt-2 flex justify-start">
              <img src="https://www.gstatic.com/partners/badge/images/2024/PartnerBadgeClickable.svg"
                alt="Google Partner Badge"
                className="w-auto h-16 md:h-24" />
            </a></li>
            <li>
              <div><a target="_blank" href="https://www.goodfirms.co/company/bixeltek"> <img src="https://assets.goodfirms.co/badges/color-badge/top-digital-marketing-companies.svg" title="Top Digital Marketing Company" className="w-20 md:w-32 h-auto" alt="Top Digital Marketing Company on GoodFirms" /></a></div>
            </li>

          </ul>

        {/* Optional CTA buttons */}
        {/* <div className="flex flex-col sm:flex-row gap-4 mt-6">
          <a href="/website-audit">
            <button className="px-7 py-3 rounded-2xl bg-yellow-600 text-white font-semibold text-sm shadow-lg hover:bg-yellow-700 transition">
              Get a Free Website Audit
            </button>
          </a>
          <a href="/contact-us">
            <button className="px-7 py-3 rounded-2xl bg-white text-black font-semibold text-sm shadow-lg hover:bg-gray-100 transition">
              Talk to an Expert
            </button>
          </a>
        </div> */}
      </div>

      {/* RIGHT SIDE — CONTACT FORM */}
      <div className="w-[95%] md:w-[50%] lg:mr-10 flex justify-start items-center">
        <ContactFromNew />
      </div>
    </section>

    </>
  )
}
