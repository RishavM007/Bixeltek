"use client";
import Image from "next/image";
import { useRef, useState } from "react";
import { FaPlayCircle, FaPauseCircle } from "react-icons/fa";
import googlepartner from "@/assets/thumbnail_Partner-RGB.png";

export const About = () => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
    const [showCursor, setShowCursor] = useState(false);

    // Track mouse movement inside the video
    const handleMouseMove = (e: React.MouseEvent) => {
        setCursorPos({ x: e.clientX, y: e.clientY });
    };

    // Toggle play/pause on click
    const handleVideoClick = () => {
        if (videoRef.current) {
            if (videoRef.current.paused) {
                videoRef.current.play();
                setIsPlaying(true);
            } else {
                videoRef.current.pause();
                setIsPlaying(false);
            }
        }
    };

    return (
        <>
            {/* Custom Cursor - Always on Top */}
            {showCursor && (
                <div
                    className="fixed pointer-events-none transition-transform duration-150 ease-in-out"
                    style={{
                        left: `${cursorPos.x}px`,
                        top: `${cursorPos.y}px`,
                        transform: "translate(-50%, -50%)",
                        zIndex: 99999, // Ensures it's above everything
                        position: "fixed",
                    }}
                >
                    {isPlaying ? (
                        <FaPauseCircle size={70} className="text-white/80 drop-shadow-lg" />
                    ) : (
                        <FaPlayCircle size={70} className="text-white/80 drop-shadow-lg" />
                    )}
                </div>
            )}

            <section className="py-24 relative xl:mr-0 lg:mr-5 mr-0">
                <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
                    <div className="w-full justify-start items-center xl:gap-12 gap-10 grid lg:grid-cols-2 grid-cols-1">
                        <div className="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex">
                            <div className="w-full flex-col justify-center items-start gap-8 flex">
                                <div className="flex-col justify-start lg:items-start items-center gap-4 flex">
                                    <h6 className="text-purple-500 text-base font-normal leading-relaxed">About Us</h6>
                                    <div className="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
                                        <h2 className="text-white/90 text-4xl font-bold leading-normal lg:text-start text-center">
                                            The Tale of Our Achievement Story
                                        </h2>
                                        <p className="text-white/80 text-base font-sans font-normal leading-relaxed lg:text-start text-center">
                                            Our achievement story is a testament to teamwork and perseverance. Together, we have overcome challenges, celebrated victories, and created a narrative of progress and success.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* ✅ MISSING SECTION IS RESTORED HERE */}
                            <div className="w-full flex-col justify-center items-start gap-6 flex">
                                <div className="w-full justify-start items-center gap-8 grid md:grid-cols-2 grid-cols-1">
                                    <div className="w-full h-full p-3.5 rounded-xl border border-purple-600 hover:border-purple-300 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                                        <h4 className="text-white text-2xl font-bold font-sans leading-9">8+ Years</h4>
                                        <p className="text-gray-200 text-base font-normal leading-relaxed">
                                            Influencing Digital Landscapes Together
                                        </p>
                                    </div>
                                    <div className="w-full h-full p-3.5 rounded-xl border border-purple-600 hover:border-purple-300 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                                        <h4 className="text-white text-2xl font-bold font-sans leading-9">250+ Projects</h4>
                                        <p className="text-gray-200 text-base font-normal leading-relaxed">
                                            Excellence Achieved Through Success
                                        </p>
                                    </div>
                                </div>

                                <div className="w-full h-full justify-start items-center gap-8 grid md:grid-cols-2 grid-cols-1">
                                    <div className="w-full p-3.5 rounded-xl border border-purple-600 hover:border-purple-300 transition-all duration-700 ease-in-out flex-row justify-start items-start inline-flex">
                                        <div className="w-1/2 pr-2">
                                            <Image src={googlepartner} alt="google partner" />
                                        </div>
                                        <div className="w-1/2 pl-4">
                                            <h4 className="text-white text-2xl font-bold font-sans leading-9">
                                                Google Partner Agency
                                            </h4>
                                        </div>
                                    </div>
                                    <div className="w-full h-full p-3.5 rounded-xl border border-purple-600 hover:border-purple-300 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                                        <h4 className="text-white text-2xl font-bold font-sans leading-9">92% Client Retention</h4>
                                        <p className="text-gray-200 text-base font-normal leading-relaxed">
                                            Mirrors our Focus on Client Satisfaction.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <button className="backdrop-blur-3xl border border-white text-white font-normal text-sm py-2 px-4 md:px-6 md:py-3 md:text-md rounded-lg mt-5 md:mt-8 shadow-custom">
                                <span>
                                    Read More <i className="fa-solid fa-arrow-right ml-2" id="get_a_quote"></i>
                                </span>
                            </button>
                        </div>

                        {/* Video Section */}
                        <div className="w-full lg:justify-start justify-center items-start flex">
                            <div
                                className="sm:w-[564px] w-full sm:h-[646px] h-full backdrop:blur-3xl bg-transparent shadow-purple-custom2 rounded-3xl relative"
                                onMouseEnter={() => setShowCursor(true)}
                                onMouseLeave={() => setShowCursor(false)}
                                onMouseMove={handleMouseMove}
                            >
                                {/* Video Element */}
                                <video
                                    ref={videoRef}
                                    loop
                                    className="object-cover rounded-3xl z-0 h-full w-full opacity-100 cursor-none hover:scale-105 transition-all duration-1000"
                                    onClick={handleVideoClick}
                                >
                                    <source src="/assets/lottie/IMG_5291.mov" type="video/webm" />
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
