"use client";

import React from "react";
import { FaBullseye, FaPaintBrush, FaBullhorn, FaRetweet, FaChartBar } from "react-icons/fa";
import { LuNotebookText } from "react-icons/lu";
import { PiPaintBrushDuotone } from "react-icons/pi";
import { LiaBullhornSolid } from "react-icons/lia";
import { AiOutlineRetweet } from "react-icons/ai";
import { IoBarChartOutline } from "react-icons/io5";


const steps = [
  {
    icon: <LuNotebookText className="text-blue-500 text-4xl mb-4" />,
    title: "Strategy First",
    text: "Define your audience, positioning, and brand voice. This foundation ensures your content connects with the right people and sets up every campaign for impact.",
    button: "Start Your Strategy",
  },
  {
    icon: <PiPaintBrushDuotone className="text-purple-500 text-4xl mb-4" />,
    title: "Creative Engine",
    text: "Design content that blends emotion with intent — scroll-stopping reels, carousels, and ad videos that spark genuine engagement and brand recall.",
    button: "Build Creative Assets",
  },
  {
    icon: <LiaBullhornSolid className="text-pink-500 text-4xl mb-4" />,
    title: "Paid Campaigns",
    text: "We manage Meta, Instagram, TikTok, and LinkedIn ads with precision targeting — ensuring your budget hits real buyers, not random impressions.",
    button: "Launch Paid Campaigns",
  },
  {
    icon: <AiOutlineRetweet className="text-yellow-500 text-4xl mb-4" />,
    title: "Retargeting & Funnels",
    text: "Re-engage visitors who showed interest but didn’t convert — with funnel strategies designed to nurture, retarget, and close the loop effectively.",
    button: "Set Up Retargeting",
  },
  {
    icon: <IoBarChartOutline className="text-green-500 text-4xl mb-4" />,
    title: "Tracking & Reporting",
    text: "Every click, view, and lead is tracked through GA4 and Meta Pixel, giving you clear insights into what drives ROI and where to scale next.",
    button: "View Reports",
  },
];

const SocialMediaCards = () => {
  return (
    <section className="bg-white text-black py-20 px-6 md:px-16 text-center">
      {/* Heading */}
      <h2 className="text-3xl md:text-6xl font-semibold mb-6 leading-tight">
        We Don’t Just Manage Accounts <br />
        <span className="text-blue-500">We Engineer Attention.</span>
      </h2>

      {/* Copy */}
      <p className="text-gray-700 max-w-3xl mx-auto mb-16 leading-relaxed">
        Our framework connects strategy, design, media buying, and analytics to drive measurable
        business outcomes. Every post serves a purpose. Every ad tells a story that converts.
      </p>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {steps.map((step, idx) => (
          <div
            key={idx}
            className="bg-white border border-gray-200 shadow-md rounded-3xl p-8 flex flex-col items-center text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
          >
            {step.icon}
            <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">{step.text}</p>
            <a href="#form">
            <button className="px-6 py-2 mt-6 rounded-full bg-gradient-to-tr shadow-md border-2 border-sky-400 shadow-sky-500 hover:shadow-none bg-blue-500 text-white font-medium hover:bg-blue-600 transition duration-300">
              {step.button}
            </button>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SocialMediaCards;
