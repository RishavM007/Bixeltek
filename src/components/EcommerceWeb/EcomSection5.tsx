"use client";
import React from "react";
import Image from "next/image";
import { Brain, Timer, ShoppingCart, Sparkles, BarChart3 } from "lucide-react"; // Icons
import psychologyImg from "@/assets/E-Commerce-Website.png"; // 🖼️ Replace with your actual image

const psychologyPoints = [
  {
    icon: <Brain className="w-6 h-6 text-blue-400" />,
    title: "Fogg’s Behavior Model",
    desc: "Prompt + motivation + ability alignment drives action and boosts conversion.",
  },
  {
    icon: <BarChart3 className="w-6 h-6 text-green-400" />,
    title: "Anchoring & Decoy Pricing",
    desc: "Used strategically to influence perceived value and increase average order value.",
  },
  {
    icon: <Timer className="w-6 h-6 text-orange-400" />,
    title: "Urgency Cues",
    desc: "Stock countdowns and delivery promises that create genuine urgency without pressure.",
  },
  {
    icon: <Sparkles className="w-6 h-6 text-pink-400" />,
    title: "Micro-Interactions",
    desc: "Subtle animations reinforcing user progress, trust, and satisfaction.",
  },
];

const DesignPsychologySection = () => {
  return (
    <section className="bg-black text-white md:py-20 max-w-[90%] mx-auto px-6 md:px-20 flex flex-col md:flex-row-reverse items-center md:gap-12">
      {/* Left - Image */}
      <div className="w-full hidden md:block md:w-1/2 relative">
        <div className="rounded-2xl overflow-hidden shadow-2xl">
          <Image
            src={psychologyImg}
            alt="Design Psychology Illustration"
            className="object-contain h-[450px] w-full"
            priority
          />
        </div>
      </div>

      {/* Right - Content */}
      <div className="w-full md:w-1/2 space-y-6">
        <h2 className="text-3xl md:text-5xl font-inter font-medium leading-tight">
          How <span className="text-blue-600">Design Psychology</span> Becomes{" "}
          <span className="text-blue-600">Measurable Revenue</span>
        </h2>

        <p className="text-gray-300 text-base md:text-lg font-poppins leading-relaxed">
          Every store is designed around cognitive flow. We employ proven behavioral principles that guide users seamlessly from curiosity to checkout.
        </p>

        <div className="space-y-6 pt-4">
          {psychologyPoints.map((item, idx) => (
            <div key={idx} className="flex items-start gap-4">
              <div className="flex-shrink-0 mt-1">{item.icon}</div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-1">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-gray-300 text-base md:text-lg font-poppins leading-relaxed pt-6">
          Every design decision is validated by data. Our UX testing isn’t artistic — it’s behavioral science applied to checkout velocity.
        </p>
      </div>
    </section>
  );
};

export default DesignPsychologySection;
