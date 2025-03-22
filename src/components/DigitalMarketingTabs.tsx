'use client';
import React from 'react'
import image1 from '@/assets/IMG_0254.JPEG.jpg'
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState } from 'react';
export default function DigitalMarketingTabs() {

    const tabs = [
        {
            key: 'Pay-Per-Click Advertising',
            title: 'Pay-Per-Click Advertising',
            content: (
                <div className='max-w-full flex flex-col md:flex-row gap-5'>
                    <div className='w-full md:w-1/3 bg-[#f1f1f1] rounded-xl p-10'>
                        <h2 className='font-sofiasanscondensed text-5xl font-semibold'>PPC Success: 90% Sales Growth</h2>
                        <p className=' font-normal text-xl mt-5'>This case study explores how a fashion retailer achieved a <strong>90% increase</strong> in e-commerce sales through targeted PPC campaigns. By optimizing keywords, refining audience targeting, and using creative A/B testing, the retailer improved ad performance and conversion rates, leading to significant revenue growth.</p>
                        <button className='border-2 border-[#570bd4] rounded-xl px-4 py-3 mt-5 text-lg text-[#570bd4]'>Read full Case Study</button>
                    </div>
                    <div className='w-full md:w-1/3 bg-[#FFCE1B] border rounded-xl flex flex-col relative justify-between shadow-md'>
                        <div className='p-10'>
                            <h2 className=' font-sofiasanscondensed text-5xl font-bold mb-3 text-white'>What Our Clients Say</h2>
                            <p className='text-2xl italic z-20 '>
    
                                &quot;Thanks to the PPC campaign, our online store saw a <strong>tremendous boost in sales</strong>. The strategy, keyword optimization, and A/B testing made a massive difference. We couldn&apos;t be happier with the results!&quot;
                            </p>
                        </div>
    
                        <div className='mt-5 flex gap-3 p-10 z-20'>
                            <div>
                                <p className='font-semibold text-xl font-sofiasanscondensed'>Jane Doe</p>
                                <p className='text-sm text-gray-900'>Marketing Manager, Fashion Brand</p>
                            </div>
                        </div>
                    </div>
                    <div className='w-full md:w-1/3 border rounded-xl'>
                        <Image src={image1} alt='image1' className='object-cover w-full h-[50vh] md:h-full rounded-xl'></Image>
                    </div>
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
                        See how Dan-O&apos;s Seasoning created a unique brand experience with WooCommerce.
                    </p>
                </div>
            ),
        },
    ];
    const [activeTab, setActiveTab] = useState(tabs[0].key);
  return (
    
    <section className="bg-white py-16 md:py-12">
                    <div className="max-w-full mx-auto px-6">
                        <div className="mb-12 ml-0 md:ml-10">
                            <h2 className="text-5xl md:text-6xl font-bold font-sofiasanscondensed text-black mb-4">Drive Real Results with Digital Marketing</h2>
                            <p className="text-lg md:text-xl text-black pr-[5%] md:pr-[30%]">
                                Unlock the power of data-driven strategies to attract, engage, and convert your audience. From tailored campaigns to seamless user experiences, we help brands maximize their online presence, boost engagement, and achieve measurable growth.
                            </p>
                        </div>
                        <nav className="tab-menu__wrapper tab-menu__wrapper--is-style-secondary ml-0 md:ml-10">
                            <ul className="tab-menu__tabs flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4" role="tablist">
                                {tabs.map((tab) => (
                                    <li
                                        key={tab.key}
                                        className={`tab-menu__tab  ${activeTab === tab.key ? 'tab-menu__tab--active' : ''}`}
                                        role="presentation"
                                    >
                                        <button
                                            role="tab"
                                            aria-selected={activeTab === tab.key}
                                            className={`tab-menu__tab-link ${activeTab === tab.key ? 'text-[#570bd4] font-semibold md:underline decoration-[#570bd4] underline-offset-8' : 'text-gray-600'}`}
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
                            className="mt-10 ml-0 md:ml-10 flex flex-col md:flex-row"
                        >
                            {tabs.find((tab) => tab.key === activeTab)?.content}
                        </motion.div>
                    </div>
                </section>
  )
}
