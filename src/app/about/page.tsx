"use client";
import Image from 'next/image';
import BgImg from '@/assets/Layer F.png';
import { motion } from 'framer-motion';
import { Bento } from '@/components/AbtHero/AbtHero';

export default function AboutPage() {
    const timelineEvents = [
        { title: 'Discovery and Analysis', description: 'Perform a analysis of the clients existing IT systems.' },
        { title: 'Tailored Solutions', description: 'Develop IT solutions based on the analysis phase and make report.' },
        { title: 'Deployment and Support', description: 'Regularly communicate with our client to any concern.' },
    ];

    return (
        <div className="bg-black text-white">
            <section>
                <div className="relative isolate mt-[-120px] mb-[-50px] overflow-hidden bg-black h-screen flex items-center justify-center">
                    <svg
                        className="absolute inset-0 -z-10 h-full w-full stroke-white/10 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
                        aria-hidden="true">
                        <defs>
                            <pattern id="hero-pattern" width="200" height="200" x="100%" y="-1" patternUnits="userSpaceOnUse">
                                <path d="M.5 200V.5H200" fill="none"></path>
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#hero-pattern)"></rect>
                    </svg>
                    <div
                        className="absolute left-[calc(50%-4rem)] top-10 -z-10 transform-gpu blur-3xl sm:left-[calc(50%-18rem)] lg:left-48 lg:top-[calc(50%-30rem)] xl:left-[calc(50%-24rem)]"
                        aria-hidden="true">
                        <div
                            className="aspect-[1108/632] w-[69.25rem] bg-gradient-to-r from-[#8653f5] to-[#ae07e6] opacity-50"
                            style={{
                                clipPath:
                                    "polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)",
                            }}
                        ></div>
                    </div>
                    <div className="max-w-full px-4 text-center lg:max-w-3xl">
                        <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl">
                            About
                            <span className="text-purple-500"> Bixeltek</span>
                        </h1>
                        <p className="mt-10 text-sm lg:text-lg leading-8 text-gray-300 ">
                            At <span className="text-purple-500 px-1">Bixeltek</span>we have worked with 100s of Brands in North American Market our team has come a long way understanding the needs of each individual brand. <span className='hidden md:block '>We are no freelancers but we work as your in-house team that knows exactly what your business needs.</span>
                        </p>

                        <button className="backdrop-blur-3xl border border-white text-white font-normal text-sm py-2 px-4 md:px-6 md:py-3 md:text-md rounded-lg mt-14 md:mt-16 shadow-custom ">
                            <span>
                                Get a Quote <i className="fa-solid fa-arrow-right ml-2" id='get_a_quote'></i>
                            </span>
                        </button>
                    </div>

                </div>
            </section>

            <Bento />
        
            <section className="overflow-hidden relative px-8 md:px-20 py-20 bg-black">
                <Image
                    src={BgImg}
                    height={1500}
                    width={1500}
                    alt=""
                    className="absolute right-0 top-[-100px] opacity-100"
                />
                <div className="flex flex-col md:flex-row items-center justify-between gap-16">
                    <motion.div
                        className="max-w-lg text-left mb-12 md:mb-0"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <p className="text-sm text-purple-500 text-start ">How we do it?</p>
                        <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4">Best pathway to our <span className="text-purple-700">clients</span>.</h2>
                        <p className="text-lg md:text-[16px] leading-wide">
                            Our consulting process begins with a thorough assessment of your current IT infrastructure, workflows, and pain points.
                        </p>
                        <div className="mt-8 flex flex-col gap-5">
                            <p><i className="fa fa-arrow-circle-o-right mr-2" aria-hidden="true"></i>24/7 Full Service Support</p>
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
                                    <div
                                        className="absolute top-0 left-0 right-0 bottom-0 rounded-lg bg-gradient-to-r from-[#b8cbb8] via-[#cf6cc9] to-[#ee609c] z-0"
                                    ></div>
                                    <div className="absolute top-[2px] left-[2px] right-[2px] bottom-[2px] rounded-lg bg-black z-10"></div>
                                    <h5 className="relative z-20 text-lg font-bold font-sans">{event.title}</h5>
                                    <p className="relative z-20 text-gray-200 mt-2 text-sm font-mono">{event.description}</p>
                                </div>
                                <div className="absolute left-1/2 hidden lg:block transform-translate-x-1/2 w-2 h-2 rounded-full bg-[#ee609c] z-20 "></div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>
            {/* Team Section */}
            <section>
                <div className="bg-black py-24 sm:py-32">
                    <div className="mx-auto flex flex-col md:flex-row lg:flex-row  max-w-7xl gap-20 px-6">
                        <div className="max-w-xl">
                            <h2 className="text-pretty text-3xl font-semibold tracking-tight text-white/90 sm:text-4xl">Meet our leadership</h2>
                            <p className="mt-6 text-lg/8 text-white/50">We’re a dynamic group of individuals who are passionate about what we do and dedicated to delivering the best results for our clients.</p>
                        </div>
                        <div className='flex flex-wrap gap-x-32 gap-y-16'>
                        <ul role="list" className="gap-x-8 gap-y-5 ">
                            <li>
                                <div className="flex items-center gap-x-6">
                                    <img className="size-16 rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                                    <div>
                                        <h3 className="text-base/7 font-semibold tracking-tight text-white">Leslie Alexander</h3>
                                        <p className="text-sm/6 font-semibold text-indigo-600">Co-Founder / CEO</p>
                                    </div>
                                </div>
                            </li>
                        </ul>
                        <ul role="list" className=" gap-x-8 gap-y-5">
                            <li>
                                <div className="flex items-center gap-x-6">
                                    <img className="size-16 rounded-full"  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                                    <div>
                                        <h3 className="text-base/7 font-semibold tracking-tight text-white">Leslie Alexander</h3>
                                        <p className="text-sm/6 font-semibold text-indigo-600">Co-Founder / CEO</p>
                                    </div>
                                </div>
                            </li>
                        </ul>

                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
