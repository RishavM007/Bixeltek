export const metadata = {
    title: "Google Ads Management Vancouver | Google Partner PPC Agency",
    description:
        "Bixeltek is a Google Partner Certified Google Ads agency in Vancouver. We manage PPC campaigns across Search, Display, Shopping, and more to deliver qualified leads and measurable ROI.",
    keywords:
        "Web development Hyderabad, Best web development company Hyderabad, Custom website design, Next.js development, React.js development, Full-stack web development, Frontend development, Backend development, E-commerce website development, WordPress development, Responsive web design, UI/UX design Hyderabad, Web application development, Modern web technologies",
    openGraph: {
        title: "Google Ads Management Vancouver | Google Partner PPC Agency",
        description:
            "Bixeltek is a Google Partner Certified Google Ads agency in Vancouver. We manage PPC campaigns across Search, Display, Shopping, and more to deliver qualified leads and measurable ROI.",
        type: "website",
    },
    alternates: {
        canonical: "https://bixeltek.com/vancouver/google-ads",
    },
};

import React from 'react'
import HeroGoogleAdsVancouver from '@/components/Vancouver/GoogleAds/GoogleVanHero';
import AdBudgetSection from '@/components/Vancouver/GoogleAds/GoogleVanSection1';
import GoogleAdsServicesVancouver from '@/components/Vancouver/GoogleAds/GoogleVanSection2';
import GoogleAdsCampaignsVancouver from '@/components/Vancouver/GoogleAds/GoogleVanSection3';
import GoogleAdsProcessVancouver from '@/components/Vancouver/GoogleAds/GoogleVanTimeline';
import GoogleVanIndustries from '@/components/Vancouver/GoogleAds/GoogleAdsIndustries';
import AreasWeServeCanada from '@/components/Vancouver/GoogleAds/AreasWeServeVan';
import VancouverAdsFaqs from '@/components/Vancouver/GoogleAds/GoogleVanFaq';
import Link from 'next/link';
import ContactFromNew from '@/components/ContactFormNew';
import ServicesSection from '@/components/Common/ServicesGrid';
import LocationHeroSection from '@/components/Common/location/LocationHeroSection';
import iconimg from '@/assets/medal-ribbons-star-svgrepo-com.png';
import starimg from '@/assets/star-shine-svgrepo-com.png';
import googleimg from '@/assets/google-authenticator-svgrepo-com.png';
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
    { id: 1, text: "Google Partner Certified Agency", icon: googleimg },
    { id: 2, text: "200+ Campaigns Managed Across Canada", icon: starimg },
    { id: 3, text: "4+ Years Helping Businesses Grow", icon: iconimg },
  ];


      const services = [
    {
      title: "Campaign Setup & Strategy",
      description:
        "Keyword research, competitor analysis, and campaign structuring designed for Vancouver’s competitive market.",
      benefit: "Campaigns built for maximum ROI.",
      link: "#",
    },
    {
      title: "Compelling Ad Copywriting",
      description:
        "Ads written to resonate with local customers and drive action.",
      benefit: "Higher click-through rates and engagement.",
      link: "#",
    },
    {
      title: "Landing Page Optimization",
      description:
        "SEO-friendly, conversion-focused designs built to capture leads.",
      benefit: "More conversions from your ad traffic.",
      link: "#",
    },
    {
      title: "Conversion Tracking & Analytics",
      description:
        "Track every click, call, and form with transparent reporting.",
      benefit: "Complete visibility on ROI.",
      link: "#",
    },
    {
      title: "Bid & Budget Management",
      description:
        "Daily adjustments to maximize ROI and minimize waste.",
      benefit: "Optimized spend and lower cost-per-lead.",
      link: "#",
    },
    {
      title: "Continuous Optimization",
      description:
        "A/B testing, keyword pruning, and campaign refinement.",
      benefit: "Better performance over time.",
      link: "#",
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
    question: "How fast can I get results with Google Ads?",
    answer:
      "Google Ads delivers instant visibility. Businesses often start seeing leads within the first few days of launching well-optimized campaigns.",
  },
  {
    question: "What budget should I set for Google Ads in Vancouver?",
    answer:
      "Budgets vary by competition and industry, but we’ll build a strategy designed to maximize ROI — not just spend your ad dollars.",
  },
  {
    question: "Do you only manage Google Ads for Vancouver businesses?",
    answer:
      "No. While Vancouver is a focus area, we manage Google Ads campaigns for businesses across Greater Vancouver and throughout Canada.",
  },
  {
    question: "How does Bixeltek make my ads more effective?",
    answer:
      "We combine keyword targeting, ad copywriting, landing page optimization, and advanced conversion tracking — all focused on generating leads, not just clicks.",
  },
  {
    question: "What types of Google Ads campaigns do you manage?",
    answer:
      "We handle Search, Display, Shopping, Performance Max, YouTube, Local Service Ads, Discovery, and Remarketing to meet every business goal.",
  },
  {
    question: "Will you set up tracking and reporting for my campaigns?",
    answer:
      "Yes. We install full conversion tracking for calls, forms, and sales so you always see the real ROI from your campaigns.",
  },
  {
    question: "Can Google Ads work for small businesses in Vancouver?",
    answer:
      "Absolutely. With the right targeting and smart budget management, even small businesses can generate consistent leads and growth from Google Ads.",
  },
  {
    question: "How is working with a Google Partner Agency like Bixeltek different?",
    answer:
      "As a Google Partner Certified agency, we follow best practices, have proven experience managing large-scale campaigns, and receive direct support from Google.",
  },
];

const steps = [
  {
    number: '01',
    title: 'Discovery & Market Research',
    text: "Understand your goals, audience, and Vancouver’s competition to lay the foundation for an effective campaign.",
    gradient: 'from-blue-500 via-blue-400 to-black',
    color: 'text-blue-500',
    bgcolor: 'hover:bg-blue-500',
  },
  {
    number: '02',
    title: 'Campaign Strategy & Setup',
    text: "Build structured campaigns for maximum relevance, quality score, and ROI.",
    gradient: 'from-green-500 via-teal-400 to-transparent',
    color: 'text-teal-500',
    bgcolor: 'hover:bg-teal-500',
  },
  {
    number: '03',
    title: 'Ad Creation & Landing Pages',
    text: "Write persuasive ads and design landing pages that convert visitors into leads.",
    gradient: 'from-yellow-400 via-yellow-300 to-transparent',
    color: 'text-yellow-500',
    bgcolor: 'hover:bg-yellow-500',
  },
  {
    number: '04',
    title: 'Tracking & Launch',
    text: "Install call, form, and sales tracking before launch to ensure complete visibility of results.",
    gradient: 'from-pink-500 via-purple-400 to-transparent',
    color: 'text-purple-500',
    bgcolor: 'hover:bg-purple-500',
  },
  {
    number: '05',
    title: 'Daily Optimization',
    text: "Monitor keywords, adjust bids, and refine targeting for continuous performance improvement.",
    gradient: 'from-indigo-500 via-indigo-400 to-transparent',
    color: 'text-indigo-500',
    bgcolor: 'hover:bg-indigo-500',
  },
  {
    number: '06',
    title: 'Reporting & Scaling',
    text: "Share transparent reports and scale winning campaigns to maximize ROI.",
    gradient: 'from-red-500 via-transparent to-transparent',
    color: 'text-red-500',
    bgcolor: 'hover:bg-red-500',
  },
];

export default function page() {
  
    return (
        <>
            {/* <HeroGoogleAdsVancouver /> */}
            <LocationHeroSection
            heading={
              <>
              <span>Google Ads Management in Vancouver{" "}
              <span className="text-blue-500">That Generates Leads and ROI</span></span>
              </>
            }
            description='Many Vancouver businesses spend thousands on Google Ads — but see little return. 
              Without the right strategy, ad spend quickly disappears into wasted clicks. 
              At Bixeltek, a Google Partner Certified agency, we manage Google Ads campaigns 
              that cut waste, capture high-quality leads, and scale ROI.'
            proofPoints={proofPoints}
              primaryCTA={{
                    text: 'Get a Free Ads Audit',
                    action: { type: 'openForm', form: 'contact' },
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
            <AdBudgetSection />
            <ServicesSection
            heading='Smarter Campaigns That'
            spanText='Deliver Real Results'
            description='Bixeltek provides complete Google Ads management in Vancouver — from setup to optimization — ensuring your budget works harder for better results.'
            services={services}
            />
            <GoogleAdsCampaignsVancouver />
            {/* <GoogleAdsProcessVancouver /> */}
            <LocationProcessSection
              heading={
                <>
                        <span> A Transparent Process That Delivers<span className="text-blue-500"> Consistent ROI</span></span>
                </>
              }
              description='We use a proven, step-by-step process that ensures every Google Ads campaign is optimized for growth'
              steps={steps}
              cta={{
              text: 'Book a Free Google Ads Consultation',
              href: '#form',
            }}
            footerText="This structured approach ensures your Google Ads campaigns in Vancouver are transparent, measurable, and continuously optimized for growth."

      />
            {/* <GoogleVanIndustries /> */}
            <LocationIndustrySection
            heading={
              <>
              <span className=" text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-500">
                      Who Can Benefit From <br></br> Google Ads in Vancouver?
                    </span>
              </>      
            }
            description='Google Ads works because it captures demand when it’s highest — when customers are searching for solutions. That makes it valuable across industries.'
            industries={industries}
            />
            <AreasWeServeCanada />
            {/* <VancouverAdsFaqs /> */}
            <LocationFaqSection
            heading={
              <>
              <h2 className="text-3xl text-center md:text-6xl font-inter font-bold text-white mb-6">
              Got Questions About <br /> <span className='text-blue-500'>Google Ads in Vancouver?</span>
            </h2>
              </>
            }
            description='Here are answers to the most common questions Vancouver businesses ask about Google Ads.'
            faqs={faqs}
            />

            <ContactCTASection
            heading='Ready to'
            spanText='Run Smarter Google Ads in Vancouver?'
            description='Your customers are searching right now. The question is — will they find you, or your competitors? Partner with Bixeltek to run Google Ads campaigns that drive qualified leads and measurable ROI in Vancouver.'
            />
            {/* <section
                className="bg-black py-10 lg:py-20 md:px-8 lg:px-20 flex flex-col lg:flex-row items-center gap-10"
                id="form"
            >
                <div className="w-full lg:w-1/2 flex flex-col justify-start items-start px-6">
                    <h2 className="text-4xl md:text-6xl font-inter font-bold text-white mb-6">
                        Ready to <span className="text-blue-500">Run Smarter Google Ads in Vancouver?</span>
                    </h2>
                    <p className="text-gray-300 font-poppins text-base md:text-lg leading-relaxed mb-8">
                        Your customers are searching right now. The question is — will they find you, or your competitors? Partner with Bixeltek to run Google Ads campaigns that drive qualified leads and measurable ROI in Vancouver.
                    </p>
                </div>

                <div className="w-[90%] lg:w-[50%] lg:mr-32 flex justify-start items-center">
                    <ContactFromNew />
                </div>
            </section> */}

        </>
    )
}
