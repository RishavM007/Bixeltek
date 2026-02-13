
export const metadata = {
    title: "Google Ads Management Toronto | Google Partner for PPC",
    description:
        " Bixeltek is a Google Partner agency in Toronto offering full-cycle Google Ads management. Smarter PPC campaigns, lower CPA, better leads, transparent reporting.",
    keywords:
        "Web development Hyderabad, Best web development company Hyderabad, Custom website design, Next.js development, React.js development, Full-stack web development, Frontend development, Backend development, E-commerce website development, WordPress development, Responsive web design, UI/UX design Hyderabad, Web application development, Modern web technologies",
    openGraph: {
        title: "Google Ads Management Toronto | Google Partner for PPC",
        description:
            " Bixeltek is a Google Partner agency in Toronto offering full-cycle Google Ads management. Smarter PPC campaigns, lower CPA, better leads, transparent reporting.",
        type: "website",
    },
    alternates: {
      
        canonical: "https://bixeltek.com/toronto/google-ads-management",
    },
};




import React from 'react'
import WhyGoogleAdsToronto from '@/components/Toronto/GoogleAds/Section2TG'
import CampaignsSection from '@/components/Toronto/GoogleAds/Sextion3TG'
import MovingBlob from '@/components/Toronto/GoogleAds/BlobTG'
import WhyGoogleAdsToronto2 from '@/components/Toronto/GoogleAds/Section4TG'
import GoogleAdsServicesSectionToronto from '@/components/Toronto/GoogleAds/Section5TG'
import TextMarquee from '@/components/Toronto/GoogleAds/SectionMaruqq'
import WhoIsThisServiceFor from '@/components/Toronto/GoogleAds/Section6TG'
import GradientBorderContainersMobToronto from '@/components/Toronto/GoogleAds/TimelineTG'
import TGDevFaq from '@/components/Toronto/GoogleAds/SectionFaqTG'
import ContactFromNew from '@/components/ContactFormNew'
import Link from 'next/link'
import { LogoTicker2 } from '@/components/GoogleAdsCarousel'
import ServicesSection from '@/components/Common/ServicesGrid';
import LocationHeroSection from '@/components/Common/location/LocationHeroSection';
import LocationFaqSection from '@/components/Common/location/LocationFaqSection';
import ContactCTASection from '@/components/Common/location/LocationCtaSection';
import LocationProcessSection from '@/components/Common/location/LocationProcessSection';

  const services = [
        {
            title: 'Comprehensive Account Setup',
            description: 'From keyword research and competitor analysis to campaign structuring and ad group creation, we design campaigns to target your exact audience in Toronto.',
        },
        {
            title: 'Expert Ad Copywriting',
            description: 'We craft compelling ads that resonate with your Toronto customers and highlight your unique selling points.',
        },
        {
            title: 'Landing Page Optimization',
            description: 'Drive conversions with custom landing pages designed for clear calls-to-action and local trust signals.',
        },
        {
            title: 'Conversion Tracking & Analytics',
            description: 'Implement full tracking for calls, form submissions, sales, and more, with transparent, real-time reporting.',
        },
        {
            title: 'Budget Management & Bidding',
            description: 'Daily bid management to maximize ROI; no wasted spend.',
        },
        {
            title: 'Ongoing Optimization',
            description: 'Continuous A/B testing, negative keyword refinement, and campaign adjustments to keep performance improving.',
        },
    ];
    const steps = [
  {
    number: '01',
    title: 'Deep Discovery & Market Analysis',
    text: "Map your goals, competitors, and Toronto’s unique search patterns. Leverage Koray Tuğberk’s frameworks for in-depth entity, intent, and audience mapping.",
    gradient: 'from-blue-500 via-blue-400 to-transparent',
    color: 'text-[#4285F4]',
    bgcolor: 'hover:bg-blue-500',
  },
  {
    number: '02',
    title: 'Custom Campaign Strategy',
    text: "Design campaigns and structures for maximum Quality Score and market coverage. Identify highest-converting and most valuable keywords (including long-tail and local-specific terms).",
    gradient: 'from-green-500 via-teal-400 to-transparent',
    color: 'text-[#34A853]',
    bgcolor: 'hover:bg-teal-500',
  },
  {
    number: '03',
    title: 'Ad & Landing Page Creation',
    text: "Write persuasive, benefits-first copy. Build Toronto-optimized landing pages with calls-to-action, trust badges, and social proof.",
    gradient: 'from-yellow-400 via-yellow-300 to-transparent',
    color: 'text-[#EA4335]',
    bgcolor: 'hover:bg-yellow-500',
  },
  {
    number: '04',
    title: 'Launch, Tracking, & Measurement',
    text: "Rapid turnaround (5–10 days). Full analytics, call tracking, and lead attribution from the outset.",
    gradient: 'from-pink-500 via-purple-400 to-transparent',
    color: 'text-[#FBBC04]',
    bgcolor: 'hover:bg-purple-500',
  },
  {
    number: '05',
    title: 'Ongoing Optimization',
    text: "Daily adjustments: Negative keyword pruning, bid management, and search term refinement. Weekly/Monthly deep-dive reports and ROI-boosting recommendations.",
    gradient: 'from-indigo-500 via-transparent to-transparent',
    color: 'text-[#4285F4]',
    bgcolor: 'hover:bg-indigo-500',
  },
];

const faqs = [
  {
    question: "How long does it take to design a website?",
    answer:
      "Most business websites take 4–6 weeks, depending on complexity and content readiness.",
  },
  {
    question: "Do you only build WordPress websites?",
    answer:
      "No. We offer both custom-coded builds and WordPress CMS websites, depending on your goals.",
  },
  {
    question: "Can you redesign my existing website?",
    answer:
      "Yes. We specialize in website redesigns that improve aesthetics, performance, and conversions.",
  },
  {
    question: "Do you develop e-commerce websites?",
    answer:
      "Yes. We build scalable e-commerce platforms using Shopify, WooCommerce, or custom solutions with Next.js.",
  },
  {
    question: "Will my website be mobile-friendly?",
    answer:
      "Absolutely. Every site we build is fully responsive and optimized for all devices.",
  },
  {
    question: "Can you integrate third-party tools or APIs?",
    answer:
      "Yes. We can integrate CRMs, payment gateways, booking systems, analytics, and other third-party tools.",
  },
  {
    question: "Do you provide website maintenance?",
    answer:
      "Yes. We offer monthly maintenance plans to ensure your site stays secure, updated, and fast.",
  },
  {
    question: "What technologies do you use?",
    answer:
      "We specialize in modern stacks like Next.js, React, Node.js, and also support WordPress and Shopify.",
  },
  {
    question: "Do you offer SEO-friendly websites?",
    answer:
      "Yes. All websites we build follow SEO best practices including fast load times, clean code, and proper on-page structure.",
  },
  {
    question: "Can you help with hosting and domain setup?",
    answer:
      "Yes. We guide you through domain registration, hosting setup, and connect everything for a smooth launch.",
  },
];



export default function page() {
  return (
    <>
    <LocationHeroSection
     heading={
                    <>
                    <span>Toronto’s <span className='text-blue-500'>Trusted Google Ads Partner</span> for Scalable Lead Growth</span>
                    </>
                }
     description='Bixeltek is a certified Google Partner agency helping Toronto &amp; GTA businesses run smarter PPC campaigns that deliver high-quality leads and measurable ROI.'
     primaryCTA={{
        text: 'Get Your Free Google Ads Audit',
        variant: 'primary',
        action: { type: 'link', href: '#form' },
      }}
      secondaryCTA={{
        text: 'Speak to a Specialist',
        variant: 'secondary',
        action: { type: 'link', href: 'mailto:zee@bixeltek.com' },
      }}
    />
      {/* <section className="relative w-full h-[80vh] md:h-[90vh] flex flex-col items-center justify-end lg:justify-center overflow-hidden">
        <div className="absolute inset-0">
        </div>
        <div className="relative z-10 max-w-7xl text-center px-4">
          <h1 className="text-3xl md:text-7xl font-inter font-bold text-white/90 text-white mb-4 leading-tight">
            Toronto’s <span className='text-blue-500'>Trusted Google Ads Partner</span> for Scalable Lead Growth
          </h1>
          <p className="text-lg md:text-xl max-w-4xl mx-auto text-gray-200 mb-6">
            Bixeltek is a certified Google Partner agency helping Toronto &amp; GTA businesses run smarter PPC campaigns that deliver high-quality leads and measurable ROI.
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link href="#form">
              <button className="px-6 py-3 bg-black/10 backdrop:blur-2xl border border-blue-500 hover:bg-blue-700 text-white font-semibold rounded-full shadow-lg transition">
                Get Your Free Google Ads Audit
              </button>
            </Link>
            <a href="mailto:zee@bixeltek.com">
              <button className="px-6 py-3 bg-white hover:bg-gray-100 text-gray-900 font-semibold rounded-full shadow-lg transition">
                Speak to a Specialist
              </button>
            </a>
          </div>

        </div>
        <div className="absolute inset-0 bg-black/40" />
        <LogoTicker2 />
      </section> */}
      <WhyGoogleAdsToronto />
      <CampaignsSection />
      <MovingBlob />
      <WhyGoogleAdsToronto2 />
      <TextMarquee />
      <ServicesSection
            heading='At Bixeltek, We Specialize in'
            spanText='Making Your Ad Spend Work Smarter'
            description='Our Google Ads Management service in Toronto delivers full-cycle PPC management, tailored to your business goals and local market dynamics. We handle all the complexities so you can focus on growing your business and closing leads.'
            services={services}
            />
      {/* <GradientBorderContainersMobToronto /> */}
      <LocationProcessSection
        heading={
          <>
                  <span>Our<span className="text-blue-500"> Proven Google Ads <br /></span>Management Process</span>
          </>
        }
        description='The 5-Step Process That Delivers Results for Toronto Businesses.'
        steps={steps}
        cta={{
        text: 'Talk To Our Ads Specialist',
        href: 'mailto:zee@bixeltek.com',
      }}
      footerText="This structured approach ensures your Google Ads campaigns are launched fast, optimized daily, and built to maximize ROI."

      />
      <WhoIsThisServiceFor />
      {/* <TGDevFaq /> */}
      <LocationFaqSection
        label='FAQs'
        heading={
          <>
          <h2 className="text-3xl text-center md:text-6xl font-inter font-bold text-white mb-10">
              Still Got Questions?
            </h2>
          </>
        }
        faqs={faqs}
        />
        <ContactCTASection
        heading='Ready to Boost Your'
        spanText='Toronto Business with Google Ads?'
        description='Toronto customers are searching for your services right now. Don’t let competitors capture those clicks! Partner with Bixeltek, a Google Partner Certified agency, to launch highly targeted campaigns that drive leads, sales, and measurable ROI across Toronto and the GTA.'
        />

      {/* <section
        className="bg-black p-4 md:p-8 lg:p-20 mx-auto flex flex-col lg:flex-row justify-center items-center gap-10"
        id="form"
      >
        <div className="w-full lg:w-1/2 flex flex-col justify-start items-start px-6">
          <div className="space-y-5 text-white max-w-2xl">
            <h2 className="text-4xl md:text-6xl capitalize font-inter font-bold">
              Ready to Boost Your <span className="text-blue-500">Toronto Business with Google Ads?</span>
            </h2>
            <p className="text-white font-poppins text-base md:text-lg leading-relaxed">
              Toronto customers are searching for your services right now. Don’t let competitors capture those clicks!
              Partner with <span className="font-semibold">Bixeltek</span>, a Google Partner Certified agency,
              to launch highly targeted campaigns that drive leads, sales, and measurable ROI across Toronto and the GTA.
            </p>

            
          </div>
        </div>

        <div className="w-full lg:w-1/2 flex justify-center items-center mt-10 md:mt-0">
          <ContactFromNew />
        </div>
      </section> */}
    </>
  )
}
