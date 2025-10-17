
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

export default function page() {
  return (
    <>
    <HeroRiyadh />
    <BusinessGrowthRiyadh />
    <MarketingChaosRiyadh />
    <DigitalMarketingMarqueeRiyadh />
    <GrowthCards />
    <DigitalMarketingServicesRiyadh/>
    <RiyadhDMSteps />
    <CoverageMapRiyadh />
    <SaudiRiIndustries />
    <SustainableGrowth />
    <section
  className="bg-black py-20 px-4 md:px-20 flex flex-col md:flex-row items-center gap-10"
  id="growth-system-riyadh"
>
  {/* LEFT SIDE — TEXT */}
  <div className="w-full md:w-1/2 flex flex-col justify-start items-start px-6">
    <h2 className="text-4xl md:text-6xl font-inter font-bold text-white mb-6">
      Ready to Build Your <span className="text-yellow-500">Growth System</span> in Riyadh?
    </h2>

    <p className="text-gray-50 font-poppins text-base md:text-lg leading-relaxed mb-6">
      Stop running disconnected ads. Start building a <span className="text-yellow-500 font-medium">data-driven marketing ecosystem</span> 
      that delivers visibility, leads, and measurable ROI across Saudi Arabia’s capital.
    </p>

    <p className="text-gray-300 font-poppins text-base md:text-lg leading-relaxed">
      With <span className="text-yellow-500 font-semibold">Bixeltek</span>, you get a partner — not just a provider.
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
