export const metadata = {
    title: "Google Ads Management Vancouver | Google Partner PPC Agency",
    description:
        "Bixeltek is a Google Partner Certified Google Ads agency in Vancouver. We manage PPC campaigns across Search, Display, Shopping, and more to deliver qualified leads and measurable ROI.",
    keywords:
        "Web development Hyderabad, Best web development company Hyderabad, Custom website design, Next.js development, React.js development, Full-stack web development, Frontend development, Backend development, E-commerce website development, WordPress development, Responsive web design, UI/UX design Hyderabad, Web application development, Modern web technologies",
    openGraph: {
        title: "Google Ads Management Vancouver | Google Partner PPC Agency",
        description:
            "Bixeltek is a Google Partner Certified Google Ads agency in Vancouver. We manage PPC campaigns across Search, Display, Shopping, and more to deliver qualified leads and measurable ROI.",
        type: "website",
    },
    alternates: {
        canonical: "https://bixeltek.com/vancouver/google-ads",
    },
};

import React from 'react'
import HeroGoogleAdsVancouver from '@/components/Vancouver/GoogleAds/GoogleVanHero';
import AdBudgetSection from '@/components/Vancouver/GoogleAds/GoogleVanSection1';
import GoogleAdsServicesVancouver from '@/components/Vancouver/GoogleAds/GoogleVanSection2';
import GoogleAdsCampaignsVancouver from '@/components/Vancouver/GoogleAds/GoogleVanSection3';
import GoogleAdsProcessVancouver from '@/components/Vancouver/GoogleAds/GoogleVanTimeline';
import GoogleVanIndustries from '@/components/Vancouver/GoogleAds/GoogleAdsIndustries';
import AreasWeServeCanada from '@/components/Vancouver/GoogleAds/AreasWeServeVan';
import VancouverAdsFaqs from '@/components/Vancouver/GoogleAds/GoogleVanFaq';
import Link from 'next/link';
import ContactFromNew from '@/components/ContactFormNew';
import ServicesSection from '@/components/Common/ServicesGrid';
export default function page() {
      const services = [
    {
      title: "Campaign Setup & Strategy",
      description:
        "Keyword research, competitor analysis, and campaign structuring designed for Vancouver’s competitive market.",
      benefit: "Campaigns built for maximum ROI.",
      link: "#",
    },
    {
      title: "Compelling Ad Copywriting",
      description:
        "Ads written to resonate with local customers and drive action.",
      benefit: "Higher click-through rates and engagement.",
      link: "#",
    },
    {
      title: "Landing Page Optimization",
      description:
        "SEO-friendly, conversion-focused designs built to capture leads.",
      benefit: "More conversions from your ad traffic.",
      link: "#",
    },
    {
      title: "Conversion Tracking & Analytics",
      description:
        "Track every click, call, and form with transparent reporting.",
      benefit: "Complete visibility on ROI.",
      link: "#",
    },
    {
      title: "Bid & Budget Management",
      description:
        "Daily adjustments to maximize ROI and minimize waste.",
      benefit: "Optimized spend and lower cost-per-lead.",
      link: "#",
    },
    {
      title: "Continuous Optimization",
      description:
        "A/B testing, keyword pruning, and campaign refinement.",
      benefit: "Better performance over time.",
      link: "#",
    },
  ];
    return (
        <>
            <HeroGoogleAdsVancouver />
            <AdBudgetSection />
            <ServicesSection
            heading='Smarter Campaigns That'
            spanText='Deliver Real Results'
            description='Bixeltek provides complete Google Ads management in Vancouver — from setup to optimization — ensuring your budget works harder for better results.'
            services={services}
            />
            <GoogleAdsCampaignsVancouver />
            <GoogleAdsProcessVancouver />
            <GoogleVanIndustries />
            <AreasWeServeCanada />
            <VancouverAdsFaqs />
            <section
                className="bg-black py-10 lg:py-20 md:px-8 lg:px-20 flex flex-col lg:flex-row items-center gap-10"
                id="form"
            >
                {/* Left Side - Text & CTAs */}
                <div className="w-full lg:w-1/2 flex flex-col justify-start items-start px-6">
                    <h2 className="text-4xl md:text-6xl font-inter font-bold text-white mb-6">
                        Ready to <span className="text-blue-500">Run Smarter Google Ads in Vancouver?</span>
                    </h2>
                    <p className="text-gray-300 font-poppins text-base md:text-lg leading-relaxed mb-8">
                        Your customers are searching right now. The question is — will they find you, or your competitors? Partner with Bixeltek to run Google Ads campaigns that drive qualified leads and measurable ROI in Vancouver.
                    </p>

                    {/* CTA Buttons */}
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
                <div className="w-[90%] lg:w-[50%] lg:mr-32 flex justify-start items-center">
                    <ContactFromNew />
                </div>
            </section>

        </>
    )
}
