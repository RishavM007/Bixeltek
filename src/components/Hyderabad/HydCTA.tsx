
import React from 'react'
import vector from '@/assets/star-large-1-1.png'
import Image from 'next/image'
import Link from 'next/link'
import { ButtonContactForm } from '@/sections/ButtonContactForm';

export default function HydCTA() {

    return (
        <>

            <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white relative py-16 px-4">
                <Image src={vector} alt='vectorCTA' className=' absolute top-0 right-0 opacity-50'>
                </Image>
                <div className="container mx-auto max-w-7xl text-center">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to transform your business?</h2>
                    <p className="text-xl md:text-2xl text-blue-100 mb-10 max-w-3xl mx-auto">
                        Join thousands of satisfied customers who trust our solutions every day.
                    </p>

                    <div className="flex flex-col md:flex-row justify-center gap-4">
                        <Link href={'#form'}>
                        <button className="bg-white text-blue-700 hover:bg-blue-50 px-8 py-2 rounded-lg font-semibold text-lg transition duration-300 transform hover:scale-104 shadow-lg">
                            Get Started Now
                        </button>
                        </Link>
                        <a href="tel:+919100032301">
                            <button className="border-2 border-white text-white hover:bg-white hover:text-blue-700 px-8 py-2 rounded-lg font-semibold text-lg transition duration-300 transform hover:scale-105">
                                Talk To Our Digital Marketing Expert
                            </button>
                        </a>

                    </div>

                    <div className="mt-12 sm:max-w-[90%] md:max-w-[100%] sm:mx-auto flex flex-col sm:flex-row items-center justify-center sm:space-x-10 space-y-4 sm:space-y-0">
                        <div className="flex -space-x-2">
                            <img className="h-10 w-10 rounded-full border-2 border-white" src="https://randomuser.me/api/portraits/women/12.jpg" alt="Customer" />
                            <img className="h-10 w-10 rounded-full border-2 border-white" src="https://randomuser.me/api/portraits/men/43.jpg" alt="Customer" />
                            <img className="h-10 w-10 rounded-full border-2 border-white" src="https://randomuser.me/api/portraits/women/34.jpg" alt="Customer" />
                        </div>
                        <div className="text-center sm:text-center md:text-left">
                            <p className="text-xl text-white">Trusted by 100+ businesses</p>

                        </div>
                    </div>

                </div>
            </section >

        </>
    )
}
