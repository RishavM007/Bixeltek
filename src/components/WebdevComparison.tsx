"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Aboutusimage from '@/assets/Mk power_.jpeg';
import Image from "next/image";
import client1 from '@/assets/satisfy-client-img-2.jpg';
import bixtechimg from '@/assets/Bitnexus Full Review - World-renowned Cryptocurrency Company - Live Deposit and Withdraw.jpeg'
import client2 from '@/assets/satisfy-client-img-3.jpg';
import client3 from '@/assets/satisfy-client-img-4.jpg';
import { FiArrowRight, FiExternalLink } from "react-icons/fi";
import client4 from '@/assets/satisfy-client-img-1.jpg';
import Link from "next/link";
import { Users, LayoutDashboard, Workflow } from "lucide-react";

export default function AboutUsSection() {
  const [hovered, setHovered] = useState(false);
  return (
    <section className="w-[85%] mx-auto flex flex-col md:flex-row bg-white text-black py-32 px-6 md:px-20 justify-between gap-10 min-h-[800px]">
      {/* Left Container - 45% */}
      <div className="w-full md:w-[45%] flex flex-row gap-6">
        {/* Left side of Left Container - 40% */}
        <div className="w-[40%] flex flex-col translate-y-[70px] justify-end gap-6 pb-4">
          <div className="flex items-center gap-3">
            <div className="flex -space-x-2">
              {[client1, client2, client3, client4].map((img, idx) => (
                <Image
                  key={idx}
                  src={img}
                  alt={`Client ${idx + 1}`}
                  width={40}
                  height={40}
                  className="rounded-full border-2 border-black object-cover"
                />
              ))}
            </div>
            <span className="text-sm text-[#c77dff] font-bold">15k+</span>
          </div>
          <span className="text-[#c77dff] font-semibold">500+ Happy Customers</span>

          {/* <div className="bg-[#e0aaff] rounded-2xl p-6 text-black flex flex-col gap-3">
            <Image src={client1} alt="founder" className="rounded-full justify-start w-20 h-20 overflow-hidden mx-auto mb-2" />
            <h3 className="text-2xl text-left font-bold font-sofiasanscondensed">Zeeshan Syed</h3>
            <p className="text-base text-left mb-1">CEO & Founder</p>
            <hr className="border-black my-1" />
            <p className="text-sm text-left font-poppins">
              Our Founder leads with passion delivering innovative design services that transform brands into success.
            </p>
            <p className="mt-2 text-left font-signature">Zeeshan Syed</p>
          </div> */}
          <Image src={bixtechimg} alt="bixtech img" className="rounded-2xl"></Image>
        </div>

        {/* Right side of Left Container - 60% */}
        <div className="w-[60%] relative flex items-center justify-center">
          <div className="rounded-3xl overflow-hidden w-full">
            <Image src={Aboutusimage} alt="about us image" className="w-full h-auto object-cover" />
          </div>

          {/* <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
            className="absolute -bottom-6 left-1/2 transform -translate-x-1/2"
          >
            <div className="w-32 h-32 border border-[#c77dff] rounded-full flex items-center justify-center text-sm font-bold text-[#c77dff]">
              EXPLORE MORE * EXPLORE MORE *
            </div>
          </motion.div> */}
        </div>
      </div>

      {/* Right Container - 55% */}
      <div className="w-full md:w-[55%] flex flex-col gap-6">
        <div className="text-sm uppercase font-bold text-[#c77dff] tracking-widest">About Us</div>
        <h2 className="text-5xl font-bold">
          Designing experiences, <span className="text-[#bf47ff]">empowering</span> your brand
        </h2>
        <p className="text-[19px] text-black">
          We specialize in creating innovative designs that captivate audiences. Our mission is to blend creativity with strategy,
          delivering experiences that inspire and empower your business to thrive.
        </p>

        <div className=" text-[#c77dff] p-4 rounded-xl  border-l-4 border-purple-500" style={{
          background: 'linear-gradient(to right, #fff, #fff)',
        }}>
          <span className="text-[22px] font-semibold">
            “Empowering Your Brand Through Creative Design, Crafting Memorable Experiences.”
          </span>
        </div>

        <div className="flex flex-col mt-3 gap-4 md:flex-row justify-between">
          <div className="flex gap-3 items-start">
            <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 42 42" fill="none"><path d="M16.3842 2.5376H1V17.9221H16.3842V2.5376Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M40.2272 40.9995H24.843" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M24.843 25.6155H40.2272" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M24.843 33.3074H40.2272" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M41 17.9229H24.0774L32.5387 1L41 17.9229Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M8.69208 41C12.9403 41 16.3842 37.556 16.3842 33.3077C16.3842 29.0594 12.9403 25.6155 8.69208 25.6155C4.44386 25.6155 1 29.0594 1 33.3077C1 37.556 4.44386 41 8.69208 41Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
            <div className=" flex flex-col gap-3 ml-2">
              <h4 className="text-[22px] font-bold">Design Solutions</h4>
              <p className="text-base text-gray-800">Crafting unique and creative visual experiences.</p>
            </div>
          </div>
          <div className="flex gap-3 items-start">
            <svg xmlns="http://www.w3.org/2000/svg" width="43" height="43" viewBox="0 0 43 43" fill="none"><path d="M38.3528 1.42773H4.50661C2.80727 1.42773 1.42969 2.80532 1.42969 4.50466V38.3508C1.42969 40.0501 2.80727 41.4277 4.50661 41.4277H38.3528C40.0521 41.4277 41.4297 40.0501 41.4297 38.3508V4.50466C41.4297 2.80532 40.0521 1.42773 38.3528 1.42773Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M21.4284 35.2731C27.3761 35.2731 32.1976 30.4515 32.1976 24.5038C32.1976 18.5562 27.3761 13.7346 21.4284 13.7346C15.4807 13.7346 10.6592 18.5562 10.6592 24.5038C10.6592 30.4515 15.4807 35.2731 21.4284 35.2731Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M1.42969 10.6594H10.6605" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M32.1978 10.6594H41.4285" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M21.4285 24.4133V35.1826" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12.199 18.9656L21.4297 24.4117" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M30.6592 18.9656L21.4285 24.4117" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
            <div className=" flex flex-col gap-3 ml-2">
              <h4 className="text-[22px] font-bold">Collaborative Process</h4>
              <p className="text-base text-gray-800">Crafting unique and creative visual experiences.</p>
            </div>
          </div>
        </div>

        <Link href={'/about-us'}>

          <button
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className="bg-[#b45af8] text-white py-3 px-8 text-sm rounded-lg font-semibold w-fit flex justify-between items-center gap-2 transition-all duration-300 hover:bg-[#a24be5] hover:shadow-lg"
          >
            Discover More About Us
            <span className=" relative w-6 h-6 justify-center items-center flex overflow-hidden">
              <AnimatePresence mode="wait">
                {hovered ? (
                  <motion.span
                    key="external"
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    transition={{ duration: 0.3 }}
                    className="absolute rounded-full  p-2 "
                  >
                    <FiExternalLink className="text-lg rounded-full text-white" />
                  </motion.span>
                ) : (
                  <motion.span
                    key="arrow"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    transition={{ duration: 0.3 }}
                    className="absolute rounded-full  p-2 "
                  >
                    <FiArrowRight className="text-lg text-white" />
                  </motion.span>
                )}
              </AnimatePresence>
            </span>
          </button>
        </Link>
      </div>
    </section>
  );
}
