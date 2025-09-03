"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import hydimage from "@/assets/trung-do-M8vzqHP7ERA-unsplash.jpg";
import { Search, ShieldCheck, Users, BarChart3 } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function BenefitsSection() {
  const sectionRef = useRef<HTMLElement | null>(null);

  const benefits = [
    {
      icon: <Search className="w-6 h-6 text-blue-400" />,
      title: "More Visibility",
      desc: "Customers find you when they search.",
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-blue-400" />,
      title: "More Trust",
      desc: "A consistent online presence makes you credible.",
    },
    {
      icon: <Users className="w-6 h-6 text-blue-400" />,
      title: "More Leads",
      desc: "SEO and Ads bring steady, qualified inquiries.",
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-blue-400" />,
      title: "More ROI",
      desc: "Every rupee is tracked, measured, and optimized.",
    },
  ];

  useEffect(() => {
    if (sectionRef.current) {
      const items = sectionRef.current.querySelectorAll(".benefit-item");
      gsap.fromTo(
        items,
        { y: 80, opacity: 0, rotateX: 45 },
        {
          y: 0,
          opacity: 1,
          rotateX: 0,
          duration: 1.2,
          ease: "bounce.out",
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
        { y: 60, opacity: 0 },
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

      const buttons = sectionRef.current.querySelectorAll(".cta-btn");
      gsap.fromTo(
        buttons,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
          },
        }
      );
    }
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-black flex flex-col md:flex-row gap-10 items-stretch"
    >
      {/* Left side image */}
      <div className="w-full md:w-1/2 relative">
        <Image
          src={hydimage}
          alt="Business Growth"
          fill
          className="object-cover rounded-r-full"
        />
      </div>

      {/* Right side content */}
      <div className="w-full md:w-1/2 px-8 py-12 md:py-16 flex flex-col justify-center">
        <h2 className="benefits-heading text-6xl font-bold mb-6 text-white">
          Benefits for Businesses in <span className="text-blue-500">Hyderabad</span>
        </h2>
        <p className="text-lg text-gray-300 mb-8">
          When digital marketing works, here’s what changes:
        </p>

        {/* 2x2 Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
          {benefits.map((item, i) => (
            <div key={i} className="benefit-item flex items-start gap-4 py-4 bg-black  rounded-lg">
              <div className="flex-shrink-0">{item.icon}</div>
              <div className="flex flex-col gap-2">
                <h3 className="font-semibold  text-xl font-inter text-white">{item.title}</h3>
                <p className="font-poppins text-sm text-gray-100">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-2 w-full bg-blue-500 flex flex-col justify-center items-center text-white text-center py-6 rounded-lg">
          Ready to grow your business? Contact us today!
          <div className="mt-4 flex gap-6">
            <button className="cta-btn px-8 py-3 bg-blue-900 hover:bg-blue-800 text-white font-medium rounded-full transition-colors duration-300">
              Get Started
            </button>
            <button className="cta-btn px-8 py-3 border bg-white border-blue-600 text-blue-900 hover:bg-blue-900 hover:text-white font-medium rounded-full transition-colors duration-300">
              Learn More
            </button>
          </div>

        </div>

        {/* CTA Buttons */}

        {/* Banner at the bottom */}

      </div>
    </section>
  );
}
