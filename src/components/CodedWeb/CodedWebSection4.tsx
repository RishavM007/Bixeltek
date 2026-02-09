"use client";
import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import icon1 from '@/assets/generated-svg-image (10).png'
import icon2 from '@/assets/generated-svg-image (11).png'

// ✅ Replace these with your own image imports
import sampleImg1 from "@/assets/what-we-highlighted-image.jpg";
import sampleImg2 from "@/assets/what-we-image.jpg";
import Link from "next/link";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 60,
    scale: 0.9
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
      duration: 0.8
    }
  }
};

const imageCardVariants = {
  hidden: { 
    opacity: 0, 
    y: 60,
    scale: 0.9
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 12,
      duration: 1
    }
  }
};

const headingVariants = {
  hidden: { 
    opacity: 0, 
    y: 40 
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
      duration: 0.8
    }
  }
};

const buttonVariants = {
  hidden: { 
    opacity: 0, 
    scale: 0.8 
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 15,
      delay: 0.5
    }
  },
  hover: {
    scale: 1.05,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10
    }
  }
};

const SecureByDefault = () => {
  return (
    <section className="relative w-full bg-black text-white py-14 md:py-24 px-6 md:px-16 overflow-hidden">
      {/* Heading Section */}
      <motion.div 
        className="max-w-4xl mx-auto text-center mb-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={containerVariants}
      >
        <motion.h2 
          className="text-3xl md:text-6xl font-medium mb-6"
          variants={headingVariants}
        >
          Secure by Default, <span className="text-blue-500">Inclusive by Design</span> 
        </motion.h2>
        <motion.p 
          className="text-gray-300 text-lg mb-8"
          variants={headingVariants}
        >
          Our infrastructure follows global security and accessibility standards —
          from OWASP ASVS and HSTS to GDPR compliance and WCAG conformance.
        </motion.p>
        <Link href='/case-studies'>
        <motion.button 
          className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 transition-all text-white px-6 py-3 rounded-xl font-semibold"
          variants={buttonVariants}
          whileHover="hover"
        >
          Learn More <ArrowRight className="w-4 h-4" />
        </motion.button>
        </Link>
      </motion.div>

      {/* Cards Section */}
      <motion.div 
        className="flex justify-center items-end md:items-start lg:items-end  gap-6 max-w-[90%] mx-auto flex-col lg:flex-row"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={containerVariants}
      >
        {/* 1️⃣ Card 1 — Text + Description */}
        <motion.div 
          className="flex flex-col justify-between bg-[#111111] rounded-3xl p-6 transition-all hover:bg-[#1A1A1A] h-[270px] lg:h-[460px] w-full lg:w-[18%] hover:shadow-2xl hover:shadow-blue-500/10 cursor-pointer"
          variants={cardVariants}
          whileHover={{ 
            y: -10,
            transition: { type: "spring", stiffness: 300 }
          }}
        >
          <div>
            <h3 className="text-xl font-semibold mb-3">
              OWASP ASVS, CSP, HSTS, SSO
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Our systems align with global security protocols, ensuring layered
              protection across every service we deploy.
            </p>
          </div>
        </motion.div>

        {/* 2️⃣ Card 2 — Text only */}
        <motion.div 
          className="flex flex-col justify-between bg-[#111111] border-2 border-blue-500 rounded-3xl p-6 transition-all hover:bg-[#1A1A1A] h-[300px] w-full lg:w-[18%] hover:shadow-2xl hover:shadow-green-500/10 cursor-pointer"
          variants={cardVariants}
          whileHover={{ 
            y: -8,
            transition: { type: "spring", stiffness: 300 }
          }}
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 150, delay: 0.5 }}
          >
            <Image src={icon1} alt="icon1" className="w-16 h-auto" />
          </motion.div>
          <h3 className="text-xl font-semibold">
            Automated dependency scanning in CI/CD.
          </h3>
        </motion.div>

        {/* 3️⃣ Card 3 — Image + Heading Overlay */}
        <motion.div 
          className="relative rounded-3xl overflow-hidden h-[220px] w-full lg:w-[22%] cursor-pointer"
          variants={imageCardVariants}
          whileHover={{ 
            scale: 1.03,
            transition: { type: "spring", stiffness: 300 }
          }}
        >
          <Image
            src={sampleImg1}
            alt="Security compliance visual"
            fill
            className="object-cover"
          />
          <motion.div 
            className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
          >
            <motion.h3 
              className="text-xl font-semibold"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1 }}
            >
              Accessibility Compliance
            </motion.h3>
          </motion.div>
        </motion.div>

        {/* 4️⃣ Card 4 — Text only */}
        <motion.div 
          className="flex flex-col justify-between bg-[#111111] border-2 border-red-500 rounded-3xl p-6 transition-all hover:bg-[#1A1A1A] h-[300px] w-full lg:w-[18%] hover:shadow-2xl hover:shadow-purple-500/10 cursor-pointer"
          variants={cardVariants}
          whileHover={{ 
            y: -8,
            transition: { type: "spring", stiffness: 300 }
          }}
        >
          <motion.div
            initial={{ scale: 0, rotate: 180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 150, delay: 0.7 }}
          >
            <Image src={icon2} alt="icon1" className="w-16 h-auto" />
          </motion.div>
          <h3 className="text-xl font-semibold">
           WCAG 2.2 AA/AAA accessibility conformance.
          </h3>
        </motion.div>

        {/* 5️⃣ Card 5 — Image only */}
        <motion.div 
          className="relative rounded-[40px] overflow-hidden h-[300px] lg:h-[500px] w-full lg:w-[18%] cursor-pointer"
          variants={imageCardVariants}
          whileHover={{ 
            scale: 1.03,
            transition: { type: "spring", stiffness: 300 }
          }}
        >
          <Image
            src={sampleImg2}
            alt="Data security infrastructure"
            fill
            className="object-cover"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default SecureByDefault;