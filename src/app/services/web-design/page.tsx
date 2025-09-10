
export const metadata = {
    title: " Web Design Services for Businesses | Professional Web Design Agency",
    description:
        "  Enterprise-grade web design services for businesses in India, USA, Canada, UAE, Saudi Arabia & UK. Partner with a professional web design agency to build responsive, SEO-ready websites that drive sales and growth.",
    keywords:
        "Web development Hyderabad, Best web development company Hyderabad, Custom website design, Next.js development, React.js development, Full-stack web development, Frontend development, Backend development, E-commerce website development, WordPress development, Responsive web design, UI/UX design Hyderabad, Web application development, Modern web technologies",
    openGraph: {
        title: " Web Design Services for Businesses | Professional Web Design Agency",
        description:
            " Enterprise-grade web design services for businesses in India, USA, Canada, UAE, Saudi Arabia & UK. Partner with a professional web design agency to build responsive, SEO-ready websites that drive sales and growth.",
        type: "website",
    },
    alternates: {
        canonical: "https://bixeltek.com/services/seo-services",
    },
};

import React from 'react'
import WebSection1 from '@/components/WebDev/WebSection1'
import WhyWebDev from '@/components/WebDev/WebSection2'
import WebSection4 from '@/components/WebDev/WebSection4'
import WebDesignSection from '@/components/WebDev/WebSection3'
import FeaturesSection from '@/components/WebDev/WebSection5'
import GradientBorderContainersMobWeb from '@/components/WebDev/WebTimeline'
import BenefitsSection from '@/components/WebDev/WebSection6'
import WebSection7 from '@/components/WebDev/WebSection7'
import WebdevTestimonials from '@/components/WebDev/WebDevTestimonials'
import AreasWeServe from '@/components/WebDev/WebSection8';
import IndustryCarouselSectionWeb from '@/components/WebDev/WebDevInd';
import WebDevFaq from '@/components/WebDev/WebDevFaq';
import WebShowcaseSection from '@/components/WebDev/WebDevShowcase';
export default function page() {
    return (
        <>
            <WebSection1 />
            <WhyWebDev />
            <WebDesignSection />
            <FeaturesSection />
            <WebSection4 />
            <GradientBorderContainersMobWeb />
            <WebSection7 />
            <BenefitsSection />
            <WebShowcaseSection/>
            <AreasWeServe/>
            <IndustryCarouselSectionWeb/>
            <WebdevTestimonials />
            <WebDevFaq/>
        </>
    )
}
