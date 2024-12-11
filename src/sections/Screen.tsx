'use client';

import { useEffect, useState } from "react";

export const Screen = () => {
    const [offsetY, setOffsetY] = useState(0);

    const handleScroll = () => {
        setOffsetY(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <section
            className="relative w-full z-50"
            style={{
                height: `calc(10vh + ${offsetY * 0.5}px)`,
            }}
        >
            <div
                className="w-[95%] md:w-[80%] mx-auto bg-purple-500/30 backdrop-blur-lg rounded-lg shadow-[0_0px_70px_10px_rgba(140,69,255,0.5)]"
                style={{
                    transform: `translateY(-${offsetY * 0.5}px)`,
                    transition: "transform 0.1s ease-out",
                }}
            >
                <div className="p-1 md:p-3 text-white">
                    <video width="100%" loop autoPlay muted>
                        <source src="/assets/lottie/video.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>
        </section>
    );
};
