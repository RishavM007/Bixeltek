"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

import funnelImg from "@/assets/SocialSaudi.jpg";
import contentImg from "@/assets/benefits-all-in-one-marketing-analytics-dashboard.webp";
import adsImg from "@/assets/SAAS Startup - Instagram post.jpg";
import communityImg from "@/assets/Eyeball_ The New App for the Financial Community.jpg";
import trackingImg from "@/assets/Across_Google_channels.width-500.format-webp.webp";

export default function SocialMediaCards() {
    const cards = [
        {
            id: 1,
            title: "Full Funnel Strategy",
            desc: "From awareness to retargeting, we align your social ads with Google and SEO campaigns to maximize conversions across every touchpoint.",
            img: funnelImg,
            btnText: "Plan Your Funnel Strategy",
        },
        {
            id: 2,
            title: "Content Planning & Creation",
            desc: "We craft storytelling-driven content that resonates with your audience’s intent and captures their attention consistently.",
            img: contentImg,
            btnText: "Get Content That Converts",
        },
        {
            id: 3,
            title: "Paid Ad Campaigns",
            desc: "Smart targeting and highly optimized creatives on Meta, Instagram, and LinkedIn deliver maximum CTR while minimizing CPA.",
            img: adsImg,
            btnText: "Launch Paid Ad Campaigns",
        },
        {
            id: 4,
            title: "Community Engagement",
            desc: "We build trust and long-term retention by actively engaging your audience through meaningful responses and conversations.",
            img: communityImg,
            btnText: "Boost Community Engagement",
        },
        {
            id: 5,
            title: "Performance Tracking",
            desc: "Real-time dashboards provide insights into what’s driving results and what’s wasting your ad spend, so you can scale efficiently.",
            img: trackingImg,
            btnText: "Track Performance in Real-Time",
        },
    ];

    return (
        <section className=" px-6 py-16 bg-black flex flex-col items-center">
            <div className="md:max-w-[80%] text-center mb-12">
                <h2 className="text-3xl md:text-6xl font-inter font-medium text-white mb-6 leading-snug">
                    <span className="text-yellow-500">We Combine Creativity</span> With Conversion Science.
                </h2>
                <p className="text-gray-300 font-poppins text-lg md:text-xl leading-relaxed">
                    Social media marketing isn’t about chasing likes — it’s about building brand momentum that drives measurable growth.
                    At Bixeltek, we build systems that blend creativity, psychology, and analytics — so your brand connects, converts, and compounds over time. Our approach includes:
                </p>
            </div>

            <div className="grid md:grid-cols-2 lg:flex lg:max-w-[85%] lg:flex-wrap justify-center gap-8 w-full">
                {cards.map((card) => (
                    <div
                        key={card.id}
                        className="bg-white px-6 py-6 rounded-3xl overflow-hidden shadow-lg flex flex-col items-center w-full lg:w-[25%] transition-transform hover:scale-105"
                    >
                        <div className="w-full h-48 relative">
                            <Image
                                src={card.img}
                                alt={card.title}
                                className="object-cover rounded-2xl w-full h-full"
                            />
                        </div>
                        <div className="p-6 text-center">
                            <h3 className="text-2xl font-medium text-black mb-3">{card.title}</h3>
                            <p className="text-gray-900 text-sm md:text-base">{card.desc}</p>
                        </div>
                        <Link href={"#form"}>
                            <button className="px-7 py-3 rounded-xl bg-gradient-to-tr from-green-500 via-green-700 to-green-900 hover:bg-gradient-to-tr hover:from-green-900 hover:via-green-800 hover:to-green-500 text-white font-semibold text-sm shadow-lg transition">
                                {card.btnText}
                            </button>
                        </Link>
                    </div>
                ))}
            </div>
        </section>
    );
}
