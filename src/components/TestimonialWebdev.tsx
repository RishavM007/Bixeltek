'use client';
import React from 'react'
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState} from 'react'
import { BiSolidQuoteSingleRight } from "react-icons/bi";
import author from '@/assets/author4.jpg'

export default function TestimonialWebdev() {

    const [index, setIndex] = useState(0);

    const handleDotClick = (i: number) => {
        setIndex(i);
    };

    const testimonials = [
        {
            text: "Working with Ridda has been a game-changer for our social media presence. Their strategic approach and attention to detail have helped reach great heights.",
            author: "Randall J. Ferguson",
            position: "CEO & Founder",
            company: "Dropbox",
            image: "author"
        },
        {
            text: "Ridda transformed our website into a highly functional and visually stunning experience. Their dedication is unmatched!",
            author: "Jane Doe",
            position: "Marketing Head",
            company: "Trello",
            image: "author"
        },
        {
            text: "Our collaboration with Ridda was seamless, and the results exceeded our expectations. Highly recommended!",
            author: "John Smith",
            position: "CTO",
            company: "Outbrain",
            image: "author"
        }
    ];

  return (
<section className='py-20'>
                <div className="max-w-[85%] flex flex-col md:flex-row mx-auto p-8 text-center">
                    <div className='flex text-black justify-start items-start text-left flex-col w-full md:w-1/2'>
                        <div className='mb-5'>
                            <p className='py-2 px-4 font-poppins border border-purple-600 rounded-md mx-auto'>Our Testimonials</p>
                        </div>
                        <h2 className="text-5xl tracking-wide text-black font-bold mb-4 font-sofiasanscondensed"><span className='text-blue-500'>1</span><span className='text-red-500'>5</span><span className='text-yellow-500'>8</span><span className='text-yellow-400'>0</span><span className='text-orange-500'>+</span> Customers Say About Our Services</h2>
                        <p className="text-gray-900 mb-6 mr-10">A web design agency dedicated to creating visually stunning and highly functional websites.</p>
                        <div className="flex justify-center space-x-2 mt-4">
                            {testimonials.map((_, i) => (
                                <button
                                    key={i}
                                    className={`w-2 h-2  rounded-full ${i === index ? 'bg-blue-200' : 'bg-red-400'}`}
                                    onClick={() => handleDotClick(i)}
                                ></button>
                            ))}
                        </div>
                    </div>
                    <div className='w-full md:w-1/2 ml-0 mt-10 md:mt-0 md:ml-2'>
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -50 }}
                            transition={{ duration: 0.5 }}
                            className="bg-white text-black border-2 border-black  relative py-16 pr-16 pl-10 rounded-lg "
                        >
                            <div>
                                <BiSolidQuoteSingleRight className='size-24 absolute top-[-40px] left-0 text-yellow-400 ' />
                            </div>
                            <p className="text-lg italic text-left">&quot;{testimonials[index].text}&quot;</p>
                            <div className="mt-6 flex justify-start items-start gap-3">
                                <Image src={author} alt={testimonials[index].author} width={30} height={30} className="w-10 h-10 rounded-full" />
                                <div className='mt-2'>
                                    <p className="font-semibold font-poppins">{testimonials[index].author} <span className='text-sm text-gray-500 font-poppins'>/ {testimonials[index].position}, {testimonials[index].company}</span></p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
  )
}
