
export const metadata = {
  title: "SEO Services Toronto | Bixeltek – Trusted SEO Agency",
  description:
    " Bixeltek provides SEO services for Toronto and Canadian businesses. From local SEO to AI SEO, we deliver rankings, organic traffic, and measurable ROI.",
  keywords:
    "Web development Hyderabad, Best web development company Hyderabad, Custom website design, Next.js development, React.js development, Full-stack web development, Frontend development, Backend development, E-commerce website development, WordPress development, Responsive web design, UI/UX design Hyderabad, Web application development, Modern web technologies",
  openGraph: {
    title: " SEO Services Toronto | Bixeltek – Trusted SEO Agency",
    description:
      " Bixeltek provides SEO services for Toronto and Canadian businesses. From local SEO to AI SEO, we deliver rankings, organic traffic, and measurable ROI.",
    type: "website",
  },
  alternates: {
    canonical: "https://bixeltek.com/toronto/seo-services",
  },
};

import React from 'react'
import TSHero from '@/components/Toronto/SeoServices/TSHero'
import WhySEOToronto from '@/components/Toronto/SeoServices/TSSection1'
import MovingBlob from '@/components/Toronto/GoogleAds/BlobTG'
import SEOGridSection2 from '@/components/Toronto/SeoServices/TSSection2'
import WhySEOMattersToronto from '@/components/Toronto/SeoServices/TSSection3'
import SEOcategoryServicesToronto from '@/components/Toronto/SeoServices/TSSection4'
import AreasWeServeCanada from '@/components/Toronto/SeoServices/AreasWeServeTS'
import SEO_BenefitsGrid from '@/components/Toronto/SeoServices/TSSection5'
import BenefitsSectionTorontoSeo from '@/components/Toronto/SeoServices/TSSection6'
import TSFaq from '@/components/Toronto/SeoServices/TSFaq'
import GradientBorderContainersSEO from '@/components/Toronto/SeoServices/TSTimeline'
import ContactFromNew from '@/components/ContactFormNew';
import IndustriesTS from '@/components/Toronto/SeoServices/TSIndustries';
import ServicesSection from '@/components/Common/ServicesGrid';
import LocationHeroSection from '@/components/Common/location/LocationHeroSection';
import iconimg from '@/assets/medal-ribbons-star-svgrepo-com.png'
import starimg from '@/assets/star-shine-svgrepo-com.png'
import googleimg from '@/assets/google-authenticator-svgrepo-com.png'
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
    { id: 1, text: "200+ SEO Campaigns Delivered", icon: starimg },
    { id: 2, text: "Trusted by Brands Across Canada", icon: iconimg },
    { id: 3, text: "Google Partner Agency", icon: googleimg },
  ];
  

  const services = [
    {
        title: 'SEO Audits',
        description: 'Conduct thorough technical, on-page, off-page, and AI readiness audits to identify issues, uncover opportunities, and optimize your website for maximum organic search performance.',
    },
    {
        title: 'Keyword Strategy',
        description: 'Develop a targeted keyword strategy focusing on profitable, intent-driven, and local search terms to attract high-quality traffic and drive measurable results for Toronto businesses.',
    },
    {
        title: 'On-Page SEO',
        description: 'Optimize metadata, headings, schema markup, internal linking, and page content to ensure higher rankings, better crawlability, and enhanced search engine visibility across relevant queries.',
    },
    {
        title: 'Content Development',
        description: 'Create high-quality blogs, service pages, and topical clusters that establish authority, improve search engine rankings, and provide value to visitors while supporting long-term SEO goals.',
    },
    {
        title: 'Local SEO Toronto',
        description: 'Optimize Google Business Profile, local citations, and maps visibility to dominate Toronto search results, increase local traffic, and attract ready-to-buy customers in your area.',
    },
    {
        title: 'Ecommerce SEO',
        description: 'Optimize product pages, categories, structured data, and navigation to enhance visibility, drive conversions, and improve organic traffic for online stores and ecommerce platforms.',
    },
    {
        title: 'AI SEO Services',
        description: 'Implement advanced AI-driven SEO strategies to ensure your brand is recognized by Gemini, ChatGPT, and other emerging AI-powered search engines for long-term visibility.',
    },
    {
        title: 'Link Building',
        description: 'Execute white-hat link building campaigns and digital PR strategies that strengthen your website’s authority, improve trustworthiness, and boost search engine rankings over time.',
    },
    {
        title: 'Technical SEO',
        description: 'Enhance site speed, mobile responsiveness, crawlability, security, and structured data implementation to ensure optimal performance, better user experience, and improved search engine rankings.',
    },
];

const steps = [
  {
    number: '01',
    title: 'Audit & Discovery',
    text: 'We begin with a full technical SEO audit, keyword gap analysis, and competitor insights to uncover opportunities and roadblocks for growth.',
    gradient: 'from-blue-500 via-blue-400 to-transparent',
    color: 'text-blue-500',
        bgcolor: 'hover:bg-blue-500',
  },
  {
    number: '02',
    title: 'Strategy & Roadmap',
    text: 'Every campaign follows a prioritized roadmap with clear milestones, actions tied to ROI, and strategies aligned to business objectives.',
    gradient: 'from-green-500 via-teal-400 to-transparent',
    color: 'text-teal-500',
        bgcolor: 'hover:bg-teal-500',
  },
  {
    number: '03',
    title: 'On-Page Optimization',
    text: 'We refine metadata, schema, internal linking, and content structure so search engines and users can easily understand and navigate your site.',
    gradient: 'from-yellow-400 via-yellow-300 to-transparent',
    color: 'text-yellow-500',
        bgcolor: 'hover:bg-yellow-500',
  },
  {
    number: '04',
    title: 'Content Development',
    text: 'From service pages to long-form blogs and topical clusters, we craft content designed to rank, engage, and convert your audience.',
    gradient: 'from-pink-500 via-purple-400 to-transparent',
    color: 'text-purple-500',
        bgcolor: 'hover:bg-purple-500',
  },
  {
    number: '05',
    title: 'Local SEO Toronto',
    text: 'We strengthen your Maps presence, citations, and customer reviews to help you dominate local searches across Toronto and the GTA.',
    gradient: 'from-indigo-500 via-indigo-400 to-transparent',
    color: 'text-indigo-500',
        bgcolor: 'hover:bg-indigo-500',
  },
  {
    number: '06',
    title: 'AI SEO Integration',
    text: 'By clarifying entities and context, we prepare your brand to be discovered and recommended by AI-driven platforms like Google Gemini & ChatGPT.',
    gradient: 'from-red-500 via-[#13131333] to-transparent',
    color: 'text-red-500',
        bgcolor: 'hover:bg-red-500',
  },
  {
    number: '07',
    title: 'Authority Building',
    text: 'High-quality backlinks, digital PR, and strategic mentions build trust and boost your authority in competitive markets.',
    gradient: 'from-purple-500 via-pink-400 to-transparent',
    color: 'text-purple-500',
        bgcolor: 'hover:bg-purple-500',
  },
  {
    number: '08',
    title: 'Reporting & Review',
    text: 'Transparent monthly reports that track rankings, traffic, leads, and ROI — ensuring you see real business impact from SEO.',
    gradient: 'from-blue-500 via-transparent to-transparent',
    color: 'text-blue-500',
        bgcolor: 'hover:bg-blue-500',
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
    question: "How long before SEO shows results?",
    answer:
      "Most businesses see improvements within 3–6 months, depending on competition.",
  },
  {
    question: "How is SEO different from paid ads?",
    answer:
      "Ads stop when you stop paying. SEO builds sustainable traffic that compounds over time.",
  },
  {
    question: "What is AI SEO?",
    answer:
      "AI SEO ensures your brand is recognized and recommended by AI-driven platforms like Google Gemini and ChatGPT.",
  },
  {
    question: "Do you create SEO content?",
    answer:
      "Yes — we build optimized blogs, service pages, and local landing pages.",
  },
  {
    question: "Will I get reports?",
    answer:
      "Yes. Our reports track rankings, traffic, leads, and ROI.",
  },
];                    


export default function page() {

  return (
    <>
      {/* <TSHero /> */}
      <LocationHeroSection
      heading={
        <>
              <span>SEO Services in Toronto Designed for{" "}
              <span className="text-blue-500">Growth and Market Leadership</span></span>

      </>
      }
      description=' Bixeltek helps businesses across Toronto and Canada achieve long-term digital
              visibility through advanced SEO. We combine technical precision, semantic depth,
              and AI SEO innovation to build rankings that deliver measurable leads and revenue.'
      proofPoints={proofPoints}
      primaryCTA={{
        text: "Request a Free SEO Audit",
        variant: "primary",
        action: {type:'openForm', form:"seo"}
      }}
      secondaryCTA={{
        text: "Speak With an SEO Specialist",
        variant: "secondary",
        action: {type:'link', href:"mailto:zee@bixeltek.com"}
      }}
      />
      <MovingBlob />
      <WhySEOToronto />
      <SEOGridSection2 />
      <WhySEOMattersToronto />
      <ServicesSection
            heading='Our'
            spanText='SEO Services in Toronto'
            description='Bixeltek delivers end-to-end SEO solutions designed for Toronto businesses and brands across Canada. Our strategies combine proven fundamentals with emerging AI SEO methods to deliver sustainable results.'
            services={services}
            />
      {/* <IndustriesTS/> */}
      <LocationIndustrySection
      heading={
        <>
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-500">
                        SEO Services in Toronto <br></br> That Drive Traffic, Leads, and Growth
                    </span>
        </>
      }
      description='From local startups to large enterprises, our SEO strategies are built to boost visibility, rank higher on Google, and attract your ideal Toronto audience.'
      industries={industries}
      />
      {/* <GradientBorderContainersSEO /> */}
          <LocationProcessSection
        heading={
          <>
                  <span>A Proven Process for <span className="text-blue-500">Sustainable Growth</span></span>
          </>
        }
        description='SEO success requires structure, discipline, and ongoing optimization. Our process ensures every
        campaign builds momentum and compounds results over time.'
        steps={steps}
        cta={{
        text: ' Talk To Our SEO Specialist',
        href: 'mailto:zee@bixeltek.com',
      }}
      footerText="This structured approach ensures your SEO campaigns deliver not just rankings — but measurable growth."

      />
      <SEO_BenefitsGrid />
      <BenefitsSectionTorontoSeo />
      <AreasWeServeCanada />
      {/* <TSFaq /> */}
      <LocationFaqSection
      label='Frequently Asked Questions'
      heading={
        <>
       <h2 className="text-3xl text-center md:text-6xl font-inter font-bold text-white mb-6">
              Still Got Questions?
            </h2>
            </>
      }
      description='Here are answers to the most common questions Canadian businesses ask us about SEO.'
      faqs={faqs}
      />

      <ContactCTASection
      heading='Ready to Dominate'
      spanText='Google Rankings in Toronto?'
      description='Your customers are searching on Google right now — but are they finding you or your competitors?
              Partner with Bixeltek, Toronto’s trusted SEO agency, to build
              an organic growth strategy that boosts visibility, trust, and long-term ROI across Toronto and the GTA.'
      />

      {/* <section
        className="bg-black p-8 lg:p-20 mx-auto flex flex-col lg:flex-row justify-center items-center gap-10"
        id="form"
      >
        <div className="w-full lg:w-1/2 flex flex-col justify-start items-start px-6">
          <div className="space-y-5 text-white max-w-2xl">
            <h2 className="text-4xl md:text-6xl capitalize font-inter font-bold">
              Ready to Dominate <span className="text-blue-500">Google Rankings in Toronto?</span>
            </h2>
            <p className="text-white font-poppins text-base md:text-lg leading-relaxed">
              Your customers are searching on Google right now — but are they finding you or your competitors?
              Partner with <span className="font-semibold">Bixeltek</span>, Toronto’s trusted SEO agency, to build
              an organic growth strategy that boosts visibility, trust, and long-term ROI across Toronto and the GTA.
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
