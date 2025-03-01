'use client';
import React from 'react';
import Image from 'next/image';
import { Googleadecarosel } from '@/components/Googleadecarosel';
import rocket from '@/assets/rb_3704.png';
import laptop from '@/assets/carlos-muza-hpjSkU2UYSU-unsplash.jpg'
import Teamimg from '@/assets/pexels-fauxels-3182834.jpg'
import { Googlecard } from '@/components/Cards/Googleadscards';
import { motion } from 'framer-motion';
import HoverDevCards from '@/components/Hovercards';
import myplaceholder from '@/assets/pexels-emilio-garcia-96280844-29700658.jpg';
import { FaChartLine, FaChartPie, FaChartBar, FaQuoteLeft, FaClock, FaHandshake, FaShieldAlt, FaUserTie } from "react-icons/fa";
import { Line, Pie } from "react-chartjs-2";
import { Timeline } from '@/components/timeline';
import { Accordion } from '@/components/Faq'
import { SiPolestar } from "react-icons/si";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, ArcElement } from "chart.js";
import Link from 'next/link';
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, ArcElement);

const lineChartData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
        {
            label: "ROI Growth",
            data: [100, 120, 150, 170, 190, 200],
            borderColor: "rgb(0, 0, 0",
            tension: 0.1
        }
    ]
};
const lineChartData2 = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
        {
            label: "ROI Growth",
            data: [100, 120, 110, 170, 150, 190],
            borderColor: "rgb(0, 0, 0",
            tension: 0.1
        },
        {
            label: "Traffic",
            data: [120, 140, 110, 150, 180, 200],
            borderColor: "rgb(0, 0, 0)",
            tension: 0.1
        }
    ]
}


export default function Home() {
    const data = [
        {
            title: "Step 1: Set Goals",
            content: (
                <div>
                    <p className="text-neutral-800 text-sm md:text-lg font-normal">
                        Define your advertising objectives, such as increasing website traffic, generating leads, or boosting sales.Clearly outline your target audience and what you aim to achieve with your Google Ads campaign.
                    </p>
                </div>
            ),
        },
        {
            title: "Step 2: Keyword Research",
            content: (
                <div>
                    <p className="text-neutral-800 text-sm md:text-lg font-normal mb-8">
                        Use tools like Google Keyword Planner to find relevant keywords for your campaign.Focus on keywords with high search intent that align with your goals.
                    </p>
                </div>
            ),
        },
        {
            title: "Step 3: Create Ad Groups",
            content: (
                <div>
                    <p className="text-neutral-800  text-sm md:text-lg font-normal mb-8">
                        Organize your keywords into tightly themed ad groups for better relevance and performance.Each ad group should focus on a specific set of related keywords.
                    </p>

                </div>
            ),
        },
        {
            title: "Step 4: Write Compelling Ads",
            content: (
                <div>
                    <p className="text-neutral-800  text-sm md:text-lg font-normal mb-8">
                        Create eye-catching ad copy that includes your keywords and a clear call-to-action.Ensure your ads match the intent of the keywords and resonate with your target audience.
                    </p>
                </div>
            ),
        },
        {
            title: "Step 5: Set Up Landing Pages",
            content: (
                <div>
                    <p className="text-neutral-800  text-sm md:text-lg font-normal mb-8">
                        Design user-friendly landing pages that align with your ad copy and goals.Optimize landing pages for conversions with clear headlines, relevant content, and strong CTAs.
                    </p>

                </div>
            ),
        },
        {
            title: "Step 6: Monitor and Optimize",
            content: (
                <div>
                    <p className="text-neutral-800  text-sm md:text-lg font-normal mb-8">
                        Track your campaign performance using metrics like CTR, CPC, and conversion rates. Adjust bids, refine keywords, and tweak ad copy to improve results continuously.
                    </p>

                </div>
            ),
        },
    ];

    return (
        <>
            <section>
                <div className="relative mt-[-90px]  isolate lg:mt-[-150px] mb-[0px] overflow-hidden bg-black h-[100vh] md:h-[100vh] lg:h-[105vh] xl:h-[105vh]  sm:h-[80vh]  flex items-center justify-center">
                    <svg
                        className="absolute inset-0 -z-10 h-full w-full stroke-white/10 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
                        aria-hidden="true">
                        <defs>
                            <pattern id="hero-pattern" width="200" height="200" x="100%" y="-1" patternUnits="userSpaceOnUse">
                                <path d="M.5 200V.5H200" fill="none"></path>
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#hero-pattern)"></rect>
                    </svg>
                    <motion.div
                        className="absolute right-0 bottom-[-100px] z-10"
                        animate={{ y: [-20, 20, -20], x: [-40, 40, -40] }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    >
                        <Image src={rocket} height={600} width={600} alt="rocket" />
                    </motion.div>
                    <div
                        className="absolute left-[calc(50%-12rem)] top-10 -z-10 transform-gpu blur-[180px] sm:left-[calc(50%-24rem)] lg:left-48 lg:top-[calc(50%-40rem)] xl:left-[calc(50%-32rem)]"
                        aria-hidden="true">
                        <div
                            className="aspect-[1108/632] w-[100rem] bg-gradient-to-r from-[#8653f5] to-[#ae07e6] opacity-30"
                            style={{
                                clipPath:
                                    "polygon(50% 0%, 85% 20%, 100% 50%, 85% 80%, 50% 100%, 15% 80%, 0% 50%, 15% 20%)",
                            }}
                        ></div>
                    </div>
                    <div className="max-w-full px-1  text-center mb-[-120px] lg:max-w-5xl xl:max-w-7xl z-30">
                        <h1 className="text-2xl font-bold tracking-tight text-white md:text-4xl xl:text-6xl">
                            Drive <span className="text-purple-500 px-1 leading-4">300%</span>More Traffic with Precision Google Ads Management by Bixeltek!
                        </h1>
                        <p className="mt-10 text-sm lg:text-lg  xl:text-2xl leading-8 text-gray-200 ">
                            Based in <span className="text-purple-600 px-1">Hyderabad</span>, trusted by 50+ businesses for scalable ad performance.
                        </p>

                        <button className="backdrop-blur-3xl border border-white group text-white font-normal text-sm xl:text-lg py-2 px-4 md:px-6 md:py-3 xl:py-5 xl:px-5 md:text-md rounded-lg mt-14 md:mt-16 shadow-custom ">
                            <span>
                                Get a Free Audit Today!{' '}
                                <i className="fa fa-arrow-right ml-2 rotate-[-45deg] group-hover:rotate-[0deg] transition-all" aria-hidden="true"></i>
                            </span>
                        </button>
                    </div>
                </div>
            </section>
            <section>
                <div className='flex flex-row  justify-between bg-white'>
                    <div className="w-1/3 relative">
                        <motion.div
                            className="absolute w-2 sm:w-3 md:w-3 h-10 bg-[#4285F4] top-0  right-0 origin-top"
                            animate={{ scaleY: [0, 10, 0] }}
                            transition={{
                                duration: 8,
                                repeat: Infinity,
                                repeatType: "loop",
                                ease: "easeInOut",
                            }}
                        />
                        <Image src={Teamimg} alt="Team" className='h-full w-full object-cover' />
                    </div>


                    <div className="w-1/3 flex flex-col items-start px-10 xl:px-16 py-10 xl:py-16 bg-gray-100">
                        <h1 className="text-4xl font-sofiasanscondensed lg:text-5xl xl:text-5xl xl:leading-[50px] font-bold text-left my-10 xl:my-14 text-zinc-700">
                            Google Ads Agency Certified by{" "}
                            <span className="text-[#4285F4]">G</span>
                            <span className="text-[#EA4335]">o</span>
                            <span className="text-[#FFBB00]">o</span>
                            <span className="text-[#4285F4]">g</span>
                            <span className="text-[#34AB53]">l</span>
                            <span className="text-[#EA4335]">e</span>
                        </h1>
                        <p className="text-left mt-3 xl:mt-0 xl:text-lg mb-7 font-sans text-gray-700 leading-7">
                            We hold the Google Partner certification, which confirms our adherence to
                            all quality standards set by Google Ads for campaign management.
                        </p>
                        <p className="text-left mb-7 font-sans xl:text-lg  text-gray-700 leading-7">
                            Additionally, this certification demonstrates that our team of experts
                            possesses the necessary qualifications under the Google Partners agency
                            program.
                        </p>
                        <p className="text-left font-sans xl:text-lg text-gray-700 leading-7">
                            We will analyze your specific needs and suggest the most effective
                            strategies on the platform to ensure optimal profitability.
                        </p>
                        <a
                            href="https://www.google.com/partners/agency?id=2188074075"
                            target="_blank"
                            className="mt-10 flex justify-start"
                        >
                            <img
                                src="https://www.gstatic.com/partners/badge/images/2024/PartnerBadgeClickable.svg"
                                alt="Google Partner Badge"
                                className="w-auto h-auto"
                            />
                        </a>
                    </div>
                    <div className="w-1/3 relative flex flex-col gap-14 px-10 pb-20 md:pt-16 xl:pt-36">
                        <motion.div
                            className="absolute w-2 sm:w-3 md:w-3 h-12 bg-[#EA4335] bottom-0 left-0 origin-bottom"
                            animate={{ scaleY: [0, 10, 0] }}
                            transition={{
                                duration: 10,
                                repeat: Infinity,
                                repeatType: "loop",
                                ease: "easeInOut",
                            }}
                        />
                        <div className="flex flex-col items-center text-center">
                            <h2 className="text-4xl xl:text-[44px] xl:leading-[44px] my-2 font-montaga font-bold text-zinc-700">5+</h2>
                            <p className="font-sofiasanscondensed text-gray-900 leading-6 tracking-wide text-sm lg:text-xl uppercase">Years creating campaigns</p>
                            <p className=" text-gray-700  tracking-wide my-1 text-sm xl:text-lg">
                                In Google Ads, the experience is a degree
                            </p>
                        </div>

                        <div className="flex flex-col items-center text-center">
                            <h2 className="text-4xl xl:text-[44px] xl:leading-[44px] my-2 font-bold font-montaga text-zinc-700">0</h2>
                            <p className="font-raleway text-gray-900 leading-6 tracking-wide uppercase font-sofiasanscondensed text-sm lg:text-xl">Months of permanence</p>
                            <p className=" text-gray-700 tracking-wide my-1 text-sm xl:text-lg">
                                Our service does not have permanence
                            </p>
                        </div>

                        <div className="flex flex-col items-center text-center">
                            <h2 className="text-4xl xl:text-[44px] xl:leading-[44px] my-2 font-bold font-montaga text-zinc-700">4</h2>
                            <p className="font-raleway text-gray-900 leading-6 tracking-wide uppercase  font-sofiasanscondensed lg:text-xl text-sm">Experts</p>
                            <p className=" text-gray-700 tracking-wide my-1 text-sm xl:text-lg">
                                A large team of certified professionals
                            </p>
                        </div>

                        <div className="flex flex-col items-center text-center">
                            <h2 className="text-4xl xl:text-[44px] xl:leading-[44px] my-2 font-bold font-montaga text-zinc-700">12</h2>
                            <p className="font-raleway text-gray-900 leading-6 tracking-wide font-sofiasanscondensed uppercase text-sm lg:text-xl">Years with us</p>
                            <p className=" text-gray-700 my-1 tracking-wide text-sm xl:text-lg">
                                Each customer is with us for an average of 12 years
                            </p>
                        </div>
                    </div>
                </div>
            </section>


            <section className='bg-white py-20'>
                <Googlecard />
            </section>
            <section className='bg-white py-20'>
                <Googleadecarosel />
            </section>
            <section className='bg-white mb-20'>
                <div className='flex flex-col'>
                    <h2 className='text-black ml-24 text-6xl px-6 mb-12 font-semibold font-sofiasanscondensed'>What we do</h2>

                    {/* First Container - Google Yellow Theme */}
                    <div className='w-[85%] mx-auto rounded-3xl flex border-l-[3px] py-14 z-10 hover:bg-[#EAAA00] group transition-all duration-300 border-l-[#EAAA00] mb-10 relative overflow-hidden'>
                        <div className="absolute hidden md:flex inset-0 z-0"
                            style={{
                                background: "linear-gradient(to right, rgba(234, 170, 0, 0.3), white)",
                                maskImage: "linear-gradient(to right, white 10%, rgba(255,255,255,0) 80%)",
                                WebkitMaskImage: "linear-gradient(to right, white 50%, rgba(255,255,255,0) 90%)"
                            }}>
                        </div>

                        <div className="relative z-10 gap-4 flex flex-col md:flex-row ml-5 w-full">
                            <div className="flex flex-col w-full md:w-1/2 justify-center items-start text-3xl group-hover:text-white font-medium ml-0 md:ml-10 text-[#8A5B00]">
                                <p>Google Ads</p>
                                <p className="text-black group-hover:text-white">Marketing</p>
                            </div>

                            <div className='w-full md:w-1/2 justify-center flex flex-col'>
                                <p className='group-hover:text-white text-black'>
                                    Our expert-driven Google Ads campaigns ensure your business reaches the right audience at the right time.
                                    With strategic ad placements, compelling copy, and continuous optimization, we drive high-quality traffic,
                                    increase conversions, and maximize your advertising budget.
                                </p>

                                <div className='flex flex-wrap gap-x-4 text-sm'>
                                    {[
                                        "Targeted Campaign Strategy",
                                        "Conversion-Optimized Landing Pages",
                                        "Search & Display Ads",
                                        "Remarketing & Retargeting",
                                        "Performance Tracking & Optimization",
                                        "YouTube & Shopping Ads"
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
                    <div className='w-[85%] mx-auto rounded-3xl flex border-l-[3px] py-14 hover:bg-[#DB4437] group transition-all duration-300 border-l-[#DB4437] mb-10 relative overflow-hidden '>
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
            {/* 80% Google Ads */}
            <section className='bg-gray-100'>
                <div className="bg-gray-100  flex flex-col md:flex-row items-center justify-between py-6 px-6 md:px-20 md:py-24">
                    <div className="text-center md:text-left md:w-1/2  space-y-4">
                        <h2 className="text-2xl lg:text-5xl font-sofiasanscondensed font-bold text-gray-800 leading-[32px] lg:leading-[53px] tracking-tight">80% of Google Ads Budgets Are Wasted Without Strategic Management.</h2>
                        <p className="text-gray-600 text-sm lg:text-lg pt-3">
                            Many businesses struggle to see results from their Google Ads campaigns due to poor targeting and ineffective strategies. Without proper management, high costs per click and low returns on investment become common hurdles.
                        </p>
                        <div className='my-2 lg:my-5 group'>
                            <Link href="#" className="text-black font-semibold text-lg ">
                                Lets Optimize Your Campaigns!  <i className="fa fa-arrow-right hidden rotate-[-45deg] ml-1 group-hover:rotate-[0deg] transition-all" aria-hidden="true"></i>
                            </Link>
                        </div>
                        <p className='text-gray-500 text-[13px] lg:text-[16px] pt-1 lg:pt-3'>Enhance your online presence with a professionally optimized website tailored to drive results.</p>
                    </div>

                    <div className="md:w-1/2 flex justify-center mt-4 mb-2 items-center ">
                        <Image
                            width={500}
                            height={500}
                            src={myplaceholder}
                            alt="Description of the image"
                            className="rounded-lg"
                        />
                    </div>
                </div>
            </section>
            {/* End 80% Google Ads */}
            <section>
                <div className="bg-white flex flex-col pt-10 pb-20 items-center">
                    <div className="text-center flex flex-col max-w-5xl">
                        <h2 className="text-3xl lg:text-5xl font-bold text-gray-900">
                            Maximize Every Click with Our Proven Strategies
                        </h2>
                        <p className="text-lg text-gray-700 py-10 font-sans">
                            We focus on making your ad spend count by combining precision, creativity, and data-driven insights. Here&apos;s how we transform your campaigns into performance powerhouses:
                        </p>
                    </div>
                    <div className="w-full py-10 flex justify-center">
                        <HoverDevCards />
                    </div>
                    <Link href='#'>
                        <p className='font-semibold text-lg text-center group'>See Our CaseStudies <i className="fa fa-arrow-right ml-1 rotate-[-45deg] group-hover:rotate-[0deg] transition-all" aria-hidden="true"></i></p>
                    </Link>
                </div>
            </section>
            <section>
                <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-5xl font-bold text-gray-900 mb-4">Proven Success: Over $2 Million In Revenue Generated For Clients</h2>
                            <p className="text-xl text-gray-600">Numbers That Speak Louder Than Words</p>
                        </div>

                        <p className="text-center text-lg text-gray-700 mb-12">
                            We believe in results that matter. Here is a glimpse of how we have empowered our clients to achieve measurable success.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-2 border-purple-600">
                                <FaChartLine className="text-4xl text-purple-600 mb-4" />
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">150%</h3>
                                <p className="text-gray-600">Increase in CTR for e-commerce campaigns, driving targeted traffic that converts.</p>
                            </div>

                            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-2 border-purple-600">
                                <FaChartBar className="text-4xl text-purple-600 mb-4" />
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">200%</h3>
                                <p className="text-gray-600">Average ROI growth across all managed campaigns.</p>
                            </div>

                            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-2 border-purple-600">
                                <FaChartLine className="text-4xl text-purple-600 mb-4" />
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">40%</h3>
                                <p className="text-gray-600">Reduction in CPC while maintaining ad effectiveness.</p>
                            </div>

                            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-2 border-purple-600">
                                <FaChartPie className="text-4xl text-purple-600 mb-4" />
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">300%</h3>
                                <p className="text-gray-600">Boost in conversions in just 90 days for a leading retail client.</p>
                            </div>
                        </div>

                        <div className="mb-16">
                            <div className="flex flex-row gap-10 w-full items-center">
                                <div className="bg-white p-6 rounded-xl my-2 shadow-lg border-2 border-purple-600 w-full">
                                    <h3 className="text-xl font-bold text-gray-900 mb-4">ROI Growth Trend</h3>
                                    <Line data={lineChartData} options={{ responsive: true }} />
                                </div>
                                <div className="bg-white p-6 rounded-xl my-2 shadow-lg border-2 border-purple-600 w-full">
                                    <h3 className="text-xl font-bold text-gray-900 mb-4">ROI Growth Trend</h3>
                                    <Line data={lineChartData2} options={{ responsive: true }} />
                                </div>
                            </div>
                        </div>


                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                            <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-purple-600">
                                <FaQuoteLeft className="text-3xl text-purple-600 mb-4" />
                                <p className="text-lg text-gray-700 mb-4">Partnering with Bixeltek transformed our campaigns. We saw a 3X increase in revenue within months.</p>
                                <p className="font-semibold text-gray-900">Digital Marketing Director</p>
                            </div>

                            <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-purple-600">
                                <FaQuoteLeft className="text-3xl text-purple-600 mb-4" />
                                <p className="text-lg text-gray-700 mb-4">Their expertise in keyword targeting reduced our ad spend by 35% while doubling conversions.</p>
                                <p className="font-semibold text-gray-900">- E-commerce Manager</p>
                            </div>
                        </div>
                        <div className="text-center">
                            <button className="backdrop-blur-3xl border border-purple-600 text-black font-normal text-[16px] py-2 px-4 md:px-6 md:py-3 md:text-md rounded-lg md:mt-5 shadow-custom ">
                                <span>
                                    Want Results Like These? Let&apos;s Start Today
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <Accordion />
            </section>
        </>
    );
}
