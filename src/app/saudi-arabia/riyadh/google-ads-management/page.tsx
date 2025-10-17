
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
   <SaudiRiIndustries />
   <DataBeatsGuesswork />
   <section
  className="bg-black py-20 px-4 md:px-20 flex flex-col md:flex-row items-center gap-10"
  id="google-ads-cta"
>
  {/* LEFT SIDE — TEXT */}
  <div className="w-full md:w-1/2 flex flex-col justify-start items-start px-6">
    <h2 className="text-4xl md:text-6xl font-inter font-bold text-white mb-6">
      Ready to Grow With <span className="text-yellow-500">Riyadh’s Google Partner Agency?</span>
    </h2>

    <p className="text-gray-50 font-poppins text-base md:text-lg leading-relaxed mb-8">
      Start advertising with confidence. Let <span className="text-yellow-400 font-semibold">Bixeltek</span> manage,
      optimize, and scale your Google Ads with measurable ROI, transparent insights, and a world-class strategy
      built for Saudi markets.
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
