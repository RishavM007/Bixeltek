'use client';
import { useEffect, useState } from 'react';
import { MdKeyboardArrowUp } from "react-icons/md";
import Link from 'next/link';
import { MdKeyboardArrowDown } from 'react-icons/md';
type StrategyStep = {
    title: string;
    points: string[];
};

const sections = [
    { id: 'about', label: 'About' },
    { id: 'struggle', label: 'The Struggle' },
    { id: 'strategy', label: 'The Bixeltek Turnaround' },
    { id: 'results', label: 'Results at a Glance' },
    { id: 'client-impact', label: 'Client Impact' },
    { id: 'conclusion', label: 'The Takeaway' },
    { id: 'cta', label: 'Build Your Success Story.' },
];
const strategySteps = [
    {
        title: "1. Recovery in Record Time",
        des: "We got their Google Ads account unsuspended in just 6 hours — fully reviewed, compliant, and ready to go live.",
        points: [

        ],
    },
    {
        title: "2. Campaigns That Actually Convert",
        des: "No more generic ads. We built campaigns targeting real intent:",
        points: [
            "“doorstep bike service near me”",
            "“superbike repair Hyderabad”",
            "“bike servicing at home, Hyderabad”",
        ],
        suffix: "Every ad spoke directly to what riders actually searched for, with clear CTAs, trust signals, and local targeting."
    },
    {
        title: "3. Weekly Optimizations That Deliver",
        des: "From ad copy tests to bid strategy tweaks, we optimized daily to keep conversions high and cost per lead low.",
        points: [

        ],
        suffix: "",
    },
];

export default function BikerepairCaseStudySection() {
    const [activeId, setActiveId] = useState('');

    useEffect(() => {
        const handleScroll = () => {
            for (let section of sections) {
                const el = document.getElementById(section.id);
                if (el) {
                    const rect = el.getBoundingClientRect();
                    if (rect.top <= 150 && rect.bottom >= 150) {
                        setActiveId(section.id);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Trigger on load

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);



    return (

        <section className="flex w-full max-w-7xl mx-auto px-6 py-20 space-x-8">
            {/* Sidebar */}


            {/* Content */}
            <div className="w-full md:w-2/3 space-y-12">
                <div id="about" className="scroll-mt-32">
                    <h2 className="text-3xl font-sofiasanscondensed tracking-wide font-bold text-[#670ef7] mb-4">About Eazy Bike Repairs</h2>
                    <p className='text-lg font-poppins'>
                        For over 25 years, Eazy Bike Repairs has been Hyderabad&apos;s go-to mechanic for all things two-wheelers — from scooters to superbikes. Their unique edge? Doorstep bike servicing trusted by 1000s of riders.

                    </p>
                    <p className='text-lg mt-3 font-poppins'>But when digital started driving customer decisions, they struggled to keep up. Their offline reputation wasn&apos;t translating into online leads — and the business began feeling the heat.</p>

                </div>

                <div id="struggle" className="scroll-mt-32">
                    <h2 className="text-3xl font-sofiasanscondensed font-bold text-[#670ef7]">The Struggle</h2>
                    <p className='text-lg font-poppins mb-4 mt-2'>After trying multiple “big name” digital marketing agencies across Madhapur and Gachibowli, they still had:</p>
                    <ul className="list-disc pl-5 space-y-3 text-lg font-poppins">
                        <li>Wasted ad spend</li>
                        <li>Poor quality leads</li>
                        <li>No strategy tailored to their service</li>
                        <li>And eventually… <span className='font-semibold'>a suspended Google Ads account</span></li>

                    </ul>
                </div>

                <section
                    id="strategy"
                    className="scroll-mt-32 py-8 px-0 md:px-0 bg-white relative"
                >
                    <h2 className="text-4xl font-bold text-left text-[#670ef7] mb-2 font-sofiasanscondensed">
                        The Bixeltek Turnaround
                    </h2>
                    <p className='text-base text-black max-w-xl mb-12'>We knew this wasn&apos;t just about fixing ads — it was about reviving a legacy brand. As a <Link href={'/'} className='underline underline-offset-2'>Certified Google Partner Agency</Link>, we stepped in with speed and strategy.</p>

                    <div className="relative border-l-4 border-[#670ef7] ml-1 md:ml-4 space-y-16">
                        {strategySteps.map((step, index) => {


                            return (
                                <div
                                    key={index}
                                    className="relative pl-5 md:pl-10"
                                >
                                    {/* Timeline Dot */}
                                    <div className="absolute -left-[12px] top-1 w-5 h-5 bg-[#670ef7] rounded-full border-4 border-white z-10" />

                                    {/* Step Content */}
                                    <h3 className="text-2xl font-sofiasanscondensed font-semibold mb-1">{step.title}</h3>
                                    <p className='mb-3 max-w-xl'>{step.des}</p>
                                    <ul className="list-disc md:text-lg pl-5 text-gray-700  space-y-1">
                                        {step.points.map((point, i) => (
                                            <li key={i}>{point}</li>
                                        ))}
                                    </ul>
                                    <p className='mt-3 max-w-xl'>{step.suffix}</p>
                                </div>
                            );
                        })}
                    </div>
                </section>

                <div id="results" className="scroll-mt-32">
                    <h2 className="text-3xl font-sofiasanscondensed font-bold text-[#670ef7] mb-4">The Results (In Just 30 Days)</h2>
                    <table className="w-full text-sm md:text-base border border-gray-200">
                        <thead className="bg-black text-white">
                            <tr>
                                <th className="text-left p-3">Metric</th>
                                <th className="text-left p-3">Result</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white">
                            <tr>
                                <td className="p-3">Phone Calls</td>
                                <td className="p-3">
                                <MdKeyboardArrowUp className="text-green-600 inline-block text-xl" /> 340+ quality leads 
                                </td>
                            </tr>
                            <tr className="bg-gray-50">
                                <td className="p-3">Ad Impressions</td>
                                <td className="p-3">
                                <MdKeyboardArrowUp className="text-green-600 inline-block text-xl" /> 19,500+ 
                                </td>
                            </tr>
                            <tr>
                                <td className="p-3">Website Visits</td>
                                <td className="p-3">
                                <MdKeyboardArrowUp className="text-green-600 inline-block text-xl" /> 2,370+ 
                                </td>
                            </tr>
                            <tr className="bg-gray-50">
                                <td className="p-3">Click-Through Rate (CTR)</td>
                                <td className="p-3">
                                <MdKeyboardArrowUp className="text-green-600 inline-block text-xl" /> 14.9% 
                                </td>
                            </tr>
                            <tr>
                                <td className="p-3">Top of Page Rate</td>
                                <td className="p-3">
                                <MdKeyboardArrowUp className="text-green-600 inline-block text-xl" /> 47% 
                                </td>
                            </tr>
                            <tr className="bg-gray-50">
                                <td className="p-3">Impression Share</td>
                                <td className="p-3">
                                <MdKeyboardArrowUp className="text-green-600 inline-block text-xl" /> 38% 
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <p className='mt-4'>The result? A fully booked calendar — especially from premium bike owners who found them directly through <span className='font-semibold'>Google Ads.</span></p>
                </div>

                <div id="client-impact" className="scroll-mt-32">
                    <h2 className="text-3xl font-sofiasanscondensed font-bold  text-[#670ef7] mb-4">What the Client Said</h2>
                    <blockquote className="italic max-w-[90%] mx-auto text-gray-700 text-2xl md:text-3xl md:text-center border-l-4 border-[#670ef7] pl-4">
                        “We wasted months and money with agencies that didn&apos;t get it. Bixeltek knew exactly how to get us back on track. Now our phones don&apos;t stop ringing!”
                        <br /><span className='font-semibold text-lg md:text-2xl'>Team Eazy Bike Repairs</span>
                    </blockquote>
                </div>

                <div id="conclusion" className="scroll-mt-32 pb-10">
                    <h2 className="text-3xl font-bold font-sofiasanscondensed text-[#670ef7] mb-4">The Takeaway</h2>
                    <p className='text-lg font-poppins'>
                        You don&apos;t need “more clicks.” You need <span className='font-semibold'>a performance marketing partner who understands your business and delivers results.</span> That&apos;s what Bixeltek brings to the table.
                    </p>
                    <p className='text-lg font-poppins mt-3'>
                        With 25+ years of experience under their belt, Eazy Bike Repairs just needed the right digital engine to drive growth — and now, they&apos;re running full throttle.
                    </p>
                </div>
                <div id="cta" className="scroll-mt-20 pb-20">
                    <h2 className="text-3xl font-bold font-sofiasanscondensed text-[#670ef7] mb-4"> Want Results Like These? Let&apos;s Build Your Success Story.</h2>
                    <p className='text-lg font-poppins'>
                        At Bixeltek, we&apos;re not just another agency. We&apos;re a Certified Google Partner — trained, backed, and recognized by Google for our expertise in <Link href={'/google-ads-agency-hyderabad'} className='underline underline-offset-2'>Google Ads Management services in India.</Link> 
                    </p>
                    <p className='text-lg font-poppins mt-3'>
                        We help businesses across India turn ad budgets into real-world growth. Whether you’re a local service provider or a scaling startup, our mission is simple: <span className='font-semibold'>Get you more leads, more customers, and more ROI.</span>
                    </p>

                </div>

                {/* <div id="cta" className="scroll-mt-32">
                    <h2 className="text-xl font-bold text-[#670ef7] mb-4">Want Similar Results for Your Business?</h2>
                    <ul className="space-y-2">
                        <li>📞 <strong>Book a Free Strategy Session</strong></li>
                        <li>📧 <a href="mailto:hello@bixeltek.com" className="text-[#670ef7] underline">hello@bixeltek.com</a></li>
                        <li>🌐 <a href="https://www.bixeltek.com" target="_blank" className="text-[#670ef7] underline">www.bixeltek.com</a></li>
                    </ul>
                </div> */}
            </div>
            <aside className="w-1/3 sticky top-32 hidden md:flex justify-center items-center h-max">
                <nav className="space-y-3 border-r-4 flex flex-col items-end border-[#ccc] pr-4">
                    {sections.map(sec => (
                        <a
                            key={sec.id}
                            href={`#${sec.id}`}
                            className={`block text-sm font-medium transition-colors ${activeId === sec.id ? 'text-[#670ef7] font-semibold' : 'text-gray-600 hover:text-black'
                                }`}
                        >
                            {sec.label}
                        </a>
                    ))}
                </nav>
            </aside>
        </section>
    );
}
