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
import LocationHeroSection from '@/components/Common/location/LocationHeroSection';
import starimg from "@/assets/star-shine-svgrepo-com.png";
import googleimg from "@/assets/google-authenticator-svgrepo-com.png";
import iconimg from "@/assets/medal-ribbons-star-svgrepo-com.png";
import LocationIndustrySection from '@/components/Common/location/LocationIndustrySection';
import cleaningcomp from "@/assets/digital marketing servies for cleaning companies.jpg";
import oil from "@/assets/digital marketing for oil refinaries.jpg"
import pet from "@/assets/groupmates-lesson.jpg"
import roofing from "@/assets/digital marketing for roofing industries.jpg"
import dental from "@/assets/close-up-dentist-instruments (1).jpg"
import lawncare from "@/assets/digital marketing for lawn care services.jpg"
import blackcar from "@/assets/digital marketing for car detailers.jpg"
import healthcare from "@/assets/digital marketing for health care practices.jpg"
import ContactCTASection from '@/components/Common/location/LocationCtaSection';
import LocationProcessSection from '@/components/Common/location/LocationProcessSection';

 const proofPoints = [
    { id: 1, text: "4+ Years of SEO Experience Across Canada", icon: starimg },
    { id: 2, text: "200+ Campaigns Managed Successfully", icon: iconimg },
    { id: 3, text: "Google Partner Certified", icon: googleimg },
  ];


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


  const industries=[
                        {
                            id: "health",
                            img: healthcare,
                            label: "Digital Marketing for Healthcare",
                            text: "Health Care Practices",
                            description: "Local SEO + targeted ads to book 30+ new patients per month.",
                        },
                        {
                            id: "auto",
                            img: blackcar,
                            label: "Digital Marketing for Automobiles",
                            text: "Automobile industry",
                            description: "Maps optimization + hyperlocal PPC to drive more calls and foot traffic.",
                        },
                        {
                            id: "cleaning",
                            img: cleaningcomp,
                            label: "Digital Marketing for Cleaning Companies",
                            text: "Cleaning Industry",
                            description: "Maps optimization + hyperlocal PPC to drive more calls and foot traffic.",
                        },
                        {
                            id: "roofing",
                            img: roofing,
                            label: "Digital Marketing for Roofing Companies",
                            text: "Roofing Industry",
                            description: "High-ticket lead funnels built for real estate and project-based services.",
                        },
                        {
                            id: "lawncare",
                            img: lawncare,
                            label: "Digital Marketing for Lawn Care and Landscaping",
                            text: "Lawn Care Industries",
                            description: "Maps optimization + hyperlocal PPC to drive more calls and foot traffic.",
                        },
                        {
                            id: "dental",
                            img: dental,
                            label: "Digital Marketing for Dental Clinic",
                            text: "Dental Clinics",
                            description: "Local SEO + targeted ads to book 30+ new patients per month.",
                        },
                        {
                            id: "pet",
                            img: pet,
                            label: "Digital Marketing for Pet Stores",
                            text: "Educational Institutes",
                            description: "Product SEO, performance ads & retargeting funnels to scale sales.",
                        },
                        {
                            id: "oil",
                            img: oil,
                            label: "Digital Marketing for Oil Refineries",
                            text: "Oil and Gas Industry",
                            description: "Paid growth loops, demo-booking strategies, and B2B marketing that closes deals.",
                        }
                    ]


const steps = [
  {
    number: "01",
    title: "Discovery & Market Analysis",
    text: "We start by understanding your business goals, customer behavior, and Vancouver’s unique search landscape. This stage includes competitor benchmarking, industry research, and uncovering the search intent that drives profitable traffic.",
    gradient: "from-blue-500 via-blue-400 to-black",
    color: "text-blue-500",
    bgcolor: "hover:bg-blue-500",
  },
  {
    number: "02",
    title: "SEO Audit & Strategy",
    text: "A deep audit reveals technical issues, content gaps, and hidden opportunities. From crawlability to indexation signals, we create a data-driven SEO roadmap aligned with your growth targets.",
    gradient: "from-green-500 via-teal-400 to-transparent",
    color: "text-teal-500",
    bgcolor: "hover:bg-teal-500",
  },
  {
    number: "03",
    title: "Keyword & Entity Mapping",
    text: "We don’t just target keywords—we build entity-driven maps around people, places, services, and topics. This ensures Google sees your brand as contextually relevant across Vancouver search queries.",
    gradient: "from-yellow-400 via-yellow-300 to-transparent",
    color: "text-yellow-500",
    bgcolor: "hover:bg-yellow-500",
  },
  {
    number: "04",
    title: "Content Creation & Optimization",
    text: "From blogs to service pages, every piece of content is crafted around real search queries and optimized with schema, headings, and semantic relevance. This makes your content both user-friendly and algorithm-friendly.",
    gradient: "from-pink-500 via-purple-400 to-transparent",
    color: "text-purple-500",
    bgcolor: "hover:bg-purple-500",
  },
  {
    number: "05",
    title: "Technical Enhancements",
    text: "We fine-tune your site’s infrastructure: Core Web Vitals, mobile-first design, crawl efficiency, and security signals. Technical health ensures your site performs better and builds search engine trust.",
    gradient: "from-indigo-500 via-indigo-400 to-transparent",
    color: "text-indigo-500",
    bgcolor: "hover:bg-indigo-500",
  },
  {
    number: "06",
    title: "Link Building & Digital PR",
    text: "Authority matters. We acquire high-quality backlinks from relevant publications, local Vancouver sources, and industry leaders. These links improve domain authority and amplify your brand reputation.",
    gradient: "from-red-500 via-cyan-500 to-transparent",
    color: "text-red-500",
    bgcolor: "hover:bg-red-500",
  },
  {
    number: "07",
    title: "Performance Tracking & Scaling",
    text: "We track rankings, engagement, and conversions in real time, refining strategies with AI insights. Winning tactics are scaled across services and geographies for sustainable, long-term growth.",
    gradient: "from-cyan-500 via-transparent to-transparent",
    color: "text-cyan-500",
    bgcolor: "hover:bg-cyan-500",
  },
];


export default function page() {
 
    return (
        <>
            {/* <HeroSeoVancouver /> */}
            <LocationHeroSection
            heading={
              <>
              <span>SEO Services in Vancouver{" "}
              <span className="text-blue-500">
                That Turn Visibility Into Revenue
              </span></span>
              </>
            }
            description=' Your customers are searching right now — but are they finding you
              or your competitors? In a crowded Vancouver market, SEO is more
              than ranking on Google; it’s about being discovered by the right
              audience, building trust, and converting traffic into business
              growth.
              At Bixeltek, we combine data-driven SEO, AI-powered strategies,
              and local market insights to help Vancouver businesses rise above
              the noise and attract consistent, qualified leads.'
            proofPoints={proofPoints}
            primaryCTA={{
                    text: 'Get Your Free SEO Audit',
                    action: { type: 'openForm', form: 'seo' },
                }}
                secondaryCTA={{
                    text: 'Book a Strategy Call',
                    variant: 'secondary',
                    action: {
                    type: 'link',
                    href: 'mailto:zee@bixeltek.com',
                    },
                }}
            />
            <SeoImportanceSection />
            <VancouverSeoChallenges/>
            <ServicesSection
            heading='Complete SEO Solutions'
            spanText='Tailored for Vancouver Businesses'
            description='Our SEO approach covers every aspect of search optimization — from local visibility to AI-driven recommendations — designed to help your business dominate Vancouver search results..'
            services={services}
            />
            {/* <SeoProcessVancouver /> */}
            <LocationProcessSection
        heading={
          <>
                  <span>How We Build <span className="text-blue-500">SEO Strategies That Scale</span></span>
          </>
        }
        description='Our process follows Koray Tugberk GÜBÜR’s Holistic SEO methodology — aligning every optimization with user intent, entity relevance, and algorithmic context for maximum long-term impact.'
        steps={steps}
        cta={{
        text: 'Request a Free SEO Audit',
        href: '#form',
      }}
      footerText="This structured methodology ensures your Vancouver SEO campaigns are built for transparency, adaptability, and compounding growth."

      />
            {/* <SeoVanIndustries /> */}
            <LocationIndustrySection
            heading={
              <>
              <span className=" text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-500">
                      SEO That Works Across Industries in Vancouver Google Ads in Vancouver?
                    </span>
              </>
            }
            description='Google Ads works because it captures demand when it’s highest — when customers are searching for solutions. That makes it valuable across industries.'
            industries={industries}
            />
            <SeoChooseVancSection />
            <AreasWeServeCanadaVanc />
            <ContactCTASection
            heading='Ready to Grow Your Vancouver Business'
            spanText=' With SEO That Works?'
            description='Your competitors are investing in visibility. The question is — will customers find them or you? Partner with Bixeltek for SEO strategies that combine data, creativity, and AI innovation to grow your traffic, trust, and ROI.'
            />

            {/* <section
                className="bg-black py-20 md:px-10 lg:px-20 flex flex-col lg:flex-row items-center gap-10"
                id="form"
            >
                <div className="w-full lg:w-1/2 flex flex-col justify-start items-start px-6">
                    <h2 className="text-4xl md:text-5xl font-inter font-bold text-white mb-6">
                        Ready to Grow Your Vancouver Business<span className="text-blue-500"> With SEO That Works?</span>
                    </h2>
                    <p className="text-gray-300 font-poppins text-base md:text-lg leading-relaxed mb-8">
                        Your competitors are investing in visibility. The question is — will customers find them or you? Partner with Bixeltek for SEO strategies that combine data, creativity, and AI innovation to grow your traffic, trust, and ROI.
                    </p>

                    
                </div>

                <div className="w-[90%] lg:w-[50%] lg:mr-32 flex justify-start items-center">
                    <ContactFromNew />
                </div>
            </section> */}

        </>
    )
}
