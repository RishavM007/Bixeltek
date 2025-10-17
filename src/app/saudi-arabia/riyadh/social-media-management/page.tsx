export const metadata = {
    title:  "Social Media Marketing in Riyadh | Ads That Drive Growth",
    description:
        " Turn social media into sales. Bixeltek runs high-ROI campaigns in Riyadh — creative content, Meta ads, and full-funnel strategy that converts followers into clients.",
    openGraph: {
        title: "Social Media Marketing in Riyadh | Ads That Drive Growth",
        description:
            " Turn social media into sales. Bixeltek runs high-ROI campaigns in Riyadh — creative content, Meta ads, and full-funnel strategy that converts followers into clients.",
        type: "website",
    },
    alternates: {
        canonical: "https://bixeltek.com/saudi-arabia/riyadh/social-media-management",
    },
};



import SaudiRiIndustries from '@/components/Saudi/Riyadh/SaudiRiInd'
import SaudiRiAreasWeServe from '@/components/Saudi/Riyadh/SocialMedia/SaudiRiSocialAreas'
import SocialMediaSystemCTA from '@/components/Saudi/Riyadh/SocialMedia/SaudiRiSocialCTA'
import HeroRiyadhSocial from '@/components/Saudi/Riyadh/SocialMedia/SaudiRiSocialHero'
import SaudiRiSocialIndustries from '@/components/Saudi/Riyadh/SocialMedia/SaudiRiSocialInd'
import { AudienceSection } from '@/components/Saudi/Riyadh/SocialMedia/SaudiRiSocialSection1'
import SocialStrategySection from '@/components/Saudi/Riyadh/SocialMedia/SaudiRiSocialSection2'
import SocialMediaHowItWorks from '@/components/Saudi/Riyadh/SocialMedia/SaudiRiSocialSection3'
import SocialMediaCards from '@/components/Saudi/Riyadh/SocialMedia/SaudiRiSocialSection4'
import SocialMediaProfitSection from '@/components/Saudi/Riyadh/SocialMedia/SaudiRiSocialSection5'
import Blog from '@/sections/Blog'
import React from 'react'

export default function page() {
  return (
    <>
    <HeroRiyadhSocial />
    <AudienceSection />
    <SocialStrategySection />
    <SocialMediaHowItWorks/>
    <SocialMediaSystemCTA/>
    <SocialMediaCards/>
    <SaudiRiAreasWeServe />
    <SaudiRiSocialIndustries />
    <SocialMediaProfitSection />
    <Blog/>
    </>
  )
}
