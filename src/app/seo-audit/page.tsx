import VisibilityLossBanner2 from '@/components/Funnel/SocialMedia/SEOFunnelSection2'
import HeroSEOAudit from '@/components/Funnel/SocialMedia/FunnelSEOHero'
import SEOPainSection from '@/components/Funnel/SocialMedia/SEOFunnelSection1'
import React from 'react'
import SemanticSEOProcessSection from '@/components/Funnel/SocialMedia/SEOFunnelProcess'
import SEOFunnelBenefitsSection from '@/components/Funnel/SocialMedia/FunnelSEOSection3'
import FunnelSEOCase from '@/components/Funnel/SocialMedia/FunnelSEOCase'
import IndustriesFunnelSEO from '@/components/Funnel/SocialMedia/FunnelSEOIndustries'
import FunnelSEOTest from '@/components/Funnel/SocialMedia/FunnelSEOTestimonials'
import ContactFromNew from '@/components/ContactFormNew'

export default function page() {
    return (
        <>
            <HeroSEOAudit />
            <SEOPainSection />
            <VisibilityLossBanner2 />
            <SemanticSEOProcessSection />
            <SEOFunnelBenefitsSection />
            <IndustriesFunnelSEO />
            <FunnelSEOCase />
            <FunnelSEOTest />
            <section
                className="bg-white py-20 px-4 md:px-20 flex flex-col md:flex-row items-center gap-10"
                id="seo-future-proof"
            >
                {/* Left Side - Text & CTAs */}
                <div className="w-full md:w-1/2 flex flex-col justify-start items-start px-6">
                    <h2 className="text-4xl md:text-6xl font-inter font-bold text-black mb-6 leading-tight">
                        Be the Brand <span className="text-blue-500">Google and AI Can’t Ignore.</span>
                    </h2>
                    <p className="text-gray-900 font-poppins text-base md:text-lg leading-relaxed mb-8">
                        SEO isn’t just about ranking anymore — it’s about being recognized by the systems your customers use daily.
                        <br />
                        Let’s make your business visible everywhere it matters.
                    </p>

                    {/* Optional CTA Buttons */}
                    {/* <div className="flex flex-col sm:flex-row gap-4 mt-6">
      <a href="/seo-services">
        <button className="px-7 py-3 rounded-2xl bg-blue-600 text-white font-semibold text-sm shadow-lg hover:bg-blue-700 transition">
          Explore SEO Services
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
                <div className="w-[95%] md:w-[50%] shadow-2xl lg:mr-32 flex justify-start items-center">
                    <ContactFromNew />
                </div>
            </section>

        </>
    )
}
