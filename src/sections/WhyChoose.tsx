'use client';
import React from 'react';
import {
    BadgeCheck,
    BarChart2,
    Rocket,
    Handshake,
    Globe,
    Layers,
} from 'lucide-react';
import Image from 'next/image';
import { motion } from "framer-motion";
import Link from 'next/link';
import client from '@/assets/Logo-300x79.png.webp'

const points = [
    {
        icon: <BadgeCheck className="w-6 h-6 text-white" />,
        title: 'Certified & Skilled Experts',
        desc: "Our team is certified by Google, Meta, and HubSpot — and we stay ahead by constantly updating our skills to deliver performance-focused results.",
    },
    {
        icon: <BarChart2 className="w-6 h-6 text-white" />,
        title: 'Transparent & Data-Driven',
        desc: "Clear, real-time reporting ensures you're always in control — with insights that actually mean something.",
    },
    {
        icon: <Rocket className="w-6 h-6 text-white" />,
        title: 'Trendsetters in Digital Marketing',
        desc: "We don’t follow trends — we implement what works before your competitors even hear about it.",
    },
    {
        icon: <Handshake className="w-6 h-6 text-white" />,
        title: 'Client Success Focused',
        desc: "We adapt strategies dynamically as your business evolves — because static plans don’t win.",
    },
    {
        icon: <Globe className="w-6 h-6 text-white" />,
        title: 'Built for Global Markets',
        desc: "From Toronto to Khobar, our systems scale across borders and buyer behaviors.",
    },
    {
        icon: <Layers className="w-6 h-6 text-white" />,
        title: 'All-in-One Execution',
        desc: "One agency. One team. SEO, ads, web, design — fully integrated for faster growth.",
    },
];

export default function WhyChoose() {
    return (
        <>

            <section className="pt-20 pb-64 relative bg-neutral-900" style={{
                backgroundImage: `
      linear-gradient(rgba(0,0,0,0.9), rgba(0,0,0,0.95)),
      url('/SL-072622-51930-14.jpg')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}>

                <div className=" max-w-[90%] md:max-w-[85%] z-30 mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-start">
                    {/* Left Side */}
                    <div className=''>
                        <span className="block z-50  mb-6 text-white text-sm font-semibold text-primary">
                            WHY CHOOSE US
                        </span>
                        <h2 className="text-3xl z-30  md:text-6xl font-inter font-medium leading-tight text-gray-50 mb-4">
                            We’re Not Just Another Agency.<span className='text-purple-400'>We’re Built for Performance.</span>
                        </h2>
                        <p className="text-gray-200 text-lg">
                            Choosing Bixeltek means choosing results, transparency, and a team that acts like your in-house marketing department. We’re lean, certified, and fully invested in helping you grow — fast and sustainably.
                        </p>
                        <a href="/contact-us" className="box-border mt-10 relative z-30 inline-flex items-center justify-center w-auto px-8 py-3 overflow-hidden font-bold text-white transition-all duration-300 bg-purple-600 rounded-full cursor-pointer group ring-offset-2 ring-1 ring-purple-900 ring-offset-purple-200 hover:ring-offset-purple-500 ease focus:outline-none">
                            <span className="absolute bottom-0 right-0 w-8 h-20 -mb-8 -mr-5 transition-all duration-300 ease-out transform rotate-45 translate-x-1 bg-purple-400 opacity-10 group-hover:translate-x-0"></span>
                            <span className="absolute top-0 left-0 w-20 h-8 -mt-1 -ml-12 transition-all duration-300 ease-out transform -rotate-45 -translate-x-1 bg-purple-500 opacity-10 group-hover:translate-x-0"></span>
                            <span className="relative z-20 flex items-center text-sm">
                                <svg className="relative w-5 h-5 mr-2 capitalize text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                                Start your success story with us
                            </span>
                        </a>

                    </div>

                    {/* Right Side */}
                    <div className="grid sm:grid-cols-1 gap-6">
                        {points.map((item, index) => (
                            <motion.div
                                key={index}
                                className="rounded-xl p-[1px] transition-transform duration-300 ease-in-out overflow-hidden"
                                style={{
                                    backgroundImage: 'linear-gradient(to right, #fa709a 0%, #fee140 100%)',
                                    backgroundOrigin: 'border-box',
                                    backgroundClip: 'border-box',
                                }}
                                onMouseEnter={e => {
                                    e.currentTarget.style.transform = 'scale(1.01)';
                                }}
                                onMouseLeave={e => {
                                    e.currentTarget.style.transform = 'scale(1)';
                                }}
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.5, delay: index * 0.2, ease: "easeOut" }}
                            >
                                <div
                                    className="flex items-start gap-4 rounded-xl p-6"
                                    style={{
                                        background: 'linear-gradient(to bottom right, #2a2a2a 1%, #000000 95%)',
                                    }}
                                >
                                    <div className="flex-shrink-0 bg-purple-700 p-3 rounded-full">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h4 className="text-white text-lg font-semibold mb-1">{item.title}</h4>
                                        <p className="text-gray-50 text-sm">{item.desc}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
            <section className="relative mt-[-170px] max-w-[100%] md:max-w-6xl mx-auto rounded-3xl overflow-hidden bg-white bg-cover shadow-2xl bg-center" style={{ backgroundImage: `url('/alex-kotliarskyi-QBpZGqEMsKg-unsplash.jpg')` }}>
                {/* Overlay */}


                {/* Content */}
                <div className="relative z-10 w-full max-w-[90%] md:max-w-7xl mx-auto px-6 py-16 flex flex-col md:flex-row items-center justify-evenly gap-10 overflow-hidden">

                    {/* Overlays — full height split background */}
                    <div className="absolute inset-0 flex">
                        <div className="w-0 md:w-3/5 bg-blue-800 bg-opacity-90 h-full"></div>
                        <div className="w-full md:w-2/5 bg-white  h-full"></div>
                    </div>

                    {/* Left Content */}
                    <div className="relative z-10 text-black md:text-white flex flex-col sm:items-center md:items-start md:max-w-2xl px-4">
                        <h2 className="text-3xl md:text-4xl sm:text-center md:text-left font-inter font-medium mb-6 leading-tight">
                            &quot;We’ve grown our revenue 3X since working with Bixeltek. They own the outcome like it’s theirs.&quot;
                        </h2>
                    </div>

                    {/* Right Content */}
                    <div className="relative z-10 flex flex-col items-center text-center">
                        <Link href={'https://demo.bixeltek.com/mgd/'} target="_blank">
                            <div className="rounded-md h-[100px] w-auto overflow-hidden mb-4">
                                <Image
                                    src={client}
                                    alt="Markham Gateway Dentistry"
                                    className="object-contain w-full h-full"
                                />
                            </div>
                        </Link>

                        <p className="text-black font-semibold text-lg">Markham Gateway Dentistry</p>
                        <p className="text-gray-600 text-sm">Canada</p>
                    </div>

                </div>

            </section>
        </>
    );
}
