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
import ServicesSection from '@/components/Common/ServicesGrid';

export default function page() {
    const services = [
    {
      title: "Local SEO",
      description:
        "Get found by customers searching “near me.” We optimize your Google Business Profile, local citations, reviews, and service pages to help you rank in the Vancouver Map Pack.",
      benefit: "More local leads and walk-ins.",
      link: "/local-seo",
    },
    {
      title: "On-Page SEO",
      description:
        "Content and structure that align with Google’s Helpful Content and E-E-A-T principles. We optimize headings, schema, internal links, and keyword relevance for maximum visibility.",
      benefit: "Better rankings with trustworthy content.",
      link: "/on-page-seo",
    },
    {
      title: "Technical SEO",
      description:
        "Fix crawl errors, improve page speed, mobile UX, and indexing signals that boost your site’s performance and trust.",
      benefit: "Search engines + users love your site.",
      link: "/technical-seo",
    },
    {
      title: "AI SEO (Next-Gen Optimization)",
      description:
        "We optimize your content to be understood and recommended by AI systems — including Google Gemini, ChatGPT, and Perplexity. Through entity mapping, structured data, and semantic optimization, your business gains visibility across AI-driven search experiences.",
      benefit: "Future-proof SEO with AI integration.",
      link: "#",
    },
    {
      title: "Content Strategy & Topical Maps",
      description:
        "We develop content clusters and entity-driven strategies that build authority around your core services and industry expertise.",
      benefit: "Your site becomes an authority hub.",
      link: "#",
    },
    {
      title: "Link Building & Digital PR",
      description:
        "Build backlinks from relevant, high-authority websites to increase your domain strength and reputation in Google’s eyes.",
      benefit: "More authority = higher rankings.",
      link: "#",
    },
  ];
    return (
        <>
            <HeroSeoVancouver />
            <SeoImportanceSection />
            <VancouverSeoChallenges/>
            <ServicesSection
            heading='Complete SEO Solutions'
            spanText='Tailored for Vancouver Businesses'
            description='Our SEO approach covers every aspect of search optimization — from local visibility to AI-driven recommendations — designed to help your business dominate Vancouver search results..'
            services={services}
            />
            <SeoProcessVancouver />
            <SeoVanIndustries />
            <SeoChooseVancSection />
            <AreasWeServeCanadaVanc />

            <section
                className="bg-black py-20 md:px-10 lg:px-20 flex flex-col lg:flex-row items-center gap-10"
                id="form"
            >
                {/* Left Side - Text & CTAs */}
                <div className="w-full lg:w-1/2 flex flex-col justify-start items-start px-6">
                    <h2 className="text-4xl md:text-5xl font-inter font-bold text-white mb-6">
                        Ready to Grow Your Vancouver Business<span className="text-blue-500"> With SEO That Works?</span>
                    </h2>
                    <p className="text-gray-300 font-poppins text-base md:text-lg leading-relaxed mb-8">
                        Your competitors are investing in visibility. The question is — will customers find them or you? Partner with Bixeltek for SEO strategies that combine data, creativity, and AI innovation to grow your traffic, trust, and ROI.
                    </p>

                    {/* CTA Buttons */}
                    
                </div>

                {/* Right Side - Contact Form */}
                <div className="w-[90%] lg:w-[50%] lg:mr-32 flex justify-start items-center">
                    <ContactFromNew />
                </div>
            </section>

        </>
    )
}
