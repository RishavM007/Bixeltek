'use client';
import tumblewashlogo from "@/assets/TumbleWash-Logo.webp";
import daddysharklogo from "@/assets/daddyshark logo-01.png";
import revita from "@/assets/Revita-Logo-without-background-02-Colored-Font-01.png";
import markham from "@/assets/Logo.png.webp";
import durrat from "@/assets/durrat_logo.png";
import daprbins from "@/assets/DAPrBINS.logo_.jpg";
import oma from "@/assets/OMA-Computer-System-Trading-2-2048x426.webp";
import rooted from '@/assets/Rooted_Logo_new-4-wbg.png'
import {motion} from 'framer-motion'
import anata from '@/assets/Ananta Ananda-01.png'
import Image from 'next/image';

export const LogoTicker = () => {
  return (
    <section className='pb-20 bg-white mt-10 pt-20 flex flex-col gap-20'>

      <div className="w-[90%] md:w-[90%] lg:w-[90%] mx-auto">
        <div className='flex items-center'>
          <div className='flex-1 md:flex-none mr-2 md:mr-5 lg:mr-8'>
          <h2 className='text-black text-sm font-semibold capitalize md:text-2xl tracking-wide'>Trusted by top Companies</h2>
          </div>
          <div className=' flex flex-1 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_20%,black_96%,transparent)]'>
          <motion.div 
          initial = {{translateX : '-50%'}}
          animate = {{translateX : '0'}}
          transition={{
            repeat: Infinity,
            duration: 30,
            ease: 'linear',
          }}
          className="flex flex-none gap-10 justify-center items-center">
            {[
              tumblewashlogo,
              daddysharklogo,
              revita,
              markham,
              durrat,
              daprbins,
              oma,
              rooted,    
              anata,
              tumblewashlogo,
              daddysharklogo,
              revita,
              markham,
              durrat,
              daprbins,
              oma,
              rooted, 
              anata   
            ].map((logo, index) => (
              <div key={index}>
                <Image src={logo} alt={`Company Logo ${index + 1}`} className=' h-10 w-auto object-contain' />
              </div>
            ))}
          </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
