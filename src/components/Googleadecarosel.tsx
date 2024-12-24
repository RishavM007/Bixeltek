'use client';
import {motion} from 'framer-motion';
import Image from 'next/image';
import ahref from '@/assets/ahref.png';
import semrush from '@/assets/semrush.png';
import seranking from '@/assets/SERanking.png';
import looker from '@/assets/Looker_6f803d7fdc.webp';
export const Googleadecarosel = () => {
    return (
        <>  
            <section className='pb-20 mb-10 flex flex-col gap-20'>
                <div className='flex flex-col items-center'>
                    <h2 className='text-4xl font-bold text-center xl:text-5xl mb-2 text-zinc-700'>We work with the best tools</h2>
                    <p className='text-center text-sm xl:text-lg text-gray-700'>We use the best tools to provide the best service to our clients.</p>
                   </div>
                <div className="w-[90%] md:w-[90%] lg:w-[90%] mx-auto">
                    <div className='flex items-center'>
                        
                        <div className=' flex flex-1 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]'>
                            <motion.div
                                initial={{ translateX: '-50%' }}
                                animate={{ translateX: '0' }}
                                transition={{
                                    repeat: Infinity,
                                    duration: 50,
                                    ease: 'linear',
                                }}
                                className="flex flex-none gap-14 justify-center items-center">
                                {[
                                    ahref,
                                    semrush,
                                    seranking,
                                    looker,
                                    ahref,
                                    semrush,
                                    seranking,
                                    looker,
                                    ahref,
                                    semrush,
                                    seranking,
                                    looker,
                                ].map((logo, index) => (
                                    <div key={index}>
                                        <Image src={logo} alt={`Company Logo ${index + 1}`} className=' h-16 w-auto object-contain' />
                                    </div>
                                ))}
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}