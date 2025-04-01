"use client";
import { useEffect, useState } from "react";
import pinkbg from "@/assets/meta ads.webp"
import Image from "next/image";
import Link from "next/link";
import yticon from "@/assets/4375133_logo_youtube_icon.png"
import remarketingicon from "@/assets/business-website.png"
import { FaArrowRightLong } from "react-icons/fa6";
import geotargetingicon from "@/assets/geo-location-white.png"
import bgimage2 from "@/assets/Google Analytics.png"
import bgimage from "@/assets/lp_bannerPatternBg.webp"
import { motion, useInView } from "framer-motion";
import webdevimg from '@/assets/lp_bannerResponsive.webp'
import redicon from '@/assets/lp_ReleaseIcon.webp'
import blueicon from '@/assets/lp_TranslateIcon.webp'
import announcementlogo from '@/assets/12174242_megaphone_advertising_online_shopping_mega_icon.svg'
import bluebg from '@/assets/lp_bannerImport.webp'
import { useRef } from "react";

const useTypingEffect = (translations: string[], typingSpeed = 100, deletingSpeed = 50, pauseTime = 1000) => {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = translations[index];

    if (isDeleting) {
      if (subIndex === 0) {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % translations.length);
      } else {
        setTimeout(() => setSubIndex((prev) => prev - 1), deletingSpeed);
      }
    } else {
      if (subIndex === currentText.length) {
        setTimeout(() => setIsDeleting(true), pauseTime);
      } else {
        setTimeout(() => setSubIndex((prev) => prev + 1), typingSpeed);
      }
    }

    setText(currentText.substring(0, subIndex));
  }, [subIndex, isDeleting, index]);

  return text;
};

const BentoGrid = () => {
  const translations = ["Rank #1 With SEO", "Dominate Google Ads", "Convert More Visitors", "Outperform Competitors", "Maximize Online Leads"];
  const text = useTypingEffect(translations); // Call the hook

  const texts = ["Google Fonts", "Adobe Fonts", "Custom Fonts"];
  const [index, setIndex] = useState(0);
  const [count, setCount] = useState({ speed: 0, size: 0 });

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    // Text Carousel Rotation
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % texts.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Counter Animation
    if (isInView) {
      let speed = 0;
      let size = 0;
      const interval = setInterval(() => {
        speed += 1;
        size += 1;
        if (speed >= 97) speed = 97;
        if (size >= 35) size = 35;
        setCount({ speed, size });
        if (speed === 97 && size === 35) clearInterval(interval);
      }, 20);
      return () => clearInterval(interval);
    }
  }, [isInView]);

  return (
    <>
      <section className="pt-40 pb-20">
        <h2 className="text-6xl font-semibold font-sofiasanscondensed mb-14 text-center text-white">Digital Marketing Services in Hyderabad, India</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 p-8 mx-0 md:mx-10">
          {/* Text Carousel Card */}
          <div className="relative  mx-auto p-8 rounded-3xl bg-gradient-to-r from-[#3b0764] to-[#240046] text-white shadow-lg overflow-hidden">
            {/* Background Typography (Blurred Effect) */}
            <div className="absolute inset-0 flex items-center justify-center opacity-20">
              <p className="text-[150px] font-italiana  font-bold uppercase tracking-wider text-white/10">
                PayPerClick
              </p>
            </div>

            {/* Main Content */}
            <div className="relative flex flex-col justify-between  z-10 text-start">
              <h2 className="text-3xl md:text-3xl font-semibold">
              Google Ads <br />Management Services
              </h2>
              <p className="mt-7 text-white/60">
              Launch and manage high-performing PPC campaigns that bring real leads and measurable results with our certified experts.
              </p>
              <Link href={'/google-ads-agency-hyderabad'} className="mt-5 font-poppins group">Learn More About Google Ads <FaArrowRightLong className="group-hover:translate-x-2 transition-all duration-500 inline" /></Link>

              {/* Icons & Font Options */}
              <div className="mt-32 flex justify-center items-center gap-16">
                {/* Google Fonts */}
                <div className="flex flex-col items-start">
                  <div className="w-14 h-14 bg-transparent border-2 border-white/60 flex items-center justify-center rounded-full">
                    <Image
                      src={yticon}
                      alt="Google Fonts"
                      width={40}
                      height={40}
                    />
                  </div>
                  <h2 className="mt-3 font-semibold">Youtube </h2>
                  <h2 className="mt-0 font-semibold">Ads</h2>
                </div>

                {/* Adobe Fonts */}
                <div className="flex flex-col items-start">
                  <div className="w-14 h-14 bg-transparent border-2 border-white/60 flex items-center justify-center rounded-full">
                    <Image
                      src={remarketingicon}
                      alt="Adobe Fonts"
                      width={40}
                      height={40}
                    />
                  </div>
                  <h2 className="mt-3 font-semibold">Remarketing </h2>
                  <h2 className="mt-0 font-semibold">Ads</h2>
                </div>

                {/* Custom Fonts */}
                <div className="flex flex-col items-start">
                  <div className="w-14 h-14 bg-transparent border-2 border-white/60 flex items-center justify-center rounded-full">
                    <Image
                      src={geotargetingicon}
                      alt="Custom Fonts"
                      width={40}
                      height={40}
                    />
                  </div>
                  <h2 className="mt-3 font-semibold">GE0 </h2>
                  <h2 className=" font-semibold"> Targeting </h2>
                </div>
              </div>
            </div>
          </div>


          {/* Responsive Image Card */}
          <motion.div className="p-6 bg-gray-100 flex pr-10 pb-6  flex-col overflow-hidden justify-end relative items-start rounded-2xl">
            <Image src={webdevimg} alt="webdevimg" className="-top-10 -left-0 absolute rounded-xl"></Image>
            <h2 className="text-3xl font-poppins font-semibold">Website Design </h2>
            <h2 className="text-3xl font-poppins font-semibold"> & Development Services.</h2>
            <p className="text-gray-600 text-[16px] mt-4">We craft beautiful, responsive websites optimized for speed, user experience, and conversions—tailored to your goals.</p>
            <div className="mt-7">
              <Link href={'/web-design-services-hyderabad'} className="rounded-lg  font-sofiasanscondensed tracking-wider font-bold text-lg group text-black ">
              Discover Our Web Design Process <FaArrowRightLong className="group-hover:translate-x-2 transition-all duration-500 inline" />
              </Link>
            </div>
          </motion.div>


          {/* Updates Card */}
          <motion.div className="p-6 bg-[#ED0D50] text-white rounded-3xl">
            <div className="py-5 border-b border-gray-50/55 mx-2">
              <Image src={redicon} alt="redicon" className="h-16 w-auto"></Image>
            </div>
            <div className="mr-1 md:mr-14">
              <h3 className="text-3xl font-poppins font-semibold mt-5">SEO Services to Boost Google Rankings</h3>
              <p className="text-[16px] text-white/80 mt-4">Climb the search rankings and increase traffic with on-page SEO, backlink strategies, and local optimization.</p>
            </div>
            <div className="mt-7">
              <Link href={'#'} className="rounded-lg  font-sofiasanscondensed tracking-wider group font-bold text-lg text-white ">
              See How Our SEO Works <FaArrowRightLong className="group-hover:translate-x-2 transition-all duration-500 inline" />
              </Link>
            </div>
          </motion.div>
        </div>


        <div className="grid gap-10 grid-cols-1 lg:grid-cols-2 p-8 mx-0 md:mx-10">

          <div className="relative px-6 h-[720px] w-auto flex  rounded-2xl overflow-hidden bg-white/25">
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center "
              style={{ backgroundImage: `url(${bgimage.src})` }}
            ></div>

            {/* Content */}
            <div className="relative z-10 pt-20 mr-2 md:mr-20">
              <h3 className="text-4xl font-semibold mr-2 md:mr-10">Social Media Management Services.</h3>
              <p className="text-gray-700 mt-5">
              Grow your brand&apos;s online presence with engaging content, targeted ads, and consistent social media strategies.</p>
              <div className="mt-5">
              <Link href={'#'} className="rounded-lg  font-sofiasanscondensed group tracking-wider group font-bold text-lg text-black ">
              Explore Our Social Media Plans <FaArrowRightLong className="group-hover:translate-x-2 transition-all duration-500 inline" />
              </Link>
            </div>
            </div>
            


            <div className="absolute -bottom-32 -right-0 overflow-hidden">
              <Image
                src={pinkbg}
                alt="pinkBg"
                className="object-cover w-auto rounded-xl h-[600px]"
              />
            </div>
          </div>

          {/* Dark Mode Card */}
          <motion.div className="relative px-6 h-[720px] flex  rounded-2xl overflow-hidden bg-white/95">
            {/* Background Image */}

            {/* Content */}
            <div className="relative z-10 pt-10 mr-2 md:mr-20">
              <p className="border border-black text-sm bg-gray-100 text-black py-1 px-5 mb-2 rounded-lg w-fit">Popular</p>
              <h3 className="text-4xl font-semibold mr-0 md:mr-10
            ">Marketing Analytics & Reporting Services.</h3>
              <p className="text-gray-700 mt-5">
              Understand what&apos;s driving your marketing performance with easy-to-digest reports and real-time tracking.</p>
              <div className="mt-5">
              <Link href={'#'} className="rounded-lg  font-sofiasanscondensed tracking-wider group font-bold text-lg text-black ">
              Learn About Our Reporting Tools <FaArrowRightLong className="group-hover:translate-x-2 transition-all duration-500 inline" />
              </Link>
            </div>
            </div>


            <div className="absolute -bottom-10 -right-60 overflow-hidden">
              <Image
                src={bgimage2}
                alt="pinkBg"
                className="object-cover w-full rounded-xl h-full"
              />
            </div>
          </motion.div>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 p-8 mx-10">



        <motion.div className="p-6 bg-gray-100 flex pr-10 relative pb-6 flex-col overflow-hidden justify-end items-start rounded-2xl">
            <Image src={bluebg} alt="bluebg" className="-top-20 -left-20 absolute rounded-xl"></Image>
            <h3 className="text-3xl font-poppins font-semibold">Conversion Rate Optimization Services</h3>
            <p className="text-gray-600 text-[16px] mt-4">Turn more visitors into customers with A/B testing, funnel analysis, and user behavior insights tailored for growth.</p>
            <div className="mt-3">
              <Link href={'#'} className="rounded-lg  font-sofiasanscondensed tracking-wider font-bold text-lg text-black group">
              Find Out How CRO Helps You <FaArrowRightLong className="group-hover:translate-x-2 transition-all duration-500 inline" />
              </Link>
            </div>
          </motion.div>


          {/* Performance Card with Counters */}
          <motion.div ref={ref} className="p-6 bg-gray-100 rounded-2xl">
            <h3 className="text-4xl font-semibold">Optimized for fast loading.</h3>
            <p className="text-gray-600 text-[16px] mt-4">Ohio is a highly performant WordPress theme with a good structure and well-written source code to make your site fast and SEO optimized.</p>
            <div className="flex items-center gap-6 mt-44">
              <div>
                <motion.span className="text-5xl font-bold text-black">{count.speed}</motion.span>%
                <p className="text-gray-600">PageSpeed score</p>
              </div>
              <div>
                <motion.span className="text-5xl font-bold text-black">{count.size}</motion.span>%
                <p className="text-gray-600">Less CSS & JS files</p>
              </div>
            </div>
          </motion.div>

          {/* Simple Import Card */}



          {/* Translation Card */}
          <motion.div className="p-6  bg-gradient-to-r from-[#3935F5] via-[#4D35F5] to-[#6735F5] text-white rounded-3xl">
            <div className="py-5 border-b border-gray-50/55 mx-2">
              <Image src={blueicon} alt="redicon" className="h-16 w-auto" unoptimized></Image>

            </div>
            <div className="mr-14">
              <h3 className="text-2xl font-poppins font-semibold mt-5 min-h-[40px]">{text || "\u00A0"}</h3>
              <h3 className="text-3xl font-poppins font-semibold mt-1">Ready to Grow Your Business?</h3>
              <p className="text-[16px] text-white/80 mt-4">Stop losing customers to competitors! Boost your online presence with powerful websites, targeted ads, and SEO that delivers.</p>
            </div>
            <div>
              <button className="rounded-lg font-sofiasanscondensed tracking-wider font-bold text-lg bg-white text-black hover:text-white hover:bg-black px-6 py-2 mt-14 transition-all duration-300">
                Get A Quote
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default BentoGrid;
