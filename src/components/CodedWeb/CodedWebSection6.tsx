"use client";
import React from "react";
import { motion } from "framer-motion";

// Replace with your actual background image import
import bgImage from "@/assets/dark-section-bg.png";

const steps = [
  {
    number: "01",
    title: "Seamless Integration",
    description: "We combine CMS simplicity with custom flexibility, making websites easy to manage and fully scalable."
  },
  {
    number: "02",
    title: "Data-Driven Design",
    description: "Design decisions are guided by analytics and user behavior, ensuring interfaces that engage effectively."
  },
  {
    number: "03",
    title: "High Conversion",
    description: "Optimized for speed, SEO, and conversions, our websites deliver measurable results and better user experiences."
  },
  {
    number: "04", 
    title: "Systems of Digital Excellence",
    description: "We build lasting digital systems that adapt, perform, and generate meaningful impact for your business."
  }
];

const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 60,
    scale: 0.9
  },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
      delay: i * 0.2,
      duration: 0.8
    }
  })
};

const HowItWorks = () => {
  return (
    <section 
      className="relative w-full min-h-screen bg-black text-white py-24 px-6 md:px-16 overflow-hidden"
      style={{
        backgroundImage: `url(${bgImage.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay for better readability */}
      <div className="absolute inset-0 bg-black/20 backdrop-blur-[1px]"></div>
      
      <div className="relative max-w-7xl mx-auto z-10">
        {/* Heading Section */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-sm md:text-base font-medium mb-6 uppercase tracking-wide font-poppins">
            Why Choose Us
          </h2>
          <p className="text-3xl md:text-6xl text-gray-300 mb-4">
            Because We Engineer for Clarity, <span className="text-blue-500">Not Complexity</span> 
          </p>
          <div className="w-24 h-1 bg-blue-500 mx-auto mt-8"></div>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-20">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={cardVariants}
              whileHover={{ 
                y: -10,
                scale: 1.02,
                transition: { type: "spring", stiffness: 300 }
              }}
              className="group"
            >
              <div className="bg-gradient-to-br from-gray-900/10 to-gray-800/20 backdrop-blur-3xl rounded-3xl p-8 border border-gray-700/50 hover:border-blue-500/30 transition-all duration-500 h-full">
                {/* Number Badge */}
                <div className="flex items-center gap-6 mb-6">
                  <div className="flex-shrink-0">
                    <span className="text-2xl md:text-3xl font-inter font-bold text-blue-500 bg-blue-500/10 px-4 py-3 rounded-2xl">
                      {step.number}
                    </span>
                  </div>
                  <div className="w-full h-px bg-gradient-to-r from-blue-500/50 to-transparent"></div>
                </div>

                {/* Content */}
                <h3 className="text-lg md:text-xl font-medium mb-4 text-white group-hover:text-blue-400 transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-gray-100 text-base leading-relaxed">
                  {step.description}
                </p>

                {/* Hover Indicator */}
                <div className="mt-6 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <div className="w-20 h-0.5 bg-blue-500 rounded-full"></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
       
      </div>
    </section>
  );
};

export default HowItWorks;