"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    company: "Tasks Expert",
    text: "Working with Bluvo Digital was a game-changer for us. Within just two months, we surpassed both our lead and revenue goals. Their team truly understands performance marketing and delivers real, measurable results.",
    name: "Noaman Ansari",
    role: "CEO",
    image: "/person.jpg",
  },
  {
    company: "Brazen Born",
    text: "Bluvo Digital helped launch my fashion brand, Brazen Born, and we started getting orders sooner than expected. Their strategy, ad targeting, and messaging were spot on. I’d recommend them to anyone starting a business.",
    name: "Nisha Sheth",
    role: "Founder",
    image: "/istockphoto-1409948380-612x612.jpg",
  },
  {
    company: "Other Client",
    text: "Bluvo Digital led to a clear increase in traffic and a noticeable drop in ad costs. Their team was professional, met deadlines, and provided excellent support throughout.",
    name: "Arjun Mehta",
    role: "Entrepreneur",
    image: "/person.jpg",
  },
  {
    company: "Future Vision",
    text: "The Bluvo Digital team was amazing, they brought structure, creativity and strategy. Our campaigns have been performing better than ever.",
    name: "Sneha Kapoor",
    role: "Marketing Head",
    image: "/person.jpg",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () =>
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  // Helper to get testimonial at relative position (with wrapping)
  const getTestimonial = (offset: number) => {
    const newIndex = (index + offset + testimonials.length) % testimonials.length;
    return testimonials[newIndex];
  };

  return (
    <section className="bg-[#131313] mt-10 text-white py-16 px-6 md:px-20 relative overflow-hidden">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-6xl font-bold">
          Built on <span className="text-blue-500">Trust</span>. Backed by{" "}
          <span className="text-blue-500">Results</span>.
        </h2>
        <p className="text-gray-200 mt-4">
          You don’t have to take our word for it. Our clients explain it better
          than we ever could.
        </p>
      </div>

      <div className="relative flex items-center justify-center h-[450px]">
        {/* Left */}
        <motion.div
          key={getTestimonial(-1).name}
          initial={{ x: "-100%", scale: 0.85, opacity: 0.5, filter: "blur(3px)" }}
          animate={{ x: "-60%", scale: 0.9, opacity: 0.6, filter: "blur(3px)" }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="absolute w-[70%] md:w-[40%] bg-neutral-900 rounded-xl shadow-lg overflow-hidden"
        >
          <Card {...getTestimonial(-1)} />
        </motion.div>

        {/* Center */}
        <motion.div
          key={getTestimonial(0).name}
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ x: "0%", scale: 1, opacity: 1, filter: "blur(0px)" }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="absolute w-[85%] md:w-[50%] bg-neutral-900 rounded-xl shadow-xl overflow-hidden z-10"
        >
          <Card {...getTestimonial(0)} />
        </motion.div>

        {/* Right */}
        <motion.div
          key={getTestimonial(1).name}
          initial={{ x: "100%", scale: 0.85, opacity: 0.5, filter: "blur(3px)" }}
          animate={{ x: "60%", scale: 0.9, opacity: 0.6, filter: "blur(3px)" }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="absolute w-[70%] md:w-[40%] bg-neutral-900 rounded-xl shadow-lg overflow-hidden"
        >
          <Card {...getTestimonial(1)} />
        </motion.div>
      </div>

      {/* Navigation */}
      <div className="flex justify-center mt-10 gap-6">
        <button
          onClick={prev}
          className="p-3 rounded-full bg-neutral-800 hover:bg-neutral-700 transition"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={next}
          className="p-3 rounded-full bg-neutral-800 hover:bg-neutral-700 transition"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </section>
  );
}

function Card({
  company,
  text,
  name,
  role,
  image,
}: {
  company: string;
  text: string;
  name: string;
  role: string;
  image: string;
}) {
  return (
    <div className="flex flex-col md:flex-row h-[400px]"> 
      {/* Force same height */}
      <img
        src={image}
        alt={name}
        className="w-full md:w-2/5 object-cover h-full" // <-- fills full card height
      />
      <div className="p-6 flex flex-col justify-center h-full">
        <h4 className="text-sm text-gray-400">{company}</h4>
        <p className="text-lg mt-3 leading-relaxed flex-grow overflow-hidden">
          “{text}”
        </p>
        <div className="mt-6">
          <p className="font-semibold">{name}</p>
          <p className="text-sm text-gray-400">{role}</p>
        </div>
      </div>
    </div>
  );
}

