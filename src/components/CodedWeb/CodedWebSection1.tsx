"use client";
import React from "react";
import Image from "next/image";
import heroImg from "@/assets/laptop dentist 2.png"; // Replace with your image

export default function CustomDevelopmentSection() {
  return (
    <section className="relative w-full bg-black text-white pt-24 pb-16  md:py-24 px-6 md:px-12">
      <div className="md:max-w-[85%] mx-auto flex flex-col-reverse lg:flex-row-reverse items-center gap-12">
        
        {/* Left Content */}
        <div className="flex-1">
          <h2 className="text-3xl md:text-5xl font-medium mb-6">
            A Website Built Around <span className="text-blue-500">Logic, Not Limitations</span> 
          </h2>
          <p className="text-gray-100 mb-4">
            A custom-coded website is written from the ground up — line by line, component by component —
            using frameworks such as React, Next.js, Node.js, and Laravel.
          </p>
          <p className="text-gray-100 mb-4">
            Unlike pre-packaged templates or drag-and-drop editors, every element of a custom build is designed
            to meet specific business goals: speed, structure, and scalability.
          </p>

          <p className="text-gray-300 font-semibold mb-3">Custom development gives Bixeltek full control of:</p>
          <ul className="list-disc list-inside text-gray-100 space-y-2 mb-4">
            <li><span className="font-semibold text-blue-500">Architecture:</span> how your content, data, and URLs are structured.</li>
            <li><span className="font-semibold text-blue-500">Rendering:</span> whether pages pre-render, cache, or hydrate dynamically.</li>
            <li><span className="font-semibold text-blue-500">Integration:</span> how marketing tools, APIs, and analytics communicate.</li>
            <li><span className="font-semibold text-blue-500">Performance:</span> how quickly your site paints, interacts, and ranks.</li>
          </ul>

          <p className="text-gray-300">
            The result is not just a beautiful interface — it’s a technical system that grows with your business.
          </p>
        </div>

        {/* Right Image */}
        <div className="flex-1">
          <Image
            src={heroImg}
            alt="Custom Development Illustration"
            className="w-full rounded-xl shadow-lg"
            priority
          />
        </div>
      </div>
    </section>
  );
}
