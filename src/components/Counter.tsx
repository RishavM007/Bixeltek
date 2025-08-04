'use client';
import React from 'react'
import Image from 'next/image';
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion';
import { useInView } from "react-intersection-observer";
import dottedbg from '@/assets/counter-bg-with-dots.png'

export default function Counter() {

    interface CounterProps {
        start?: number;
        end: number;
    }
    
    // Counter Component
    interface CounterProps {
        start?: number;
        end: number;
        duration?: number;
    }
    
    const Counter: React.FC<CounterProps> = ({ start = 0, end, duration = 1.5 }) => {
        const [count, setCount] = useState(start);
        const { ref, inView } = useInView({ triggerOnce: true });
    
        useEffect(() => {
            if (inView) {
                let startTime = Date.now();
                let animationFrame: number;
    
                const updateCounter = () => {
                    const elapsedTime = Date.now() - startTime;
                    const progress = Math.min(elapsedTime / (duration * 5000), 1);
                    setCount(Math.floor(progress * end));
    
                    if (progress < 1) {
                        animationFrame = requestAnimationFrame(updateCounter);
                    }
                };
    
                animationFrame = requestAnimationFrame(updateCounter);
                return () => cancelAnimationFrame(animationFrame);
            }
        }, [inView, end, duration]);
    
        return (
            <motion.h2
                ref={ref}
                className="text-6xl font-sofiasanscondensed font-bold"
                initial={{ opacity: 0 }}
                animate={{ opacity: inView ? 1 : 0 }}
                transition={{ duration: 0.5 }}
            >
                {count}+
    
            </motion.h2>
        );
    };
    
    
  return (
   <section className="py-10 h-auto md:h-[40vh] max-w-[90%] md:max-w-[85%] mx-auto">
                   <div className="flex justify-center items-center">
                       <div className="relative flex w-full max-w-[85%]">
                           {/* Background Image */}
                           <Image
                               src={dottedbg}
                               alt="dotted background"
                               layout="fill"
                               className="absolute inset-0 rounded-3xl object-cover"
                           />
   
                           {/* Stats Container */}
                           <div className="relative z-10 py-14 flex w-full flex-col md:flex-row justify-around items-center text-black p-2 rounded-3xl shadow-lg">
                               {/* Stat 1 */}
                               <div className="text-left">
                                   <Counter end={250} />
                                   <p className="bg-black text-white px-4 py-2 rounded-md inline-block font-semibold text-sm mt-2">
                                       Projects Completed
                                   </p>
                               </div>
   
                               {/* Stat 2 */}
                               <div className="text-left">
                                   <Counter end={250} />
                                   <p className="bg-black text-white px-4 py-2 rounded-md inline-block font-semibold text-sm mt-2">
                                       Happy Customers
                                   </p>
                                   
                               </div>
   
                               {/* Stat 3 */}
                               <div className="text-left">
                                   <Counter end={15} />
                                   <p className="bg-black text-white px-4 py-2 rounded-md inline-block font-semibold text-sm mt-2">
                                       Years Of Experience
                                   </p>
                                   
                               </div>
   
                               {/* Stat 4 */}
                               <div className="text-left">
                                   <Counter end={100} />
                                   <p className="bg-black text-white px-4 py-2 rounded-md inline-block font-semibold text-sm mt-2">
                                       Client Satisfaction
                                   </p>
                                   
                               </div>
                           </div>
                       </div>
                   </div>
               </section>
  )
}
