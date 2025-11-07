'use client';
import { useState, useEffect } from "react";
import Image from "next/image";
import cleaningcomp from "@/assets/environmental-pollution-industry-exterior-daylight.jpg";
import pet from "@/assets/muslim-person-travelling-through-city.jpg";
import roofing from "@/assets/ordinary-life-scene-from-mall-america.jpg";
import dental from "@/assets/asian-man-reading-text-messages-with-his-colleague-making-phone-call-background.jpg";
import blackcar from "@/assets/top-view-numerous-cars-traffic-dubai-united-arab-emirates.jpg";
import healthcare from "@/assets/beautiful-young-female-doctor-looking-camera-office.jpg";
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export default function CROndustries(): JSX.Element {
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [isAnimating, setIsAnimating] = useState<boolean>(false);

    const cardData = [
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
    ];

    const totalCards = cardData.length;

    const handleNext = (): void => {
        if (isAnimating) return;
        setIsAnimating(true);
        setCurrentIndex((prev) => (prev + 1) % totalCards);
        setTimeout(() => setIsAnimating(false), 500);
    };

    const handlePrev = (): void => {
        if (isAnimating) return;
        setIsAnimating(true);
        setCurrentIndex((prev) => (prev - 1 + totalCards) % totalCards);
        setTimeout(() => setIsAnimating(false), 500);
    };

    // Calculate position for each card in the curved layout
    const getCardPosition = (index: number) => {
        const position = index - currentIndex;
        
        // Handle wrapping for infinite loop
        let normalizedPos = position;
        if (normalizedPos < -2) normalizedPos += totalCards;
        if (normalizedPos > 2) normalizedPos -= totalCards;
        
        // Hide cards that are too far away
        if (Math.abs(normalizedPos) > 2) {
            return {
                transform: 'translateX(0px) rotateY(0deg) scale(0.8)',
                opacity: 0,
                zIndex: 0,
                pointerEvents: 'none' as const,
            };
        }
        
        // Center card (no curve, full opacity)
        if (normalizedPos === 0) {
            return {
                transform: 'translateX(0px) rotateY(0deg) scale(1)',
                opacity: 1,
                zIndex: 10,
            };
        }
        
       
        const x = normalizedPos * 320;
        const rotateY = normalizedPos * 15; 
        const scale = 0.85;
        const opacity = 0.7;
        const zIndex = 5 - Math.abs(normalizedPos);
        
        return {
            transform: `translateX(${x}px) rotateY(${rotateY}deg) scale(${scale})`,
            opacity: opacity,
            zIndex: zIndex,
        };
    };

    return (
        <section className="pt-10 md:pt-10 -mt-2 -mb-2 pb-5 md:pb-20 bg-[#fff] z-10 overflow-hidden">
            <div className="w-full relative text-center text-white pb-10">
                <h1 className="text-3xl md:text-5xl mx-auto max-w-[90%] md:max-w-full xl:text-6xl font-bold mb-2">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-black to-blue-500">
                       Industry Use Cases
                    </span>
                </h1>
                <p className="text-[16px] xl:text-lg text-black max-w-[100%] md:max-w-2xl mx-auto">
                    Our expertise spans industries that define the region&apos;s economy:
                </p>
            </div>
            
            {/* 3D Curved Carousel */}
            <div className="carousel-3d-container relative w-full h-[500px] flex items-center justify-center overflow-visible">
                <div 
                    className="carousel-3d-scene relative w-full h-full flex items-center justify-center"
                    style={{
                        perspective: '1200px',
                    }}
                >
                    {cardData.map((card, index) => {
                        const style = getCardPosition(index);
                        const isCenterCard = (index - currentIndex + totalCards) % totalCards === 0;
                        
                        return (
                            <motion.div
                                key={card.id}
                                className="card-3d absolute w-[320px] h-[420px] rounded-xl overflow-hidden cursor-pointer"
                                style={{
                                    ...style,
                                }}
                                initial={false}
                                animate={style}
                                transition={{ duration: 0.5, ease: "easeInOut" }}
                                whileHover={{ 
                                    scale: isCenterCard ? 1.02 : 0.9,
                                    opacity: 1,
                                    transition: { duration: 0.3 }
                                }}
                            >
                                <div className="relative w-full h-full group">
                                    {/* Background Image */}
                                    <Image
                                        src={card.img}
                                        alt={card.label}
                                        fill
                                        className="object-cover"
                                    />

                                    {/* Dark Overlay - Lighter for better readability */}
                                    <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30 z-10 group-hover:opacity-20 transition-opacity duration-300" />

                                    {/* Text Content */}
                                    <div className="absolute bottom-0 left-0 w-full z-20 rounded-lg p-6 text-white bg-gradient-to-t from-black/95 via-black/70 to-transparent">
                                        <h3 className="text-2xl font-bold mb-3 text-left">{card.text}</h3>
                                        <p className="text-sm text-left opacity-100 group-hover:opacity-100 transform translate-y-0 transition-all duration-300">
                                            {card.description}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>

            {/* Navigation Controls */}
            <div className="controls flex justify-center mt-10">
                <button
                    className="bg-blue-800 text-white p-3 rounded-full mr-4 hover:bg-blue-500 transition-colors disabled:opacity-50"
                    onClick={handlePrev}
                    disabled={isAnimating}
                >
                    <ArrowLeft size={20} />
                </button>
                <button
                    className="bg-blue-800 text-white p-3 rounded-full hover:bg-blue-500 transition-colors disabled:opacity-50"
                    onClick={handleNext}
                    disabled={isAnimating}
                >
                    <ArrowRight size={20} />
                </button>
            </div>
            
            {/* Dots Indicator */}
            <div className="flex justify-center mt-6 space-x-2">
                {cardData.map((_, index) => (
                    <button
                        key={index}
                        className={`w-6 h-1 rounded-none transition-colors ${
                            currentIndex === index ? 'bg-blue-600' : 'bg-gray-300'
                        }`}
                        onClick={() => {
                            if (isAnimating) return;
                            setIsAnimating(true);
                            setCurrentIndex(index);
                            setTimeout(() => setIsAnimating(false), 500);
                        }}
                    />
                ))}
            </div>

            <style jsx>{`
                .carousel-3d-scene {
                    transform-style: preserve-3d;
                }
                .card-3d {
                    transform-style: preserve-3d;
                    backface-visibility: hidden;
                    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                }
            `}</style>
        </section>
    );
}