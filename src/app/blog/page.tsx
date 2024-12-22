'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Blogcards } from '@/components/Cards/Blogcards';
import Image from 'next/image';

export default function BlogIndex() {
    const posts = [
        
            {
                id: 1,
                title: "How to Get Started with Digital Marketing",
                description: "Learn essential steps to begin your journey in the digital marketing world effectively.",
                glowcolor: "bg-purple-500",  // Updated color class
            },
            {
                id: 2,
                title: "Top 5 SEO Strategies",
                description: "Boost your website traffic with these proven search engine optimization techniques.",
                glowcolor: "bg-blue-500",  // Updated color class
            },
            {
                id: 3,
                title: "The Power of Google Ads",
                description: "Discover how Google Ads can transform your marketing campaigns and increase ROI.",
                glowcolor: "bg-green-500",  // Updated color class
            },
            {
                id: 4,
                title: "Social Media Growth Hacks",
                description: "Quick and effective tips to expand your brands presence on social platforms.",
                glowcolor: "bg-yellow-500",  // Updated color class
            },
            {
                id: 5,
                title: "AI in Digital Marketing",
                description: "Explore how AI tools revolutionize customer targeting and campaign performance.",
                glowcolor: "bg-fuchsia-500",  // Updated color class
            },
            {
                id: 6,
                title: "Email Marketing Best Practices",
                description: "Enhance your email campaigns with proven techniques for higher engagement and conversions.",
                glowcolor: "bg-emerald-500",  // Updated color class
            },
            {
                id: 7,
                title: "Content Marketing Made Simple",
                description: "Master the art of creating content that captivates and converts your audience.",
                glowcolor: "bg-sky-500",  // Updated color class
            },
            {
                id: 8,
                title: "Video Marketing Trends 2024",
                description: "Stay ahead with these emerging trends in video content creation and promotion.",
                glowcolor: "bg-rose-500",  // Updated color class
            },
            {
                id: 9,
                title: "Analytics for Better Marketing",
                description: "Understand key metrics to optimize and refine your marketing strategies effectively.",
                glowcolor: "bg-fuchsia-500",  // Updated color class
            },
            {
                id: 10,
                title: "Personalizing Customer Experiences",
                description: "Use personalization techniques to build stronger connections and increase customer loyalty.",
                glowcolor: "bg-purple-500",  // Updated color class
            }
        
    ];
    return (


        <>
            {/* Hero Section */}
            <section>
                <div className="relative isolate mt-[-20px] md:mt-[-60px] lg:mt-[-120px] mb-[-70px] overflow-hidden bg-black h-[100vh] border-b border-fuchsia-600 md:h-[100vh] lg:h-[120vh] xl:h-[70vh] flex items-center justify-center">
                    <motion.div
                        className="absolute w-8 sm:w-10 md:w-14 h-2 sm:h-3 md:h-4 bg-purple-500 top-[20%] left-[-15px] sm:left-[-20px] md:left-[-25px]"
                        animate={{ scaleX: [0, 10, 0] }}
                        transition={{
                            duration: 6,
                            repeat: Infinity,
                            repeatType: "loop",
                            ease: "easeInOut",
                        }}
                    />
                    <motion.div
                        className="absolute w-6 sm:w-8 md:w-8 h-2 sm:h-3 md:h-4 bg-violet-500 top-[30%] left-[-15px] sm:left-[-20px] md:left-[-25px]"
                        animate={{ scaleX: [0, 10, 0] }}
                        transition={{
                            duration: 6,
                            repeat: Infinity,
                            repeatType: "loop",
                            ease: "easeInOut",
                        }}
                    />
                    <motion.div
                        className="absolute w-6 sm:w-8 md:w-8 h-2 sm:h-3 md:h-4 bg-purple-500 top-[30%] right-[-15px] sm:right-[-20px] md:right-[-25px]"
                        animate={{ scaleX: [0, 10, 0] }}
                        transition={{
                            duration: 6,
                            repeat: Infinity,
                            repeatType: "loop",
                            ease: "easeInOut",
                        }}
                    />
                    <motion.div
                        className="absolute w-8 sm:w-10 md:w-12 h-2 sm:h-3 md:h-4 bg-purple-500 top-[60%] right-[-15px] sm:right-[-20px] md:right-[-25px]"
                        animate={{ scaleX: [0, 10, 0] }}
                        transition={{
                            duration: 6,
                            repeat: Infinity,
                            repeatType: "loop",
                            ease: "easeInOut",
                        }}
                    />
                    <motion.div
                        className="absolute w-2 sm:w-3 md:w-4 h-6 sm:h-8 md:h-10 bg-purple-500 bottom-[-15px] sm:bottom-[-20px] md:bottom-[-25px] left-[10%] sm:left-[15%] md:left-[20%]"
                        animate={{ scaleY: [0, 10, 0] }}
                        transition={{
                            duration: 6,
                            repeat: Infinity,
                            repeatType: "loop",
                            ease: "easeInOut",
                        }}
                    />
                    <motion.div
                        className="absolute w-2 sm:w-3 md:w-4 h-12 sm:h-14 md:h-16 bg-indigo-600 bottom-[-15px] sm:bottom-[-20px] md:bottom-[-25px] left-[70%] sm:left-[75%] md:left-[80%]"
                        animate={{ scaleY: [0, 10, 0] }}
                        transition={{
                            duration: 6,
                            repeat: Infinity,
                            repeatType: "loop",
                            ease: "easeInOut",
                        }}
                    />

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
                            className="aspect-[1108/632] w-[80.25rem] bg-gradient-to-l from-[#5544db] to-[#ae07e6] opacity-50"
                            style={{
                                clipPath:
                                    "polygon(53.6% 50.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 12.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)",
                            }}
                        ></div>
                    </div>
                    <div className="max-w-full px-4 text-center lg:max-w-3xl">
                        <h1 className="text-5xl font-bold tracking-tight text-white lg:text-5xl">
                            <span className='text-purple-500'>Accelerate</span> Your Growth with Data-Driven Digital Marketing
                        </h1>
                        <p className="mt-10 text-sm lg:text-lg leading-8 text-gray-300 ">
                            Empowering businesses to achieve success through tailored strategies, innovative campaigns, and measurable results. Your success is our mission.
                        </p>

                        <div className='flex justify-center items-center gap-5 mt-10'>
                            <button className="backdrop-blur-3xl border group border-white text-white font-normal text-sm py-2 px-4 md:px-6 md:py-3 md:text-md rounded-lg mt-14 md:mt-16 shadow-custom ">
                                <span>
                                    Get a Free Consultation <i className="fa-solid fa-arrow-right rotate-[-45deg] group-hover:rotate-[0deg] transition-all ml-2" id='get_a_quote'></i>
                                </span>
                            </button>
                            <button className="bg-gradient-to-t from-[#4a208a] to-[#13012e] border border-purple-600 text-white font-normal text-sm py-2 px-4 md:px-6 md:py-3 mt-14 md:mt-16 md:text-md rounded-lg shadow-custom">
                                <span>View Our Services</span>
                            </button>
                        </div>

                    </div>

                </div>
            </section>
            <section className="max-w-[90%] md:max-w-[80%] lg:max-w-[70%] xl:container mx-auto mt-44 md:mt-24 lg:mt-44 mb-10 md:mb-16 lg:mb-20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="flex flex-col gap-y-10 md:gap-y-14">
                        {posts.slice(0, Math.ceil(posts.length / 2)).map((post) => (
                            <Blogcards key={post.id} title={post.title} description={post.description} glowcolor={post.glowcolor} />
                        ))}
                    </div>

                    <div className="flex flex-col gap-y-10 md:gap-y-14 pt-8 md:pt-16">
                        {posts.slice(Math.ceil(posts.length / 2)).map((post) => (
                            <Blogcards key={post.id} title={post.title} description={post.description} glowcolor={post.glowcolor} />
                        ))}
                    </div>
                </div>
            </section>



        </>
    )
}