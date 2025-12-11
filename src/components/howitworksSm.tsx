'use client';
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FaRegLightbulb, FaCogs, FaChartLine, FaUserTie } from "react-icons/fa";

const steps = [
  {
    id: 1,
    title: "Consultation & Strategic Planning",
    description: "Understanding your business goals and the unique challenges of Hyderabad’s market to craft a comprehensive social media strategy.",
    icon: <FaRegLightbulb />,
  },
  {
    id: 2,
    title: "Customized Campaign Development",
    description: "Creating targeted social media campaigns utilizing Instagram ads, Facebook ads, LinkedIn, Twitter, and beyond.",
    icon: <FaUserTie />,
  },
  {
    id: 3,
    title: "Implementation & Active Management",
    description: "Continuous oversight of campaigns by our expert team ensures optimal performance, growth, and engagement.",
    icon: <FaCogs />,
  },
  {
    id: 4,
    title: "Analysis & Ongoing Optimization",
    description: "Regular assessment of analytics to refine and enhance social media strategies for sustained success.",
    icon: <FaChartLine />,
  }
];

const HowItWorks = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="pt-10 pb-20 overflow-hidden bg-black">
      <div className="container px-4 mx-auto">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2 px-5 mb-20 lg:mb-0">
              <div className="max-w-md">
                <span className="text-lg font-bold text-purple-600 dark:text-purple-400">How it works</span>
                <h2 className="mt-4 mb-2 text-4xl font-extrabold font-sofiasanscondensed leading-tight text-gray-200">
                  Our Proven Social Media Process for Facebook Ads and Instagram Ads
                </h2>
                <p className="mb-10 text-lg text-gray-400">
                  Optimize your brand&apos;s social media presence with a strategic, data-driven approach tailored for growth and engagement on platforms like Facebook, Instagram, Snapchat, Youtube and Linkedin .
                </p>
                <a
                  className="inline-block px-8 py-3 text-white font-bold bg-purple-600 hover:bg-purple-700 rounded-full shadow-lg transition duration-200"
                  href="#form"
                >
                  Get Started
                </a>
              </div>
            </div>
            <div className="w-full lg:w-1/2 px-5">
              <ul className="flex flex-col justify-center items-center">
                {steps.map((step, index) => (
                  <motion.li
                    key={step.id}
                    initial={{ opacity: 0, x: 100 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                    transition={{ duration: 0.8, delay: index * 0.3 }}
                    className="flex pb-2 mb-8"
                  >
                    <div className="mr-8">
                      <span className="flex justify-center items-center w-14 h-14 bg-purple-600/30 text-lg font-bold rounded-full text-purple-300">
                        {step.icon}
                      </span>
                    </div>
                    <div className="max-w-lg">
                      <h3 className="mb-2 text-lg font-bold text-gray-100">{step.title}</h3>
                      <p className="text-[15px] text-gray-100">{step.description}</p>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
