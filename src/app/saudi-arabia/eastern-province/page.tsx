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
    </>
  )
}
