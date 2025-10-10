import HeroFullSystemMarketing from '@/components/Funnel/DigitalMarketing/FunnelDMHero'
import MarketingGuessingGameSection from '@/components/Funnel/DigitalMarketing/FunnelDMSection1'
import DeliveringMathSection from '@/components/Funnel/DigitalMarketing/FunnelDMSection2'
import CollaborativeGrowthFramework from '@/components/Funnel/DigitalMarketing/FunnelDMSection3'
import RevenueLoopSection from '@/components/Funnel/DigitalMarketing/FunnelDMSection4'
import FunnelDMCase from '@/components/Funnel/DigitalMarketing/FunnelDMSection5'
import GrowthPartnerSection from '@/components/Funnel/DigitalMarketing/FunnelDMSection6'
import ClientTrustSection from '@/components/Funnel/DigitalMarketing/FunnelDMSectionTesti'
import FullSystemFAQ from '@/components/Funnel/DigitalMarketing/FunnelDMFaq'
import React from 'react'

export default function page() {
  return (
    <>
    <HeroFullSystemMarketing />
    <MarketingGuessingGameSection />
    <DeliveringMathSection />
    <CollaborativeGrowthFramework />
    <RevenueLoopSection />
    <FunnelDMCase />
    <GrowthPartnerSection />
    <ClientTrustSection />
    <FullSystemFAQ />
    </>
  )
}
