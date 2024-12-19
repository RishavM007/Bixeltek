
export const About = () => {
    return (
        <section className="py-24 relative xl:mr-0 lg:mr-5 mr-0">
            <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
                <div className="w-full justify-start items-center xl:gap-12 gap-10 grid lg:grid-cols-2 grid-cols-1">
                    <div className="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex">
                        <div className="w-full flex-col justify-center items-start gap-8 flex">
                            <div className="flex-col justify-start lg:items-start items-center gap-4 flex">
                                <h6 className="text-purple-500 text-base font-normal leading-relaxed">About Us</h6>
                                <div className="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
                                    <h2
                                        className="text-white/90 text-4xl font-bold  leading-normal lg:text-start text-center">
                                        The Tale of Our Achievement Story</h2>
                                    <p
                                        className="text-white/80 text-base font-sans font-normal leading-relaxed lg:text-start text-center">
                                        Our achievement story is a testament to teamwork and perseverance. Together, we have
                                        overcome challenges, celebrated victories, and created a narrative of progress and
                                        success.</p>
                                </div>
                            </div>
                            <div className="w-full flex-col justify-center items-start gap-6 flex">
                                <div className="w-full justify-start items-center gap-8 grid md:grid-cols-2 grid-cols-1">
                                    <div
                                        className="w-full h-full p-3.5 rounded-xl border border-purple-600 hover:border-purple-300 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                                        <h4 className="text-white text-2xl font-bold font-sans leading-9">3+ Years</h4>
                                        <p className="text-gray-200 text-base font-normal leading-relaxed">Influencing Digital
                                            Landscapes Together</p>
                                    </div>
                                    <div
                                        className="w-full h-full p-3.5 rounded-xl border border-purple-600 hover:border-purple-300 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                                        <h4 className="text-white text-2xl font-bold font-sans leading-9">25+ Projects
                                        </h4>
                                        <p className="text-gray-200 text-base font-normal leading-relaxed">Excellence Achieved
                                            Through Success</p>
                                    </div>
                                </div>
                                <div className="w-full h-full justify-start items-center gap-8 grid md:grid-cols-2 grid-cols-1">
                                    <div
                                        className="w-full p-3.5 rounded-xl border border-purple-600 hover:border-purple-300 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                                        <h4 className="text-white text-2xl font-bold font-sans leading-9">5+ Awards</h4>
                                        <p className="text-gray-200 text-base font-normal leading-relaxed">Our Dedication to
                                            Innovation Wins Understanding</p>
                                    </div>
                                    <div
                                        className="w-full h-full p-3.5 rounded-xl border border-purple-600 hover:border-purple-300 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                                        <h4 className="text-white text-2xl font-bold font-sans leading-9">99% Happy
                                            Clients</h4>
                                        <p className="text-gray-200 text-base font-normal leading-relaxed">Mirrors our Focus on
                                            Client Satisfaction.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button className="backdrop-blur-3xl border border-white text-white font-normal text-sm py-2 px-4 md:px-6 md:py-3 md:text-md rounded-lg mt-5 md:mt-8 shadow-custom ">
                            <span>
                                Read More <i className="fa-solid fa-arrow-right ml-2" id='get_a_quote'></i>
                            </span>
                        </button>
                    </div>
                    <div className="w-full lg:justify-start justify-center items-start flex">
                        <div
                            className="sm:w-[564px] w-full sm:h-[646px] h-full  backdrop:blur-3xl  bg-purple-400 shadow-purple-custom2 rounded-3xl sm:border border-purple-700 relative">
                            <img className="sm:mt-5 sm:ml-5 w-full h-full rounded-3xl object-cover"
                                src="https://pagedone.io/asset/uploads/1717742431.png" alt="about Us image" />
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}
