"use client";
import { useEffect, useState } from "react";
import pinkbg from "@/assets/lp_ThemeSettings.webp"
import Image from "next/image";
import bgimage2 from "@/assets/lp_CompareLight.webp"
import bgimage from "@/assets/lp_bannerPatternBg.webp"
import { motion, useInView } from "framer-motion";
import redicon from '@/assets/lp_ReleaseIcon.webp'
import blueicon from '@/assets/lp_TranslateIcon.webp'
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
  const translations = ["Hello Everyone", "హలో అందరికి", "नमस्ते सभी को"];
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
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 p-8 mx-0 md:mx-10">
        {/* Text Carousel Card */}
        <div className="relative  mx-auto p-8 rounded-3xl bg-gradient-to-r from-[#3b0764] to-[#240046] text-white shadow-lg overflow-hidden">
          {/* Background Typography (Blurred Effect) */}
          <div className="absolute inset-0 flex items-center justify-center opacity-20">
            <p className="text-[150px] font-italiana  font-bold uppercase tracking-wider text-white/10">
              FONTSFONTSFONTS
            </p>
          </div>

          {/* Main Content */}
          <div className="relative flex flex-col justify-between  z-10 text-start">
            <h2 className="text-3xl md:text-4xl font-semibold">
              Quality fonts at your fingertips.
            </h2>
            <p className="mt-7 text-white/60">
              Choose from <b>1.7K+ Google Fonts</b>, <b>4.3K+ Adobe Fonts</b> and an
              unlimited number of self-hosted available fonts to be uploaded.
            </p>

            {/* Icons & Font Options */}
            <div className="mt-32 flex justify-center items-center gap-16">
              {/* Google Fonts */}
              <div className="flex flex-col items-start">
                <div className="w-14 h-14 bg-transparent border-2 border-white/60 flex items-center justify-center rounded-full">
                  <Image
                    src="/google-fonts-icon.png"
                    alt="Google Fonts"
                    width={40}
                    height={40}
                  />
                </div>
                <h3 className="mt-3 font-semibold">Google</h3>
                <h3 className="mt-0 font-semibold">Fonts</h3>
                <p className="text-sm text-white/60">1.7K+ fonts</p>
              </div>

              {/* Adobe Fonts */}
              <div className="flex flex-col items-start">
                <div className="w-14 h-14 bg-transparent border-2 border-white/60 flex items-center justify-center rounded-full">
                  <Image
                    src="/adobe-fonts-icon.png"
                    alt="Adobe Fonts"
                    width={40}
                    height={40}
                  />
                </div>
                <h3 className="mt-3 font-semibold">Adobe </h3>
                <h3 className=" font-semibold">Fonts </h3>
                <p className="text-sm text-white/60">4.3K+ fonts</p>
              </div>

              {/* Custom Fonts */}
              <div className="flex flex-col items-start">
                <div className="w-14 h-14 bg-transparent border-2 border-white/60 flex items-center justify-center rounded-full">
                  <Image
                    src="/custom-fonts-icon.png"
                    alt="Custom Fonts"
                    width={40}
                    height={40}
                  />
                </div>
                <h3 className="mt-3 font-semibold">Custom </h3>
                <h3 className=" font-semibold">Fonts </h3>
                <p className="text-sm text-white/60">Unlimited</p>
              </div>
            </div>
          </div>
        </div>


        {/* Responsive Image Card */}
        <motion.div className="p-6 bg-gray-100 flex pr-20 pb-6 flex-col justify-end items-start rounded-2xl">
          <h3 className="text-4xl font-poppins font-semibold">Responsive and retina ready images.</h3>
          <p className="text-gray-600 text-[16px] mt-4">Deliver a perfect website experience with high-resolution images and graphics.</p>
          <div>
            <button className="rounded-lg font-sofiasanscondensed tracking-wider font-bold text-lg hover:bg-white hover:text-black text-white bg-black px-6 py-2 mt-10 transition-all duration-300">
              Learn More
            </button>
          </div>
        </motion.div>


        {/* Updates Card */}
        <motion.div className="p-6 bg-[#ED0D50] text-white rounded-3xl">
          <div className="py-5 border-b border-gray-50/55 mx-2">
            <Image src={redicon} alt="redicon" className="h-16 w-auto"></Image>
          </div>
          <div className="mr-1 md:mr-14">
            <h3 className="text-4xl font-poppins font-semibold mt-5">Reliable and regular updates.</h3>
            <p className="text-[16px] text-white/80 mt-4">Get a life-time consistent and dependable updates featuring innovative new functionalities, performance enhancements, and resolved issues.
            </p>
          </div>
          <div>
            <button className="rounded-lg font-sofiasanscondensed tracking-wider font-bold text-lg bg-white text-black hover:text-white hover:bg-black px-6 py-2 mt-10 md:mt-20 transition-all duration-300">
              Learn More
            </button>
          </div>
        </motion.div>
      </div>


      <div className="grid gap-10 grid-cols-1 lg:grid-cols-2 p-8 mx-0 md:mx-10">

        <div className="relative px-6 h-[650px] w-auto flex  rounded-2xl overflow-hidden bg-white/25">
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center "
            style={{ backgroundImage: `url(${bgimage.src})` }}
          ></div>

          {/* Content */}
          <div className="relative z-10 pt-20 mr-2 md:mr-20">
            <h3 className="text-4xl font-semibold mr-2 md:mr-10">New reworked theme settings panel.</h3>
            <p className="text-gray-700 mt-5">
              Our redesigned theme settings panel offers a fresh and intuitive interface to deliver the best configuration experience.
            </p>
          </div>


          <div className="absolute -bottom-10 -right-20 overflow-hidden">
            <Image
              src={pinkbg}
              alt="pinkBg"
              className="object-cover w-full rounded-xl h-full"
            />
          </div>
        </div>

        {/* Dark Mode Card */}
        <motion.div className="relative px-6 h-[650px] flex  rounded-2xl overflow-hidden bg-white/95">
          {/* Background Image */}

          {/* Content */}
          <div className="relative z-10 pt-10 mr-2 md:mr-20">
            <p className="border border-black text-sm bg-gray-100 text-black py-1 px-5 mb-2 rounded-lg w-fit">Popular</p>
            <h3 className="text-4xl font-semibold mr-0 md:mr-10
            ">New reworked theme settings panel.</h3>
            <p className="text-gray-700 mt-5">
              Our redesigned theme settings panel offers a fresh and intuitive interface to deliver the best configuration experience.
            </p>
          </div>


          <div className="absolute -bottom-10 -right-20 overflow-hidden">
            <Image
              src={bgimage2}
              alt="pinkBg"
              className="object-cover w-full rounded-xl h-full"
            />
          </div>
        </motion.div>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 p-8 mx-10">
        {/* Performance Card with Counters */}
        <motion.div ref={ref} className="p-6 bg-gray-100 rounded-2xl">
          <h3 className="text-4xl font-semibold">Optimized for fast loading.</h3>
          <p className="text-gray-600 text-[16px] mt-4">Ohio is a highly performant WordPress theme with a good structure and well-written source code to make your site fast and SEO optimized.</p>
          <div className="flex items-center gap-6 mt-32">
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
        <motion.div className="p-6 bg-gray-100 flex pr-10 relative pb-6 flex-col overflow-hidden justify-end items-start rounded-2xl">
          <Image src={bluebg} alt="bluebg" className="-top-20 -left-20 absolute rounded-xl"></Image>
          <h3 className="text-4xl font-poppins font-semibold">Simple demo import.</h3>
          <p className="text-gray-600 text-[16px] mt-4">Easy customize your demo setup, choose only the parts you are required for.          </p>
          <div>
          </div>
        </motion.div>


        {/* Translation Card */}
        <motion.div className="p-6  bg-gradient-to-r from-[#3935F5] via-[#4D35F5] to-[#6735F5] text-white rounded-3xl">
          <div className="py-5 border-b border-gray-50/55 mx-2">
            <Image src={blueicon} alt="redicon" className="h-16 w-auto"></Image>
          </div>
          <div className="mr-14">
            <h3 className="text-4xl font-poppins font-semibold mt-5 min-h-[40px]">{text || "\u00A0"}</h3>
            <h3 className="text-4xl font-poppins font-semibold mt-1">translate ready.</h3>
            <p className="text-[16px] text-white/80 mt-4">Use pre-made translations or customize your website for multiple languages.</p>
          </div>
          <div>
            <button className="rounded-lg font-sofiasanscondensed tracking-wider font-bold text-lg bg-white text-black hover:text-white hover:bg-black px-6 py-2 mt-20 transition-all duration-300">
              Learn More
            </button>
          </div>
        </motion.div>
      </div>
      </section>
    </>
  );
};

export default BentoGrid;
