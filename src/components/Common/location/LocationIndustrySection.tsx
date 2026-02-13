  'use client';

  import React, { useState } from 'react';
  import Image, { StaticImageData } from 'next/image';
  import { motion } from 'framer-motion';
  import { ArrowLeft, ArrowRight } from 'lucide-react';

  interface IndustryCard {
    id: string;
    img: StaticImageData;
    label: string;
    text: string;
    description: string;
  }

  interface LocatoionIndustriesProps {
    heading: React.ReactNode;
    description?: string;
    industries: IndustryCard[];
    cardWidth?: number;
    visibleCards?: number;
    theme?: 'blue'|'green'
  }

  export default function LocationIndustrySection ({
    heading,
    description,
    industries,
    cardWidth = 450,
    visibleCards = 3,
    theme='blue'
  }: LocatoionIndustriesProps): JSX.Element {
    const [carouselOffset, setCarouselOffset] = useState<number>(0);

    const totalCards = industries.length;
    const containerWidth = cardWidth * visibleCards;
    const maxOffset = 0;
    const minOffset = -(cardWidth * totalCards - containerWidth);

    const handleScroll = (direction: 'left' | 'right'): void => {
      setCarouselOffset((prev) => {
        const newOffset =
          direction === 'left'
            ? Math.min(prev + cardWidth, maxOffset)
            : Math.max(prev - cardWidth, minOffset);
        return newOffset;
      });
    };

    return (
      <section className="px-6 pt-20 mt-10 pb-20 bg-[black] z-10 overflow-hidden">
        {/* Heading */}
        <div className="w-full relative text-center text-white pb-10">
          <h1 className="text-3xl md:text-6xl mx-auto lg:max-w-[70%] font-bold mb-2">
            {heading}
          </h1>

          {description && (<p className="text-[16px] xl:text-lg text-gray-50 max-w-[100%] md:max-w-2xl mx-auto">
            {description}
          </p>)}
        </div>

        {/* Carousel */}
        <div className="carousel-container md:pl-[300px] lg:pl-[500px] relative w-full overflow-hidden">
          <div
            className="carousel flex gap-6 px-8 w-max transform transition-transform duration-500"
            style={{ transform: `translateX(${carouselOffset}px)` }}
          >
            {industries.map(({ id, img, label, text, description }) => (
              <motion.a
                key={id}
                href={`#${id}`}
                className="card relative bg-transparent p-6 rounded-lg group text-center
                min-w-[300px] min-h-[400px]
                lg:min-w-[350px] lg:min-h-[500px]
                xl:min-w-[350px] xl:min-h-[450px]
                overflow-hidden"
                whileHover="hover"
                initial="rest"
                animate="rest"
              >
                {/* Background Image */}
                <Image
                  src={img}
                  alt={label}
                  width={450}
                  height={300}
                  className="absolute top-0 left-0 w-full h-full object-cover z-0 rounded-lg"
                />

                {/* Overlay */}
                <motion.div
                  variants={{
                    rest: { opacity: 0.1 },
                    hover: { opacity: 0.45 },
                  }}
                  transition={{ duration: 0.3 }}
                  className="absolute top-0 left-0 w-full h-full bg-black z-10 rounded-lg"
                />

                {/* Text */}
                <motion.div
                  variants={{
                    rest: { y: 0 },
                    hover: { y: -50 },
                  }}
                  transition={{ duration: 0.4 }}
                  className="absolute bottom-5 px-4 left-0 w-full z-20 rounded-lg py-5 text-white"
                >
                  <h3 className="text-3xl font-sofiasanscondensed text-left font-bold">
                    {text}
                  </h3>

                  <motion.p
                    variants={{
                      rest: { opacity: 0, height: 0 },
                      hover: { opacity: 1, height: 'auto' },
                    }}
                    transition={{ duration: 0.4 }}
                    className="text-sm text-left font-inter mt-2 overflow-hidden"
                  >
                    {description}
                  </motion.p>
                </motion.div>
              </motion.a>
            ))}
          </div>
        </div>

        {/* Controls */}
        <div className="controls flex justify-center mt-10">
          <button
            className={` text-white p-3 rounded-full mr-4 ${
              theme == 'blue'?
              "bg-blue-600": "bg-gradient-to-tr from-green-600 via-green-800 to-green-900"
            }`}
            onClick={() => handleScroll('left')}
          >
            <ArrowLeft size={20} />
          </button>
          <button
            className={` text-white p-3 rounded-full ${
              theme == 'blue'?
              "bg-blue-600": "bg-gradient-to-tr from-green-600 via-green-800 to-green-900"
            }`}
            onClick={() => handleScroll('right')}
          >
            <ArrowRight size={20} />
          </button>
        </div>
      </section>
    );
  }
