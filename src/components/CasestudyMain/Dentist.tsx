'use client';
import { useEffect, useState } from 'react';
import { MdKeyboardArrowUp } from "react-icons/md";
import { FaTimes } from 'react-icons/fa';
import { MdCall, MdGroups, MdVisibility, MdCheckCircle, MdSecurity } from 'react-icons/md';
import { FaChartLine, FaPuzzlePiece, FaPhoneAlt, FaBolt } from "react-icons/fa"

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
        title: "The Objective",
        des: "The client approached Bixeltek to solve one core problem:",
        points: [
            "'We need to show up when someone searches for treatments we offer — especially the high-value ones.'"
        ],
        suffix: "They wanted more leads, more calls, and more booked appointments — especially for implants, RCTs, and emergency services."
    },
    {
        title: "The Solution: Dental Marketing That Drives Real Growth",
        des: "As a specialized digital marketing agency for dentists, Bixeltek created a strategy focused on:",
        points: [
            "Improving Google visibility for high-intent dental search terms",
            "Attracting patients ready to book (not just website visitors)",
            "Prioritizing phone calls and appointment leads that turn into revenue"
        ],
        suffix: "No gimmicks. No wasted clicks. Just smart digital campaigns built for dental growth.",
    },
];

export default function DentistCaseStudy() {
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
                    <h2 className="text-3xl font-sofiasanscondensed tracking-wide font-bold text-[#670ef7] mb-4">About the Client</h2>
                    <p className='text-lg font-poppins'>
                        A full-service dental clinic in Canada, offering treatments like dental implants, root canals, emergency services, and cosmetic dentistry. The clinic was located in a <span className='font-semibold'>densely competitive area</span>  with numerous nearby clinics bidding for the same audience online.
                    </p>
                    {/* <p className='text-lg mt-3 font-poppins'>But when digital started driving customer decisions, they struggled to keep up. Their offline reputation wasn&apos;t translating into online leads — and the business began feeling the heat.</p> */}

                </div>
                <div id="struggle" className="scroll-mt-32">
                    <h2 className="text-3xl font-sofiasanscondensed font-bold text-[#670ef7]">
                        The Struggle
                    </h2>
                    <p className="text-lg font-poppins mb-4 mt-2">
                        <span className="font-semibold">The Common Challenges Most Dental Clinics Face:</span><br />
                        Whether you&apos;re in India, Canada, or the USA, most dental practices struggle with:
                    </p>
                    <ul className="pl-5 space-y-3 text-lg font-poppins">
                        <li className="flex items-start gap-2">
                            <FaTimes className="text-red-600 mt-1" />
                            Not showing up when potential patients search online
                        </li>
                        <li className="flex items-start gap-2">
                            <FaTimes className="text-red-600 mt-1" />
                            Spending on ads that don’t lead to bookings
                        </li>
                        <li className="flex items-start gap-2">
                            <FaTimes className="text-red-600 mt-1" />
                            Competitors winning top positions on Google Search
                        </li>
                        <li className="flex items-start gap-2">
                            <FaTimes className="text-red-600 mt-1" />
                            Low-quality leads or price-sensitive inquiries
                        </li>
                        <li className="flex items-start gap-2">
                            <FaTimes className="text-red-600 mt-1" />
                            Inconsistent appointment flow, especially for high-ticket treatments
                        </li>
                    </ul>
                    <p className="mt-4 text-lg font-poppins font-semibold">Sound familiar?</p>
                </div>


                <section
                    id="strategy"
                    className="scroll-mt-32 py-8 px-0 md:px-0 bg-white relative"
                >
                    {/* <h2 className="text-4xl font-bold text-left text-[#670ef7] mb-2 font-sofiasanscondensed">
                        The Bixeltek Turnaround
                    </h2>
                    <p className='text-base text-black max-w-xl mb-12'>We knew this wasn&apos;t just about fixing ads — it was about reviving a legacy brand. As a Google Partner Certified agency, we stepped in with speed and strategy.</p> */}

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
                                    <h3 className="text-3xl font-sofiasanscondensed font-semibold mb-1">{step.title}</h3>
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
                    <h2 className="text-3xl font-sofiasanscondensed font-bold text-[#670ef7] mb-4">30-Day Google Ads Results Snapshot (March 18 – April 16, 2025)</h2>
                    <table className="w-full text-sm md:text-base border border-gray-200">
                        <thead className="bg-black text-white">
                            <tr>
                                <th className="text-left p-3">Metric</th>
                                <th className="text-left p-3">Result</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white">
                            <tr>
                                <td className="p-3 flex items-center gap-2">
                                    <MdCall className="text-blue-600 text-xl" />
                                    Phone Calls
                                </td>
                                <td className="p-3">212 phone calls from Google Ads</td>
                            </tr>
                            <tr className="bg-gray-50">
                                <td className="p-3 flex items-center gap-2">
                                    <MdGroups className="text-green-600 text-xl" />
                                    New Patient Leads
                                </td>
                                <td className="p-3">72 new patient leads</td>
                            </tr>
                            <tr>
                                <td className="p-3 flex items-center gap-2">
                                    <MdVisibility className="text-purple-600 text-xl" />
                                    Ad Impressions
                                </td>
                                <td className="p-3">Over 36,000 impressions on search</td>
                            </tr>
                            <tr className="bg-gray-50">
                                <td className="p-3 flex items-center gap-2">
                                    <MdCheckCircle className="text-emerald-600 text-xl" />
                                    Treatment Inquiries
                                </td>
                                <td className="p-3">30+ implant inquiries, 20+ RCT leads, plus general and emergency calls</td>
                            </tr>
                            <tr>
                                <td className="p-3 flex items-center gap-2">
                                    <MdSecurity className="text-red-600 text-xl" />
                                    Invalid Clicks Blocked
                                </td>
                                <td className="p-3">137 invalid clicks blocked (protecting ad budget)</td>
                            </tr>
                        </tbody>
                    </table>

                    <p className='mt-4'>The result? A fully booked calendar — especially from premium bike owners who found them directly through <span className='font-semibold'>Google Ads.</span></p>
                </div>

                <div id="client-impact" className="scroll-mt-32">
                    <h2 className="text-3xl font-sofiasanscondensed font-bold  text-[#670ef7] mb-4">What the Client Said</h2>
                    <blockquote className="italic max-w-[90%] mx-auto text-gray-700 text-2xl md:text-3xl md:text-center border-l-4 border-[#670ef7] pl-4">
                        “The difference was clear — our phones were ringing with the right kind of patients. We started seeing more implant and root canal cases than ever before.”
                        <br /><span className='font-semibold text-lg md:text-2xl'>Team Eazy Bike Repairs (Doubt)</span>
                    </blockquote>
                </div>

                <div id="conclusion" className="scroll-mt-32 pb-10">
                    <h2 className="text-3xl font-bold font-sofiasanscondensed text-[#670ef7] mb-4">The Impact</h2>
                    <p className='text-lg font-poppins'>
                        Patients weren&apos;t just browsing — they were calling and booking. The campaign delivered a <span className='font-semibold'>surge in phone calls</span>, many for <span className='font-semibold'>high-margin procedures.</span>
                    </p>
                    <p className='text-lg font-poppins mt-3'>
                        This translated into real, predictable growth and better use of the clinic&apos;s marketing budget.
                    </p>
                </div>
                <div id="cta" className="scroll-mt-20 pb-20">
                    <h2 className="text-3xl font-bold font-sofiasanscondensed text-[#670ef7] mb-4 flex items-center gap-2">
                        Is Your Dental Clinic Facing the Same Issues?
                    </h2>

                    <ul className="pl-1 space-y-3 text-lg font-poppins mb-6">
                        <li className="flex items-center gap-2">
                            <FaChartLine className="text-[#670ef7]" />
                            Not enough high-value leads?
                        </li>
                        <li className="flex items-center gap-2">
                            <FaPuzzlePiece className="text-[#670ef7]" />
                            Lost in a sea of dental competitors?
                        </li>
                        <li className="flex items-center gap-2">
                            <FaPhoneAlt className="text-[#670ef7]" />
                            Tired of phone calls that never convert?
                        </li>
                    </ul>

                    <h2 className="text-3xl font-bold font-sofiasanscondensed text-[#670ef7] mb-3 flex items-center gap-2">
                        <FaBolt className="text-[#670ef7]" />
                        Let&apos;s Change That.
                    </h2>
                    <p className="text-lg font-poppins mb-6">
                        At Bixeltek, we specialize in Google Ads and SEO for dental clinics across India, Canada, and the United States.<br />
                        Our campaigns don&apos;t just drive traffic — they bring real patients to your chair.
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
