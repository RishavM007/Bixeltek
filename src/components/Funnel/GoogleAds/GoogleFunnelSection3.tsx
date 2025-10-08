"use client";
import Image from "next/image";
import bike from "@/assets/bike-repairing-services.jpg";
import laundry from "@/assets/women-selecting-clothes.jpg";
import arb from "@/assets/carpenter-working-sawmill-wood-manufacture.jpg";
import dental from "@/assets/dental-clinics-manitoba-768x431.jpg";
import tumblewashlogo from "@/assets/TumbleWash-Logo.webp";
import revita from "@/assets/Revita-Logo-without-background-02-Colored-Font-01.png";
import markham from "@/assets/Logo.png.webp";
import rooted from '@/assets/Rooted_Logo_new-4-wbg.png'
import { LuArrowUpRight } from "react-icons/lu";
import Link from "next/link";
export default function DataResultsSection() {
    const campaigns = [
        {
            id: "01",
            title: "Bike Repair Workshop Campaign",
            desc: "Eazy Bike Repairs was struggling to get online traction — their ads were running but conversions were flat. We rebuilt their ad funnel from scratch: new targeting layers, re-engaged lost visitors, and designed a landing page that actually converted. Within a month, leads were pouring in and every click was working harder.",
            stats: [
                { label: "Leads in 30 Days", value: "340+" },
                { label: "CTR Growth", value: "2.8x" },
                { label: "CPL Drop", value: "₹96 → ₹42" },
            ],
            img: bike,
            link: "/case-studies/google-ads-case-study-bike-repair-hyderabad"
        },
        {
            id: "02",
            title: "Laundry Brand ROAS Boost",
            desc: "TumbleWash’s campaigns had hit a plateau — great product, but poor audience mapping. We overhauled their ad creatives, refreshed their messaging to focus on convenience, and implemented smart retargeting using first-party data. The result? Ad performance skyrocketed, and their ROI finally matched their ambition.",
            stats: [
                { label: "ROAS", value: "436%" },
                { label: "Conversion Rate", value: "2.2x ↑" },
                { label: "Cost Down", value: "37%" },
            ],
            img: laundry,
            link: "/case-studies/Tumblewash-Casestudy"
        },
        {
            id: "03",
            title: "Rooted Tree Services Growth",
            desc: "For Rooted Tree Services in Toronto, the challenge was seasonality — business dipped hard every winter. We restructured their bidding strategy to focus on high-intent queries and geo zones, creating always-on campaigns that kept calls coming in year-round. Growth wasn’t luck — it was data in motion.",
            stats: [
                { label: "Conversions", value: "3x ↑" },
                { label: "CTR", value: "+61%" },
                { label: "CPA Reduced", value: "40%" },
            ],
            img: arb,
            link: "#",
        },
        {
            id: "04",
            title: "Dental Clinics Expansion",
            desc: "We worked with a network of dental clinics across Canada to scale their local outreach. Using AI-driven creatives, geo-targeted bidding, and call-based conversion tracking, we helped clinics dominate their neighborhoods while keeping ad spend lean and efficient. Every appointment booked was proof that strategy beats spend.",
            stats: [
                { label: "Lower CPC", value: "22%" },
                { label: "More Leads", value: "68%" },
                { label: "ROI in 45 Days", value: "1.9x" },
            ],
            img: dental,
            link: "/case-studies/digital-marketing-for-dentists-case-study",
        },
    ];

    return (
        <section className="bg-black text-white py-10 md:py-24">
            <div className="w-[87%] mx-auto px-4">
                {/* Section Heading */}
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-6xl font-bold mb-4">
                        Here’s What Happens When <br /> <span className="text-blue-500"> Data Meets Expertise</span>
                    </h2>
                    <p className="text-gray-200 max-w-4xl text-lg mx-auto">
                        Our clients don’t get lucky — they get results. Every number below comes
                        from campaigns we’ve built, optimized, or scaled with precision.
                    </p>
                </div>

                {/* Case Studies */}
                <div className="flex flex-col gap-16">
                    {campaigns.map((item) => (
                        <div
                            key={item.id}
                            className="flex flex-col md:flex-row items-center gap-12"
                        >
                            {/* Image Section */}
                            <div className="w-full md:w-1/3 rounded-2xl overflow-hidden shadow-2xl">
                                <Image
                                    src={item.img}
                                    alt={item.title}
                                    width={700}
                                    height={450}
                                    className="object-cover w-full h-full rounded-2xl"
                                />
                            </div>

                            {/* Text Section */}
                            <div className="w-full md:w-2/3">
                                <h3 className="text-4xl font-semibold mb-4">{item.title}</h3>
                                <p className="text-gray-200 font-inter mb-6 leading-relaxed text-lg">
                                    {item.desc}
                                </p>

                                <div className="flex justify-between gap-10 w-[80%] mb-6">
                                    {item.stats.map((stat, idx) => (
                                        <div key={idx}>
                                            <p className="text-2xl font-semibold font-poppins mb-1 text-white">{stat.value}</p>
                                            <p className="text-gray-300 font-poppins text-sm">{stat.label}</p>
                                        </div>
                                    ))}
                                </div>

                                <Link
                                    href={item.link}
                                    className="text-blue-500 text-base font-medium hover:underline inline-flex items-center justify-center gap-1"
                                >
                                    Read More <LuArrowUpRight className="text-lg" />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Client Logos */}
                <div className="mt-24 text-center">
                    <p className="text-gray-200 uppercase text-base font-bold font-inter tracking-wide mb-6">
                        Trusted by
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-4 place-items-center gap-8 md:gap-2 text-gray-300 text-lg">
                        {[revita, markham, rooted, tumblewashlogo].map((logo, i) => (
                            <Image
                                key={i}
                                src={logo}
                                alt="client logo"
                                className="h-10 w-auto object-contain  hover:opacity-100 transition"
                            />
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}
