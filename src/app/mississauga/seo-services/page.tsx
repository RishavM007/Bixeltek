
export const metadata = {
    title: "SEO Services Mississauga | SEO Company & Agency – Bixeltek",
    description:
        " Looking for SEO services in Mississauga? Bixeltek helps businesses rank higher on Google, drive organic traffic, and generate consistent leads with proven SEO strategies.",
    keywords:
        "SEO services Mississauga, Best SEO company Mississauga, Local SEO Mississauga, On-page SEO optimization, Off-page SEO strategies, Technical SEO services, Keyword research Mississauga, Link building services, Content marketing Mississauga, E-commerce SEO Mississauga, WordPress SEO optimization, Mobile SEO services, SEO audit Mississauga, Search engine marketing, Google My Business optimization",
    openGraph: {
        title: "SEO Services Mississauga | SEO Company & Agency – Bixeltek",
        description:
            " Looking for SEO services in Mississauga? Bixeltek helps businesses rank higher on Google, drive organic traffic, and generate consistent leads with proven SEO strategies.",
        type: "website",
    },
    alternates: {
        canonical: "https://bixeltek.com/mississauga/seo-services",
    },
};


import React from 'react'
import HeroSEOMiss from '@/components/Mississauga/SeoServices/SMissHero'
import WhySEOMississauga from '@/components/Mississauga/SeoServices/SMissSection1'
import WhySEOVisibilityMississauga from '@/components/Mississauga/SeoServices/SMissSection2'
import SEOCampaignsMississauga from '@/components/Mississauga/SeoServices/SMissSection3'
import SEOTimelineMiss from '@/components/Mississauga/SeoServices/SMissTimeline'
import WhyChooseBixeltekSMiss from '@/components/Mississauga/SeoServices/SMissSection4'
import SMissIndustries from '@/components/Mississauga/SeoServices/SMissIndustries'
import SEOFaqMiss from '@/components/Mississauga/SeoServices/SMissFaq'
import MovingBlob from '@/components/Toronto/GoogleAds/BlobTG'
import Link from 'next/link'
import ContactFromNew from '@/components/ContactFormNew'

export default function page() {
    return (
        <>
            <HeroSEOMiss />
            <WhySEOMississauga />
            <WhySEOVisibilityMississauga />
            <SEOCampaignsMississauga />
            <SEOTimelineMiss />
            <WhyChooseBixeltekSMiss />
            <SMissIndustries />
            <MovingBlob />
            <SEOFaqMiss /> 
            <section
                className="bg-black p-8 md:p-20 mx-auto flex flex-col md:flex-row justify-center items-center gap-10"
                id="form"
            >
                {/* Left Side - Text & CTAs */}
                <div className="w-full md:w-1/2 flex flex-col justify-start items-start px-6">
                    <div className="space-y-5 text-white max-w-2xl">
                        <h2 className="text-4xl md:text-6xl capitalize font-inter font-bold">
                            Ready to Rank Higher and <span className="text-blue-500">Get More Leads in Mississauga?</span>
                        </h2>
                        <p className="text-white font-poppins text-base md:text-lg leading-relaxed">
                            If your business isn’t showing up in Google searches, your competitors are.
                            Partner with <span className="font-semibold">Bixeltek</span> to implement proven SEO strategies
                            that increase visibility, generate organic leads, and build long-term growth.
                        </p>

                        {/* CTA Buttons */}
                        
                    </div>
                </div>

                {/* Right Side - Contact Form */}
                <div className="w-full md:w-1/2 flex justify-center items-center mt-10 md:mt-0">
                    <ContactFromNew />
                </div>
            </section>

        </>
    )
}
