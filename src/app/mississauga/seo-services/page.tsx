
export const metadata = {
    title: "SEO Services Mississauga | SEO Company & Agency – Bixeltek",
    description:
        " Looking for SEO services in Mississauga? Bixeltek helps businesses rank higher on Google, drive organic traffic, and generate consistent leads with proven SEO strategies.",
    keywords:
        "SEO services Mississauga, Best SEO company Mississauga, Local SEO Mississauga, On-page SEO optimization, Off-page SEO strategies, Technical SEO services, Keyword research Mississauga, Link building services, Content marketing Mississauga, E-commerce SEO Mississauga, WordPress SEO optimization, Mobile SEO services, SEO audit Mississauga, Search engine marketing, Google My Business optimization",
    openGraph: {
        title: "SEO Services Mississauga | SEO Company & Agency – Bixeltek",
        description:
            " Looking for SEO services in Mississauga? Bixeltek helps businesses rank higher on Google, drive organic traffic, and generate consistent leads with proven SEO strategies.",
        type: "website",
    },
    alternates: {
        canonical: "https://bixeltek.com/mississauga/seo-services",
    },
};


import React from 'react'
import HeroSEOMiss from '@/components/Mississauga/SeoServices/SMissHero'
import WhySEOMississauga from '@/components/Mississauga/SeoServices/SMissSection1'
import WhySEOVisibilityMississauga from '@/components/Mississauga/SeoServices/SMissSection2'
import SEOCampaignsMississauga from '@/components/Mississauga/SeoServices/SMissSection3'
import SEOTimelineMiss from '@/components/Mississauga/SeoServices/SMissTimeline'
import WhyChooseBixeltekSMiss from '@/components/Mississauga/SeoServices/SMissSection4'
import SMissIndustries from '@/components/Mississauga/SeoServices/SMissIndustries'
import SEOFaqMiss from '@/components/Mississauga/SeoServices/SMissFaq'
import MovingBlob from '@/components/Toronto/GoogleAds/BlobTG'
import Link from 'next/link'
import ContactFromNew from '@/components/ContactFormNew'
import LocationHeroSection from '@/components/Common/location/LocationHeroSection';
import iconimg from '@/assets/medal-ribbons-star-svgrepo-com.png';
import starimg from '@/assets/star-shine-svgrepo-com.png';
import googleimg from '@/assets/google-authenticator-svgrepo-com.png';
import ServicesSection from '@/components/Common/ServicesGrid';
import LocationIndustrySection from '@/components/Common/location/LocationIndustrySection';
import cleaningcomp from "@/assets/digital marketing servies for cleaning companies.jpg";
import oil from "@/assets/digital marketing for oil refinaries.jpg"
import pet from "@/assets/groupmates-lesson.jpg"
import roofing from "@/assets/digital marketing for roofing industries.jpg"
import dental from "@/assets/close-up-dentist-instruments (1).jpg"
import lawncare from "@/assets/digital marketing for lawn care services.jpg"
import blackcar from "@/assets/digital marketing for car detailers.jpg"
import healthcare from "@/assets/digital marketing for health care practices.jpg"
import LocationFaqSection from '@/components/Common/location/LocationFaqSection';
import ContactCTASection from '@/components/Common/location/LocationCtaSection';
import LocationProcessSection from '@/components/Common/location/LocationProcessSection';


const proofPoints = [
    { id: 1, text: "4+ Years Helping Canadian Businesses Grow", icon: iconimg },
    { id: 2, text: "200+ SEO Projects Delivered in Mississauga", icon: starimg },
    { id: 3, text: "Google Partner Certified Agency", icon:  googleimg },
  ];

 const services =   [
        {
            title: 'Local SEO Campaigns',
            description: 'Ideal for clinics, home services, and neighborhood stores in Mississauga. We optimize maps, citations, and local keywords to bring more walk-ins and phone calls.',
        },
        {
            title: 'National SEO',
            description: 'Expand your reach across Canada by targeting broader search terms, building authoritative backlinks, and increasing brand credibility nationwide for long-term visibility and trust.',
        },
        {
            title: 'Ecommerce SEO',
            description: 'Boost your product visibility and category page rankings. We optimize product descriptions, technical structure, and conversion flow to maximize sales and organic revenue growth.',
        },
        {
            title: 'Enterprise SEO',
            description: 'Designed for large businesses managing multiple locations or thousands of pages. Our scalable strategies strengthen visibility, streamline indexing, and sustain competitive advantage online.',
        },
        {
            title: 'AI SEO',
            description: 'Stay ahead of competitors by appearing in AI-driven search results and large language model recommendations, ensuring your brand remains discoverable in the new search era.',
        },
        {
            title: 'Technical SEO',
            description: 'From site speed to structured data, we fix backend issues that block rankings. A technically sound website improves crawlability, user experience, and overall search performance.',
        },
    ];


 const industries = [
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

const faqs = [
  {
    question: "How long does SEO take to work?",
    answer:
      "SEO is a long-term strategy. Most clients see measurable improvements within 3–6 months, with steady compounding growth as authority builds over time.",
  },
  {
    question: "Do you guarantee rankings?",
    answer:
      "No ethical SEO agency can guarantee #1 rankings. What we guarantee is consistent progress, better visibility, and transparent reporting on results.",
  },
  {
    question: "Do I need SEO if I’m already running Ads?",
    answer:
      "Yes. Ads deliver quick results, but SEO builds lasting authority, credibility, and reduces long-term acquisition costs for sustainable growth.",
  },
  {
    question: "Do you only work in Mississauga?",
    answer:
      "No — we partner with businesses across Canada, but Mississauga and the GTA remain our core focus areas and expertise.",
  },
];     

const steps = [
  {
    number: '01',
    title: 'SEO Audit & Research',
    text: "We begin by analyzing your current rankings, competitor performance, and technical site health. This foundation reveals opportunities to strengthen visibility and close market gaps in Mississauga.",
    gradient: 'from-blue-500 via-blue-400 to-black',
    color: 'text-blue-500',
    bgcolor: 'hover:bg-blue-500',
  },
  {
    number: '02',
    title: 'Strategy Development',
    text: "Based on research, we define targeted keywords, core topics, and realistic goals. Every strategy is tailored to Mississauga businesses to maximize local and long-term ROI.",
    gradient: 'from-green-500 via-teal-400 to-transparent',
    color: 'text-teal-500',
    bgcolor: 'hover:bg-teal-500',
  },
  {
    number: '03',
    title: 'On-Page Optimization',
    text: "We refine your site’s structure, metadata, and content hierarchy. From headings to internal linking, every page is optimized for search engine visibility and user experience.",
    gradient: 'from-yellow-400 via-yellow-300 to-transparent',
    color: 'text-yellow-500',
    bgcolor: 'hover:bg-yellow-500',
  },
  {
    number: '04',
    title: 'Content Creation & Expansion',
    text: "SEO thrives on content. We create and expand query-responsive blogs, landing pages, and service content that match search intent and capture qualified Mississauga traffic.",
    gradient: 'from-pink-500 via-purple-400 to-transparent',
    color: 'text-purple-500',
    bgcolor: 'hover:bg-purple-500',
  },
  {
    number: '05',
    title: 'Technical SEO',
    text: "From site speed to mobile usability and indexing, we fix backend issues that block rankings. A technically sound site ensures search engines and users stay engaged.",
    gradient: 'from-indigo-500 via-indigo-400 to-transparent',
    color: 'text-indigo-500',
    bgcolor: 'hover:bg-indigo-500',
  },
  {
    number: '06',
    title: 'Link Building & Authority Growth',
    text: "We secure high-quality, relevant backlinks that grow domain authority and trust. Strong off-page signals increase your visibility and credibility in competitive Mississauga markets.",
    gradient: 'from-red-500 via-red-400 to-transparent',
    color: 'text-red-500',
    bgcolor: 'hover:bg-red-500',
  },
  {
    number: '07',
    title: 'Monitoring & Reporting',
    text: "We track rankings, traffic, and conversions with transparent reports. Continuous monitoring ensures accountability, with data-driven refinements that keep your SEO on the growth path.",
    gradient: 'from-purple-500 via-transparent to-transparent',
    color: 'text-purple-400',
    bgcolor: 'hover:bg-purple-500',
  },
];

export default function page() {
    return (
        <>
            {/* <HeroSEOMiss /> */}
            <LocationHeroSection
            heading={
                <>
                <span>SEO Services in Mississauga <span className="text-blue-500">That Bring Long-Term Growth</span></span>
                </>
            }
            description=' If your business isn’t ranking on Google, you’re invisible to customers. In a city as competitive as Mississauga, strong SEO is the difference between being chosen and being ignored. 
              At <span className="font-semibold text-white">Bixeltek</span>, we help businesses achieve top rankings, consistent organic traffic, and sustainable lead growth with data-driven SEO strategies.
            '
            proofPoints={proofPoints}
            primaryCTA={{
                    text: 'Get a Free SEO Audit',
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
            <WhySEOMississauga />
            <WhySEOVisibilityMississauga />
            {/* <SEOCampaignsMississauga /> */}
            <ServicesSection
            heading='Tailored SEO Campaigns for'
            spanText='Mississauga Businesses'
            description='Different businesses require different SEO approaches. We customize campaigns based on your industry, competition, and growth goals to deliver measurable results that last.'
            services={services}
            />
            {/* <SEOTimelineMiss /> */}
            <LocationProcessSection
        heading={
          <>
                  <span> How We Deliver<span className="text-blue-500"> SEO Results</span> <br /> Step by Step</span>
          </>
        }
        description='SEO isn’t guesswork — it’s a system. At Bixeltek, we follow a structured process that builds visibility, credibility, and measurable improvements over time.'
        steps={steps}
        cta={{
        text: 'Talk To A SEO Specialist',
        href: 'mailto:zee@bixeltek.com',
      }}
      footerText="This structured approach ensures your SEO campaign builds steadily, adapts to changes, and delivers long-term growth for Mississauga businesses."

      />
            <WhyChooseBixeltekSMiss />
            {/* <SMissIndustries /> */}
            <LocationIndustrySection
            heading={
                <>
                <span className=" text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-500">
                        SEO That Works Across <br></br> Every Industry
                    </span>
                </>
            }
            description='We tailor SEO strategies to fit each industry’s unique challenges and opportunities'
            industries={industries}
            />
            <MovingBlob />
            {/* <SEOFaqMiss />  */}
            <LocationFaqSection
            label='Frequently Asked Questions'
            heading={
                <>
                 <h2 className="text-4xl text-center md:text-6xl font-inter font-bold text-white mb-6">
              SEO FAQs for <span className="text-blue-500">Mississauga Businesses</span>
            </h2>
            </>
            }
            description='Straight forward answers to common SEO questions Mississauga businesses ask — from timelines and guarantees, to Ads vs SEO, and service coverage.'
            faqs={faqs}
            />

            <ContactCTASection
            heading=' Ready to Rank Higher and'
            spanText='Get More Leads in Mississauga?'
            description='If your business isn’t showing up in Google searches, your competitors are.
                            Partner with Bixeltek to implement proven SEO strategies
                            that increase visibility, generate organic leads, and build long-term growth.'
            />

            {/* <section
                className="bg-black p-8 md:p-20 mx-auto flex flex-col md:flex-row justify-center items-center gap-10"
                id="form"
            >
                <div className="w-full md:w-1/2 flex flex-col justify-start items-start px-6">
                    <div className="space-y-5 text-white max-w-2xl">
                        <h2 className="text-4xl md:text-6xl capitalize font-inter font-bold">
                            Ready to Rank Higher and <span className="text-blue-500">Get More Leads in Mississauga?</span>
                        </h2>
                        <p className="text-white font-poppins text-base md:text-lg leading-relaxed">
                            If your business isn’t showing up in Google searches, your competitors are.
                            Partner with <span className="font-semibold">Bixeltek</span> to implement proven SEO strategies
                            that increase visibility, generate organic leads, and build long-term growth.
                        </p>

                        
                    </div>
                </div>

                <div className="w-full md:w-1/2 flex justify-center items-center mt-10 md:mt-0">
                    <ContactFromNew />
                </div>
            </section> */}

        </>
    )
}
