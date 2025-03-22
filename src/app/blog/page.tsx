import BlogList from '@/components/BlogList';
import React from 'react';

export default function BlogIndex() {
    return (
        <>
            <section>
                <div className="relative isolate mt-[-20px] md:mt-[-60px] lg:mt-[-120px]  overflow-hidden bg-black h-[100vh] border-b border-fuchsia-600 md:h-[100vh] lg:h-[120vh] xl:h-[100vh] flex items-center justify-center">
                    

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
            <BlogList />
        </>
    )
}