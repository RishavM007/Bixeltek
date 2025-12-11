
export const metadata = {
    title: " Google Ads Management in Bangalore | PPC Agency for Lead Growth – Bixeltek",
    description:
        "Bixeltek is a Google Partner Certified PPC agency in Bangalore helping businesses generate more leads with optimized Google Ads campaigns, data tracking, and ROI-focused strategy.",
    keywords:
        "Web development Hyderabad, Best web development company Hyderabad, Custom website design, Next.js development, React.js development, Full-stack web development, Frontend development, Backend development, E-commerce website development, WordPress development, Responsive web design, UI/UX design Hyderabad, Web application development, Modern web technologies",
    openGraph: {
        title: " Google Ads Management in Bangalore | PPC Agency for Lead Growth – Bixeltek",
        description:
            "Bixeltek is a Google Partner Certified PPC agency in Bangalore helping businesses generate more leads with optimized Google Ads campaigns, data tracking, and ROI-focused strategy.",
        type: "website",
    },
    alternates: {
        canonical: "https://bixeltek.com/bangalore/google-ads-management",
    },
};

import BangaloreCoverageSection from '@/components/Bangalore/BangaloreAreas';
import GoogleAdsHero from '@/components/Bangalore/GoogleAds/BanGHero';
import BangaloreTech from '@/components/Bangalore/GoogleAds/BangTech';
import BangaloreGoogleAdsndustries from '@/components/Bangalore/GoogleAds/BanIndGoogleAds';
import BangalorePPCSection from '@/components/Bangalore/GoogleAds/BanSection1';
import GoogleAdsDashboardBan from '@/components/Bangalore/GoogleAds/BanSection2';
import BanGoogleProcessCards from '@/components/Bangalore/GoogleAds/BanSection3';
import PPCPerformanceSection from '@/components/Bangalore/GoogleAds/BanSection4';
import BangaloreGoogleAdsCampaigns from '@/components/Bangalore/GoogleAds/BanSection5';
import { Check } from 'lucide-react';
import ContactFromNew from '@/components/ContactFormNew';
import React from 'react'

export default function page() {
    return (
        <>
            <GoogleAdsHero />
            <BangalorePPCSection />
            <GoogleAdsDashboardBan />
            <BanGoogleProcessCards />
            <PPCPerformanceSection />
            <BangaloreGoogleAdsCampaigns />
            <BangaloreTech />
            <BangaloreCoverageSection />
            <BangaloreGoogleAdsndustries />
            <section
                className="bg-black py-20 px-4 md:px-20 flex flex-col md:flex-row items-center gap-10"
                id="ppc-audit"
            >
                {/* LEFT SIDE — Text & CTAs */}
                <div className="w-full md:w-1/2 flex flex-col justify-start items-start px-6">
                    {/* Heading */}
                    <h2 className="text-4xl md:text-5xl font-inter font-medium text-white mb-6 leading-tight">
                        Find Out How Efficient Your{" "}
                        <span className="text-blue-500">Google Ads Campaigns</span> Really Are
                    </h2>

                    {/* Description */}
                    <p className="text-gray-100 font-poppins text-sm md:text-base leading-relaxed mb-8">
                        Our free <span className="text-blue-400 font-medium">48-point PPC audit</span> identifies
                        gaps in targeting, budget allocation, and conversion tracking.
                        You’ll receive a detailed report on your ad performance with{" "}
                        <span className="text-blue-400 font-medium">actionable recommendations</span> for improvement.
                    </p>

                    {/* Audit Points */}
                    <ul className="flex flex-col text-white gap-4 mb-8">
                        {[
                            "Account structure and keyword performance review",
                            "Ad relevance and landing page match rate",
                            "Conversion tracking and analytics verification",
                            "Competitor ad insights and cost analysis",
                        ].map((point, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                                <Check className="h-6 w-6 text-blue-500 flex-shrink-0 mt-[2px]" />
                                <span>{point}</span>
                            </li>
                        ))}
                    </ul>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 mt-4">
                        {/* <button className="px-6 py-3 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-all duration-300">
                            Get My Free PPC Audit
                        </button> */}
                        <a href='mailto:zee@bixeltek.com'>
                        <button className="px-6 py-3 rounded-full border border-blue-500 text-blue-400 font-semibold hover:bg-blue-600/20 transition-all duration-300">
                            Speak to an Ads Specialist
                        </button>
                        </a>
                    </div>

                    {/* Trust Badges */}
                    <ul className="text-sm mt-10 flex flex-row gap-5 md:gap-10 transition-all duration-500">
                        <li>
                            <a
                                href="https://www.google.com/partners/agency?id=2188074075"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-2 flex justify-start"
                            >
                                <img
                                    src="https://www.gstatic.com/partners/badge/images/2024/PartnerBadgeClickable.svg"
                                    alt="Google Partner Badge"
                                    className="w-auto h-16 md:h-24"
                                />
                            </a>
                        </li>
                        <li>
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://www.goodfirms.co/company/bixeltek"
                            >
                                <img
                                    src="https://assets.goodfirms.co/badges/color-badge/top-digital-marketing-companies.svg"
                                    title="Top Digital Marketing Company"
                                    className="w-20 md:w-32 h-auto"
                                    alt="Top Digital Marketing Company on GoodFirms"
                                />
                            </a>
                        </li>
                    </ul>
                </div>

                {/* RIGHT SIDE — Contact Form */}
                <div className="w-[95%] md:w-[50%] lg:mr-10 flex justify-start items-center">
                    <ContactFromNew />
                </div>
            </section>
        </>
    )
}
