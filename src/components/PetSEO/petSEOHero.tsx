"use client";
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { ArrowRight, Calendar, Star, Zap, Search, Heart, PawPrint } from "lucide-react";
import { SEOButtonContactForm } from "../SEOPopupForm";
import pawlogo from '@/assets/pawicon.png';
import dogimage from '@/assets/beautiful-shot-different-dog-breeds-resting.png';
import gsap from "gsap";

const PetIndustrySEOHero = () => {
    const [isVisible, setIsVisible] = useState(false);
    const pawContainerRef = useRef<HTMLDivElement>(null);

    const toggleContactForm = () => {
        setIsVisible((prev) => !prev);
        console.log(!isVisible ? "Contact form visible" : "Contact form hidden");
    };

    useEffect(() => {
        // Create paw print trail animation
        const pawPrints: HTMLDivElement[] = [];
        const container = pawContainerRef.current;

        if (!container) return;

        // Define curved path coordinates (from left to right in a gentle arc)
        const pathPoints = [
            { x: -100, y: 150 },   // start off-screen left
            { x: 0, y: 250 },
            { x: 100, y: 300 },
            { x: 200, y: 360 },
            { x: 300, y: 420 },
            { x: 400, y: 500 },
            { x: 500, y: 580 },   
            { x: 600, y: 560 },
            { x: 700, y: 640 },   
            { x: 800, y: 620 },
            { x: 900, y: 700 },  
            { x: 1000, y: 680 },
            { x: 1100, y: 740 },   
            { x: 1200, y: 700 },
            { x: 1300, y: 620 },
            { x: 1400, y: 540 },
            { x: 1500, y: 460 },
            { x: 1600, y: 400 },
            { x: 1700, y: 340 },
            { x: 1800, y: 300 },
            { x: 1900, y: 250 },
            { x: 2000, y: 180 },  
        ];

        pathPoints.forEach((point, index) => {
            const paw = document.createElement('div');
            paw.className = 'absolute opacity-0';
            const stepOffset = index % 2 === 0 ? -15 : 15;   
            const yOffset = index % 2 === 0 ? -8 : 8;        

            paw.innerHTML = `
    <div class="relative">
      <img src="${pawlogo.src}" alt="paw print" class="w-14 h-14 opacity-100" />
    </div>
  `;

            paw.style.left = `${point.x + stepOffset}px`;
            paw.style.top = `${point.y + yOffset}px`;
            paw.style.transform = `rotate(${index % 2 === 0 ? 60 : 20}deg)`;

            container.appendChild(paw);
            pawPrints.push(paw);
        });


        // GSAP animation for sequential paw print appearance
        const tl = gsap.timeline({ repeat: -1, repeatDelay: 2 });

        pawPrints.forEach((paw, index) => {
            tl.to(paw, {
                opacity: 1,
                duration: 0.1,
                ease: "power1.out"
            }, index * 0.3)
                .to(paw, {
                    opacity: 0,
                    duration: 0.1,
                    ease: "power1.in",
                    delay: 0.2
                }, index * 0.3 + 0.2);
        });

        return () => {
            // Cleanup
            pawPrints.forEach(paw => {
                if (paw.parentNode === container) {
                    container.removeChild(paw);
                }
            });
            tl.kill();
        };
    }, []);

    return (
        <>
            <section className="min-h-screen relative bg-gradient-to-br from-amber-50 via-white to-orange-50 py-20 px-6 flex items-center justify-center overflow-hidden">
                {/* Animated Paw Print Trail */}
                <div
                    ref={pawContainerRef}
                    className="absolute  inset-0 pointer-events-none z-10"
                />

                {/* Dog Image */}
                <Image
                    src={dogimage}
                    alt="Happy dogs of different breeds resting together"
                    className="absolute bottom-0 right-0 h-[500px] w-auto z-0"
                />

                <div className="max-w-[85%] mx-auto text-center relative z-20">
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-amber-200 shadow-sm mb-8"
                    >
                        <PawPrint className="w-4 h-4 text-amber-600" />
                        <span className="text-sm font-semibold text-amber-700">Pet Industry SEO Specialists</span>
                    </motion.div>

                    {/* Main Heading */}
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                        className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight"
                    >
                        SEO for Pet Shops & the Pet Industry That <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">
                            Builds Loyal Pet Parents
                        </span>
                    </motion.h1>

                    {/* Subheading */}
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="text-lg md:text-xl text-gray-600 mb-12 max-w-6xl mx-auto leading-relaxed"
                    >
                        Bixeltek helps pet shops, groomers, boarding centers, and pet brands rank locally and nationally with AI-driven SEO systems.{" "}
                        <span className="font-semibold text-gray-700">
                            We make your business the go-to name every pet parent finds, trusts, and returns to.
                        </span>
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.3 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
                    >
                        <motion.button
                            onClick={toggleContactForm}
                            className="px-8 py-4 cursor-pointer bg-gradient-to-r from-amber-600 to-orange-600 text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center gap-3 text-lg group"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Search className="w-5 h-5" />
                            Get My Free SEO Audit
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </motion.button>

                        <motion.a
                            href="mailto:zee@bixeltek.com"
                            className="px-8 py-4 bg-white text-gray-900 font-bold rounded-full shadow-lg hover:shadow-xl border border-gray-200 transition-all duration-300 inline-flex items-center gap-3 text-lg group"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Calendar className="w-5 h-5" />
                            Talk to a Pet SEO Expert
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </motion.a>
                    </motion.div>

                    {/* Trust Indicators */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.4 }}
                        className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto"
                    >
                        {/* Trust Item 1 */}
                        <div className="flex flex-col items-center text-center">
                            <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center mb-3">
                                <Zap className="w-6 h-6 text-amber-600" />
                            </div>
                            <p className="text-sm text-gray-600 font-semibold">
                                Local & National Rankings
                            </p>
                        </div>

                        {/* Trust Item 2 */}
                        <div className="flex flex-col items-center text-center">
                            <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-3">
                                <Heart className="w-6 h-6 text-orange-600" />
                            </div>
                            <p className="text-sm text-gray-600 font-semibold">
                                Build Pet Parent Loyalty
                            </p>
                        </div>

                        {/* Trust Item 3 */}
                        <div className="flex flex-col items-center text-center">
                            <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-3">
                                <PawPrint className="w-6 h-6 text-red-600" />
                            </div>
                            <p className="text-sm text-gray-600 font-semibold">
                                AI-Driven SEO Systems
                            </p>
                        </div>
                    </motion.div>

                    {/* Floating Background Elements */}
                    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
                        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-amber-200 rounded-full blur-3xl opacity-20 animate-pulse"></div>
                        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-orange-200 rounded-full blur-3xl opacity-20 animate-pulse delay-1000"></div>
                        <div className="absolute top-1/2 right-1/3 w-48 h-48 bg-red-200 rounded-full blur-3xl opacity-20 animate-pulse delay-500"></div>
                    </div>
                </div>
            </section>
            <SEOButtonContactForm isVisible={isVisible} onClose={() => setIsVisible(false)} />
        </>
    );
};

export default PetIndustrySEOHero;