
import HeroRiyadh from '@/components/Saudi/Riyadh/SaudiRiHero'
import SaudiRiIndustries from '@/components/Saudi/Riyadh/SaudiRiInd'
import RiyadhDMSteps from '@/components/Saudi/Riyadh/SaudiRiProcess'
import BusinessGrowthRiyadh from '@/components/Saudi/Riyadh/SaudiRiSection1'
import MarketingChaosRiyadh from '@/components/Saudi/Riyadh/SaudiRiSection2'
import GrowthCards from '@/components/Saudi/Riyadh/SaudiRiSection3'
import DigitalMarketingServicesRiyadh from '@/components/Saudi/Riyadh/SaudiRiSection4'
import DigitalMarketingMarqueeRiyadh from '@/components/Saudi/Riyadh/SaudiRiSection5'
import CoverageMapRiyadh from '@/components/Saudi/Riyadh/SaudiRiSection6'
import SustainableGrowth from '@/components/Saudi/Riyadh/SaudiRiSection7'
import ContactFromNew from '@/components/ContactFormNew'
import React from 'react'
import LocationHeroSection from '@/components/Common/location/LocationHeroSection'
import googleIcon from "@/assets/google-authenticator-svgrepo-com.png";
import clientIcon from "@/assets/star-shine-svgrepo-com.png";
import saudiIcon from "@/assets/medal-ribbons-star-svgrepo-com.png";

// ✅ Background Image
import heroBg from "@/assets/Riyadh_Skyline.jpg";
import LocationProcessSection from '@/components/Common/location/LocationProcessSection'

 const proofPoints = [
    { id: 1, text: "Google Partner Certified", icon: googleIcon },
    { id: 2, text: "90% Client Retention", icon: clientIcon },
    { id: 3, text: "Trusted by Businesses Across Saudi Arabia", icon: saudiIcon },
  ];

  const steps = [
    {
        number: "01",
        title: "Discovery & Audit",
        text: "We analyze your current digital presence, competitors, and growth potential. This step uncovers performance gaps, hidden opportunities, and defines benchmarks for success in Riyadh’s competitive market.",
        gradient: "from-blue-500 via-blue-400 to-transparent",
        color: "text-yellow-500",
        bgcolor: "hover:bg-yellow-500",
    },
    {
        number: "02",
        title: "Strategy & Keyword Mapping",
        text: "We identify Arabic and English search opportunities that align with your business goals — building a strategic roadmap based on audience behavior, search intent, and market dynamics.",
        gradient: "from-green-500 via-teal-400 to-transparent",
        color: "text-orange-500",
        bgcolor: "hover:bg-orange-500",
    },
    {
        number: "03",
        title: "Campaign Design & Web Setup",
        text: "Our team creates high-performing ad campaigns, localized SEO clusters, and conversion-focused landing pages. Every component is engineered to attract, engage, and convert.",
        gradient: "from-yellow-400 via-yellow-300 to-transparent",
        color: "text-yellow-400",
        bgcolor: "hover:bg-yellow-400",
    },
    {
        number: "04",
        title: "Launch & Tracking",
        text: "We deploy your campaigns with precision — full GA4 integration, Tag Manager setup, and conversion event tracking ensure every click is measured and every lead accounted for.",
        gradient: "from-pink-500 via-purple-400 to-transparent",
        color: "text-yellow-500",
        bgcolor: "hover:bg-yellow-500",
    },
    {
        number: "05",
        title: "Optimization & Scale",
        text: "Continuous A/B testing, conversion rate optimization, and data-backed scaling — turning your marketing from reactive to predictable, and from clicks to consistent growth.",
        gradient: "from-green-500 via-transparent to-transparent",
        color: "text-yellow-600",
        bgcolor: "hover:bg-yellow-600",
    },
];

export default function page() {
  return (
    <>
      {/* <HeroRiyadh /> */}
      <LocationHeroSection
            ctaTheme='green'
            heading={
                <>
                <span>Digital Marketing Agency in Riyadh{" "}
            <span className="text-yellow-500">That Drives Measurable Growth</span></span>
                </>
            }
            description=' From Al Olaya to Diriyah and Al Yasmin — Bixeltek helps Saudi businesses attract more customers, optimize ad spend, and dominate online visibility through performance-driven marketing systems.'
              proofPoints={proofPoints}
              primaryCTA={{
                    text: 'Get My Free Growth Audit',
                    action: { type: 'openForm', form: 'contact' },
                }}
                secondaryCTA={{
                    text: 'Talk to a Strategist',
                    variant: 'secondary',
                    action: {
                    type: 'link',
                    href: 'mailto:zee@bixeltek.com',
                    },
                }}
                backgroundImage={heroBg}      
            />
      <BusinessGrowthRiyadh />
      <MarketingChaosRiyadh />
      <DigitalMarketingMarqueeRiyadh />
      <GrowthCards />
      <DigitalMarketingServicesRiyadh />
            {/* <RiyadhDMSteps /> */}
      <LocationProcessSection
      bg='bg-white'
      heading={
        <>
        <span>From First Click to Consistent Growth <br /> <span className="text-yellow-500">A 5-Step Proven System.</span></span>
        </>
      }
      description='Every Riyadh client follows our structured roadmap that transforms their marketing from reactive to predictable.'
      steps={steps}
      cta={{
        text:'Book a Free Strategy Call',
        href:'mailto:zee@bixeltek.com',
        bg:'bg-gradient-to-tr from-green-500 via-green-700 to-green-950 hover:bg-gradient-to-tr hover:from-green-950 hover:via-green-700 hover:to-green-500 text-white'
      }}
      footerText='This systematic approach ensures that your campaigns, SEO, and ads grow smarter over time —
                guided by insights, not guesswork.'
      />
      <CoverageMapRiyadh />
      <SaudiRiIndustries />
      <SustainableGrowth />
      <section
        className="bg-[#fffdf5] py-20 px-6 lg:px-20 flex flex-col lg:flex-row items-center gap-10"
        id="growth-system-riyadh"
      >
        {/* LEFT SIDE — TEXT */}
        <div className="w-full lg:w-1/2 flex flex-col justify-start items-start">
          <h2 className="text-4xl md:text-6xl font-inter font-bold text-black mb-6">
            Ready to Build Your <span className="text-yellow-500">Growth System</span> in Riyadh?
          </h2>

          <p className="text-gray-950 font-poppins text-base md:text-lg leading-relaxed mb-6">
            Stop running disconnected ads. Start building a <span className="text-yellow-500 font-medium">data-driven marketing ecosystem</span>
            that delivers visibility, leads, and measurable ROI across Saudi Arabia’s capital.
          </p>

          <p className="text-gray-900 font-poppins text-base md:text-lg leading-relaxed">
            With <span className="text-yellow-500 font-semibold">Bixeltek</span>, you get a partner — not just a provider.
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
