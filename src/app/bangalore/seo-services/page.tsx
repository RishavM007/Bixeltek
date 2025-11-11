
export const metadata = {
    title: " SEO Services in Bangalore | Local & Enterprise SEO Experts",
    description:
        " Rank higher and attract qualified leads with Bixeltek — a Google Partner SEO agency in Bangalore offering technical SEO, local search, and content systems built for measurable growth.",
    keywords:
        "Web development Hyderabad, Best web development company Hyderabad, Custom website design, Next.js development, React.js development, Full-stack web development, Frontend development, Backend development, E-commerce website development, WordPress development, Responsive web design, UI/UX design Hyderabad, Web application development, Modern web technologies",
    openGraph: {
        title: "SEO Services in Bangalore | Local & Enterprise SEO Experts",
        description:
            " Rank higher and attract qualified leads with Bixeltek — a Google Partner SEO agency in Bangalore offering technical SEO, local search, and content systems built for measurable growth.",
        type: "website",
    },
    alternates: {
        canonical: "https://bixeltek.com/bangalore/seo-services",
    },
};

import BangaloreCoverageSection from '@/components/Bangalore/BangaloreAreas'
import BangaloreSEOHero from '@/components/Bangalore/SEOServices/BangSeo'
import BangaloreSEOndustries from '@/components/Bangalore/SEOServices/BangSEOInd'
import SEOFrameworkSection from '@/components/Bangalore/SEOServices/BangSEOProcess'
import SEOVisibilitySection from '@/components/Bangalore/SEOServices/BangSEOSection1'
import SEOGrowthSection from '@/components/Bangalore/SEOServices/BangSEOSection2'
import BangaloreSEOProcessCards from '@/components/Bangalore/SEOServices/BangSEOSection3'
import SEOWhatYouGetSection from '@/components/Bangalore/SEOServices/BangSEOSection4'
import WhyChooseBixeltekSEO from '@/components/Bangalore/SEOServices/BangSEOSection5'
import ContactFromNew from '@/components/ContactFormNew'
import { Check } from 'lucide-react'
import React from 'react'

export default function page() {
  return (
    <>
      <BangaloreSEOHero />
      <SEOVisibilitySection />
      <SEOGrowthSection />
      <BangaloreSEOProcessCards />
      <SEOWhatYouGetSection />
      <BangaloreCoverageSection />
      <BangaloreSEOndustries />
      <SEOFrameworkSection />
      <WhyChooseBixeltekSEO />
      <section
      className="bg-black py-20 px-4 md:px-20 flex flex-col md:flex-row items-center gap-10"
      id="seo-audit"
    >
      {/* LEFT SIDE — Text & CTAs */}
      <div className="w-full md:w-1/2 flex flex-col justify-start items-start px-6">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-inter font-medium text-white mb-6 leading-tight">
          Find Out Why Your Website{" "}
          <span className="text-blue-500">Isn’t Ranking</span> — Get a Free Audit.
        </h2>

        {/* Description */}
        <p className="text-gray-100 font-poppins text-sm md:text-base leading-relaxed mb-8">
          Our <span className="text-blue-400 font-medium">48-point SEO audit</span> reveals exactly 
          what’s holding your site back. From crawl errors to content gaps, we’ll uncover the 
          issues preventing your business from ranking higher in{" "}
          <span className="text-blue-400 font-medium">Bangalore’s competitive market.</span>
        </p>

        {/* Audit Points */}
        <ul className="flex flex-col text-white gap-4 mb-8">
          {[
            "Technical health check",
            "Keyword and competitor analysis",
            "Google Business optimization review",
            "30-day improvement roadmap",
          ].map((point, idx) => (
            <li key={idx} className="flex items-start gap-3">
              <Check className="h-6 w-6 text-blue-500 flex-shrink-0 mt-[2px]" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
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
      <div className="w-[95%] md:w-[50%] lg:mr-10 flex justify-start items-center">
        <ContactFromNew />
      </div>
    </section>
    </>
  )
}
