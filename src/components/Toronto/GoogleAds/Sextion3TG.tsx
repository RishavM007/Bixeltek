// components/CampaignsSection.jsx
import React from "react";
import {
  FaSearch,
  FaRegChartBar,
  FaShoppingBag,
  FaRobot,
  FaMapMarkerAlt,
  FaRedoAlt,
} from "react-icons/fa";

import sideimg from '@/assets/s1.png'
import Image from "next/image";

const campaigns = [
  {
    title: "Search Campaigns",
    description:
      "Capture demand from Toronto customers actively searching for your services or products with highly targeted text ads.",
    icon: <FaSearch size={30} className="text-white" />,
    gradient: "from-purple-400 via-pink-500 to-red-500",
  },
  {
    title: "Display Campaigns",
    description:
      "Increase brand visibility across millions of websites, reaching your ideal audience with visually engaging ads and remarketing.",
    icon: <FaRegChartBar size={30} className="text-white" />,
    gradient: "from-green-400 via-blue-500 to-purple-500",
  },
  {
    title: "Shopping Ads",
    description:
      "Perfect for ecommerce businesses looking to showcase their products directly in Google search results and Google Shopping.",
    icon: <FaShoppingBag size={30} className="text-white" />,
    gradient: "from-yellow-400 via-orange-500 to-red-500",
  },
  {
    title: "Performance Max",
    description:
      "Using Google’s AI-driven campaigns to optimize for conversions across all Google inventory including YouTube, Gmail, Display, and Search.",
    icon: <FaRobot size={30} className="text-white" />,
    gradient: "from-indigo-400 via-purple-500 to-pink-500",
  },
  {
    title: "Local Service Ads",
    description:
      "Specifically designed for service businesses targeting customers searching for local professionals in Toronto.",
    icon: <FaMapMarkerAlt size={30} className="text-white" />,
    gradient: "from-red-400 via-pink-500 to-yellow-400",
  },
  {
    title: "Remarketing Campaigns",
    description:
      "Bring back visitors who showed interest but didn’t convert, with tailored ads that encourage action.",
    icon: <FaRedoAlt size={30} className="text-white" />,
    gradient: "from-blue-400 via-cyan-500 to-teal-500",
  },
];

const CampaignsSection = () => {
  return (
    <section className="py-16 max-w-7xl mx-auto bg-black text-white">
      <div className="container flex flex-col justify-center items-center mx-auto px-6">
        <h2 className="text-6xl max-w-7xl font-bold text-center mb-12">
          Bixeltek Manages <span className="text-blue-500">Every Google Ads Campaign</span> Type for Toronto Businesses
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {campaigns.map((campaign, idx) => (
            <div
              key={idx}
              className={`p-[1px] relative rounded-xl bg-gradient-to-r ${campaign.gradient} hover:scale-105 transition-transform duration-500`}
            >
              <Image src={sideimg} alt="sideimg" className="absolute top-0 right-0 brightness-200"></Image>
              <div className="bg-black py-10 px-6 rounded-xl h-full flex flex-col">
                <div className="mb-4">{campaign.icon}</div>
                <h3 className="text-2xl font-inter font-semibold mb-2">{campaign.title}</h3>
                <p className="text-gray-300 font-poppins text-sm flex-1">{campaign.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CampaignsSection;
