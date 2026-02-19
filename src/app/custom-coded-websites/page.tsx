import CMSFlexibilitySection from '@/components/CodedWeb/CoddedWebSection3'
import GlobalExpertiseSection from '@/components/Common/GlobalExpertiseSection'
import CustomCodeFaq from '@/components/CodedWeb/CodedFaq'
import CodedCTASection from '@/components/CodedWeb/CodedWebCTA'
import CustomCodedHeroSection from '@/components/CodedWeb/CodedWebHero'
import IntersectingTiltedMarquees from '@/components/CodedWeb/CodedWebMarquee'
import CustomDevelopmentSection from '@/components/CodedWeb/CodedWebSection1'
import CustomGrowthCoded from '@/components/CodedWeb/CodedWebSection2'
import SecureByDefault from '@/components/CodedWeb/CodedWebSection4'
import CodeConversionSection from '@/components/CodedWeb/CodedWebSection5'
import HowItWorks from '@/components/CodedWeb/CodedWebSection6'
import WebsiteProcessTimeline from '@/components/CodedWeb/CodedWebTimeline'
import LocationProcessSection from '@/components/Common/location/LocationProcessSection'
import ContactFromNew from '@/components/ContactFormNew'
import React from 'react'
import saudiImg from "@/assets/Saudi Web Design.png";
import indiaImg from "@/assets/india-gate-delhi-1-attr-hero.jpeg";
import uaeImg from "@/assets/pexels-photo-13736456.jpeg";
import canadaImg from "@/assets/m_Toronto_destination_main_1_l_572_1000.webp";
import usaImg from "@/assets/17.jpg";

const steps = [
  {
    number: "01",
    title: "Technical Discovery & Audit",
    text: "We benchmark your website’s speed, crawl structure, conversion funnels, and data flow. We analyze every metric from Core Web Vitals to user engagement to identify opportunities and pain points, ensuring a solid foundation for development and marketing alignment.",
    gradient: "from-blue-500 via-blue-400 to-transparent",
    color: "text-blue-500",
  },
  {
    number: "02",
    title: "Architecture & Design System",
    text: "We define the information hierarchy and UX wireframes around optimized conversion paths. Every component is designed for scalability, accessibility, and visual consistency, ensuring your website functions as a high-performing product rather than just a page.",
    gradient: "from-green-500 via-teal-400 to-transparent",
    color: "text-teal-500",
  },
  {
    number: "03",
    title: "Development & Integration",
    text: "Our front-end is built with React/Next.js and back-end with Node.js or Laravel, fully integrated with marketing and analytics pipelines. Every line of code is optimized for performance, SEO, and cross-platform consistency to deliver a smooth user experience.",
    gradient: "from-yellow-400 via-yellow-300 to-transparent",
    color: "text-yellow-500",
  },
  {
    number: "04",
    title: "Headless or Hybrid CMS Integration",
    text: "We integrate APIs, custom content models, and admin dashboards tailored for non-technical teams. Your content operations are streamlined for flexibility and control while ensuring full compatibility with your design system and automation workflows.",
    gradient: "from-pink-500 via-purple-400 to-transparent",
    color: "text-purple-500",
  },
  {
    number: "05",
    title: "Optimization & QA",
    text: "Automated Lighthouse CI, Core Web Vitals, and accessibility audits ensure your website meets modern web standards. We perform rigorous cross-browser and device testing, fine-tune performance, and optimize every interaction to exceed user expectations.",
    gradient: "from-indigo-500 via-indigo-400 to-transparent",
    color: "text-indigo-500",
  },
  {
    number: "06",
    title: "Continuous Improvement",
    text: "Your site evolves through real user metrics, heatmaps, A/B testing, and conversion refinement. We continually analyze traffic, engagement, and sales data to improve UX, performance, and conversion outcomes, turning your website into a living, high-performing digital product.",
    gradient: "from-red-500 via-transparent to-transparent",
    color: "text-red-500",
  },
];

const locations = [
  {
    country: "Saudi Arabia",
    emoji: "🇸🇦",
    image: saudiImg,
    desc: (
      <>
        <a
          href="/saudi-arabia/riyadh/web-design-services"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:underline"
        >
          Riyadh
        </a>
        ,{" "}
        <a
          href="/saudi-arabia/eastern-province/web-design-services"
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
          href="/web-design-services-hyderabad"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:underline"
        >
          Hyderabad
        </a>
        ,{" "}
        <a
          href="/bangalore/website-design-company"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:underline "
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
          href="/toronto/web-design"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:underline"
        >
          Toronto
        </a>
        ,{" "}
        <a
          href="/vancouver/web-design-services"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:underline"
        >
          Vancouver
        </a>, {" "}
        <a
          href="/mississauga/web-design"
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

export default function page() {
    return (
        <>
            <CustomCodedHeroSection />
            <CustomDevelopmentSection />
            <CustomGrowthCoded />
            <CMSFlexibilitySection />
            <IntersectingTiltedMarquees />
            <SecureByDefault />
            <CodeConversionSection />
            <CodedCTASection />
            {/* <WebsiteProcessTimeline /> */}
            <LocationProcessSection
            heading={
                <>
                <span>
                    How We Build <span className="text-blue-500">Websites That Perform Like Products</span>
                </span>
                </>
            }
            description='From discovery to continuous improvement, our process ensures your website evolves into a high-performance ecosystem that drives traffic, conversions, and business growth.'
            steps={steps}
            cta={{
                text:'Talk To Our Web Specialist',
                href:'mailto:zee@bixeltek.com',
                bg:'bg-red-600 text-white hover:bg-red-700'
            }}
            footerText='This structured approach ensures your website is launched with precision, optimized continuously, and designed to maximize performance and conversions.'
            />
            <GlobalExpertiseSection 
            heading={
                <span>Global Expertise,{" "}
          <span className="text-blue-500">Local Understanding</span></span>
            }
            description=' We develop and maintain high-performance web systems across India,
          Saudi Arabia, UAE, Canada, and the United States, adapting to each
          region’s technical, linguistic, and market context.'
          footerText='Wherever your users are, we deploy your site on the edge — close,
        compliant, and lightning-fast.'
            locations={locations}
            />
            <HowItWorks />
            <CustomCodeFaq />

            <section
                className="bg-[black] py-20 px-6 md:px-20 flex flex-col lg:flex-row items-center gap-10"
                id="form"
            >
                {/* Left Side - Text & CTAs */}
                <div className="w-full lg:w-1/2 flex flex-col justify-start items-start">
                    <h2 className="text-4xl md:text-6xl font-inter font-medium text-white mb-6">
                        Get a Custom Build <span className='text-blue-500'>Roadmap for Your Brand</span> 
                    </h2>
                    <p className="text-gray-100 font-poppins text-base md:text-lg leading-relaxed mb-8">
                        We’ll review your existing website architecture, Core Web Vitals, SEO structure,
                        and conversion funnel — and outline a tailored approach for your next-generation build.
                    </p>

                    {/* Audit Points */}
                    <ul className="flex flex-col text-white gap-4 mb-8">
                        <li className="flex items-start gap-3">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                            <span>Speed & Performance Diagnostics</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                            <span>Crawl Map & Schema Analysis</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                            <span>CMS vs Custom Feasibility Review</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                            <span>Integration & Tracking Health</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                            <span>30-Day Improvement Plan</span>
                        </li>
                    </ul>

                    {/* CTA Button */}
                    <a href="#form" className="px-7 py-3 rounded-2xl bg-blue-600 text-white font-semibold text-sm shadow-lg hover:bg-blue-700 transition">
                        Get My Free Audit
                    </a>

                    {/* Badges */}
                    <ul className="text-sm mt-8 flex flex-row md:flex-row gap-5 md:gap-10 transition-all duration-500">
                        <li className="mb-6">
                            <a href="https://www.google.com/partners/agency?id=2188074075" target="_blank" className="mt-2 flex justify-start">
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
                <div className="lg:w-[50%] lg:mr-10 flex justify-start items-center">
                    <ContactFromNew />
                </div>
            </section>

        </>
    )
}
