import { useState } from "react";
import { MdOutlineHealthAndSafety } from "react-icons/md";
import Image from "next/image";
import cleaningcomp from "@/assets/pexels-cottonbro-4108715.jpg";
import roofing from "@/assets/pexels-digitalbuggu-204976.jpg"
import dental from "@/assets/pexels-shvetsa-3845761.jpg"
import lawncare from "@/assets/pexels-karoldach-582486.jpg"
import blackcar from "@/assets/pexels-sarmad-mughal-94606-305070.jpg"
import { FaCar, FaBroom, FaBuilding, FaTree, FaTooth } from "react-icons/fa";
import healthcare from "@/assets/pexels-edward-jenner-4033148.jpg"

export default function CarouselSection(): JSX.Element {
    const [carouselOffset, setCarouselOffset] = useState<number>(0);

    const cardWidth: number = 300;
    const visibleCards: number = 3; 
    const totalCards: number = 6;
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
        <section className="py-20 bg-black z-10">
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
            <div className="carousel-container relative w-full overflow-hidden">
                <div
                    className="carousel flex gap-6 px-8 w-max transform transition-transform duration-500"
                    style={{ transform: `translateX(${carouselOffset}px)` }}
                >
                    {[
                        { id: "health", img: healthcare, label: "Healthcare" },
                        { id: "auto", img: blackcar, label: "Automobiles" },
                        { id: "cleaning", img: cleaningcomp, label: "Cleaning Companies" },
                        { id: "roofing", img: roofing, label: "Roofing Companies" },
                        { id: "lawncare", img: lawncare, label: "Lawn Care and Landscaping" },
                        { id: "dental", img: dental, label: "Dental Clinic" },
                    ].map(({ id, img, label }) => (
                        <a
                            key={id}
                            href={`#${id}`}
                            className="card relative bg-sky-200 p-6 rounded-lg group text-center 
                   min-w-[300px] min-h-[300px] lg:min-w-[300px] lg:min-h-[300px] 
                   xl:min-w-[350px] xl:min-h-[350px] overflow-hidden"
                        >
                            <Image
                                src={img}
                                alt={label}
                                width={300}
                                height={300}
                                className="absolute top-0 left-0 w-full h-full object-cover z-0 rounded-lg"
                            />
                            <div className="absolute top-0 left-0 w-full h-full group-hover:opacity-10 bg-black bg-opacity-30 z-10 rounded-lg"></div>
                            <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-end pb-5 items-center z-20">
                                <span className="relative font-semibold text-sm lg:text-base xl:text-lg text-white uppercase tracking-widest z-20">
                                    {label}
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
