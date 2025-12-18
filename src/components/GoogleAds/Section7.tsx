'use client';
import { useState } from "react";
import Image from "next/image";
import cleaningcomp from "@/assets/digital marketing servies for cleaning companies.jpg";
import oil from "@/assets/digital marketing for oil refinaries.jpg"
import pet from "@/assets/digital marketing for pet stores.jpg"
import roofing from "@/assets/digital marketing for roofing industries.jpg"
import dental from "@/assets/digital marketing for health care practices.jpg"
import lawncare from "@/assets/digital marketing for lawn care services.jpg"
import blackcar from "@/assets/digital marketing for car detailers.jpg"
import healthcare from "@/assets/digital marketing for health care practices.jpg"
import { motion } from 'framer-motion'
import { ArrowLeft, ArrowRight } from 'lucide-react';

export default function IndustryCarouselSection(): JSX.Element {
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
        <section className="pt-32 pb-20  bg-[#131313] z-10 overflow-hidden">
            <div className="w-full relative text-center text-white pb-10">
                <h1 className="text-3xl md:text-5xl xl:text-7xl font-bold mb-2">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-500">
                        INDUSTRIES WE
                    </span>
                </h1>
                <h1 className="text-3xl md:text-5xl xl:text-7xl font-bold mb-4">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-pink-500">
                        SERVE
                    </span>
                </h1>
                <p className="text-[16px] xl:text-lg text-gray-50 max-w-[90%] md:max-w-2xl mx-auto">
                    Discover the diverse industries we proudly cater to, offering innovative solutions to help you excel in your field.
                </p>
            </div>
            <div className="carousel-container md:pl-[500px] relative w-full overflow-hidden">
                <div
                    className="carousel flex gap-6 px-8 w-max transform transition-transform duration-500"
                    style={{ transform: `translateX(${carouselOffset}px)` }}
                >
                    {[
                        {
                            id: "health",
                            img: healthcare,
                            label: "Digital Marketing for Healthcare",
                            text: "Health Care Practices",
                            description: "Local SEO + targeted ads to book 30+ new patients per month.",
                        },
                        {
                            id: "auto",
                            img: blackcar,
                            label: "Digital Marketing for Automobiles",
                            text: "Automobile industries",
                            description: "Maps optimization + hyperlocal PPC to drive more calls and foot traffic.",
                        },
                        {
                            id: "cleaning",
                            img: cleaningcomp,
                            label: "Digital Marketing for Cleaning Companies",
                            text: "Cleaning Industries",
                            description: "Maps optimization + hyperlocal PPC to drive more calls and foot traffic.",
                        },
                        {
                            id: "roofing",
                            img: roofing,
                            label: "Digital Marketing for Roofing Companies",
                            text: "Roofing Industries",
                            description: "High-ticket lead funnels built for real estate and project-based services.",
                        },
                        {
                            id: "lawncare",
                            img: lawncare,
                            label: "Digital Marketing for Lawn Care and Landscaping",
                            text: "Lawn Care Industries",
                            description: "Maps optimization + hyperlocal PPC to drive more calls and foot traffic.",
                        },
                        {
                            id: "dental",
                            img: dental,
                            label: "Digital Marketing for Dental Clinic",
                            text: "Dental Clinics",
                            description: "Local SEO + targeted ads to book 30+ new patients per month.",
                        },
                        {
                            id: "pet",
                            img: pet,
                            label: "Digital Marketing for Pet Stores",
                            text: "Pet Stores",
                            description: "Product SEO, performance ads & retargeting funnels to scale sales.",
                        },
                        {
                            id: "oil",
                            img: oil,
                            label: "Digital Marketing for Oil Refineries",
                            text: "Oil Refineries",
                            description: "Paid growth loops, demo-booking strategies, and B2B marketing that closes deals.",
                        }
                    ].map(({ id, img, label, text, description }) => (
                        <motion.a
                            key={id}
                            href={`#${id}`}
                            className="card relative bg-transparent p-6 rounded-lg group text-center 
      min-w-[300px] min-h-[400px] lg:min-w-[350px] lg:min-h-[500px] 
      xl:min-w-[350px] xl:min-h-[450px] overflow-hidden"
                            whileHover="hover"
                            initial="rest"
                            animate="rest"
                        >
                            {/* Background Image */}
                            <Image
                                src={img}
                                alt={label}
                                width={450}
                                height={300}
                                className="absolute top-0 left-0 w-full h-full object-cover z-0 rounded-lg"
                            />

                            {/* Dark Overlay on Hover */}
                            <motion.div
                                variants={{
                                    rest: { opacity: 0.1 },
                                    hover: { opacity: 0.25 }
                                }}
                                transition={{ duration: 0.3 }}
                                className="absolute top-0  left-0 w-full h-full bg-black z-10 rounded-lg"
                            />

                            {/* Text Content */}
                            <motion.div
                                variants={{
                                    rest: { y: 0 },
                                    hover: { y: -50 }
                                }}
                                transition={{ duration: 0.4 }}
                                className="absolute bottom-5 px-4 left-0 w-full z-20 rounded-lg py-5 text-white"
                            >
                                <h3 className="text-3xl font-sofiasanscondensed text-left  font-bold">{text}</h3>

                                <motion.p
                                    variants={{
                                        rest: { opacity: 0, height: 0 },
                                        hover: { opacity: 1, height: "auto" }
                                    }}
                                    transition={{ duration: 0.4 }}
                                    className="text-sm text-left font-inter mt-2 overflow-hidden"
                                >
                                    {description}
                                </motion.p>
                            </motion.div>
                        </motion.a>
                    ))}
                </div>
            </div>


            <div className="controls flex justify-center mt-10">
                <button
                    className="bg-purple-600 text-white p-3 rounded-full mr-4"
                    onClick={() => handleScroll("left")}
                >
                    <ArrowLeft size={20} />
                </button>
                <button
                    className="bg-purple-600 text-white p-3 rounded-full"
                    onClick={() => handleScroll("right")}
                >
                    <ArrowRight size={20} />
                </button>
            </div>
        </section>
    );
}
