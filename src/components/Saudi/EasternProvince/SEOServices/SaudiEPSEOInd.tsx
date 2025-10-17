'use client';
import { useState } from "react";
import Image from "next/image";
import cleaningcomp from "@/assets/environmental-pollution-industry-exterior-daylight.jpg";
import pet from "@/assets/muslim-person-travelling-through-city.jpg"
import roofing from "@/assets/ordinary-life-scene-from-mall-america.jpg"
import dental from "@/assets/asian-man-reading-text-messages-with-his-colleague-making-phone-call-background.jpg"
import lawncare from "@/assets/digital marketing for lawn care services.jpg"
import blackcar from "@/assets/top-view-numerous-cars-traffic-dubai-united-arab-emirates.jpg"
import healthcare from "@/assets/beautiful-young-female-doctor-looking-camera-office.jpg"
import { motion } from 'framer-motion'
import { ArrowLeft, ArrowRight } from 'lucide-react';

export default function SaudiEPSEOIndustries(): JSX.Element {
    const [carouselOffset, setCarouselOffset] = useState<number>(0);

    const cardWidth: number = 450;
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
        <section className=" py-10 md:pb-20  bg-[#fffdf5] z-10 overflow-hidden">
            <div className="w-full relative text-center text-black pb-10">
                <h1 className="text-3xl md:text-5xl mx-auto max-w-[90%] md:max-w-full xl:text-7xl font-bold mb-2">
                    <span className=" text-transparent bg-clip-text bg-gradient-to-r from-black to-yellow-500">
                    Trusted by Businesses Across <br /> Khobar, Dammam, and Dhahran
                    </span>
                </h1>
                <p className="text-[16px] xl:text-lg text-gray-950 max-w-[100%] md:max-w-3xl mx-auto">
            Our SEO framework adapts to multiple industries across Saudi Arabia’s Eastern Province:
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
                            text: " Healthcare & Dental Clinics",
                            description: "Rank for treatments, attract patients, and grow visibility.",
                        },
                        {
                            id: "auto",
                            img: blackcar,
                            label: "Construction & Engineering",
                            text: "Construction & Engineering",
                            description: " Generate high-intent B2B inquiries from organic traffic.",
                        },
                        {
                            id: "cleaning",
                            img: cleaningcomp,
                            label: "Digital Marketing for Industries",
                            text: " Industrial & Manufacturing Firms ",
                            description: "Build supplier visibility and trust online.",
                        },
                        {
                            id: "roofing",
                            img: roofing,
                            label: "Digital Marketing for Ecommerce",
                            text: "E-commerce & Retail",
                            description: "Rank for products and drive consistent conversions.",
                        },
                        {
                            id: "lawncare",
                            img: pet,
                            label: "Digital Marketing for Education & Training Institutes",
                            text: "Education & Training Institutes",
                            description: "Capture enrollments through search visibility and local maps.",
                        },
                        {
                            id: "dental",
                            img: dental,
                            label: "Digital Marketing for Corporate & Consulting Firms",
                            text: "Corporate & Consulting Firms",
                            description: "Build credibility and inbound visibility for brand trust.",
                        },
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
                                    hover: { opacity: 0.45 }
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
                    className="bg-gradient-to-tr from-green-600 via-green-800 to-black text-white p-3 rounded-full mr-4"
                    onClick={() => handleScroll("left")}
                >
                    <ArrowLeft size={20} />
                </button>
                <button
                    className="bg-gradient-to-tr from-green-600 via-green-800 to-black text-white p-3 rounded-full"
                    onClick={() => handleScroll("right")}
                >
                    <ArrowRight size={20} />
                </button>
            </div>
        </section>
    );
}
