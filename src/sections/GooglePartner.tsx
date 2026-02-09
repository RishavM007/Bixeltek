'use client';
import React from 'react';
import { motion } from 'framer-motion';

export default function GooglePartner() {
  return (
    <>
     
      <div className=" bg-white">
        <section className="w-[90%] mx-auto flex relative flex-col lg:flex-row items-center justify-evenly text-black px-2 lg:px-40 py-20">
          {/* <motion.div
            className="absolute w-2 sm:w-3 md:w-2 h-[33px] bg-[#4285F4] top-0 right-0 origin-top"
            animate={{ scaleY: [0, 10, 0] }}
            transition={{
              duration: 8,
              repeat: Infinity,
              repeatType: 'loop',
              ease: 'easeInOut',
              delay: 4,
            }}
          />

         
          <motion.div
            className="absolute top-0 left-0 origin-left h-[6px] bg-[#EA4335]"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: [0, 1, 0] }}
            transition={{
              duration: 8,
              repeat: Infinity,
              repeatType: 'loop',
              ease: 'easeInOut',
              delay: 0,
            }}
            style={{ width: '100%' }}
          />

        
          <motion.div
            className="absolute left-0 bottom-0 w-2 origin-bottom bg-[#34A853]"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: [0, 1, 0] }}
            transition={{
              duration: 8,
              repeat: Infinity,
              repeatType: 'loop',
              ease: 'easeInOut',
              delay: 12,
            }}
            style={{ height: '100%' }}
          />

          
          <motion.div
            className="absolute bottom-0 left-0 origin-right h-[6px] bg-[#FBBC05]"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: [0, 1, 0] }}
            transition={{
              duration: 8,
              repeat: Infinity,
              repeatType: 'loop',
              ease: 'easeInOut',
              delay: 8,
            }}
            style={{ width: '100%' }}
          /> */}

          <div className="w-full lg:w-2/3 mb-6 md:mb-0 text-center md:text-left">
            <h2 className="text-3xl md:text-5xl font-semibold mb-4">
              &quot;Proud to Be a {' '}
              <span className="text-blue-500">G</span>
              <span className="text-red-500">o</span>
              <span className="text-yellow-500">o</span>
              <span className="text-blue-500">g</span>
              <span className="text-green-500">l</span>
              <span className="text-red-500">e</span> Partner Agency&quot;
            </h2>
            <h3 className='sm:text-xl md:text-xl font-semibold max-w-6xl font-inter leading-relaxed'>
                Our Google Partner badge isn’t just for show — it’s proof of our certified expertise, advanced skills, and consistent success in Google Ads and digital marketing.
            </h3>
            <p className="text-sm my-5 md:text-base font-light font-poppins leading-relaxed">
              When you work with us, you’re partnering with a vetted agency trusted by Google to deliver high-performing campaigns, measurable ROI, and strategies that take your business to the next level.
            </p>
          </div>

          <div className="w-full items-center md:w-1/3 flex justify-center md:justify-end">
            <a
              href="https://www.google.com/partners/agency?id=2188074075"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://www.gstatic.com/partners/badge/images/2024/PartnerBadgeClickable.svg"
                alt="Google Partners Badge"
                className="w-72"
              />
            </a>
          </div>
        </section>
      </div>
    </>
  );
}
