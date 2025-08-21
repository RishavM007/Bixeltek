import React from 'react'
import heroimg from '@/assets/tumblewash.jpg'
import TumbleWashCaseStudySection from '@/components/CasestudyMain/Tumblewash'

export default function Tumblewash() {
  return (
    <>
        <section className="h-[70vh] md:h-[85vh] w-full mx-auto bg-cover bg-center relative" style={{ backgroundImage: `url(${heroimg.src})` }}>
            <div className="absolute inset-0 bg-black opacity-60"></div>
            <div className="relative z-10 flex flex-col items-start pl-5 pr-5 md:pr-0 md:pl-20 md:max-w-[70%] font-sofiasanscondensed justify-center h-full">
              <p className='text-left text-white font-poppins uppercase mb-5'>Case Study</p>
            <h1 className="text-white text-3xl md:text-6xl font-bold">Local Laundry Brand Achieve 436% ROAS and 477+ Monthly Phone Calls — All on Half the Budget</h1>
            </div>
        </section>
        <section>
          <TumbleWashCaseStudySection />
        </section>
    </>
  )
}
