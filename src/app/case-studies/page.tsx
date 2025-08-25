

import React from 'react'
import heroimgdm from '@/assets/atikah-akhtar-XJptUS8nbhs-unsplash.jpg'
import heroimgbike from '@/assets/angry-_-kat-4ORysIjH-mY-unsplash.jpg'
import heroimgtumble from '@/assets/tumblewash.jpg'
import Image from 'next/image'
import Link from 'next/link'

export default function CasestudyPage() {
    return (
        <>

            <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-64 mt-[-150px] mx-auto">
                <div className="max-w-4xl mx-auto text-center mb-10 lg:mb-14">
  <h2 className="text-2xl font-bold md:text-5xl font-inter md:leading-tight">
    Real Results. Real Businesses.
  </h2>
  <p className="mt-1 text-gray-600 max-w-2xl mx-auto">
    Dive into our case studies and see how we’ve helped brands scale with smart strategy and serious execution.
  </p>
</div>


                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

                    <a className="group flex flex-col focus:outline-hidden" href="/casestudies-bixeltek/digital-marketing-for-dentists-case-study">
                        <div className="relative pt-[50%] sm:pt-[70%] rounded-xl overflow-hidden">
                            <Image src={heroimgdm} alt='dm blog' className="size-full absolute top-0 start-0 object-cover group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out rounded-xl" />
                            <span className="absolute top-0 end-0 rounded-se-xl rounded-es-xl text-xs font-medium bg-purple-800 text-white py-1.5 px-3">
                                Must Read
                            </span>
                        </div>

                        <div className="mt-7">
                            <h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-600">
                                Digital Marketing for Dentists — 200+ Patient Leads in 30 Days
                            </h3>
                            <p className="mt-3 text-gray-800">
                                How Bixeltek Helped a Dental Clinic Dominate Google Search and Attract High-Value Patients
                            </p>
                            <p className="mt-5 inline-flex items-center gap-x-1 text-sm text-blue-600 decoration-2 group-hover:underline group-focus:underline font-medium">
                                Read more
                                <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                            </p>
                        </div>
                    </a>

                    <a className="group flex flex-col focus:outline-hidden" href="/casestudies-bixeltek/google-ads-case-study-bike-repair-hyderabad">
                        <div className="relative pt-[50%] sm:pt-[70%] rounded-xl overflow-hidden">
                            <Image src={heroimgbike} alt='dm blog' className="size-full absolute top-0 start-0 object-cover group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out rounded-xl" />
                        </div>

                        <div className="mt-7">
                            <h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-600">
                                340+ Leads in 30 Days for Hyderabad Bike Mechanic
                            </h3>
                            <p className="mt-3 text-gray-800">
                                Discover how a trusted bike mechanic in Hyderabad gained 340+ leads in just 30 days using smart digital marketing strategies.
                            </p>
                            <p className="mt-5 inline-flex items-center gap-x-1 text-sm text-blue-600 decoration-2 group-hover:underline group-focus:underline font-medium">
                                Read more
                                <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                            </p>
                        </div>
                    </a>
                    <a
                        className="group relative flex flex-col w-full min-h-60 bg-center bg-cover rounded-xl hover:shadow-lg focus:outline-hidden focus:shadow-lg transition overflow-hidden"
                        href="/casestudies-bixeltek/digital-marketing-for-dentists-case-study"
                        style={{ backgroundImage: `url('/laundry.jpg')` }}
                    >
                        {/* Dark Overlay */}
                        <div className="absolute inset-0 bg-black/30 transition-all duration-300 group-hover:bg-black/40"></div>

                        {/* Content */}
                        <div className="relative z-10 flex-auto p-4 md:p-6">
                            <h3 className="text-xl text-white/90 group-hover:text-white">
                                <span className="font-bold">TumbleWash</span> increased ROAS by 436% and boosted monthly calls — all while cutting costs in half.
                            </h3>
                        </div>
                        <div className="relative z-10 pt-0 p-4 md:p-6">
                            <Link href={'/casestudies-bixeltek/digital-marketing-for-dentists-case-study'}>
                            <div className="inline-flex items-center gap-2 text-sm font-medium text-white group-hover:text-white/70">
                                Read full case study
                                <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path d="M9 18l6-6-6-6" />
                                </svg>
                            </div>
                            </Link>
                            
                        </div>
                    </a>

                </div>

            </div>

        </>
    )
}
