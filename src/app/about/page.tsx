'use client';
import Image from 'next/image';
import AbtImg from '@/assets/pexels-karolina-grabowska-7875953.jpg'
import { motion } from 'framer-motion';

export default function AboutPage() {
    const services = [
        { title: 'SEO Optimization', description: "Boost your website's visibility on search engines." },
        { title: 'Social Media Marketing', description: 'Engage your audience on social platforms.' },
        { title: 'Content Creation', description: 'Craft compelling content that resonates.' },
        { title: 'Analytics & Reporting', description: 'Understand your audience with data-driven insights.' },
    ];
    const timelineEvents = [
        { title: 'Discovery and Analysis', description: 'Perform a analysis of the clients existing IT systems.' },
        { title: 'Tailored Solutions', description: 'Develop IT solutions based on the analysis phase and make report.' },
        { title: 'Deployment and Support', description: 'Regularly communicate with our client to any concern.' },
    ];

    return (
        <div className="bg-black text-white">
            <section className="flex flex-col md:flex-row items-center justify-between px-8 md:px-20 py-20">
                <motion.div
                    className="text-left max-w-lg"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className='py-7'>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            Welcome to <span className="text-purple-500">Our Agency</span>
                        </h1>
                        <p className="text-[16px] md:text-lg pt-3 leading-relaxed">
                            Having worked with 100s of Brands in North American Market our team has come a long way understanding the needs of each individual brand. We are no freelancers but we work as your in-house team that knows exactly what your business needs.
                        </p>
                        <div className='mt-5'>

                       
                        <button className="backdrop-blur-3xl border border-white text-white font-normal text-sm py-2 px-4 md:px-6 md:py-3 md:text-md rounded-lg md:mt-5 shadow-custom " >
                            <span>
                                Get a Quote<i className="fa-solid fa-arrow-right ml-2" id='get_a_quote'></i>
                            </span>
                        </button>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    className="mt-10 md:mt-0"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <Image src={AbtImg} height={600} width={600} alt="Digital Marketing Illustration" className="rounded-lg shadow-lg" />
                </motion.div>
            </section>
            <section className="px-8 md:px-20 py-20 bg-black border-t">
                <div className="flex flex-col md:flex-row items-center justify-between gap-16">
                    <motion.div
                        className="max-w-lg text-left mb-12 md:mb-0"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Best pathway to our <span className='text-purple-700'>clients</span> .</h2>
                        <p className="text-lg md:text-[16px]  leading-wide">
                        Our consulting process begins with a thorough assessment of your current IT infrastructure, workflows, and pain points.
                        </p>
                        <div className='mt-8 flex flex-col gap-5'>

                        <p><i className="fa fa-arrow-circle-o-right mr-2 " aria-hidden="true"></i>24/7 Full Service Support</p>

                        <p><i className="fa fa-arrow-circle-o-right mr-2" aria-hidden="true"></i>Immediate Response</p>

                        <p><i className="fa fa-arrow-circle-o-right mr-2" aria-hidden="true"></i>Easy to Approach us</p>
                        

                        </div>
                        
                    </motion.div>

                    <motion.div
                        className="w-full md:w-1/2 relative"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="absolute left-1/2 transform -translate-x-1/2 w-[2px] h-[90%] bg-gray-500"></div>

                        {timelineEvents.map((event, index) => (
                            <motion.div
                                key={index}
                                className={`relative flex items-center mb-10 ${index % 2 === 0 ? 'justify-start' : 'justify-end'
                                    }`}
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                            >
                                <div
                                    className={`max-w-sm relative p-8 rounded-lg bg-black flex flex-col text-center justify-start shadow-lg z-[1] ${index % 2 === 0 ? 'lg:text-left' : 'lg:text-right'
                                        }`}
                                >
                                    {/* Gradient Border */}
                                    <div
                                        className="absolute top-0 left-0 right-0 bottom-0 rounded-lg bg-gradient-to-r from-[#b8cbb8] via-[#cf6cc9] to-[#ee609c] z-0"
                                    ></div>

                                    {/* Inner Black Layer */}
                                    <div className="absolute top-[2px] left-[2px] right-[2px] bottom-[2px] rounded-lg bg-black z-10"></div>

                                    {/* Content */}
                                    <h5 className="relative z-20 text-lg font-bold font-sans">{event.title}</h5>
                                    <p className="relative z-20 text-gray-200 mt-2 text-sm font-mono">{event.description}</p>
                                </div>


                                <div className="absolute left-1/2 hidden lg:block transform-translate-x-1/2 w-2 h-2 rounded-full bg-[#ee609c] z-20 "></div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
