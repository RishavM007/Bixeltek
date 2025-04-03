'use client';
import acmeLogo from '@/assets/logo-acme.png';
import apexLogo from '@/assets/logo-apex.png';
import celestialLogo from '@/assets/logo-celestial.png';
import quantumLogo from '@/assets/logo-quantum.png';
import pulseLogo from '@/assets/logo-pulse.png';
import echoLogo from '@/assets/logo-echo.png';
import {motion} from 'framer-motion'
import Image from 'next/image';

export const LogoTicker = () => {
  return (
    <section className='pb-20  mt-10 md:mt-[-50px] lg:mt-[90px] flex flex-col gap-20'>

      <div className="w-[90%] md:w-[90%] lg:w-[90%] mx-auto">
        <div className='flex items-center'>
          <div className='flex-1 md:flex-none mr-2 md:mr-5 lg:mr-8'>
          <h2 className='text-white text-sm md:text-xl tracking-wide'>Trusted by top Companies</h2>
          </div>
          <div className=' flex flex-1 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]'>
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
              acmeLogo,
              apexLogo,
              celestialLogo,
              quantumLogo,
              pulseLogo,
              echoLogo,
              acmeLogo,
              apexLogo,
              celestialLogo,
              quantumLogo,
              pulseLogo,
              echoLogo,     
            ].map((logo, index) => (
              <div key={index}>
                <Image src={logo} alt={`Company Logo ${index + 1}`} className=' h-6 w-auto object-contain' />
              </div>
            ))}
          </motion.div>
          </div>
        </div>
      </div>


      <div className="w-[90%]  md:w-[90%] lg:w-[90%] mx-auto">
        <div className='flex items-center'>

          <div className=' flex flex-1 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]'>
          <motion.div 
          initial = {{translateX : '0'}}
          animate = {{translateX : '-50%'}}
          transition={{
            repeat: Infinity,
            duration: 30,
            ease: 'linear',
          }}
          className="flex flex-none gap-10 justify-center items-center">
            {[
              acmeLogo,
              apexLogo,
              celestialLogo,
              quantumLogo,
              pulseLogo,
              echoLogo,
              acmeLogo,
              apexLogo,
              celestialLogo,
              quantumLogo,
              pulseLogo,
              echoLogo,     
            ].map((logo, index) => (
              <div key={index}>
                <Image src={logo} alt={`Company Logo ${index + 1}`} className=' h-6 w-auto object-contain' />
              </div>
            ))}
          </motion.div>
          </div>
          <div className='flex-1 md:flex-none'>
          <h2 className='text-white text-sm md:text-xl tracking-wide text-right'>Technologies we use</h2>
          </div>
        </div>
      </div>
    </section>
  );
};
