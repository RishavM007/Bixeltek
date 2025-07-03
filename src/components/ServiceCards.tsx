'use client';
import React from 'react';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import { IoMdArrowRoundForward } from "react-icons/io";
import metalogo from '@/assets/9805185_meta_logo_facebook_social media_icon.png'
import reacticon from '@/assets/7423888_react_react native_icon.png';
import googlelogo from '@/assets/2993685_brand_brands_google_logo_logos_icon.png';
import instagramlogo from '@/assets/6929237_instagram_icon.png';
import photoshoplogo from '@/assets/photoshop.webp'
import illustrator from '@/assets/illustrator.webp'
import googleanalyticslogo from '@/assets/icons8-google-analytics-24.png'
import searchengineoptimizationlogo from '@/assets/1000174561.png';
import ytlogo from '@/assets/4375133_logo_youtube_icon.png'
import semrushlogo from '@/assets/4202007_analytics_google_logo_social_social media_icon.png'
import googleadslogo from '@/assets/6929233_google ads_logo_icon.png'
import wordpresslogo from '@/assets/317716_cms_wordpress_blog_blogging_icon.png'

interface CardData {
  title: string;
  link: string;
  img1: StaticImageData;
  img2: StaticImageData;
  description: string;
}

interface CardProps {
  title: string;
  link: string;
  img1: StaticImageData;
  img2: StaticImageData;
  description: string;
  isEven: boolean;
}

const services: CardData[] = [
  {
    title: "Website Development",
    link: "/web-design-services-hyderabad",
    img1: reacticon,
    img2: wordpresslogo,
    description:
      "We build fast, scalable, and visually stunning websites that enhance user experience and drive engagement.",
  },
  {
    title: "Google Ads Management",
    link: "/google-ads-agency-hyderabad",
    img1: googleadslogo,
    img2: ytlogo,
    description:
      "Get the most out of your ad spend with our expert Google Ads management and PPC campaign optimization.",
  },
  {
    title: "Search Engine Optimization",
    link: "/seo-agency-hyderabad",
    img1: googlelogo,
    img2: searchengineoptimizationlogo,
    description:
      "Increase your website’s organic traffic with cutting-edge SEO techniques and best practices.",
  },
  {
    title: "Social Media Marketing",
    link: "/social-media-marketing-agency-hyderabad",
    img1: metalogo,
    img2: instagramlogo,
    description:
      "Boost your brand's presence with highly targeted social media campaigns across multiple platforms.",
  },
  {
    title: "Reporting and Analysis",
    link: "/contact-us",
    img1: semrushlogo, 
    img2: photoshoplogo,
    description:
      "Optimize conversions and cut ad costs with data-driven reporting, A/B testing, and user behavior analysis.",
  },
  {
    title: "Graphic Design Services",
    link: "",
    img1: illustrator,
    img2: photoshoplogo,
    description:
      "Turn vision into visuals with logos, brochures, hoardings & social posts that attract and convert.",
  },
];

const Card: React.FC<CardProps> = ({ title, img1,img2, description, link, isEven }) => {
  const gradient = isEven
    ? "from-[#7028e4] to-white/10"
    : "from-white-10 to-[#7028e4]";

  return (
    <div
      className={`w-full relative p-[2px] rounded-xl bg-gradient-to-b h-full shadow-card-shadow`}
    >
      <div className="bg-black/30 backdrop-blur-xl border border-white/10 py-10 px-6 rounded-[10px] flex flex-col justify-between h-full shadow-xl transition-all duration-300">
        <div>
          <div className=" flex flex-row gap-4 w-fit mb-3">
            <Image src={img1} width={50} height={50} alt={title} />
            <Image src={img2} width={50} height={50} alt={title}/>
          </div>
          <h2 className="text-white/80 text-3xl mt-4 tracking-wide font-sofiasanscondensed font-semibold">
            {title}
          </h2>
          <p className="text-white/60 mt-2 text-sm">{description}</p>
        </div>
        <Link href={link}>
          <div className="text-sm mt-2 font-semibold text-left text-white/70 hover:text-white cursor-pointer transition">
            Read More{" "}
            {/* <span className="text-[#7028e4]">
              <IoMdArrowRoundForward className="inline ml-1" />
            </span> */}
          </div>
        </Link>
      </div>
    </div>
  );
};



const CardList: React.FC = () => {
  return (
    <>
   <div className='relative flex flex-col justify-center items-center h-[130vh] mt-20 mb-24'>
     <div className="absolute inset-0 z-[-2] bg-[url('/aesthetic-background-with-gradient-neon-led-light-effect.jpg')] bg-cover bg-center bg-no-repeat" />

  <div className="absolute top-0 h-60 w-full z-[-1] bg-gradient-to-b from-black via-transparent to-transparent" />
  <div className="absolute bottom-0 h-40 w-full z-[-1] bg-gradient-to-t from-black via-transparent to-transparent" />
    <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold font-sofiasanscondensed  mb-14 text-center text-white/80">Digital Marketing Services in Hyderabad, India</h2>
    <div className="sm:max-w-[90%]  lg:max-w-[75%] mx-auto grid  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4 items-stretch">
      
      {services.map((card, index) => {
        const isEven = (index + 1) % 2 === 0;
        return (
          <Card
            key={index}
            title={card.title}
            link={card.link}
            img1={card.img1}
            img2={card.img2}
            description={card.description}
            isEven={isEven}
          />
        );
      })}
    </div>
      </div>
     </>
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
