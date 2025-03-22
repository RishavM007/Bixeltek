'use client';
import React, { useState } from "react";
import { motion } from "framer-motion";

const testimonials = [
    {
        id: 1,
        name: "Jane D",
        role: "CEO",
        image: "https://pagedone.io/asset/uploads/1696229969.png",
        feedback: "The user interface of this pagedone is so intuitive, I was able to start using it without any guidance.",
    },
    {
        id: 2,
        name: "John S",
        role: "Developer",
        image: "https://pagedone.io/asset/uploads/1696229969.png",
        feedback: "This tool has significantly improved my workflow efficiency and speed.",
    },
    {
        id: 3,
        name: "Emily R",
        role: "Designer",
        image: "https://pagedone.io/asset/uploads/1696229969.png",
        feedback: "I love the design system and the ease of customization.",
    },
    {
        id: 4,
        name: "Michael B",
        role: "Product Manager",
        image: "https://pagedone.io/asset/uploads/1696229969.png",
        feedback: "Amazing experience! Highly recommended for teams.",
    },
    {
        id: 5,
        name: "Sarah K",
        role: "Marketing Lead",
        image: "https://pagedone.io/asset/uploads/1696229969.png",
        feedback: "A fantastic product with a seamless experience.",
    },
    {
        id: 6,
        name: "David L",
        role: "CTO",
        image: "https://pagedone.io/asset/uploads/1696229969.png",
        feedback: "Very impressed with the performance and design.",
    },
];

const TestimonialSection = () => {
    const [index, setIndex] = useState(0);

    const itemsPerSlide = 2; // Two testimonials per slide
    const totalSlides = Math.ceil(testimonials.length / itemsPerSlide);

    const handleNext = () => {
        setIndex((prevIndex) => (prevIndex + 1) % totalSlides);
    };

    const handleBack = () => {
        setIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
    };

    return (
        <section className="py-12">
            <div className="mx-auto max-w-full px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-8">
                    {/* Left Section with Buttons */}
                    <div className="w-1/3 text-center ml-10 lg:text-left">
                        <span className="text-lg text-gray-600 font-sofiasanscondensed font-medium mb-4 block">
                            Testimonial
                        </span>
                        <h2 className="text-6xl font-bold text-gray-900 font-sofiasanscondensed leading-[3.25rem] mb-8">
                            3k+ Customers gave their{" "}
                            <span className="text-transparent bg-clip-text">
                                <span className="text-blue-500">F</span>
                                <span className="text-red-500">e</span>
                                <span className="text-yellow-500">e</span>
                                <span className="text-blue-500">d</span>
                                <span className="text-green-500">b</span>
                                <span className="text-red-500">a</span>
                                <span className="text-yellow-500">c</span>
                                <span className="text-blue-500">k</span>
                            </span>
                        </h2>
                        <div className="flex justify-center lg:justify-start gap-6">
                            <button
                                onClick={handleBack}
                                className="group flex justify-center items-center border border-gray-400 w-12 h-12 rounded-lg transition-all duration-500 hover:bg-gray-700 hover:border-gray-700"
                            >
                                <svg
                                    className="h-6 w-6 text-gray-600 group-hover:text-white"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M21 12H5M10 6L4.707 11.293C4.373 11.627 4.207 11.793 4.207 12C4.207 12.207 4.373 12.373 4.707 12.707L10 18"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </button>
                            <button
                                onClick={handleNext}
                                className="group flex justify-center items-center border border-indigo-600 w-12 h-12 rounded-lg transition-all duration-500 hover:bg-blue-500 hover:border-blue-500"
                            >
                                <svg
                                    className="h-6 w-6 text-indigo-600 group-hover:text-white"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M3 12L19 12M14 18L19.2929 12.7071C19.6262 12.3738 19.7929 12.2071 19.7929 12C19.7929 11.7929 19.6262 11.6262 19.2929 11.2929L14 6"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* Testimonials Section */}
                    <div className="w-2/3 overflow-hidden relative">
                        <motion.div
                            className="flex"
                            animate={{ x: `-${index * 100}%` }}
                            transition={{ type: "tween", duration: 0.5 }}
                            style={{ width: `${totalSlides * 100}%` }}
                        >
                            {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                                <div
                                    key={slideIndex}
                                    className="w-full flex-shrink-0 flex gap-6"
                                    style={{ minWidth: "50%" }}
                                >
                                    {testimonials
                                        .slice(slideIndex * itemsPerSlide, slideIndex * itemsPerSlide + itemsPerSlide)
                                        .map((testimonial) => (
                                            <div
                                                key={testimonial.id}
                                                className={`group bg-white border-2 rounded-2xl max-w-md min-h-[250px] flex flex-col justify-center p-6 transition-all duration-500 ${
                                                    testimonial.id === 1
                                                        ? "border-indigo-500"
                                                        : testimonial.id === 2
                                                        ? "border-red-500"
                                                        : testimonial.id === 3
                                                        ? "border-yellow-500"
                                                        : testimonial.id === 4
                                                        ? "border-pink-500"
                                                        : testimonial.id === 5
                                                        ? "border-green-500"
                                                        : "border-purple-500"
                                                }`}
                                            >
                                                <div className="flex items-center gap-5 mb-5 sm:mb-9">
                                                    <img
                                                        className="rounded-full object-cover w-14 h-14"
                                                        src={testimonial.image}
                                                        alt="avatar"
                                                    />
                                                    <div className="grid gap-1">
                                                        <h5 className="text-gray-900 font-medium text-2xl">
                                                            {testimonial.name}
                                                        </h5>
                                                        <span className="text-sm leading-6 text-gray-600">
                                                            {testimonial.role}
                                                        </span>
                                                    </div>
                                                </div>
                                                <p className="text-gray-500 leading-6 text-lg group-hover:text-gray-800">
                                                    {testimonial.feedback}
                                                </p>
                                            </div>
                                        ))}
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TestimonialSection;
