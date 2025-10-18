
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

export default function page() {
  return (
   <>

   <HeroRiyadhGoogleAds />
   <GoogleAdsOpportunity/>
   <GoogleAdsMarqueeRiyadh/>
   <RiyadhGoogleAdsStrategySection/>
   <RiyadhGoogleAdsFramework/>
   <GoogleAdsServicesRiyadh/>
   <RiyadhGoogleAdsWorkflow/>
   {/* <SaudiRiIndustries /> */}
   <SaudiRiIndustry/>
   <DataBeatsGuesswork />
   <section
  className="bg-[#fffdf5] py-20 px-4 md:px-20 flex flex-col md:flex-row items-center gap-10"
  id="google-ads-cta"
>
  {/* LEFT SIDE — TEXT */}
  <div className="w-full md:w-1/2 flex flex-col justify-start items-start px-6">
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
  <div className="w-[95%] md:w-[50%] lg:mr-10 flex justify-start items-center">
    <ContactFromNew />
  </div>
</section>

   </>
  )
}
