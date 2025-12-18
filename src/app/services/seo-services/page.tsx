export const metadata = {
    title: "SEO Services for Businesses | AI SEO Agency for Rankings & Growth",
    description:
        " SEO services for businesses designed to rank #1. Our AI-powered SEO agency helps you get found on Google, attract leads, and grow globally.",
    keywords:
        "SEO services Hyderabad, Best SEO agency Hyderabad, Digital marketing Hyderabad, Local SEO Hyderabad, Google ranking services, Technical SEO, On-page SEO, Off-page SEO, E-commerce SEO, SEO expert Hyderabad, Increase website traffic, SEO consultant Hyderabad",
    openGraph: {
        title: "SEO Services for Businesses | AI SEO Agency for Rankings & Growth",
        description:
            "SEO services for businesses designed to rank #1. Our AI-powered SEO agency helps you get found on Google, attract leads, and grow globally.",
        type: "website",
    },
    alternates: {
        canonical: "https://bixeltek.com/services/seo-services",
    },
};

export const dynamic = "force-dynamic";
import React from 'react';
import SeoHero from '@/components/SeoHero';
import Link from 'next/link';
import { Toaster } from 'react-hot-toast';
import WhySeo from '@/components/Seo/SeoSection1';
import SEOSection2 from '@/components/Seo/SeoSection2';
import SEOGridSection from '@/components/Seo/SeoSection3';
import WhyChooseBixeltek from '@/components/Seo/SeoSection4';
import IndustryCarouselSection from '@/components/Hyderabad/HydSection8';
import FAQSectionSEO from '@/components/Seo/SeoFaq';
import SeoSection6 from '@/components/Seo/SeoSection6';
export default function Seo() {

    const seoServices = [
        {
            title: "Keyword Research",
            description:
                "Discover high-volume, low-competition keywords to improve SEO rankings, drive organic traffic, and target the right audience.",
            color: "bg-zinc-500",
            linkText: "Explore Keyword Research Strategies",
            linkUrl: "#",
        },
        {
            title: "On-Page Optimization",
            description:
                "Optimize meta tags, headings, URLs, and content structure to boost search engine rankings and enhance user experience.",
            color: "bg-violet-400",
            linkText: "Learn More About On-Page SEO",
            linkUrl: "/on-page-seo",
        },
        {
            title: "Link Building",
            description:
                "Earn high-quality, authoritative backlinks using white-hat SEO techniques to improve domain authority and organic search rankings.",
            color: "bg-green-500",
            linkText: "See Our Link Building Process",
            linkUrl: "#",
        },
        {
            title: "Content Marketing",
            description:
                "Create keyword-rich, engaging, and SEO-optimized content to increase website traffic, improve search rankings, and drive conversions.",
            linkText: "Read About Content Marketing",
            linkUrl: "#",
        },
        {
            title: "Technical SEO",
            description:
                "Optimize site speed, mobile-friendliness, structured data, and indexing to ensure search engines crawl and rank your site effectively.",
            linkText: "Understand Technical SEO",
            linkUrl: "/technical-seo",
        },
        {
            title: "Mobile Optimization",
            description:
                "Enhance mobile responsiveness, loading speed, and UX to improve mobile search rankings and reduce bounce rates.",
            linkText: "Improve Mobile SEO Performance",
            linkUrl: "#",
        },
        {
            title: "Local SEO",
            description:
                "Boost local search rankings with Google My Business optimization, geo-targeted keywords, citations, and customer reviews.",
            linkText: "See Our Local SEO Packages",
            linkUrl: "/local-seo",
        },
        {
            title: "SEO Audits",
            description:
                "Conduct in-depth website SEO audits to identify and fix errors, enhance performance, and improve search engine rankings.",
            linkText: "Request a Free SEO Audit",
            linkUrl: "#",
        },
        {
            title: "Conversion Rate Optimization (CRO)",
            description:
                "Optimize landing pages, CTAs, and user journey using A/B testing to increase conversions, sales, and lead generation.",
            linkText: "Boost Conversions with CRO",
            linkUrl: "#",
        },
    ];

    return (
        <>
            <Toaster
                position="bottom-center"
                reverseOrder={false}
            />
            <SeoHero />
            <WhySeo />
            <SEOSection2 />
            <SEOGridSection />
            <WhyChooseBixeltek />
            {/* <section className="max-w-5xl mx-auto text-center py-12">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-sofiasanscondensed font-medium text-white mb-1">Why Your Website Isn&apos;t Ranking</h2>
                <h2 className='text-5xl font-sofiasanscondensed text-purple-500 mb-6'>The SEO Challenge</h2>

                <div className="grid grid-cols-2 px-2 md:px-0 md:grid-cols-3 gap-6">
                    {seoChallenges.map((item, index) => (
                        <div key={index} className="px-2 py-6 md:px-6 text-white flex flex-col justify-center items-center bg-transparent">
                            <div className="text-white text-3xl mb-3">{item.icon}</div>
                            <h3 className="text-lg font-semibold text-center">{item.title}</h3>
                            <p className="text-sm text-gray-300 text-center">{item.desc}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-8">
                    <a href="tel:+919100032301" className="text-white text-xl font-sans group font-semibold ">
                        Book A Call With An <span className='text-purple-500 text-xl'>SEO Expert<PiGreaterThan className='inline-block text-lg group-hover:translate-x-2 transition-all duration-300 ml-1 mb-1' /></span>
                    </a>
                </div>
            </section> */}


            {/* <section>
                <section>
                    <div className="min-h-screen bg-black flex items-center justify-center px-0 md:px-4 py-10">
                        <div className="max-w-7xl w-full bg-black text-white rounded-xl shadow-md p-8 flex flex-col md:flex-row">

                            <div className="w-full md:w-1/2 p-0 md:py-6 md:px-3">
                                <h2 className="text-3xl md:text-5xl font-normal font-sofiasanscondensed tracking-wide text-white mb-4 ">
                                    Why Choose <span className='text-[#6728cc]'>Bixeltek</span> – Your Trusted SEO Company in Hyderabad?
                                </h2>

                                <p className="text-gray-300 relative font-sans text-lg py-5 leading-relaxed">
                                    Ready to outshine the competition and drive consistent leads? Bixeltek is your trusted SEO company in Hyderabad, offering cutting-edge SEO services that propel your business to the top of Google&apos;s search results. Let&apos;s turn organic traffic into tangible growth.
                                </p>


                                <div className='grid grid-cols-1 gap-y-7 pb-10 pt-5  text-white'>
                                    <h3 className='font-light text-[16px] tracking-wide flex'>
                                        <VscDebugBreakpointDataUnverified size={30} className="text-[#670ef7] mr-2 mt-1" />
                                        Proven Local Expertise – We optimize your SEO for Hyderabad&apos;s unique market, ensuring high-intent local audiences find your business.
                                    </h3>
                                    <h3 className='font-light text-[16px] tracking-wide flex'>
                                        <VscDebugBreakpointDataUnverified size={30} className="text-[#670ef7] mr-2 mt-1" />
                                        Data-Driven Methodology – Our SEO strategies evolve with keyword analytics, competitor insights, and real-time performance tracking.
                                    </h3>
                                    <h3 className='font-light text-[16px] tracking-wide flex'>
                                        <VscDebugBreakpointDataUnverified size={30} className="text-[#670ef7] mr-2 mt-1" />
                                        Transparent & Collaborative – We provide clear reporting, regular updates, and involve you in key SEO strategy decisions.
                                    </h3>
                                    <h3 className='font-light text-[16px] tracking-wide flex'>
                                        <VscDebugBreakpointDataUnverified size={30} className="text-[#670ef7] mr-2 mt-1" />
                                        Cutting-Edge Tools – Advanced keyword research, auditing software, and optimization ensure peak SEO performance.
                                    </h3>
                                </div>
                                <div className='mt-2 mb-10 ml-2'>
                                    <a href="tel:+919100032301" >
                                        <button className='px-4 py-3 bg-[#670ef7] text-white transition-all duration-300 hover:bg-white font-medium hover:text-black rounded-md'>Book An Appointment</button>
                                    </a>
                                </div>
                            </div>



                            <ContactFrom />
                        </div>
                    </div>
                </section>
            </section> */}
            {/* <section className="pt-2 pb-20">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div
                        className="lg:py-14 lg:px-20 p-10 rounded-2xl bg-gradient-to-r from-indigo-800 to-violet-800 flex items-center justify-between flex-col lg:flex-row"
                    >
                        <div className="block text-center w-full md:w-3/4 mb-5 lg:text-left lg:mb-0">
                            <h2
                                className="font-manrope text-2xl text-white font-semibold mb-5 lg:mb-2"
                            >
                                Dominate &quot;Near Me&quot; Searches in Hyderabad with Local SEO
                            </h2>
                            <p className=" text-base md:text-xl text-indigo-100">
                                Capture high-intent customers who are actively searching for services nearby. Our targeted local SEO ensures your business appears at the top of “near me” results, driving foot traffic and real leads in Hyderabad.
                            </p>
                        </div>
                        <div className='w-full md:w-1/4 flex justify-center md:justify-end'>
                            <Link
                                href="/contact-us"
                                className="flex w-fit items-center text-center gap-2 bg-white rounded-full shadow-sm text-lg text-indigo-600 font-semibold py-4 px-10 transition-all duration-500"
                            >Get In Touch
                                <svg
                                    width="19"
                                    height="14"
                                    viewBox="0 0 19 14"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M1.75 7L16.4167 7M11.8333 12.5L16.6852 7.64818C16.9907 7.34263 17.1435 7.18985 17.1435 7C17.1435 6.81015 16.9907 6.65737 16.6852 6.35182L11.8333 1.5"
                                        stroke="#4F46E5"
                                        stroke-width="2.4"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                </svg>
                            </Link>
                        </div>

                    </div>
                </div>
            </section> */}
            {/* <section className="bg-black text-gray-300 py-16">
                <div className="max-w-[90%] mx-auto px-6 lg:px-8">
                    
                    <div className="text-center">
                        <h2 className="text-5xl font-bold text-left text-white capitalize">
                            SEO Services You Can Expect from <span className='text-[#670ef7] font-normal font-sans italic'>Bixeltek</span>
                        </h2>
                        <p className="mt-4 text-lg text-gray-300 max-w-3xl text-left">
                            At Bixeltek, we provide a full suite of SEO services tailored to meet your unique business needs. Our goal is to help you gain visibility, attract organic traffic, and achieve sustainable growth in the digital landscape.
                        </p>
                    </div>


                    <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-8">
                        
                        <div className="space-y-8">
                            <div className="flex items-start">
                                <VscDebugBreakpointDataUnverified className="text-[#670ef7] mt-1 mr-3" size={24} />
                                <p>
                                    We develop tailor-made SEO strategies designed to align with your specific business goals, ensuring maximum impact and results.
                                </p>
                            </div>
                            <div className="flex items-start">
                                <VscDebugBreakpointDataUnverified className="text-[#670ef7] mt-1 mr-3" size={24} />
                                <p>
                                    Optimize every element of your website, including title tags, meta descriptions, alt attributes, and internal linking, to improve search engine rankings.
                                </p>
                            </div>
                            <div className="flex items-start">
                                <VscDebugBreakpointDataUnverified className="text-[#670ef7] mt-1 mr-3" size={24} />
                                <p>
                                    Conduct comprehensive research to identify the best-performing keywords and analyze market trends to help you target the right audience.
                                </p>
                            </div>
                            <div className="flex items-start">
                                <VscDebugBreakpointDataUnverified className="text-[#670ef7] mt-1 mr-3" size={24} />
                                <p>
                                    Create engaging and valuable content that resonates with your audience, driving traffic and building authority in your industry.
                                </p>
                            </div>
                            <div className="flex items-start">
                                <VscDebugBreakpointDataUnverified className="text-[#670ef7] mt-1 mr-3" size={24} />
                                <p>
                                    Evaluate your competitors’ strategies to uncover opportunities for differentiation and market advantage.
                                </p>
                            </div>
                        </div>

                     
                        <div className="space-y-8">
                            <div className="flex items-start">
                                <VscDebugBreakpointDataUnverified className="text-[#670ef7] mt-1 mr-3" size={24} />
                                <p>
                                    Build high-quality, diverse backlinks on authoritative domains to boost your site’s credibility and search engine rankings.
                                </p>
                            </div>
                            <div className="flex items-start">
                                <VscDebugBreakpointDataUnverified className="text-[#670ef7] mt-1 mr-3" size={24} />
                                <p>
                                    Use ethical and effective SEO practices to achieve sustainable growth, with the option to combine organic strategies with paid advertising.
                                </p>
                            </div>
                            <div className="flex items-start">
                                <VscDebugBreakpointDataUnverified className="text-[#670ef7] mt-1 mr-3" size={24} />
                                <p>
                                    Share your articles and updates across social media platforms, curated websites, and relevant news outlets to maximize reach and engagement.
                                </p>
                            </div>
                            <div className="flex items-start">
                                <VscDebugBreakpointDataUnverified className="text-[#670ef7] mt-1 mr-3" size={24} />
                                <p>
                                    Leverage tools like Google Analytics to monitor trends, analyze traffic, and make data-driven decisions for your SEO campaigns.
                                </p>
                            </div>
                            <div className="flex items-start">
                                <VscDebugBreakpointDataUnverified className="text-[#670ef7] mt-1 mr-3" size={24} />
                                <p>
                                    Optimize your online store for search engines to increase product visibility, enhance user experience, and drive more sales.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}


            <section className='relative py-24'>
                <div className="absolute top-32 -left-20 w-[500px] h-[500px] bg-blue-500 rounded-full opacity-30 blur-[190px] pointer-events-none"></div>
                <div className="absolute bottom-52 right-0 w-[500px] h-[500px] bg-blue-500 rounded-full opacity-30 blur-[190px] pointer-events-none"></div>
                <div>
                    <div className=' max-w-[80%] mx-auto mb-5 text-center'>
                        <h2 className='text-white text-4xl lg:text-6xl max-w-7xl mx-auto font-inter mb-3 font-semibold '>Our <span className='text-blue-500'>Comprehensive SEO Services</span> in Hyderabad</h2>
                        <p className='text-gray-100 text-base md:text-[17px] tracking-wider mt-4 max-w-3xl mx-auto'>At Bixeltek, our services are built around one goal: helping businesses turn visibility into revenue.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-[85%] mx-auto mt-10">
                        {seoServices.map((service, index) => (
                            <div
                                key={index}
                                className={`relative group w-full h-80 border border-gray-800 bg-black/10 hover:bg-blue-600 transition-all duration-300  flex flex-col justify-center items-center p-10 md:p-20`}>

                                <h3 className="text-white text-3xl font-medium text-center mb-2">{service.title}</h3>
                                <p className="text-gray-300 text-sm text-center mb-3">{service.description}</p>

                                <a
                                    href={service.linkUrl}
                                    className="text-blue-400 group-hover:text-white hover:scale-105 transition-all duration-300 text-base  mt-2"
                                >
                                    {service.linkText}
                                </a>

                                {index % 4 === 0 && (
                                    <span className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 text-gray-300 text-3xl z-30"><i className="fa fa-plus text-2xl" aria-hidden="true"></i></span>
                                )}

                                {(index % 4 === 1 || index == 0 || index == 2) && (
                                    <span className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 text-gray-300 text-3xl z-30"><i className="fa fa-plus text-2xl" aria-hidden="true"></i></span>
                                )}

                                {(index % 4 === 2 || index == 0 || index == 3) && (
                                    <span className="absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2 text-gray-300 text-3xl z-30"><i className="fa fa-plus text-2xl" aria-hidden="true"></i></span>
                                )}

                                {(index % 4 === 3 || index == 5 || index == 6 || index == 8) && (
                                    <span className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 text-gray-300 text-3xl z-30"><i className="fa fa-plus text-2xl" aria-hidden="true"></i></span>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            <section className="pt-20 pb-10 md:pb-20">
                <div className="flex flex-col items-center gap-3">
                    <h2 className="text-4xl max-w-6xl mx-auto md:text-6xl font-semibold text-center text-white font-inter">
                        How We Help Businesses Thrive in the Age of{" "}
                        <span className="text-blue-500">AI with AI-First SEO</span>
                    </h2>
                    <p className="text-white max-w-[90%] md:max-w-5xl text-center text-[15px] md:text-[16px]">
                        Search today is powered by AI Overviews, Answer Engines, and Generative
                        Search. Customers no longer browse endless results — they rely on AI to
                        deliver answers and recommendations. If your business isn’t showing up in
                        these AI responses, you risk being invisible.
                        <br />
                        <br />
                        That’s why <span className="font-semibold">Bixeltek</span> uses an
                        AI-First SEO approach: strategies built for today’s search reality, not
                        yesterday’s.
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10 gap-6 max-w-7xl text-white mx-auto text-center">
                    {/* Card 1 */}
                    <div className="flex flex-col gap-3 text-xl items-center border-none md:border-r md:border-dashed border-blue-500 justify-center p-6">
                        <span className="text-4xl">🧠</span>
                        <h3 className="mt-2 font-semibold font-poppins">AI Overviews (AIO)</h3>
                        <p className="text-sm mt-2">
                            Be seen where it matters most: in Google’s AI summaries. We help your
                            brand get cited so customers discover your business in the answers they
                            trust.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="flex flex-col gap-3 text-xl items-center border-none md:border-r md:border-dashed border-blue-500 justify-center p-6">
                        <span className="text-4xl">🎯</span>
                        <h3 className="mt-2 font-semibold font-poppins">
                            Answer Engine Optimization (AEO)
                        </h3>
                        <p className="text-sm mt-2">
                            Voice assistants and AI tools are becoming decision-makers. We optimize
                            your content so when people ask, “Who’s the best in my area?” — the
                            answer is you.
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="flex flex-col gap-3 text-xl items-center justify-center p-6">
                        <span className="text-4xl">⚡</span>
                        <h3 className="mt-2 font-semibold font-poppins">
                            Generative Engine Optimization (GEO)
                        </h3>
                        <p className="text-sm mt-2">
                            Search is conversational. We ensure your business appears in
                            AI-generated recommendations that influence buying decisions before ads
                            even appear.
                        </p>
                    </div>
                </div>

                {/* Closing Statement */}
                <div className="text-center max-w-[90%] md:max-w-4xl mx-auto">
                    <p className="text-white text-[15px] md:text-[16px] leading-relaxed">
                        With our AI-First SEO approach, your business isn’t just ranking — it’s
                        being recommended as the top provider in your region.
                    </p>
                    <Link href={'/blog/future-of-local-seo-ai-search-2025'}>
                        <p className="text-blue-500 mt-4 font-semibold cursor-pointer hover:underline">
                            Explore our full strategy in this in-depth blog on AI-First SEO
                        </p>
                    </Link>

                </div>
            </section>
            <IndustryCarouselSection />
            <SeoSection6 />
            <FAQSectionSEO />


            {/* <section className="py-10 bg-white">
                <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">

                    <div className="w-2/3 lg:w-1/3 mx-auto text-center mb-6">
                        <h2 className=" text-xl text-neutral-900">
                            Trusted by Open Source, enterprise, and more than 99,000 of you
                        </h2>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 items-center">
                        {logos.map((logo, idx) => (
                            <div key={idx} className="flex justify-center">
                                <Image
                                    src={logo.src}
                                    alt={logo.alt}
                                    className="h-12 w-auto object-contain"
                                />
                            </div>
                        ))}
                    </div>

                </div>
            </section> */}
        </>
    );
}
