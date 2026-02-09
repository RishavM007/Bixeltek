
export const metadata = {
  title: "SEO Services Toronto | Bixeltek – Trusted SEO Agency",
  description:
    " Bixeltek provides SEO services for Toronto and Canadian businesses. From local SEO to AI SEO, we deliver rankings, organic traffic, and measurable ROI.",
  keywords:
    "Web development Hyderabad, Best web development company Hyderabad, Custom website design, Next.js development, React.js development, Full-stack web development, Frontend development, Backend development, E-commerce website development, WordPress development, Responsive web design, UI/UX design Hyderabad, Web application development, Modern web technologies",
  openGraph: {
    title: " SEO Services Toronto | Bixeltek – Trusted SEO Agency",
    description:
      " Bixeltek provides SEO services for Toronto and Canadian businesses. From local SEO to AI SEO, we deliver rankings, organic traffic, and measurable ROI.",
    type: "website",
  },
  alternates: {
    canonical: "https://bixeltek.com/toronto/seo-services",
  },
};

import React from 'react'
import TSHero from '@/components/Toronto/SeoServices/TSHero'
import WhySEOToronto from '@/components/Toronto/SeoServices/TSSection1'
import MovingBlob from '@/components/Toronto/GoogleAds/BlobTG'
import SEOGridSection2 from '@/components/Toronto/SeoServices/TSSection2'
import WhySEOMattersToronto from '@/components/Toronto/SeoServices/TSSection3'
import SEOcategoryServicesToronto from '@/components/Toronto/SeoServices/TSSection4'
import AreasWeServeCanada from '@/components/Toronto/SeoServices/AreasWeServeTS'
import SEO_BenefitsGrid from '@/components/Toronto/SeoServices/TSSection5'
import BenefitsSectionTorontoSeo from '@/components/Toronto/SeoServices/TSSection6'
import TSFaq from '@/components/Toronto/SeoServices/TSFaq'
import GradientBorderContainersSEO from '@/components/Toronto/SeoServices/TSTimeline'
import ContactFromNew from '@/components/ContactFormNew';
import IndustriesTS from '@/components/Toronto/SeoServices/TSIndustries';
import ServicesSection from '@/components/Common/ServicesGrid';
export default function page() {
  const services = [
    {
        title: 'SEO Audits',
        description: 'Conduct thorough technical, on-page, off-page, and AI readiness audits to identify issues, uncover opportunities, and optimize your website for maximum organic search performance.',
    },
    {
        title: 'Keyword Strategy',
        description: 'Develop a targeted keyword strategy focusing on profitable, intent-driven, and local search terms to attract high-quality traffic and drive measurable results for Toronto businesses.',
    },
    {
        title: 'On-Page SEO',
        description: 'Optimize metadata, headings, schema markup, internal linking, and page content to ensure higher rankings, better crawlability, and enhanced search engine visibility across relevant queries.',
    },
    {
        title: 'Content Development',
        description: 'Create high-quality blogs, service pages, and topical clusters that establish authority, improve search engine rankings, and provide value to visitors while supporting long-term SEO goals.',
    },
    {
        title: 'Local SEO Toronto',
        description: 'Optimize Google Business Profile, local citations, and maps visibility to dominate Toronto search results, increase local traffic, and attract ready-to-buy customers in your area.',
    },
    {
        title: 'Ecommerce SEO',
        description: 'Optimize product pages, categories, structured data, and navigation to enhance visibility, drive conversions, and improve organic traffic for online stores and ecommerce platforms.',
    },
    {
        title: 'AI SEO Services',
        description: 'Implement advanced AI-driven SEO strategies to ensure your brand is recognized by Gemini, ChatGPT, and other emerging AI-powered search engines for long-term visibility.',
    },
    {
        title: 'Link Building',
        description: 'Execute white-hat link building campaigns and digital PR strategies that strengthen your website’s authority, improve trustworthiness, and boost search engine rankings over time.',
    },
    {
        title: 'Technical SEO',
        description: 'Enhance site speed, mobile responsiveness, crawlability, security, and structured data implementation to ensure optimal performance, better user experience, and improved search engine rankings.',
    },
];
  return (
    <>
      <TSHero />
      <MovingBlob />
      <WhySEOToronto />
      <SEOGridSection2 />
      <WhySEOMattersToronto />
      <ServicesSection
            heading='Our'
            spanText='SEO Services in Toronto'
            description='Bixeltek delivers end-to-end SEO solutions designed for Toronto businesses and brands across Canada. Our strategies combine proven fundamentals with emerging AI SEO methods to deliver sustainable results.'
            services={services}
            />
      <IndustriesTS/>
      <GradientBorderContainersSEO />
      <SEO_BenefitsGrid />
      <BenefitsSectionTorontoSeo />
      <AreasWeServeCanada />
      <TSFaq />
      <section
        className="bg-black p-8 lg:p-20 mx-auto flex flex-col lg:flex-row justify-center items-center gap-10"
        id="form"
      >
        {/* Left Side - Text & CTAs */}
        <div className="w-full lg:w-1/2 flex flex-col justify-start items-start px-6">
          <div className="space-y-5 text-white max-w-2xl">
            <h2 className="text-4xl md:text-6xl capitalize font-inter font-bold">
              Ready to Dominate <span className="text-blue-500">Google Rankings in Toronto?</span>
            </h2>
            <p className="text-white font-poppins text-base md:text-lg leading-relaxed">
              Your customers are searching on Google right now — but are they finding you or your competitors?
              Partner with <span className="font-semibold">Bixeltek</span>, Toronto’s trusted SEO agency, to build
              an organic growth strategy that boosts visibility, trust, and long-term ROI across Toronto and the GTA.
            </p>

            {/* CTA Buttons */}
            
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div className="w-full lg:w-1/2 flex justify-center items-center mt-10 md:mt-0">
          <ContactFromNew />
        </div>
      </section>
    </>
  )
}
