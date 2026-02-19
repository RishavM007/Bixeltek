import LocalAreas from '@/components/LocalSEO/LocalAreas'
import HeroLocalSEO from '@/components/LocalSEO/LocalHero'
import LocalSEOFrameworkSection from '@/components/LocalSEO/LocalProcess'
import LocalSEOIntroSection from '@/components/LocalSEO/LocalSection1'
import LocalSEOProximitySection from '@/components/LocalSEO/LocalSection2'
import LocalSEODailyCareSection from '@/components/LocalSEO/LocalSection3'
import LocalSEOStacked from '@/components/LocalSEO/LocalSection4'
import ContactFromNew from '@/components/ContactFormNew'
import React from 'react'
import { Check } from 'lucide-react'
import LocationProcessSection from '@/components/Common/location/LocationProcessSection'
import GlobalExpertiseSection from '@/components/Common/GlobalExpertiseSection'
import saudiImg from "@/assets/Saudi Web Design.png";
import indiaImg from "@/assets/india-gate-delhi-1-attr-hero.jpeg";
import uaeImg from "@/assets/pexels-photo-13736456.jpeg";
import canadaImg from "@/assets/m_Toronto_destination_main_1_l_572_1000.webp";
import usaImg from "@/assets/17.jpg";
import bgimage from "@/assets/dotted-map-1.webp";

const locations = [
    {
        country: "Saudi Arabia",
        emoji: "🇸🇦",
        image: saudiImg,
        desc: (
            <>
                <a
                    href="/saudi-arabia/riyadh/seo-services"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                >
                    Riyadh
                </a>
                ,{" "}
                <a
                    href="/saudi-arabia/eastern-province/seo-services"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                >
                    Eastern Province
                </a>
                ,{" "}
                <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className=""
                >
                    Dhahran
                </a>{" "}
                — bilingual builds with Arabic + English parity, mobile-first layouts,
                and GCC-compliant hosting.
            </>
        ),
    },
    {
        country: "India",
        emoji: "🇮🇳",
        image: indiaImg,
        desc: (
            <>
                <a
                    href="/social-media-marketing-agency-hyderabad"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                >
                    Hyderabad
                </a>
                ,{" "}
                <a
                    href="/bangalore/seo-services"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                >
                    Bangalore
                </a>
                ,{" "}
                <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white "
                >
                    Mumbai
                </a>{" "}
                — fast, marketing-ready hybrid websites integrating CMS, CRM, and
                automation tools.
            </>
        ),
    },
    {
        country: "UAE",
        emoji: "🇦🇪",
        image: uaeImg,
        desc: (
            <>
                <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className=""
                >
                    Dubai
                </a>
                ,{" "}
                <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className=""
                >
                    Abu Dhabi
                </a>{" "}
                — premium design + high-performance React front-ends for luxury, real
                estate, and financial brands.
            </>
        ),
    },
    {
        country: "Canada",
        emoji: "🇨🇦",
        image: canadaImg,
        desc: (
            <>
                <a
                    href="/toronto/seo-services"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                >
                    Toronto
                </a>
                ,{" "}
                <a
                    href="/vancouver/seo-services"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                >
                    Vancouver
                </a>,{" "}
                <a
                    href="/mississauga/seo-services"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                >
                    Mississauga
                </a>{" "}
                — bilingual (EN/FR) systems built for accessibility, compliance, and
                Core Web Vitals excellence.
            </>
        ),
    },
    {
        country: "United States",
        emoji: "🇺🇸",
        image: usaImg,
        desc: (
            <>
                SaaS and enterprise clients across{" "}
                <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className=""
                >
                    the U.S.
                </a>{" "}
                using Next.js + Node for speed, analytics depth, and compliance
                readiness.
            </>
        ),
    },
];


const steps = [
  {
    number: "01",
    title: "Audit & NAP Correction",
    text: "We start by running a complete Local SEO audit — identifying data conflicts, duplicate listings, and NAP (Name, Address, Phone) inconsistencies across Google, Apple Maps, and local directories. Standardizing this ensures Google trusts your business data at every touchpoint.",
    gradient: "from-green-500 via-lime-400 to-transparent",
    color: "text-green-500",
    bgcolor: "hover:bg-green-500",
  },
  {
    number: "02",
    title: "Google Business Profile Optimization",
    text: "We go beyond claiming your listing — we optimize it for conversion. That means category-aligned descriptions, geo-tagged photos, FAQ optimization, service areas, and UTM tracking so every customer action is measurable and attributed.",
    gradient: "from-blue-500 via-cyan-400 to-transparent",
    color: "text-cyan-400",
    bgcolor: "hover:bg-blue-500",
  },
  {
    number: "03",
    title: "Local Content & Landing Pages",
    text: "We create SEO-rich location pages tailored to each service area — blending human-first copywriting with local keywords, schema markup, and internal linking. These pages boost both organic reach and relevance in city-level search results.",
    gradient: "from-yellow-400 via-orange-400 to-transparent",
    color: "text-yellow-400",
    bgcolor: "hover:bg-yellow-500",
  },
  {
    number: "04",
    title: "Citations & Local Backlinks",
    text: "We build authority by listing your business in trusted regional directories — from Yelp and JustDial to Arab Local and GCC Yellow Pages. Every mention acts as a trust signal, strengthening your local domain authority and Google Map Pack ranking.",
    gradient: "from-teal-400 via-emerald-500 to-transparent",
    color: "text-emerald-400",
    bgcolor: "hover:bg-emerald-500",
  },
  {
    number: "05",
    title: "Review & Reputation Management",
    text: "We help you scale authentic reviews through automated WhatsApp and email funnels. Sentiment analysis tools monitor every response, feeding real feedback into your CRO (Conversion Rate Optimization) loop — so your reputation drives measurable ROI.",
    gradient: "from-purple-500 via-transparent to-transparent",
    color: "text-purple-400",
    bgcolor: "hover:bg-purple-500",
  },
];



export default function page() {
  return (
    <>
    <HeroLocalSEO/>
    <LocalSEOIntroSection/>
    <LocalSEOProximitySection/>
    {/* <LocalSEOFrameworkSection/> */}
    <LocationProcessSection
            heading={
                <>
                <span>
                    We Engineer <span className="text-blue-500">Local Trust</span> at Scale
                </span>
                </>
            }
            description='We don’t just claim your listing — we build a repeatable Local SEO system combining data accuracy, 
        social proof, and geo-targeted content. Our 5-layer framework ensures your brand earns visibility, 
        trust, and measurable conversions in every market.'
            steps={steps}
            cta={{
                text:'Get My Local SEO Audit',
                href:'mailto:zee@bixeltek.com',
                bg:'bg-gradient-to-tr from-purple-500 via-purple-700 to-purple-950 hover:from-purple-950 hover:via-purple-700 hover:to-purple-500  text-white'
            }}
            footerText='Each layer reinforces the next — visibility builds trust, trust drives engagement, and
        engagement leads to real, trackable sales growth.'
            />
    <LocalSEODailyCareSection/>
    <LocalSEOStacked/>
    {/* <LocalAreas/> */}
    <GlobalExpertiseSection
    heading={
      <span>
        Local Expertise ,{" "}
                    <span className="text-blue-500">with Global Execution</span>
      </span>
    }
    description='We manage multi-location Local SEO systems across :'
    locations={locations}
    footerText='Wherever your users are, we deploy your site on the edge — close,
                compliant, and lightning-fast.'
    />
      <section
      className="bg-black md:py-20 px-6 lg:px-20 flex flex-col lg:flex-row items-center gap-10"
      id="local-seo-audit"
    >
      {/* Left Side - Text & CTAs */}
      <div className="w-full lg:w-1/2 flex flex-col justify-start items-start">
        <h2 className="text-4xl md:text-5xl font-inter font-medium text-white mb-6">
          Pinpoint What’s Holding You Back{" "}
          <span className="text-blue-500">in Local Search</span>
        </h2>

        <p className="text-gray-100 font-poppins text-sm md:text-base leading-relaxed mb-8">
          We analyze your Google Business Profile, citations, and review
          ecosystem to craft a 30-day Local SEO improvement roadmap — tailored
          to boost your visibility, trust signals, and conversions from Maps and
          “near me” searches.
        </p>

        {/* Audit Points */}
        <ul className="flex flex-col text-white gap-4 mb-8">
          {[
            "GBP Optimization Scorecard",
            "NAP & Citation Accuracy Audit",
            "Review Strategy Assessment",
            "Geo-Ranking Heat Map Visualization",
          ].map((point, idx) => (
            <li key={idx} className="flex items-start gap-3">
              <Check className="h-6 w-6 text-blue-500 flex-shrink-0 mt-[2px]" />
              <span>{point}</span>
            </li>
          ))}
        </ul>

        {/* Trust Badges */}
        <ul className="text-sm mt-8 flex flex-row md:flex-row gap-5 md:gap-10 transition-all duration-500">
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

      {/* Right Side - Contact Form */}
      <div className="lg:w-[50%] lg:mr-10 flex justify-start items-center">
        <ContactFromNew />
      </div>
    </section>
    </>
  )
}
