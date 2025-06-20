'use client';
import React from 'react';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import { IoMdArrowRoundForward } from "react-icons/io";
import { motion } from "framer-motion";
import reacticon from '@/assets/7423888_react_react native_icon.png';

interface CardData {
  title: string;
  link: string;
  img: StaticImageData;
  description: string;
}

interface CardProps {
  title: string;
  link: string;
  img: StaticImageData;
  description: string;
  isEven: boolean;
}

const services: CardData[] = [
  {
    title: "Website Development",
    link: "/web-design-services-hyderabad",
    img: reacticon,
    description:
      "We build fast, scalable, and visually stunning websites that enhance user experience and drive engagement.",
  },
  {
    title: "Digital Marketing",
    link: "/digitalmarketing",
    img: reacticon,
    description:
      "Our performance-driven marketing strategies ensure maximum reach and higher conversion rates for your business.",
  },
  {
    title: "Google Ads Management",
    link: "/google-ads-agency-hyderabad",
    img: reacticon,
    description:
      "Get the most out of your ad spend with our expert Google Ads management and PPC campaign optimization.",
  },
  {
    title: "SEO Optimization",
    link: "/seo-agency-hyderabad",
    img: reacticon,
    description:
      "Increase your website’s organic traffic with cutting-edge SEO techniques and best practices.",
  },
  {
    title: "Social Media Marketing",
    link: "/social-media-marketing-agency-hyderabad",
    img: reacticon,
    description:
      "Boost your brand's presence with highly targeted social media campaigns across multiple platforms.",
  },
  {
    title: "Reporting and Analysis",
    link: "/contact-us",
    img: reacticon,
    description:
      "Optimize conversions and cut ad costs with data-driven reporting, A/B testing, and user behavior analysis.",
  },
];

const Card: React.FC<CardProps> = ({ title, img, description, link, isEven }) => {
  const gradient = isEven
    ? "from-[#7028e4] to-[#1e1e1e]"
    : "from-[#1e1e1e] to-[#7028e4]";

  return (
    <div
      className={`w-full relative p-[3px] rounded-xl bg-gradient-to-b ${gradient} h-full`}
    >
      <div className="bg-[#1e1e1e] py-10 px-6 rounded-[10px] flex flex-col justify-between h-full">
        <div>
          <div className="mb-3">
            <Image src={img} width={50} height={50} alt={title} />
          </div>
          <h2 className="text-white text-3xl mt-4 tracking-wide font-sofiasanscondensed font-semibold">
            {title}
          </h2>
          <p className="text-white/80 mt-2 text-sm line-clamp-3">{description}</p>
        </div>
        <Link href={link}>
          <div className="text-sm mt-2 font-semibold text-left text-white cursor-pointer hover:text-[#7028e4] transition">
            Read More{" "}
            <span className="text-[#7028e4]">
              <IoMdArrowRoundForward className="inline ml-1" />
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};



const CardList: React.FC = () => {
  return (
    <div className="max-w-[80%] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4 items-stretch">
      {services.map((card, index) => {
        const isEven = (index + 1) % 2 === 0;
        return (
          <Card
            key={index}
            title={card.title}
            link={card.link}
            img={card.img}
            description={card.description}
            isEven={isEven}
          />
        );
      })}
    </div>
  );
};

export default CardList;

// export default function ServiceCards() {

//     return (
//         <div className="w-[80%] mx-auto grid grid-cols-3 justify-center items-center gap-10">
//             {cardData.map((data, index) => {
//                 return (
//                     <div key={index} className="relative">
//                         <div className={index % 2 ? `absolute -inset-[3px] rounded-[0.875rem] bg-gradient-to-b from-[#7028e4] via-[#381275] to-black z-0` : `absolute -inset-[3px] rounded-[0.875rem] bg-gradient-to-t from-[#7028e4] via-[#381275] to-black z-0`}>
//                         </div>
//                         <div className="relative z-10 bg-[#1e1e1e] text-white p-6 rounded-xl overflow-hidden">
//                             <div className="relative flex flex-col justify-left mb-4">
//                                 <div>
//                                     <Image
//                                         src={data.image}
//                                         alt="google"
//                                         width={50}
//                                         height={50}
//                                         className="h-12"
//                                     />
//                                 </div>
//                                 <h2 className="text-lg font-bold mb-2 text-left">{data.title}</h2>
//                                 <p className="text-sm text-left mb-4">
//                                     {data.description}
//                                 </p>
//                                 <div className="text-sm font-semibold text-left text-white cursor-pointer">
//                                     Read More <span className="text-[#7028e4]">→</span>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 )
//             })}

//         </div>
//     );
// }
