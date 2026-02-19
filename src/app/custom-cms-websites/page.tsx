import HeroCMSDevelopment from '@/components/WebCMS/CMSHero'
import CMSHeroSpline from '@/components/WebCMS/CMSHeroSpline'
import CMSIndustries from '@/components/WebCMS/CMSIndustries'
import CMSWorkflow from '@/components/WebCMS/CMSProcess'
import CMSProblemsSection from '@/components/WebCMS/CMSSection1'
import CMSStackedCards from '@/components/WebCMS/CMSSection2'
import CmsServicesGrid from '@/components/WebCMS/CMSSection3'
import CMSInfoSection from '@/components/WebCMS/CMSSection4'
import CMSProblemSection2 from '@/components/WebCMS/CMSSection5'
import MarketingInfrastructureSection from '@/components/WebCMS/CMSWhyChooseUs'
import ContactFromNew from '@/components/ContactFormNew'
import React from 'react'
import LocationProcessSection from '@/components/Common/location/LocationProcessSection'
import DynamicIndustrySection from '@/components/Common/IndustryCarousel'
import cleaningcomp from "@/assets/environmental-pollution-industry-exterior-daylight.jpg";
import pet from "@/assets/muslim-person-travelling-through-city.jpg";
import roofing from "@/assets/ordinary-life-scene-from-mall-america.jpg";
import dental from "@/assets/asian-man-reading-text-messages-with-his-colleague-making-phone-call-background.jpg";
import blackcar from "@/assets/top-view-numerous-cars-traffic-dubai-united-arab-emirates.jpg";
import healthcare from "@/assets/beautiful-young-female-doctor-looking-camera-office.jpg";


const steps = [
  {
    number: "01",
    title: "Discovery & Audit",
    text: "We analyze your existing infrastructure, identifying technical and marketing inefficiencies while mapping opportunities for scalability, SEO, and performance gains.",
    gradient: "from-blue-500 via-cyan-400 to-transparent",
    color: "text-yellow-500",
    bgcolor: "hover:bg-yellow-500",
  },
  {
    number: "02",
    title: "Architecture & Strategy",
    text: "We design a modular CMS architecture — with scalable taxonomies, optimized URL trees, multilingual logic, and content governance frameworks built for long-term growth.",
    gradient: "from-green-500 via-teal-400 to-transparent",
    color: "text-green-500",
    bgcolor: "hover:bg-orange-500",
  },
  {
    number: "03",
    title: "Design & Development",
    text: "We translate the architecture into seamless user experiences using React, Next.js, or native WordPress environments — ensuring every pixel and interaction drives engagement.",
    gradient: "from-yellow-400 via-yellow-300 to-transparent",
    color: "text-blue-500",
    bgcolor: "hover:bg-yellow-400",
  },
  {
    number: "04",
    title: "Integration & Tracking",
    text: "We integrate GA4, Meta Pixel, conversion APIs, and CRMs — ensuring complete visibility into every lead, conversion, and campaign event across your digital ecosystem.",
    gradient: "from-pink-500 via-purple-400 to-transparent",
    color: "text-red-500",
    bgcolor: "hover:bg-yellow-500",
  },
  {
    number: "05",
    title: "Optimization & Scaling",
    text: "After launch, we continuously monitor performance, conduct A/B tests, refine conversion funnels, and scale winning modules — turning data into measurable growth.",
    gradient: "from-green-500 via-transparent to-transparent",
    color: "text-blue-600",
    bgcolor: "hover:bg-yellow-600",
  },
];

const industries = [
        {
            id: "health",
            img: healthcare,
            label: "Digital Marketing for Healthcare",
            text: " Healthcare & Dental Clinics",
            description: "Rank for treatments, attract patients, and grow visibility.",
        },
        {
            id: "auto",
            img: blackcar,
            label: "Construction & Engineering",
            text: "Construction & Engineering",
            description: " Generate high-intent B2B inquiries from organic traffic.",
        },
        {
            id: "cleaning",
            img: cleaningcomp,
            label: "Digital Marketing for Industries",
            text: " Industrial & Manufacturing Firms ",
            description: "Build supplier visibility and trust online.",
        },
        {
            id: "roofing",
            img: roofing,
            label: "Digital Marketing for Ecommerce",
            text: "E-commerce & Retail",
            description: "Rank for products and drive consistent conversions.",
        },
        {
            id: "lawncare",
            img: pet,
            label: "Digital Marketing for Education & Training Institutes",
            text: "Education & Training Institutes",
            description: "Capture enrollments through search visibility and local maps.",
        },
        {
            id: "dental",
            img: dental,
            label: "Digital Marketing for Corporate & Consulting Firms",
            text: "Corporate & Consulting Firms",
            description: "Build credibility and inbound visibility for brand trust.",
        },
    ];

export default function page() {
  return (
    <>
    <HeroCMSDevelopment/>
    <CMSInfoSection/>
    <CMSProblemSection2 />
    <CMSProblemsSection/>
    <CMSStackedCards />
    {/* <CMSWorkflow /> */}
    <LocationProcessSection
    bg='bg-white'
    heading={
      <span> Our Process Combines <br />{" "}
        <span className="text-yellow-500">Engineering Discipline & Marketing Foresight</span></span>
    }
    description='Every CMS build we deliver is a living system — structured for performance, optimized for
        SEO, and designed to evolve with your campaigns and business goals.'
    steps={steps}
    cta={{
      text:'Book a Free Strategy Call',
      href:'mailto:zee@bixeltek.com',
      bg:'bg-gradient-to-tr from-green-500 via-green-700 to-green-950 hover:bg-gradient-to-tr hover:from-green-950 hover:via-green-700 hover:to-green-500 text-white'
    }}
    footerText='Your CMS doesn’t just go live — it evolves with your campaigns. Every feature is crafted to
        deliver clarity, control, and continuous performance improvement.'
    />
    <CmsServicesGrid/>
    {/* <CMSIndustries/> */}
    <DynamicIndustrySection
    heading={
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-black to-blue-500">
                       Driving Measurable Results Across  <br></br>  Eastern Province&apos;s Leading Sectors
                    </span>
    }
    description='Our expertise spans industries that define the region&apos;s economy:'
    industries={industries}
    />
    <MarketingInfrastructureSection/>
    <section
  className="bg-black py-20 px-6 lg:px-20 flex flex-col lg:flex-row items-center gap-10"
  id="form"
>
  {/* Left Side - Text & CTAs */}
  <div className="w-full lg:w-1/2 flex flex-col justify-start items-start">
    <h2 className="text-4xl md:text-6xl font-inter font-medium text-white mb-6">
      Find Out If Your <span className="text-blue-500">CMS Is Holding You Back</span>.
    </h2>

    <p className="text-gray-100 font-poppins text-base md:text-lg leading-relaxed mb-8">
      Our expert team will audit your current CMS for performance, SEO readiness, and scalability — and deliver a personalized roadmap for improvement.
    </p>

    {/* Audit Points */}
    <ul className="flex flex-col text-white gap-4 mb-8">
      <li className="flex items-start gap-3">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
        </svg>
        <span>Speed & Core Web Vitals report</span>
      </li>
      <li className="flex items-start gap-3">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
        </svg>
        <span>Technical SEO & content audit</span>
      </li>
      <li className="flex items-start gap-3">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
        </svg>
        <span>Conversion flow analysis</span>
      </li>
      <li className="flex items-start gap-3">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
        </svg>
        <span>30-day optimization roadmap</span>
      </li>
    </ul>

    {/* CTA Button */}
    <a
      href="#form"
      className="px-7 py-3 rounded-2xl bg-blue-600 text-white font-semibold text-sm shadow-lg hover:bg-blue-700 transition"
    >
      Get My Free CMS Audit
    </a>

    {/* Badges */}
    <ul className="text-sm mt-8 flex flex-row md:flex-row gap-5 md:gap-10 transition-all duration-500">
      <li className="mb-6">
        <a
          href="https://www.google.com/partners/agency?id=2188074075"
          target="_blank"
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
        <div>
          <a target="_blank" href="https://www.goodfirms.co/company/bixeltek">
            <img
              src="https://assets.goodfirms.co/badges/color-badge/top-digital-marketing-companies.svg"
              title="Top Digital Marketing Company"
              className="w-20 md:w-32 h-auto"
              alt="Top Digital Marketing Company on GoodFirms"
            />
          </a>
        </div>
      </li>
    </ul>
  </div>

  {/* Right Side - Contact Form */}
  <div className="lg:w-[50%] lg:mr-20 flex justify-start items-center">
    <ContactFromNew />
  </div>
</section>

    </>
  )
}
