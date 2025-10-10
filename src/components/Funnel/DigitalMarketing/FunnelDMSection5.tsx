import React from 'react'
import heroimgdm from '@/assets/atikah-akhtar-XJptUS8nbhs-unsplash.jpg'
import heroimgbike from '@/assets/angry-_-kat-4ORysIjH-mY-unsplash.jpg'
import laungry from '@/assets/Denver-Commercial-Laundry-with-Free-Delivery-97beb6c9.jpeg'
import Image from 'next/image'

export default function FunnelDMCase() {
  return (
   <>
   <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-20 mt-0 mx-auto">
                <div className="max-w-6xl mx-auto text-center mb-10 lg:mb-14">
                    <h2 className="text-4xl text-white font-bold md:text-6xl font-inter md:leading-tight">
                        We Don’t Talk About “Leads.” <span className='text-blue-500'> <br /> We Talk About Real Business Growth. </span>
                    </h2>
                    <p className="mt-1 text-gray-50 max-w-4xl text-lg mx-auto">
                         Every number here comes from audited data — not projections or screenshots.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                    <a className="group flex flex-col focus:outline-hidden" href="/case-studies/digital-marketing-for-dentists-case-study">
                        <div className="relative pt-[50%] sm:pt-[70%] rounded-xl overflow-hidden">
                            <Image src={heroimgdm} alt='dm blog' className="size-full absolute top-0 start-0 object-cover group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out rounded-xl" />
                            <span className="absolute top-0 end-0 rounded-se-xl rounded-es-xl text-xs font-medium bg-purple-800 text-white py-1.5 px-3">
                                Must Read
                            </span>
                        </div>

                        <div className="mt-7">
                            <h3 className="text-xl font-semibold text-gray-100 group-hover:text-gray-50">
                                Digital Marketing for Dentists — 200+ Patient Leads in 30 Days
                            </h3>
                            <p className="mt-3 text-gray-100">
                                How Bixeltek Helped a Dental Clinic Dominate Google Search and Attract High-Value Patients
                            </p>
                            <p className="mt-5 inline-flex items-center gap-x-1 text-sm text-blue-600 decoration-2 group-hover:underline group-focus:underline font-medium">
                                Read more
                                <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                            </p>
                        </div>
                    </a>

                    <a className="group flex flex-col focus:outline-hidden" href="/case-studies/google-ads-case-study-bike-repair-hyderabad">
                        <div className="relative pt-[50%] sm:pt-[70%] rounded-xl overflow-hidden">
                            <Image src={heroimgbike} alt='dm blog' className="size-full absolute top-0 start-0 object-cover group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out rounded-xl" />
                        </div>

                        <div className="mt-7">
                            <h3 className="text-xl font-semibold text-gray-100 group-hover:text-gray-50">
                                340+ Leads in 30 Days for Hyderabad Bike Mechanic
                            </h3>
                            <p className="mt-3 text-gray-100">
                                Discover how a trusted bike mechanic in Hyderabad gained 340+ leads in just 30 days using smart digital marketing strategies.
                            </p>
                            <p className="mt-5 inline-flex items-center gap-x-1 text-sm text-blue-600 decoration-2 group-hover:underline group-focus:underline font-medium">
                                Read more
                                <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                            </p>
                        </div>
                    </a>

                    <a className="group flex flex-col focus:outline-hidden" href="/case-studies/Tumblewash-Casestudy">
                        <div className="relative pt-[50%] sm:pt-[70%] rounded-xl overflow-hidden">
                            <Image src={laungry} alt='dm blog' className="size-full absolute top-0 start-0 object-cover group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out rounded-xl" />
                        </div>

                        <div className="mt-7">
                            <h3 className="text-xl font-semibold text-gray-100 group-hover:text-gray-50">
                                TumbleWash Case Study: 436% ROAS Growth
                            </h3>
                            <p className="mt-3 text-gray-100">
                                Discover how we boosted monthly calls and slashed costs in half for TumbleWash.
                            </p>

                            <p className="mt-5 inline-flex items-center gap-x-1 text-sm text-blue-600 decoration-2 group-hover:underline group-focus:underline font-medium">
                                Read more
                                <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                            </p>
                        </div>
                    </a>

                </div>

            </div>

   </>
  )
}
