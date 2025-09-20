'use client';
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const cards = [
  { id: 1, title: "Increased Online Visibility", content: "Dominate social media platforms, gaining visibility across Hyderabad’s digital landscape.", color: "border-red-500" },
  { id: 2, title: "Higher Audience Engagement", content: "Foster real connections with your target audience through interactive and engaging campaigns.", color: "border-blue-500" },
  { id: 3, title: "Boosted ROI", content: "Efficiently turn social media interactions into measurable business outcomes and increased revenue.", color: "border-yellow-500" },
  { id: 4, title: "SEO-Optimized Strategies", content: "Enhance search rankings with cutting-edge SEO techniques tailored for Hyderabad businesses.", color: "border-green-500" },
  { id: 5, title: "Data-Driven Marketing", content: "Leverage AI-powered analytics to refine strategies and maximize conversion rates.", color: "border-purple-500" },
  { id: 6, title: "Brand Authority & Trust", content: "Establish your business as an industry leader with compelling content and reputation management.", color: "border-orange-500" }
];

export default function StackedCarousel() {
  const [stackedIndex, setStackedIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // ✅ detect screen size after mount
  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth < 768);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  const nextCard = () => {
    if (stackedIndex < cards.length - 1) setStackedIndex(stackedIndex + 1);
  };

  const prevCard = () => {
    if (stackedIndex > 0) setStackedIndex(stackedIndex - 1);
  };

  return (
    <div className="relative flex flex-col rounded-tr-[70px] rounded-tl-[70px] overflow-hidden items-start w-full px-3 md:px-20 py-28 bg-white">
      <h2 className="text-5xl font-sofiasanscondensed font-bold mb-4">
        Results Driven by <span className="text-purple-600">Bixeltek</span>
      </h2>
      <p className="text-lg font-poppins mb-12">Partnering with Bixeltek ensures:</p>

      <div className="relative w-full max-w-4xl h-64">
        {cards.map((card, index) => (
          <motion.div
            key={card.id}
            initial={{ x: 0, scale: 1, zIndex: 1 }}
            animate={{
              x: index === 0
                ? 0
                : stackedIndex >= index
                  ? (isMobile ? 0 : 30 * index)
                  : (index - stackedIndex) * (isMobile ? 350 : (430 + index * 2)),
              scale: 1,
              zIndex: stackedIndex >= index ? 10 + index : index,
            }}
            transition={{ duration: 0.5, type: "spring", stiffness: 80 }}
            className={`absolute w-[350px] md:w-96 h-64 py-6 pl-7 md:pl-12 pr-4 bg-white shadow-lg rounded-lg border-2 ${card.color} flex flex-col justify-center`}
          >
            <h3 className="text-2xl font-sofiasanscondensed font-bold">{card.title}</h3>
            <p className="mt-2 text-gray-900">{card.content}</p>
          </motion.div>
        ))}
      </div>

      <div className="flex gap-4 mt-10">
        <button
          className="p-3 bg-gray-800 text-white rounded-lg disabled:opacity-50"
          onClick={prevCard}
          disabled={stackedIndex === 0}
        >
          <FaArrowLeft />
        </button>
        <button
          className="p-3 bg-black text-white rounded-lg disabled:opacity-50"
          onClick={nextCard}
          disabled={stackedIndex === cards.length - 1}
        >
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
}
