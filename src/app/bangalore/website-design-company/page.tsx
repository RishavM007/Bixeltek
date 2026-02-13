
export const metadata = {
    title: " Website Design Company in Bangalore | Web Development Experts – Bixeltek",
    description:
        " Bixeltek designs and develops fast, conversion-focused websites for Bangalore businesses. WordPress, Next.js, and Shopify websites built for SEO and measurable growth.",
    keywords:
        "Web development Hyderabad, Best web development company Hyderabad, Custom website design, Next.js development, React.js development, Full-stack web development, Frontend development, Backend development, E-commerce website development, WordPress development, Responsive web design, UI/UX design Hyderabad, Web application development, Modern web technologies",
    openGraph: {
        title: " Website Design Company in Bangalore | Web Development Experts – Bixeltek",
        description:
            " Bixeltek designs and develops fast, conversion-focused websites for Bangalore businesses. WordPress, Next.js, and Shopify websites built for SEO and measurable growth.",
        type: "website",
    },
    alternates: {
        canonical: "https://bixeltek.com/bangalore/website-design-company",
    },
};

import BangaloreWebsiteDesignHero from '@/components/Bangalore/WebDesign/BanfWebDHero';
import WebBangaloreCoverageSection from '@/components/Bangalore/WebDesign/BangWebDAreas';
import BangaloreWebDndustries from '@/components/Bangalore/WebDesign/BangWebDInd';
import WebsiteValueSection from '@/components/Bangalore/WebDesign/BanWebDSection1';
import WebsiteStrategySection from '@/components/Bangalore/WebDesign/BanWebDSection2';
import WebDevelopmentProcessCards from '@/components/Bangalore/WebDesign/BanWebDSection3';
import WebsiteDevelopmentProcess from '@/components/Bangalore/WebDesign/BanWebDSection3';
import BangaloreWebSolutions from '@/components/Bangalore/WebDesign/BanWebDSection4';
import WhyChooseBixeltek from '@/components/Bangalore/WebDesign/BanWebDSection6';
import WhatYouGetSection from '@/components/Bangalore/WebDesign/BanWebSection5';
import { Check } from 'lucide-react';
import ContactFromNew from '@/components/ContactFormNew';
import React from 'react'

export default function page() {
    return (
        <>
            <BangaloreWebsiteDesignHero />
            <WebsiteValueSection />
            <WebsiteStrategySection />
            <WebDevelopmentProcessCards />
            <BangaloreWebSolutions />
            <WhatYouGetSection />
            <WebBangaloreCoverageSection />
            <BangaloreWebDndustries />
            <WhyChooseBixeltek />
            <section
                className="bg-black py-20 px-6 lg:px-20 flex flex-col lg:flex-row items-center gap-10"
                id="website-audit"
            >
                {/* LEFT SIDE — Text & CTAs */}
                <div className="w-full lg:w-1/2 flex flex-col justify-start items-start">
                    {/* Heading */}
                    <h2 className="text-4xl md:text-5xl font-inter font-medium text-white mb-6 leading-tight">
                        Find Out What’s{" "}
                        <span className="text-blue-500">Slowing Down</span> Your Website.
                    </h2>

                    {/* Description */}
                    <p className="text-gray-100 font-poppins text-sm md:text-base leading-relaxed mb-8">
                        Our <span className="text-blue-400 font-medium">40-point website audit</span> identifies
                        design, UX, and performance issues that could be holding your business back.
                        You’ll receive a detailed, actionable report highlighting how to{" "}
                        <span className="text-blue-400 font-medium">improve speed, conversions,</span> and
                        <span className="text-blue-400 font-medium"> SEO readiness.</span>
                    </p>

                    {/* Audit Points */}
                    <ul className="flex flex-col text-white gap-4 mb-8">
                        {[
                            "Technical and speed performance review",
                            "Design and UX evaluation",
                            "Mobile responsiveness and accessibility check",
                            "SEO structure and metadata improvement plan",
                        ].map((point, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                                <Check className="h-6 w-6 text-blue-500 flex-shrink-0 mt-[2px]" />
                                <span>{point}</span>
                            </li>
                        ))}
                    </ul>

                    {/* CTA Buttons */}
                  

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
                <div className="lg:w-[50%] lg:mr-10 flex justify-start items-center">
                    <ContactFromNew />
                </div>
            </section>
        </>
    )
}
