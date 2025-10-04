

export const metadata = {
    title: "Web Design Services Toronto | Bixeltek – Websites That Convert & Grow",
    description:
        " Looking for web design services in Toronto? Bixeltek builds custom, SEO-ready, and conversion-focused websites trusted by businesses across Canada.",
    keywords:
        "Web development Hyderabad, Best web development company Hyderabad, Custom website design, Next.js development, React.js development, Full-stack web development, Frontend development, Backend development, E-commerce website development, WordPress development, Responsive web design, UI/UX design Hyderabad, Web application development, Modern web technologies",
    openGraph: {
        title: "Web Design Services Toronto | Bixeltek – Websites That Convert & Grow",
        description:
            "Looking for web design services in Toronto? Bixeltek builds custom, SEO-ready, and conversion-focused websites trusted by businesses across Canada.",
        type: "website",
    },
    alternates: {
        canonical: "https://bixeltek.com/toronto/web-design",
    },
};


import React from 'react'
import TWHero from '@/components/Toronto/Webdev/TWHero'
import MovingBlob from '@/components/Toronto/GoogleAds/BlobTG'
import WhyWebsiteToronto from '@/components/Toronto/Webdev/TWSection1'
import SolutionSection from '@/components/Toronto/Webdev/TWSection2'
import WebDesignToronto2 from '@/components/Toronto/Webdev/TWSection3'
import WebsiteMattersSection from '@/components/Toronto/Webdev/TWSection4'
import WebDesignServicesToronto from '@/components/Toronto/Webdev/TWSection5'
import IndustryCarouselSectionSeo from '@/components/Toronto/Webdev/TWSection6'
import ProcessTorontoWebdev from '@/components/Toronto/Webdev/TWTimeline'
import BenefitsSectionWebDesign from '@/components/Toronto/Webdev/TWBenefits'
import AreasWeServeCanadaTW from '@/components/Toronto/Webdev/TWAreasWeServe'
import ContactFromNew from '@/components/ContactFormNew'
import Link from 'next/link';
import { PhoneCall, MessageCircle, CalendarDays } from 'lucide-react';
import TWFaq from '@/components/Toronto/Webdev/TWFaq'
export default function page() {
    return (
        <>
            <TWHero />
            <MovingBlob />
            <WhyWebsiteToronto />
            <SolutionSection />
            <WebDesignToronto2 />
            <WebsiteMattersSection />
            <WebDesignServicesToronto />
            <IndustryCarouselSectionSeo />
            <ProcessTorontoWebdev />
            <BenefitsSectionWebDesign />
            <AreasWeServeCanadaTW />
            <TWFaq />
            <section
                className="bg-black p-2 md:p-20 mx-auto flex flex-col justify-center gap-10 items-center md:flex-row"
                id="form"
            >
                {/* Left Side - Text & CTAs */}
                <div className="w-full mt-14 md:mt-0 flex justify-start items-start px-6">
                    <div className="space-y-5 text-white max-w-2xl">
                        <h2 className="text-4xl md:text-6xl capitalize font-inter font-bold">
                            Ready to Fix What’s <span className="text-blue-500">Holding Your Website Back?</span>
                        </h2>
                        <p className="text-white font-poppins text-base leading-relaxed">
                            If your website is outdated, slow, or failing to bring results, it’s costing you more than you realize. At Bixeltek, we design websites that solve problems, remove customer frustrations, and generate measurable business growth.
                        </p>

                        {/* CTA Buttons */}
                       
                    </div>
                </div>

                {/* Right Side - Contact Form */}
                <div className="w-[87%] lg:mr-32 flex justify-start items-center">
                    <ContactFromNew />
                </div>
            </section>
        </>
    )
}
