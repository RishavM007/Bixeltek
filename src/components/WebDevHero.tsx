'use client';
import React from 'react'
import bgImage from '@/assets/background-1.png';
import RightIcon from '@/assets/sub-title-right.png';
import LeftIcon from '@/assets/sub-title-left.png';
import BannerImage from '@/assets/framer-hero-elementor-1536x907.jpg';
import PhoneBanner from '@/assets/photo-banner.jpg';
import TypographyFrame from '@/assets/photo-topo.jpg';
import { RiArrowRightSLine } from "react-icons/ri";
import Image from 'next/image';

export default function WebDevHero() {

  return (
    <>
      <div
        className="relative -mt-32 h-max bg-cover bg-center flex flex-col items-center bg-[url('/aesthetic-background-with-gradient-neon-led-light-effect.jpg')]" 
      >
        <div className="absolute bottom-0 left-0 w-full z-30 h-52 bg-gradient-to-t from-black to-transparent"></div>
        <div className='flex flex-col items-center pt-20'>
          <div className="flex items-center justify-center gap-3 bg-opacity-80 px-6 py-4 rounded-lg">

            <Image src={LeftIcon} alt="Left Icon" width={100} height={80} />
            {/* Center Heading */}
            <h2 className="text-xl font-semibold text-center text-[#959efe] flex-1">
              A.I Driven
            </h2>

            <Image src={RightIcon} alt="right Icon" width={100} height={80} />
          </div>
          <div className='flex flex-col items-center justify-center'>
            <h1 className='flex text-[#ffffff] font-poppins font-semibold text-[54px] items-center' >
              We Build Websites That Do More <br />Than Look Good — They Perform.
            </h1>
            <p className='text-center text-[18px] tracking-wide font-poppins text-[#cac9d1]'> Work With the Best Web Design and Development Company in Hyderabad That Builds to Convert.</p>
            <div className="mt-8 flex flex-col md:flex-row gap-1 ">

            <a
              href="tel:‪+919100032301‬"
              className=" px-2 lg:px-8 py-3 w-fit text-sm md:text-base font-semibold border bg-white text-purple-900 border-white rounded-full hover:bg-white hover:text-black transition"
            >
              Book a 1:1 Strategy Call
            </a>
            <button
              className="w-[60%] md:w-auto px-1 lg:px-8 py-3 text-sm md:text-base font-semibold text-white group  rounded-full "
            >
              Get a Free Website Audit <RiArrowRightSLine className="inline-block text-xl  group-hover:translate-x-2  transition duration-300 ml-1 mb-[3px]" />
            </button>
          </div>
          </div>
          <div className='relative flex flex-row mt-10 w-full'>
            <div className='absolute left-[-200px] top-44 shadow-[rgba(50,50,_93,_0.25)_0px_13px_27px-5px,rgba(0,_0,_0,_0.3)_0px_8px_16px-8px]'>
              <img src={TypographyFrame.src} alt="typographyFrame" width={300} height={60} className='rounded-[14px] z-10' />
            </div>
            <div>
              <img src={BannerImage.src} alt="banner" width={1000} height={50} className=' rounded-[14px]' />
            </div>
            <div className='absolute -right-28 top-24' >
              <img src={PhoneBanner.src} alt="phonebanner" width={200} height={50} />
            </div>
          </div>
          

        </div>
      </div>
    </>
  )
}