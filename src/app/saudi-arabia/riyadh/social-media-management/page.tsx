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



import LocationProcessSection from '@/components/Common/location/LocationProcessSection';
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

const steps = [
  {
    number: "01",
    title: "Discovery & Audit",
    text: "We start with a complete review of your brand’s current performance — analyzing audience insights, engagement data, and content strategy. This step uncovers what’s working, what’s not, and where your biggest opportunities for revenue growth lie.",
    gradient: "from-blue-500 via-blue-400 to-transparent",
    color: "text-blue-400",
    bgcolor: "hover:bg-blue-500",
  },
  {
    number: "02",
    title: "Positioning & Planning",
    text: "Next, we refine your messaging and positioning. We define your tone, target audience personas, and key brand messages that resonate. This clarity allows every piece of content and campaign to align with your core business goals.",
    gradient: "from-purple-500 via-indigo-400 to-transparent",
    color: "text-purple-400",
    bgcolor: "hover:bg-purple-500",
  },
  {
    number: "03",
    title: "Content & Campaign Production",
    text: "Our creative team designs scroll-stopping visuals, reels, and video ads crafted for maximum engagement. Every asset is optimized for clicks — built to capture attention, trigger curiosity, and convert casual viewers into loyal customers.",
    gradient: "from-pink-500 via-red-400 to-transparent",
    color: "text-pink-400",
    bgcolor: "hover:bg-pink-500",
  },
  {
    number: "04",
    title: "Launch & Manage Ads",
    text: "We activate full-funnel campaigns across Meta and LinkedIn, targeting each stage of your buyer journey. From awareness to conversion, every ad is tracked, tested, and optimized for real performance — not vanity metrics.",
    gradient: "from-yellow-400 via-orange-400 to-transparent",
    color: "text-yellow-400",
    bgcolor: "hover:bg-yellow-500",
  },
  {
    number: "05",
    title: "Optimization & Reporting",
    text: "Once campaigns are live, we continuously analyze results, retarget high-intent audiences, and scale what’s performing best. Our transparent reports break down ROI clearly — showing how awareness directly turns into revenue growth.",
    gradient: "from-green-500 via-transparent to-transparent",
    color: "text-green-400",
    bgcolor: "hover:bg-green-500",
  },
];


export default function page() {
  return (
    <>
    <HeroRiyadhSocial />
    <AudienceSection />
    <SocialStrategySection />
    {/* <SocialMediaHowItWorks/> */}
    <LocationProcessSection
    bg='bg-white'
    heading={
        <>
        <span> A Proven 5-Step System{" "}
        <br />
        <span className="text-blue-500">That Turns Awareness Into Revenue.</span></span>
        </>
    }
    description='Our framework transforms brand visibility into measurable business growth. 
        From deep-dive audits to campaign optimization, each step compounds results — 
        turning social engagement into tangible sales outcomes.'
       steps={steps} 
       cta={{
        text:'Book a Free Strategy Call',
        href:'mailto:zee@bixeltek.com',
        bg:'bg-gradient-to-tr from-blue-600 via-blue-700 to-blue-950 hover:from-blue-950 hover:via-blue-700 hover:to-blue-600 text-white'
       }}
      footerText='Each step compounds your visibility — not vanity metrics. 
        Our process ensures your brand captures attention, nurtures it with storytelling, 
        and converts it into measurable growth you can scale.' 
    />
    <SocialMediaSystemCTA/>
    <SocialMediaCards/>
    <SaudiRiAreasWeServe />
    <SaudiRiSocialIndustries />
    <SocialMediaProfitSection />
    <Blog/>
    </>
  )
}
