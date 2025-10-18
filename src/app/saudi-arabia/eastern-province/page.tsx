import EasternProvinceAreasSection from '@/components/Saudi/EasternProvince/SaudiEPAreas'
import FreeAuditBanner from '@/components/Saudi/EasternProvince/SaudiEPBanner'
import HeroEasternProvince from '@/components/Saudi/EasternProvince/SaudiEPHero'
import SaudiEPPillarIndustries from '@/components/Saudi/EasternProvince/SaudiEPIndustries'
import SaudiMarketingProcessBixeltek from '@/components/Saudi/EasternProvince/SaudiEPProcess'
import BusinessGrowthEasternProvince from '@/components/Saudi/EasternProvince/SaudiEPSection2'
import MarketingSystemsEasternProvince from '@/components/Saudi/EasternProvince/SaudiEPSection3'
import BixeltekSystemFramework from '@/components/Saudi/EasternProvince/SaudiEPSection4'
import DigitalMarketingServicesEasternProvince from '@/components/Saudi/EasternProvince/SaudiEPSection5'
import SaudiEPWhyChooseBixeltek from '@/components/Saudi/EasternProvince/SaudiEPSection6'
import ContactFromNew from '@/components/ContactFormNew'
import React from 'react'

export default function page() {
  return (
    <>
    <HeroEasternProvince />
    <BusinessGrowthEasternProvince />
    <FreeAuditBanner />
    <MarketingSystemsEasternProvince />
    <BixeltekSystemFramework />
    <DigitalMarketingServicesEasternProvince/>
    <SaudiMarketingProcessBixeltek />
    <EasternProvinceAreasSection />
    <SaudiEPPillarIndustries />
    <SaudiEPWhyChooseBixeltek />
    <section
    className="bg-black py-20 px-4 md:px-20 flex flex-col md:flex-row items-center gap-10"
    id="growth-system-cta"
>
    {/* LEFT SIDE — TEXT */}
    <div className="w-full md:w-1/2 flex flex-col justify-start items-start px-6">
        <h2 className="text-4xl md:text-6xl font-inter font-bold text-white mb-6">
            Ready to Build Your <span className="text-yellow-500">Growth System</span> in the Eastern Province?
        </h2>

        <p className="text-gray-50 font-poppins text-base md:text-lg leading-relaxed mb-8">
            Stop running disconnected campaigns. Start building a digital marketing ecosystem that delivers clarity, measurable ROI, and consistent business growth across Khobar, Dammam, and Dhahran.
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
    </div>

    {/* RIGHT SIDE — FORM */}
    <div className="w-[95%] md:w-[50%] lg:mr-10 flex justify-start items-center">
        <ContactFromNew />
    </div>
</section>

    </>
  )
}
