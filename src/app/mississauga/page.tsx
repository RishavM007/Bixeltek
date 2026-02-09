
export const metadata = {
    title: "Digital Marketing Agency Mississauga | SEO, Google Ads & Web Design – Bixeltek",
    description:
        "Bixeltek is a Google Partner Certified digital marketing agency helping Mississauga businesses generate leads and scale ROI with SEO, Google Ads, web design, and more.",
    keywords:
        "Web development Hyderabad, Best web development company Hyderabad, Custom website design, Next.js development, React.js development, Full-stack web development, Frontend development, Backend development, E-commerce website development, WordPress development, Responsive web design, UI/UX design Hyderabad, Web application development, Modern web technologies",
    openGraph: {
        title: "Digital Marketing Agency Mississauga | SEO, Google Ads & Web Design – Bixeltek",
        description:
            "Bixeltek is a Google Partner Certified digital marketing agency helping Mississauga businesses generate leads and scale ROI with SEO, Google Ads, web design, and more.",
        type: "website",
    },
    alternates: {
        canonical: "https://bixeltek.com/mississauga",
    },
};

import React from 'react'
import HeroDMiss from '@/components/Mississauga/DigitalMarketing/DMissHero'
import WhyGoogleAdsMississauga from '@/components/Mississauga/DigitalMarketing/Section1DMiss'
import DM_BenefitsMississauga from '@/components/Mississauga/DigitalMarketing/Section2DMiss'
import DigitalMarketingServicesMississauga from '@/components/Mississauga/DigitalMarketing/Section3DMiss'
import MovingBlob from '@/components/Toronto/GoogleAds/BlobTG'
import MississaugaSection4 from '@/components/Mississauga/DigitalMarketing/Section4DMiss'
import DMIndustriesMiss from '@/components/Mississauga/DigitalMarketing/DMissIndustries'
import AreasWeServeCanadaDMMiss from '@/components/Mississauga/DigitalMarketing/DMMissAreasWeServe'
import ContactFromNew from '@/components/ContactFormNew'
import Link from 'next/link'
import DMFaqMiss from '@/components/Mississauga/DigitalMarketing/DMissFaq'
import ServicesSection from '@/components/Common/ServicesGrid';
export default function page() {
     const services = [
        {
            title: 'Google Ads Management',
            description: 'Ad budgets are wasted when campaigns aren’t set up right. We create and optimize Google Ads campaigns targeting Mississauga customers to drive more leads at lower cost.',
            link: "/mississauga/google-ads"
        },
        {
            title: 'SEO Services',
            description: 'If you don’t appear in Google results, you’re invisible. Our SEO boosts local and national rankings, generating consistent organic traffic and qualified leads.',
            link: "/mississauga/seo-services"
        },
        {
            title: 'Web Design & Development',
            description: 'An outdated website hurts credibility. We build modern, mobile-first, SEO-ready websites that strengthen your brand and convert visitors into customers effectively.',
            link: "/mississauga/web-design"
        },
        {
            title: 'Social Media Marketing',
            description: 'Low engagement weakens your brand. We create campaigns and content that increase visibility, grow your following, and drive meaningful engagement for your business.',
            link: "/mississauga/social-media-marketing"
        },
        {
            title: 'Analytics & CRO',
            description: 'Without tracking, you’re guessing. We implement full analytics and conversion rate optimization, providing actionable insights to maximize ROI and improve marketing performance.',
            link: "#"
        },
        {
            title: 'Graphic Design & Branding',
            description: 'Weak branding creates confusion. Our team crafts consistent, impactful logos, creatives, and brand assets that make your business stand out in Mississauga’s competitive market.',
            link: "#",
        },
    ];
  return (
    <>
    <HeroDMiss/>
    <WhyGoogleAdsMississauga />
    <DM_BenefitsMississauga />
    <ServicesSection
                heading='Digital Marketing Services That Solve'
                spanText='Real Business Problems'
                description='Bixeltek offers a complete range of digital marketing services for Mississauga businesses, each designed to solve a problem and deliver measurable ROI.'
                services={services}
                />
    <MississaugaSection4 />
    <DMIndustriesMiss />
    <AreasWeServeCanadaDMMiss />
    <DMFaqMiss />
    <MovingBlob />
    <section
    className="bg-black p-2 md:p-20 mx-auto flex flex-col justify-center gap-10 items-center md:flex-row"
    id="form"
>
    {/* Left Side - Text & CTAs */}
    <div className="w-full mt-14 md:mt-0 flex justify-start items-start px-6">
        <div className="space-y-5 text-white max-w-2xl">
            <h2 className="text-4xl md:text-6xl capitalize font-inter font-bold">
                Ready to Grow Your <span className="text-blue-500">Mississauga Business?</span>
            </h2>
            <p className="text-white font-poppins text-base leading-relaxed">
                If your business isn’t visible online, you’re losing customers to competitors. Bixeltek helps Mississauga businesses get found, generate leads, and scale ROI by 10x with integrated digital marketing.
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
