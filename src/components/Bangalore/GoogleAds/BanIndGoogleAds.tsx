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
import { ArrowLeft, ArrowRight, Star } from 'lucide-react';
import Link from "next/link";

export default function BangaloreGoogleAdsndustries(): JSX.Element {
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [isAnimating, setIsAnimating] = useState<boolean>(false);

    const cardData = [
        {
            id: "health",
            img: healthcare,
            label: "Digital Marketing for Healthcare",
            text: " Healthcare & Dental Clinics",
            description: "Rank for treatments, attract patients, and grow visibility.",
            link: "#"
        },
        {
            id: "auto",
            img: blackcar,
            label: "Construction & Engineering",
            text: "Construction & Engineering",
            description: " Generate high-intent B2B inquiries from organic traffic.",
            link: "#"
        },
        {
            id: "cleaning",
            img: cleaningcomp,
            label: "Digital Marketing for Industries",
            text: " Industrial & Manufacturing Firms ",
            description: "Build supplier visibility and trust online.",
            link: "#"
        },
        {
            id: "roofing",
            img: roofing,
            label: "Digital Marketing for Ecommerce",
            text: "E-commerce & Retail",
            description: "Rank for products and drive consistent conversions.",
            link: "#"
        },
        {
            id: "lawncare",
            img: pet,
            label: "Digital Marketing for Education & Training Institutes",
            text: "Education & Training Institutes",
            description: "Capture enrollments through search visibility and local maps.",
            link: "#"
        },
        {
            id: "dental",
            img: dental,
            label: "Digital Marketing for Corporate & Consulting Firms",
            text: "Corporate & Consulting Firms",
            description: "Build credibility and inbound visibility for brand trust.",
            link: "/industries/dental-marketing"
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

    // Linear arrangement with cards on both sides - INCREASED SPACING
    const getCardPosition = (index: number) => {
        const position = (index - currentIndex + totalCards) % totalCards;

        // Convert to a position that shows cards on both sides
        let displayPosition = position;
        if (displayPosition > totalCards / 2) {
            displayPosition = displayPosition - totalCards;
        }

        // Position mapping for 6 cards: -2, -1, 0, 1, 2, 3 → -2, -1, 0, 1, 2, -3
        let normalizedPos = displayPosition;
        if (normalizedPos > 2) normalizedPos = normalizedPos - totalCards;
        if (normalizedPos < -2) normalizedPos = normalizedPos + totalCards;

        // Hide cards that are too far away
        if (Math.abs(normalizedPos) > 2) {
            return {
                transform: 'translateX(0px) scale(0.8)',
                opacity: 0,
                zIndex: 0,
                pointerEvents: 'none' as const,
            };
        }

        const isCenterCard = normalizedPos === 0;

        if (isCenterCard) {
            return {
                transform: 'translateX(0px) scale(1.15)',
                opacity: 1,
                zIndex: 20,
                filter: 'brightness(1.1)',
            };
        }

        // INCREASED SPACING - More horizontal spread
        const positions = {
            '-2': { x: -600, scale: 0.8, opacity: 0.3, zIndex: 5 },
            '-1': { x: -330, scale: 0.9, opacity: 0.4, zIndex: 8 },
            '1': { x: 330, scale: 0.9, opacity: 0.4, zIndex: 8 },
            '2': { x: 600, scale: 0.8, opacity: 0.3, zIndex: 5 },
        };

        const posConfig = positions[normalizedPos.toString() as keyof typeof positions] ||
            { x: 0, scale: 0.8, opacity: 0, zIndex: 0 };

        return {
            transform: `translateX(${posConfig.x}px) scale(${posConfig.scale})`,
            opacity: posConfig.opacity,
            zIndex: posConfig.zIndex,
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

            {/* Linear Carousel with Cards on Both Sides - WIDER CONTAINER */}
            <div className="carousel-container relative w-full h-[500px] flex items-center justify-center overflow-visible">
                <div className="carousel-scene relative w-full h-full flex items-center justify-center" style={{ width: '1400px' }}>
                    {cardData.map((card, index) => {
                        const style = getCardPosition(index);
                        const isCenterCard = (index - currentIndex + totalCards) % totalCards === 0;

                        return (
                            <motion.div
                                key={card.id}
                                className="card-3d absolute w-[300px] h-[400px] rounded-2xl overflow-hidden cursor-pointer"
                                style={{
                                    ...style,
                                }}
                                initial={false}
                                animate={style}
                                transition={{
                                    duration: 0.6,
                                    ease: "easeInOut"
                                }}
                                whileHover={{
                                    scale: isCenterCard ? 1.2 :
                                        Math.abs(style.transform.includes('translateX') ?
                                            parseFloat(style.transform.match(/translateX\(([^)]+)px\)/)?.[1] || '0') : 0) > 300 ? 0.85 : 1.05,
                                    y: isCenterCard ? -15 : -8,
                                    transition: { duration: 0.3 }
                                }}
                            >
                                <div className="relative w-full h-full group">
                                    {/* Background Image */}
                                    <Image
                                        src={card.img}
                                        alt={card.label}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                                    />

                                    {/* Enhanced Dark Overlay */}
                                    <div className={`absolute top-0 left-0 w-full h-full z-10 transition-all duration-500 ${isCenterCard ? 'bg-black/20' : 'bg-black/40'
                                        } group-hover:bg-black/30`} />

                                    {/* Center Card Highlight Effect */}
                                    {isCenterCard && (
                                        <>
                                            {/* White Glow Border */}
                                            <div className="absolute inset-0 rounded-2xl border-2 border-white/30 z-15 pointer-events-none" />

                                            {/* Animated Spotlight Effect */}
                                            <motion.div
                                                className="absolute inset-0 rounded-2xl bg-gradient-to-r from-white/5 via-transparent to-white/5 z-15 pointer-events-none"
                                                animate={{
                                                    x: [-100, 100],
                                                }}
                                                transition={{
                                                    duration: 3,
                                                    repeat: Infinity,
                                                    repeatType: "reverse",
                                                    ease: "easeInOut"
                                                }}
                                            />

                                        </>
                                    )}

                                    {/* Enhanced Text Content */}
                                    <div className={`absolute bottom-0 left-0 w-full z-20 rounded-b-2xl p-6 text-white transition-all duration-500 ${isCenterCard
                                            ? 'bg-gradient-to-t from-black/95 via-black/80 to-transparent backdrop-blur-sm'
                                            : 'bg-gradient-to-t from-black/90 via-black/70 to-transparent'
                                        }`}>
                                        <motion.h3
                                            className="text-2xl font-bold mb-3 text-left"
                                            animate={{
                                                y: isCenterCard ? 0 : 10,
                                            }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            {card.text}
                                        </motion.h3>
                                        <motion.p
                                            className="text-sm text-left opacity-90 group-hover:opacity-100 transform transition-all duration-300"
                                            animate={{
                                                y: isCenterCard ? 0 : 5,
                                                opacity: isCenterCard ? 1 : 0.9
                                            }}
                                        >
                                            {card.description}
                                        </motion.p>

                                        {/* CTA Button for Center Card */}
                                        {isCenterCard && (
                                            <>
                                                <Link href={card.link}>
                                                    <motion.button
                                                        className="mt-4 px-4 py-2 bg-white text-black text-xs font-semibold rounded-full hover:bg-gray-100 transition-colors duration-300 z-10"
                                                        initial={{ opacity: 0, y: 20 }}
                                                        animate={{ opacity: 1, y: 0 }}
                                                        transition={{ duration: 0.5, delay: 0.3 }}
                                                        whileHover={{ scale: 1.05 }}
                                                        whileTap={{ scale: 0.95 }}
                                                    >
                                                        Learn More
                                                    </motion.button>
                                                    </Link>
                                            </>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>

            {/* Navigation Controls */}
            <div className="controls flex justify-center mt-16 space-x-6"> {/* Increased margin top */}
                <motion.button
                    className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50"
                    onClick={handlePrev}
                    disabled={isAnimating}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <ArrowLeft size={24} />
                </motion.button>
                <motion.button
                    className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50"
                    onClick={handleNext}
                    disabled={isAnimating}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <ArrowRight size={24} />
                </motion.button>
            </div>
            <div className="flex justify-center mt-10 space-x-4">
                {cardData.map((_, index) => {
                    const isActive = currentIndex === index;
                    return (
                        <motion.button
                            key={index}
                            className={`rounded-full transition-all duration-300 ${isActive ? 'bg-blue-600' : 'bg-gray-300'
                                }`}
                            style={{
                                width: isActive ? '28px' : '10px',
                                height: '10px',
                            }}
                            onClick={() => {
                                if (isAnimating) return;
                                setIsAnimating(true);
                                setCurrentIndex(index);
                                setTimeout(() => setIsAnimating(false), 500);
                            }}
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.9 }}
                        />
                    );
                })}
            </div>
        </section>
    );
}