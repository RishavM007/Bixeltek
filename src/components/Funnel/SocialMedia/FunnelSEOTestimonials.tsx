"use client";
import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    quote:
      "As a dentist in Canada, we wasted money on Google Ads that brought no patients. Bixeltek restructured our campaigns, targeted the right keywords, and tracked results properly. Now our ads actually bring in new patients every week, and the return on ad spend is clear.",
    name: "Revita Dentistry",
    title: "Dentist (Canada)",
    img: "https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-female.png",
  },
  {
    quote:
      "Our arborist company in Canada had been running ads for years, but they were broken and draining money. Bixeltek applied their AI-first approach, optimized budgets, and focused on local leads. Today we’re getting steady job requests while spending less than before.",
    name: "Rooted Tree Services",
    title: "Arborist (Canada)",
    img: "https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-male-1.png",
  },
  {
    quote:
      "Running a window cleaning business in Texas, we struggled with poor ad performance — lots of clicks, but no calls. Bixeltek rebuilt our Google Ads strategy, added conversion tracking, and improved targeting. The result: more service calls, higher bookings, and real growth in monthly revenue.",
    name: "Window Cleaning ",
    title: "Window Cleaning (Texas)",
    img: "https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-male-2.png",
  },
];

const StarRating = () => (
  <div className="flex items-center">
    {[...Array(5)].map((_, i) => (
      <svg
        key={i}
        className="w-5 h-5 text-[#FDB241]"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
);

export default function FunnelSEOTest() {
  return (
    <section className="py-12 bg-white sm:py-16 lg:py-20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-3xl max-w-3xl mx-auto md:text-6xl font-bold text-black sm:text-4xl  font-pj">
            What <span className="text-blue-500">our happy clients</span> say
            about us?
          </h2>

          <div className="relative mt-10 md:mt-24">
            <div className="absolute -inset-x-1 inset-y-16 md:-inset-x-2 md:-inset-y-6">
              <div
                className="w-full h-full max-w-5xl mx-auto rounded-3xl opacity-30 blur-lg filter"
                style={{
                  backgroundImage:
                    "linear-gradient(90deg, #66ffb5 -0.55%, #44d0ff 22.86%, #a844ff 48.36%, #ff4d26 73.33%, #fdff80 99.34%)",
                  filter: "blur(40px) brightness(1.3) contrast(1.2)",
                }}
              ></div>
            </div>

            <div className="relative grid max-w-lg grid-cols-1 gap-6 mx-auto md:max-w-none md:grid-cols-3 lg:gap-10">
              {testimonials.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="flex flex-col overflow-hidden shadow-xl"
                >
                  <div className="flex flex-col justify-between flex-1 p-6 bg-white lg:py-8 lg:px-7 rounded-2xl">
                    <div className="flex-1">
                      <StarRating />
                      <blockquote className="flex-1 mt-8">
                        <p className="text-base leading-relaxed text text-gray-900 font-pj">
                          “{item.quote}”
                        </p>
                      </blockquote>
                    </div>

                    <div className="flex items-center mt-8">
                      <img
                        className="flex-shrink-0 object-cover rounded-full w-11 h-11"
                        src={item.img}
                        alt={item.name}
                      />
                      <div className="ml-4 text-left">
                        <p className="text-base font-bold text-gray-900 font-pj">
                          {item.name}
                        </p>
                        <p className="mt-0.5 text-sm font-pj text-gray-600">
                          {item.title}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
