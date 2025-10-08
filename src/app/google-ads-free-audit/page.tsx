import HeroGoogleAdsAudit from '@/components/Funnel/GoogleAds/GoogleFunnelHero'
import GoogleAdsFunnelProcessSection from '@/components/Funnel/GoogleAds/GoogleFunnelProcess'
import GoogleAdsPainSection from '@/components/Funnel/GoogleAds/GoogleFunnelSection1'
import VisibilityLossBanner from '@/components/Funnel/GoogleAds/GoogleFunnelSection2'
import DataResultsSection from '@/components/Funnel/GoogleAds/GoogleFunnelSection3'
import FreeAuditSection from '@/components/Funnel/GoogleAds/GoogleFunnelSection4'
import GooglePartnerSection from '@/components/Funnel/GoogleAds/GoogleFunnelSection5'
import GoogleAdsTrustSection from '@/components/Funnel/GoogleAds/GoogleFunnelTestimonials'
import GoogleFunnelFaq from '@/components/Funnel/GoogleAds/GoogleFunnelSection6'
import ContactFromNew from '@/components/ContactFormNew'
import React from 'react'

export default function page() {
  return (
    <>
    <HeroGoogleAdsAudit />
    <GoogleAdsPainSection />
    <VisibilityLossBanner />
    <GoogleAdsFunnelProcessSection />
    <DataResultsSection />
    <FreeAuditSection />
    <GooglePartnerSection />
    <GoogleAdsTrustSection />
    <GoogleFunnelFaq />
    <section
  className="bg-black py-20 px-4 md:px-20 flex flex-col md:flex-row items-center gap-10"
  id="form"
>
  {/* Left Side - Text & CTAs */}
  <div className="w-full md:w-1/2 flex flex-col justify-start items-start px-6">
    <h2 className="text-4xl md:text-6xl font-inter font-bold text-white mb-6">
      Let’s <span className="text-blue-500">Turn Every Click Into a Customer</span>
    </h2>
    <p className="text-gray-300 font-poppins text-base md:text-lg leading-relaxed mb-8">
      You’ve already invested in Google Ads. <br />
      Now, invest in making it work. <br />
      Request your Free Google Ads Audit today — and discover how to transform your ad spend into predictable, profitable growth.
    </p>

    {/* Optional CTA Buttons */}
    {/* <div className="flex flex-col sm:flex-row gap-4 mt-6">
        <a href="/vancouver/google-ads-audit">
            <button className="px-7 py-3 rounded-2xl bg-blue-600 text-white font-semibold text-sm shadow-lg hover:bg-blue-700 transition">
                Get a Free Ads Audit
            </button>
        </a>
        <a href="/contact-us">
            <button className="px-7 py-3 rounded-2xl bg-white text-black font-semibold text-sm shadow-lg hover:bg-gray-100 transition">
                Book a Strategy Call
            </button>
        </a>
    </div> */}
  </div>

  {/* Right Side - Contact Form */}
  <div className="w-[95%] md:w-[50%] lg:mr-32 flex justify-start items-center">
    <ContactFromNew />
  </div>
</section>

    </>
  )
}
