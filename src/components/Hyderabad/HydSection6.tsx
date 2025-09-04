"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import hydImage from "@/assets/counter.webp";
import { Search, ShieldCheck, Users, BarChart3 } from "lucide-react";
import { FaRegEye } from "react-icons/fa";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function BenefitsSection() {
  const sectionRef = useRef<HTMLElement | null>(null);

  const benefits = [
    {
      icon: <FaRegEye className="w-6 h-6 text-blue-400 group-hover:text-white" />,
      title: "More Visibility",
      desc: "Be discovered when customers search for your services.",
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-blue-400   group-hover:text-white" />,
      title: "More Trust",
      desc: "A strong online presence makes your business credible.",
    },
    {
      icon: <Users className="w-6 h-6 text-blue-400   group-hover:text-white" />,
      title: "More Leads",
      desc: "SEO and ads generate steady, qualified inquiries.",
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-blue-400   group-hover:text-white" />,
      title: "More ROI",
      desc: "Every rupee is tracked, measured, and optimized.",
    },
  ];

  useEffect(() => {
    if (sectionRef.current) {
      const items = sectionRef.current.querySelectorAll(".benefit-item");

      gsap.fromTo(
        items,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        }
      );

      const heading = sectionRef.current.querySelector(".benefits-heading");
      gsap.fromTo(
        heading,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        }
      );
    }
  }, []);

  return (
    <section
      ref={sectionRef}
      className="max-w-[85%] mx-auto bg-black flex flex-col md:flex-row items-stretch gap-20"
    >
      {/* Left Content */}
      <div className="w-full md:w-1/2 px-0 py-2 md:py-16 flex flex-col justify-center">
        <h2 className="benefits-heading text-4xl md:text-6xl font-bold mb-6 text-white">
          Benefits for Businesses in{" "}
          <span className="text-blue-500">Hyderabad</span>
        </h2>
        <p className="text-lg text-gray-300 mb-8 leading-relaxed">
          When digital marketing works, here’s what changes:
        </p>
        <div className="relative w-full h-72 md:h-96 rounded-lg overflow-hidden shadow-lg">
          <Image
            src={hydImage}
            alt="Hyderabad Business Growth"
            fill
            className="object-cover rounded-lg"
          />
        </div>
      </div>

      {/* Right Side with Flex Columns */}
      <div className="w-full md:w-1/2 md:px-6 py-2 md:py-16 flex flex-col justify-center items-center">
        <div className="flex flex-col md:flex-row gap-4 md:gap-12">

          {/* Left Column */}
          <div className="flex  w-full md:w-1/2 md:mt-[-50px] flex-col gap-4 md:gap-10">
            {benefits.slice(0, 2).map((item, i) => (
              <div key={i} className="relative">
                {/* Glowing Ball Behind (keep it inside the card wrapper) */}
                <div className="absolute -inset-10 flex items-center justify-center z-0">
                  <div className="w-40 h-40 rounded-full bg-blue-500 opacity-60 blur-3xl"></div>
                </div>

                {/* Glassmorphic Card */}
                <div
                  className={`relative flex group flex-col items-start gap-4 p-6 
            rounded-3xl border border-white/10
            bg-black/40 backdrop-blur-lg z-10`}
                >
                  <div className="p-3 bg-transparent rounded-full">{item.icon}</div>
                  <h3 className="text-2xl font-inter font-semibold text-blue-500">{item.title}</h3>
                  <p className="text-sm text-gray-100">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column */}
          <div className="flex w-full md:w-1/2 md:mt-[50px] flex-col gap-4 md:gap-10">
            {benefits.slice(2, 4).map((item, i) => (
              <div key={i} className="relative">
                {/* Glowing Ball Behind */}
                <div className="absolute -inset-10 flex items-center justify-center z-0">
                  <div className="w-40 h-40 rounded-full bg-blue-500 opacity-60 blur-3xl"></div>
                </div>

                {/* Glassmorphic Card */}
                <div
                  className={`relative flex flex-col group items-start gap-4 p-6 
            rounded-3xl border border-white/10
            bg-black/40 backdrop-blur-lg z-10`}
                >
                  <div className="p-3 bg-transparent rounded-full">{item.icon}</div>
                  <h3 className="text-2xl font-inter font-semibold text-blue-500">{item.title}</h3>
                  <p className="text-sm text-gray-100">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}
