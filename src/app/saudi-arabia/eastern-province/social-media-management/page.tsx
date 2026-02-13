export const metadata = {
    title: " Social Media Marketing | Eastern Province – Bixeltek",
    description:
        " Grow your brand with Bixeltek’s social media marketing services in Khobar & Dammam. Creative content, paid ads & full-funnel strategy for real ROI.",
    openGraph: {
        title: " Social Media Marketing | Eastern Province – Bixeltek",
        description:
            " Grow your brand with Bixeltek’s social media marketing services in Khobar & Dammam. Creative content, paid ads & full-funnel strategy for real ROI.",
        type: "website",
    },
    alternates: {
        canonical: "https://bixeltek.com/saudi-arabia/eastern-province/social-media-management",
    },
};



import React from 'react'
import HeroSocialMedia from '@/components/Saudi/EasternProvince/SocialMedia/SaudiEPSMHero'
import SocialMediaTrustSection from '@/components/Saudi/EasternProvince/SocialMedia/SaudiEPSEMSection1'
import SocialStrategySection from '@/components/Saudi/EasternProvince/SocialMedia/SaudiEPSMSection2'
import SocialMediaCards from '@/components/Saudi/EasternProvince/SocialMedia/SaudiEPSMSection3'
import SocialMediaServicesEasternProvince from '@/components/Saudi/EasternProvince/SocialMedia/SocialEPSMSection4'
import SocialMediaFramework from '@/components/Saudi/EasternProvince/SocialMedia/SaudiEPSMProcess'
import SaudiEPSMIndustries from '@/components/Saudi/EasternProvince/SocialMedia/SaudiEPSMInd'
import ContactFromNew from '@/components/ContactFormNew'
import SocialMediaBranding from '@/components/Saudi/EasternProvince/SocialMedia/SaudiEPSMSection5';
import googleIcon from "@/assets/google-authenticator-svgrepo-com.png";
import clientIcon from "@/assets/star-shine-svgrepo-com.png";
import expertIcon from "@/assets/medal-ribbons-star-svgrepo-com.png";
import heroBg from "@/assets/social media image saudi.webp"; 
import LocationHeroSection from '@/components/Common/location/LocationHeroSection';
import ServicesSection from '@/components/Common/ServicesGrid';
import LocationProcessSection from '@/components/Common/location/LocationProcessSection';
import LocationIndustrySection from '@/components/Common/location/LocationIndustrySection';
import cleaningcomp from "@/assets/environmental-pollution-industry-exterior-daylight.jpg";
import pet from "@/assets/muslim-person-travelling-through-city.jpg"
import roofing from "@/assets/ordinary-life-scene-from-mall-america.jpg"
import dental from "@/assets/asian-man-reading-text-messages-with-his-colleague-making-phone-call-background.jpg"
import lawncare from "@/assets/digital marketing for lawn care services.jpg"
import blackcar from "@/assets/top-view-numerous-cars-traffic-dubai-united-arab-emirates.jpg"
import healthcare from "@/assets/beautiful-young-female-doctor-looking-camera-office.jpg"


const proofPoints = [
    { id: 1, text: "Google Partner Certified", icon: googleIcon },
    { id: 2, text: "90% Client Retention", icon: clientIcon },
    { id: 3, text: "Meta & Google Ads Specialists", icon: expertIcon },
  ];

 const services = [
        {
            title: "Social Media Strategy Development",
            description:
                "Tailored content calendars and campaign structures crafted around your business goals for maximum engagement.",
            link: "#",
        },
        {
            title: "Creative Content Production",
            description:
                "High-quality posts, reels, and videos designed to tell your brand story and drive audience interaction consistently.",
            link: "#",
        },
        {
            title: "Paid Advertising Campaigns",
            description:
                "Meta, Instagram, and LinkedIn ad campaigns optimized for high ROI with smart targeting and engaging creatives.",
            link: "#",
        },
        {
            title: "Community Management",
            description:
                "Active brand voice control with real-time responses to strengthen relationships and boost audience trust.",
            link: "#",
        },
        {
            title: "Influencer Collaborations",
            description:
                "Partnering with local creators to increase reach, credibility, and engagement within your target market.",
            link: "#",
        },
        {
            title: "Performance Reports & Analytics",
            description:
                "Detailed monthly reports with actionable insights on campaign performance, growth, and ROI optimization.",
            link: "#",
        },
    ]; 

   const steps = [
  {
    number: "01",
    title: "Discovery & Audit",
    text: "We evaluate your current social presence, audience behavior, and competitor performance to identify growth opportunities and gaps in engagement.",
    gradient: "from-green-500 via-green-400 to-transparent",
    color: "text-green-500",
    bgcolor: "hover:bg-green-500/20",
  },
  {
    number: "02",
    title: "Strategy & Positioning",
    text: "We define your target audience, brand voice, tone, and content pillars to create a consistent and recognizable social identity across platforms.",
    gradient: "from-teal-500 via-green-400 to-transparent",
    color: "text-teal-500",
    bgcolor: "hover:bg-teal-500/20",
  },
  {
    number: "03",
    title: "Content & Creative Production",
    text: "We design scroll-stopping visuals, write conversion-oriented captions, and craft posts that engage, educate, and inspire your audience to act.",
    gradient: "from-yellow-400 via-yellow-300 to-transparent",
    color: "text-yellow-500",
    bgcolor: "hover:bg-yellow-500/20",
  },
  {
    number: "04",
    title: "Paid Campaign Execution",
    text: "We launch and manage ad campaigns focused on ROI, using smart targeting, budget optimization, and creatives tailored to convert clicks into leads or sales.",
    gradient: "from-pink-500 via-purple-400 to-transparent",
    color: "text-purple-500",
    bgcolor: "hover:bg-purple-500/20",
  },
  {
    number: "05",
    title: "Optimization & Reporting",
    text: "We track results, analyze audience responses, and adjust campaigns weekly, ensuring every post, ad, and message is optimized for maximum conversions.",
    gradient: "from-green-500 via-transparent to-transparent",
    color: "text-indigo-500",
    bgcolor: "hover:bg-indigo-500/20",
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
                    ]

export default function page() {
    return (
        <>
            {/* <HeroSocialMedia /> */}
            <LocationHeroSection
            ctaTheme='green'
            heading={
                <>
                <span>Social Media Marketing Services That <span className="text-yellow-500">Build Awareness, Trust, and Conversions</span></span>
                </>
            }
            description='We help businesses across Khobar, Dammam, and Dhahran create impactful content, manage paid campaigns, and turn social media into a revenue channel — not a time drain.'
            statement = {
                <>
                <p className="mt-8 text-xl md:text-2xl font-semibold text-yellow-400">
        Build a Community That Converts — Get Results in 45 Days or Less.
        </p>
                </>
            }
              proofPoints={proofPoints}
              primaryCTA={{
                    text: 'Get a Free Social Media Audit',
                    action: { type: 'openForm', form: 'contact' },
                }}
                secondaryCTA={{
                    text: 'Talk to a Social Media Strategist',
                    variant: 'secondary',
                    action: {
                    type: 'link',
                    href: 'mailto:zee@bixeltek.com',
                    },
                }}
                backgroundImage={heroBg}      
            />
            <SocialMediaTrustSection />
            <SocialStrategySection />
            <SocialMediaCards />
            {/* <SocialMediaServicesEasternProvince /> */}
            <ServicesSection
            theme='green'
            heading='Comprehensive'
            spanText='Social Media Services for Businesses in the Eastern Province'
            description='We create campaigns that work in both English and Arabic, built for Saudi market dynamics and cultural nuances. Your audience is online 6+ hours daily — we make sure your brand becomes part of their daily feed.'
            services={services}
            />
            {/* <SocialMediaFramework /> */}
            <LocationProcessSection
            heading={
            <>
            <span className="text-white">A Proven 5-Step Social Media System</span>
            </>
            }
            description='Every post, ad, and message is optimized for one goal — conversion. We help businesses build
        purposeful campaigns that turn social engagement into measurable growth.'
        steps={steps}
        cta={{
            text:'Book a Free Strategy Call',
            href:'mailto:zee@bixeltek.com',
            bg:' bg-gradient-to-tr from-green-500 via-green-700 to-green-950 hover:bg-gradient-to-tr hover:from-green-950 hover:via-green-700 hover:to-green-500 text-white'
        }}
        footerText='Each step is documented and transparent — so you always know what’s being executed and why. Our focus is maximizing conversions from every scroll.'
            />
            {/* <SaudiEPSMIndustries /> */}
            <LocationIndustrySection
            theme='green'
            heading={
                <>
                <span className=" text-transparent bg-clip-text bg-gradient-to-r from-white to-yellow-500">
                        Social Media Marketing Tailored for   <br /> Eastern Province Businesses
                    </span>
                </>
            }
            description='We understand that each industry requires a unique voice and content approach.
                    That’s why our team customizes creative strategies for:'
             industries={industries}       
            />
            <SocialMediaBranding />
            <section
                className="bg-black py-20 px-6 lg:px-20 flex flex-col lg:flex-row items-center gap-10"
                id="social-media-cta"
            >
                {/* LEFT SIDE — TEXT */}
                <div className="w-full lg:w-1/2 flex flex-col justify-start items-start">
                    <h2 className="text-4xl md:text-6xl font-inter font-bold text-white mb-6">
                        Turn Social Media Into Your <span className="text-yellow-600">Most Profitable Channel</span>
                    </h2>

                    <p className="text-gray-50 font-poppins text-base md:text-lg leading-relaxed mb-8">
                        Don’t let your competitors dominate the feed. Start building a brand that connects, converts,
                        and compounds across the Eastern Province — every post, story, and campaign optimized for ROI.
                    </p>
                    <ul className="text-sm mt-5 flex flex-row md:flex-row gap-5 md:gap-10  transition-all duration-500">
                        <li className="mb-6"><a href="https://www.google.com/partners/agency?id=2188074075" target="_blank" className="mt-2 flex justify-start">
                            <img src="https://www.gstatic.com/partners/badge/images/2024/PartnerBadgeClickable.svg"
                                alt="Google Partner Badge"
                                className="w-auto h-16 md:h-24" />
                        </a></li>
                        <li>
                            <div><a target="_blank" href="https://www.goodfirms.co/company/bixeltek"> <img src="https://assets.goodfirms.co/badges/color-badge/top-digital-marketing-companies.svg" title="Top Digital Marketing Company" className="w-20 md:w-32 h-auto" alt="Top Digital Marketing Company on GoodFirms" /></a></div>
                        </li>

                    </ul>
                </div>

                <div className="lg:w-[50%] lg:mr-10 flex justify-start items-center">
                    <ContactFromNew />
                </div>
            </section>
        </>
    )
}
