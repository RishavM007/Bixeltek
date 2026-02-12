import React from 'react'
import HeroDVancouver from '@/components/Vancouver/VanHero'
import BusinessProblemsVancouver from '@/components/Vancouver/VanSection1'
import BusinessStrugglesVancouver from '@/components/Vancouver/VanSection2'
import ServicesVancouver from '@/components/Vancouver/VanSection3'
import WhyChooseBixeltek from '@/components/Vancouver/VanSection4'
import MovingBlob from '@/components/Toronto/GoogleAds/BlobTG'
import BenefitsSectionVancouver from '@/components/Vancouver/VanSection4'
import VanIndustries from '@/components/Vancouver/VanIndustries'
import VancouverDMFaqs from '@/components/Vancouver/VanFaq'
import ContactFromNew from '@/components/ContactFormNew'
import Link from 'next/link'
import ServicesSection from '@/components/Common/ServicesGrid'
import LocationHeroSection from '@/components/Common/location/LocationHeroSection'
import iconimg from '@/assets/medal-ribbons-star-svgrepo-com.png';
import starimg from '@/assets/star-shine-svgrepo-com.png';
import googleimg from '@/assets/google-authenticator-svgrepo-com.png';
import LocationIndustrySection from '@/components/Common/location/LocationIndustrySection'
import cleaningcomp from "@/assets/digital marketing servies for cleaning companies.jpg";
import oil from "@/assets/digital marketing for oil refinaries.jpg"
import pet from "@/assets/groupmates-lesson.jpg"
import roofing from "@/assets/digital marketing for roofing industries.jpg"
import dental from "@/assets/close-up-dentist-instruments (1).jpg"
import lawncare from "@/assets/digital marketing for lawn care services.jpg"
import blackcar from "@/assets/digital marketing for car detailers.jpg"
import healthcare from "@/assets/digital marketing for health care practices.jpg"
import LocationFaqSection from '@/components/Common/location/LocationFaqSection'
import ContactCTASection from '@/components/Common/location/LocationCtaSection'

 const proofPoints = [
    { id: 1, text: "Google Partner Certified Agency", icon: googleimg },
    { id: 2, text: "200+ Campaigns Managed Across Canada", icon: starimg },
    { id: 3, text: "4+ Years Helping Businesses Grow", icon: iconimg },
  ];

    const services = [
    {
      title: "Google Ads Management",
      description:
        "Most businesses waste money on irrelevant clicks. We build campaigns that cut wasted spend and deliver qualified leads.",
      benefit: "More leads at a lower cost per acquisition.",
      link: "vancouver/google-ads-management",
    },
    {
      title: "SEO Services",
      description:
        "Ranking on Google is critical for Vancouver businesses. Our SEO strategies cover local, national, and AI-driven visibility.",
      benefit: "Sustainable traffic and consistent organic leads.",
      link: "vancouver/seo-services",
    },
    {
      title: "Web Design & Development",
      description:
        "An outdated site costs you trust and conversions. We design SEO-ready, mobile-first websites that convert.",
      benefit: "Stronger brand presence and higher conversions.",
      link: "vancouver/web-design-services",
    },
    {
      title: "Social Media Marketing",
      description:
        "Posting randomly doesn’t work. We run organic + paid campaigns that boost engagement and generate leads.",
      benefit: "Build awareness and connect with your audience.",
      link: "vancouver/social-media-marketing",
    },
    {
      title: "Analytics & CRO",
      description:
        "Without data, you’re guessing. We set up full tracking, analyze performance, and optimize for ROI.",
      benefit: "Smarter decisions, higher ROI.",
      link: "#",
    },
    {
      title: "Branding & Graphic Design",
      description:
        "Weak branding creates confusion. We design cohesive brand assets that elevate your business.",
      benefit: "Professional identity that stands out.",
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
    question: "How long does it take to see results from digital marketing?",
    answer:
      "Google Ads can generate leads within days, while SEO typically takes 3–6 months for sustainable results depending on your industry and competition.",
  },
  {
    question: "How much should I budget for digital marketing in Vancouver?",
    answer:
      "Budgets vary by business type, competition, and goals. We assess your industry trends and recommend a strategy that maximizes ROI without overspending.",
  },
  {
    question: "Do you only serve businesses in Vancouver?",
    answer:
      "No. While Vancouver is a focus market, Bixeltek works with clients across Greater Vancouver and throughout Canada.",
  },
  {
    question: "Why should I choose Bixeltek over other Vancouver agencies?",
    answer:
      "We are Google Partner Certified, ROI-driven, and offer integrated SEO, Google Ads, web design, and social media strategies backed by transparent reporting.",
  },
  {
    question: "What industries do you specialize in?",
    answer:
      "We help a wide range of industries including healthcare, home services, retail, education, professional services, and B2B/SaaS businesses.",
  },
  {
    question: "Can you redesign or build a new website for my business?",
    answer:
      "Yes, we create SEO-friendly, mobile-first websites designed to increase conversions and build a strong digital presence.",
  },
  {
    question: "How do you track and measure ROI?",
    answer:
      "We set up complete analytics, from conversion tracking in Google Ads to SEO keyword visibility, so you always know your exact ROI.",
  },
  {
    question: "Do you offer both organic and paid social media marketing?",
    answer:
      "Yes, we manage both organic content and paid campaigns on platforms like Facebook, Instagram, and LinkedIn to build engagement and generate leads.",
  },
];


export default function page() {

    return (
        <>
            {/* <HeroDVancouver /> */}
            <LocationHeroSection
            heading={
              <>
              <span> Digital Marketing Services in Vancouver{" "}
              <span className="text-blue-500">That Grow Your Business</span></span>
              </>
            }
            description='In a competitive city like Vancouver, standing out online is tough. Customers 
              search Google, scroll social media, and compare websites before making a decision. 
              If your business isn’t visible, you’re invisible. At Bixeltek, a Google Partner 
              Certified agency, we deliver SEO, Google Ads, web design, and social media 
              strategies that generate leads, boost ROI, and scale growth.'
              proofPoints={proofPoints}
            primaryCTA={{
                    text: 'Get a Free Consultation',
                    action: { type: 'openForm', form: 'contact' },
                }}
                secondaryCTA={{
                    text: ' Book a Strategy Call',
                    variant: 'secondary',
                    action: {
                    type: 'link',
                    href: 'mailto:zee@bixeltek.com',
                    },
                }}

            />
            <BusinessProblemsVancouver />
            <BusinessStrugglesVancouver />
            <ServicesSection
            heading='Digital Marketing Services That'
            spanText='Solve Business Challenges'
            description='We deliver end-to-end digital marketing services to help Vancouver'
            services={services}
            />
            <BenefitsSectionVancouver />
            {/* <VanIndustries /> */}
            <LocationIndustrySection
            heading={
              <>
              <span className=" text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-500">
                       Digital Marketing That Works <br></br> Across Industries
                    </span>
              </>
            }
            description='We design strategies that fit your industry’s unique challenges and customer journey.'
            industries={industries}
            />
            {/* <VancouverDMFaqs /> */}
            <LocationFaqSection
            label=' Frequently Asked Questions'
            heading={
              <>
              <h2 className="text-4xl text-center md:text-6xl font-inter font-bold text-white mb-6">
              Got Questions About <br /> <span className='text-blue-500'>Digital Marketing in Vancouver?</span>
            </h2>
              </>
            }
            description='Here are answers to the most common questions Vancouver businesses ask us about digital marketing.'
            faqs={faqs}
            />


            <ContactCTASection
            heading='Ready to'
            spanText='Grow Your Business in Vancouver?'
            description='Your customers are searching, scrolling, and comparing right now. The question is — will they find you, or your competitors? Partner with Bixeltek to launch SEO, Google Ads, and digital strategies that grow your business in Vancouver.'
            />


            {/* <section
                className="bg-black md:p-8 lg:p-20 mx-auto flex flex-col justify-center gap-10 items-center lg:flex-row"
                id="form"
            >
                <div className="w-full mt-14 md:mt-0 flex justify-start items-start px-6">
                    <div className="space-y-5 text-white max-w-2xl">
                        <h2 className="text-4xl md:text-6xl capitalize font-inter font-bold">
                            Ready to <span className="text-blue-500">Grow Your Business in Vancouver?</span>
                        </h2>
                        <p className="text-white font-poppins text-base leading-relaxed">
                            Your customers are searching, scrolling, and comparing right now. The question is — will they find you, or your competitors? Partner with Bixeltek to launch SEO, Google Ads, and digital strategies that grow your business in Vancouver.
                        </p>

                    </div>
                </div>

                <div className="lg:w-[87%] lg:mr-32 flex justify-start items-center px-6 lg:px-0">
                    <ContactFromNew />
                </div>
            </section> */}

        </>
    )
}
