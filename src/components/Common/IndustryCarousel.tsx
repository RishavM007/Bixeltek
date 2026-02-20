'use client'
import Image, { StaticImageData } from "next/image";
import { useState } from "react";
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight } from "lucide-react";

type ThemeType = 'blue' | 'green' | 'red' | 'yellow' | 'purple';

const themeConfig: Record<ThemeType, any> = {
  blue: {
    button: 'bg-blue-800 hover:bg-blue-600',
    dotActive: 'bg-blue-600',
  },
  green: {
    button: 'bg-green-700 hover:bg-green-500',
    dotActive: 'bg-green-600',
  },
  red: {
    button: 'bg-red-700 hover:bg-red-500',
    dotActive: 'bg-red-600',
  },
  yellow: {
    button: 'bg-yellow-500 hover:bg-yellow-400',
    dotActive: 'bg-yellow-500',
  },
  purple: {
    button: 'bg-purple-700 hover:bg-purple-500',
    dotActive: 'bg-purple-600',
  },
};


interface IndustryCard {
  id: string;
  img: StaticImageData;
  label: string;
  text: string;
  description: string;
}

interface DynamicIndustrySectionProps {
  heading: React.ReactNode;
  description?: string;
  industries: IndustryCard[];

  backgroundColor?: string;  
  textColor?: string;        

  theme?: ThemeType;
}


export default function DynamicIndustrySection({
  heading,
  description,
  industries,
  backgroundColor = 'bg-white',
  textColor,
  theme = 'blue',
}: DynamicIndustrySectionProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const bg = backgroundColor || 'bg-white';

  const totalCards = industries.length;

  const currentTheme = themeConfig[theme];

  const computedTextColor =
    textColor ||
    (backgroundColor.includes('black')
      ? 'text-white'
      : 'text-black');

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % totalCards);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev - 1 + totalCards) % totalCards);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const getCardPosition = (index: number) => {
    const position = index - currentIndex;

    let normalizedPos = position;
    if (normalizedPos < -2) normalizedPos += totalCards;
    if (normalizedPos > 2) normalizedPos -= totalCards;

    if (Math.abs(normalizedPos) > 2) {
      return {
        transform: 'translateX(0px) rotateY(0deg) scale(0.8)',
        opacity: 0,
        zIndex: 0,
        pointerEvents: 'none' as const,
      };
    }

    if (normalizedPos === 0) {
      return {
        transform: 'translateX(0px) rotateY(0deg) scale(1)',
        opacity: 1,
        zIndex: 10,
      };
    }

    return {
      transform: `translateX(${normalizedPos * 320}px) rotateY(${normalizedPos * 15}deg) scale(0.85)`,
      opacity: 0.7,
      zIndex: 5 - Math.abs(normalizedPos),
    };
  };

  return (
    <section className={`py-20 overflow-hidden ${backgroundColor}`}>
      
      {/* Heading */}
      <div className={`text-center px-6 pb-10 ${computedTextColor}`}>
        <h1 className="text-3xl md:text-6xl xl:text-6xl font-bold mb-2">
          {heading}
        </h1>

        {description && (
          <p className="text-base md:text-lg max-w-2xl mx-auto">
            {description}
          </p>
        )}
      </div>

      {/* 3D Carousel */}
      <div className="relative w-full h-[500px] flex items-center justify-center">
        <div style={{ perspective: '1200px' }} className="relative w-full h-full flex items-center justify-center">
          {industries.map((card, index) => {
            const style = getCardPosition(index);
            const isCenter = index === currentIndex;

            return (
              <motion.div
                key={card.id}
                className="absolute w-[320px] h-[420px] rounded-xl overflow-hidden"
                animate={style}
                transition={{ duration: 0.5 }}
              >
                <div className="relative w-full h-full group">
                  <Image
                    src={card.img}
                    alt={card.label}
                    fill
                    className="object-cover"
                  />

                  <div className={`absolute inset-0 bg-black/5 z-10 transition ${
                    isCenter ? 'bg-black/5 group-hover:bg-black/20' : 'bg-black/50'
                  }`} />

                  <div className={`absolute bottom-0 left-0 w-full z-20 p-6 text-white ${backgroundColor.includes('white')? "bg-gradient-to-t from-black/95 via-black/70 to-transparent":""}`}>
                    <h3 className="text-2xl font-bold mb-3">
                      {card.text}
                    </h3>
                    <p className="text-sm">
                      {card.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Controls */}
      <div className="flex justify-center mt-10">
        <button
          className={`${currentTheme.button} text-white p-3 rounded-full mr-4 transition`}
          onClick={handlePrev}
          disabled={isAnimating}
        >
          <ArrowLeft size={20} />
        </button>

        <button
          className={`${currentTheme.button} text-white p-3 rounded-full transition`}
          onClick={handleNext}
          disabled={isAnimating}
        >
          <ArrowRight size={20} />
        </button>
      </div>

      {/* Dots */}
      <div className="flex justify-center mt-6 space-x-2">
        {industries.map((_, index) => (
          <button
            key={index}
            className={`w-6 h-1 ${
              currentIndex === index
                ? currentTheme.dotActive
                : 'bg-gray-300'
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </section>
  );
}
