import Image from 'next/image';
import image1 from '@/assets/pexels-pixabay-270669.jpg';
import image2 from '@/assets/pexels-product-school-1299359-2678468.jpg';
import Link from 'next/link';
export const About = () => {
    return (
        <section className="py-8 md:py-20 xl:py-24 bg-black">
            <div className="container mx-auto">
                <div className="text-center">
                    <h2 className="text-5xl font-medium tracking-tighter text-white">
                        Who are we?
                    </h2>
                    <p className="text-white/70 text-md lg:text-lg tracking-tight mt-5">
                        At our core, we prioritize pushing boundaries, embracing the unknown, and fostering a culture of continuous learning.
                    </p>
                    <Link href= '/about'>
                    <button className="backdrop-blur-3xl border border-white text-white font-normal text-sm py-2 px-4 md:px-6 md:py-3 md:text-md rounded-lg mt-14 md:mt-16 mb-10 shadow-custom">
                        <span>
                            Read More<i className="fa-solid fa-arrow-right ml-2" id="get_a_quote"></i>
                        </span>
                    </button>
                    </Link>
                </div>
            </div>


            <div className="container mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    
                    <div className="card bg-black border rounded-3xl overflow-hidden">
                        <div className="flex flex-col md:flex-row items-stretch h-full">
                            <div className="w-full md:w-1/2 h-96 relative">
                                <Image
                                    src={image2}
                                    alt="Why Choose Us?"
                                    layout="fill"
                                    objectFit="cover"
                                    className="rounded-none"
                                />
                            </div>
                            <div className="w-full md:w-1/2 p-6 flex flex-col justify-center">
                                <h2 className="text-2xl mb-4 text-white">Why Choose Us?</h2>
                                <p className="text-white/70 text-[16px]">
                                    With years of experience and deep industry knowledge, we have a proven track record of success and are pushing ourselves to stay ahead of the curve.
                                </p>
                            </div>
                        </div>
                    </div>

                    
                    <div className="card bg-black border rounded-3xl overflow-hidden">
                        <div className="flex flex-col md:flex-row items-stretch h-full">
                            <div className="w-full md:w-1/2 h-96 relative">
                                <Image
                                    src={image1}
                                    alt="Visionary Team"
                                    layout="fill"
                                    objectFit="cover"
                                    className="rounded-none"
                                />
                            </div>
                            <div className="w-full md:w-1/2 p-6 flex flex-col justify-center">
                                <h2 className="text-2xl mb-4 text-white">Visionary Team</h2>
                                <p className="text-white/70 text-[16px]">
                                    With a team of visionary engineers, developers, and creative minds, we embark on a journey to transform complex challenges into ingenious technological solutions.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
