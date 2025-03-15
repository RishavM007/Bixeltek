import { useState } from "react";
import { MdOutlineHealthAndSafety } from "react-icons/md";
import Image from "next/image";
import cleaningcomp from "@/assets/digital marketing servies for cleaning companies.jpg";
import oil from "@/assets/digital marketing for oil refinaries.jpg"
import pet from "@/assets/digital marketing for pet stores.jpg"
import roofing from "@/assets/digital marketing for roofing industries.jpg"
import dental from "@/assets/digital marketing for health care practices.jpg"
import lawncare from "@/assets/digital marketing for lawn care services.jpg"
import blackcar from "@/assets/digital marketing for car detailers.jpg"
import { FaCar, FaBroom, FaBuilding, FaTree, FaTooth } from "react-icons/fa";
import healthcare from "@/assets/digital marketing for health care practices.jpg"

export default function CarouselSection(): JSX.Element {
    const [carouselOffset, setCarouselOffset] = useState<number>(0);

    const cardWidth: number = 450;
    const visibleCards: number = 3;
    const totalCards: number = 8;
    const containerWidth: number = cardWidth * visibleCards;
    const maxOffset: number = 0;
    const minOffset: number = -(cardWidth * totalCards - containerWidth);

    const handleScroll = (direction: "left" | "right"): void => {
        setCarouselOffset((prev: number) => {
            const newOffset =
                direction === "left"
                    ? Math.min(prev + cardWidth, maxOffset)
                    : Math.max(prev - cardWidth, minOffset);
            return newOffset;
        });
    };

    return (
        <section className="py-20  bg-black z-10 overflow-hidden">
            <div className="w-full relative text-center text-white pb-10">
                <h1 className="text-6xl xl:text-7xl font-bold mb-2">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-600 to-gray-800">
                        INDUSTRIES WE
                    </span>
                </h1>
                <h1 className="text-6xl xl:text-7xl font-bold mb-4">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
                        SERVE
                    </span>
                </h1>
                <p className="text-[16px] xl:text-lg text-gray-400 max-w-2xl mx-auto">
                    Discover the diverse industries we proudly cater to, offering innovative solutions to help you excel in your field.
                </p>
            </div>
            <div className="carousel-container pl-[700px] relative w-full overflow-hidden">
                <div
                    className="carousel flex gap-6 px-8 w-max transform transition-transform duration-500"
                    style={{ transform: `translateX(${carouselOffset}px)` }}
                >
                    {[
                        { id: "health", img: healthcare, label: "Digital Marketing for Healthcare", text: "Health Care Practices" },
                        { id: "auto", img: blackcar, label: "Digital Marketing for Automobiles", text: "Automobile industries" },
                        { id: "cleaning", img: cleaningcomp, label: "Digital Marketing for Cleaning Companies", text: "Cleaning Industries" },
                        { id: "roofing", img: roofing, label: "Digital Marketing for Roofing Companies", text: "Roofing Industries" },
                        { id: "lawncare", img: lawncare, label: "Digital Marketing for Lawn Care and Landscaping", text: "Lawn Care Industries" },
                        { id: "dental", img: dental, label: "Digital Marketing for Dental Clinic", text: "Dental Clinics" },
                        { id: "pet", img: pet, label: "Digital Marketing for Pet Stores", text: "Pet Stores" },
                        { id: "oil", img: oil, label: "Digital Marketing for Oil Refineries", text: "Oil Refineries" }
                    ].map(({ id, img, label, text }) => (
                        <a
                            key={id}
                            href={`#${id}`}
                            className="card relative bg-transparent p-6 rounded-lg group text-center 
                   min-w-[300px] min-h-[400px] lg:min-w-[350px] lg:min-h-[500px] 
                   xl:min-w-[350px] xl:min-h-[450px] overflow-hidden"
                        >
                            <Image
                                src={img}
                                alt={label}
                                width={450}
                                height={300}
                                className="absolute top-0 left-0 w-full h-full object-cover z-0 rounded-lg"
                            />
                            <div className="absolute top-0 left-0 w-full h-full group-hover:opacity-10 bg-black bg-opacity-10 z-10 rounded-lg"></div>
                            <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-end pb-5 items-center z-20">
                                <span className="relative font-semibold text-sm lg:text-base xl:text-lg text-white uppercase tracking-widest z-20">
                                    {text}
                                </span>
                            </div>
                        </a>
                    ))}
                </div>
            </div>


            <div className="controls flex justify-center mt-6">
                <button
                    className="bg-transparent text-white p-3 rounded-full mr-4 "
                    onClick={() => handleScroll("left")}
                >
                    &larr;
                </button>
                <button
                    className="bg-transparent text-white p-3 rounded-full"
                    onClick={() => handleScroll("right")}
                >
                    &rarr;
                </button>
            </div>
        </section>
    );
}
