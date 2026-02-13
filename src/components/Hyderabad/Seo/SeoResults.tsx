import Image from "next/image";
import Link from "next/link";
import React from "react";
import pet from "@/assets/sincerely-media-VNsdEl1gORk-unsplash.jpg";
import school from '@/assets/school.jpg'
import roofing from "@/assets/digital marketing for roofing industries.jpg";
import lawncare from "@/assets/digital marketing for lawn care services.jpg";
import blackcar from "@/assets/digital marketing for car detailers.jpg";
import healthcare from "@/assets/digital marketing for health care practices.jpg";
import oil from "@/assets/digital marketing for oil refinaries.jpg";

const SeoResults = ({industries}:any) =>{
    return(
        <section className='w-full flex flex-wrap max-w-[90%] mx-auto lg:flex-nowrap overflow-y-hidden items-center'>
                {/* Left Content Section */}
                <div className='w-full lg:w-1/2 px-6 py-10 lg:py-14'>
                    <h2 className="text-4xl md:text-5xl font-semibold  font-sofiasanscondensed text-white">
                        Proven Results Across <span className='text-purple-500'>Diverse Industries</span>
                    </h2>
                    <p className="mt-4 text-[16px] md:text-lg text-gray-300">
                        Our expertise spans multiple industries, helping businesses achieve growth through data-driven strategies and
                        innovative solutions. From technology and finance to healthcare and retail, we empower brands with actionable insights
                        and cutting-edge digital solutions.
                    </p>
                    <p className="mt-2 text-[16px] md:text-lg text-gray-300">
                        Explore how our tailored approach delivers measurable success, increasing engagement, conversions, and brand visibility
                        in a competitive landscape.
                    </p>
                    <div className="mt-6 grid grid-cols-2 md:grid-cols-2 gap-5">
                        {/* @ts-ignore */}
                        {industries.map((industry, index) => (
                            <div key={index} className="flex items-center text-lg text-white">
                                <span className="text-white text-xl inline-block  mr-3">{industry.icon}</span>
                                <h2 className='font-poppins text-xs md:text-sm'>SEO for {industry.name}</h2>
                            </div>
                        ))}
                    </div>
                    <Link href={'/industries'}>
                        <button className=" mt-6 md:mt-8 px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg shadow hover:bg-purple-700">
                            Learn More
                        </button>
                    </Link>
                </div>

                <div className="flex w-full lg:w-1/2 justify-center gap-4 p-1">
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

export default SeoResults