
export const metadata = {
    title: "Google Ads Services Mississauga | Google Partner Agency – Bixeltek",
    description:
        "Bixeltek is a Google Partner Certified agency in Mississauga. We manage Google Ads campaigns across Search, Display, Shopping, Performance Max & more to deliver qualified leads and measurable ROI.",
    keywords:
        "Web development Hyderabad, Best web development company Hyderabad, Custom website design, Next.js development, React.js development, Full-stack web development, Frontend development, Backend development, E-commerce website development, WordPress development, Responsive web design, UI/UX design Hyderabad, Web application development, Modern web technologies",
    openGraph: {
        title: "Google Ads Services Mississauga | Google Partner Agency – Bixeltek",
        description:
            "Bixeltek is a Google Partner Certified agency in Mississauga. We manage Google Ads campaigns across Search, Display, Shopping, Performance Max & more to deliver qualified leads and measurable ROI.",
        type: "website",
    },
    alternates: {
        canonical: "https://bixeltek.com/mississauga/google-ads",
    },
};


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
