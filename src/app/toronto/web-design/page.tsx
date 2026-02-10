

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
import TMWebIndustries from '@/components/Toronto/Webdev/TWSection6';
import TWFaq from '@/components/Toronto/Webdev/TWFaq'
import ServicesSection from '@/components/Common/ServicesGrid';
export default function page() {
      const services = [
    {
      title: "Custom Website Design",
      description: "We create unique, brand-aligned website designs that build trust, engage visitors, and reflect your company’s personality, ensuring a strong and memorable online presence.",
      link: "/custom-coded-websites",
    },
    {
      title: "Custom Coded Websites",
      description: "Develop complex, feature-rich websites using clean, efficient code tailored to your advanced requirements, providing performance, scalability, and full customization for your business needs.",
      link: "/custom-coded-websites",
    },
    {
      title: "Custom CMS Development",
      description: "Build fully custom content management systems with WordPress, Next.js, or bespoke platforms, designed to streamline your workflows and give you complete control over website content.",
      link: "/custom-cms-websites",
    },
    {
      title: "Ecommerce Websites",
      description: "Create Shopify, WooCommerce, or custom ecommerce websites optimized for sales, providing seamless user experiences, smooth checkout processes, and high conversion rates for online stores.",
      link: "/ecommerce-websites",
    },
    {
      title: "Payment Gateway Integrations",
      description: "Integrate secure, reliable payment gateways into your website, enabling smooth online transactions, protecting sensitive data, and offering multiple payment options for your customers.",
      link: "/payment-gateway-integrations",
    },
    {
      title: "Landing Page Design",
      description: "Design high-converting landing pages tailored for campaigns, promotions, and PPC ads, crafted to capture leads effectively and maximize marketing ROI for your business.",
      link: "#",
    },
    {
      title: "Website Redesigns",
      description: "Modernize outdated websites with fresh designs, improved functionality, and optimized user experience, ensuring your site aligns with current trends and enhances brand credibility.",
      link: "#",
    },
    {
      title: "Support & Maintenance",
      description: "Provide ongoing website support including updates, backups, security monitoring, and performance optimization, ensuring your website remains reliable, fast, and secure at all times.",
      link: "#",
    },
  ];
    return (
        <>
            <TWHero />
            <MovingBlob />
            <WhyWebsiteToronto />
            <SolutionSection />
            <WebDesignToronto2 />
            <WebsiteMattersSection />
            <ServicesSection
            heading='Full-Spectrum '
            spanText='Web Design & Development Services'
            description='Different businesses have different needs. That’s why we provide a complete range of web design and development services — from simple landing pages to complex custom builds. Whatever your vision, we deliver websites that scale with your business.'
            services={services}
            />
            <TMWebIndustries />
            <ProcessTorontoWebdev />
            <BenefitsSectionWebDesign />
            <AreasWeServeCanadaTW />
            <TWFaq />
            <section
                className="bg-black p-8 lg:p-20 mx-auto flex flex-col justify-center gap-10 items-center lg:flex-row"
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
                <div className="lg:w-[87%] lg:mr-32 flex justify-start items-center">
                    <ContactFromNew />
                </div>
            </section>
        </>
    )
}
