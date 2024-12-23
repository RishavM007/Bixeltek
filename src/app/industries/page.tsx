import Link from "next/link";
import Image from "next/image";
import { MdOutlineHealthAndSafety } from "react-icons/md";
import { FaCar, FaTree, FaBroom, FaBuilding, FaTooth } from "react-icons/fa";



export default function Industries() {
    return (
        <>
            <section className="min-h-max mt-[-130px] bg-black">
                <div className="absolute top-0 inset-x-0 h-64 flex items-start">
                    <div className="h-24 w-2/3 bg-gradient-to-br from-purple-500 opacity-20 blur-2xl dark:from-purple-700 dark:invisible dark:opacity-40"></div>
                    <div className="h-52 w-3/5 bg-gradient-to-r from-blue-500 opacity-40 blur-2xl dark:from-purple-700 dark:opacity-40"></div>
                </div>
                <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-2/5 aspect-[2/0.5] bg-gradient-to-br from-purple-600 to-violet-400 rounded-full opacity-50 blur-2xl"></div>
                <div className="relative mx-auto pt-48 pb-24 lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5 text-center space-y-10">
                    <h1 className="text-gray-900 dark:text-white mx-auto max-w-5xl font-bold text-4xl/tight sm:text-5xl/tight lg:text-6xl/tight xl:text-7xl/tight">
                        Transforming Industries with Digital Marketing
                    </h1>
                    <p className="text-gray-700 dark:text-gray-300 mx-auto max-w-2xl">
                        From startups to global enterprises, we specialize in creating tailored strategies that drive engagement, amplify reach, and deliver measurable results. Lets redefine your digital journey.
                    </p>
                    <div className="flex justify-center items-center flex-wrap mx-auto gap-4">
                        <Link href="#" className="flex items-center h-12 px-6 rounded-full bg-purple-300 backdrop-blur-2xl text-black border border-black">
                            Get Started
                        </Link>
                        <Link href="#" className="flex items-center h-12 px-6 rounded-full bg-gray-100 dark:bg-gray-900 text-purple-700 dark:text-gray-300 border border-purple-500 ">
                            Discover More
                        </Link>
                    </div>
                    <div className="text-left grid lg:grid-cols-3 p-6 rounded-2xl bg-gradient-to-tr from-gray-50 shadow-purple-custom2 to-gray-200 dark:from-purple-100 dark:to-purple-100 border border-gray-100 dark:border-gray-800 max-w-2xl lg:max-w-5xl mx-auto lg:divide-x divide-y lg:divide-y-0 divide-gray-300 dark:divide-gray-800">
                        <div className="flex items-start gap-6 lg:pr-6 pb-6 lg:pb-0">
                            <div className="w-10">
                                <span className="p-3 rounded-xl bg-gray-200 dark:bg-gray-800 flex w-max text-gray-800 dark:text-gray-200">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 10.5h.375c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125H21M4.5 10.5H18V15H4.5v-4.5zM3.75 18h15A2.25 2.25 0 0021 15.75v-6a2.25 2.25 0 00-2.25-2.25h-15A2.25 2.25 0 001.5 9.75v6A2.25 2.25 0 003.75 18z" />
                                    </svg>
                                </span>
                            </div>
                            <div className="flex-1 space-y-1">
                                <h2 className="text-gray-900  font-semibold text-lg">
                                    Industry Expertise
                                </h2>
                                <p className="text-gray-700  text-xs">
                                    Our solutions are designed to cater to diverse industries, ensuring strategies that align with your business goals.
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start gap-6 lg:px-6 py-6 lg:py-0">
                            <div className="w-10">
                                <span className="p-3 rounded-xl bg-gray-200 dark:bg-gray-800 flex w-max text-gray-800 dark:text-gray-200">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                                    </svg>
                                </span>
                            </div>
                            <div className="flex-1 space-y-1">
                                <h2 className="text-gray-900  font-semibold text-lg">
                                    Innovative Solutions
                                </h2>
                                <p className="text-gray-700 text-xs">
                                    Harness the power of data, creativity, and technology to craft campaigns that stand out in a competitive market.
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start gap-6 pt-6 lg:pt-0 lg:pl-6">
                            <div className="w-10">
                                <span className="p-3 rounded-xl bg-gray-200 dark:bg-gray-800 flex w-max text-gray-800 dark:text-gray-200">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 10.5h.375c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125H21M4.5 10.5H18V15H4.5v-4.5zM3.75 18h15A2.25 2.25 0 0021 15.75v-6a2.25-2.25 0 00-2.25-2.25h-15A2.25 2.25 0 001.5 9.75v6A2.25 2.25 0 003.75 18z" />
                                    </svg>
                                </span>
                            </div>
                            <div className="flex-1 space-y-1">
                                <h2 className="text-gray-900  font-semibold text-lg">
                                    Measurable Results
                                </h2>
                                <p className="text-gray-700  text-xs">
                                    Stay ahead with transparent analytics and insights that showcase the impact of our digital marketing efforts.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-black z-10">
                <div className="w-full relative flex items-stretch justify-between">

                    <div className="w-3/5 relative py-5 text-white" style={{ height: "600px" }}>

                        <div className="absolute top-[20px]   left-[-650px] xl:left-[-800px] hover:left-[-50px] transition-all duration-700 flex items-center justify-between bg-purple-500 p-8  hover:shadow-purple-custom w-[90%] h-16 rounded-full">
                            <span className="font-semibold text-lg ml-20">Healthcare</span>
                            <span className="text-xl border border-black p-3 rounded-full">
                                <i className="text-black">
                                    <MdOutlineHealthAndSafety />
                                </i>
                            </span>
                        </div>


                        <div className="absolute top-[100px] left-[-650px] xl:left-[-800px] flex items-center justify-between hover:left-[-50px] transition-all duration-700 bg-blue-500 p-8 w-[90%] h-16 rounded-full">
                            <span className="font-semibold text-lg ml-20">Automobiles</span>
                            <span className="text-xl border border-black p-3 rounded-full">
                                <i className="text-black">
                                    <FaCar />
                                </i>
                            </span>
                        </div>


                        <div className="absolute top-[180px] left-[-650px] xl:left-[-800px] flex items-center hover:left-[-50px] transition-all duration-700 justify-between bg-green-500 p-8 w-[90%] h-16 rounded-full">
                            <span className="font-semibold text-lg ml-20">Cleaning Companies</span>
                            <span className="text-xl border border-black p-3 rounded-full">
                                <i className="text-black">
                                    <FaBroom />
                                </i>
                            </span>
                        </div>


                        <div className="absolute top-[260px] left-[-650px] xl:left-[-800px] flex items-center hover:left-[-50px] transition-all duration-700 justify-between bg-yellow-500 p-8 w-[90%] h-16 rounded-full">
                            <span className="font-semibold text-lg ml-20">Roofing Companies</span>
                            <span className="text-xl border border-black p-3 rounded-full">
                                <i className="text-black">
                                    <FaBuilding />
                                </i>
                            </span>
                        </div>


                        <div className="absolute top-[340px] left-[-650px] xl:left-[-800px] flex items-center hover:left-[-50px] transition-all duration-700 justify-between bg-fuchsia-500 p-8 w-[90%] h-16 rounded-full">
                            <span className="font-semibold text-lg ml-20">Lawn Care & Landscaping</span>
                            <span className="text-xl border border-black p-3 rounded-full">
                                <i className="text-black">
                                    <FaTree />
                                </i>
                            </span>
                        </div>


                        <div className="absolute top-[420px] left-[-650px] xl:left-[-800px] flex items-center hover:left-[-50px] transition-all duration-700 justify-between bg-red-500 p-4 w-[90%] h-16 rounded-full">
                            <span className="font-semibold ml-20">Dental Clinic</span>
                            <span className="text-xl border border-black p-3 rounded-full">
                                <i className="text-black">
                                    <FaTooth />
                                </i>
                            </span>
                        </div>
                    </div>
                    <div className="w-2/5 absolute top-[20%] right-[15%] xl:right-[22%] flex py-5 justify-end items-center">
                        <div className="flex flex-col items-end">                    
                            <h1 className="rotate-90 text-fuchsia-600 text-[85px] xl:text-[100px] font-bold">
                                INDUSTRIES
                            </h1>
                            <h1 className="rotate-90 text-gray-600 text-[85px] xl:text-[100px] font-bold mr-[120px] xl:mr-[130px]">
                                WE SERVE
                            </h1>
                        </div>
                    </div>

                </div>
            </section>

        </>
    );
}
