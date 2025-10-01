'use client';

import { Search, Monitor, ShoppingCart, Zap, MapPin, Youtube, Compass, Repeat } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

// Placeholder images – replace with your own
import searchImg from "@/assets/seachcamp.webp";
import displayImg from "@/assets/Loom-Google-Display-Blog.webp";
import shoppingImg from "@/assets/google-shopping-reviews-search.webp";
import pmaxImg from "@/assets/Loom-Insights-Google-Performance-Max.webp";
import lsaImg from "@/assets/google-local-service-ads.png";
import youtubeImg from "@/assets/youtube bumper ads.webp";
import discoveryImg from "@/assets/discovery-gif.gif";


const campaigns = [
  {
    id: "search",
    title: "Search Campaigns",
    icon: <Search className="w-8 h-8 text-blue-600" />,
    image: searchImg,
    description:
      "Capture high-intent leads searching for your services in Vancouver. Appear exactly when customers are ready to buy.",
  },
  {
    id: "display",
    title: "Display Campaigns",
    icon: <Monitor className="w-8 h-8 text-purple-600" />,
    image: displayImg,
    description:
      "Build awareness and retarget visitors across millions of websites, keeping your brand top-of-mind.",
  },
  {
    id: "shopping",
    title: "Shopping Ads",
    icon: <ShoppingCart className="w-8 h-8 text-green-600" />,
    image: shoppingImg,
    description:
      "Showcase your products with images, reviews, and prices directly in Google results to attract high-intent buyers.",
  },
  {
    id: "performance-max",
    title: "Performance Max Campaigns",
    icon: <Zap className="w-8 h-8 text-yellow-500" />,
    image: pmaxImg,
    description:
      "Google’s AI-powered campaigns run across Search, Display, YouTube, and Gmail for maximum conversions.",
  },
  {
    id: "lsa",
    title: "Local Service Ads (LSAs)",
    icon: <MapPin className="w-8 h-8 text-red-500" />,
    image: lsaImg,
    description:
      "Pay-per-lead ads with Google’s trust badge, ideal for service providers who want real leads.",
  },
  {
    id: "youtube",
    title: "YouTube Video Ads",
    icon: <Youtube className="w-8 h-8 text-pink-600" />,
    image: youtubeImg,
    description:
      "Tell your brand story on the second-largest search engine in the world, engaging audiences with video.",
  },
  {
    id: "discovery",
    title: "Discovery Campaigns",
    icon: <Compass className="w-8 h-8 text-indigo-600" />,
    image: discoveryImg,
    description:
      "Reach new audiences across Gmail, YouTube Home, and Google Discover with visually compelling ads.",
  },
  {
    id: "remarketing",
    title: "Remarketing",
    icon: <Repeat className="w-8 h-8 text-orange-500" />,
    image: displayImg,
    description:
      "Reconnect with past visitors using dynamic ads until they convert, boosting overall ROI.",
  },
];

export default function GoogleAdsCampaignsVancouver() {
  return (
    <section className="pt-12 md:pt-20 pb-20 bg-black">
      <div className="max-w-[85%] mx-auto px-6">
        {/* Section Header */}
        <h3 className="text-blue-600 text-sm font-semibold uppercase tracking-wide text-center">
          Google Ads Campaigns Tailored to Your Business Goals
        </h3>
        <h2 className="text-3xl md:text-6xl text-white font-bold mt-2 mb-12 text-center ">
          Different businesses need different approaches. <br />{" "}
          <span className="text-blue-500">
            We manage campaigns to ensure your Vancouver business gets results.
          </span>
        </h2>
        <p className="text-gray-100 text-base md:text-lg mb-12 text-center max-w-3xl mx-auto">
          We manage the full range of Google Ads campaign types to give your business the right visibility and ROI.
        </p>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {campaigns.map((campaign) => (
            <motion.div
              key={campaign.id}
              whileHover={{ scale: 1.03 }}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden"
            >
              {/* Image */}
              <Image
                src={campaign.image}
                alt={campaign.title}
                className="w-full h-48 object-cover"
              />

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  {campaign.icon}
                  <h3 className="text-xl font-semibold text-gray-900">{campaign.title}</h3>
                </div>
                <p className="text-gray-600 font-poppins text-sm">{campaign.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Closing Line */}
        <p className="mt-14 text-gray-100 text-lg md:text-xl max-w-3xl mx-auto text-center">
          We don’t just run campaigns — we match campaign types to your business goals and customers for maximum ROI.
        </p>
      </div>
    </section>
  );
}
