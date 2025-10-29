'use client';
import React, { useRef, useState, useLayoutEffect } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import logo2 from '@/assets/BIXELTEKLOGO (1).png'
import googleadslogo from '@/assets/googleads-logo.png'
import Image from "next/image";
import shopifylogo from '@/assets/shopifylogo.png'
import screadmingfrog from '@/assets/screaming-frog-logo-png_seeklogo-494295.png'
import sitebulb from '@/assets/square.png'
import react from '@/assets/React-icon.svg (1).png'
import slack from '@/assets/Slack_icon_2019.svg.png'
import woo from '@/assets/woocommerce.png'
import zapier from '@/assets/zapier-icon-svgrepo-com.png'
import magento from '@/assets/magento-2-logo-svgrepo-com.png'
import mailchimp from '@/assets/mailchimp-svgrepo-com.png'
import nextjs from '@/assets/dango-inner-2.webp'
import wordpress from '@/assets/wordpress-color-svgrepo-com.png'
import elementor from '@/assets/Elementor-Logo-Symbol-Red.png'
import semrushlogo from '@/assets/1000174561.png'
import rankmath from '@/assets/rank-math-logo-square.png'
import cloudflare from '@/assets/cloudflare.png'
import googlean from '@/assets/4202007_analytics_google_logo_social_social media_icon.png'
import notion from '@/assets/Notion-logo.svg.png'
import jetoct from '@/assets/jetoct.png'
import next from "next";

gsap.registerPlugin(MotionPathPlugin);

const TechnicalTech = () => {
  const linesRef = useRef<SVGPathElement[]>([]);
  const dotsRef = useRef<HTMLDivElement[][]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  const iconSize = 112;

  const topRow = [
    { id: 1, name: screadmingfrog, color: "border border-green-400" },
    { id: 2, name: sitebulb, color: "border border-blue-400" },
    { id: 3, name: shopifylogo, color: "border border-emerald-400" },
    { id: 4, name: slack, color: "border border-violet-400" },
    { id: 9, name: jetoct, color: "border border-yellow-400" },
    { id: 10, name: cloudflare, color: "border border-orange-400" },
  ];

  const bottomRow = [
    { id: 5, name: googlean, color: "border border-orange-400" },
    { id: 6, name: rankmath, color: "border border-indigo-400" },
    { id: 7, name: wordpress, color: "border border-indigo-400" },
    { id: 8, name: semrushlogo, color: "border border-orange-400" },
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
      dot.className = 'w-full h-full bg-red-600 rounded-full shadow shadow-[#d00000]';
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
    <section className="relative hidden md:block bg-black py-10 px-6 overflow-hidden">
      <div ref={containerRef} className="max-w-7xl mx-auto relative min-h-[800px]">
        {/* Title */}
        <div className="text-center mb-6">
          <h2 className="text-white text-6xl font-bold">
            The Tools Behind  <span className="text-blue-500">the Precision</span>
          </h2>
          <p className="text-gray-400 mt-6 text-lg">
            We use enterprise-grade tools and proprietary scripts to achieve consistency at scale.
          </p>
        </div>

        {/* SVG paths - behind everything */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
          <defs>
<linearGradient id="mapLine" x1="0%" y1="0%" x2="100%" y2="100%">
  <stop offset="0%" stopColor="#fff" />    {/* Vivid Yellow */}
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
              strokeWidth="2"
              strokeDasharray="6,0"
              opacity="0.7"
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

export default  TechnicalTech;