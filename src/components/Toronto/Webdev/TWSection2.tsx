"use client";

import { motion, useInView, animate } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const solutions = [
  {
    title: "Modern, Professional Design",
    stat: 100,
    suffix: "%",
    desc: "Websites built to establish trust from the very first click with sleek, modern design principles.",
  },
  {
    title: "Speed & Mobile Optimization",
    stat: 1,
    suffix: "s",
    desc: "Lightning-fast loading and fully responsive layouts that work flawlessly across all devices.",
  },
  {
    title: "SEO-Ready Frameworks",
    stat: 10,
    prefix: "Top ",
    desc: "Structured for higher Google rankings, making it easier for customers to find you online.",
  },
  {
    title: "Conversion-Focused Layouts",
    stat: 3,
    suffix: "X",
    desc: "Pages crafted with proven strategies to maximize leads and sales conversions.",
  },
  {
    title: "Ecommerce Expertise",
    stat: 24,
    suffix: "/7",
    desc: "Seamless online stores with smooth checkout experiences that drive more purchases.",
  },
  {
    title: "Ongoing Support",
    stat: 100,
    suffix: "%",
    desc: "Continuous updates, backups, and optimizations so your site keeps performing long-term.",
  },
];

function Counter({
  target,
  prefix = "",
  suffix = "",
  duration = 2,
}: {
  target: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [value, setValue] = useState(0);

  // detect when in view
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, target, {
        duration,
        ease: "easeOut",
        onUpdate: (v) => setValue(Math.floor(v)),
      });
      return () => controls.stop();
    }
  }, [isInView, target, duration]);

  return (
    <span ref={ref} className="text-4xl font-medium text-blue-400">
      {prefix}
      {value}
      {suffix}
    </span>
  );
}

export default function SolutionSection() {
  return (
    <section className="bg-black text-gray-100 py-10 md:py-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-[90%] lg:max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl md:text-6xl font-bold leading-snug mb-6">
          Web Design That{" "}
          <span className="text-blue-500"><br></br>Fixes What’s Broken</span> and Fuels
          Growth
        </h2>

        {/* Paragraph */}
        <p className="text-gray-300 max-w-3xl mb-12 leading-relaxed">
          Bixeltek builds websites designed to solve the problems businesses
          struggle with most. Instead of focusing only on looks, we create
          websites that are engineered to perform, rank, and convert.
        </p>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 pt-10">
          {solutions.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="border-t border-gray-800 pt-6"
            >
              <h4 className="text-xl text-gray-100 font-inter mb-2">{item.title}</h4>

              {/* Counter */}
              <Counter
                target={item.stat}
                prefix={item.prefix}
                suffix={item.suffix}
              />

              <p className="text-gray-200 font-poppins text-sm leading-relaxed mt-2">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
