
export const metadata = {
    title: "Google Ads Management Mississauga | Google Partner Agency",
    description:
        "Bixeltek is a Google Partner Certified agency in Mississauga. We manage Google Ads campaigns across Search, Display, Shopping, Performance Max & more to deliver qualified leads and measurable ROI.",
    keywords:
        "Web development Hyderabad, Best web development company Hyderabad, Custom website design, Next.js development, React.js development, Full-stack web development, Frontend development, Backend development, E-commerce website development, WordPress development, Responsive web design, UI/UX design Hyderabad, Web application development, Modern web technologies",
    openGraph: {
        title: "Google Ads Management Mississauga | Google Partner Agency",
        description:
            "Bixeltek is a Google Partner Certified agency in Mississauga. We manage Google Ads campaigns across Search, Display, Shopping, Performance Max & more to deliver qualified leads and measurable ROI.",
        type: "website",
    },
    alternates: {
        canonical: "https://bixeltek.com/mississauga/google-ads",
    },
};


import React from 'react'
import HeroGMiss from '@/components/Mississauga/GoogleAds/GMissHero'
import WhyGoogleAdsMississauga from '@/components/Mississauga/GoogleAds/GMissSection1'
import GMissSection2 from '@/components/Mississauga/GoogleAds/GMissSection2'
import GoogleAdsCampaignsCards from '@/components/Mississauga/GoogleAds/GMissSection5'
import GoogleAdsServicesMississauga from '@/components/Mississauga/GoogleAds/GMissSection4'
import GMissTimeline from '@/components/Mississauga/GoogleAds/GMissTimeline'
import BenefitsSectionMississauga from '@/components/Mississauga/GoogleAds/GMissSection7'
import GMFaqMiss from '@/components/Mississauga/GoogleAds/GMissFaq'
import ContactFromNew from '@/components/ContactFormNew'
import Link from 'next/link'
import LocationHeroSection from '@/components/Common/location/LocationHeroSection';
import iconimg from '@/assets/medal-ribbons-star-svgrepo-com.png';
import starimg from '@/assets/star-shine-svgrepo-com.png';
import googleimg from '@/assets/google-authenticator-svgrepo-com.png';
import ServicesSection from '@/components/Common/ServicesGrid';
import LocationFaqSection from '@/components/Common/location/LocationFaqSection';
import ContactCTASection from '@/components/Common/location/LocationCtaSection';
import LocationProcessSection from '@/components/Common/location/LocationProcessSection';

  const proofPoints = [
    { id: 1, text: "Google Partner Certified", icon: googleimg },
    { id: 2, text: "200+ Campaigns Managed Across Canada", icon: starimg },
    { id: 3, text: "4+ Years Helping Businesses Grow", icon: iconimg },
  ];

  const services = [
        {
            title: 'Account & Campaign Setup',
            description: 'From keyword research to ad group structure, we build campaigns ready to perform.',
        },
        {
            title: 'Ad Copywriting & Creative',
            description: 'Ads written to stand out, resonate with Mississauga customers, and drive action.',
        },
        {
            title: 'Landing Page Optimization',
            description: 'Mobile-first, conversion-focused pages that capture leads effectively.',
        },
        {
            title: 'Conversion Tracking & Analytics',
            description: 'Full-funnel tracking for calls, forms, and sales with transparent reporting.',
        },
        {
            title: 'Budget & Bid Management',
            description: 'Smart bidding and daily budget monitoring to cut waste and maximize ROI.',
        },
        {
            title: 'Ongoing Optimization',
            description: 'Continuous A/B testing, keyword refinement, and scaling strategies for long-term growth.',
        },
    ];

   const faqs = [
  {
    question: "How fast can I see results?",
    answer:
      "Most clients start seeing leads within days of launching paid campaigns. Organic SEO results usually take 3–6 months to build sustainable growth.",
  },
  {
    question: "What budget do I need?",
    answer:
      "It depends on your industry, competition, and goals. We’ll recommend a customized starting point and adjust as we optimize campaigns for maximum ROI.",
  },
  {
    question: "Do you only work in Mississauga?",
    answer:
      "No — we serve clients nationwide, but Mississauga and the GTA are our primary focus areas.",
  },
  {
    question: "How is Bixeltek different?",
    answer:
      "We don’t just run ads. We build full systems with landing pages, call & form tracking, daily optimization, and data-driven reporting to ensure measurable results.",
  },
  {
    question: "Do you provide reporting and analytics?",
    answer:
      "Absolutely. Every campaign comes with clear dashboards and metrics so you can track performance, leads, and ROI in real-time.",
  },
  {
    question: "Do you work with small businesses?",
    answer:
      "Yes! We help startups, SMBs, and large enterprises alike. Our campaigns scale according to business size and objectives.",
  },
  {
    question: "Can you manage multiple services together?",
    answer:
      "Yes, we integrate Ads, SEO, Web Design, and Social Media campaigns to maximize results and maintain consistency across all digital channels.",
  },
  {
    question: "What kind of businesses do you usually work with?",
    answer:
      "We’ve managed campaigns for e-commerce, local services, B2B companies, and professional services — anything that wants measurable growth.",
  },
]; 

const steps = [
  {
    number: '01',
    title: 'Discovery & Research',
    text: "Understand your business, goals, and competitors. Dive deep into Mississauga’s market to identify high-value opportunities and audience behaviors.",
    gradient: 'from-blue-500 via-blue-400 to-[black]',
    color: 'text-blue-500',
  },
  {
    number: '02',
    title: 'Campaign Strategy',
    text: "Define campaign structure, audience targeting, and budget allocation. Optimize for high-converting keywords, ad groups, and funnels.",
    gradient: 'from-green-500 via-teal-400 to-[#13131333]',
    color: 'text-teal-500',
  },
  {
    number: '03',
    title: 'Ad Creation',
    text: "Write compelling ads and design optimized landing pages. Focus on benefits-first messaging, trust-building elements, and clear CTAs.",
    gradient: 'from-yellow-400 via-yellow-300 to-[#13131333]',
    color: 'text-yellow-500',
  },
  {
    number: '04',
    title: 'Tracking & Setup',
    text: "Install call, form, and sales tracking. Set up conversion pixels, analytics, and attribution to ensure accurate performance measurement.",
    gradient: 'from-pink-500 via-purple-400 to-[#13131333]',
    color: 'text-purple-500',
  },
  {
    number: '05',
    title: 'Launch & Monitor',
    text: "Activate campaigns and monitor initial performance closely. Adjust bids, placements, and creative variations in real time.",
    gradient: 'from-indigo-500 via-indigo-400 to-[#13131333]',
    color: 'text-indigo-500',
  },
  {
    number: '06',
    title: 'Daily Optimization',
    text: "Refine targeting, test creatives, manage bids, and prune low-performing keywords. Continuous adjustments ensure maximum ROI.",
    gradient: 'from-red-500 via-red-400 to-[#13131333]',
    color: 'text-red-500',
  },
  {
    number: '07',
    title: 'Reporting & Scaling',
    text: "Share transparent results and insights. Scale winning campaigns, reallocate budgets, and replicate high-performing strategies.",
    gradient: 'from-purple-500 via-transparent to-transparent',
    color: 'text-purple-400',
  },
];


export default function page() {
    return (
        <>
            {/* <HeroGMiss /> */}
            <LocationHeroSection
            heading={
                <>
                <span> Google Ads Management in Mississauga{" "}
              <span className="text-blue-500">That Turns Clicks Into Customers</span></span>
                </>
            }
            description='Many Mississauga businesses spend thousands on Google Ads — but struggle to see real results. 
              At Bixeltek, a Google Partner Certified agency, we build and manage campaigns that cut wasted spend, 
              attract the right customers, and scale ROI.'
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
            <WhyGoogleAdsMississauga />
            <GMissSection2 />
            {/* <GoogleAdsServicesMississauga /> */}

            <ServicesSection
            heading='What We Deliver With'
            spanText='Our Google Ads Management'
            description='Bixeltek provides end-to-end Google Ads management so your campaigns consistently bring in qualified leads.'
            services={services} />


            <GoogleAdsCampaignsCards />
            {/* <GMissTimeline /> */}
            <LocationProcessSection
        heading={
          <>
                  <span>Our <span className="text-blue-500">Proven Google Ads <br /></span>Process</span>
          </>
        }
        description=' How We Build Winning Campaigns Step by Step. Our process is transparent and proven, giving Mississauga businesses clarity and confidence in every campaign.'
        steps={steps}
        cta={{
        text: 'Talk To Our Ads Specialist',
        href: 'mailto:zee@bixeltek.com',
      }}
      footerText="This structured approach ensures your Google Ads campaigns are launched fast, optimized daily, and built to maximize ROI."

      />
            <BenefitsSectionMississauga />
            {/* <GMFaqMiss /> */}
            <LocationFaqSection
            label='Frequently Asked Questions'
            heading={
                <>
                <h2 className="text-3xl text-center md:text-6xl font-inter font-bold text-white mb-6">
              Google Ads FAQs for <span className="text-blue-500">Mississauga Businesses</span>
            </h2>
                </>
                }
                description='Answers to common questions Mississauga businesses ask about running Google Ads campaigns, optimizing ROI, and building full digital marketing systems.'
            faqs={faqs}
            />
            <ContactCTASection
            heading='Ready to Run'
            spanText='Smarter Google Ads in Mississauga?'
            description=' Your customers are searching right now. Don’t let competitors win those clicks.
                            Partner with Bixeltek, a Google Partner Certified agency,
                            to launch smarter campaigns that generate measurable ROI.'
            />
            {/* <section
                className="bg-black p-8 md:p-20 mx-auto flex flex-col md:flex-row justify-center items-center gap-10"
                id="form"
            >
                <div className="w-full md:w-1/2 flex flex-col justify-start items-start px-6">
                    <div className="space-y-5 text-white max-w-2xl">
                        <h2 className="text-4xl md:text-6xl capitalize font-inter font-bold">
                            Ready to Run <span className="text-blue-500">Smarter Google Ads</span> in Mississauga?
                        </h2>
                        <p className="text-white font-poppins text-base md:text-lg leading-relaxed">
                            Your customers are searching right now. Don’t let competitors win those clicks.
                            Partner with <span className="font-semibold">Bixeltek</span>, a Google Partner Certified agency,
                            to launch smarter campaigns that generate measurable ROI.
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
