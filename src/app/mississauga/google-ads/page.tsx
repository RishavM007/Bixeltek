import React from 'react'
import HeroGMiss from '@/components/Mississauga/GoogleAds/GMissHero'
import WhyGoogleAdsMississauga from '@/components/Mississauga/GoogleAds/GMissSection1'
import GMissSection2 from '@/components/Mississauga/GoogleAds/GMissSection2'
import GoogleAdsCampaignsCards from '@/components/Mississauga/GoogleAds/GMissSection5'
import GoogleAdsServicesMississauga from '@/components/Mississauga/GoogleAds/GMissSection4'
import GMissTimeline from '@/components/Mississauga/GoogleAds/GMissTimeline'
import BenefitsSectionMississauga from '@/components/Mississauga/GoogleAds/GMissSection7'
import GMFaqMiss from '@/components/Mississauga/GoogleAds/GMissFaq'
import ContactFromNew from '@/components/ContactFormNew'
import Link from 'next/link'

export default function page() {
    return (
        <>
            <HeroGMiss />
            <WhyGoogleAdsMississauga />
            <GMissSection2 />
            <GoogleAdsServicesMississauga />
            <GoogleAdsCampaignsCards />
            <GMissTimeline />
            <BenefitsSectionMississauga />
            <GMFaqMiss />
            <section
                className="bg-black p-8 md:p-20 mx-auto flex flex-col md:flex-row justify-center items-center gap-10"
                id="form"
            >
                {/* Left Side - Text & CTAs */}
                <div className="w-full md:w-1/2 flex flex-col justify-start items-start px-6">
                    <div className="space-y-5 text-white max-w-2xl">
                        <h2 className="text-4xl md:text-6xl capitalize font-inter font-bold">
                            Ready to Run <span className="text-blue-500">Smarter Google Ads</span> in Mississauga?
                        </h2>
                        <p className="text-white font-poppins text-base md:text-lg leading-relaxed">
                            Your customers are searching right now. Don’t let competitors win those clicks.
                            Partner with <span className="font-semibold">Bixeltek</span>, a Google Partner Certified agency,
                            to launch smarter campaigns that generate measurable ROI.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 mt-6">
                            <a href="tel:+91-9100032301">
                                <button className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-xl font-semibold shadow-md transition">
                                    Book a Strategy Call
                                </button>
                            </a>
                            <Link href="/ads-audit">
                                <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold shadow-md transition">
                                    Get a Free Ads Audit
                                </button>
                            </Link>
                        </div>
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
