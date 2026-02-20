'use client';
import React, { useRef, useState, useLayoutEffect } from "react";
import { color, motion } from "framer-motion";
import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import logo2 from '@/assets/BIXELTEKLOGO (1).png'
import googleadslogo from '@/assets/googleads-logo.png'
import Image from "next/image";
import shopifylogo from '@/assets/shopifylogo.png'
import react from '@/assets/React-icon.svg (1).png'
import slack from '@/assets/Slack_icon_2019.svg.png'
import woo from '@/assets/woocommerce.png'
import zapier from '@/assets/zapier-icon-svgrepo-com.png'
import magento from '@/assets/magento-2-logo-svgrepo-com.png'
import mailchimp from '@/assets/mailchimp-svgrepo-com.png'
import nextjs from '@/assets/dango-inner-2.webp'
import wordpress from '@/assets/wordpress-color-svgrepo-com.png'
import elementor from '@/assets/Elementor-Logo-Symbol-Red.png'
import frappe from '@/assets/technologies/frappe.png'
import python from '@/assets/technologies/python-symbol.png'
import vue from '@/assets/technologies/vue-symbol.png'
import nuxt from '@/assets/technologies/nuxt-symbol.png'
import razorpay from '@/assets/technologies/razorpay-symbol.png'
import stripe from '@/assets/Stripe_Logo,_revised_2016.svg.png'
import notion from '@/assets/Notion-logo.svg.png'
import next from "next";

// import googleadslogo from '@/assets/googleads-logo.png'
// import Image from "next/image";
// import shopifylogo from '@/assets/shopifylogo.png'
// import react from '@/assets/React-icon.svg (1).png'
// import slack from '@/assets/Slack_icon_2019.svg.png'
// import woo from '@/assets/woocommerce.png'
// import zapier from '@/assets/zapier-icon-svgrepo-com.png'
// import magento from '@/assets/magento-2-logo-svgrepo-com.png'
// import mailchimp from '@/assets/mailchimp-svgrepo-com.png'
// import nextjs from '@/assets/dango-inner-2.webp'
// import wordpress from '@/assets/wordpress-color-svgrepo-com.png'
// import elementor from '@/assets/Elementor-Logo-Symbol-Red.png'
// import frappe from '@/assets/technologies/frappe.png'
// import python from '@/assets/technologies/python-symbol.png'
// import vue from '@/assets/technologies/vue-symbol.png'
// import nuxt from '@/assets/technologies/nuxt-symbol.png'
// import razorpay from '@/assets/technologies/razorpay-symbol.png'
// import stripe from '@/assets/Stripe_Logo,_revised_2016.svg.png'
// import nodejs from '@/assets/Node.js_logo.svg.png'
// import docker from '@/assets/technologies/docker-symbol.webp'
// import drupal from '@/assets/technologies/drupal-symbol.png'
// import mongo from '@/assets/technologies/mongodb_logo.png'
// import redis from '@/assets/technologies/redis-symbol.png'
// import hostinger from '@/assets/technologies/hostinger-symbol.png'
// import notion from '@/assets/Notion-logo.svg.png'

    // const topRow = [
    //     { id: 1, name: googleadslogo, color: "border border-blue-400" },
    //     { id: 2, name: woo, color: "border border-pink-400" },
    //     { id: 3, name: shopifylogo, color: "border border-emerald-400" },
    //     { id: 4, name: slack, color: "border border-violet-400" },
    //     { id: 9, name: react, color: "border border-cyan-400" },
    //     { id: 10, name: magento, color: "border border-orange-400" },
    //     { id: 13, name: vue, color: "border border-green-400" },
    //     {id:15, name:stripe,color:'border border-purple-400'},
    //     {id:17, name:nodejs,color:'border border-green-400'},
    //      {id: 19, name: redis, color: "border border-red-400" },
    //      {id: 21, name: drupal, color: "border border-blue-400" },

    // ];

    // const bottomRow = [
    //     { id: 5, name: zapier, color: "border border-orange-400" },
    //     { id: 6, name: elementor, color: "border border-red-400" },
    //     { id: 7, name: wordpress, color: "border border-indigo-400" },
    //     { id: 8, name: nextjs, color: "border border-teal-400" },
    //     {id: 11, name:frappe,color:'border border-sky-400'},
    //     {id: 12, name: python, color: "border border-yellow-400" },
    //     {id: 14, name: nuxt, color: "border border-teal-400" },
    //     {id:16, name:razorpay,color:'border border-blue-600'},
    //      {id: 18, name: docker, color: "border border-blue-400" },
    //       {id: 20, name: mongo, color: "border border-green-600" },
    //      {id: 22, name: hostinger, color: "border border-purple-400" },  
    // ];

gsap.registerPlugin(MotionPathPlugin);

const HomeIntegrationMindMap = () => {
    const linesRef = useRef<SVGPathElement[]>([]);
    const dotsRef = useRef<HTMLDivElement[][]>([]);
    const containerRef = useRef<HTMLDivElement>(null);

    const iconSize = 112;

    const topRow = [
        { id: 1, name: googleadslogo, color: "border border-blue-400" },
        { id: 2, name: woo, color: "border border-pink-400" },
        { id: 3, name: shopifylogo, color: "border border-emerald-400" },
        { id: 4, name: slack, color: "border border-violet-400" },
        { id: 9, name: react, color: "border border-cyan-400" },
        { id: 10, name: magento, color: "border border-orange-400" },
        { id: 13, name: vue, color: "border border-green-400" },
        {id:15, name:stripe,color:'border border-purple-400'},
        
    ];

    const bottomRow = [
        { id: 5, name: zapier, color: "border border-orange-400" },
        { id: 6, name: elementor, color: "border border-red-400" },
        { id: 7, name: wordpress, color: "border border-indigo-400" },
        { id: 8, name: nextjs, color: "border border-teal-400" },
        {id: 11, name:frappe,color:'border border-sky-400'},
        {id: 12, name: python, color: "border border-yellow-400" },
        {id: 14, name: nuxt, color: "border border-teal-400" },
        {id:16, name:razorpay,color:'border border-blue-600'}
    ];


    const [iconPositions, setIconPositions] = useState<{ x: number; y: number }[]>([]);
    const [center, setCenter] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

    useLayoutEffect(() => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const containerWidth = rect.width;
        const containerHeight = rect.height;

        // Move the entire center point down - this will move everything together
        const newCenter = { x: containerWidth / 2, y: containerHeight * 0.6 }; // Changed from 0.5 to 0.6
        setCenter(newCenter);

        const positions: { x: number; y: number }[] = [];

        // Adjust top row to be relative to the new center position
        const topY = containerHeight * 0.3; // Position above the center
        const topSpacing = containerWidth / (topRow.length);
        const topStartX = (containerWidth - (topSpacing * (topRow.length - 1))) / 2;

        topRow.forEach((_, i) => {
            positions[i] = {
                x: topStartX + (topSpacing * i),
                y: topY
            };
        });

        // Adjust bottom row to be relative to the new center position
        const bottomY = containerHeight * 0.85; // Position below the center
        const bottomSpacing = containerWidth / (bottomRow.length);
        const bottomStartX = (containerWidth - (bottomSpacing * (bottomRow.length - 1))) / 2;

        bottomRow.forEach((_, i) => {
            positions[i + topRow.length] = {
                x: bottomStartX + (bottomSpacing * i),
                y: bottomY
            };
        });

        setIconPositions(positions);

        // Initialize dots array for each path
        dotsRef.current = positions.map(() => []);

        // Start the animation loop
        startAnimationLoop(positions);
    }, []);

    const startAnimationLoop = (positions: { x: number; y: number }[]) => {
        const createDotAnimation = (pathIndex: number) => {
            const dotGroup = document.createElement('div');
            dotGroup.className = 'absolute w-1 h-1 z-10';
            dotGroup.style.left = '0px';
            dotGroup.style.top = '0px';

            const dot = document.createElement('div');
            dot.className = 'w-full h-full bg-red-800 rounded-full shadow shadow-[#d00000]';
            dotGroup.appendChild(dot);

            containerRef.current?.appendChild(dotGroup);

            // Store reference
            if (!dotsRef.current[pathIndex]) {
                dotsRef.current[pathIndex] = [];
            }
            dotsRef.current[pathIndex].push(dotGroup);

            const path = linesRef.current[pathIndex];
            if (!path) return;

            // Calculate duration based on path length
            const pathLength = path.getTotalLength();
            const baseDuration = 5;
            const duration = baseDuration * (pathLength / 500);

            // Animate dot along path
            gsap.to(dotGroup, {
                motionPath: {
                    path: path,
                    align: path,
                    alignOrigin: [0.5, 0.5],
                },
                duration: duration,
                ease: "power1.inOut",
                onComplete: () => {
                    // Remove dot after animation completes
                    if (dotGroup.parentNode) {
                        dotGroup.parentNode.removeChild(dotGroup);
                    }
                    // Remove from refs array
                    const dotIndex = dotsRef.current[pathIndex].indexOf(dotGroup);
                    if (dotIndex > -1) {
                        dotsRef.current[pathIndex].splice(dotIndex, 1);
                    }
                }
            });
        };

        // Function to spawn dots for all paths
        const spawnDotsForAllPaths = () => {
            positions.forEach((_, index) => {
                createDotAnimation(index);
            });
        };

        // Initial spawn
        spawnDotsForAllPaths();

        // Set up interval for continuous spawning
        const interval = setInterval(spawnDotsForAllPaths, 2500);

        return () => clearInterval(interval);
    };

    const generatePath = (end: { x: number; y: number }) => {
        const startX = center.x;
        const startY = center.y;

        const offset = 0.5;
        const control1X = startX;
        const control1Y = startY + (end.y - startY) * offset;

        const control2X = end.x;
        const control2Y = startY + (end.y - startY) * offset;

        return `M ${startX} ${startY} C ${control1X} ${control1Y}, ${control2X} ${control2Y}, ${end.x} ${end.y}`;
    };

    return (
        <section className="relative hidden md:block bg-white py-10 px-6 overflow-hidden">
            <div ref={containerRef} className="max-w-7xl mx-auto relative min-h-[800px]">
                {/* Title */}
                <div className="text-center mb-6">
                    <h2 className="text-black text-6xl font-bold">
                        Technologies We Work With
                    </h2>
                    <p className="text-gray-600 text-lg mt-4">
                        We leverage cutting-edge tools and frameworks to craft scalable, high-performing digital solutions effortlessly.
                    </p>

                </div>

                {/* SVG paths - behind everything */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
                    <defs>
                        <linearGradient id="mapLine" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#000" />    {/* Vivid Yellow */}
                            {/* Light Pink */}
                        </linearGradient>

                    </defs>
                    {iconPositions.map((pos, i) => (
                        <path
                            key={i}
                            ref={(el: any) => el && (linesRef.current[i] = el)}
                            d={generatePath(pos)}
                            fill="none"
                            stroke="url(#mapLine)"
                            strokeWidth="1"
                            strokeDasharray="6,0"
                            opacity="0.3"
                        />
                    ))}
                </svg>

                {/* Icons - higher z-index */}
                {iconPositions.map((pos, i) => {
                    const icon = i < topRow.length ? topRow[i] : bottomRow[i - topRow.length];
                    return (
                        <motion.div
                            key={icon.id}
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: i * 0.1 }}
                            className={`w-14 md:w-28 h-14 md:h-28 ${icon.color} rounded-2xl flex items-center justify-center text-white text-sm font-medium backdrop-blur-md absolute z-30`}
                            style={{
                                left: pos.x - iconSize / 2,
                                top: pos.y - iconSize / 2,
                            }}
                        >
                            <Image src={icon.name} alt="icons" width={50} height={50} />
                        </motion.div>
                    );
                })}

                {/* Center - higher z-index */}
                <div
                    className="absolute py-4 px-4 bg-black rounded-2xl flex items-center justify-center text-lg font-bold shadow-xl border-2 border-white z-40"
                    style={{
                        left: center.x,
                        top: center.y,
                        transform: "translate(-50%, -50%)"
                    }}
                >
                    <Image src={logo2} alt="bixeltek logo" className="h-7 w-auto" />
                </div>
            </div>
        </section>
    );
};

export default HomeIntegrationMindMap;