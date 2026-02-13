
export const metadata = {
    title: "Digital Marketing Agency in Bangalore | SEO, PPC & Web Design ",
    description:
        " Bixeltek is a Google Partner Certified digital marketing agency in Bangalore. We help tech-driven businesses scale with SEO, PPC, and web design engineered for measurable growth.",
    keywords:
        "Web development Hyderabad, Best web development company Hyderabad, Custom website design, Next.js development, React.js development, Full-stack web development, Frontend development, Backend development, E-commerce website development, WordPress development, Responsive web design, UI/UX design Hyderabad, Web application development, Modern web technologies",
    openGraph: {
        title: " Digital Marketing Agency in Bangalore | SEO, PPC & Web Design ",
        description:
            " Bixeltek is a Google Partner Certified digital marketing agency in Bangalore. We help tech-driven businesses scale with SEO, PPC, and web design engineered for measurable growth.",
        type: "website",
    },
    alternates: {
        canonical: "https://bixeltek.com/bangalore",
    },
};


import BangaloreCoverageSection from '@/components/Bangalore/BangaloreAreas'
import AreasWeServeBangalore from '@/components/Bangalore/BangaloreAreas'
import HeroBangalore from '@/components/Bangalore/BangaloreHero'
import GrowthFrameworkSection from '@/components/Bangalore/BangaloreProcess'
import MarketingStructureSection from '@/components/Bangalore/BangaloreSection1'
import MarketingEngines from '@/components/Bangalore/BangaloreSection2'
import ServicesSectionBangalore from '@/components/Bangalore/BangaloreSection3'
import DataAndDesignSection from '@/components/Bangalore/BangaloreWhyChoose'
import LocationProcessSection from '@/components/Common/location/LocationProcessSection';
import React from 'react'


const steps = [
  {
    number: "01",
    title: "Discovery & Audit",
    text: "We begin with a detailed assessment of your digital ecosystem — analyzing website performance, ad accounts, analytics setup, and competitive benchmarks. This step uncovers inefficiencies, missed keyword opportunities, and data blind spots that prevent measurable growth.",
    gradient: "from-blue-500 via-cyan-400 to-transparent",
    color: "text-blue-400",
    bgcolor: "hover:bg-blue-500",
  },
  {
    number: "02",
    title: "Strategy & Keyword Mapping",
    text: "Once the audit is complete, we construct a data-driven roadmap that aligns audience intent with your business goals. From regional keyword clusters and content themes to ad positioning and funnel logic, every element is mapped to measurable KPIs.",
    gradient: "from-green-500 via-lime-400 to-transparent",
    color: "text-green-400",
    bgcolor: "hover:bg-green-500",
  },
  {
    number: "03",
    title: "Campaign Design & Setup",
    text: "With strategy locked in, we launch cohesive campaigns across channels — SEO clusters, Google Ads, and high-conversion landing pages. Every asset is built for scalability, ensuring consistent messaging and unified creative direction across all touchpoints.",
    gradient: "from-yellow-400 via-orange-400 to-transparent",
    color: "text-yellow-400",
    bgcolor: "hover:bg-yellow-500",
  },
  {
    number: "04",
    title: "Tracking & Analytics",
    text: "We implement advanced analytics architecture — GA4, Tag Manager, CRM events, and call tracking. Each user action, scroll, or conversion is captured accurately, giving you a transparent dashboard of what’s working and what’s not.",
    gradient: "from-teal-400 via-emerald-500 to-transparent",
    color: "text-emerald-400",
    bgcolor: "hover:bg-emerald-500",
  },
  {
    number: "05",
    title: "Optimization & Scaling",
    text: "Growth doesn’t stop at launch — we test, refine, and scale. From A/B testing CTAs and copy to CRO experiments and lead-quality analytics, we ensure every campaign delivers higher ROI month after month. This is how we turn systems into predictable growth engines.",
    gradient: "from-purple-500 via-transparent to-transparent",
    color: "text-purple-400",
    bgcolor: "hover:bg-purple-500",
  },
];


export default function page() {
  return (
      <>
          <HeroBangalore />
          <MarketingStructureSection />
          <MarketingEngines />
          <ServicesSectionBangalore />
          {/* <GrowthFrameworkSection /> */}
          <LocationProcessSection
          bg='bg-white'
          heading={
            <>
            <span> From Discovery to Growth <br />{" "}
        <span className="text-blue-500">A Proven 5-Stage Framework</span></span>
            </>
          }
          description='Every Bangalore project follows our structured growth cycle — from in-depth audits to 
        ongoing optimization. No guesswork, no vanity metrics — just data-backed actions that 
        compound results month after month.'
        steps={steps}
        cta={{
            text:'Book a Strategy Call',
            href:'mailto:strategy@bixeltek.com',
            bg:'bg-gradient-to-tr from-blue-600 via-indigo-700 to-purple-900 text-white hover:opacity-90 text-white'
        }}
        footerText='Each stage is designed to remove uncertainty — transforming your marketing from guesswork into 
        a measurable, scalable system that fuels consistent business growth.'
          />
          <BangaloreCoverageSection />
          <DataAndDesignSection />
      </>

  )
}
