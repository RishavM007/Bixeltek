
export const metadata = {
    title:  " Google Ads Agency in Riyadh | Certified PPC Management – Bixeltek",
    description:
        " Bixeltek is a Google Partner Certified agency offering advanced Google Ads management in Riyadh. Drive leads, calls, and sales through optimized PPC campaigns.",
    openGraph: {
        title: " Google Ads Agency in Riyadh | Certified PPC Management – Bixeltek",
        description:
            " Bixeltek is a Google Partner Certified agency offering advanced Google Ads management in Riyadh. Drive leads, calls, and sales through optimized PPC campaigns.",
        type: "website",
    },
    alternates: {
        canonical: "https://bixeltek.com/saudi-arabia/riyadh/google-ads-management",
    },
};


import HeroRiyadhGoogleAds from '@/components/Saudi/Riyadh/GoogleAds/SaudiRIGAHero';
import RiyadhGoogleAdsWorkflow from '@/components/Saudi/Riyadh/GoogleAds/SaudiRiGAProcess';
import GoogleAdsOpportunity from '@/components/Saudi/Riyadh/GoogleAds/SaudiRiGASection1';
import RiyadhGoogleAdsStrategySection from '@/components/Saudi/Riyadh/GoogleAds/SaudiRiGASection2';
import GoogleAdsMarqueeRiyadh from '@/components/Saudi/Riyadh/GoogleAds/SaudiRiGASection3';
import RiyadhGoogleAdsFramework from '@/components/Saudi/Riyadh/GoogleAds/SaudiRiGASection4';
import GoogleAdsServicesRiyadh from '@/components/Saudi/Riyadh/GoogleAds/SaudiRiGASection6';
import DataBeatsGuesswork from '@/components/Saudi/Riyadh/GoogleAds/SaudiRiGASection7';
import SaudiRiIndustries from '@/components/Saudi/Riyadh/SaudiRiInd';
import ContactFromNew from '@/components/ContactFormNew';
import React from 'react'
import SaudiRiIndustry from '@/components/Saudi/Riyadh/GoogleAds/SaudiRiGAInd';
import LocationHeroSection from '@/components/Common/location/LocationHeroSection';
import googleIcon from "@/assets/google-authenticator-svgrepo-com.png";
import clientIcon from "@/assets/star-shine-svgrepo-com.png";
import accountsIcon from "@/assets/medal-ribbons-star-svgrepo-com.png";
import LocationProcessSection from '@/components/Common/location/LocationProcessSection';


const proofPoints = [
    { id: 1, text: "Google Partner Certified", icon: googleIcon },
    { id: 2, text: "90% Client Retention", icon: clientIcon },
    { id: 3, text: "Managed 150+ Ad Accounts", icon: accountsIcon },
  ];

 const steps = [
  {
    number: "01",
    title: "Audit & Strategy",
    text: "We review your current campaigns, budgets, and goals — identifying performance gaps, inefficiencies, and growth potential. This ensures every Riyadh campaign starts with data, not assumptions.",
    gradient: "from-blue-500 via-cyan-400 to-transparent",
    color: "text-yellow-500",
    bgcolor: "hover:bg-yellow-500",
  },
  {
    number: "02",
    title: "Keyword & Offer Mapping",
    text: "We create precise campaign structures — SKAGs or themed clusters — based on audience intent, service priority, and location. Each keyword and ad group aligns with your profit drivers.",
    gradient: "from-green-500 via-teal-400 to-transparent",
    color: "text-green-500",
    bgcolor: "hover:bg-orange-500",
  },
  {
    number: "03",
    title: "Creative & Landing Page Design",
    text: "We design bilingual, conversion-optimized ad creatives and landing pages tailored for Saudi audiences. Every visual, headline, and CTA is crafted to engage and convert instantly.",
    gradient: "from-yellow-400 via-yellow-300 to-transparent",
    color: "text-blue-500",
    bgcolor: "hover:bg-yellow-400",
  },
  {
    number: "04",
    title: "Launch & Tracking Setup",
    text: "Campaigns go live with GA4, Tag Manager, and CRM integration. Every call, WhatsApp click, and form submission is tracked in real-time — complete transparency, zero guesswork.",
    gradient: "from-pink-500 via-purple-400 to-transparent",
    color: "text-red-500",
    bgcolor: "hover:bg-yellow-500",
  },
  {
    number: "05",
    title: "Optimization & Reporting",
    text: "Continuous bid adjustments, A/B testing, and weekly performance analysis. We refine creatives, update negatives, and scale winners — so your ad spend works harder each month.",
    gradient: "from-green-500 via-transparent to-transparent",
    color: "text-blue-600",
    bgcolor: "hover:bg-yellow-600",
  },
]; 

export default function page() {
  return (
   <>

   {/* <HeroRiyadhGoogleAds /> */}
     <LocationHeroSection
            ctaTheme='green'
            heading={
                <>
                <span>Google Ads Agency in Riyadh{" "}
              <span className="text-yellow-500">That Converts Clicks Into Customers</span></span>
                </>
            }
            description='We help Riyadh-based businesses generate consistent leads through
              high-performance Google Ads campaigns — from Search to Performance Max —
              built with precision, tracking, and strategy.'
              statement={
                <>
                <p className="mt-6 text-lg md:text-xl font-semibold text-yellow-400">
              Smart Targeting. Measurable ROI. Google Partner Expertise.
            </p>
                </>
              }
              proofPoints={proofPoints}
              primaryCTA={{
                    text: 'Get My Free Ads Audit',
                    action: { type: 'openForm', form: 'contact' },
                }}
                secondaryCTA={{
                    text: 'Talk to a PPC Expert ',
                    variant: 'secondary',
                    action: {
                    type: 'link',
                    href: 'mailto:zee@bixeltek.com',
                    },
                }}
            />
   <GoogleAdsOpportunity/>
   <GoogleAdsMarqueeRiyadh/>
   <RiyadhGoogleAdsStrategySection/>
   <RiyadhGoogleAdsFramework/>
   <GoogleAdsServicesRiyadh/>
   {/* <RiyadhGoogleAdsWorkflow/> */}
   <LocationProcessSection
   bg='bg-white'
   heading={
    <>
    <span>From Setup to Scale <br />{" "}
        <span className="text-yellow-500">A Proven 5-Step Google Ads Workflow.</span></span>
    </>
   }
   description='Every Riyadh client follows our precision-built process — transforming Google Ads from a
        guessing game into a predictable profit engine.'
    steps={steps}
    footerText='You see exactly where every riyal goes — and what it returns. No black box. No inflated
        numbers. Just transparent performance tracking and real growth.'
     cta={{
      text:'Book a Free Strategy Call',
      href:'mailto:zee@bixeltek.com',
      bg:'bg-gradient-to-tr from-green-500 via-green-700 to-green-950 hover:bg-gradient-to-tr hover:from-green-950 hover:via-green-700 hover:to-green-500 text-white'
     }}       
   />
   {/* <SaudiRiIndustries /> */}
   <SaudiRiIndustry/>
   <DataBeatsGuesswork />
   <section
  className="bg-[#fffdf5] py-20 px-6 lg:px-20 flex flex-col lg:flex-row items-center gap-10"
  id="google-ads-cta"
>
  {/* LEFT SIDE — TEXT */}
  <div className="w-full lg:w-1/2 flex flex-col justify-start items-start ">
    <h2 className="text-4xl md:text-6xl font-inter font-bold text-black mb-6">
      Ready to Grow With <span className="text-yellow-500">Riyadh’s Google Partner Agency?</span>
    </h2>

    <p className="text-gray-950 font-poppins text-base md:text-lg leading-relaxed mb-8">
      Start advertising with confidence. Let <span className="text-yellow-400 font-semibold">Bixeltek</span> manage,
      optimize, and scale your Google Ads with measurable ROI, transparent insights, and a world-class strategy
      built for Saudi markets.
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
  <div className="lg:w-[50%] lg:mr-10 flex justify-start items-center">
    <ContactFromNew />
  </div>
</section>

   </>
  )
}
