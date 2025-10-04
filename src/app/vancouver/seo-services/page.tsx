export const metadata = {
    title: "SEO Services Vancouver | AI & Local SEO Agency – Bixeltek",
    description:
        " Bixeltek is a Google Partner Certified SEO agency helping Vancouver businesses grow with AI SEO, local SEO, and data-driven optimization that drives traffic and conversions.",
    keywords:
        "Web development Hyderabad, Best web development company Hyderabad, Custom website design, Next.js development, React.js development, Full-stack web development, Frontend development, Backend development, E-commerce website development, WordPress development, Responsive web design, UI/UX design Hyderabad, Web application development, Modern web technologies",
    openGraph: {
        title: "SEO Services Vancouver | AI & Local SEO Agency – Bixeltek",
        description:
            "Bixeltek is a Google Partner Certified SEO agency helping Vancouver businesses grow with AI SEO, local SEO, and data-driven optimization that drives traffic and conversions.",
        type: "website",
    },
    alternates: {
        canonical: "https://bixeltek.com/vancouver/seo-services",
    },
};
import React from 'react'
import HeroSeoVancouver from '@/components/Vancouver/SeoServices/VanSeoHero';
import SeoImportanceSection from '@/components/Vancouver/SeoServices/VancSeoSection1';
import SeoServicesVancouver from '@/components/Vancouver/SeoServices/VanSeoServices';
import SeoProcessVancouver from '@/components/Vancouver/SeoServices/VanSeoProcess';
import SeoVanIndustries from '@/components/Vancouver/SeoServices/VanSeoIndustries';
import SeoChooseVancSection from '@/components/Vancouver/SeoServices/VanSeoWhyChoose';
import AreasWeServeCanadaVanc from '@/components/Vancouver/SeoServices/VanSeoAreasWeServe';
import VancouverSeoChallenges from '@/components/Vancouver/SeoServices/SeoVncSection3';

import ContactFromNew from '@/components/ContactFormNew';

export default function page() {
    return (
        <>
            <HeroSeoVancouver />
            <SeoImportanceSection />
            <VancouverSeoChallenges/>
            <SeoServicesVancouver />
            <SeoProcessVancouver />
            <SeoVanIndustries />
            <SeoChooseVancSection />
            <AreasWeServeCanadaVanc />

            <section
                className="bg-black py-20 px-4 md:px-20 flex flex-col md:flex-row items-center gap-10"
                id="form"
            >
                {/* Left Side - Text & CTAs */}
                <div className="w-full md:w-1/2 flex flex-col justify-start items-start px-6">
                    <h2 className="text-4xl md:text-5xl font-inter font-bold text-white mb-6">
                        Ready to Grow Your Vancouver Business<span className="text-blue-500"> With SEO That Works?</span>
                    </h2>
                    <p className="text-gray-300 font-poppins text-base md:text-lg leading-relaxed mb-8">
                        Your competitors are investing in visibility. The question is — will customers find them or you? Partner with Bixeltek for SEO strategies that combine data, creativity, and AI innovation to grow your traffic, trust, and ROI.
                    </p>

                    {/* CTA Buttons */}
                    
                </div>

                {/* Right Side - Contact Form */}
                <div className="w-[95%] md:w-[50%] lg:mr-32 flex justify-start items-center">
                    <ContactFromNew />
                </div>
            </section>

        </>
    )
}
