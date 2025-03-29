'use client';
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import React from 'react';
import ahref from '@/assets/ahref.png';
import semrush from '@/assets/629a40b63e59ee069da94c81.png';
import seranking from '@/assets/SERanking.png';
import looker from '@/assets/Looker_6f803d7fdc.webp';
import wordpress from '@/assets/wordpress.png';
import elementor from '@/assets/elementor.png';
import nextjsicon from '@/assets/icons8-nextjs-96.png';
import reactksicon from '@/assets/1174949_js_react js_logo_react_react native_icon.png';
import tailwindcsslogo from '@/assets/Tailwind CSS.png';

const techIcons = [
  { src: ahref.src, alt: "Ahref", x: -450, y: -300 },
  { src: semrush.src, alt: "Semrush", x: 450, y: -300 },
  { src: seranking.src, alt: "SERanking", x: -600, y: 150 },
  { src: looker.src, alt: "Looker", x: 550, y:130 },
  { src: wordpress.src, alt: "WordPress", x: 0, y: -200 },
  { src: elementor.src, alt: "Elementor", x: -550, y: -130 },
  { src: nextjsicon.src, alt: "Next.js", x: -250, y: 200 },
  { src: reactksicon.src, alt: "React.js", x: 550, y: -130 },
  { src: tailwindcsslogo.src, alt: "Tailwind CSS", x: 180, y: 230 },
];

export default function TechWeUse() {
  const controls = useAnimation();
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.3 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [inView, controls]);

  return (
    <section className="relative flex items-center justify-center h-screen bg-black text-white overflow-hidden">
      <div ref={ref} className="absolute text-center z-10">
      <span className="py-1 px-4 bg-indigo-100 rounded-full text-xs font-medium text-indigo-500 text-center">Technologies</span>
        <h2 className="text-4xl md:text-6xl font-sofiasanscondensed text-center font-bold mt-10">Integrating Cutting-edge Web Technologies</h2>
        <p className="mt-4 font-poppins text-center  max-w-xl mx-auto">
          Integrating different systems, technologies, or tools is a crucial process that enables seamless communication and functionality.
        </p>
      </div>
      {techIcons.map((icon, index) => (
        <motion.img
          key={index}
          src={icon.src}
          alt={icon.alt}
          className="absolute  w-auto h-16"
          initial="hidden"
          loading="lazy"
          animate={controls}
          variants={{
            hidden: { opacity: 0, scale: 0.5, x: 0, y: 0 },
            visible: {
              opacity: 1,
              scale: 1,
              x: icon.x,
              y: icon.y,
              transition: { duration: 0.8, ease: "easeOut" },
            },
            exit: { opacity: 0, scale: 0.7, y: -50, transition: { duration: 0.6, ease: "easeInOut" } },
          }}
        />
      ))}
    </section>
  );
}