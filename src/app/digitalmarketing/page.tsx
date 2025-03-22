

export const metadata = {
    title: "Bixeltek | Best Digital Marketing Services in Hyderabad",
    description:
      "Bixeltek is Hyderabad’s leading digital marketing agency, offering expert SEO, PPC, Google Ads, and social media marketing. Drive traffic, increase conversions, and grow your brand with our data-driven strategies. Get a free consultation today!",
    keywords:
      "Bixeltek digital marketing, Digital marketing agency Hyderabad, Best SEO services Hyderabad, Google Ads management, PPC advertising, Social media marketing, Lead generation, Online marketing strategies, Search engine optimization, Content marketing",
    openGraph: {
      title: "Bixeltek | Expert Digital Marketing Services in Hyderabad",
      description:
        "Maximize your online presence with Bixeltek’s top-tier digital marketing services. From SEO and PPC to social media management, we help businesses grow effectively.",
      type: "website",
    },
  };

export const dynamic = "force-dynamic";
import React from 'react';
import DmHero from '@/components/DmHero';
import DigitalMarketingTabs from '@/components/DigitalMarketingTabs';
import ContactFrom from '@/components/ContactFrom';
import LightFaqSection from '@/components/LightFaq';
import DmSteps from '@/components/DmSteps';
import { Googleadecarosel } from '@/components/Googleadecarosel';
import TestimonialSection from '@/components/TestimonialPage';
import { VscDebugBreakpointDataUnverified } from "react-icons/vsc";
import { SiPolestar } from "react-icons/si";
const faqs = [
    {
        question: "What is digital marketing, and why is it important for businesses?",
        answer: "Digital marketing includes SEO, Google Ads, social media marketing, and content marketing to help businesses increase online visibility, generate leads, and grow revenue.",
    },
    {
        question: "How can digital marketing help my business grow online?",
        answer: "Digital marketing drives targeted traffic, boosts brand awareness, improves customer engagement, and increases conversions through data-driven strategies.",
    },
    {
        question: "Do you provide digital marketing services in Hyderabad and beyond?",
        answer: "Yes! We offer digital marketing services in Hyderabad** and serve businesses across India, the USA, the UK, the UAE, Canada, and other global locations.",
    },
    {
        question: "Which digital marketing services do you offer?",
        answer: "We specialize in SEO, PPC advertising (Google Ads, Facebook Ads), social media marketing, content marketing, email marketing, and conversion rate optimization (CRO).",
    },
    {
        question: "How much does digital marketing cost in Hyderabad?",
        answer: "The cost of digital marketing depends on your goals, ad spend, and required services. We offer flexible and affordable digital marketing packages to fit your business needs.",
    },
    {
        question: "How long does it take to see results from digital marketing campaigns?",
        answer: "SEO results take 3-6 months, while PPC and social media ads can generate immediate traffic and leads within days, depending on your budget and strategy.",
    },
    {
        question: "What is the difference between SEO and PPC advertising?",
        answer: "**SEO (Search Engine Optimization) is a long-term strategy for organic traffic, while **PPC (Pay-Per-Click) ads like Google Ads deliver instant results with paid traffic.",
    },
    {
        question: "Can digital marketing help me generate more leads and sales?",
        answer: "Yes! With the right strategies like lead generation campaigns, landing page optimization, and remarketing ads, we can help you increase conversions and maximize ROI.",
    },
    {
        question: "Do you offer social media marketing services?",
        answer: "Yes! We create and manage **Facebook, Instagram, LinkedIn, and Twitter marketing campaigns** to enhance brand awareness and drive customer engagement.",
    },
    {
        question: "Why should I choose Bixeltek for digital marketing services in Hyderabad?",
        answer: "Bixeltek is a top digital marketing agency in Hyderabad with expertise in SEO, PPC, and social media marketing. We deliver data-driven strategies for business growth.",
    },
];

export default function HeroSection() {
    
    return (
        <>
            {/* Hero Section */}
            <DmHero />
            <section>
                <div className="min-h-screen bg-white flex items-center justify-center px-4 py-0 md:py-10">
                    <div className="max-w-full w-full bg-white text-black rounded-xl p-0 md:p-8 ml-0 md:ml-10 flex flex-col md:flex-row">

                        <div className="md:w-1/2 p-0 md:p-6">
                            <h2 className="text-5xl md:text-6xl font-semibold md:font-medium font-sofiasanscondensed  tracking-tight text-black mb-4">
                                How <span className='text-[#6728cc]'>Digital Marketing</span> Transforms Businesses
                            </h2>

                            <p className="text-gray-800 relative font-sans text-lg py-0 md:py-5 leading-relaxed">
                                Digital marketing is the key to establishing a strong online presence, reaching the right audience, and driving measurable results. It integrates various strategies like social media marketing, pay-per-click (PPC) advertising, email campaigns, and content marketing to boost brand awareness and customer engagement.
                            </p>
                            <p className="text-gray-800 font-sans text-lg leading-relaxed">
                                In today&apos;s digital-first world, businesses that invest in well-structured digital marketing campaigns can significantly outperform their competitors. Whether it&apos;s generating quality leads, improving conversion rates, or increasing customer retention, a strategic approach ensures sustainable growth.
                            </p>
                            <p className="text-gray-800 hidden font-sans text-lg leading-relaxed">
                                With the right combination of creativity and data-driven insights, brands can craft compelling messages, target the right demographics, and optimize campaigns in real time. Digital marketing is not just about visibility—it&apos;s about creating meaningful connections with customers that lead to long-term success.
                            </p>

                            <div className='grid grid-cols-1 md:grid-cols-2 gap-y-5 pt-10 uppercase font-sofiasanscondensed pb-10 md:pb-0  text-black'>
                                <h3 className='font-bold md:font-semibold text-[18px] tracking-wide flex'>
                                    <VscDebugBreakpointDataUnverified className="text-[#670ef7] lg:mx-2 mt-1" /> ROI-Driven Campaigns
                                </h3>
                                <h3 className='font-bold md:font-semibold text-[18px] tracking-wide flex'>
                                    <VscDebugBreakpointDataUnverified className="text-[#670ef7] lg:mx-2 mt-1" /> Multi-Channel Strategies
                                </h3>
                                <h3 className='font-bold md:font-semibold text-[18px] tracking-wide flex'>
                                    <VscDebugBreakpointDataUnverified className="text-[#670ef7] lg:mx-2 mt-1" /> Creative & Data-Backed Approach
                                </h3>
                                <h3 className='font-bold md:font-semibold text-[18px] tracking-wide flex'>
                                    <VscDebugBreakpointDataUnverified className="text-[#670ef7] lg:mx-2 mt-1" /> Performance Analytics & Insights
                                </h3>
                                <h3 className='font-bold md:font-semibold text-[18px] tracking-wide flex'>
                                    <VscDebugBreakpointDataUnverified className="text-[#670ef7] lg:mx-2 mt-1" /> Targeted Audience Engagement
                                </h3>
                                <h3 className='font-bold md:font-semibold text-[18px] tracking-wide flex'>
                                    <VscDebugBreakpointDataUnverified className="text-[#670ef7] lg:mx-2 mt-1" /> Scalable Growth Solutions
                                </h3>
                            </div>
                        </div>

                        {/* Right Section: Contact Form */}
                        <ContactFrom />
                    </div>
                </div>
            </section> 
            <DigitalMarketingTabs />
            <section className='mt-16 mb-10'>
                <Googleadecarosel />
            </section>
            <section className='bg-white mt-10'>
                <div className='flex flex-col'>
                    <h2 className='text-black ml-10 text-6xl px-6 mb-12 font-semibold font-sofiasanscondensed'>What we do</h2>

                    {/* First Container - Google Yellow Theme */}
                    <div className='w-[90%] mx-auto rounded-3xl flex border-l-[3px] py-14 z-10 hover:bg-[#EAAA00] group transition-all duration-300 border-l-[#EAAA00] mb-10 relative overflow-hidden'>
                        <div className="absolute hidden md:flex inset-0 z-0"
                            style={{
                                background: "linear-gradient(to right, rgba(234, 170, 0, 0.3), white)",
                                maskImage: "linear-gradient(to right, white 10%, rgba(255,255,255,0) 80%)",
                                WebkitMaskImage: "linear-gradient(to right, white 50%, rgba(255,255,255,0) 90%)"
                            }}>
                        </div>

                        <div className="relative z-10 gap-4 flex flex-col md:flex-row ml-5  w-full">
                            <div className="flex flex-col w-full md:w-1/2 justify-center items-start text-3xl group-hover:text-white font-medium ml-0 md:ml-10 text-[#8A5B00]">
                                <p>Social Media</p>
                                <p className="text-black group-hover:text-white">Marketing</p>
                            </div>

                            <div className='w-full md:w-1/2 justify-center flex flex-col'>
                                <p className='group-hover:text-white text-black'>
                                    Our social media services create tailored strategies for each platform to elevate your brand&apos;s presence.
                                    By combining engaging content with in-depth analytics, we drive growth and loyalty, connecting with your audience where it matters most.
                                </p>

                                <div className='flex flex-wrap gap-x-4 text-sm'>
                                    {[
                                        "Channel-Wise Strategy & Ideation",
                                        "Impactful Copywriting",
                                        "High-Quality Production",
                                        "Reporting & Analysis",
                                        "Graphic Design & Video Editing"
                                    ].map((text, index) => (
                                        <p key={index} className='border-l-[3px] border-l-[#EAAA00] py-2 px-4 mt-4 font-medium rounded-full inline-block bg-white'>
                                            <SiPolestar className='text-[#EAAA00] font-semibold inline-block mr-2' /> {text}
                                        </p>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Second Container - Google Blue Theme */}
                    <div className='w-[90%] mx-auto rounded-3xl flex border-l-[3px] py-14 hover:bg-[#DB4437] group transition-all duration-300 border-l-[#DB4437] mb-10 relative overflow-hidden '>
                        <div className="absolute hidden md:flex inset-0 z-0"
                            style={{
                                background: "linear-gradient(to right, rgba(219, 68, 55, 0.3), white)",
                                maskImage: "linear-gradient(to right, white 10%, rgba(255,255,255,0) 80%)",
                                WebkitMaskImage: "linear-gradient(to right, white 50%, rgba(255,255,255,0) 90%)"
                            }}>
                        </div>

                        <div className="relative z-10 flex flex-col md:flex-row ml-5 gap-4 w-full">
                            <div className="flex flex-col w-1/2 justify-center items-start text-3xl group-hover:text-white font-medium ml-0 md:ml-10 text-[#a2362c]">
                                <p>Performance</p>
                                <p className="text-black group-hover:text-white">Marketing</p>
                            </div>

                            <div className='w-full md:w-1/2 justify-center flex flex-col'>
                                <p className='group-hover:text-white text-black'>
                                    We create data-driven marketing campaigns that fuel growth and maximize ROI. From precise paid search to engaging social ads, our strategies boost brand reach, generate qualified leads, and increase conversions across all channels, including e-commerce and social platforms.
                                </p>

                                <div className='flex flex-wrap gap-x-4 text-sm'>
                                    {[
                                        "Conversion Rate Optimization",
                                        "Lead Generation",
                                        "Boost Social Media Reach",
                                        "App Installs",
                                        "Increase Revenue",
                                        "Brand Awareness & Increased Traffic"
                                    ].map((text, index) => (
                                        <p key={index} className='border-l-[3px] border-l-[#3367D6] py-2 px-4 mt-4 font-medium rounded-full inline-block bg-white'>
                                            <SiPolestar className='text-[#3367D6] font-semibold inline-block mr-2' /> {text}
                                        </p>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
            <DmSteps />
            <section>
                <TestimonialSection />
            </section>
            <LightFaqSection faqs={faqs} />
        </>
    );
}
