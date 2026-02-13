import Image from "next/image";
import Link from "next/link";
import React from "react";
import pet from "@/assets/sincerely-media-VNsdEl1gORk-unsplash.jpg";
import school from '@/assets/school.jpg'
import roofing from "@/assets/digital marketing for roofing industries.jpg";
import healthcare from "@/assets/digital marketing for health care practices.jpg";
import lawncare from "@/assets/digital marketing for lawn care services.jpg";
import blackcar from "@/assets/digital marketing for car detailers.jpg";
import oil from "@/assets/digital marketing for oil refinaries.jpg";

const WDIndustries = ({industries}:any) =>{
    return(
        <section className='w-full flex  flex-wrap lg:max-w-[85%] px-6 mx-auto lg:flex-nowrap overflow-y-hidden items-center justify-center py-20 gap-10'>
                {/* Left Content Section */}
                <div className='w-full lg:w-1/2 px-1 md:px-6 py-10 lg:py-14'>
                    <h2 className="text-4xl md:text-5xl font-semibold font-sofiasanscondensed text-black">
                        Building High Converting Websites Across <span className='text-purple-500'>Diverse Industries</span>
                    </h2>
                    <p className="mt-4 text-sm md:text-lg text-gray-900">
                        Our web design expertise spans multiple industries, helping businesses achieve higher conversion rates through stragically designed websites conpatible for SEO, Google Ads and Meta Marketing. From technology and finance to healthcare and retail, we empower brands with actionable insights
                        and cutting-edge digital solutions.
                    </p>
                    <p className="mt-2 text-sm md:text-lg text-gray-900">
                        Explore how our beautifully crafted websites deliver success by increasing engagement rate, by delivering more conversions, leads, sales and brand visibility
                        in a competitive landscape.
                    </p>
                    <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-5">
                        {/* @ts-ignore */}
                        {industries.map((industry, index) => (
                            <div key={index} className="flex items-center text-lg text-black">
                                <span className="text-black text-xl inline-block  mr-3">{industry.icon}</span>
                                <h2 className='font-poppins text-sm'>Web design services for {industry.name}</h2>
                            </div>
                        ))}
                    </div>
                    <div className="flex flex-wrap gap-4 mt-10">
                        <Link href="tel:+919100032301" target="_blank">
                            <button className="px-6 py-3 border border-white bg-black text-white rounded-md hover:bg-white hover:text-black hover:border-black hover:ring-1 transition">
                                Get A Custom Website
                            </button>
                        </Link>

                        <Link href="#form" target="_blank">
                            <button className="px-6 py-3 border-white bg-black text-white  hover:bg-white hover:text-black hover:border-black hover:ring-1 transition rounded-md hover:bg-transparent  hover:border ">
                                Book a Free Consultation
                            </button>
                        </Link>
                    </div>

                </div>
                <div className="flex w-full lg:w-2/5 items-center justify-center gap-4 p-2 md:p-1">
                    <div className='w-1/3 flex flex-col  items-center justify-center gap-3'>
                        <Image src={healthcare} alt='healthcare' className='rounded-xl'></Image>
                        <Image src={oil} alt='oil' className='rounded-xl'></Image>
                    </div>
                    <div className='w-1/3 flex flex-col gap-3'>
                        <Image src={roofing} alt='roofind' className='rounded-xl'></Image>
                        <Image src={pet} alt='pet' className='rounded-xl'></Image>
                        <Image src={school} alt='dental' className='rounded-xl'></Image>
                    </div>
                    <div className='w-1/3 flex flex-col justify-center gap-3'>
                        <Image src={lawncare} alt='lawncare' className='rounded-xl'></Image>
                        <Image src={blackcar} alt='automobiles' className='rounded-xl'></Image>
                    </div>
                </div>
            </section>
    )
}

export default WDIndustries