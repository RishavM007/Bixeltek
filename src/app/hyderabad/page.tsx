
export const metadata = {
  title: "Digital Marketing Agency in Hyderabad | Bixeltek",
  description:
    "Drive more leads & sales with Hyderabad’s trusted digital marketing agency. SEO, Google Ads & Web Design powered by Google Partner expertise.",
  keywords: [
    "digital marketing company Hyderabad",
    "best digital marketing agency Hyderabad",
    "Google Ads agency Hyderabad",
    "SEO services Hyderabad",
    "social media marketing Hyderabad",
    "PPC agency Hyderabad",
  ],
  alternates: {
    canonical: "https://bixeltek.com/hyderabad",   
  },
  openGraph: {
    title: "Digital Marketing Agency in Hyderabad | Bixeltek",
    description:
      "Drive more leads & sales with Hyderabad’s trusted digital marketing agency. SEO, Google Ads & Web Design powered by Google Partner expertise.",
    siteName: "Bixeltek",
    type: "website",
    url: "https://bixeltek.com/hyderabad",     
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Digital Marketing Agency in Hyderabad | Bixeltek",
    description:
      "Google-certified digital marketing agency in Hyderabad offering SEO, Google Ads, Meta Ads & Web Design.",
  },
};




import React from 'react'
import HydHero from '@/components/Hyderabad/HydSection1'
import HydAbout from '@/components/Hyderabad/HydSection2'
import VideoScrollPage from '@/components/Hyderabad/HydSection3'
import ServicesTabs from '@/components/Hyderabad/HydSection5'
import BenefitsSection from '@/components/Hyderabad/HydSection6'
import ExpertiseSection from '@/components/Hyderabad/HydSection7'
import HydTimeline from '@/components/Hyderabad/HydTimeline'
import HowItWorks from '@/components/Hyderabad/HydSection9'
import HydWhyChooseUs from '@/components/Hyderabad/HydSection10'
import IndustryCarouselSection from '@/components/Hyderabad/HydSection8'
import HydFAQSection8 from '@/components/Hyderabad/HydFaq'
import HydCTA from '@/components/Hyderabad/HydCTA'
import ZoomText from '@/components/Hyderabad/HydSection4'
import HydLogoGrid from '@/components/Hyderabad/HydComp'
import ContactFromNew from '@/components/ContactFormNew'
import Link from 'next/link'
import GradientBorderContainersMobHyd from '@/components/Hyderabad/HydTimelineMobile'
import { PhoneCall } from 'lucide-react'
import LocationHeroSection from '@/components/Common/location/LocationHeroSection';
import LocationIndustrySection from '@/components/Common/location/LocationIndustrySection';
import cleaningcomp from "@/assets/digital marketing servies for cleaning companies.jpg";
import oil from "@/assets/digital marketing for oil refinaries.jpg"
import pet from "@/assets/digital marketing for pet stores.jpg"
import roofing from "@/assets/digital marketing for roofing industries.jpg"
import dental from "@/assets/digital marketing for health care practices.jpg"
import lawncare from "@/assets/digital marketing for lawn care services.jpg"
import blackcar from "@/assets/digital marketing for car detailers.jpg"
import healthcare from "@/assets/digital marketing for health care practices.jpg"
import LocationProcessSection from '@/components/Common/location/LocationProcessSection';
import LocationFaqSection from '@/components/Common/location/LocationFaqSection';
import ContactCTASection from '@/components/Common/location/LocationCtaSection';

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
                            text: "Automobile industries",
                            description: "Maps optimization + hyperlocal PPC to drive more calls and foot traffic.",
                        },
                        {
                            id: "cleaning",
                            img: cleaningcomp,
                            label: "Digital Marketing for Cleaning Companies",
                            text: "Cleaning Industries",
                            description: "Maps optimization + hyperlocal PPC to drive more calls and foot traffic.",
                        },
                        {
                            id: "roofing",
                            img: roofing,
                            label: "Digital Marketing for Roofing Companies",
                            text: "Roofing Industries",
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
                            text: "Pet Stores",
                            description: "Product SEO, performance ads & retargeting funnels to scale sales.",
                        },
                        {
                            id: "oil",
                            img: oil,
                            label: "Digital Marketing for Oil Refineries",
                            text: "Oil Refineries",
                            description: "Paid growth loops, demo-booking strategies, and B2B marketing that closes deals.",
                        }
                    ]

 const steps = [
  {
    number: '01',
    title: 'Audit & Analysis',
    text: 'Spot missed opportunities, uncover competitor gaps, and identify where your brand can win.',
    gradient: 'from-blue-500 via-blue-400 to-[black]',
    color: 'text-blue-500',
  },
  {
    number: '02',
    title: 'Strategic Planning',
    text: 'Build a tailored roadmap across the right channels to align with your business goals.',
    gradient: 'from-green-500 via-teal-400 to-[#13131333]',
    color: 'text-yellow-500',
  },
  {
    number: '03',
    title: 'Campaign Launch',
    text: 'Activate campaigns on the platforms your customers already live and engage.',
    gradient: 'from-yellow-400 via-yellow-300 to-[#13131333]',
    color: 'text-red-500',
  },
  {
    number: '04',
    title: 'Optimization & Testing',
    text: 'Test, measure, and refine campaigns every week for consistent performance growth.',
    gradient: 'from-pink-500 via-purple-400 to-[#13131333]',
    color: 'text-orange-500',
  },
  {
    number: '05',
    title: 'Scaling & Growth',
    text: 'Double down on what’s working and expand to accelerate ROI and long-term growth.',
    gradient: 'from-indigo-500 via-indigo-400 to-[#13131333]',
    color: 'text-teal-500',
  },
];    

const faqs = [
  {
    question: "What is the minimum fee for digital marketing in Hyderabad?",
    answer:
      "Most businesses invest ₹25,000–₹50,000/month depending on the scope of services and campaign objectives.",
  },
  {
    question: "Is it worth hiring an agency in Hyderabad?",
    answer:
      "Yes — agencies save you time, reduce wasted spend, and deliver measurable ROI faster than freelancers or DIY efforts.",
  },
  {
    question: "How much does digital marketing cost in Hyderabad?",
    answer:
      "Costs vary widely. SMBs typically invest anywhere from ₹25,000 to ₹2,00,000+ per month depending on goals, channels, and campaign complexity.",
  },
  {
    question: "Is digital marketing costly?",
    answer:
      "It’s not just a cost — it’s an investment that generates leads, conversions, and long-term business growth.",
  },
  {
    question: "Should I hire a freelancer or an agency?",
    answer:
      "Freelancers usually cover one specific skill. Agencies provide a full team, proven processes, and accountability for end-to-end results.",
  },
  {
    question: "Google Ads vs Instagram Ads — which works better?",
    answer:
      "Google Ads capture high-intent customers actively searching for your services, while Instagram/Facebook Ads build awareness and retarget potential leads. The best results usually come from combining both channels strategically.",
  },
];

export default function page() {
    return (
        <>
            <main className='relative'>
                <div className="perspective-1000">
                    <HydHero />
                    <VideoScrollPage/>
                   <ExpertiseSection/>
                   <ServicesTabs/>
                   <BenefitsSection />
                   {/* <IndustryCarouselSection/> */}
                   <LocationIndustrySection
                   heading={
                    <>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-500">
                        INDUSTRIES WE SERVE
                    </span>
                    </>
                   }
                   description='Discover the diverse industries we proudly cater to, offering innovative solutions to help you excel in your field.'
                   industries={industries}
                   />

                   {/* <IndustriesSection /> */}
                   {/* <HydTimeline/> */}
                   <LocationProcessSection
                   heading={
                    <>
                    <span>A <span className='text-blue-500'>Proven Framework</span> to Scale Profitably</span>
                    </>
                   }
                   description='Our Google Ads process is battle-tested across multiple industries and regions:'
                   steps={steps}
                   cta={{
                    text:'Talk To Our Digital Marketing Specialist',
                    href:'tel:+919100032301'
                   }}
                   footerText='This isn’t theory. It’s a repeatable framework we’ve used to drive results in the USA, Canada, India, and Saudi Arabia.'
                   />
                   <GradientBorderContainersMobHyd/>
                   <HydCTA/>
                   <HydWhyChooseUs/>
                   <HowItWorks />
                   <HydLogoGrid/>
                   {/* <HydFAQSection8/> */}
                   <LocationFaqSection
                   label='FAQs'
                   heading={
                    <>
                    <h2 className="text-4xl text-center md:text-5xl font-inter font-bold text-white mb-10">
              Still Got Questions?
            </h2>
                    </>
                   }
                   faqs={faqs}
                   />
                   <section className='bg-black lg:p-20 mx-auto flex flex-col justify-center gap-10 items-center lg:flex-row ' id='form'>
                <div className="w-full mt-14 md:mt-0 flex justify-center items-center px-6">
                    <div className="space-y-5 text-white lg:max-w-xl ">
                        <h2 className="text-3xl md:text-6xl capitalize font-bold">
                            Lets grow your<br></br> business with 
                            <span className='text-blue-500'> google ads</span>
                        </h2>
                        <h3 className='text-xl md:text-2xl font-poppins'>Fill the form to get started</h3>
                        <p className="text-white font-poppins text-base leading-relaxed">
                            Ready to stop wasting ad spend and start driving measurable results? Partner with Bixeltek — a Google Partnered agency trusted by businesses worldwide. Fill out the form now to request your free Google Ads audit, and our certified experts will show you exactly how to increase conversions, reduce costs, and scale your growth with precision.
                        </p>
                        <div className="space-y-3 pt-3">
                            <Link href={'tel:+919100032301'}>
                                <div className="flex items-center gap-2">
                                    <PhoneCall size={22} />
                                    <span className="text-white text-base">Call: +91-9100032301</span>
                                </div>
                            </Link>

                            
                        </div>
                    </div>
                </div>
                <div className='lg:w-[87%] lg:mr-32 flex justify-start items-center px-6' >
                    <ContactFromNew />
                </div>
            </section>
                </div>
            </main>

        </>
    )
}
