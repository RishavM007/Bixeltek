export const metadata = {
    title: "Web Design Services Vancouver | Custom Websites & Conversion Landing Pages – Bixeltek",
    description:
        "Bixeltek builds SEO-ready, conversion-focused websites and landing pages for Vancouver businesses. From custom-coded sites to ecommerce and CMS platforms — we design websites that deliver real ROI.",
    keywords:
        "Web development Vancouver, Best web development company Vancouver, Custom website design, Next.js development, React.js development, Full-stack web development, Frontend development, Backend development, E-commerce website development, WordPress development, Responsive web design, UI/UX design Hyderabad, Web application development, Modern web technologies",
    openGraph: {
        title: "Web Design Services Vancouver | Custom Websites & Conversion Landing Pages – Bixeltek",
        description:
            "Bixeltek builds SEO-ready, conversion-focused websites and landing pages for Vancouver businesses. From custom-coded sites to ecommerce and CMS platforms — we design websites that deliver real ROI.",
        type: "website",
    },
    alternates: {
        canonical: "https://bixeltek.com/vancouver/web-design-services",
    },
};

import React from 'react'
import HeroWebDesignVancouver from '@/components/Vancouver/WebDesign/VancHeroWeb';
import WebsiteFailureSection from '@/components/Vancouver/WebDesign/VancWebSection';
import WebsiteFailureSection2 from '@/components/Vancouver/WebDesign/VanWebSection2';
import WebDesignServicesVancouver from '@/components/Vancouver/WebDesign/VanWebSection3';
import WebDesignProcessVancouver from '@/components/Vancouver/WebDesign/VanWebProcess';
import WhyChooseBixeltekVancouver from '@/components/Vancouver/WebDesign/VancWebSection4';
import AreasWeServeVancWeb from '@/components/Vancouver/WebDesign/AreasWeServe';
import WebVanIndustries from '@/components/Vancouver/WebDesign/VancIndustries';
import WebTech from '@/components/WebDev/WebTech';
import ShowcaseSectionVanc from '@/components/Vancouver/WebDesign/ShowcaseWebVanc';
import ContactFromNew from '@/components/ContactFormNew';
import VancouverWebDesignFaqs from '@/components/Vancouver/WebDesign/WebVancFaq';
import ServicesSection from '@/components/Common/ServicesGrid';

export default function page() {
    const services = [
    {
      title: "Custom CMS Builds",
      description:
        "Dynamic and scalable websites built on flexible CMS platforms like WordPress — fully optimized for SEO and easy content management.",
      link: "/custom-cms-websites",
    },
    {
      title: "Custom-Coded Websites",
      description:
        "For businesses needing advanced functionality or unique design systems, we develop tailor-made websites with performance and scalability in mind.",
      link: "/custom-coded-websites",
    },
    {
      title: "Ecommerce Websites",
      description:
        "Boost online sales with ecommerce stores optimized for speed, conversions, and secure checkout experiences.",
      link: "/ecommerce-websites",
    },
    {
      title: "Conversion Landing Pages",
      description:
        "We design dedicated landing pages for campaigns, offers, or product launches — built using conversion psychology, persuasive copy, and fast-loading architecture. Perfect for Google Ads, Meta Ads, or email marketing funnels.",
      link: "#",
    },
    {
      title: "Payment Gateway Integrations",
      description:
        "Seamless, secure, and fast payment integrations that enhance user trust and improve conversion rates.",
      link: "/payment-gateway-integrations",
    },
    {
      title: "Website Maintenance & Support",
      description:
        "Ongoing performance monitoring, updates, and support to ensure your website stays secure, fast, and fully functional.",
      link: "#",
    },
  ];
    return (
        <>
            <HeroWebDesignVancouver />
            <WebsiteFailureSection />
            <WebsiteFailureSection2 />
            <ServicesSection
            heading='Websites Designed to'
            spanText='Convert, Built to Last'
            description=' Bixeltek offers full-service web design and development solutions, customized for Vancouver businesses. Every build is crafted to reflect your brand, enhance visibility, and increase conversions.'
            services={services}
            />
            <WebDesignProcessVancouver />
            <ShowcaseSectionVanc />
            <WebTech />
            <WhyChooseBixeltekVancouver />
            <AreasWeServeVancWeb />
            <WebVanIndustries />
            <VancouverWebDesignFaqs />
            <section
                className="bg-black py-20 px-6 lg:px-20 flex flex-col lg:flex-row items-center gap-10"
                id="form"
            >
                {/* Left Side - Text & CTAs */}
                <div className="w-full lg:w-1/2 flex flex-col justify-start items-start md:px-6">
                    <h2 className="text-4xl md:text-5xl font-inter font-bold text-white mb-6">
                       Ready to Build a Website <span className="text-blue-500">That Converts?</span>
                    </h2>
                    <p className="text-gray-300 font-poppins text-base md:text-lg leading-relaxed mb-8">
                        Your website should be your best sales tool — not just an online presence. Let Bixeltek design a conversion-focused website and landing page strategy that elevates your brand and drives measurable ROI.
                    </p>

                    {/* CTA Buttons */}

                </div>

                {/* Right Side - Contact Form */}
                <div className="lg:w-[50%] lg:mr-32 flex justify-start items-center">
                    <ContactFromNew />
                </div>
            </section>
        </>
    )
}
