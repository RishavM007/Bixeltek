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
    </div>

    {/* RIGHT SIDE — FORM */}
    <div className="w-[95%] md:w-[50%] lg:mr-10 flex justify-start items-center">
        <ContactFromNew />
    </div>
</section>

    </>
  )
}
