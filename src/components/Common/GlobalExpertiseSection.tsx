import Image, { StaticImageData } from "next/image";
import bgimage from "@/assets/dotted-map-1.webp";
import React from "react";

interface ExpertiseProps {
   heading: React.ReactNode;
   description:string;
   backgroundColor ? : string;  
   footerText?:string
 locations : {
    country: string;
    emoji: string;
    image: string | StaticImageData,
    desc: React.ReactNode;
  }[]
}

const GlobalExpertiseSection = ({
    heading,
    description,
    backgroundColor='bg-black',
    footerText,
    locations}:ExpertiseProps) => {
        const isWhite = backgroundColor.includes('white');
        const cardBase =
  "flex flex-col rounded-2xl py-6 md:p-6 max-w-sm w-full lg:w-[30%] transition-all duration-300";

const cardTheme = isWhite
  ? "bg-white hover:bg-purple-100 shadow-sm"
  : "bg-black/70 hover:bg-neutral-800";
  return (
    <section className={`relative w-full py-20 md:py-24 px-6 md:px-16 ${backgroundColor} overflow-hidden ${
        isWhite ? 'text-black' : 'text-white'
    }`}>
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={bgimage}
          alt="Global background"
          fill
          className="object-contain object-center"
        />
      </div>

      {/* Heading */}
      <div className="relative z-10 max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-6xl font-semibold mb-4">
            {heading}
        </h2>
        <p className={` text-lg ${
            isWhite ? 'text-black' : 'text-gray-300'
        }`}>
            {description}
        </p>
      </div>

      {/* Cards */}
      <div className="relative z-10 flex flex-wrap md:grid md:grid-cols-2 lg:flex lg:flex-wrap justify-center gap-8 max-w-7xl mx-auto">
        {locations.map((loc, idx) => (
          <div
      key={idx}
      className={`${cardBase} ${cardTheme}`}
    >
      <div className="w-full h-48 relative mb-4 rounded-xl overflow-hidden">
        <Image
          src={loc.image}
          alt={loc.country}
          fill
          className="object-cover object-center"
        />
      </div>

      <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
        <span>{loc.emoji}</span> {loc.country}
      </h3>

      <p
        className={`leading-relaxed ${
          isWhite ? "text-gray-900" : "text-gray-300"
        }`}
      >
        {loc.desc}
      </p>
    </div>
        ))}
      </div>

      {/* Footer */}
      <p className={`relative z-10 text-center mt-12 max-w-2xl mx-auto ${
            isWhite ? 'text-black' : 'text-gray-300'
    }`}>
        {footerText}
      </p>
    </section>
  );
};

export default GlobalExpertiseSection;
