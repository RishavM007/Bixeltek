'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import image1 from '@/assets/wooble.png'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaYoutube, FaSnapchatGhost, FaPinterestP, FaTiktok } from 'react-icons/fa';
import heroimg from '@/assets/hero-img-flat3@2x.webp';

const tabs = [
    {
        key: 'Pay-Per-Click Advertising',
        title: 'Pay-Per-Click Advertising',
        content: (
            <div className='max-w-full flex gap-5'>
                <div className='w-1/3 bg-[#f1f1f1] rounded-xl p-10'>
                    <h2 className='font-sofiasanscondensed text-5xl font-semibold'>PPC Success: 90% Sales Growth</h2>
                    <p className=' font-normal text-xl mt-5'>This case study explores how a fashion retailer achieved a <strong>90% increase</strong> in e-commerce sales through targeted PPC campaigns. By optimizing keywords, refining audience targeting, and using creative A/B testing, the retailer improved ad performance and conversion rates, leading to significant revenue growth.</p>
                    <button className='border-2 border-[#570bd4] rounded-xl px-4 py-3 mt-5 text-lg text-[#570bd4]'>Read full Case Study</button>
                </div>
                <div className='w-1/3 bg-[#FFCE1B] border rounded-xl flex flex-col relative justify-between shadow-md'>
                <Image src={image1} alt='wobble' className='w-full h-full absolute z-10' objectFit='contain'></Image>
                    <p className='text-2xl italic z-20 p-10'>
                        "Thanks to the PPC campaign, our online store saw a <strong>tremendous boost in sales</strong>. The strategy, keyword optimization, and A/B testing made a massive difference. We couldn’t be happier with the results!"
                    </p>
                    <div className='mt-5 flex gap-3 p-10 z-20'>
                        <div>
                            <p className='font-semibold text-xl font-sofiasanscondensed'>Jane Doe</p>
                            <p className='text-sm text-gray-900'>Marketing Manager, Fashion Brand</p>
                        </div>
                    </div>
                </div>
                <div className='w-1/3 border rounded-xl'></div>
            </div>
        ),
    },
    {
        key: 'Social Media Marketing',
        title: 'Social Media Marketing',
        content: (
            <div>
                <h2 className="text-2xl font-bold">Social Media Marketing</h2>
                <p className="mt-2">
                    Learn how House of Malt used WooCommerce to streamline their operations and boost sales.
                </p>
            </div>
        ),
    },
    {
        key: 'SEO Optimization',
        title: "SEO Optimization",
        content: (
            <div>
                <h2 className="text-2xl font-bold">Pay-Per-Click Advertising</h2>
                <p className="mt-2">
                    See how Dan-O's Seasoning created a unique brand experience with WooCommerce.
                </p>
            </div>
        ),
    },
];

export default function HeroSection() {
    const [activeTab, setActiveTab] = useState(tabs[0].key);
    const socialIcons = [
        { icon: <FaFacebookF />, top: "20%", left: "10%", animation: { y: [0, -10, 0] } },
        { icon: <FaTwitter />, top: "30%", left: "80%", animation: { rotate: [0, 360] } },
        { icon: <FaLinkedinIn />, top: "65%", left: "60%", animation: { scale: [1, 1.3, 1] } },
        { icon: <FaInstagram />, top: "70%", left: "20%", animation: { x: [-10, 10, -10] } },
        { icon: <FaYoutube />, top: "17%", left: "50%", animation: { scale: [1, 1.5, 1] } },
        { icon: <FaSnapchatGhost />, top: "85%", left: "50%", animation: { rotate: [0, -360] } },
        { icon: <FaPinterestP />, top: "60%", left: "90%", animation: { y: [0, 15, 0] } },
        { icon: <FaTiktok />, top: "40%", left: "10%", animation: { x: [10, -10, 10] } },
    ];

    return (
        <>
            {/* Hero Section */}
            <section className="px-6 md:px-24 text-center bg-white min-h-[120vh] flex flex-col items-center justify-center relative mt-[-150px] overflow-hidden">
                <div className="max-w-4xl mx-auto relative z-10">
                    <h1 className="text-3xl md:text-6xl font-bold mb-8">
                        Reach more customers with our digital marketing services
                    </h1>
                    <p className="text-lg md:text-xl font-normal mb-12">
                        <strong>Tap into new audiences</strong> and <strong>increase sales</strong> by selling across multiple channels, including popular marketplaces like Amazon, social media platforms like TikTok, and search engines like Google.
                    </p>
                    <a
                        href="#"
                        className="bg-[#670ef7] text-white text-lg font-semibold px-7 py-4 rounded-lg shadow-md hover:bg-[#570bd4] transition"
                    >
                        Get A Quote
                    </a>
                </div>
                {socialIcons.map((item, index) => (
                    <motion.div
                        key={index}
                        className="absolute text-[#670ef7] text-4xl"
                        style={{
                            top: item.top,
                            left: item.left,
                            transform: "translate(-50%, -50%)",
                        }}
                        animate={item.animation}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    >
                        {item.icon}
                    </motion.div>
                ))}
            </section>

            {/* Social Icons Section */}


            {/* Services Section */}
            <section className="bg-white py-12">
                <div className="max-w-full mx-auto px-6">
                    <div className="mb-12 ml-10">
                        <h2 className="text-5xl font-bold text-black mb-4">Drive Real Results with Digital Marketing</h2>
                        <p className="text-xl text-black pr-[30%]">
                            Unlock the power of data-driven strategies to attract, engage, and convert your audience. From tailored campaigns to seamless user experiences, we help brands maximize their online presence, boost engagement, and achieve measurable growth.
                        </p>
                    </div>
                    <nav className="tab-menu__wrapper tab-menu__wrapper--is-style-secondary ml-10">
                        <ul className="tab-menu__tabs flex space-x-4" role="tablist">
                            {tabs.map((tab) => (
                                <li
                                    key={tab.key}
                                    className={`tab-menu__tab ${activeTab === tab.key ? 'tab-menu__tab--active' : ''}`}
                                    role="presentation"
                                >
                                    <button
                                        role="tab"
                                        aria-selected={activeTab === tab.key}
                                        className={`tab-menu__tab-link ${activeTab === tab.key ? 'text-[#570bd4] font-semibold underline decoration-[#570bd4] underline-offset-8' : 'text-gray-600'}`}
                                        onClick={() => setActiveTab(tab.key)}
                                    >
                                        <span className="tab-menu__tab-title">{tab.title}</span>
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </nav>
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5 }}
                        className="mt-10 ml-10"
                    >
                        {tabs.find((tab) => tab.key === activeTab)?.content}
                    </motion.div>
                </div>
            </section>
        </>
    );
}
